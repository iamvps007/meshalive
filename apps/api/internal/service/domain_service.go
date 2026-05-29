package service

import (
	"context"
	"errors"
	"strings"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
)

type domainQuerier interface {
	ListDomains(ctx context.Context, workspaceID uuid.UUID) ([]repository.ListDomainsRow, error)
	CreateDomain(ctx context.Context, arg repository.CreateDomainParams) (repository.CreateDomainRow, error)
	DeleteDomain(ctx context.Context, arg repository.DeleteDomainParams) error
}

// DomainResult has no CreatedAt because the generated ListDomainsRow doesn't include it
type DomainResult struct {
	ID         uuid.UUID `json:"id"`
	Hostname   string    `json:"hostname"`
	IsPrimary  bool      `json:"is_primary"`
	Status     string    `json:"status"`
	VerifiedAt *string   `json:"verified_at"`
}

type DomainService struct {
	querier domainQuerier
	cache   interface {
		DelDomainID(ctx context.Context, hostname string) error
	}
}

func NewDomainService(q domainQuerier, c interface {
	DelDomainID(ctx context.Context, hostname string) error
}) *DomainService {
	return &DomainService{querier: q, cache: c}
}

func validateHostname(h string) error {
	h = strings.TrimSpace(h)
	if h == "" {
		return errors.New("hostname is required")
	}
	if strings.Contains(h, "://") {
		return errors.New("hostname must not include a protocol prefix")
	}
	if strings.ContainsAny(h, " /") {
		return errors.New("hostname must be a plain domain name")
	}
	return nil
}

func (s *DomainService) List(ctx context.Context, workspaceID uuid.UUID) ([]DomainResult, error) {
	rows, err := s.querier.ListDomains(ctx, workspaceID)
	if err != nil {
		return nil, err
	}
	results := make([]DomainResult, 0, len(rows))
	for _, r := range rows {
		d := DomainResult{ID: r.ID, Hostname: r.Hostname, IsPrimary: r.IsPrimary, Status: r.Status}
		if r.VerifiedAt.Valid {
			t := r.VerifiedAt.Time.Format("2006-01-02T15:04:05Z")
			d.VerifiedAt = &t
		}
		results = append(results, d)
	}
	return results, nil
}

func (s *DomainService) Create(ctx context.Context, workspaceID uuid.UUID, hostname string) (*DomainResult, error) {
	hostname = strings.ToLower(strings.TrimSpace(hostname))
	if err := validateHostname(hostname); err != nil {
		return nil, err
	}
	r, err := s.querier.CreateDomain(ctx, repository.CreateDomainParams{WorkspaceID: workspaceID, Hostname: hostname})
	if err != nil {
		if strings.Contains(err.Error(), "unique") || strings.Contains(err.Error(), "duplicate") {
			return nil, errors.New("domain already exists")
		}
		return nil, err
	}
	result := &DomainResult{ID: r.ID, Hostname: r.Hostname, IsPrimary: r.IsPrimary, Status: r.Status}
	return result, nil
}

func (s *DomainService) Delete(ctx context.Context, workspaceID, domainID uuid.UUID, hostname string) error {
	if hostname == "" {
		if rows, err := s.querier.ListDomains(ctx, workspaceID); err == nil {
			for _, r := range rows {
				if r.ID == domainID {
					hostname = r.Hostname
					break
				}
			}
		}
	}
	if err := s.querier.DeleteDomain(ctx, repository.DeleteDomainParams{ID: domainID, WorkspaceID: workspaceID}); err != nil {
		return err
	}
	if hostname != "" && s.cache != nil {
		_ = s.cache.DelDomainID(ctx, hostname)
	}
	return nil
}
