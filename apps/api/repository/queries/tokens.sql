-- name: GetAPITokenByHash :one
SELECT id, workspace_id FROM api_tokens WHERE token_hash = $1;

-- name: UpdateAPITokenLastUsed :exec
UPDATE api_tokens SET last_used_at = NOW() WHERE id = $1;

-- name: CreateAPIToken :one
INSERT INTO api_tokens (workspace_id, name, token_hash, prefix)
VALUES ($1, $2, $3, $4)
RETURNING id, name, prefix, created_at;

-- name: ListAPITokens :many
SELECT id, name, prefix, last_used_at, created_at
FROM api_tokens
WHERE workspace_id = $1
ORDER BY created_at DESC;

-- name: DeleteAPIToken :exec
DELETE FROM api_tokens WHERE id = $1 AND workspace_id = $2;
