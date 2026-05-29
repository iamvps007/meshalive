import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best URL Shortener for Instagram Bio & Stories (Free)',
  description: 'How to use a URL shortener on Instagram — for bio links, Stories, and captions. Track clicks from Instagram for free with Meshalive.',
  keywords: ['url shortener for instagram', 'instagram link shortener', 'shorten url for instagram', 'instagram bio link shortener', 'url shortener social media'],
  alternates: { canonical: 'https://meshalive.com/blog/url-shortener-for-instagram' },
  openGraph: { title: 'Best URL Shortener for Instagram (Free)', description: 'Track every click from your Instagram bio and Stories links.', url: 'https://meshalive.com/blog/url-shortener-for-instagram', type: 'article' },
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
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a><span>→</span><span>Social Media</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>Social Media · 5 min read</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 18px', lineHeight: 1.2 }}>Best URL Shortener for Instagram Bio & Stories</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>Instagram only allows one clickable link in your bio. Here is how to make that link count — and how to know exactly how many people are clicking it.</p>
          <div style={{ fontSize: 13, color: MUTED, paddingTop: 20, borderTop: `1px solid ${HAIR}` }}>Updated May 2026 · By meshalive team</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Why short links matter on Instagram</h2>
          <p>Instagram does not make links in captions clickable. The only place followers can click a link is your bio — and in Stories (via the link sticker). A clean, short link in your bio looks more professional and is easier to remember if someone screenshots your profile.</p>
          <p>More importantly: without a URL shortener with analytics, you have no idea how many people are clicking your bio link. You might be getting 500 profile visits a day but only 2 link clicks — that tells you something is wrong with your call-to-action.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>How to create a short link for your Instagram bio</h2>
          <ol style={{ paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li>Go to <a href="/register" style={{ color: ACCENT }}>meshalive.com</a> and create a free account</li>
            <li>Click <strong>New link</strong> → paste your destination URL (website, shop, landing page)</li>
            <li>Set a custom slug: e.g. <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>msha.live/yourname</code></li>
            <li>Copy the short link → go to Instagram → Edit Profile → paste in the Website field</li>
            <li>Open your Meshalive dashboard any time to see click counts</li>
          </ol>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Track Instagram Story link clicks</h2>
          <p>When you add a link sticker to an Instagram Story, use your Meshalive short link instead of the raw URL. Every time someone taps the sticker, it counts as a click in your dashboard. This tells you exactly how well your Story content is driving traffic.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Pro tip: Change your bio link without changing your URL</h2>
          <p>If you run campaigns or change your offer regularly, keep the same short link in your bio forever (e.g. <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>msha.live/myshop</code>) and just update where it points in your Meshalive dashboard. No need to update your Instagram bio every time.</p>
          <div style={{ background: '#111111', borderRadius: 14, padding: '36px', marginTop: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>Create your Instagram bio link</div>
            <p style={{ color: '#777777', fontSize: 14, margin: '0 0 20px' }}>Free forever · Custom slugs · Real-time click tracking</p>
            <a href="/register" style={{ display: 'inline-block', background: '#0057ff', color: '#fff', padding: '11px 26px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Get started free →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
