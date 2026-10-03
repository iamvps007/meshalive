import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Link in Bio for Instagram (2026) — No Paywalls | Meshalive',
  description: 'Build a beautiful Instagram bio landing page with 14 themes, Amazon affiliate storefront cards, and WhatsApp bookings. 100% free forever.',
  alternates: { canonical: 'https://meshalive.com/tools/link-in-bio-for-instagram' },
  openGraph: {
    title: 'Free Link in Bio for Instagram (2026) — No Paywalls | Meshalive',
    description: 'Build a beautiful Instagram bio landing page with 14 themes, Amazon affiliate storefront cards, and WhatsApp bookings. 100% free forever.',
    url: 'https://meshalive.com/tools/link-in-bio-for-instagram',
    siteName: 'Meshalive',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Meshalive Link in Bio for Instagram',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '820', bestRating: '5' },
};

export default function Page() {
  return (
    <div style={{ background: '#ffffff', color: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'inline-block', background: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
          INSTAGRAM CREATOR SUITE
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2, margin: '0 0 16px' }}>
          The Best Free Link in Bio for Instagram Creators
        </h1>
        <p style={{ fontSize: 19, color: '#475569', lineHeight: 1.6, margin: '0 0 32px', maxWidth: 720 }}>
          One bio link to showcase your shop, latest reels, sponsorships, and WhatsApp bookings with 14 designer themes and zero paywalls.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
          <Link
            href="/register"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#0078D4',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0,120,212,0.3)',
            }}
          >
            Create Your Free Mini-Site →
          </Link>
          <Link
            href="/tools/link-in-bio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              padding: '14px 24px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Explore All Features
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 64 }}>
          {[
      { t: '14 Designer Themes', d: 'Choose from Sunset Radiant, Velvet Rose, Midnight OLED, or Neon gradients to match your aesthetic.' },
      { t: 'Affiliate Shop Cards', d: 'Add product cards with direct Amazon India, Myntra, and Flipkart affiliate links that never strip cookies.' },
      { t: '1-Tap WhatsApp Chat', d: 'Let brands and clients book collaborations directly via an instant WhatsApp button.' },
      { t: 'Zero Monthly Caps', d: 'Unlimited links, unlimited clicks, and full real-time analytics with zero subscription fees.' }
    ].map((item, i) => (
      <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px' }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>{item.t}</h3>
        <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.6 }}>{item.d}</p>
      </div>
    ))}
        </div>
      </div>
    </div>
  );
}
