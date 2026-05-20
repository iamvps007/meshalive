'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { api } from '@/lib/api';
import { clearSession } from '@/lib/auth';

const NAV = [
  { id: 'links',     href: '/dashboard/links',     icon: 'link',        label: 'Links' },
  { id: 'analytics', href: '/dashboard/analytics', icon: 'chart',       label: 'Analytics' },
  { id: 'qr',        href: '/dashboard/qr',        icon: 'qr',          label: 'QR codes' },
  { id: 'domains',   href: '/dashboard/domains',   icon: 'globe',       label: 'Domains' },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await api.post('/v1/auth/logout').catch(() => {});
    clearSession();
    router.push('/login');
  };

  return (
    <aside style={{
      width: 228,
      borderRight: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(7,8,14,0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh',
      flexShrink: 0,
    }}>
      {/* Logo + plan badge */}
      <div style={{ padding: '18px 16px 0' }}>
        <Logo size={15} />
      </div>
      <div style={{ padding: '12px 16px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Link href="/dashboard/billing" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(108,92,231,0.1)', border: '1px solid rgba(108,92,231,0.22)',
          borderRadius: 6, padding: '4px 10px',
          fontSize: 12, fontWeight: 600, color: '#8B7CFF',
          textDecoration: 'none',
          transition: 'all 150ms',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(108,92,231,0.18)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(108,92,231,0.1)'; }}
        >
          <Icon name="zap" size={11} />
          Free plan
          <span style={{ color: 'rgba(139,124,255,0.5)', fontWeight: 400 }}>· Upgrade</span>
        </Link>
      </div>

      {/* Main nav */}
      <nav style={{ flex: 1, padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', padding: '8px 12px 4px' }}>Workspace</div>
        {NAV.map(n => (
          <Link key={n.id} href={n.href} className={`nav-item${pathname.startsWith(n.href) ? ' active' : ''}`} style={{ textDecoration: 'none' }}>
            <Icon name={n.icon} size={15} />
            <span>{n.label}</span>
          </Link>
        ))}
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', padding: '16px 12px 4px' }}>Account</div>
        <Link href="/dashboard/billing" className={`nav-item${pathname.startsWith('/dashboard/billing') ? ' active' : ''}`} style={{ textDecoration: 'none' }}>
          <Icon name="credit-card" size={15} /> <span>Billing</span>
        </Link>
        <Link href="/dashboard/settings" className={`nav-item${pathname.startsWith('/dashboard/settings') ? ' active' : ''}`} style={{ textDecoration: 'none' }}>
          <Icon name="gear" size={15} /> <span>Settings</span>
        </Link>
      </nav>

      {/* Bottom sign out */}
      <div style={{ padding: '10px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <button className="nav-item" onClick={logout} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>
          <Icon name="arrow-left" size={15} />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
