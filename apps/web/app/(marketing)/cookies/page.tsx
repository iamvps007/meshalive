import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Meshalive uses only essential cookies. No third-party tracking or advertising cookies.',
  alternates: { canonical: 'https://meshalive.com/cookies' },
};

const COOKIES = [
  { name: 'mshl_session', type: 'Essential', duration: 'Session', purpose: 'Stores your authentication token to keep you signed in. Required for the dashboard to function.' },
  { name: 'mshl_workspace', type: 'Essential', duration: '30 days', purpose: 'Remembers your last active workspace ID so you land in the right workspace on return visits.' },
  { name: 'mshl_theme', type: 'Preference', duration: '1 year', purpose: 'Stores your light/dark theme preference.' },
];

export default function CookiesPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Cookie Policy</h1>
          <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>Last updated: May 2026</p>
        </div>

        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 40 }}>
          Meshalive uses a minimal set of cookies strictly necessary for the service to function. We do not use third-party advertising cookies, Facebook Pixel, Google Analytics, or any cross-site tracking.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 20px' }}>Cookies we use</h2>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                {['Cookie', 'Type', 'Duration', 'Purpose'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c, i) => (
                <tr key={c.name} style={{ borderBottom: i < COOKIES.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <td style={{ padding: '12px 16px', fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", color: '#0057ff' }}>{c.name}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: '#6b7280' }}>{c.type}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: '#6b7280' }}>{c.duration}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{c.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px' }}>How to disable cookies</h2>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 32 }}>
          You can disable cookies in your browser settings. Note that disabling the session cookie will prevent you from staying signed in to the Meshalive dashboard.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px' }}>Contact</h2>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
          Questions about our cookie use: <a href="mailto:privacy@meshalive.in" style={{ color: '#0057ff', textDecoration: 'none' }}>privacy@meshalive.in</a>
        </p>
      </div>
    </div>
  );
}
