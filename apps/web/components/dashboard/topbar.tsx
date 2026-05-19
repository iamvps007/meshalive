'use client';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

const TITLES: Record<string, string> = {
  '/dashboard/links': 'Links',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/qr': 'QR codes',
  '/dashboard/domains': 'Domains',
  '/dashboard/settings': 'Settings',
};

export function Topbar({ onNewLink }: { onNewLink?: () => void }) {
  const pathname = usePathname();
  const title = Object.entries(TITLES).find(([k]) => pathname.startsWith(k))?.[1] ?? 'Dashboard';
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'var(--bg)', borderBottom: '1px solid var(--line-c)', padding: '12px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{title}</span>
      <div style={{ flex: 1 }} />
      {onNewLink && (
        <button className="btn btn-primary btn-sm" onClick={onNewLink}>
          <Icon name="plus" size={14} /> New link
        </button>
      )}
    </div>
  );
}
