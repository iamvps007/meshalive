import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = {
  title: 'About Meshalive — Free URL Shortener',
  description: 'meshalive is a URL shortener and link management platform built for growing teams worldwide. Fast, affordable, developer-friendly.',
  alternates: { canonical: 'https://meshalive.com/about' },
};

const INK = '#111111';
const INK2 = '#374151';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';
const ACCENT_SOFT = '#eff6ff';

const VALUES = [
  {
    icon: 'credit-card',
    title: 'Honest pricing',
    desc: 'No per-click billing. No API paywalls. No surprise overages. REST API from $4/mo — not locked behind a $300 enterprise tier.',
  },
  {
    icon: 'globe',
    title: 'Global by default',
    desc: 'Edge-cached redirects, 280+ cities, 180+ countries. Whether your audience is in Mumbai, Berlin, or São Paulo — links resolve in milliseconds.',
  },
  {
    icon: 'key',
    title: 'Developer-first',
    desc: 'Full REST API with JWT and token auth. OpenAPI 3.0 spec. Webhooks. CSV export. No enterprise negotiation required.',
  },
  {
    icon: 'zap',
    title: 'Global-first',
    desc: 'Free for everyone, everywhere. Regional data residency in EU · US · APAC, GDPR + CCPA compliant, and support across time zones.',
  },
];

const STORIES = [
  {
    name: 'Priya Sharma',
    role: 'Marketing lead, Fernco',
    quote: 'We switched from Bitly to meshalive for the price — we stayed for the analytics. Our team stopped copying spreadsheets and started reading one dashboard.',
  },
  {
    name: 'Theo Marsh',
    role: 'Founder, Oblique Studio',
    quote: 'The QR codes work everywhere — menus, packaging, business cards. Being able to update the destination without reprinting is worth the plan cost alone.',
  },
  {
    name: 'Ana Vega',
    role: 'Growth engineer, Stackr',
    quote: 'REST API on the Starter plan is what sold us. Every other tool gates it at $30+/mo. meshalive gives you actual developer access from day one.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>

      {/* Hero */}
      <section style={{ padding: '96px 32px 80px', textAlign: 'center', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, background: PAPER2, border: `1px solid ${HAIR}`, borderRadius: 999, padding: '5px 14px', marginBottom: 28 }}>About us</div>
          <h1 style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px, 5vw, 58px)', fontWeight: 400, letterSpacing: '-0.02em', color: INK, margin: '0 0 22px', lineHeight: 1.15 }}>
            The calm link platform.
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 auto' }}>
            meshalive is a URL shortener and link intelligence platform built for teams that need branded links, fast analytics, and a REST API — without enterprise pricing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '64px 32px', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { value: '4.2B+', label: 'Clicks tracked' },
            { value: '180M+', label: 'Short links created' },
            { value: '12,000+', label: 'Active teams' },
            { value: '99.99%', label: 'Redirect uptime' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 42, fontWeight: 400, letterSpacing: '-0.02em', color: INK, marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: MUTED }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 32px', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 10px' }}>What we believe.</h2>
            <p style={{ fontSize: 15, color: MUTED }}>The principles behind every product decision we make.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ display: 'flex', gap: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 11, flexShrink: 0,
                  background: ACCENT_SOFT, border: '1px solid #d4a88a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ACCENT_INK,
                }}>
                  <Icon name={v.icon} size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: INK, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 32px', background: PAPER2, borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, textAlign: 'center', margin: '0 0 48px' }}>From our users.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {STORIES.map(s => (
              <div key={s.name} style={{
                padding: 28, background: '#ffffff',
                border: `1px solid ${HAIR}`, borderRadius: 14,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <p style={{ fontSize: 15, color: INK2, lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic', fontFamily: 'Geist, sans-serif' }}>
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" style={{ padding: '80px 32px', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 10px' }}>Security and privacy</h2>
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, maxWidth: 620, margin: '0 auto' }}>
              Meshalive is built for teams that share links at scale, so we treat redirect reliability, privacy, and account access as core product features.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'Encrypted by default', desc: 'All dashboard sessions, API requests, and short-link redirects are served over HTTPS to protect account access and visitor traffic.' },
              { title: 'Privacy-aware analytics', desc: 'Click analytics are designed for campaign reporting and operational insight without turning your links into noisy surveillance dashboards.' },
              { title: 'Operational resilience', desc: 'Fast redirect handling, monitoring, and infrastructure guardrails help keep short links live and predictable when campaigns are active.' },
            ].map(item => (
              <div key={item.title} style={{ padding: 24, background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 14 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: INK, margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 12px' }}>
            Join 12,000+ teams.
          </h2>
          <p style={{ fontSize: 15, color: MUTED, marginBottom: 28, lineHeight: 1.65 }}>
            Free plan forever. No credit card to start. Upgrade when your team is ready.
          </p>
          <Link href="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', borderRadius: 999,
            background: INK, color: '#f6f2ea',
            fontSize: 15, fontWeight: 500, textDecoration: 'none',
          }}>
            Create free account <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
