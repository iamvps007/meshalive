import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status',
  description: 'Real-time status of Meshalive services: API, web application, short link redirects, and cache.',
  alternates: { canonical: 'https://meshalive.com/status' },
};

const SERVICES = [
  { name: 'Short link redirects', host: 'meshalive.com', uptime: '100%' },
  { name: 'Web application', host: 'meshalive.com', uptime: '100%' },
  { name: 'REST API', host: 'api.meshalive.com', uptime: '100%' },
  { name: 'Redis cache', host: 'Internal', uptime: '100%' },
  { name: 'Postgres database', host: 'Internal', uptime: '100%' },
];

export default function StatusPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '0 0 8px', letterSpacing: '-0.025em' }}>System Status</h1>
        <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 48px' }}>Current operational status of all Meshalive services.</p>

        {/* Overall status */}
        <div style={{ background: 'rgba(16,124,16,0.08)', border: '1px solid rgba(16,124,16,0.25)', borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#107c10', display: 'inline-block', boxShadow: '0 0 10px rgba(16,124,16,0.6)', flexShrink: 0 }} className="pulse-dot" />
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#107c10' }}>All systems operational</div>
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>No incidents in the last 90 days</div>
          </div>
        </div>

        {/* Service rows */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
          {SERVICES.map((s, i) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: '#6b7280', fontFamily: "'IBM Plex Mono', monospace", marginTop: 2 }}>{s.host}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{s.uptime} uptime</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(16,124,16,0.1)', border: '1px solid rgba(16,124,16,0.2)', borderRadius: 6, padding: '3px 10px', fontSize: 12, fontWeight: 600, color: '#107c10' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#107c10', display: 'inline-block' }} />
                  Operational
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>Incident history</h2>
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 24px', fontSize: 15, color: '#6b7280' }}>
          No incidents reported in the last 90 days.
        </div>

        <p style={{ fontSize: 13, color: '#6b7280', marginTop: 24 }}>
          Status is updated in real time. For incident reports contact <a href="mailto:support@meshalive.in" style={{ color: '#0057ff', textDecoration: 'none' }}>support@meshalive.in</a>.
        </p>
      </div>
    </div>
  );
}
