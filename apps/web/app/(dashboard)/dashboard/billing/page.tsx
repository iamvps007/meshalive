'use client';
import { Icon } from '@/components/ui/icon';

const INK = '#111111';
const INK2 = '#374151';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const GOOD = '#2f7a55';

const INCLUDED = [
  'Unlimited short links',
  'Unlimited clicks tracked',
  'Unlimited dynamic QR codes',
  'Full analytics — geo, device, referrer, UTM',
  'REST API — unlimited requests',
  'Team workspaces & roles',
  'Link expiry & click caps',
  'Webhooks',
  'UTM builder',
];

export default function BillingPage() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 800, margin: '0 auto', color: INK }}>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: 'Geist, sans-serif', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 6px' }}>Billing</h1>
        <p style={{ fontSize: 15, color: MUTED, margin: 0 }}>Your plan and usage overview.</p>
      </div>

      {/* Plan card */}
      <div style={{
        border: `2px solid ${ACCENT}`,
        borderRadius: 16, padding: '32px 36px',
        background: '#fff', marginBottom: 32,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', background: ACCENT, color: '#fff', borderRadius: 999, padding: '3px 10px' }}>Current plan</span>
          </div>
          <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: INK, lineHeight: 1 }}>Free</div>
          <div style={{ fontSize: 15, color: MUTED, marginTop: 6 }}>Free forever — no credit card, no expiry.</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', fontFamily: 'Geist, sans-serif', color: INK }}>$0</div>
          <div style={{ fontSize: 13, color: MUTED }}>/ month</div>
        </div>
      </div>

      {/* What's included */}
      <div style={{ border: `1px solid ${HAIR}`, borderRadius: 14, padding: '28px 32px', background: '#fff', marginBottom: 32 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, marginBottom: 20, fontFamily: '"Geist Mono", monospace' }}>What&apos;s included</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {INCLUDED.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: GOOD, flexShrink: 0, marginTop: 1 }}><Icon name="check" size={14} /></span>
              <span style={{ fontSize: 14, color: INK2 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* No payment info */}
      <div style={{ border: `1px solid ${HAIR}`, borderRadius: 14, padding: '24px 28px', background: PAPER2, display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: ACCENT, flexShrink: 0 }}><Icon name="lock" size={20} /></span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: INK, marginBottom: 2 }}>No payment method required</div>
          <div style={{ fontSize: 13, color: MUTED }}>meshalive is completely free. No credit card, no billing cycles, no surprises.</div>
        </div>
      </div>

    </div>
  );
}
