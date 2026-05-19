package service

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"errors"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
)

type tokenQuerier interface {
	CreateAPIToken(ctx context.Context, arg repository.CreateAPITokenParams) (repository.CreateAPITokenRow, error)
	ListAPITokens(ctx context.Context, workspaceID uuid.UUID) ([]repository.ListAPITokensRow, error)
	DeleteAPIToken(ctx context.Context, arg repository.DeleteAPITokenParams) error
}

type TokenResult struct {
	ID         uuid.UUID `json:"id"`
	Name       string    `json:"name"`
	Prefix     string    `json:"prefix"`
	LastUsedAt *string   `json:"last_used_at"`
	CreatedAt  string    `json:"created_at"`
	RawToken   string    `json:"raw_token,omitempty"`
}

type TokenService struct {
	querier tokenQuerier
}

func NewTokenService(q tokenQuerier) *TokenService {
	return &TokenService{querier: q}
}

func generateAPIToken() (rawToken, prefix, tokenHash string, err error) {
	b := make([]byte, 32)
	if _, err = rand.Read(b); err != nil {
		return
	}
	rawHex := hex.EncodeToString(b)
	rawToken = "mshl_" + rawHex
	prefix = "mshl_" + rawHex[:8]
	h := sha256.Sum256(b)
	tokenHash = hex.EncodeToString(h[:])
	return
}

func (s *TokenService) Create(ctx context.Context, workspaceID uuid.UUID, name string) (*TokenResult, error) {
	if name == "" {
		return nil, errors.New("token name is required")
	}
	rawToken, prefix, tokenHash, err := generateAPIToken()
	if err != nil {
		return nil, err
	}
	row, err := s.querier.CreateAPIToken(ctx, repository.CreateAPITokenParams{
		WorkspaceID: workspaceID, Name: name, TokenHash: tokenHash, Prefix: prefix,
	})
	if err != nil {
		return nil, err
	}
	return &TokenResult{
		ID: row.ID, Name: row.Name, Prefix: row.Prefix,
		CreatedAt: row.CreatedAt.Format("2006-01-02T15:04:05Z"),
		RawToken:  rawToken,
	}, nil
}

func (s *TokenService) List(ctx context.Context, workspaceID uuid.UUID) ([]TokenResult, error) {
	rows, err := s.querier.ListAPITokens(ctx, workspaceID)
	if err != nil {
		return nil, err
	}
	results := make([]TokenResult, 0, len(rows))
	for _, r := range rows {
		t := TokenResult{
			ID: r.ID, Name: r.Name, Prefix: r.Prefix,
			CreatedAt: r.CreatedAt.Format("2006-01-02T15:04:05Z"),
		}
		if r.LastUsedAt.Valid {
			s := r.LastUsedAt.Time.Format("2006-01-02T15:04:05Z")
			t.LastUsedAt = &s
		}
		results = append(results, t)
	}
	return results, nil
}

func (s *TokenService) Delete(ctx context.Context, workspaceID, tokenID uuid.UUID) error {
	return s.querier.DeleteAPIToken(ctx, repository.DeleteAPITokenParams{ID: tokenID, WorkspaceID: workspaceID})
}
