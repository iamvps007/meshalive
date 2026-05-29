import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found — Meshalive',
  description: 'The page or short link you are looking for does not exist.',
};

export default function NotFoundPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 24px' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

          {/* Graphic */}
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: 40 }}>
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'rgba(196,90,57,0.08)',
              border: '1px solid rgba(196,90,57,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--pulse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M11 8v3" />
                <circle cx="11" cy="14.5" r=".5" fill="var(--pulse)" />
              </svg>
            </div>
            {/* 404 badge */}
            <div style={{
              position: 'absolute', top: -8, right: -8,
              background: 'var(--pulse)', color: '#fff',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
              padding: '3px 8px', borderRadius: 999,
              fontFamily: 'Inter Tight, sans-serif',
            }}>404</div>
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 16,
            fontFamily: 'Inter Tight, sans-serif',
          }}>
            This link doesn&apos;t exist
          </h1>

          <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: 12, maxWidth: 420, margin: '0 auto 12px' }}>
            The short link you followed has either expired, reached its click limit, or was never created.
          </p>
          <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 40, opacity: 0.7 }}>
            Double-check the URL or ask the person who shared it to send you a fresh link.
          </p>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <Link href="/" className="btn btn-primary" style={{ gap: 8, height: 44, paddingInline: 24 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Back to homepage
            </Link>
            <Link href="/register" className="btn btn-secondary" style={{ gap: 8, height: 44, paddingInline: 24 }}>
              Create your own short links
            </Link>
          </div>

          {/* Divider + suggestion */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32 }}>
            <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginBottom: 16 }}>Looking for something specific?</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Pricing', href: '/pricing' },
                { label: 'Documentation', href: '/docs' },
                { label: 'Contact support', href: '/contact' },
              ].map(({ label, href }) => (
                <Link key={href} href={href} style={{ fontSize: 13, color: 'var(--pulse)', textDecoration: 'none', fontWeight: 500 }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
