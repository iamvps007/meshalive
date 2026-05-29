import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Shorten a URL in 3 Steps (Free)',
  description: 'Learn how to shorten any URL for free in seconds. No account needed. Step-by-step guide to creating short links with click tracking.',
  keywords: ['how to shorten a url', 'shorten url free', 'how to create short link', 'url shortener how to use', 'shorten a link'],
  alternates: { canonical: 'https://meshalive.com/blog/how-to-shorten-a-url' },
  openGraph: { title: 'How to Shorten a URL in 3 Steps (Free)', description: 'Step-by-step guide to shortening any URL for free.', url: 'https://meshalive.com/blog/how-to-shorten-a-url', type: 'article' },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

export default function Page() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 32px 96px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a><span>→</span><span>Guide</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>Guide · 4 min read</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 18px', lineHeight: 1.2 }}>How to Shorten a URL in 3 Steps (Free)</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>Shortening a URL takes less than 10 seconds. Here is the simplest way to do it — no account required.</p>
          <div style={{ fontSize: 13, color: MUTED, paddingTop: 20, borderTop: `1px solid ${HAIR}` }}>Updated May 2026 · By meshalive team</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Step 1 — Paste your long URL</h2>
          <p>Go to <a href="/tools/url-shortener" style={{ color: ACCENT }}>meshalive.com/tools/url-shortener</a>. Paste the long URL you want to shorten into the input field. This works with any URL — YouTube videos, Google Docs, product pages, articles, or affiliate links.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Step 2 — Click &quot;Shorten&quot;</h2>
          <p>Click the Shorten button. In under a second, you will get a short link like <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>msha.live/abc123</code>. No account or sign-up is needed for this step.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Step 3 — Copy and share</h2>
          <p>Click the copy button next to your short link. Paste it anywhere — social media, emails, SMS, bio sections, print materials, or presentations.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>Want to track who clicks?</h2>
          <p>Create a free Meshalive account to see real-time analytics on every link: total clicks, clicks by day, top countries, and device breakdown. Links you create while logged in are saved to your dashboard and can be edited at any time.</p>
          <div style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 12, padding: '24px', margin: '32px 0' }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: INK, marginBottom: 12 }}>Why use a URL shortener?</div>
            <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
              <li>Long URLs look unprofessional in emails and social posts</li>
              <li>Short links are easier to type on mobile</li>
              <li>You can track how many people click your links</li>
              <li>Short links fit in SMS messages and print materials</li>
              <li>You can generate a QR code from any short link</li>
            </ul>
          </div>
          <div style={{ background: '#111111', borderRadius: 14, padding: '36px', marginTop: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>Shorten your first URL now</div>
            <p style={{ color: '#777777', fontSize: 14, margin: '0 0 20px' }}>Free forever. No account needed to get started.</p>
            <a href="/tools/url-shortener" style={{ display: 'inline-block', background: '#0057ff', color: '#fff', padding: '11px 26px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Shorten a URL →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
