import type { Metadata } from 'next';
import HomePage from './home-client';

export const metadata: Metadata = {
  title: { absolute: 'Free URL Shortener with Analytics & QR Codes — Meshalive' },
  description: 'Free URL shortener with real-time click analytics and QR codes. Shorten any URL instantly — no account needed. Free forever, no limits, no credit card.',
  alternates: { canonical: 'https://meshalive.com' },
  openGraph: {
    title: 'Free URL Shortener with Analytics & QR Codes — Meshalive',
    description: 'Free URL shortener with click analytics, dynamic QR codes, and custom slugs. Create short links in seconds — no account required.',
    url: 'https://meshalive.com',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Meshalive really free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Meshalive is completely free with no hidden limits. You can create unlimited short links, view click analytics, generate QR codes, and use the REST API — all at no cost, with no credit card required.' },
    },
    {
      '@type': 'Question',
      name: 'What is a URL shortener?',
      acceptedAnswer: { '@type': 'Answer', text: 'A URL shortener converts a long web address into a short, shareable link. For example, a link like https://yoursite.com/blog/how-to-track-links-2026 becomes msha.live/abc123. Short links are easier to share on social media, in emails, and on printed materials.' },
    },
    {
      '@type': 'Question',
      name: 'Can I track who clicks my short links?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every short link created with Meshalive comes with real-time click analytics. You can see total clicks, the countries your visitors are from, which devices they use (mobile, desktop, tablet), referring websites, and the time of day clicks happen.' },
    },
    {
      '@type': 'Question',
      name: 'Does Meshalive support custom domains?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can use your own branded domain for short links — for example, go.yourcompany.com instead of msha.live. Custom domains are available on paid plans starting at $4 per month.' },
    },
    {
      '@type': 'Question',
      name: 'How do I create a QR code for my link?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every short link you create on Meshalive automatically gets a QR code. You can download it as a PNG file and use it on business cards, flyers, packaging, or any printed material. QR codes are dynamic — you can update the destination URL without reprinting.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a Meshalive API?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Meshalive provides a full REST API that lets you create short links, retrieve analytics, manage domains, and automate link creation programmatically. The API is available on all plans including the free tier.' },
    },
  ],
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';

export default function Page() {
  return (
    <>
      <HomePage />

      {/* SEO content section — server-rendered */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section style={{ background: '#f9fafb', borderTop: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 80px' }}>

          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: INK, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            The free URL shortener with no limits
          </h2>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.8, margin: '0 0 48px', maxWidth: 680 }}>
            Meshalive is a free URL shortener built for marketers, developers, and creators who need reliable short links with real analytics — without paying $35 a month. Shorten any URL in seconds, track every click in real time, and generate QR codes for print and digital use. No account required to get started.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 64 }}>
            {[
              {
                title: 'Real-time click analytics',
                body: 'See exactly where your clicks come from — country, city, device type, browser, and referrer. Analytics update instantly, so you can monitor campaigns as they run without waiting for daily reports.',
              },
              {
                title: 'QR code generator',
                body: 'Every short link automatically gets a QR code you can download as a PNG. QR codes are dynamic — change the destination URL anytime without reprinting. Ideal for packaging, menus, business cards, and event materials.',
              },
              {
                title: 'Custom slugs & branded domains',
                body: 'Choose your own link ending — msha.live/your-brand — instead of a random string. On paid plans, use your own domain like go.yourcompany.com for fully branded short links that build trust with your audience.',
              },
              {
                title: 'REST API for developers',
                body: 'Create short links, pull analytics, and manage domains programmatically using the Meshalive REST API. Unlike competitors who lock API access behind $199/month enterprise plans, Meshalive includes full API access on every plan.',
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 800, color: INK, letterSpacing: '-0.025em', margin: '0 0 32px' }}>
            Frequently asked questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: `1px solid ${HAIR}`, borderRadius: 14, overflow: 'hidden' }}>
            {faqSchema.mainEntity.map((item, i) => (
              <details key={i} style={{ borderBottom: i < faqSchema.mainEntity.length - 1 ? `1px solid ${HAIR}` : 'none' }}>
                <summary style={{
                  padding: '18px 24px', fontSize: 15, fontWeight: 600, color: INK,
                  cursor: 'pointer', listStyle: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {item.name}
                  <span style={{ fontSize: 20, color: MUTED, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <p style={{ padding: '0 24px 18px', margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.75 }}>
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontSize: 15, color: MUTED, margin: '0 0 20px', lineHeight: 1.6 }}>
              Ready to start shortening links? It takes under 10 seconds — no account, no credit card.
            </p>
            <a href="#shorten" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 30px', background: INK, color: '#fff',
              borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              Shorten your first link free
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
