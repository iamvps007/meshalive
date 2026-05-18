package service

import "testing"

func TestParseUA(t *testing.T) {
	cases := []struct{ ua, device, browser string }{
		{"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit Mobile Safari/604.1", "mobile", "Safari"},
		{"Mozilla/5.0 (Windows NT 10.0; Win64) AppleWebKit Chrome/120.0.0.0 Safari/537.36", "desktop", "Chrome"},
		{"Mozilla/5.0 (iPad; CPU OS 16_6) AppleWebKit/605.1.15", "tablet", ""},
		{"", "", ""},
	}
	for _, c := range cases {
		d, b := parseUA(c.ua)
		if d != c.device || b != c.browser {
			t.Errorf("parseUA(%q) = (%q,%q), want (%q,%q)", c.ua, d, b, c.device, c.browser)
		}
	}
}
