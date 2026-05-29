import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Create a Custom Short URL for Free',
  description: 'Create custom short URLs with your own slug instead of random characters. Free, no credit card. Use msha.live/your-brand for cleaner, more clickable links.',
  keywords: ['custom short url', 'custom url shortener', 'custom slug url shortener', 'branded short link free', 'personalized url shortener'],
  alternates: { canonical: 'https://meshalive.com/blog/custom-short-url' },
  openGraph: { title: 'How to Create a Custom Short URL for Free', description: 'Create short URLs with custom slugs — msha.live/your-brand.', url: 'https://meshalive.com/blog/custom-short-url', type: 'article' },
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
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a><span>→</span><span>Guide</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>Guide · 4 min read</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 18px', lineHeight: 1.2 }}>How to Create a Custom Short URL for Free</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>Instead of getting <code>msha.live/x4k9p2</code>, you can choose your own slug: <code>msha.live/sale</code> or <code>msha.live/resume</code>. Here is how.</p>
          <div style={{ fontSize: 13, color: MUTED, paddingTop: 20, borderTop: `1px solid ${HAIR}` }}>Updated May 2026 · By meshalive team</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>What is a custom short URL?</h2>
          <p>A custom short URL is a short link where you choose the ending (called the slug) instead of getting a random string of characters. For example:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '16px 0 24px', fontSize: 15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ color: '#dc2626', fontFamily: 'monospace', background: '#fef2f2', padding: '4px 12px', borderRadius: 6 }}>msha.live/x4k9p2</span>
              <span style={{ color: MUTED }}>← random (default)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ color: '#16a34a', fontFamily: 'monospace', background: '#f0fdf4', padding: '4px 12px', borderRadius: 6 }}>msha.live/summer-sale</span>
              <span style={{ color: MUTED }}>← custom slug ✓</span>
            </div>
          </div>
          <p>Custom slugs are more memorable, look more professional, and get more clicks because people can see what they are clicking before they tap.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>How to create a custom short URL on meshalive</h2>
          <ol style={{ paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li>Create a free account at <a href="/register" style={{ color: ACCENT }}>meshalive.com/register</a></li>
            <li>Click <strong>New short link</strong> in your dashboard</li>
            <li>Paste your destination URL</li>
            <li>In the <em>Custom slug</em> field, type your preferred slug (e.g. <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>summer-sale</code>)</li>
            <li>Click <strong>Create short link</strong> — your custom URL is ready instantly</li>
          </ol>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Custom URL ideas by use case</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14, margin: '16px 0' }}>
            {[
              { use: 'Portfolio / resume', ex: 'msha.live/john-cv' },
              { use: 'Product launch', ex: 'msha.live/new-product' },
              { use: 'Instagram bio', ex: 'msha.live/myshop' },
              { use: 'Event registration', ex: 'msha.live/event-2026' },
              { use: 'Newsletter CTA', ex: 'msha.live/subscribe' },
              { use: 'Affiliate link', ex: 'msha.live/my-deal' },
            ].map(row => (
              <div key={row.use} style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 8, padding: '12px 14px' }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{row.use}</div>
                <code style={{ fontSize: 13, color: ACCENT }}>{row.ex}</code>
              </div>
            ))}
          </div>
          <div style={{ background: '#111111', borderRadius: 14, padding: '36px', marginTop: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>Create your custom short URL</div>
            <p style={{ color: '#777777', fontSize: 14, margin: '0 0 20px' }}>Free forever · Custom slugs · Click analytics</p>
            <a href="/register" style={{ display: 'inline-block', background: '#0057ff', color: '#fff', padding: '11px 26px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Get started free →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
