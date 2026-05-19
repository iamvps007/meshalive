-- name: GetWorkspace :one
SELECT id, name, slug, plan, billing_email, currency
FROM workspaces WHERE id = $1;

-- name: UpdateWorkspace :one
UPDATE workspaces SET
  name          = COALESCE($2, name),
  billing_email = COALESCE($3, billing_email),
  currency      = COALESCE($4, currency)
WHERE id = $1
RETURNING id, name, slug, plan, billing_email, currency;
