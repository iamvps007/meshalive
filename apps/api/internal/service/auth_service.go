package service

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
	"golang.org/x/crypto/bcrypt"
)

var (
	ErrEmailTaken      = errors.New("EMAIL_TAKEN")
	ErrInvalidCreds    = errors.New("INVALID_CREDENTIALS")
	ErrInvalidToken    = errors.New("INVALID_TOKEN")
)

type AuthResult struct {
	UserID       uuid.UUID
	Email        string
	Name         string
	WorkspaceID  uuid.UUID
	WorkspaceName string
	WorkspaceSlug string
	WorkspacePlan string
	AccessToken  string
	RefreshToken string
}

type authQuerier interface {
	GetUserByEmail(ctx context.Context, email string) (repository.GetUserByEmailRow, error)
	CreateUser(ctx context.Context, arg repository.CreateUserParams) (repository.CreateUserRow, error)
	CreateWorkspace(ctx context.Context, arg repository.CreateWorkspaceParams) (repository.CreateWorkspaceRow, error)
	AddWorkspaceMember(ctx context.Context, arg repository.AddWorkspaceMemberParams) error
	GetUserByID(ctx context.Context, id uuid.UUID) (repository.GetUserByIDRow, error)
}

type authCacheOps interface {
	SetRefreshToken(ctx context.Context, tokenHash string, userID uuid.UUID) error
	GetRefreshToken(ctx context.Context, tokenHash string) (uuid.UUID, error)
	DelRefreshToken(ctx context.Context, tokenHash string) error
}

type AuthService struct {
	querier    authQuerier
	cache      authCacheOps
	jwtSecret  string
	bcryptCost int
}

func NewAuthService(q authQuerier, c authCacheOps, jwtSecret string) *AuthService {
	return &AuthService{querier: q, cache: c, jwtSecret: jwtSecret, bcryptCost: bcrypt.DefaultCost}
}

func (s *AuthService) Register(ctx context.Context, email, password, name string) (*AuthResult, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), s.bcryptCost)
	if err != nil {
		return nil, err
	}

	user, err := s.querier.CreateUser(ctx, repository.CreateUserParams{
		Email:        strings.ToLower(strings.TrimSpace(email)),
		Name:         strings.TrimSpace(name),
		PasswordHash: sql.NullString{String: string(hash), Valid: true},
	})
	if err != nil {
		if strings.Contains(err.Error(), "unique") || strings.Contains(err.Error(), "duplicate") {
			return nil, ErrEmailTaken
		}
		return nil, err
	}

	ws, err := s.querier.CreateWorkspace(ctx, repository.CreateWorkspaceParams{
		Name:     name + "'s Workspace",
		Slug:     makeWorkspaceSlug(email),
		Currency: "USD",
	})
	if err != nil {
		return nil, err
	}

	if err := s.querier.AddWorkspaceMember(ctx, repository.AddWorkspaceMemberParams{
		WorkspaceID: ws.ID,
		UserID:      user.ID,
		Role:        "owner",
	}); err != nil {
		return nil, err
	}

	return s.issueTokens(ctx, user.ID, user.Email, user.Name, ws.ID, ws.Name, ws.Slug, ws.Plan)
}

func (s *AuthService) Login(ctx context.Context, email, password string) (*AuthResult, error) {
	row, err := s.querier.GetUserByEmail(ctx, strings.ToLower(strings.TrimSpace(email)))
	if err == sql.ErrNoRows {
		return nil, ErrInvalidCreds
	}
	if err != nil {
		return nil, err
	}
	if !row.PasswordHash.Valid {
		return nil, ErrInvalidCreds
	}
	if err := bcrypt.CompareHashAndPassword([]byte(row.PasswordHash.String), []byte(password)); err != nil {
		return nil, ErrInvalidCreds
	}
	// For login we return user info but no workspace yet — frontend will call /v1/workspaces to pick one.
	// For simplicity at MVP, we return zero workspace info and let the frontend handle workspace selection.
	return s.issueTokens(ctx, row.ID, row.Email, row.Name, uuid.Nil, "", "", "")
}

