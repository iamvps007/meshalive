'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { api } from '@/lib/api';
import { clearSession } from '@/lib/auth';

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';
const ACCENT_SOFT = '#eff6ff';
const GOOD = '#2f7a55';

const NAV = [
  { href: '/dashboard/links',     icon: 'link',        label: 'Links' },
  { href: '/dashboard/analytics', icon: 'chart',       label: 'Analytics' },
  { href: '/dashboard/qr',        icon: 'qr',          label: 'QR codes' },
];

const NAV_ACCOUNT = [
  { href: '/dashboard/billing',  icon: 'credit-card', label: 'Billing' },
  { href: '/dashboard/settings', icon: 'gear',        label: 'Settings' },
];

function NavItem({ href, icon, label, active }: { href: string; icon: string; label: string; active: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '9px 12px', borderRadius: 8, textDecoration: 'none',
      fontSize: 14, color: active ? INK : hov ? INK : MUTED,
      background: active ? '#ffffff' : hov ? 'rgba(255,255,255,0.6)' : 'transparent',
      boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
      border: active ? `1px solid ${HAIR}` : '1px solid transparent',
      transition: 'all 120ms', fontWeight: active ? 500 : 400,
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <span style={{ color: active ? ACCENT_INK : MUTED, flexShrink: 0 }}>
        <Icon name={icon} size={15} />
      </span>
      {label}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const logout = async () => {
    setSigningOut(true);
    await api.post('/v1/auth/logout').catch(() => {});
    clearSession();
    router.push('/login');
  };

  return (
    <aside style={{
      width: 236,
      borderRight: `1px solid ${HAIR}`,
      background: PAPER2,
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh',
      flexShrink: 0,
      overflowY: 'auto',
    }}>

      {/* Logo */}
      <div style={{ padding: '20px 16px 12px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: INK, display: 'inline-flex' }}>
          <Logo size={16} />
        </Link>
      </div>

      {/* New link CTA */}
      <div style={{ padding: '0 10px 16px', borderBottom: `1px solid ${HAIR}` }}>
        <Link href="/dashboard/links" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          padding: '10px 14px', borderRadius: 999,
          background: INK, color: '#ffffff',
          fontSize: 13, fontWeight: 500, textDecoration: 'none',
          transition: 'opacity 150ms',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}>
          <Icon name="plus" size={14} />
          New link
        </Link>
      </div>

      {/* Main nav */}
      <nav style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase',
          color: MUTED, padding: '4px 12px 8px', opacity: 0.6,
          fontFamily: '"Geist Mono", monospace',
        }}>Workspace</div>
        {NAV.map(n => (
          <NavItem key={n.href} {...n} active={pathname.startsWith(n.href)} />
        ))}

        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase',
          color: MUTED, padding: '16px 12px 8px', opacity: 0.6,
          fontFamily: '"Geist Mono", monospace',
        }}>Account</div>
        {NAV_ACCOUNT.map(n => (
          <NavItem key={n.href} {...n} active={pathname.startsWith(n.href)} />
        ))}
      </nav>

      {/* Status indicator */}
      <div style={{ padding: '10px 14px', borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '8px 12px', borderRadius: 8,
          background: '#ffffff', border: `1px solid ${HAIR}`,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: GOOD, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: MUTED }}>All systems normal</span>
        </div>
      </div>

      {/* Sign out */}
      <div style={{ padding: '10px' }}>
        <button
          onClick={logout}
          disabled={signingOut}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 12px', borderRadius: 8, cursor: 'pointer',
            fontSize: 14, color: MUTED, background: 'none', border: 'none',
            transition: 'color 120ms', textAlign: 'left', fontFamily: 'inherit',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = INK; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = MUTED; }}>
          <Icon name="arrow-left" size={15} />
          {signingOut ? 'Signing out…' : 'Sign out'}
        </button>
      </div>
    </aside>
  );
}
