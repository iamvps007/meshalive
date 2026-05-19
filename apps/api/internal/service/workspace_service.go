package service

import (
	"context"
	"database/sql"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
)

type workspaceQuerier interface {
	GetWorkspace(ctx context.Context, id uuid.UUID) (repository.GetWorkspaceRow, error)
	UpdateWorkspace(ctx context.Context, arg repository.UpdateWorkspaceParams) (repository.UpdateWorkspaceRow, error)
}

type WorkspaceResult struct {
	ID           uuid.UUID `json:"id"`
	Name         string    `json:"name"`
	Slug         string    `json:"slug"`
	Plan         string    `json:"plan"`
	BillingEmail *string   `json:"billing_email"`
	Currency     string    `json:"currency"`
}

type UpdateWorkspaceInput struct {
	Name         *string `json:"name"`
	BillingEmail *string `json:"billing_email"`
	Currency     *string `json:"currency"`
}

type WorkspaceService struct {
	querier workspaceQuerier
}

func NewWorkspaceService(q workspaceQuerier) *WorkspaceService {
	return &WorkspaceService{querier: q}
}

func rowToWorkspaceResult(row repository.GetWorkspaceRow) *WorkspaceResult {
	r := &WorkspaceResult{ID: row.ID, Name: row.Name, Slug: row.Slug, Plan: row.Plan, Currency: row.Currency}
	if row.BillingEmail.Valid {
		r.BillingEmail = &row.BillingEmail.String
	}
	return r
}

func updateRowToResult(row repository.UpdateWorkspaceRow) *WorkspaceResult {
	r := &WorkspaceResult{ID: row.ID, Name: row.Name, Slug: row.Slug, Plan: row.Plan, Currency: row.Currency}
	if row.BillingEmail.Valid {
		r.BillingEmail = &row.BillingEmail.String
	}
	return r
}

func (s *WorkspaceService) Get(ctx context.Context, workspaceID uuid.UUID) (*WorkspaceResult, error) {
	row, err := s.querier.GetWorkspace(ctx, workspaceID)
	if err != nil {
		return nil, err
	}
	return rowToWorkspaceResult(row), nil
}

func (s *WorkspaceService) Update(ctx context.Context, workspaceID uuid.UUID, in UpdateWorkspaceInput) (*WorkspaceResult, error) {
	// GET current values to fill in unchanged fields (Name/Currency are non-nullable in sqlc params)
	current, err := s.querier.GetWorkspace(ctx, workspaceID)
	if err != nil {
		return nil, err
	}
	params := repository.UpdateWorkspaceParams{
		ID:       workspaceID,
		Name:     current.Name,
		Currency: current.Currency,
	}
	if current.BillingEmail.Valid {
		params.BillingEmail = sql.NullString{String: current.BillingEmail.String, Valid: true}
	}
	if in.Name != nil && *in.Name != "" {
		params.Name = *in.Name
	}
	if in.BillingEmail != nil {
		params.BillingEmail = sql.NullString{String: *in.BillingEmail, Valid: true}
	}
	if in.Currency != nil && *in.Currency != "" {
		params.Currency = *in.Currency
	}
	row, err := s.querier.UpdateWorkspace(ctx, params)
	if err != nil {
		return nil, err
	}
	return updateRowToResult(row), nil
}
