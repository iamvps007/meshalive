package repository

import (
	"context"
	"database/sql"
	"encoding/json"
	"time"

	"github.com/google/uuid"
)

// BioPage mirrors the bio_pages table row.
type BioPage struct {
	ID          uuid.UUID
	WorkspaceID uuid.UUID
	Slug        string
	Title       string
	Config      json.RawMessage // raw JSONB column
	Published   bool
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

// CreateBioPageParams holds the fields required to insert a new bio page.
type CreateBioPageParams struct {
	WorkspaceID uuid.UUID
	Slug        string
	Title       string
	Config      json.RawMessage
}

// UpdateBioPageParams holds all mutable fields for a bio page update.
type UpdateBioPageParams struct {
	ID          uuid.UUID
	WorkspaceID uuid.UUID
	Slug        string
	Title       string
	Config      json.RawMessage
	Published   bool
}

const createBioPage = `
INSERT INTO bio_pages (workspace_id, slug, title, config)
VALUES ($1, $2, $3, $4)
RETURNING id, workspace_id, slug, title, config, published, created_at, updated_at
`

// CreateBioPage inserts a new bio page and returns the created row.
func (q *Queries) CreateBioPage(ctx context.Context, arg CreateBioPageParams) (BioPage, error) {
	row := q.db.QueryRowContext(ctx, createBioPage,
		arg.WorkspaceID,
		arg.Slug,
		arg.Title,
		arg.Config,
	)
	return scanBioPage(row)
}

const getBioPageByID = `
SELECT id, workspace_id, slug, title, config, published, created_at, updated_at
FROM bio_pages
WHERE id = $1 AND workspace_id = $2
`

// GetBioPageByID returns a single bio page scoped to the given workspace.
func (q *Queries) GetBioPageByID(ctx context.Context, id, workspaceID uuid.UUID) (BioPage, error) {
	row := q.db.QueryRowContext(ctx, getBioPageByID, id, workspaceID)
	return scanBioPage(row)
}

const getBioPageBySlug = `
SELECT id, workspace_id, slug, title, config, published, created_at, updated_at
FROM bio_pages
WHERE slug = $1 AND published = true
`

// GetBioPageBySlug returns a published bio page by its slug. Used for the
// public page endpoint — only published pages are visible.
func (q *Queries) GetBioPageBySlug(ctx context.Context, slug string) (BioPage, error) {
	row := q.db.QueryRowContext(ctx, getBioPageBySlug, slug)
	return scanBioPage(row)
}

const listBioPages = `
SELECT id, workspace_id, slug, title, config, published, created_at, updated_at
FROM bio_pages
WHERE workspace_id = $1
ORDER BY created_at DESC
`

// ListBioPages returns all bio pages for a workspace, newest first.
func (q *Queries) ListBioPages(ctx context.Context, workspaceID uuid.UUID) ([]BioPage, error) {
	rows, err := q.db.QueryContext(ctx, listBioPages, workspaceID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var pages []BioPage
	for rows.Next() {
		var i BioPage
		if err := rows.Scan(
			&i.ID,
			&i.WorkspaceID,
			&i.Slug,
			&i.Title,
			&i.Config,
			&i.Published,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		pages = append(pages, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return pages, nil
}

const updateBioPage = `
UPDATE bio_pages
SET slug = $3, title = $4, config = $5, published = $6, updated_at = now()
WHERE id = $1 AND workspace_id = $2
RETURNING id, workspace_id, slug, title, config, published, created_at, updated_at
`

// UpdateBioPage performs a full field replacement and returns the updated row.
func (q *Queries) UpdateBioPage(ctx context.Context, arg UpdateBioPageParams) (BioPage, error) {
	row := q.db.QueryRowContext(ctx, updateBioPage,
		arg.ID,
		arg.WorkspaceID,
		arg.Slug,
		arg.Title,
		arg.Config,
		arg.Published,
	)
	return scanBioPage(row)
}

const deleteBioPage = `
DELETE FROM bio_pages WHERE id = $1 AND workspace_id = $2
`

// DeleteBioPage removes a bio page. Returns nil if the row did not exist (idempotent).
func (q *Queries) DeleteBioPage(ctx context.Context, id, workspaceID uuid.UUID) error {
	_, err := q.db.ExecContext(ctx, deleteBioPage, id, workspaceID)
	return err
}

// scanBioPage scans a single QueryRowContext result into a BioPage.
func scanBioPage(row *sql.Row) (BioPage, error) {
	var i BioPage
	err := row.Scan(
		&i.ID,
		&i.WorkspaceID,
		&i.Slug,
		&i.Title,
		&i.Config,
		&i.Published,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}
