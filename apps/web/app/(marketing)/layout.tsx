'use client';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(7,8,14,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', height: 62, display: 'flex', alignItems: 'center', gap: 40 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo size={16} />
          </Link>
          <div style={{ flex: 1, display: 'flex', gap: 32 }}>
            <Link href="/#features" style={{ fontSize: 14, fontWeight: 500, color: 'rgba(238,240,255,0.55)', textDecoration: 'none' }}>Features</Link>
            <Link href="/pricing" style={{ fontSize: 14, fontWeight: 500, color: 'rgba(238,240,255,0.55)', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/pricing#api" style={{ fontSize: 14, fontWeight: 500, color: 'rgba(238,240,255,0.55)', textDecoration: 'none' }}>API docs</Link>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Link href="/login" style={{
              fontSize: 14, fontWeight: 500,
              color: 'rgba(238,240,255,0.6)',
              textDecoration: 'none',
              padding: '7px 14px',
              borderRadius: 8,
            }}>
              Sign in
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Get started free →
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1 }}>{children}</main>

      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'var(--ink-2)',
        padding: '56px 32px 40px',
      }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 48 }}>
            <div style={{ flex: '0 0 240px' }}>
              <Logo size={16} />
              <p style={{ marginTop: 16, fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 220 }}>
                Link management for Indian SMBs. Branded short links, analytics, and API — 60% cheaper than the rest.
              </p>
            </div>
            {[
              { heading: 'Product', links: [{ l: 'Features', h: '/#features' }, { l: 'Pricing', h: '/pricing' }, { l: 'API', h: '/pricing#api' }] },
              { heading: 'Company', links: [{ l: 'About', h: '/' }, { l: 'Blog', h: '/' }, { l: 'Careers', h: '/' }] },
              { heading: 'Support', links: [{ l: 'Docs', h: '/' }, { l: 'Status', h: '/' }, { l: 'Contact', h: '/' }] },
            ].map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 16 }}>{col.heading}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(l => (
                    <Link key={l.l} href={l.h} style={{ fontSize: 14, color: 'rgba(238,240,255,0.5)', textDecoration: 'none' }}>{l.l}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ fontSize: 13, color: 'var(--fg-muted)' }}>© 2026 Meshalive Technologies Pvt. Ltd. · CIN: U74999MH2026</div>
            <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'var(--fg-muted)' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy</Link>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Terms</Link>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
