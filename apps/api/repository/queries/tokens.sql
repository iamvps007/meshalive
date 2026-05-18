-- name: GetAPITokenByHash :one
SELECT id, workspace_id FROM api_tokens WHERE token_hash = $1;

-- name: UpdateAPITokenLastUsed :exec
UPDATE api_tokens SET last_used_at = NOW() WHERE id = $1;
