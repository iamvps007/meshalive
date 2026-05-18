package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/meshalive/api/internal/service"
)

type AuthHandler struct{ svc *service.AuthService }

func NewAuthHandler(svc *service.AuthService) *AuthHandler {
	return &AuthHandler{svc: svc}
}

func (h *AuthHandler) Register(app *fiber.App) {
	v1 := app.Group("/v1/auth")
	v1.Post("/register", h.register)
	v1.Post("/login", h.login)
	v1.Post("/refresh", h.refresh)
	v1.Post("/logout", h.logout)
}

type registerReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Name     string `json:"name"`
}

type loginReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (h *AuthHandler) register(c *fiber.Ctx) error {
	var req registerReq
	if err := c.BodyParser(&req); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "invalid body")
	}
	if req.Email == "" || req.Password == "" {
		return fiber.NewError(fiber.StatusBadRequest, "email and password required")
	}
	result, err := h.svc.Register(c.Context(), req.Email, req.Password, req.Name)
	if err == service.ErrEmailTaken {
		return fiber.NewError(fiber.StatusConflict, "EMAIL_TAKEN")
	}
	if err != nil {
		return fiber.ErrInternalServerError
	}
	setRefreshCookie(c, result.RefreshToken)
	return c.Status(fiber.StatusCreated).JSON(authResponse(result))
}

func (h *AuthHandler) login(c *fiber.Ctx) error {
	var req loginReq
	if err := c.BodyParser(&req); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "invalid body")
	}
	result, err := h.svc.Login(c.Context(), req.Email, req.Password)
	if err == service.ErrInvalidCreds {
		return fiber.NewError(fiber.StatusUnauthorized, "INVALID_CREDENTIALS")
	}
	if err != nil {
		return fiber.ErrInternalServerError
	}
	setRefreshCookie(c, result.RefreshToken)
	return c.JSON(authResponse(result))
}

func (h *AuthHandler) refresh(c *fiber.Ctx) error {
	raw := c.Cookies("refresh_token")
	if raw == "" {
		return fiber.ErrUnauthorized
	}
	result, err := h.svc.Refresh(c.Context(), raw)
	if err == service.ErrInvalidToken {
		return fiber.ErrUnauthorized
	}
	if err != nil {
		return fiber.ErrInternalServerError
	}
	setRefreshCookie(c, result.RefreshToken)
	return c.JSON(fiber.Map{"access_token": result.AccessToken})
}

func (h *AuthHandler) logout(c *fiber.Ctx) error {
	raw := c.Cookies("refresh_token")
	if raw != "" {
		h.svc.Logout(c.Context(), raw)
	}
	c.Cookie(&fiber.Cookie{Name: "refresh_token", Value: "", MaxAge: -1, HTTPOnly: true, SameSite: "Strict"})
	return c.SendStatus(fiber.StatusNoContent)
}

func setRefreshCookie(c *fiber.Ctx, token string) {
	c.Cookie(&fiber.Cookie{
		Name:     "refresh_token",
		Value:    token,
		MaxAge:   30 * 24 * 3600,
		HTTPOnly: true,
		SameSite: "Strict",
		Secure:   true,
	})
}

func authResponse(r *service.AuthResult) fiber.Map {
	m := fiber.Map{
		"user": fiber.Map{
			"id":    r.UserID.String(),
			"email": r.Email,
			"name":  r.Name,
		},
		"access_token": r.AccessToken,
	}
	if r.WorkspaceID.String() != "00000000-0000-0000-0000-000000000000" {
		m["workspace"] = fiber.Map{
			"id":   r.WorkspaceID.String(),
			"name": r.WorkspaceName,
			"slug": r.WorkspaceSlug,
			"plan": r.WorkspacePlan,
		}
	}
	return m
}
