package middleware

import (
	"context"
	"database/sql"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
	"github.com/meshalive/api/repository"
)

type authQuerier interface {
	GetWorkspaceMember(ctx context.Context, arg repository.GetWorkspaceMemberParams) (string, error)
	GetAPITokenByHash(ctx context.Context, tokenHash string) (repository.GetAPITokenByHashRow, error)
	UpdateAPITokenLastUsed(ctx context.Context, id uuid.UUID) error
}

// Auth validates Bearer token (JWT or mshl_ API token) and sets user_id + workspace_id in ctx locals.
func Auth(jwtSecret string, q authQuerier) fiber.Handler {
	return func(c *fiber.Ctx) error {
		header := c.Get("Authorization")
		if !strings.HasPrefix(header, "Bearer ") {
			return fiber.ErrUnauthorized
		}
		token := strings.TrimPrefix(header, "Bearer ")

		if strings.HasPrefix(token, "mshl_") {
			return handleAPIToken(c, token, q)
		}
		return handleJWT(c, token, jwtSecret, q)
	}
}

func handleAPIToken(c *fiber.Ctx, token string, q authQuerier) error {
	hash := service.HashToken(token)
	row, err := q.GetAPITokenByHash(c.Context(), hash)
	if err == sql.ErrNoRows {
		return fiber.ErrUnauthorized
	}
	if err != nil {
		return fiber.ErrInternalServerError
	}
	go q.UpdateAPITokenLastUsed(context.Background(), row.ID)
	c.Locals("workspace_id", row.WorkspaceID)
	return c.Next()
}

func handleJWT(c *fiber.Ctx, token, jwtSecret string, q authQuerier) error {
	userID, err := service.ParseAccessToken(jwtSecret, token)
	if err != nil {
		return fiber.ErrUnauthorized
	}

	wsHeader := c.Get("X-Workspace-ID")
	if wsHeader == "" {
		return fiber.NewError(fiber.StatusBadRequest, "X-Workspace-ID header required")
	}
	workspaceID, err := uuid.Parse(wsHeader)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "invalid X-Workspace-ID")
	}

	_, err = q.GetWorkspaceMember(c.Context(), repository.GetWorkspaceMemberParams{
		WorkspaceID: workspaceID,
		UserID:      userID,
	})
	if err == sql.ErrNoRows {
		return fiber.ErrForbidden
	}
	if err != nil {
		return fiber.ErrInternalServerError
	}

	c.Locals("user_id", userID)
	c.Locals("workspace_id", workspaceID)
	return c.Next()
}
