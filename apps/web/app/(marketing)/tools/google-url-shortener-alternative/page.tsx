import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Google URL Shortener Alternative — goo.gl Replacement | Meshalive' },
  description: 'Google URL Shortener (goo.gl) shut down permanently in August 2025. Meshalive is the best free replacement with click analytics, QR codes, and custom domains.',
  keywords: ['google url shortener alternative', 'goo.gl alternative', 'goo.gl replacement', 'google link shortener alternative', 'best goo.gl alternative free'],
  alternates: { canonical: 'https://meshalive.com/tools/google-url-shortener-alternative' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/google-url-shortener-alternative',
    title: { absolute: 'Best goo.gl Alternative — Free | Meshalive' },
    description: 'goo.gl is dead. Meshalive replaces Google URL Shortener with free analytics, QR codes, and custom domains.',
    siteName: 'Meshalive',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Meshalive — Google URL Shortener Alternative', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Is Google URL Shortener (goo.gl) still working?', acceptedAnswer: { '@type': 'Answer', text: 'No. Google shut down goo.gl permanently on August 25, 2025. All existing goo.gl short links now return a 404 error. Google does not offer an alternative — you need to switch to a different URL shortener.' } },
      { '@type': 'Question', name: 'What is the best free alternative to goo.gl?', acceptedAnswer: { '@type': 'Answer', text: 'Meshalive is the best free goo.gl replacement. It offers 100 free links per month, full click analytics (country, device, referrer), QR code generation, and custom domains. Unlike goo.gl, Meshalive will not shut down your links without warning.' } },
      { '@type': 'Question', name: 'Do my old goo.gl links still work?', acceptedAnswer: { '@type': 'Answer', text: 'No. All goo.gl links permanently return 404 since August 25, 2025. You need to recreate your short links on a new platform. Meshalive lets you choose a custom slug so you can create memorable links similar to your old goo.gl ones.' } },
      { '@type': 'Question', name: 'How is Meshalive different from goo.gl?', acceptedAnswer: { '@type': 'Answer', text: 'Meshalive has everything goo.gl had plus more: click analytics with country/device/referrer breakdown, QR codes for every link, custom domains, link editing, and link expiry. goo.gl had basic click stats only. Meshalive also has an API for developers.' } },
    ]},
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
};

export default function GoogleAlternativePage() {
  return (
    <main style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fefce8', border: '1px solid #fde68a', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#b45309', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          goo.gl shut down Aug 2025
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          The best free replacement<br />for Google URL Shortener.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.65 }}>
          goo.gl is gone permanently. Meshalive replaces it with everything goo.gl had — plus click analytics, QR codes, and custom domains. Free forever.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Meshalive vs Google URL Shortener</h2>
        <div style={{ overflowX: 'auto', marginTop: 20 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                {['Feature', 'Meshalive', 'Google goo.gl'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Status', 'Live', 'Shut down Aug 2025'],
                ['Links', 'Unlimited, free', 'N/A — gone'],
                ['Click analytics', 'Full (geo, device, referrer)', 'Basic click count only'],
                ['QR codes', 'Free', 'Not available'],
                ['Custom domain', 'Free', 'Not available'],
                ['API access', 'Free — included', 'Was free'],
                ['Link editing', 'Yes', 'No'],
                ['India billing', 'INR + UPI', 'N/A'],
              ].map(([feat, ml, gg], i) => (
                <tr key={feat} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151', borderBottom: '1px solid #f3f4f6' }}>{feat}</td>
                  <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 600, borderBottom: '1px solid #f3f4f6' }}>✓ {ml}</td>
                  <td style={{ padding: '12px 16px', color: '#9ca3af', borderBottom: '1px solid #f3f4f6' }}>{gg}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
