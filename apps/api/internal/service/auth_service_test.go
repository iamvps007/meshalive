package service

import (
	"context"
	"database/sql"
	"testing"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
	"golang.org/x/crypto/bcrypt"
)

type mockAuthQ struct {
	user      *repository.GetUserByEmailRow
	createErr error
}

func (m *mockAuthQ) GetUserByEmail(_ context.Context, _ string) (repository.GetUserByEmailRow, error) {
	if m.user == nil {
		return repository.GetUserByEmailRow{}, sql.ErrNoRows
	}
	return *m.user, nil
}
func (m *mockAuthQ) CreateUser(_ context.Context, arg repository.CreateUserParams) (repository.CreateUserRow, error) {
	if m.createErr != nil {
		return repository.CreateUserRow{}, m.createErr
	}
	return repository.CreateUserRow{ID: uuid.New(), Email: arg.Email, Name: arg.Name}, nil
}
func (m *mockAuthQ) CreateWorkspace(_ context.Context, arg repository.CreateWorkspaceParams) (repository.CreateWorkspaceRow, error) {
	return repository.CreateWorkspaceRow{ID: uuid.New(), Name: arg.Name, Slug: arg.Slug, Plan: "free"}, nil
}
func (m *mockAuthQ) AddWorkspaceMember(_ context.Context, _ repository.AddWorkspaceMemberParams) error {
	return nil
}
func (m *mockAuthQ) GetUserByID(_ context.Context, id uuid.UUID) (repository.GetUserByIDRow, error) {
	return repository.GetUserByIDRow{ID: id, Email: "u@e.com", Name: "User"}, nil
}

type mockAuthCache struct {
	tokens map[string]uuid.UUID
}

func (m *mockAuthCache) SetRefreshToken(_ context.Context, hash string, id uuid.UUID) error {
	if m.tokens == nil {
		m.tokens = map[string]uuid.UUID{}
	}
	m.tokens[hash] = id
	return nil
}
func (m *mockAuthCache) GetRefreshToken(_ context.Context, hash string) (uuid.UUID, error) {
	return m.tokens[hash], nil
}
func (m *mockAuthCache) DelRefreshToken(_ context.Context, hash string) error {
	delete(m.tokens, hash)
	return nil
}

func newTestSvc() *AuthService {
	svc := NewAuthService(&mockAuthQ{}, &mockAuthCache{}, "test-secret")
	svc.bcryptCost = bcrypt.MinCost
	return svc
}

func TestRegister(t *testing.T) {
	svc := newTestSvc()
	r, err := svc.Register(context.Background(), "a@b.com", "pass123", "Alice")
	if err != nil || r == nil {
		t.Fatalf("Register err=%v", err)
	}
	if r.AccessToken == "" || r.RefreshToken == "" {
		t.Error("expected tokens")
	}
}

func TestLogin_WrongPassword(t *testing.T) {
	hash, _ := bcrypt.GenerateFromPassword([]byte("correct"), bcrypt.MinCost)
	svc := NewAuthService(&mockAuthQ{
		user: &repository.GetUserByEmailRow{
			ID:           uuid.New(),
			Email:        "a@b.com",
			PasswordHash: sql.NullString{String: string(hash), Valid: true},
		},
	}, &mockAuthCache{}, "secret")
	svc.bcryptCost = bcrypt.MinCost
	_, err := svc.Login(context.Background(), "a@b.com", "wrong")
	if err != ErrInvalidCreds {
		t.Fatalf("expected ErrInvalidCreds, got %v", err)
	}
}

func TestLogin_Success(t *testing.T) {
	hash, _ := bcrypt.GenerateFromPassword([]byte("pass123"), bcrypt.MinCost)
	mc := &mockAuthCache{}
	svc := NewAuthService(&mockAuthQ{
		user: &repository.GetUserByEmailRow{
			ID:           uuid.New(),
			Email:        "a@b.com",
			PasswordHash: sql.NullString{String: string(hash), Valid: true},
		},
	}, mc, "secret")
	svc.bcryptCost = bcrypt.MinCost
	r, err := svc.Login(context.Background(), "a@b.com", "pass123")
	if err != nil || r == nil || r.AccessToken == "" {
		t.Fatalf("Login err=%v", err)
	}
}

func TestRefresh(t *testing.T) {
	mc := &mockAuthCache{}
	svc := newTestSvc()
	svc.cache = mc
	raw, hash, _ := generateRefreshToken()
	mc.SetRefreshToken(context.Background(), hash, uuid.New())
	r, err := svc.Refresh(context.Background(), raw)
	if err != nil || r == nil || r.AccessToken == "" {
		t.Fatalf("Refresh err=%v r=%v", err, r)
	}
}
