package service

import (
	"context"
	"database/sql"
	"testing"

	"github.com/google/uuid"
	"github.com/meshalive/api/internal/cache"
	"github.com/meshalive/api/repository"
)

type mockCache struct {
	redirects map[string]*cache.RedirectEntry
	domains   map[string]uuid.UUID
}

func (m *mockCache) GetRedirect(_ context.Context, host, slug string) (*cache.RedirectEntry, error) {
	return m.redirects[host+":"+slug], nil
}
func (m *mockCache) SetRedirect(_ context.Context, host, slug string, e cache.RedirectEntry) error {
	if m.redirects == nil {
		m.redirects = map[string]*cache.RedirectEntry{}
	}
	m.redirects[host+":"+slug] = &e
	return nil
}
func (m *mockCache) GetDomainID(_ context.Context, h string) (uuid.UUID, bool, error) {
	id, ok := m.domains[h]
	return id, ok, nil
}
func (m *mockCache) SetDomainID(_ context.Context, h string, id uuid.UUID) error {
	if m.domains == nil {
		m.domains = map[string]uuid.UUID{}
	}
	m.domains[h] = id
	return nil
}

type mockQ struct {
	domainID *uuid.UUID
	linkID   *uuid.UUID
	dest     string
}

func (m *mockQ) GetDomainByHostname(_ context.Context, _ string) (uuid.UUID, error) {
	if m.domainID == nil {
		return uuid.Nil, sql.ErrNoRows
	}
	return *m.domainID, nil
}
func (m *mockQ) GetLinkForRedirect(_ context.Context, _ repository.GetLinkForRedirectParams) (repository.GetLinkForRedirectRow, error) {
	if m.linkID == nil {
		return repository.GetLinkForRedirectRow{}, sql.ErrNoRows
	}
	return repository.GetLinkForRedirectRow{ID: *m.linkID, Destination: m.dest}, nil
}
func (m *mockQ) InsertClick(_ context.Context, _ repository.InsertClickParams) error { return nil }

func TestResolve_CacheHit(t *testing.T) {
	id := uuid.New()
	mc := &mockCache{redirects: map[string]*cache.RedirectEntry{
		"h:s": {Dest: "https://x.com", LinkID: id},
	}}
	e, err := NewRedirectService(mc, &mockQ{}).Resolve(context.Background(), "h", "s")
	if err != nil || e == nil || e.Dest != "https://x.com" {
		t.Fatalf("err=%v e=%v", err, e)
	}
}

func TestResolve_DBFallback(t *testing.T) {
	domID, linkID := uuid.New(), uuid.New()
	mc := &mockCache{domains: map[string]uuid.UUID{"h": domID}}
	e, err := NewRedirectService(mc, &mockQ{domainID: &domID, linkID: &linkID, dest: "https://y.com"}).Resolve(context.Background(), "h", "s")
	if err != nil || e == nil || e.Dest != "https://y.com" {
		t.Fatalf("err=%v e=%v", err, e)
	}
}

func TestResolve_NotFound(t *testing.T) {
	e, err := NewRedirectService(&mockCache{}, &mockQ{}).Resolve(context.Background(), "h", "s")
	if err != nil || e != nil {
		t.Fatalf("expected nil, got err=%v e=%v", err, e)
	}
}
