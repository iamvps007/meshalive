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
