-- name: ListDomains :many
SELECT id, hostname, is_primary, status, verified_at
FROM domains
WHERE workspace_id = $1
ORDER BY id;

-- name: CreateDomain :one
INSERT INTO domains (workspace_id, hostname, status)
VALUES ($1, $2, 'pending')
RETURNING id, hostname, is_primary, status, verified_at;

-- name: DeleteDomain :exec
DELETE FROM domains WHERE id = $1 AND workspace_id = $2;
