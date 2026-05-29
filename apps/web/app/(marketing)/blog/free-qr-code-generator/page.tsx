import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free QR Code Generator for Any URL (No Sign-Up)',
  description: 'Generate a free QR code for any URL in seconds. Download as PNG. Dynamic QR codes that you can update after printing — no account required to start.',
  keywords: ['free qr code generator', 'qr code generator', 'qr code for url', 'qr code generator free', 'dynamic qr code generator', 'create qr code'],
  alternates: { canonical: 'https://meshalive.com/blog/free-qr-code-generator' },
  openGraph: { title: 'Free QR Code Generator for Any URL', description: 'Generate free QR codes for any URL. Dynamic QR codes you can update after printing.', url: 'https://meshalive.com/blog/free-qr-code-generator', type: 'article' },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

export default function Page() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 32px 96px' }}>

        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a><span>→</span><span>QR Codes</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>QR Codes · 5 min read</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 18px', lineHeight: 1.2 }}>Free QR Code Generator for Any URL</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>Generate a free QR code for any link — menus, portfolios, products, events, or social profiles. Download and use anywhere, instantly.</p>
          <div style={{ fontSize: 13, color: MUTED, paddingTop: 20, borderTop: `1px solid ${HAIR}` }}>Updated May 2026 · By meshalive team</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>How to generate a free QR code</h2>
          <ol style={{ paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li>Go to <a href="/tools/qr-code-generator" style={{ color: ACCENT }}>meshalive.com/tools/qr-code-generator</a></li>
            <li>Paste any URL into the field</li>
            <li>Your QR code is generated instantly</li>
            <li>Download as PNG and use it anywhere — print, web, presentations</li>
          </ol>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Static QR codes vs Dynamic QR codes — what is the difference?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 24px' }}>
            <div style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 12, padding: '20px' }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>Static QR code</div>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>URL is baked into the QR code</li>
                <li>Cannot change destination after printing</li>
                <li>Good for permanent links</li>
                <li>No click tracking</li>
              </ul>
            </div>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '20px' }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: ACCENT }}>Dynamic QR code ✓</div>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>QR points to a short link</li>
                <li>Update the destination any time</li>
                <li>Track how many scans you get</li>
                <li>Best for print and packaging</li>
              </ul>
            </div>
          </div>
          <p>Meshalive generates <strong>dynamic QR codes</strong> — every QR code points to a Meshalive short link, so you can change where the QR code sends people without reprinting. This is critical for restaurant menus, product packaging, business cards, and event flyers.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Common uses for QR codes</h2>
          <ul style={{ paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Restaurant menus — link to PDF or ordering page', 'Business cards — link to your LinkedIn or portfolio', 'Product packaging — link to user manual or warranty', 'Event flyers — link to registration or ticketing page', 'Real estate signs — link to property listing', 'Social media campaigns — track scans per channel'].map(item => <li key={item}>{item}</li>)}
          </ul>
          <div style={{ background: '#111111', borderRadius: 14, padding: '36px', marginTop: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>Generate your free QR code now</div>
            <p style={{ color: '#777777', fontSize: 14, margin: '0 0 20px' }}>Dynamic QR codes · Instant download · Free forever</p>
            <a href="/tools/qr-code-generator" style={{ display: 'inline-block', background: '#0057ff', color: '#fff', padding: '11px 26px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Generate QR Code →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
