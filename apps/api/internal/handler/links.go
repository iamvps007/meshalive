package handler

import (
	"errors"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/meshalive/api/internal/service"
)

type LinksHandler struct {
	svc *service.LinkService
}

func NewLinksHandler(svc *service.LinkService) *LinksHandler {
	return &LinksHandler{svc: svc}
}

func (h *LinksHandler) RegisterProtected(router fiber.Router) {
	v1 := router.Group("/links")
	v1.Get("/", h.list)
	v1.Post("/", h.create)
	v1.Patch("/:id", h.update)
	v1.Delete("/:id", h.delete)
}

func (h *LinksHandler) list(c *fiber.Ctx) error {
	wid, err := workspaceID(c)
	if err != nil {
		return err
	}

	page := int32(c.QueryInt("page", 1))
	pageSize := int32(c.QueryInt("page_size", 20))
	if pageSize > 100 {
		pageSize = 100
	}

	res, err := h.svc.List(c.Context(), service.ListLinksInput{
		WorkspaceID: wid,
		Archived:    c.QueryBool("archived"),
		Search:      c.Query("search"),
		Tag:         c.Query("tag"),
		Page:        page,
		PageSize:    pageSize,
	})
	if err != nil {
		return fiber.ErrInternalServerError
	}

	links := make([]fiber.Map, len(res.Links))
	for i, l := range res.Links {
		links[i] = linkJSON(l)
	}

	return c.JSON(fiber.Map{
		"links":       links,
		"total_count": res.TotalCount,
		"page":        page,
		"page_size":   pageSize,
	})
}

func (h *LinksHandler) create(c *fiber.Ctx) error {
	wid, err := workspaceID(c)
	if err != nil {
		return err
	}

	var body struct {
		Slug        string   `json:"slug"`
		Destination string   `json:"destination"`
		Title       string   `json:"title"`
		Tags        []string `json:"tags"`
		ClickLimit  *int32   `json:"click_limit"`
	}
	if err := c.BodyParser(&body); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid request body")
	}
	if body.Destination == "" {
		return apiErr(c, fiber.StatusBadRequest, "MISSING_DESTINATION", "destination is required")
	}
	dl := strings.ToLower(body.Destination)
	if !strings.HasPrefix(dl, "http://") && !strings.HasPrefix(dl, "https://") {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_DESTINATION", "destination must be an http or https URL")
	}

	result, err := h.svc.Create(c.Context(), service.CreateLinkInput{
		WorkspaceID: wid,
		Slug:        body.Slug,
		Destination: body.Destination,
		Title:       body.Title,
		Tags:        body.Tags,
		ClickLimit:  body.ClickLimit,
	})
	if err != nil {
		if errors.Is(err, service.ErrInvalidDestination) {
			return apiErr(c, fiber.StatusUnprocessableEntity, "INVALID_URL", "url is not allowed — only public http/https destinations are accepted")
		}
		if errors.Is(err, service.ErrSlugTaken) {
			return apiErr(c, fiber.StatusConflict, "SLUG_TAKEN", "slug is already in use")
		}
		if errors.Is(err, service.ErrDomainNotFound) {
			return apiErr(c, fiber.StatusBadRequest, "NO_DOMAIN", "workspace has no active domain")
		}
		if errors.Is(err, service.ErrPlanLimitReached) {
			return apiErr(c, fiber.StatusPaymentRequired, "PLAN_LIMIT_REACHED", "link limit for your plan has been reached — upgrade to create more links")
		}
		return fiber.ErrInternalServerError
	}

	return c.Status(fiber.StatusCreated).JSON(linkJSON(*result))
}

func (h *LinksHandler) update(c *fiber.Ctx) error {
	wid, err := workspaceID(c)
	if err != nil {
		return err
	}
	id, err := uuid.Parse(c.Params("id"))
	if err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_ID", "invalid link id")
	}

	var body struct {
		Destination string   `json:"destination"`
		Title       string   `json:"title"`
		Tags        []string `json:"tags"`
		Archived    bool     `json:"archived"`
		ClickLimit  *int32   `json:"click_limit"`
	}
	if err := c.BodyParser(&body); err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_BODY", "invalid request body")
	}

	result, err := h.svc.Update(c.Context(), service.UpdateLinkInput{
		ID:          id,
		WorkspaceID: wid,
		Destination: body.Destination,
		Title:       body.Title,
		Tags:        body.Tags,
		Archived:    body.Archived,
		ClickLimit:  body.ClickLimit,
	})
	if err != nil {
		if errors.Is(err, service.ErrLinkNotFound) {
			return apiErr(c, fiber.StatusNotFound, "LINK_NOT_FOUND", "link not found")
		}
		return fiber.ErrInternalServerError
	}

	return c.JSON(linkJSON(*result))
}

func (h *LinksHandler) delete(c *fiber.Ctx) error {
	wid, err := workspaceID(c)
	if err != nil {
		return err
	}
	id, err := uuid.Parse(c.Params("id"))
	if err != nil {
		return apiErr(c, fiber.StatusBadRequest, "INVALID_ID", "invalid link id")
	}

	if err := h.svc.Delete(c.Context(), id, wid); err != nil {
		if errors.Is(err, service.ErrLinkNotFound) {
			return apiErr(c, fiber.StatusNotFound, "LINK_NOT_FOUND", "link not found")
		}
		return fiber.ErrInternalServerError
	}

	return c.SendStatus(fiber.StatusNoContent)
}

func workspaceID(c *fiber.Ctx) (uuid.UUID, error) {
	switch v := c.Locals("workspace_id").(type) {
	case uuid.UUID:
		return v, nil
	case string:
		id, err := uuid.Parse(v)
		if err != nil {
			return uuid.UUID{}, apiErr(c, fiber.StatusUnauthorized, "INVALID_WORKSPACE", "invalid workspace id")
		}
		return id, nil
	default:
		return uuid.UUID{}, apiErr(c, fiber.StatusUnauthorized, "NO_WORKSPACE", "workspace not resolved")
	}
}

func linkJSON(l service.LinkResult) fiber.Map {
	m := fiber.Map{
		"id":          l.ID,
		"domain_id":   l.DomainID,
		"slug":        l.Slug,
		"destination": l.Destination,
		"title":       l.Title,
		"tags":        l.Tags,
		"archived":    l.Archived,
		"created_at":  l.CreatedAt,
	}
	if l.Hostname != "" {
		m["short_url"] = "https://" + l.Hostname + "/" + l.Slug
	}
	if l.ExpiresAt.Valid {
		m["expires_at"] = l.ExpiresAt.Time
	}
	if l.ClickLimit.Valid {
		m["click_limit"] = l.ClickLimit.Int32
	}
	return m
}

func apiErr(c *fiber.Ctx, status int, code, message string) error {
	return c.Status(status).JSON(fiber.Map{
		"error": fiber.Map{"code": code, "message": message},
	})
}
