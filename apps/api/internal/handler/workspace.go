package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/meshalive/api/internal/service"
)

type WorkspaceHandler struct{ svc *service.WorkspaceService }

func NewWorkspaceHandler(svc *service.WorkspaceService) *WorkspaceHandler {
	return &WorkspaceHandler{svc: svc}
}

func (h *WorkspaceHandler) RegisterProtected(r fiber.Router) {
	r.Get("/workspace", h.get)
	r.Patch("/workspace", h.update)
}

func (h *WorkspaceHandler) get(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	result, err := h.svc.Get(c.Context(), wsID)
	if err != nil { return fiber.ErrInternalServerError }
	return c.JSON(result)
}

func (h *WorkspaceHandler) update(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	var input service.UpdateWorkspaceInput
	if err := c.BodyParser(&input); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "invalid body")
	}
	result, err := h.svc.Update(c.Context(), wsID, input)
	if err != nil { return fiber.ErrInternalServerError }
	return c.JSON(result)
}
