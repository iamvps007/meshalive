package handler

import (
	"context"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
	"github.com/meshalive/api/repository"
)

type linkOwnerChecker interface {
	GetLinkByID(ctx context.Context, arg repository.GetLinkByIDParams) (repository.GetLinkByIDRow, error)
}

type AnalyticsHandler struct {
	svc   *service.AnalyticsService
	links linkOwnerChecker
}

func NewAnalyticsHandler(svc *service.AnalyticsService, links linkOwnerChecker) *AnalyticsHandler {
	return &AnalyticsHandler{svc: svc, links: links}
}

func (h *AnalyticsHandler) RegisterProtected(r fiber.Router) {
	r.Get("/analytics/summary", h.summary)
	r.Get("/links/:id/analytics", h.linkAnalytics)
}

func (h *AnalyticsHandler) summary(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	days := int32(30)
	switch c.Query("period", "30d") {
	case "7d":  days = 7
	case "90d": days = 90
	}
	result, err := h.svc.GetWorkspaceSummary(c.Context(), wsID, days)
	if err != nil { return fiber.ErrInternalServerError }
	return c.JSON(result)
}

func (h *AnalyticsHandler) linkAnalytics(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	linkID, err := uuid.Parse(c.Params("id"))
	if err != nil { return fiber.NewError(fiber.StatusBadRequest, "invalid link id") }
	// Verify link belongs to this workspace
	_, err = h.links.GetLinkByID(c.Context(), repository.GetLinkByIDParams{ID: linkID, WorkspaceID: wsID})
	if err != nil { return fiber.NewError(fiber.StatusNotFound, "NOT_FOUND") }
	days := int32(30)
	switch c.Query("period", "30d") {
	case "7d":  days = 7
	case "90d": days = 90
	}
	result, err := h.svc.GetLinkAnalytics(c.Context(), linkID, days)
	if err != nil { return fiber.ErrInternalServerError }
	return c.JSON(result)
}
