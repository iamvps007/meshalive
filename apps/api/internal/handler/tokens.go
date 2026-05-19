package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
)

type TokensHandler struct{ svc *service.TokenService }

func NewTokensHandler(svc *service.TokenService) *TokensHandler {
	return &TokensHandler{svc: svc}
}

func (h *TokensHandler) RegisterProtected(r fiber.Router) {
	r.Get("/tokens", h.list)
	r.Post("/tokens", h.create)
	r.Delete("/tokens/:id", h.del)
}

func (h *TokensHandler) list(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	tokens, err := h.svc.List(c.Context(), wsID)
	if err != nil { return fiber.ErrInternalServerError }
	if tokens == nil { tokens = []service.TokenResult{} }
	return c.JSON(fiber.Map{"tokens": tokens})
}

func (h *TokensHandler) create(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	var body struct{ Name string `json:"name"` }
	if err := c.BodyParser(&body); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "invalid body")
	}
	token, err := h.svc.Create(c.Context(), wsID, body.Name)
	if err != nil { return fiber.NewError(fiber.StatusBadRequest, err.Error()) }
	return c.Status(fiber.StatusCreated).JSON(token)
}

func (h *TokensHandler) del(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	tokenID, err := uuid.Parse(c.Params("id"))
	if err != nil { return fiber.NewError(fiber.StatusBadRequest, "invalid token id") }
	if err := h.svc.Delete(c.Context(), wsID, tokenID); err != nil {
		return fiber.ErrInternalServerError
	}
	return c.SendStatus(fiber.StatusNoContent)
}
