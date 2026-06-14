import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free URL Shortener API — Shorten Links Programmatically (2026)',
  description: 'Use the Meshalive REST API to shorten URLs from any app, script, or automation. Free tier available. Code examples in curl, JavaScript, Python, and Go. Full endpoint reference included.',
  keywords: ['url shortener api', 'free url shortener api', 'link shortener api', 'shorten url api', 'url shortener rest api', 'programmatic url shortening', 'url shortener api free key'],
  alternates: { canonical: 'https://meshalive.com/blog/url-shortener-api' },
  openGraph: {
    title: 'Free URL Shortener API — Shorten Links Programmatically',
    description: 'Full REST API for URL shortening. Free tier with no credit card. Code examples in curl, JavaScript, Python, and Go.',
    url: 'https://meshalive.com/blog/url-shortener-api',
    type: 'article',
    siteName: 'Meshalive',
  },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

const CODE_BG = '#1e1e2e';
const CODE_FG = '#cdd6f4';
const CODE_GREEN = '#a6e3a1';

export default function URLShortenerAPIPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 32px 96px' }}>

        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a>
          <span>→</span>
          <span>Developer</span>
        </div>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>Developer · 8 min read</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px', lineHeight: 1.2 }}>
            Free URL Shortener API — Shorten Links Programmatically
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.75, margin: 0 }}>
            The Meshalive REST API lets you shorten URLs from any application, automation, or script. The public endpoint requires no API key. Authenticated endpoints unlock custom slugs, analytics, and no click limits.
          </p>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${HAIR}`, fontSize: 13, color: MUTED }}>
            Updated June 2026 · By Meshalive team · <a href="/docs" style={{ color: ACCENT, textDecoration: 'none' }}>Full API docs →</a>
          </div>
        </div>

        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>

          {/* Quick overview */}
          <div style={{ background: '#f8fafc', border: `1px solid ${HAIR}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 8, padding: '20px 24px', marginBottom: 40 }}>
            <div style={{ fontWeight: 700, color: INK, marginBottom: 10, fontSize: 15 }}>API overview</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 14 }}>
              {[
                ['Base URL', 'https://api.meshalive.com/v1'],
                ['Auth', 'Bearer token (optional for public endpoint)'],
                ['Rate limit (no auth)', '20 req/min per IP'],
                ['Rate limit (authenticated)', '300 req/min'],
                ['Public endpoint click limit', '20 clicks per link'],
                ['Authenticated click limit', 'Unlimited'],
                ['Response format', 'JSON'],
                ['API access', 'Starter plan ($4/mo) and above'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ color: MUTED, minWidth: 160, fontSize: 13 }}>{k}:</span>
                  <span style={{ fontWeight: 500, color: INK, fontSize: 13 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Public endpoint */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>1. Public endpoint — no API key required</h2>
          <p>POST to <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>https://api.meshalive.com/v1/shorten</code> with a JSON body containing the URL to shorten. No account or API key is needed.</p>

          <div style={{ margin: '20px 0 8px', fontSize: 13, fontWeight: 600, color: MUTED, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Request</div>
          <pre style={{ background: CODE_BG, color: CODE_FG, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 8px' }}>{`curl -X POST https://api.meshalive.com/v1/shorten \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com/very/long/path?with=params"}'`}</pre>

          <div style={{ margin: '16px 0 8px', fontSize: 13, fontWeight: 600, color: MUTED, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Response</div>
          <pre style={{ background: CODE_BG, color: CODE_GREEN, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 20px' }}>{`{
  "slug": "abc123",
  "short_url": "https://msha.live/abc123",
  "click_limit": 20
}`}</pre>

          <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderRadius: 10, padding: '14px 18px', fontSize: 14, margin: '0 0 40px' }}>
            <strong>Public endpoint limits:</strong> Links created without authentication have a 20-click limit and are not saved to any account. For unlimited clicks and saved links with analytics, use the authenticated endpoint.
          </div>

          {/* Authenticated endpoint */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>2. Authenticated endpoint — unlimited clicks</h2>
          <p>Create a free account, then go to <strong>Dashboard → Settings → API Tokens</strong> to generate a token. Pass it in the <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>Authorization</code> header.</p>

          <div style={{ margin: '20px 0 8px', fontSize: 13, fontWeight: 600, color: MUTED, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Create a short link with custom slug</div>
          <pre style={{ background: CODE_BG, color: CODE_FG, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 20px' }}>{`curl -X POST https://api.meshalive.com/v1/links \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -d '{
    "destination": "https://example.com/page",
    "slug": "my-campaign",
    "title": "Summer Campaign 2026"
  }'`}</pre>

          <div style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, color: MUTED, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get analytics for a link</div>
          <pre style={{ background: CODE_BG, color: CODE_FG, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 40px' }}>{`curl https://api.meshalive.com/v1/links/my-campaign/analytics \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`}</pre>

          {/* Language examples */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 20px' }}>Code examples</h2>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: INK, margin: '0 0 12px' }}>JavaScript / Node.js</h3>
          <pre style={{ background: CODE_BG, color: CODE_FG, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 28px' }}>{`// Public endpoint (no auth, 20-click limit)
const res = await fetch('https://api.meshalive.com/v1/shorten', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://example.com/long-path' }),
});
const { slug, short_url } = await res.json();
console.log(short_url); // https://msha.live/abc123

// Authenticated (unlimited clicks, custom slug)
const res2 = await fetch('https://api.meshalive.com/v1/links', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_TOKEN',
  },
  body: JSON.stringify({
    destination: 'https://example.com/long-path',
    slug: 'my-link',
    title: 'My link title',
  }),
});
const link = await res2.json();
console.log(link.short_url);`}</pre>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: INK, margin: '0 0 12px' }}>Python</h3>
          <pre style={{ background: CODE_BG, color: CODE_FG, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 28px' }}>{`import requests

# Public endpoint
resp = requests.post(
    "https://api.meshalive.com/v1/shorten",
    json={"url": "https://example.com/long-path"},
)
data = resp.json()
print(data["short_url"])  # https://msha.live/abc123

# Authenticated
TOKEN = "YOUR_API_TOKEN"
resp = requests.post(
    "https://api.meshalive.com/v1/links",
    headers={"Authorization": f"Bearer {TOKEN}"},
    json={
        "destination": "https://example.com/long-path",
        "slug": "my-link",
        "title": "My link title",
    },
)
print(resp.json()["short_url"])`}</pre>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: INK, margin: '0 0 12px' }}>Go</h3>
          <pre style={{ background: CODE_BG, color: CODE_FG, padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7, margin: '0 0 40px' }}>{`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func shortenURL(dest, token string) (string, error) {
    body, _ := json.Marshal(map[string]string{
        "destination": dest,
    })
    req, _ := http.NewRequest("POST",
        "https://api.meshalive.com/v1/links",
        bytes.NewBuffer(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+token)

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()

    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)
    return result["short_url"].(string), nil
}

func main() {
    url, _ := shortenURL("https://example.com", "YOUR_API_TOKEN")
    fmt.Println(url)
}`}</pre>

          {/* Endpoint reference */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Endpoint reference</h2>
          <div style={{ overflowX: 'auto', marginBottom: 40 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {['Method', 'Endpoint', 'Auth?', 'Description'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, color: INK, borderBottom: `2px solid ${HAIR}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['POST', '/v1/shorten', 'No', 'Shorten a URL (public, 20-click limit)'],
                  ['POST', '/v1/links', 'Yes', 'Create a tracked link with optional custom slug'],
                  ['GET', '/v1/links', 'Yes', 'List all links in your workspace'],
                  ['GET', '/v1/links/:slug', 'Yes', 'Get details for a specific link'],
                  ['PATCH', '/v1/links/:slug', 'Yes', 'Update destination URL or title'],
                  ['DELETE', '/v1/links/:slug', 'Yes', 'Delete a short link'],
                  ['GET', '/v1/links/:slug/analytics', 'Yes', 'Get click analytics for a link'],
                ].map((row, i) => (
                  <tr key={row[1]} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                    <td style={{ padding: '9px 12px', borderBottom: `1px solid ${HAIR}`, fontFamily: 'monospace', fontSize: 12, color: row[0] === 'POST' ? '#d97706' : row[0] === 'GET' ? '#16a34a' : row[0] === 'DELETE' ? '#dc2626' : '#7c3aed' }}>{row[0]}</td>
                    <td style={{ padding: '9px 12px', borderBottom: `1px solid ${HAIR}`, fontFamily: 'monospace', fontSize: 12 }}>{row[1]}</td>
                    <td style={{ padding: '9px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13, color: row[2] === 'Yes' ? '#7c3aed' : '#6b7280' }}>{row[2]}</td>
                    <td style={{ padding: '9px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Zapier */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Using the API with Zapier or Make</h2>
          <p>You can use the Meshalive API from Zapier or Make (formerly Integromat) using the Webhooks/HTTP action. Set the method to POST, URL to <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>https://api.meshalive.com/v1/links</code>, add your token in the Authorization header, and map the destination URL from your trigger. Common use cases:</p>
          <ul style={{ paddingLeft: 24, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Automatically shorten URLs from a Google Sheet column</li>
            <li>Create a short link every time a new blog post is published in WordPress</li>
            <li>Generate a short link for each new product in Shopify</li>
            <li>Shorten URLs in a CRM when a new deal or lead is created</li>
          </ul>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 20px' }}>Frequently asked questions</h2>
          <div style={{ borderTop: `1px solid ${HAIR}` }}>
            {[
              {
                q: 'Is the Meshalive API free?',
                a: 'The public /v1/shorten endpoint is free and requires no API key. Links created through it have a 20-click limit. For unlimited clicks, custom slugs, and analytics, API access is included on the Starter plan ($4/month). There is no per-request charge.',
              },
              {
                q: 'What is the rate limit?',
                a: 'Unauthenticated requests are limited to 20 requests per minute per IP. Authenticated requests (with an API token) are limited to 300 requests per minute. If you need higher limits, contact support.',
              },
              {
                q: 'How do I get an API token?',
                a: 'Create a free account at meshalive.com/register. Then go to Dashboard → Settings → API Tokens → Create token. Tokens are workspace-scoped — one token per workspace. You can create multiple tokens and revoke them individually.',
              },
              {
                q: 'Can I use the API to retrieve analytics programmatically?',
                a: 'Yes. The GET /v1/links/:slug/analytics endpoint returns click data including total clicks, clicks by day, country breakdown, device type, and referrer. This is available on Starter and above plans.',
              },
              {
                q: 'Does Bitly offer a free API?',
                a: 'No. Bitly requires the Enterprise plan ($199/month) for API access. Every other URL shortener on this list offers API access for $20/month or less. Meshalive includes it from $4/month.',
              },
              {
                q: 'Is there an SDK or just a REST API?',
                a: 'Currently only a REST API is available. The API follows standard REST conventions and works with any HTTP client or language. An official JavaScript/TypeScript SDK is planned for Q3 2026. Until then, the curl examples above work directly in Node.js with the native fetch API.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: `1px solid ${HAIR}`, padding: '20px 0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, margin: '0 0 8px' }}>{q}</h3>
                <p style={{ color: MUTED, margin: 0, fontSize: 15, lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 10, padding: '20px 24px', margin: '40px 0' }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: INK }}>Related guides</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="/docs" style={{ color: ACCENT, fontSize: 14, textDecoration: 'none' }}>Full API documentation →</a>
              <a href="/blog/custom-short-url" style={{ color: ACCENT, fontSize: 14, textDecoration: 'none' }}>How to create a custom short URL →</a>
              <a href="/blog/url-shortener-with-analytics" style={{ color: ACCENT, fontSize: 14, textDecoration: 'none' }}>Best free URL shorteners with analytics →</a>
            </div>
          </div>

          <div style={{ background: '#111111', borderRadius: 16, padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>Get your free API token</div>
            <p style={{ color: '#6b7280', fontSize: 15, margin: '0 0 24px' }}>Free tier available · No credit card · Full REST API from $4/mo</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/register" style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                Create free account →
              </a>
              <a href="/docs" style={{ display: 'inline-block', background: 'transparent', border: '1px solid #374151', color: '#e5e7eb', padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                View full API docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
