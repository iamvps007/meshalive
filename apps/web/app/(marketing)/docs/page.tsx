import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'API Documentation',
  description: 'Meshalive REST API reference. Create short links, retrieve click analytics, manage workspaces. Available from $2/mo.',
  alternates: { canonical: 'https://meshalive.com/docs' },
};

const ENDPOINTS = [
  { method: 'POST', path: '/v1/auth/register', desc: 'Create a new user account and default workspace' },
  { method: 'POST', path: '/v1/auth/login', desc: 'Authenticate and receive a JWT access token' },
  { method: 'POST', path: '/v1/auth/refresh', desc: 'Rotate refresh token and receive a new JWT' },
  { method: 'POST', path: '/v1/auth/logout', desc: 'Invalidate the current session' },
  { method: 'GET', path: '/v1/links', desc: 'List all short links in the workspace' },
  { method: 'POST', path: '/v1/links', desc: 'Create a new short link' },
  { method: 'PATCH', path: '/v1/links/:id', desc: 'Update a short link (slug, destination, tags, expiry)' },
  { method: 'DELETE', path: '/v1/links/:id', desc: 'Archive a short link' },
  { method: 'GET', path: '/v1/links/:id/analytics', desc: 'Get click analytics for a specific link' },
  { method: 'GET', path: '/v1/workspace', desc: 'Get current workspace details' },
  { method: 'GET', path: '/v1/workspace/members', desc: 'List workspace members and roles' },
];

const METHOD_COLORS: Record<string, string> = {
  GET: '#107c10',
  POST: '#0057ff',
  PATCH: '#bc4d00',
  DELETE: '#c50f1f',
};

const CODE_STYLE = { background: 'rgba(0,0,0,0.5)', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' as const, marginBottom: 24 };
const PRE_STYLE = { margin: 0, padding: '16px 20px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, lineHeight: 1.8, color: '#C9D1D9', overflowX: 'auto' as const };
const BAR_STYLE = { background: '#f9fafb', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 };

export default function DocsPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div id="api" style={{ marginBottom: 56 }}>
          <div style={{ display: 'inline-block', background: 'rgba(196,90,57,0.1)', border: '1px solid rgba(196,90,57,0.25)', borderRadius: 999, padding: '4px 14px', fontSize: 11, fontWeight: 700, color: '#0057ff', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 20 }}>API Reference</div>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '0 0 14px', letterSpacing: '-0.025em' }}>Meshalive REST API</h1>
          <p style={{ fontSize: 16, color: '#6b7280', margin: '0 0 16px', lineHeight: 1.7, maxWidth: 580 }}>
            Full CRUD API for short links, analytics, and workspace management. Available on Starter ($2/mo) — not locked behind an enterprise tier.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '6px 14px', fontSize: 13, fontFamily: "'IBM Plex Mono', monospace" }}>
              Base URL: <span style={{ color: '#0057ff' }}>https://api.meshalive.com/v1</span>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.01em' }}>Authentication</h2>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, marginBottom: 20 }}>
          All authenticated endpoints require a Bearer token in the Authorization header. Two token types are supported:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          {[
            { label: 'JWT (dashboard sessions)', example: 'Authorization: Bearer eyJhbGci...', note: '15-minute expiry. Refresh via POST /v1/auth/refresh.' },
            { label: 'API token (programmatic)', example: 'Authorization: Bearer mshl_••••••••', note: 'Long-lived. Create from Settings → API Tokens.' },
          ].map(t => (
            <div key={t.label} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 10, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{t.label}</div>
              <div style={{ fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", color: '#0057ff', marginBottom: 8 }}>{t.example}</div>
              <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{t.note}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px', letterSpacing: '-0.01em' }}>Quick start</h2>
        <div style={CODE_STYLE}>
          <div style={BAR_STYLE}><span style={{ fontSize: 11, color: 'rgba(155,148,144,0.7)', fontFamily: "'IBM Plex Mono', monospace" }}>Create a short link</span></div>
          <pre style={PRE_STYLE}><code>{`curl -X POST https://api.meshalive.com/v1/links \\
  -H "Authorization: Bearer mshl_your_api_token" \\
  -H "Content-Type: application/json" \\
  -H "X-Workspace-ID: your-workspace-uuid" \\
  -d '{"destination": "https://example.com/product", "slug": "product"}'

# Response
{
  "id": "018e4c1a-...",
  "short_url": "https://meshalive.com/product",
  "slug": "product",
  "destination": "https://example.com/product",
  "clicks": 0,
  "created_at": "2026-05-20T10:00:00Z"
}`}</code></pre>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 20px', letterSpacing: '-0.01em' }}>Endpoints</h2>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                {['Method', 'Path', 'Description'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENDPOINTS.map((ep, i) => (
                <tr key={ep.path} style={{ borderBottom: i < ENDPOINTS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <td style={{ padding: '11px 16px' }}>
                    <span style={{ background: `${METHOD_COLORS[ep.method]}22`, border: `1px solid ${METHOD_COLORS[ep.method]}44`, borderRadius: 5, padding: '2px 8px', fontSize: 11, fontWeight: 700, color: METHOD_COLORS[ep.method], fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.04em' }}>{ep.method}</span>
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(155,148,144,0.9)' }}>{ep.path}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13, color: '#6b7280' }}>{ep.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-0.01em' }}>Rate limits</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 40 }}>
          {[
            { plan: 'Free', limit: 'No API access' },
            { plan: 'Starter', limit: '1,000 requests / day' },
            { plan: 'Pro', limit: 'Unlimited' },
          ].map(r => (
            <div key={r.plan} style={{ background: '#f9fafb', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '16px 18px', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{r.plan}</div>
              <div style={{ fontSize: 13, color: '#6b7280' }}>{r.limit}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(196,90,57,0.06)', border: '1px solid rgba(196,90,57,0.2)', borderRadius: 12, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Ready to integrate?</div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>Get your API token on the Starter plan — starts at $2/mo.</div>
          </div>
          <Link href="/register" className="btn btn-primary" style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}>Get started →</Link>
        </div>
      </div>
    </div>
  );
}
