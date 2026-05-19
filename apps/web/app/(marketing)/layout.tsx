import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <nav style={{
        borderBottom: '1px solid var(--line-c)',
        background: 'rgba(11,15,23,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 24px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}><Logo size={16} /></Link>
          <div style={{ flex: 1, display: 'flex', gap: 28, marginLeft: 8 }}>
            <Link href="/#features" style={{ fontSize: 14, color: 'var(--fg-muted)', textDecoration: 'none', transition: 'color 120ms' }}
              onMouseEnter={undefined}>Features</Link>
            <Link href="/pricing" style={{ fontSize: 14, color: 'var(--fg-muted)', textDecoration: 'none' }}>Pricing</Link>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Link href="/login" className="btn btn-ghost btn-sm">Sign in</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Get started free</Link>
          </div>
        </div>
      </nav>
      <main style={{ flex: 1 }}>{children}</main>
      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--line-c)', padding: '40px 24px' }}>
        <div style={{
          maxWidth: 1160,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <Logo size={14} />
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--fg-muted)' }}>
            <Link href="/pricing" style={{ textDecoration: 'none', color: 'var(--fg-muted)' }}>Pricing</Link>
            <Link href="/login" style={{ textDecoration: 'none', color: 'var(--fg-muted)' }}>Sign in</Link>
            <Link href="/register" style={{ textDecoration: 'none', color: 'var(--fg-muted)' }}>Sign up</Link>
          </div>
          <div style={{ fontSize: 12, color: 'var(--fg-muted)' }}>© 2026 Meshalive · Built for Indian SMBs</div>
        </div>
      </footer>
    </div>
  );
}
