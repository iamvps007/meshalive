'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

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
  'Unlimited short links',
  'Unlimited clicks tracked',
  'Unlimited dynamic QR codes',
  'Full analytics — geo, device, referrer, UTM',
  'REST API — unlimited requests',
  'Team workspaces & roles',
  'Link expiry & click caps',
  'Webhooks',
  'UTM builder',
  'Bulk link creation via CSV',
  'No ads, no link throttling',
];

const FAQ = [
  {
    q: 'Is it really free forever?',
    a: 'Yes — no credit card, no free trial, no bait-and-switch. Everything is free.',
  },
  {
    q: 'Are there any link or click limits?',
    a: 'None. Create as many short links and QR codes as you want and track as many clicks as you get.',
  },
  {
    q: 'Is the REST API included?',
    a: 'Yes. Full API access with unlimited requests — no rate-limiting by plan tier.',
  },
  {
    q: 'Do you support team workspaces?',
    a: 'Yes. Invite your team, assign roles (owner / admin / editor / viewer), and create shared workspaces.',
  },
  {
    q: 'How do you keep the lights on?',
    a: 'We offer optional premium add-ons (white-label reports, priority SLA) for power users. Core features stay free.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. Export links and analytics as CSV from your dashboard at any time. Your data is yours.',
  },
];

export default function PricingCards() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: '#ffffff', color: INK }}>

      {/* Hero */}
      <section style={{ padding: '96px 32px 80px', textAlign: 'center', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, background: PAPER2, border: `1px solid ${HAIR}`, borderRadius: 999, padding: '5px 14px', marginBottom: 28 }}>Pricing</div>
          <h1 style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', color: INK, margin: '0 0 20px', lineHeight: 1.0 }}>
            One plan.<br /><span style={{ color: ACCENT }}>Free forever.</span>
          </h1>
          <p style={{ fontSize: 19, color: MUTED, lineHeight: 1.65, maxWidth: 520, margin: '0 auto 40px' }}>
            No tiers, no limits, no credit card. Everything included from day one.
          </p>
          <Link href="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 32px', borderRadius: 999,
            background: INK, color: '#ffffff',
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}>
            Get started free
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

      {/* Feature list */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', color: INK, textAlign: 'center', margin: '0 0 48px' }}>
            Everything included. No asterisks.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {FEATURES.map(f => (
              <div key={f} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '18px 20px', borderRadius: 12,
                border: `1px solid ${HAIR}`, background: '#fff',
              }}>
                <span style={{ color: ACCENT, flexShrink: 0, marginTop: 1 }}><Icon name="check" size={16} /></span>
                <span style={{ fontSize: 15, color: INK2, lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 32px 96px', borderTop: `1px solid ${HAIR}`, paddingTop: 80 }} id="faq">
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: INK, textAlign: 'center', margin: '0 0 8px' }}>Common questions</h2>
          <p style={{ textAlign: 'center', fontSize: 14, color: MUTED, marginBottom: 40 }}>Answers before you sign up.</p>
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 14, overflow: 'hidden' }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ borderBottom: i < FAQ.length - 1 ? `1px solid ${HAIR}` : 'none' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                  }}>
                  <span style={{ fontSize: 15, fontWeight: 500, color: INK }}>{item.q}</span>
                  <span style={{ color: MUTED, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', flexShrink: 0, marginLeft: 16 }}>
                    <Icon name="chevron-down" size={16} />
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: 14, color: MUTED, lineHeight: 1.7 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '80px 32px', background: PAPER2, borderTop: `1px solid ${HAIR}`, textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 42, fontWeight: 800, letterSpacing: '-0.04em', color: INK, margin: '0 0 12px' }}>
            Start today.<br /><span style={{ color: ACCENT }}>No card needed.</span>
          </h2>
          <p style={{ fontSize: 15, color: MUTED, marginBottom: 28, lineHeight: 1.65 }}>
            Free forever. Unlimited links, QR codes, and analytics from the start.
          </p>
          <Link href="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', borderRadius: 999,
            background: INK, color: '#ffffff',
            fontSize: 15, fontWeight: 500, textDecoration: 'none',
          }}>
            Create free account
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
