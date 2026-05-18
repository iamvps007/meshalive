package service

import (
	"context"
	"crypto/rand"
	"database/sql"
	"encoding/hex"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
)

var (
	ErrLinkNotFound   = errors.New("link not found")
	ErrSlugTaken      = errors.New("slug already taken")
	ErrDomainNotFound = errors.New("domain not found")
)

type linkQuerier interface {
	GetDomainByWorkspace(ctx context.Context, workspaceID uuid.UUID) (repository.GetDomainByWorkspaceRow, error)
	CreateLink(ctx context.Context, arg repository.CreateLinkParams) (repository.CreateLinkRow, error)
	ListLinks(ctx context.Context, arg repository.ListLinksParams) ([]repository.ListLinksRow, error)
	CountLinks(ctx context.Context, arg repository.CountLinksParams) (int64, error)
	GetLinkByID(ctx context.Context, arg repository.GetLinkByIDParams) (repository.GetLinkByIDRow, error)
	UpdateLink(ctx context.Context, arg repository.UpdateLinkParams) (repository.UpdateLinkRow, error)
	SoftDeleteLink(ctx context.Context, arg repository.SoftDeleteLinkParams) error
}

type linkCache interface {
	DelRedirect(ctx context.Context, host, slug string) error
}

type LinkService struct {
	querier linkQuerier
	cache   linkCache
}

func NewLinkService(q linkQuerier, c linkCache) *LinkService {
	return &LinkService{querier: q, cache: c}
}

type CreateLinkInput struct {
	WorkspaceID uuid.UUID
	Slug        string
	Destination string
	Title       string
	Tags        []string
}

type UpdateLinkInput struct {
	ID          uuid.UUID
	WorkspaceID uuid.UUID
	Destination string
	Title       string
	Tags        []string
	ExpiresAt   *time.Time
	ClickLimit  *int32
	Archived    bool
}

type ListLinksInput struct {
	WorkspaceID uuid.UUID
	Archived    bool
	Search      string
	Tag         string
	Page        int32
	PageSize    int32
}

type LinkResult struct {
	ID          uuid.UUID
	WorkspaceID uuid.UUID
	DomainID    uuid.UUID
	Hostname    string
	Slug        string
	Destination string
	Title       string
	Tags        []string
	Archived    bool
	ExpiresAt   sql.NullTime
	ClickLimit  sql.NullInt32
	CreatedAt   time.Time
}

type ListLinksResult struct {
	Links      []LinkResult
	TotalCount int64
}

func (s *LinkService) Create(ctx context.Context, input CreateLinkInput) (*LinkResult, error) {
	domain, err := s.querier.GetDomainByWorkspace(ctx, input.WorkspaceID)
	if err != nil {
		return nil, ErrDomainNotFound
	}

	slug := input.Slug
	if slug == "" {
		slug, err = randomSlug()
		if err != nil {
			return nil, fmt.Errorf("generate slug: %w", err)
		}
	}

	tags := input.Tags
	if tags == nil {
		tags = []string{}
	}

	row, err := s.querier.CreateLink(ctx, repository.CreateLinkParams{
		WorkspaceID: input.WorkspaceID,
		DomainID:    domain.ID,
		Slug:        slug,
		Destination: input.Destination,
		Title:       input.Title,
		Tags:        tags,
	})
	if err != nil {
		if isUniqueViolation(err) {
			return nil, ErrSlugTaken
		}
		return nil, fmt.Errorf("create link: %w", err)
	}

	return &LinkResult{
		ID:          row.ID,
		WorkspaceID: row.WorkspaceID,
		DomainID:    row.DomainID,
		Hostname:    domain.Hostname,
		Slug:        row.Slug,
		Destination: row.Destination,
		Title:       row.Title,
		Tags:        row.Tags,
		Archived:    row.Archived,
		ExpiresAt:   row.ExpiresAt,
		ClickLimit:  row.ClickLimit,
		CreatedAt:   row.CreatedAt,
	}, nil
}

