'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { api } from '@/lib/api';
import { clearSession } from '@/lib/auth';

const NAV = [
  { id: 'links', href: '/dashboard/links', icon: 'link', label: 'Links' },
  { id: 'analytics', href: '/dashboard/analytics', icon: 'chart', label: 'Analytics' },
  { id: 'qr', href: '/dashboard/qr', icon: 'qr', label: 'QR codes' },
  { id: 'domains', href: '/dashboard/domains', icon: 'globe', label: 'Domains' },
  { id: 'billing', href: '/dashboard/billing', icon: 'credit-card', label: 'Billing' },
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
    <aside style={{ width: 240, borderRight: '1px solid var(--line-c)', background: 'var(--bg)', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
      <div style={{ padding: '16px 16px 12px' }}>
        <Logo size={16} />
      </div>
      {/* Plan badge */}
      <div style={{ padding: '0 16px 12px', borderBottom: '1px solid var(--line-c)' }}>
        <Link
          href="/dashboard/billing"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
        >
          <div style={{
            background: 'var(--pulse-soft)',
            border: '1px solid rgba(0,229,168,0.35)',
            borderRadius: 6,
            padding: '4px 10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--pulse)',
          }}>
            <Icon name="zap" size={11} />
            Free plan
          </div>
        </Link>
      </div>
      <nav style={{ flex: 1, padding: '8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV.map(n => (
          <Link key={n.id} href={n.href} className={`nav-item${pathname.startsWith(n.href) ? ' active' : ''}`} style={{ textDecoration: 'none' }}>
            <Icon name={n.icon} size={16} /> <span>{n.label}</span>
          </Link>
        ))}
      </nav>
      <div style={{ padding: 8, borderTop: '1px solid var(--line-c)' }}>
        <Link href="/dashboard/settings" className={`nav-item${pathname.startsWith('/dashboard/settings') ? ' active' : ''}`} style={{ textDecoration: 'none' }}>
          <Icon name="gear" size={16} /> Settings
        </Link>
        <button className="nav-item" onClick={logout} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', color: 'var(--fg-muted)', cursor: 'pointer' }}>
          <Icon name="arrow-left" size={16} /> Sign out
        </button>
      </div>
    </aside>
  );
}
