package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/meshalive/api/internal/service"
)

type RedirectHandler struct{ svc *service.RedirectService }

func NewRedirectHandler(svc *service.RedirectService) *RedirectHandler {
	return &RedirectHandler{svc: svc}
}

func (h *RedirectHandler) Register(app *fiber.App) {
	app.Get("/r/:slug", h.handle)
}

func (h *RedirectHandler) handle(c *fiber.Ctx) error {
	entry, err := h.svc.Resolve(c.Context(), c.Hostname(), c.Params("slug"))
	if err != nil {
		return fiber.ErrInternalServerError
	}
	if entry == nil {
		return c.Redirect("https://meshalive.com/404", fiber.StatusMovedPermanently)
	}
	linkID := entry.LinkID
	country, ua, referrer := c.Get("CF-IPCountry"), c.Get("User-Agent"), c.Get("Referer")
	go h.svc.WriteClick(linkID, country, ua, referrer)
	return c.Redirect(entry.Dest, fiber.StatusMovedPermanently)
}
