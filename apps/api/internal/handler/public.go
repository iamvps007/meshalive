package handler

import (
	"errors"
	"strings"
	"time"
	"math"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
)

// systemWorkspaceID owns the shared meshalive.com domain seeded in migration 002.
var systemWorkspaceID = uuid.MustParse("00000000-0000-0000-0000-000000000001")

type PublicHandler struct {
	linkSvc *service.LinkService
}

func NewPublicHandler(linkSvc *service.LinkService) *PublicHandler {
	return &PublicHandler{linkSvc: linkSvc}
}

func (h *PublicHandler) Register(app *fiber.App) {
	rl := limiter.New(limiter.Config{
		Max:        20,
		Expiration: time.Minute,
		KeyGenerator: func(c *fiber.Ctx) string { return c.IP() },
		LimitReached: func(c *fiber.Ctx) error {
			return apiErr(c, fiber.StatusTooManyRequests, "RATE_LIMITED", "too many requests — try again in a minute")
		},
	})
	app.Post("/v1/shorten", rl, h.shorten)
}

func (h *PublicHandler) shorten(c *fiber.Ctx) error {
	var body struct {
		URL            string `json:"url"`
		ExpiresInHours int    `json:"expires_in_hours"`
	}
	if err := c.BodyParser(&body); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid request body")
	}
	if body.URL == "" {
		return apiErr(c, fiber.StatusBadRequest, "MISSING_URL", "url is required")
	}
	ul := strings.ToLower(body.URL)
	if !strings.HasPrefix(ul, "http://") && !strings.HasPrefix(ul, "https://") {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_URL", "url must start with http:// or https://")
	}

	clickLimit := int32(20)
	input := service.CreateLinkInput{
		WorkspaceID: systemWorkspaceID,
		Destination: body.URL,
		ClickLimit:  &clickLimit,
	}
	if body.ExpiresInHours > 0 {
		hours := int(math.Min(float64(body.ExpiresInHours), 8760))
		t := time.Now().Add(time.Duration(hours) * time.Hour)
		input.ExpiresAt = &t
		input.ClickLimit = nil
	}
	result, err := h.linkSvc.Create(c.Context(), input)
	if err != nil {
		if errors.Is(err, service.ErrInvalidDestination) {
			return apiErr(c, fiber.StatusUnprocessableEntity, "INVALID_URL", "url is not allowed — only public http/https destinations are accepted")
		}
		if errors.Is(err, service.ErrDomainNotFound) {
			return apiErr(c, fiber.StatusServiceUnavailable, "NO_DOMAIN", "shared domain not available")
		}
		return fiber.ErrInternalServerError
	}

	resp := fiber.Map{
		"slug":      result.Slug,
		"short_url": "https://" + result.Hostname + "/" + result.Slug,
	}
	if result.ExpiresAt.Valid {
		resp["expires_at"] = result.ExpiresAt.Time.UTC().Format(time.RFC3339)
	}
	if result.ClickLimit.Valid {
		resp["click_limit"] = result.ClickLimit.Int32
	}
	return c.Status(fiber.StatusCreated).JSON(resp)
}
