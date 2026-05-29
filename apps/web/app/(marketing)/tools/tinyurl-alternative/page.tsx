import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Best TinyURL Alternative with Analytics & Custom Domains | Meshalive' },
  description: 'Free TinyURL alternative with full click analytics, custom domains, QR codes, and API access. TinyURL shows zero analytics — Meshalive gives you everything, free.',
  keywords: ['tinyurl alternative', 'tinyurl alternative free', 'better than tinyurl', 'tinyurl with analytics'],
  alternates: { canonical: 'https://meshalive.com/tools/tinyurl-alternative' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/tinyurl-alternative',
    title: { absolute: 'Best TinyURL Alternative with Analytics | Meshalive' },
    description: 'Free TinyURL alternative with full click analytics, custom domains, QR codes, and API — all free. No signup needed to shorten your first link.',
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

export default function TinyURLAlternativePage() {
  return (
    <main style={S.page}>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#0057ff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          TinyURL Alternative
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          TinyURL but with<br />real analytics — free.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.65 }}>
          TinyURL gives you a short link and nothing else. Meshalive gives you a short link plus full click analytics, a custom branded domain, QR codes, and API access — all completely free.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>What TinyURL does not give you (that Meshalive does — free)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginTop: 24 }}>
          {[
            { icon: '📊', title: 'Click analytics', body: 'TinyURL Free shows zero analytics. TinyURL Pro is $9.99/month for basic click counts. Meshalive gives you full geographic, device, browser, and referrer analytics — free.' },
                        { icon: '📱', title: 'QR code generation', body: 'TinyURL has no built-in QR code generator. Meshalive generates a downloadable QR code for every short link instantly — free.' },
            { icon: '🔌', title: 'REST API', body: "TinyURL has a basic API but rate-limits anonymous use heavily. Meshalive's full-featured API lets you create links, pull analytics, and manage domains programmatically." },
            { icon: '🔖', title: 'Custom slugs', body: 'TinyURL lets you pick a slug on the free plan but slugs are first-come-first-served globally. Meshalive gives each account its own slug namespace.' },
            { icon: '👥', title: 'Dashboard and link history', body: "TinyURL Free doesn't save your link history. Meshalive stores all your links in a dashboard so you can manage, edit, and track them over time." },
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
        <h2 style={S.h2}>Meshalive vs TinyURL — comparison</h2>
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #e5e7eb', marginTop: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ padding: '14px 18px', textAlign: 'left', color: '#6b7280', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#f9fafb' }}>Feature</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', color: '#0057ff', fontWeight: 700, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#eff6ff' }}>Meshalive</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', color: '#6b7280', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#f9fafb' }}>TinyURL Free</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', color: '#6b7280', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#f9fafb', whiteSpace: 'nowrap' }}>TinyURL Pro ($9.99/mo)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: 'Short links', m: 'Unlimited', t: 'Unlimited', tp: 'Unlimited' },
                { f: 'Click analytics', m: 'Full analytics', t: 'None', tp: 'Basic click count' },
                                { f: 'QR codes', m: 'Free', t: 'None', tp: 'Included' },
                { f: 'API access', m: 'Free', t: 'Limited', tp: 'Included' },
                { f: 'Link dashboard', m: 'Free', t: 'None', tp: 'Included' },
                { f: 'Price', m: '$0 forever', t: '$0', tp: '$9.99/month' },
              ].map((row, i) => (
                <tr key={row.f} style={{ borderBottom: i < 6 ? '1px solid #e5e7eb' : 'none' }}>
                  <td style={{ padding: '12px 18px', color: '#111111', fontWeight: 500 }}>{row.f}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'center', color: '#111111', fontWeight: 600, background: '#f8faff' }}>{row.m}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'center', color: '#6b7280' }}>{row.t}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'center', color: '#6b7280' }}>{row.tp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Frequently asked questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 24 }}>
          {[
            { q: 'What is the best free TinyURL alternative?', a: 'Meshalive is the most feature-complete free TinyURL alternative. Unlike TinyURL, Meshalive gives you full click analytics, custom branded domains, QR codes, and a REST API — all without any payment or subscription.' },
            { q: 'Does TinyURL track clicks?', a: 'TinyURL Free does not track clicks. TinyURL Pro ($9.99/month) shows basic click counts. Meshalive tracks clicks with geographic, device, browser, and referrer breakdown — free.' },
            { q: 'Can I get a custom domain with Meshalive?', a: 'Yes. Custom domains are included free on Meshalive. You can connect any domain you own and all your short links will use your branded domain instead of msha.live.' },
            { q: 'Is Meshalive safe to use as a URL shortener?', a: 'Yes. All redirects go through HTTPS. Meshalive scans destination URLs against phishing and malware databases before shortening.' },
            { q: 'Can I use Meshalive for WhatsApp and Instagram campaigns?', a: 'Absolutely. Meshalive short links work everywhere — WhatsApp messages and broadcasts, Instagram bio, email newsletters, QR codes on print materials, and SMS campaigns.' },
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
        <div style={{ padding: 'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: 24 }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: '#111111', margin: '0 0 12px', letterSpacing: '-0.03em' }}>Better than TinyURL — and free forever</h2>
          <p style={{ fontSize: 16, color: '#6b7280', margin: '0 auto 32px', maxWidth: 480, lineHeight: 1.65 }}>Shorten your first link above — no signup needed. Or create a free account for unlimited links, custom domain, and full analytics.</p>
          <a href="/register" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', background: '#0057ff', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 8, margin: '0 auto' }}>
            Create free account
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <p style={{ marginTop: 16, fontSize: 13, color: '#9ca3af' }}>No credit card · Unlimited links · Analytics included</p>
        </div>
      </section>

    </main>
  );
}
