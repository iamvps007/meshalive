package handler

import (
	"encoding/json"
	"errors"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
)

// BioHandler wires BioService to Fiber routes.
type BioHandler struct {
	svc *service.BioService
}

// NewBioHandler constructs a BioHandler.
func NewBioHandler(svc *service.BioService) *BioHandler {
	return &BioHandler{svc: svc}
}

// RegisterProtected registers authenticated CRUD routes under the provided
// router (typically already scoped under an auth middleware group).
//
//	GET    /bio-pages
//	POST   /bio-pages
//	GET    /bio-pages/:id
//	PUT    /bio-pages/:id
//	DELETE /bio-pages/:id
func (h *BioHandler) RegisterProtected(router fiber.Router) {
	router.Get("/bio-pages", h.list)
	router.Post("/bio-pages", h.create)
	router.Get("/bio-pages/:id", h.getOne)
	router.Put("/bio-pages/:id", h.update)
	router.Delete("/bio-pages/:id", h.delete)
}

// Register registers the unauthenticated public page route on the root app.
//
//	GET /v1/p/:slug
func (h *BioHandler) Register(app *fiber.App) {
	app.Get("/v1/p/:slug", h.getPublic)
}

// -------------------------------------------------------------------------
// Request / response shapes
// -------------------------------------------------------------------------

// createBioPageRequest is the expected JSON body for POST /bio-pages.
type createBioPageRequest struct {
	Slug   string          `json:"slug"`
	Title  string          `json:"title"`
	Config json.RawMessage `json:"config"`
}

// updateBioPageRequest is the expected JSON body for PUT /bio-pages/:id.
type updateBioPageRequest struct {
	Slug      string          `json:"slug"`
	Title     string          `json:"title"`
	Config    json.RawMessage `json:"config"`
	Published bool            `json:"published"`
}

// -------------------------------------------------------------------------
// Handlers
// -------------------------------------------------------------------------

// list handles GET /bio-pages — returns all pages for the caller's workspace.
func (h *BioHandler) list(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil {
		return err
	}

	pages, err := h.svc.List(c.Context(), wsID)
	if err != nil {
		return apiErr(c, fiber.StatusInternalServerError, "INTERNAL_ERROR", "failed to list bio pages")
	}
	return c.JSON(fiber.Map{"bio_pages": pages})
}

// create handles POST /bio-pages — inserts a new bio page.
func (h *BioHandler) create(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil {
		return err
	}

	// Parse body as raw JSON first so we preserve Config as json.RawMessage.
	var body json.RawMessage
	if err := c.BodyParser(&body); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid JSON body")
	}

	var req createBioPageRequest
	if err := json.Unmarshal(body, &req); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid JSON body")
	}

	if req.Slug == "" {
		return apiErr(c, fiber.StatusBadRequest, "MISSING_SLUG", "slug is required")
	}

	page, err := h.svc.Create(c.Context(), wsID, req.Slug, req.Title, req.Config)
	if err != nil {
		return mapBioServiceError(c, err)
	}
	return c.Status(fiber.StatusCreated).JSON(page)
}

// getOne handles GET /bio-pages/:id — returns a single page owned by the workspace.
func (h *BioHandler) getOne(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil {
		return err
	}

	id, err := parseUUID(c, "id")
	if err != nil {
		return err
	}

	page, err := h.svc.GetByID(c.Context(), id, wsID)
	if err != nil {
		return mapBioServiceError(c, err)
	}
	return c.JSON(page)
}

// update handles PUT /bio-pages/:id — full replacement of all mutable fields.
func (h *BioHandler) update(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil {
		return err
	}

	id, err := parseUUID(c, "id")
	if err != nil {
		return err
	}

	var body json.RawMessage
	if err := c.BodyParser(&body); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid JSON body")
	}

	var req updateBioPageRequest
	if err := json.Unmarshal(body, &req); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid JSON body")
	}

	if req.Slug == "" {
		return apiErr(c, fiber.StatusBadRequest, "MISSING_SLUG", "slug is required")
	}

	page, err := h.svc.Update(c.Context(), id, wsID, req.Slug, req.Title, req.Config, req.Published)
	if err != nil {
		return mapBioServiceError(c, err)
	}
	return c.JSON(page)
}

// delete handles DELETE /bio-pages/:id — removes the page from the workspace.
func (h *BioHandler) delete(c *fiber.Ctx) error {
	wsID, err := workspaceID(c)
	if err != nil {
		return err
	}

	id, err := parseUUID(c, "id")
	if err != nil {
		return err
	}

	if err := h.svc.Delete(c.Context(), id, wsID); err != nil {
		return apiErr(c, fiber.StatusInternalServerError, "INTERNAL_ERROR", "failed to delete bio page")
	}
	return c.SendStatus(fiber.StatusNoContent)
}

// getPublic handles GET /v1/p/:slug — unauthenticated, published pages only.
func (h *BioHandler) getPublic(c *fiber.Ctx) error {
	slug := c.Params("slug")
	if slug == "" {
		return apiErr(c, fiber.StatusBadRequest, "MISSING_SLUG", "slug is required")
	}

	page, err := h.svc.GetPublicPage(c.Context(), slug)
	if err != nil {
		return mapBioServiceError(c, err)
	}
	return c.JSON(page)
}

// -------------------------------------------------------------------------
// Helpers local to this file
// -------------------------------------------------------------------------

// parseUUID extracts a URL param and parses it as a UUID, returning a 400 on
// failure. The returned error is a Fiber *Error so Fiber's error handler
// serialises it automatically.
func parseUUID(c *fiber.Ctx, param string) (uuid.UUID, error) {
	raw := c.Params(param)
	id, err := uuid.Parse(raw)
	if err != nil {
		return uuid.Nil, apiErr(c, fiber.StatusBadRequest, "INVALID_ID", "invalid id: must be a UUID")
	}
	return id, nil
}

// mapBioServiceError translates service-layer sentinel errors into the
// appropriate HTTP status codes.
func mapBioServiceError(c *fiber.Ctx, err error) error {
	switch {
	case errors.Is(err, service.ErrBioPageNotFound):
		return apiErr(c, fiber.StatusNotFound, "NOT_FOUND", "bio page not found")
	case errors.Is(err, service.ErrBioSlugTaken):
		return apiErr(c, fiber.StatusConflict, "SLUG_TAKEN", "slug already taken")
	default:
		return apiErr(c, fiber.StatusInternalServerError, "INTERNAL_ERROR", "internal server error")
	}
}
