package service

import "strings"

func parseUA(ua string) (device, browser string) {
	if ua == "" {
		return "", ""
	}
	s := strings.ToLower(ua)
	switch {
	case strings.Contains(s, "ipad") || strings.Contains(s, "tablet"):
		device = "tablet"
	case strings.Contains(s, "mobile") || strings.Contains(s, "iphone") || strings.Contains(s, "android"):
		device = "mobile"
	default:
		device = "desktop"
	}
	switch {
	case strings.Contains(s, "edg/"):
		browser = "Edge"
	case strings.Contains(s, "firefox"):
		browser = "Firefox"
	case strings.Contains(s, "chrome") && !strings.Contains(s, "chromium"):
		browser = "Chrome"
	case strings.Contains(s, "safari") && !strings.Contains(s, "chrome"):
		browser = "Safari"
	case strings.Contains(s, "chromium"):
		browser = "Chromium"
	}
	return
}
