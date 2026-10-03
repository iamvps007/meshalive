import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'URL Shortener Without Sign Up — No Login Required | Meshalive' },
  description: 'Shorten URLs instantly with no account, no sign up, no email required. Free anonymous URL shortener with click tracking. Just paste and go.',
  keywords: ['url shortener no login', 'url shortener without sign up', 'url shortener no account', 'free url shortener no registration', 'anonymous url shortener'],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-no-login' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/url-shortener-no-login',
    title: { absolute: 'URL Shortener No Login — Free | Meshalive' },
    description: 'No sign up needed. Paste a long URL and get a short link instantly. Free forever.',
    siteName: 'Meshalive',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Meshalive Anonymous URL Shortener', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Can I shorten a URL without creating an account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Meshalive lets you shorten URLs anonymously — no account, no email, no credit card. Just paste your URL and get a short link instantly. Anonymous links are tracked for 90 days.' } },
      { '@type': 'Question', name: 'What is the difference between anonymous and account links?', acceptedAnswer: { '@type': 'Answer', text: 'Anonymous links work immediately but are tracked for 90 days and cannot be edited or deleted. Account links (free account, no credit card) are permanent, editable, and show full click analytics including country, device, and referrer.' } },
      { '@type': 'Question', name: 'Is Meshalive really free without login?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Anonymous shortening is completely free with no limits. Creating a free account unlocks 100 tracked links per month, full analytics, and permanent links — still no payment needed.' } },
      { '@type': 'Question', name: 'Which URL shorteners work without sign up?', acceptedAnswer: { '@type': 'Answer', text: 'Meshalive, TinyURL, and is.gd allow anonymous shortening. Bitly requires an account for any link creation since 2020. Meshalive is the best no-login option because it also provides click tracking for anonymous links.' } },
    ]},
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
};

export default function NoLoginShortenerPage() {
  return (
    <main style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#16a34a', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          No Sign Up Needed
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Shorten any URL.<br />No account required.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.65 }}>
          Just paste your long URL below and get a short link instantly. No email, no password, no sign up — ever.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Anonymous vs free account — what&apos;s the difference?</h2>
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { title: 'Anonymous (no login)', items: ['Unlimited shortening', 'Basic click count', 'Links active for 90 days', 'Cannot edit destination', 'No custom slug'], good: true },
            { title: 'Free account (no credit card)', items: ['Unlimited links', 'Full analytics (country, device)', 'Permanent links', 'Edit destination anytime', 'Custom slugs'], good: true },
          ].map(col => (
            <div key={col.title} style={{ padding: '24px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 12 }}>{col.title}</div>
              {col.items.map(item => (
                <div key={item} style={{ fontSize: 14, color: '#6b7280', padding: '4px 0', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#16a34a' }}>✓</span> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Frequently asked questions</h2>
        <div style={{ marginTop: 20, border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }}>
          {(jsonLd['@graph'][1] as any).mainEntity.map((faq: any, i: number) => (
            <details key={i} style={{ borderBottom: i < 3 ? '1px solid #e5e7eb' : 'none' }}>
              <summary style={{ padding: '16px 20px', fontSize: 15, fontWeight: 600, cursor: 'pointer', listStyle: 'none' }}>{faq.name}</summary>
              <p style={{ padding: '0 20px 16px', margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
