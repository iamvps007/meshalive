package handler

import (
	"github.com/gofiber/fiber/v2"
)

type BillingHandler struct{}

func NewBillingHandler() *BillingHandler { return &BillingHandler{} }

func (h *BillingHandler) RegisterProtected(router fiber.Router) {
	b := router.Group("/billing")
	b.Post("/checkout", h.checkout)
	b.Get("/portal", h.portal)
}

func (h *BillingHandler) checkout(c *fiber.Ctx) error {
	var body struct {
		Plan     string `json:"plan"`     // "starter" | "pro"
		Currency string `json:"currency"` // "usd" | "inr"
		Interval string `json:"interval"` // "month" | "year"
	}
	if err := c.BodyParser(&body); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid request body")
	}
	// Stripe integration — return placeholder until Stripe keys are configured
	return c.JSON(fiber.Map{
		"checkout_url": "https://meshalive.com/pricing",
		"message":      "Stripe not yet configured — contact support@meshalive.com",
	})
}

func (h *BillingHandler) portal(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"portal_url": "https://meshalive.com/pricing",
		"message":    "Stripe not yet configured",
	})
}
