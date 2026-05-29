import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free URL Shortener API — Shorten Links Programmatically',
  description: 'Use the Meshalive REST API to shorten URLs programmatically. Free, no credit card, 20 req/min rate limit. Works with any language. Full API docs included.',
  keywords: ['url shortener api', 'free url shortener api', 'link shortener api', 'shorten url api', 'url shortener rest api', 'programmatic url shortening'],
  alternates: { canonical: 'https://meshalive.com/blog/url-shortener-api' },
  openGraph: { title: 'Free URL Shortener API', description: 'Shorten URLs programmatically with the free Meshalive REST API.', url: 'https://meshalive.com/blog/url-shortener-api', type: 'article' },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

export default function Page() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 32px 96px' }}>

        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a><span>→</span><span>Developer</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>Developer · 6 min read</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 18px', lineHeight: 1.2 }}>Free URL Shortener API — Shorten Links Programmatically</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>The Meshalive REST API lets you shorten URLs from any application, script, or automation workflow. Free to use — no credit card required.</p>
          <div style={{ fontSize: 13, color: MUTED, paddingTop: 20, borderTop: `1px solid ${HAIR}` }}>Updated May 2026 · By meshalive team</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Quick start — no auth required</h2>
          <p>The public shorten endpoint requires no API key and no account. Just POST a URL:</p>
          <pre style={{ background: '#1e1e2e', color: '#cdd6f4', padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7 }}>{`curl -X POST https://api.meshalive.com/v1/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://your-long-url.com/with/path?params=true"}'`}</pre>
          <p>Response:</p>
          <pre style={{ background: '#1e1e2e', color: '#a6e3a1', padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7 }}>{`{
  "slug": "abc123",
  "short_url": "https://msha.live/abc123",
  "click_limit": 20
}`}</pre>
          <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderRadius: 10, padding: '14px 18px', fontSize: 14, margin: '16px 0 24px' }}>
            <strong>Note:</strong> The public endpoint has a 20-click limit per link and a rate limit of 20 requests per minute per IP. For unlimited clicks and higher rate limits, use authenticated endpoints with an API token.
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Authenticated API — unlimited clicks</h2>
          <p>Create a free account, generate an API token in Settings → API tokens, then use it in the Authorization header:</p>
          <pre style={{ background: '#1e1e2e', color: '#cdd6f4', padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7 }}>{`curl -X POST https://api.meshalive.com/v1/links \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -d '{
    "destination": "https://your-url.com",
    "slug": "my-custom-slug",
    "title": "My Campaign Link"
  }'`}</pre>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>JavaScript / Node.js example</h2>
          <pre style={{ background: '#1e1e2e', color: '#cdd6f4', padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7 }}>{`const response = await fetch('https://api.meshalive.com/v1/shorten', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://example.com/very-long-path' })
});
const { slug, short_url } = await response.json();
console.log(short_url); // https://msha.live/abc123`}</pre>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Python example</h2>
          <pre style={{ background: '#1e1e2e', color: '#cdd6f4', padding: '20px 24px', borderRadius: 12, fontSize: 13, overflowX: 'auto', lineHeight: 1.7 }}>{`import requests

resp = requests.post(
    "https://api.meshalive.com/v1/shorten",
    json={"url": "https://example.com/very-long-path"}
)
data = resp.json()
print(data["short_url"])  # https://msha.live/abc123`}</pre>
          <div style={{ background: '#111111', borderRadius: 14, padding: '36px', marginTop: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>Get your free API token</div>
            <p style={{ color: '#777777', fontSize: 14, margin: '0 0 20px' }}>Free account · Unlimited links · Full REST API access</p>
            <a href="/register" style={{ display: 'inline-block', background: '#0057ff', color: '#fff', padding: '11px 26px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Create free account →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
