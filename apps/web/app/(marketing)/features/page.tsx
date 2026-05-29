import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = {
  title: { absolute: 'URL Shortener Features, Analytics, QR Codes & API | Meshalive' },
  description: 'Explore Meshalive features: free URL shortening, real-time click analytics, dynamic QR codes, custom slugs, link in bio, webhooks, and a REST API.',
  alternates: { canonical: 'https://meshalive.com/features' },
  openGraph: {
    title: 'URL Shortener Features, Analytics, QR Codes & API | Meshalive',
    description: 'Free URL shortener features for marketers, creators, and developers: analytics, QR codes, custom links, webhooks, and API access.',
    url: 'https://meshalive.com/features',
  },
};

const INK = '#111111';
const INK2 = '#374151';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';
const ACCENT_SOFT = '#eff6ff';
const GOOD = '#2f7a55';

const FEATURES = [
  {
    icon: 'chart',
    title: 'Real-time click analytics',
    desc: 'Country, device, browser, referrer, UTM source — every click logged within seconds. Filter by time range, export as CSV, or pull via the API.',
    tags: ['Geo', 'Device', 'Referrer', 'Export CSV'],
  },
  {
    icon: 'qr',
    title: 'Dynamic QR codes',
    desc: 'Generate a QR code for any short link. Print it on packaging, menus, or posters — then update the destination without reprinting. The QR never changes.',
    tags: ['SVG export', 'PNG download', 'Redirect update'],
  },
  {
    icon: 'tag',
    title: 'UTM campaign tracking',
    desc: 'Build UTM-tagged URLs with a visual builder. Group links by campaign and see aggregated performance without leaving meshalive.',
    tags: ['UTM builder', 'Campaign groups', 'Growth+'],
  },
  {
    icon: 'key',
    title: 'REST API',
    desc: 'Full CRUD API for links, analytics, workspaces, and team members. JWT and API token auth. Free for all users — no enterprise tier required.',
    tags: ['JWT', 'Token auth', 'OpenAPI spec', 'Starter+'],
  },
  {
    icon: 'users',
    title: 'Team workspaces',
    desc: 'Invite team members with Owner / Admin / Editor / Viewer roles. Every workspace has its own analytics, links, and billing.',
    tags: ['RBAC', 'Invite flow', 'Audit log'],
  },
  {
    icon: 'webhook',
    title: 'Webhooks',
    desc: 'POST a JSON payload to your endpoint on every click, link create, or expiry event. Retry logic with exponential backoff included.',
    tags: ['Real-time', 'JSON payload', 'Growth+'],
  },
  {
    icon: 'mobile',
    title: 'Link in bio',
    desc: 'A full landing page behind one link — profile photo, social links, CTAs. Share one URL everywhere, track every click by block.',
    tags: ['Bio page', 'Click tracking', 'All plans'],
  },
  {
    icon: 'zap',
    title: 'Link expiry & click caps',
    desc: 'Set an expiry date or a max-click limit on any link. Expired links redirect to a configurable fallback URL automatically.',
    tags: ['Expiry date', 'Click limit', 'Fallback URL'],
  },
  {
    icon: 'credit-card',
    title: 'Flexible billing',
    desc: 'Multi-currency support — USD, INR, EUR and more. Local payment methods in each region. Tax-compliant invoices generated automatically on every payment.',
    tags: ['USD', 'INR', 'Tax invoices'],
  },
];

function FeatureCard({ icon, title, desc, tags }: { icon: string; title: string; desc: string; tags: string[] }) {
  return (
    <div style={{
      padding: '28px 28px 24px', background: '#ffffff',
      border: `1px solid ${HAIR}`, borderRadius: 14,
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 11, flexShrink: 0,
        background: ACCENT_SOFT, border: '1px solid #bfdbfe',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: ACCENT_INK,
      }}>
        <Icon name={icon} size={18} />
      </div>
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 600, color: INK, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{desc}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily: '"Geist Mono", monospace', fontSize: 11,
            padding: '3px 9px', borderRadius: 999,
            background: PAPER2, border: `1px solid ${HAIR}`, color: MUTED,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>

      {/* Hero */}
      <section style={{ padding: '96px 32px 80px', textAlign: 'center', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, background: PAPER2, border: `1px solid ${HAIR}`, borderRadius: 999, padding: '5px 14px', marginBottom: 28 }}>Everything in one place</div>
          <h1 style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(42px, 5vw, 62px)', fontWeight: 400, letterSpacing: '-0.02em', color: INK, margin: '0 0 22px', lineHeight: 1.1 }}>
            Every tool your links need.
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.65, maxWidth: 540, margin: '0 auto 36px' }}>
            Short links, analytics, QR codes, campaigns, API — all in one calm dashboard. No per-feature paywalls.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '12px 22px', borderRadius: 999,
              background: '#0057ff', color: '#ffffff',
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
            }}>
              Start free <Icon name="arrow-right" size={15} />
            </Link>
            <Link href="/pricing" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '12px 22px', borderRadius: 999,
              background: PAPER2, color: INK2,
              border: `1px solid ${HAIR}`,
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
            }}>
              View features
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="analytics" style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {FEATURES.map(f => (
              <div
                key={f.title}
                id={
                  f.title === 'UTM campaign tracking'
                    ? 'utm'
                    : f.title === 'Team workspaces'
                      ? 'teams'
                      : undefined
                }
              >
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API callout */}
      <section style={{ padding: '80px 32px', background: PAPER2, borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, marginBottom: 16 }}>REST API</div>
            <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 16px' }}>
              Build with meshalive.
            </h2>
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
              Full REST API — free for everyone. Bitly gates API access behind expensive enterprise plans. Meshalive gives it to every user, free.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Create, update, delete links', 'Pull per-link analytics', 'Manage workspaces + members', 'Webhooks for real-time events', 'OpenAPI 3.0 spec included'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: INK2 }}>
                  <span style={{ color: GOOD }}><Icon name="check" size={14} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/docs" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 20px', borderRadius: 999,
              background: '#0057ff', color: '#ffffff',
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}>
              Read the docs <Icon name="arrow-right" size={14} />
            </Link>
          </div>
          <div style={{ background: '#1a1714', borderRadius: 14, overflow: 'hidden', border: `1px solid rgba(229,221,208,0.1)` }}>
            <div style={{ background: '#f9fafb', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 16px', display: 'flex', gap: 6 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840' }} />
            </div>
            <pre style={{ margin: 0, padding: '20px 22px', fontFamily: '"Geist Mono", monospace', fontSize: 12, lineHeight: 1.8, color: '#c9c5bc', overflowX: 'auto' }}><code>{`POST /v1/links
Authorization: Bearer mshl_••••

{
  "destination": "https://your-url.com",
  "slug": "my-campaign",
  "tags": ["q2", "newsletter"]
}

→ 201 Created
{
  "short_url": "https://msha.live/my-campaign",
  "slug": "my-campaign",
  "clicks": 0
}`}</code></pre>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 12px' }}>
            Ready to try it?
          </h2>
          <p style={{ fontSize: 15, color: MUTED, marginBottom: 28, lineHeight: 1.65 }}>Free plan forever. Upgrade when you are ready. No credit card to start.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '12px 22px', borderRadius: 999,
              background: '#0057ff', color: '#ffffff',
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
            }}>
              Start free <Icon name="arrow-right" size={15} />
            </Link>
            <Link href="/pricing" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '12px 22px', borderRadius: 999,
              color: ACCENT_INK, fontSize: 15, fontWeight: 500, textDecoration: 'none',
            }}>
              View features →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
