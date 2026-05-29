import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Free URL Shortener for WhatsApp Campaigns | Meshalive' },
  description: 'Shorten links for WhatsApp messages and broadcasts. Free URL shortener with click tracking, QR codes, and custom branded domains. No signup needed.',
  keywords: ['url shortener for whatsapp', 'whatsapp link shortener', 'short links for whatsapp', 'whatsapp url shortener'],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-for-whatsapp' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/url-shortener-for-whatsapp',
    title: { absolute: 'Free URL Shortener for WhatsApp | Meshalive' },
    description: 'Free URL shortener for WhatsApp campaigns. Track clicks, see who opened your links, and share clean branded links in broadcasts.',
    siteName: 'Meshalive',
  },
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
  card: { padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 },
};

export default function WhatsAppShortenerPage() {
  return (
    <main style={S.page}>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#16a34a', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          WhatsApp URL Shortener
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Short links that work<br />perfectly in WhatsApp.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.65 }}>
          Long URLs in WhatsApp broadcasts look spammy and reduce click rates. Shorten any link instantly and track exactly how many contacts clicked — free.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Why URL shorteners matter for WhatsApp marketing</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginTop: 24 }}>
          {[
            { icon: '✂️', title: 'Long URLs break across lines', body: 'WhatsApp wraps text at ~50 characters. A 120-character product URL splits across 3 lines and looks broken. A short link fits on one line and looks professional.' },
            { icon: '📊', title: 'Track who actually clicked', body: "Sending a broadcast to 200 contacts doesn't tell you who engaged. Meshalive tracks every click so you know your true conversion rate." },
            { icon: '🔒', title: 'Short links look trustworthy', body: 'Long URLs with dozens of parameters look like phishing links. A clean short link increases click-through rates — contacts are more likely to tap a link they can read.' },
            { icon: '🔗', title: 'Update destination without resending', body: 'If the destination page changes after you send a broadcast, update the destination URL in your Meshalive dashboard — no need to resend.' },
            { icon: '📱', title: 'QR codes for WhatsApp Status', body: 'Generate a QR code for any short link and share it in WhatsApp Status or print it on flyers. Every scan is tracked as a click.' },
            { icon: '🇮🇳', title: 'Built for Indian businesses', body: 'Analytics timezone defaults to IST. Built for WhatsApp Business broadcasts, UPI payment links, and catalogue sharing workflows.' },
          ].map(c => (
            <div key={c.title} style={S.card}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', margin: 0, lineHeight: 1.65 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Frequently asked questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 24 }}>
          {[
            { q: 'Do Meshalive short links show a preview in WhatsApp?', a: 'Yes. WhatsApp reads the Open Graph tags from the destination URL, even through a redirect. Your product page or landing page preview will show correctly in WhatsApp messages.' },
            { q: 'Can I track clicks from WhatsApp specifically?', a: "Yes. You can use UTM parameters (?utm_source=whatsapp&utm_medium=broadcast) before shortening, and you'll see them in campaign-level analytics in your Meshalive dashboard." },
            { q: 'Can I use WhatsApp Business with Meshalive links?', a: 'Absolutely. Meshalive links work in all WhatsApp contexts — personal messages, WhatsApp Business app, WhatsApp Business API, and WhatsApp Status.' },
            { q: 'Can I shorten a WhatsApp chat link (wa.me)?', a: 'Yes. wa.me links are regular URLs and can be shortened with Meshalive. This is useful when sharing a click-to-chat link in your Instagram bio or website.' },
            { q: 'Does Meshalive work for SMS campaigns too?', a: 'Yes. Meshalive short links work in any text context — SMS, WhatsApp, email, social media, and print QR codes. Every click is tracked regardless of the channel.' },
          ].map((item, i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
              <summary style={{ padding: '18px 22px', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: '#111111', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                {item.q}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div style={{ padding: '16px 22px 18px', fontSize: 14, color: '#6b7280', lineHeight: 1.75, borderTop: '1px solid #e5e7eb' }}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 16px 80px', textAlign: 'center' }}>
        <div style={{ padding: 'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 24 }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: '#111111', margin: '0 0 12px', letterSpacing: '-0.03em' }}>Start tracking WhatsApp clicks today</h2>
          <p style={{ fontSize: 16, color: '#6b7280', margin: '0 auto 32px', maxWidth: 480, lineHeight: 1.65 }}>Free account — unlimited links, full analytics, custom domain. No credit card. Built for Indian businesses.</p>
          <a href="/register" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', background: '#0057ff', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 8, margin: '0 auto' }}>
            Get started free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <p style={{ marginTop: 16, fontSize: 13, color: '#9ca3af' }}>Unlimited links · No credit card · Free forever</p>
        </div>
      </section>

    </main>
  );
}
