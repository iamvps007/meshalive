package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
)

type DomainsHandler struct{ svc *service.DomainService }

func NewDomainsHandler(svc *service.DomainService) *DomainsHandler {
	return &DomainsHandler{svc: svc}
}

func (h *DomainsHandler) RegisterProtected(r fiber.Router) {
	r.Get("/domains", h.list)
	r.Post("/domains", h.create)
	r.Delete("/domains/:id", h.del)
}

func (h *DomainsHandler) list(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	domains, err := h.svc.List(c.Context(), wsID)
	if err != nil { return fiber.ErrInternalServerError }
	if domains == nil { domains = []service.DomainResult{} }
	return c.JSON(fiber.Map{"domains": domains})
}

func (h *DomainsHandler) create(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	var body struct{ Hostname string `json:"hostname"` }
	if err := c.BodyParser(&body); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "invalid body")
	}
	domain, err := h.svc.Create(c.Context(), wsID, body.Hostname)
	if err != nil { return fiber.NewError(fiber.StatusBadRequest, err.Error()) }
	return c.Status(fiber.StatusCreated).JSON(domain)
}

func (h *DomainsHandler) del(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil { return err }
	domainID, err := uuid.Parse(c.Params("id"))
	if err != nil { return fiber.NewError(fiber.StatusBadRequest, "invalid domain id") }
	hostname := c.Query("hostname", "")
	if err := h.svc.Delete(c.Context(), wsID, domainID, hostname); err != nil {
		return fiber.ErrInternalServerError
	}
	return c.SendStatus(fiber.StatusNoContent)
}
