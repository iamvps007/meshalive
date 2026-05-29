import { Metadata } from 'next';
import TempLinkTool from './TempLinkTool';

export const metadata: Metadata = {
  title: 'Free Temporary Link Generator — Create Expiring Links Online',
  description: 'Create temporary links that expire automatically after 1 hour, 1 day, or 7 days. Free expiring URL generator — no signup required. Perfect for time-sensitive content, trial access, and private document sharing.',
  keywords: ['temporary link generator', 'expiring link creator', 'time-limited link', 'create expiring URL', 'temporary URL shortener', 'self-destructing link', 'link that expires', 'expiring short link free', 'timed link generator', 'private link that expires'],
  openGraph: {
    title: 'Free Temporary Link Generator — Create Links That Expire',
    description: 'Create temporary URLs that automatically expire after 1 hour, 1 day, or 7 days. Free, no signup.',
    url: 'https://meshalive.com/tools/temporary-link-generator',
    siteName: 'Meshalive', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Temporary Link Generator', description: 'Create expiring links in seconds. Set expiry from 1 hour to 7 days.' },
  alternates: { canonical: 'https://meshalive.com/tools/temporary-link-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Meshalive Temporary Link Generator',
  url: 'https://meshalive.com/tools/temporary-link-generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web',
  description: 'Create temporary, expiring short links for free. Set expiry from 1 hour to 7 days — links automatically stop working when they expire.',
  featureList: ['Links expire in 1h, 6h, 24h, 3 days, or 7 days', 'Free to create', 'No signup required', 'Click tracking included', 'Automatic expiry'],
};

const faqs = [
  { q: 'What is a temporary link?', a: 'A temporary link is a URL that automatically stops working after a set time period. When the expiry time is reached, anyone clicking the link will see a "link expired" message instead of being redirected. This is useful for sharing time-sensitive content, trial access pages, promotional offers, or private documents.' },
  { q: 'What happens when a temporary link expires?', a: 'When a Meshalive temporary link expires, visitors are shown a link-expired page rather than being redirected to the original URL. The link is deactivated automatically — you do not need to manually delete it.' },
  { q: 'Can I extend a temporary link after creating it?', a: 'Anonymous temporary links cannot be extended after creation. To manage link expiry, create a free Meshalive account — registered users can edit expiry dates, update destinations, and view click analytics for all their links.' },
  { q: 'What is a self-destructing link?', a: 'A self-destructing link is a URL that automatically deactivates itself after being clicked once or after a specific time period. Meshalive temporary links expire by time — create the link with your chosen expiry window and share it confidently.' },
  { q: 'What are the best use cases for temporary links?', a: 'Temporary links are ideal for: trial product access (e.g., "Try for 24 hours"), flash sale landing pages, private event registration pages, time-limited coupon or promo codes, beta testing invites, and temporary file download links. They create urgency and automatically close access when needed.' },
];

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — No signup required
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Temporary Link Generator
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Create short links that automatically expire after 1 hour, 6 hours, 24 hours, 3 days, or 7 days. Free, no signup needed.
          </p>
          <TempLinkTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Why use expiring links?</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            Temporary links give you control over how long content is accessible. A flash sale link that expires in 24 hours creates real urgency. A beta invite link that expires in 7 days prevents it from spreading beyond your intended audience. A trial access link that expires in 1 hour keeps your product demos tight. Meshalive temporary links are completely free — create as many as you need with no account required.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'Flash sales & promotions', body: 'Create a sale landing page link that expires exactly when your offer ends. Customers who click after expiry know the sale is over.' },
              { title: 'Private document sharing', body: 'Share a private Google Doc or Notion page link that expires after 24 hours. Great for sending proposals or reports securely.' },
              { title: 'Trial & beta access', body: 'Give beta testers or prospects a temporary access link. After it expires, they\'ll need to sign up for continued access — converting trials to users.' },
              { title: 'Time-limited invites', body: 'Event RSVPs, webinar registrations, or WhatsApp group invite links that automatically close after your deadline passes.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', margin: '0 0 10px' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.025em', margin: '0 0 28px' }}>FAQ</h2>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                <summary style={{ padding: '18px 24px', fontSize: 15, fontWeight: 600, color: '#111111', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.q}<span style={{ fontSize: 20, color: '#6b7280', fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <p style={{ padding: '0 24px 18px', margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.75 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
