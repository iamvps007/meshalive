-- name: GetDomainByWorkspace :one
SELECT id, hostname FROM domains
WHERE (workspace_id = $1 AND status = 'active')
   OR (is_primary = true AND status = 'active')
ORDER BY CASE WHEN workspace_id = $1 THEN 0 ELSE 1 END, is_primary DESC
LIMIT 1;

-- name: CreateLink :one
INSERT INTO links (workspace_id, domain_id, slug, destination, title, tags, created_by, click_limit, expires_at)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING id, workspace_id, domain_id, slug, destination, title, tags, archived, expires_at, click_limit, created_at;

-- name: ListLinks :many
SELECT id, slug, destination, title, tags, archived, expires_at, click_limit, created_at, domain_id
FROM links
WHERE workspace_id = $1
  AND archived = $2
  AND ($3 = '' OR destination ILIKE '%' || $3 || '%' OR title ILIKE '%' || $3 || '%')
  AND ($4 = '' OR $4::text = ANY(tags))
ORDER BY created_at DESC
LIMIT $5 OFFSET $6;

-- name: CountLinks :one
SELECT COUNT(*) FROM links
WHERE workspace_id = $1
  AND archived = $2
  AND ($3 = '' OR destination ILIKE '%' || $3 || '%' OR title ILIKE '%' || $3 || '%')
  AND ($4 = '' OR $4::text = ANY(tags));

-- name: GetLinkByID :one
SELECT id, workspace_id, domain_id, slug, destination, title, tags, archived, expires_at, click_limit, created_at
FROM links WHERE id = $1 AND workspace_id = $2;

-- name: UpdateLink :one
UPDATE links SET
  destination = $3,
  title       = $4,
  tags        = $5,
  expires_at  = $6,
  click_limit = $7,
  archived    = $8
WHERE id = $1 AND workspace_id = $2
RETURNING id, workspace_id, domain_id, slug, destination, title, tags, archived, expires_at, click_limit, created_at;

-- name: SoftDeleteLink :exec
UPDATE links SET archived = true WHERE id = $1 AND workspace_id = $2;
