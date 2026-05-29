package service

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"regexp"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
)

// Sentinel errors returned by BioService methods.
var (
	ErrBioPageNotFound = errors.New("bio page not found")
	ErrBioSlugTaken    = errors.New("slug already taken")
)

// slugRe allows lowercase letters, digits, and hyphens; 3–50 characters.
var slugRe = regexp.MustCompile(`^[a-z0-9][a-z0-9\-]{1,48}[a-z0-9]$`)

// bioQuerier is the subset of repository.Queries consumed by BioService.
// Using an interface keeps the service independently testable.
type bioQuerier interface {
	CreateBioPage(ctx context.Context, arg repository.CreateBioPageParams) (repository.BioPage, error)
	GetBioPageByID(ctx context.Context, id, workspaceID uuid.UUID) (repository.BioPage, error)
	GetBioPageBySlug(ctx context.Context, slug string) (repository.BioPage, error)
	ListBioPages(ctx context.Context, workspaceID uuid.UUID) ([]repository.BioPage, error)
	UpdateBioPage(ctx context.Context, arg repository.UpdateBioPageParams) (repository.BioPage, error)
	DeleteBioPage(ctx context.Context, id, workspaceID uuid.UUID) error
}

// BioService contains the business logic for bio pages.
type BioService struct {
	querier bioQuerier
}

// NewBioService constructs a BioService backed by the provided querier.
func NewBioService(q bioQuerier) *BioService {
	return &BioService{querier: q}
}

// Create validates the slug and inserts a new bio page.
// Returns ErrBioSlugTaken if the slug is already in use.
func (s *BioService) Create(
	ctx context.Context,
	workspaceID uuid.UUID,
	slug, title string,
	config json.RawMessage,
) (*repository.BioPage, error) {
	if err := validateSlug(slug); err != nil {
		return nil, err
	}

	// Supply a valid default config when none is provided.
	if len(config) == 0 || string(config) == "null" {
		config = defaultConfig()
	}

	page, err := s.querier.CreateBioPage(ctx, repository.CreateBioPageParams{
		WorkspaceID: workspaceID,
		Slug:        slug,
		Title:       title,
		Config:      config,
	})
	if err != nil {
		if isUniqueViolation(err) {
			return nil, ErrBioSlugTaken
		}
		return nil, err
	}
	return &page, nil
}

// GetByID returns a bio page owned by the given workspace or ErrBioPageNotFound.
func (s *BioService) GetByID(ctx context.Context, id, workspaceID uuid.UUID) (*repository.BioPage, error) {
	page, err := s.querier.GetBioPageByID(ctx, id, workspaceID)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, ErrBioPageNotFound
		}
		return nil, err
	}
	return &page, nil
}

// GetPublicPage returns a published bio page by slug. Unpublished pages are
// treated as not found to avoid information leakage.
func (s *BioService) GetPublicPage(ctx context.Context, slug string) (*repository.BioPage, error) {
	page, err := s.querier.GetBioPageBySlug(ctx, slug)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, ErrBioPageNotFound
		}
		return nil, err
	}
	return &page, nil
}

// List returns all bio pages for a workspace, newest first.
func (s *BioService) List(ctx context.Context, workspaceID uuid.UUID) ([]repository.BioPage, error) {
	pages, err := s.querier.ListBioPages(ctx, workspaceID)
	if err != nil {
		return nil, err
	}
	// Return an empty slice rather than nil so JSON serialises as [].
	if pages == nil {
		pages = []repository.BioPage{}
	}
	return pages, nil
}

// Update performs a full replacement of all mutable fields on a bio page.
// Returns ErrBioPageNotFound if the page does not belong to the workspace, and
// ErrBioSlugTaken if the new slug conflicts with another page.
func (s *BioService) Update(
	ctx context.Context,
	id, workspaceID uuid.UUID,
	slug, title string,
	config json.RawMessage,
	published bool,
) (*repository.BioPage, error) {
	if err := validateSlug(slug); err != nil {
		return nil, err
	}

	if len(config) == 0 || string(config) == "null" {
		config = defaultConfig()
	}

	page, err := s.querier.UpdateBioPage(ctx, repository.UpdateBioPageParams{
		ID:          id,
		WorkspaceID: workspaceID,
		Slug:        slug,
		Title:       title,
		Config:      config,
		Published:   published,
	})
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, ErrBioPageNotFound
		}
		if isUniqueViolation(err) {
			return nil, ErrBioSlugTaken
		}
		return nil, err
	}
	return &page, nil
}

// Delete removes a bio page scoped to the workspace. The operation is
// idempotent — deleting a non-existent page returns nil.
func (s *BioService) Delete(ctx context.Context, id, workspaceID uuid.UUID) error {
	return s.querier.DeleteBioPage(ctx, id, workspaceID)
}

// validateSlug returns an error if slug doesn't match the allowed pattern.
// Rules: lowercase alphanumeric + hyphens, 3–50 chars, no leading/trailing hyphen.
func validateSlug(slug string) error {
	if !slugRe.MatchString(slug) {
		return errors.New("slug must be 3–50 characters and contain only lowercase letters, digits, and hyphens (no leading/trailing hyphens)")
	}
	return nil
}


func containsCode23505(msg string) bool {
	return len(msg) >= 5 && (msg[:5] == "23505" ||
		// pq driver wraps it as: ERROR: duplicate key value ... (SQLSTATE 23505)
		contains(msg, "23505"))
}

func contains(s, sub string) bool {
	return len(s) >= len(sub) && (s == sub || len(s) > 0 && indexString(s, sub) >= 0)
}

func indexString(s, sub string) int {
	for i := 0; i <= len(s)-len(sub); i++ {
		if s[i:i+len(sub)] == sub {
			return i
		}
	}
	return -1
}

// defaultConfig returns the default bio page config JSON.
func defaultConfig() json.RawMessage {
	return json.RawMessage(`{"blocks":[],"theme":{"background":"#0a0a0a","foreground":"#f0f0f0","primary":"#7553FF","fontFamily":"Inter","borderRadius":12,"maxWidth":640}}`)
}
