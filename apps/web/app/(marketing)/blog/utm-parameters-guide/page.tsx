import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UTM Parameters: The Complete Guide for 2026',
  description: 'Learn how to use UTM parameters to track your marketing campaigns in Google Analytics. Step-by-step guide with examples for every channel.',
  keywords: ['utm parameters', 'utm tracking', 'utm builder', 'how to use utm parameters', 'utm parameters guide', 'utm tags marketing'],
  alternates: { canonical: 'https://meshalive.com/blog/utm-parameters-guide' },
  openGraph: { title: 'UTM Parameters: The Complete Guide for 2026', description: 'How to use UTM parameters to track every campaign click.', url: 'https://meshalive.com/blog/utm-parameters-guide', type: 'article' },
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
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a><span>→</span><span>Analytics</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>Analytics · 9 min read</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 18px', lineHeight: 1.2 }}>UTM Parameters: The Complete Guide for 2026</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>UTM parameters are small tags you add to URLs so Google Analytics can tell you exactly which campaign, channel, and piece of content is driving traffic. Here is everything you need to know.</p>
          <div style={{ fontSize: 13, color: MUTED, paddingTop: 20, borderTop: `1px solid ${HAIR}` }}>Updated May 2026 · By meshalive team</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>What are UTM parameters?</h2>
          <p>UTM stands for Urchin Tracking Module (Urchin was the analytics company Google acquired to build Google Analytics). UTM parameters are query string tags added to the end of a URL, like this:</p>
          <pre style={{ background: '#f3f4f6', color: '#111', padding: '16px 20px', borderRadius: 10, fontSize: 13, overflowX: 'auto', margin: '16px 0' }}>{`https://yoursite.com/sale?utm_source=instagram&utm_medium=social&utm_campaign=summer-sale`}</pre>
          <p>When someone clicks this link, Google Analytics records all three values and shows you exactly how much traffic came from that campaign.</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>The 5 UTM parameters explained</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '16px 0 24px' }}>
            {[
              { param: 'utm_source', required: true, desc: 'Where the traffic comes from', examples: 'instagram, google, newsletter, twitter' },
              { param: 'utm_medium', required: true, desc: 'The marketing channel', examples: 'social, email, cpc, organic, referral' },
              { param: 'utm_campaign', required: true, desc: 'The campaign name', examples: 'summer-sale, product-launch, black-friday' },
              { param: 'utm_content', required: false, desc: 'Which specific link or ad', examples: 'header-cta, blue-button, post-123' },
              { param: 'utm_term', required: false, desc: 'Paid search keyword (PPC only)', examples: 'url+shortener, free+link+shortener' },
            ].map(row => (
              <div key={row.param} style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 10, padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <code style={{ background: '#111', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 13 }}>{row.param}</code>
                  {row.required && <span style={{ fontSize: 11, fontWeight: 700, color: '#dc2626', background: '#fef2f2', padding: '2px 8px', borderRadius: 999 }}>Required</span>}
                </div>
                <div style={{ fontSize: 14, marginBottom: 4 }}>{row.desc}</div>
                <div style={{ fontSize: 13, color: MUTED }}>Examples: {row.examples}</div>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '40px 0 14px' }}>UTM best practices</h2>
          <ul style={{ paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><strong>Always use lowercase.</strong> utm_source=Instagram and utm_source=instagram appear as two different sources in Analytics.</li>
            <li><strong>Use hyphens, not underscores or spaces.</strong> summer-sale works better than summer_sale or summer%20sale.</li>
            <li><strong>Be consistent.</strong> If you call it &quot;email&quot; this month, don&apos;t switch to &quot;newsletter&quot; next month.</li>
            <li><strong>Shorten the URL after adding UTMs.</strong> Long UTM URLs look ugly. Paste the full URL into Meshalive, which creates a clean short link that preserves all your tracking parameters.</li>
          </ul>
          <div style={{ background: '#111111', borderRadius: 14, padding: '36px', marginTop: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>Shorten your UTM links for free</div>
            <p style={{ color: '#777777', fontSize: 14, margin: '0 0 20px' }}>Clean short links that preserve all your UTM tracking parameters.</p>
            <a href="/tools/url-shortener" style={{ display: 'inline-block', background: '#0057ff', color: '#fff', padding: '11px 26px', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Shorten a UTM link →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
