-- name: GetUserByEmail :one
SELECT id, email, name, password_hash FROM users WHERE email = $1;

-- name: GetUserByID :one
SELECT id, email, name FROM users WHERE id = $1;

-- name: CreateUser :one
INSERT INTO users (email, name, password_hash)
VALUES ($1, $2, $3)
RETURNING id, email, name;

-- name: CreateWorkspace :one
INSERT INTO workspaces (name, slug, currency)
VALUES ($1, $2, $3)
RETURNING id, name, slug, plan;

-- name: AddWorkspaceMember :exec
INSERT INTO workspace_members (workspace_id, user_id, role)
VALUES ($1, $2, $3);

-- name: GetWorkspaceMember :one
SELECT role FROM workspace_members
WHERE workspace_id = $1 AND user_id = $2;
