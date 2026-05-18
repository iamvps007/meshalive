package service

import (
	"context"
	"database/sql"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
	"github.com/meshalive/api/repository"
)

// --- fakes ---

type fakeLinkQuerier struct {
	domain   repository.GetDomainByWorkspaceRow
	created  repository.CreateLinkRow
	listed   []repository.ListLinksRow
	count    int64
	existing repository.GetLinkByIDRow
	updated  repository.UpdateLinkRow

	createErr error
	getErr    error
}

func (f *fakeLinkQuerier) GetDomainByWorkspace(_ context.Context, _ uuid.UUID) (repository.GetDomainByWorkspaceRow, error) {
	return f.domain, nil
}
func (f *fakeLinkQuerier) CreateLink(_ context.Context, _ repository.CreateLinkParams) (repository.CreateLinkRow, error) {
	return f.created, f.createErr
}
func (f *fakeLinkQuerier) ListLinks(_ context.Context, _ repository.ListLinksParams) ([]repository.ListLinksRow, error) {
	return f.listed, nil
}
func (f *fakeLinkQuerier) CountLinks(_ context.Context, _ repository.CountLinksParams) (int64, error) {
	return f.count, nil
}
func (f *fakeLinkQuerier) GetLinkByID(_ context.Context, _ repository.GetLinkByIDParams) (repository.GetLinkByIDRow, error) {
	return f.existing, f.getErr
}
func (f *fakeLinkQuerier) UpdateLink(_ context.Context, _ repository.UpdateLinkParams) (repository.UpdateLinkRow, error) {
	return f.updated, nil
}
func (f *fakeLinkQuerier) SoftDeleteLink(_ context.Context, _ repository.SoftDeleteLinkParams) error {
	return nil
}

type fakeLinkCache struct{ deleted []string }

func (f *fakeLinkCache) DelRedirect(_ context.Context, host, slug string) error {
	f.deleted = append(f.deleted, host+":"+slug)
	return nil
}

// --- tests ---

func TestCreateLink_GeneratesSlug(t *testing.T) {
	wid := uuid.New()
	did := uuid.New()
	lid := uuid.New()
	now := time.Now()

	q := &fakeLinkQuerier{
		domain: repository.GetDomainByWorkspaceRow{ID: did, Hostname: "mshl.in"},
		created: repository.CreateLinkRow{
			ID: lid, WorkspaceID: wid, DomainID: did,
			Slug: "abc123", Destination: "https://example.com",
			Tags: pq.StringArray{}, Archived: false, CreatedAt: now,
		},
	}
	svc := NewLinkService(q, &fakeLinkCache{})

	result, err := svc.Create(context.Background(), CreateLinkInput{
		WorkspaceID: wid,
		Destination: "https://example.com",
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if result.Destination != "https://example.com" {
		t.Errorf("expected destination, got %q", result.Destination)
	}
	if result.Hostname != "mshl.in" {
		t.Errorf("expected hostname mshl.in, got %q", result.Hostname)
	}
}

func TestCreateLink_SlugTaken(t *testing.T) {
	wid := uuid.New()
	did := uuid.New()

	q := &fakeLinkQuerier{
		domain:    repository.GetDomainByWorkspaceRow{ID: did, Hostname: "mshl.in"},
		createErr: &pq.Error{Code: "23505"},
	}
	svc := NewLinkService(q, &fakeLinkCache{})

	_, err := svc.Create(context.Background(), CreateLinkInput{
		WorkspaceID: wid,
		Slug:        "taken",
		Destination: "https://example.com",
	})
	if err != ErrSlugTaken {
		t.Errorf("expected ErrSlugTaken, got %v", err)
	}
}

func TestDeleteLink_BustsCache(t *testing.T) {
	wid := uuid.New()
	did := uuid.New()
	lid := uuid.New()
	now := time.Now()

	q := &fakeLinkQuerier{
		domain: repository.GetDomainByWorkspaceRow{ID: did, Hostname: "mshl.in"},
		existing: repository.GetLinkByIDRow{
			ID: lid, WorkspaceID: wid, DomainID: did,
			Slug: "summer", Destination: "https://d.com",
			Tags: pq.StringArray{}, CreatedAt: now,
			ExpiresAt: sql.NullTime{}, ClickLimit: sql.NullInt32{},
		},
	}
	c := &fakeLinkCache{}
	svc := NewLinkService(q, c)

	if err := svc.Delete(context.Background(), lid, wid); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(c.deleted) == 0 || c.deleted[0] != "mshl.in:summer" {
		t.Errorf("expected cache bust for mshl.in:summer, got %v", c.deleted)
	}
}

func TestListLinks(t *testing.T) {
	wid := uuid.New()
	did := uuid.New()
	now := time.Now()

	q := &fakeLinkQuerier{
		listed: []repository.ListLinksRow{
			{ID: uuid.New(), DomainID: did, Slug: "a", Destination: "https://a.com", Tags: pq.StringArray{}, CreatedAt: now},
		},
		count: 1,
	}
	svc := NewLinkService(q, &fakeLinkCache{})

	res, err := svc.List(context.Background(), ListLinksInput{WorkspaceID: wid, PageSize: 20, Page: 1})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if res.TotalCount != 1 || len(res.Links) != 1 {
		t.Errorf("expected 1 link, got count=%d links=%d", res.TotalCount, len(res.Links))
	}
}