func (s *AuthService) Refresh(ctx context.Context, rawToken string) (*AuthResult, error) {
	hash := hashToken(rawToken)
	userID, err := s.cache.GetRefreshToken(ctx, hash)
	if err != nil {
		return nil, err
	}
	if userID == uuid.Nil {
		return nil, ErrInvalidToken
	}

	// Token rotation: delete old, issue new
	if err := s.cache.DelRefreshToken(ctx, hash); err != nil {
		return nil, err
	}

	user, err := s.querier.GetUserByID(ctx, userID)
	if err != nil {
		return nil, err
	}

	return s.issueTokens(ctx, user.ID, user.Email, user.Name, uuid.Nil, "", "", "")
}

func (s *AuthService) Logout(ctx context.Context, rawToken string) error {
	return s.cache.DelRefreshToken(ctx, hashToken(rawToken))
}

func (s *AuthService) issueTokens(ctx context.Context, userID uuid.UUID, email, name string, workspaceID uuid.UUID, wsName, wsSlug, wsPlan string) (*AuthResult, error) {
	accessToken, err := s.createAccessToken(userID)
	if err != nil {
		return nil, err
	}

	rawRefresh, hashRefresh, err := generateRefreshToken()
	if err != nil {
		return nil, err
	}
	if err := s.cache.SetRefreshToken(ctx, hashRefresh, userID); err != nil {
		return nil, err
	}

	return &AuthResult{
		UserID:        userID,
		Email:         email,
		Name:          name,
		WorkspaceID:   workspaceID,
		WorkspaceName: wsName,
		WorkspaceSlug: wsSlug,
		WorkspacePlan: wsPlan,
		AccessToken:   accessToken,
		RefreshToken:  rawRefresh,
	}, nil
}

type jwtClaims struct {
	UserID string `json:"user_id"`
	jwt.RegisteredClaims
}

func (s *AuthService) createAccessToken(userID uuid.UUID) (string, error) {
	claims := jwtClaims{
		UserID: userID.String(),
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(15 * time.Minute)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	}
	return jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString([]byte(s.jwtSecret))
}

func ParseAccessToken(secret, tokenStr string) (uuid.UUID, error) {
	token, err := jwt.ParseWithClaims(tokenStr, &jwtClaims{}, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method")
		}
		return []byte(secret), nil
	})
	if err != nil {
		return uuid.Nil, ErrInvalidToken
	}
	claims, ok := token.Claims.(*jwtClaims)
	if !ok || !token.Valid {
		return uuid.Nil, ErrInvalidToken
	}
	return uuid.Parse(claims.UserID)
}

func generateRefreshToken() (raw, hash string, err error) {
	b := make([]byte, 32)
	if _, err = rand.Read(b); err != nil {
		return
	}
	raw = hex.EncodeToString(b)
	h := sha256.Sum256(b)
	hash = hex.EncodeToString(h[:])
	return
}

func hashToken(raw string) string {
	decoded, err := hex.DecodeString(raw)
	if err != nil {
		// fallback: hash the raw string bytes
		h := sha256.Sum256([]byte(raw))
		return hex.EncodeToString(h[:])
	}
	h := sha256.Sum256(decoded)
	return hex.EncodeToString(h[:])
}

func makeWorkspaceSlug(email string) string {
	at := strings.Index(email, "@")
	if at <= 0 {
		at = len(email)
	}
	r := strings.NewReplacer(".", "-", "_", "-", "+", "-")
	base := strings.ToLower(r.Replace(email[:at]))
	b := make([]byte, 3)
	rand.Read(b)
	return fmt.Sprintf("%s-%x", base, b)
}

// HashToken is the exported wrapper for use outside the service package.
func HashToken(raw string) string { return hashToken(raw) }

