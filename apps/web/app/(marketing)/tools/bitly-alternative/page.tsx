import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Best Free Bitly Alternative — Unlimited Links | Meshalive' },
  description: 'The best free Bitly alternative. Meshalive gives you unlimited short links, full click analytics, custom domains, QR codes, and API access — all completely free. No credit card required.',
  keywords: ['bitly alternative', 'free bitly alternative', 'bitly alternative free', 'bitly replacement', 'url shortener like bitly'],
  alternates: { canonical: 'https://meshalive.com/tools/bitly-alternative' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/bitly-alternative',
    title: { absolute: 'Best Free Bitly Alternative — Unlimited Links | Meshalive' },
    description: 'Unlimited short links, full analytics, custom domains, QR codes, and API access — all free. The Bitly alternative that is actually free.',
    siteName: 'Meshalive',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Meshalive',
      url: 'https://meshalive.com/tools/bitly-alternative',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'A free Bitly alternative with unlimited short links, click analytics, QR codes, custom domains, and API access.',
      featureList: ['Unlimited short links', 'Click analytics', 'QR codes', 'Custom domains', 'REST API'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is the best free Bitly alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Meshalive is a strong free Bitly alternative for teams that need short links, analytics, QR codes, and API access without expensive plan limits.' } },
        { '@type': 'Question', name: 'Does Meshalive support branded short links like Bitly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Meshalive supports custom slugs, branded short domains, click analytics, QR codes, and API-based link creation.' } },
      ],
    },
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
  card: { padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 },
};

