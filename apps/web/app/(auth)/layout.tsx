'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#ffffff' }}>

      {/* ── Left panel — solid blue ── */}
      <div style={{
        width: 420, flexShrink: 0,
        background: ACCENT,
        display: 'flex', flexDirection: 'column',
        padding: '48px 48px',
        position: 'relative', overflow: 'hidden',
      }} className="auth-left-panel">
        {/* Subtle dark overlay shapes */}
        <div style={{
          position: 'absolute', bottom: -80, right: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: 'rgba(0,0,0,0.12)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: -40, left: -40,
          width: 200, height: 200, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
        }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 'auto' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="link" size={18} color="#ffffff" />
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>meshalive</span>
        </Link>

        {/* Headline */}
        <div style={{ marginTop: 'auto', marginBottom: 48 }}>
          <h2 style={{
            fontSize: 28, fontWeight: 800, color: '#ffffff',
            letterSpacing: '-0.03em', lineHeight: 1.25, margin: '0 0 14px',
          }}>
            The free URL shortener<br />with real analytics.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', margin: '0 0 32px', lineHeight: 1.6 }}>
            Short links, QR codes, click tracking — free forever.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { value: 'Free', label: 'forever' },
              { value: '<2ms', label: 'redirects' },
              { value: '99.9%', label: 'uptime' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel — white form ── */}
      <div data-theme="light" style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        background: '#ffffff',
      }}>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '48px 48px',
        }}>
          <div style={{ width: '100%', maxWidth: 400 }}>
            {children}
          </div>
        </div>

        <div style={{ padding: '0 48px 28px', textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>
            © 2026 Meshalive Labs ·{' '}
            <Link href="/privacy" style={{ color: MUTED, textDecoration: 'none' }}>Privacy</Link>
            {' · '}
            <Link href="/terms" style={{ color: MUTED, textDecoration: 'none' }}>Terms</Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .auth-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
}
