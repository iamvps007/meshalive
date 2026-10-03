import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Free URL Shortener for Email Campaigns | Meshalive' },
  description: 'Shorten URLs for email campaigns. Clean short links that look professional in newsletters, reduce bounce rates, and track every click with full analytics.',
  keywords: ['url shortener for email', 'email link shortener', 'shorten url for email', 'email campaign url shortener', 'short links for email marketing'],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-for-email' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/url-shortener-for-email',
    title: { absolute: 'Free URL Shortener for Email | Meshalive' },
    description: 'Shorten links for email campaigns. Professional short URLs that track clicks and work in every email client.',
    siteName: 'Meshalive',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Meshalive Email URL Shortener', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free URL shortener for email campaigns with click tracking.' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Why shorten URLs in emails?', acceptedAnswer: { '@type': 'Answer', text: 'Long URLs in emails look unprofessional, break across lines, and are hard to track. Short links look clean, are clickable in any email client, and let you see exactly how many recipients clicked.' } },
      { '@type': 'Question', name: 'Do short links affect email deliverability?', acceptedAnswer: { '@type': 'Answer', text: 'Meshalive short links use a clean msha.live domain with low spam footprint. Using a custom branded domain (your own domain) gives the best deliverability since it matches your sender domain.' } },
      { '@type': 'Question', name: 'Can I track clicks from email campaigns?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every Meshalive link shows total clicks, unique visitors, country, device, and referrer. Full analytics are included free — time-based charts, geo, device, and referrer breakdowns.' } },
      { '@type': 'Question', name: 'Is it free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. 100 tracked links and 5,000 clicks per month are free forever. No credit card needed.' } },
    ]},
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
};

export default function EmailShortenerPage() {
  return (
    <main style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          Email URL Shortener
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Short links that look great<br />in every email.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.65 }}>
          Long URLs in email campaigns break across lines and look unprofessional. Shorten any link instantly and track every click — free.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Why use short links in email?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginTop: 20 }}>
          {[
            { title: 'Look professional', body: 'A clean msha.live/summer-sale link beats a 120-character tracking URL in any newsletter.' },
            { title: 'Track every click', body: 'See who clicked, when, from which country and device. Know which campaigns actually work.' },
            { title: 'Work in all email clients', body: 'Short links never break across lines in Gmail, Outlook, or Apple Mail — long URLs often do.' },
            { title: 'Edit destination anytime', body: 'Sent the wrong URL? Change where the link points without resending the email.' },
          ].map(c => (
            <div key={c.title} style={{ padding: '20px 24px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{c.body}</div>
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
