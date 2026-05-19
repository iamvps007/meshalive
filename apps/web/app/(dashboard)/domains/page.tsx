import { Icon } from '@/components/ui/icon';
export default function DomainsPage() {
  return (
    <div style={{ padding: '24px 32px' }}>
      <h1 className="display" style={{ fontSize: 28, marginBottom: 8 }}>Domains</h1>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Icon name="globe" size={28} style={{ color: 'var(--pulse)' }} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>Domains coming soon</div>
        <div className="muted" style={{ fontSize: 13 }}>Custom domain management will appear here.</div>
      </div>
    </div>
  );
}
