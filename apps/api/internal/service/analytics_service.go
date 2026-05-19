package service

import (
	"context"
	"time"

	"github.com/google/uuid"
	"github.com/meshalive/api/repository"
)

type analyticsQuerier interface {
	GetWorkspaceAnalyticsSummary(ctx context.Context, workspaceID uuid.UUID) (repository.GetWorkspaceAnalyticsSummaryRow, error)
	GetClicksByDay(ctx context.Context, arg repository.GetClicksByDayParams) ([]repository.GetClicksByDayRow, error)
	GetTopCountries(ctx context.Context, arg repository.GetTopCountriesParams) ([]repository.GetTopCountriesRow, error)
	GetTopDevices(ctx context.Context, arg repository.GetTopDevicesParams) ([]repository.GetTopDevicesRow, error)
	GetTopLinks(ctx context.Context, workspaceID uuid.UUID) ([]repository.GetTopLinksRow, error)
	GetLinkClicksByDay(ctx context.Context, arg repository.GetLinkClicksByDayParams) ([]repository.GetLinkClicksByDayRow, error)
	GetLinkTopCountries(ctx context.Context, arg repository.GetLinkTopCountriesParams) ([]repository.GetLinkTopCountriesRow, error)
	GetLinkTopDevices(ctx context.Context, arg repository.GetLinkTopDevicesParams) ([]repository.GetLinkTopDevicesRow, error)
	GetLinkTotalClicks(ctx context.Context, linkID uuid.UUID) (int64, error)
}

type WorkspaceSummary struct {
	TotalLinks  int64 `json:"total_links"`
	TotalClicks int64 `json:"total_clicks"`
	ClicksToday int64 `json:"clicks_today"`
	ClicksWeek  int64 `json:"clicks_week"`
}

type ClicksByDay struct {
	Day    string `json:"day"`
	Clicks int64  `json:"clicks"`
}

type CountryStat struct {
	Country string `json:"country"`
	Clicks  int64  `json:"clicks"`
}

type DeviceStat struct {
	Device string `json:"device"`
	Clicks int64  `json:"clicks"`
}

type TopLink struct {
	ID          uuid.UUID `json:"id"`
	Slug        string    `json:"slug"`
	Title       string    `json:"title"`
	Destination string    `json:"destination"`
	Clicks      int64     `json:"clicks"`
}

type WorkspaceAnalytics struct {
	Summary     WorkspaceSummary `json:"summary"`
	ClicksByDay []ClicksByDay    `json:"clicks_by_day"`
	Countries   []CountryStat    `json:"countries"`
	Devices     []DeviceStat     `json:"devices"`
	TopLinks    []TopLink        `json:"top_links"`
}

type LinkAnalytics struct {
	TotalClicks int64         `json:"total_clicks"`
	ClicksByDay []ClicksByDay `json:"clicks_by_day"`
	Countries   []CountryStat `json:"countries"`
	Devices     []DeviceStat  `json:"devices"`
}

type AnalyticsService struct {
	querier analyticsQuerier
}

func NewAnalyticsService(q analyticsQuerier) *AnalyticsService {
	return &AnalyticsService{querier: q}
}

func (s *AnalyticsService) GetWorkspaceSummary(ctx context.Context, workspaceID uuid.UUID, days int32) (*WorkspaceAnalytics, error) {
	summary, err := s.querier.GetWorkspaceAnalyticsSummary(ctx, workspaceID)
	if err != nil {
		return nil, err
	}

	clickRows, _ := s.querier.GetClicksByDay(ctx, repository.GetClicksByDayParams{WorkspaceID: workspaceID, Column2: days})
	countryRows, _ := s.querier.GetTopCountries(ctx, repository.GetTopCountriesParams{WorkspaceID: workspaceID, Column2: days})
	deviceRows, _ := s.querier.GetTopDevices(ctx, repository.GetTopDevicesParams{WorkspaceID: workspaceID, Column2: days})
	topLinkRows, _ := s.querier.GetTopLinks(ctx, workspaceID)

	clicksByDay := make([]ClicksByDay, 0, len(clickRows))
	for _, r := range clickRows {
		clicksByDay = append(clicksByDay, ClicksByDay{Day: r.Day.Format(time.DateOnly), Clicks: r.Clicks})
	}
	countries := make([]CountryStat, 0, len(countryRows))
	for _, r := range countryRows {
		countries = append(countries, CountryStat{Country: r.Country, Clicks: r.Clicks})
	}
	devices := make([]DeviceStat, 0, len(deviceRows))
	for _, r := range deviceRows {
		devices = append(devices, DeviceStat{Device: r.Device, Clicks: r.Clicks})
	}
	topLinks := make([]TopLink, 0, len(topLinkRows))
	for _, r := range topLinkRows {
		topLinks = append(topLinks, TopLink{ID: r.ID, Slug: r.Slug, Title: r.Title, Destination: r.Destination, Clicks: r.Clicks})
	}

	return &WorkspaceAnalytics{
		Summary:     WorkspaceSummary{TotalLinks: summary.TotalLinks, TotalClicks: summary.TotalClicks, ClicksToday: summary.ClicksToday, ClicksWeek: summary.ClicksWeek},
		ClicksByDay: clicksByDay,
		Countries:   countries,
		Devices:     devices,
		TopLinks:    topLinks,
	}, nil
}

func (s *AnalyticsService) GetLinkAnalytics(ctx context.Context, linkID uuid.UUID, days int32) (*LinkAnalytics, error) {
	total, _ := s.querier.GetLinkTotalClicks(ctx, linkID)
	clickRows, _ := s.querier.GetLinkClicksByDay(ctx, repository.GetLinkClicksByDayParams{LinkID: linkID, Column2: days})
	countryRows, _ := s.querier.GetLinkTopCountries(ctx, repository.GetLinkTopCountriesParams{LinkID: linkID, Column2: days})
	deviceRows, _ := s.querier.GetLinkTopDevices(ctx, repository.GetLinkTopDevicesParams{LinkID: linkID, Column2: days})

	clicksByDay := make([]ClicksByDay, 0, len(clickRows))
	for _, r := range clickRows {
		clicksByDay = append(clicksByDay, ClicksByDay{Day: r.Day.Format(time.DateOnly), Clicks: r.Clicks})
	}
	countries := make([]CountryStat, 0, len(countryRows))
	for _, r := range countryRows {
		countries = append(countries, CountryStat{Country: r.Country, Clicks: r.Clicks})
	}
	devices := make([]DeviceStat, 0, len(deviceRows))
	for _, r := range deviceRows {
		devices = append(devices, DeviceStat{Device: r.Device, Clicks: r.Clicks})
	}

	return &LinkAnalytics{TotalClicks: total, ClicksByDay: clicksByDay, Countries: countries, Devices: devices}, nil
}