export default function BitlyAlternativePage() {
  return (
    <main style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#0057ff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          Free Bitly Alternative
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          The Bitly alternative that&apos;s<br />actually free — forever.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.65 }}>
          Bitly Free gives you 10 links/month, zero analytics, and no custom domain. Meshalive gives you unlimited links, full click analytics, custom domains, QR codes, and API access — all free.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Meshalive vs Bitly — side by side</h2>
        <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 28px', lineHeight: 1.65 }}>
          Bitly&apos;s free tier is one of the most restrictive in the industry. Here is exactly what you get with Meshalive versus Bitly Free and Bitly Starter.
        </p>
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #e5e7eb' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ padding: '14px 18px', textAlign: 'left', color: '#6b7280', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#f9fafb' }}>Feature</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', color: '#0057ff', fontWeight: 700, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#eff6ff' }}>Meshalive (Free)</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', color: '#6b7280', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#f9fafb' }}>Bitly (Free)</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', color: '#6b7280', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#f9fafb', whiteSpace: 'nowrap' }}>Bitly Starter ($8/mo)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: 'Short links', m: 'Unlimited', b: '10/month', bs: '500/month' },
                { f: 'Click analytics', m: 'Full (geo, device, referrer)', b: 'None', bs: '30 days' },
                                { f: 'QR codes', m: 'Free', b: 'None', bs: 'Paid add-on' },
                { f: 'API access', m: 'Free', b: 'None', bs: 'Included' },
                { f: 'Team seats', m: 'Free', b: '1', bs: '1' },
                { f: 'Price', m: '$0 forever', b: '$0', bs: '$8/month' },
              ].map((row, i) => (
                <tr key={row.f} style={{ borderBottom: i < 6 ? '1px solid #e5e7eb' : 'none' }}>
                  <td style={{ padding: '12px 18px', color: '#111111', fontWeight: 500 }}>{row.f}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'center', color: '#111111', fontWeight: 600, background: '#f8faff' }}>{row.m}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'center', color: '#6b7280' }}>{row.b}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'center', color: '#6b7280' }}>{row.bs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Why teams switch from Bitly to Meshalive</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginTop: 24 }}>
          {[
            { icon: '🔗', title: 'Unlimited links', body: 'Bitly Free caps you at 10 links/month. Meshalive has no link creation limit. Create as many short links as your campaigns need.' },
            { icon: '📊', title: 'Full click analytics', body: 'Bitly Free shows zero analytics. Meshalive shows click count, geo breakdown, device type, browser, and referrer source — all free.' },
                        { icon: '📱', title: 'QR codes included', body: 'Bitly charges extra for QR codes. Every Meshalive link comes with a free QR code downloadable for print materials.' },
            { icon: '🔌', title: 'API on day one', body: "Bitly gates API access behind paid tiers. Meshalive's API is open to everyone — build integrations and automate link creation." },
                      ].map(c => (
            <div key={c.title} style={S.card}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', margin: 0, lineHeight: 1.65 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Who should use a Bitly alternative?</h2>
        <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 24px', lineHeight: 1.7 }}>
          If you need more than just shortening links, a Bitly alternative makes sense. Marketing teams need campaign-level analytics, founders need branded domains, agencies need shareable dashboards, and developers need API access without enterprise pricing.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {[
            { title: 'Marketers', body: 'Track every campaign, shorten UTM-heavy URLs, and add QR codes for print and offline distribution.' },
            { title: 'Agencies', body: 'Manage multiple clients, keep branded links clean, and avoid paying per-seat or per-link limits too early.' },
            { title: 'Creators', body: 'Share cleaner links in bios, stories, newsletters, and sponsor campaigns while keeping analytics visible.' },
            { title: 'Developers', body: 'Use short-link APIs and redirect infrastructure without locking basic automation behind high-tier plans.' },
          ].map(card => (
            <div key={card.title} style={S.card}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', margin: 0, lineHeight: 1.65 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Frequently asked questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 24 }}>
          {[
            { q: 'Is Meshalive really free with no paid plans?', a: 'Yes. Meshalive is 100% free. There are no paid tiers, no premium features, and no credit card required. You get unlimited links, full analytics, custom domains, QR codes, and API access — all at zero cost, forever.' },
            { q: 'Does Meshalive work as a drop-in Bitly replacement?', a: 'Yes. Meshalive supports everything Bitly does: short link creation, custom slugs, branded domains, click analytics, QR codes, and a REST API.' },
            { q: 'How does Meshalive compare to Bitly Starter ($8/month)?', a: 'Meshalive gives you more than Bitly Starter for free. Bitly Starter gives 500 links/month, 30-day analytics, and 1 custom domain for $8/month. Meshalive gives unlimited links, full analytics, and unlimited custom domains — free.' },
            { q: 'Can I use my own domain with Meshalive?', a: 'Yes. Custom domains are free on Meshalive. Go to Settings > Domains, add your domain, update your DNS CNAME record, and all new links will use your branded domain.' },
            { q: 'Does Meshalive have an API like Bitly?', a: "Yes. Meshalive's REST API lets you create short links, retrieve analytics, manage custom domains, and list links programmatically. The API is fully documented at meshalive.com/docs and is free for all users." },
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
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: '#111111', margin: '0 0 12px', letterSpacing: '-0.03em' }}>Switch from Bitly today — it&apos;s free</h2>
          <p style={{ fontSize: 16, color: '#6b7280', margin: '0 auto 32px', maxWidth: 480, lineHeight: 1.65 }}>No migration fees. No contracts. No credit card. Meshalive gives you everything Bitly charges for, completely free.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href="/register" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', background: '#0057ff', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Get started free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/tools/url-shortener" style={{ padding: '14px 28px', borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none', background: '#fff', color: '#111111', border: '1px solid #e5e7eb', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Try free tool</a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: '#9ca3af' }}>Unlimited links · No credit card · Free forever</p>
        </div>

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, textAlign: 'left' }}>
          {[
            ['URL Shortener', '/tools/url-shortener', 'Try Meshalive directly with the free short-link generator.'],
            ['UTM Builder', '/tools/utm-builder', 'Build campaign links, then shorten them as branded short URLs.'],
            ['Redirect Checker', '/tools/redirect-checker', 'Inspect where short links resolve and keep redirect chains clean.'],
          ].map(([title, href, desc]) => (
            <a key={href} href={href} style={{ textDecoration: 'none', color: 'inherit', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111111', marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{desc}</div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