func (s *LinkService) List(ctx context.Context, input ListLinksInput) (*ListLinksResult, error) {
	if input.PageSize <= 0 {
		input.PageSize = 20
	}
	if input.Page <= 0 {
		input.Page = 1
	}
	offset := (input.Page - 1) * input.PageSize

	rows, err := s.querier.ListLinks(ctx, repository.ListLinksParams{
		WorkspaceID: input.WorkspaceID,
		Archived:    input.Archived,
		Column3:     input.Search,
		Column4:     input.Tag,
		Limit:       input.PageSize,
		Offset:      offset,
	})
	if err != nil {
		return nil, fmt.Errorf("list links: %w", err)
	}

	count, err := s.querier.CountLinks(ctx, repository.CountLinksParams{
		WorkspaceID: input.WorkspaceID,
		Archived:    input.Archived,
		Column3:     input.Search,
		Column4:     input.Tag,
	})
	if err != nil {
		return nil, fmt.Errorf("count links: %w", err)
	}

	results := make([]LinkResult, len(rows))
	for i, r := range rows {
		results[i] = LinkResult{
			ID:          r.ID,
			DomainID:    r.DomainID,
			Slug:        r.Slug,
			Destination: r.Destination,
			Title:       r.Title,
			Tags:        r.Tags,
			Archived:    r.Archived,
			ExpiresAt:   r.ExpiresAt,
			ClickLimit:  r.ClickLimit,
			CreatedAt:   r.CreatedAt,
		}
	}

	return &ListLinksResult{Links: results, TotalCount: count}, nil
}

func (s *LinkService) Update(ctx context.Context, input UpdateLinkInput) (*LinkResult, error) {
	existing, err := s.querier.GetLinkByID(ctx, repository.GetLinkByIDParams{
		ID:          input.ID,
		WorkspaceID: input.WorkspaceID,
	})
	if err != nil {
		return nil, ErrLinkNotFound
	}

	domain, err := s.querier.GetDomainByWorkspace(ctx, input.WorkspaceID)
	if err != nil {
		return nil, ErrDomainNotFound
	}

	tags := input.Tags
	if tags == nil {
		tags = existing.Tags
	}

	dest := input.Destination
	if dest == "" {
		dest = existing.Destination
	}

	params := repository.UpdateLinkParams{
		ID:          input.ID,
		WorkspaceID: input.WorkspaceID,
		Destination: dest,
		Title:       input.Title,
		Tags:        tags,
		Archived:    input.Archived,
	}
	if input.ExpiresAt != nil {
		params.ExpiresAt = sql.NullTime{Time: *input.ExpiresAt, Valid: true}
	}
	if input.ClickLimit != nil {
		params.ClickLimit = sql.NullInt32{Int32: *input.ClickLimit, Valid: true}
	}

	row, err := s.querier.UpdateLink(ctx, params)
	if err != nil {
		return nil, fmt.Errorf("update link: %w", err)
	}

	_ = s.cache.DelRedirect(ctx, domain.Hostname, existing.Slug)

	return &LinkResult{
		ID:          row.ID,
		WorkspaceID: row.WorkspaceID,
		DomainID:    row.DomainID,
		Hostname:    domain.Hostname,
		Slug:        row.Slug,
		Destination: row.Destination,
		Title:       row.Title,
		Tags:        row.Tags,
		Archived:    row.Archived,
		ExpiresAt:   row.ExpiresAt,
		ClickLimit:  row.ClickLimit,
		CreatedAt:   row.CreatedAt,
	}, nil
}

func (s *LinkService) Delete(ctx context.Context, id, workspaceID uuid.UUID) error {
	existing, err := s.querier.GetLinkByID(ctx, repository.GetLinkByIDParams{
		ID:          id,
		WorkspaceID: workspaceID,
	})
	if err != nil {
		return ErrLinkNotFound
	}

	domain, err := s.querier.GetDomainByWorkspace(ctx, workspaceID)
	if err != nil {
		return ErrDomainNotFound
	}

	if err := s.querier.SoftDeleteLink(ctx, repository.SoftDeleteLinkParams{
		ID:          id,
		WorkspaceID: workspaceID,
	}); err != nil {
		return fmt.Errorf("delete link: %w", err)
	}

	_ = s.cache.DelRedirect(ctx, domain.Hostname, existing.Slug)
	return nil
}

func randomSlug() (string, error) {
	b := make([]byte, 4)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}

func isUniqueViolation(err error) bool {
	if err == nil {
		return false
	}
	// pq.Error has a Get method that returns field values by byte key.
	// 'C' is the SQLSTATE code; 23505 = unique_violation.
	type coder interface {
		Get(byte) string
	}
	if c, ok := err.(coder); ok {
		code := c.Get('C')
		return code == "23505"
	}
	msg := err.Error()
	return containsStr(msg, "duplicate key") || containsStr(msg, "unique constraint")
}

func containsStr(s, sub string) bool {
	for i := 0; i <= len(s)-len(sub); i++ {
		if s[i:i+len(sub)] == sub {
			return true
		}
	}
	return false
}
