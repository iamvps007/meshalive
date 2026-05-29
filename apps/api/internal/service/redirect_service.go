package service

import (
	"context"
	"database/sql"
	"log"

	"github.com/google/uuid"
	"github.com/meshalive/api/internal/cache"
	"github.com/meshalive/api/repository"
)

type redirectCache interface {
	GetRedirect(ctx context.Context, host, slug string) (*cache.RedirectEntry, error)
	SetRedirect(ctx context.Context, host, slug string, e cache.RedirectEntry) error
	DelRedirect(ctx context.Context, host, slug string) error
	GetDomainID(ctx context.Context, hostname string) (uuid.UUID, bool, error)
	SetDomainID(ctx context.Context, hostname string, id uuid.UUID) error
}

type redirectQuerier interface {
	GetDomainByHostname(ctx context.Context, hostname string) (uuid.UUID, error)
	GetLinkForRedirect(ctx context.Context, arg repository.GetLinkForRedirectParams) (repository.GetLinkForRedirectRow, error)
	InsertClick(ctx context.Context, arg repository.InsertClickParams) error
	CountLinkClicks(ctx context.Context, linkID uuid.UUID) (int64, error)
}

type RedirectService struct {
	cache   redirectCache
	querier redirectQuerier
}

func NewRedirectService(c redirectCache, q redirectQuerier) *RedirectService {
	return &RedirectService{cache: c, querier: q}
}

func (s *RedirectService) Resolve(ctx context.Context, host, slug string) (*cache.RedirectEntry, error) {
	entry, err := s.cache.GetRedirect(ctx, host, slug)
	if err != nil {
		log.Printf("cache.GetRedirect: %v", err)
	}
	if entry != nil {
		return entry, nil
	}

	domainID, found, err := s.cache.GetDomainID(ctx, host)
	if err != nil {
		log.Printf("cache.GetDomainID: %v", err)
	}
	if !found {
		domainID, err = s.querier.GetDomainByHostname(ctx, host)
		if err == sql.ErrNoRows {
			return nil, nil
		}
		if err != nil {
			return nil, err
		}
		if e := s.cache.SetDomainID(ctx, host, domainID); e != nil {
			log.Printf("cache.SetDomainID: %v", e)
		}
	}

	row, err := s.querier.GetLinkForRedirect(ctx, repository.GetLinkForRedirectParams{
		DomainID: domainID,
		Slug:     slug,
	})
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}

	var cl *int32
	if row.ClickLimit.Valid { cl = &row.ClickLimit.Int32 }
	result := &cache.RedirectEntry{Dest: row.Destination, LinkID: row.ID, ClickLimit: cl, Slug: slug, Host: host}
	if e := s.cache.SetRedirect(ctx, host, slug, *result); e != nil {
		log.Printf("cache.SetRedirect: %v", e)
	}
	return result, nil
}

func (s *RedirectService) WriteClick(linkID uuid.UUID, country, ua, referrer, slug, host string, clickLimit *int32) {
	ctx := context.Background()
	device, browser := parseUA(ua)
	if err := s.querier.InsertClick(ctx, repository.InsertClickParams{
		LinkID:   linkID,
		Country:  sql.NullString{String: country, Valid: country != ""},
		Device:   sql.NullString{String: device, Valid: device != ""},
		Browser:  sql.NullString{String: browser, Valid: browser != ""},
		Referrer: sql.NullString{String: referrer, Valid: referrer != ""},
	}); err != nil {
		log.Printf("WriteClick: %v", err)
		return
	}
	if clickLimit != nil {
		count, err := s.querier.CountLinkClicks(ctx, linkID)
		if err == nil && count >= int64(*clickLimit) {
			if e := s.cache.DelRedirect(ctx, host, slug); e != nil {
				log.Printf("evict click-limit cache: %v", e)
			}
		}
	}
}
