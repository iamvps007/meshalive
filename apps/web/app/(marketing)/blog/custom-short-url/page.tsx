import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Create a Custom Short URL for Free (2026)',
  description: 'Create short URLs with a custom slug — msha.live/your-brand — instead of random characters. Free for basic use. Step-by-step guide with use cases, custom domain setup, and FAQ.',
  keywords: ['custom short url', 'custom url shortener', 'custom slug url shortener', 'branded short link free', 'personalized url shortener', 'custom short link', 'vanity url shortener'],
  alternates: { canonical: 'https://meshalive.com/blog/custom-short-url' },
  openGraph: {
    title: 'How to Create a Custom Short URL for Free',
    description: 'Choose your own slug instead of random characters: msha.live/your-brand. Step-by-step guide to custom short links.',
    url: 'https://meshalive.com/blog/custom-short-url',
    type: 'article',
    siteName: 'Meshalive',
  },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

export default function CustomShortURLPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 32px 96px' }}>

        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a>
          <span>→</span>
          <span>Guide</span>
        </div>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>Guide · 6 min read</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px', lineHeight: 1.2 }}>
            How to Create a Custom Short URL for Free
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.75, margin: 0 }}>
            Instead of a random string like <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 15 }}>msha.live/x4k9p2</code>, you can pick your own ending: <code style={{ background: '#f0fdf4', padding: '2px 6px', borderRadius: 4, fontSize: 15 }}>msha.live/summer-sale</code>. Here is exactly how to do it, when it matters, and how to go further with a custom domain.
          </p>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${HAIR}`, fontSize: 13, color: MUTED }}>
            Updated June 2026 · By Meshalive team
          </div>
        </div>

        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>

          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>What is a custom short URL?</h2>
          <p>A custom short URL is a short link where you control the last part of the path — called the slug. Most URL shorteners generate random slugs automatically. With a custom slug, you choose something meaningful instead.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '24px 0 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#dc2626', background: '#fef2f2', padding: '2px 8px', borderRadius: 4 }}>Random</span>
                <code style={{ fontFamily: 'monospace', background: '#fef2f2', color: '#b91c1c', padding: '6px 12px', borderRadius: 6, fontSize: 14 }}>msha.live/x4k9p2mr</code>
              </div>
              <span style={{ color: MUTED, fontSize: 14 }}>No signal. Hard to remember. Looks automated.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#16a34a', background: '#f0fdf4', padding: '2px 8px', borderRadius: 4 }}>Custom</span>
                <code style={{ fontFamily: 'monospace', background: '#f0fdf4', color: '#15803d', padding: '6px 12px', borderRadius: 6, fontSize: 14 }}>msha.live/summer-sale</code>
              </div>
              <span style={{ color: MUTED, fontSize: 14 }}>Descriptive. Memorable. Gets more clicks.</span>
            </div>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Step-by-step: create a custom short URL on Meshalive</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${HAIR}` }}>
            {[
              {
                num: '1',
                title: 'Create a free Meshalive account',
                body: 'Custom slugs require a Meshalive account (Starter plan, $4/month). Go to meshalive.com/register — no credit card required to start. The free plan creates links with random slugs; the Starter plan unlocks custom slugs.',
              },
              {
                num: '2',
                title: 'Open the link creation panel',
                body: 'In your dashboard, click "New short link" or press the keyboard shortcut C. A slide-in panel opens with fields for the destination URL, title, and slug.',
              },
              {
                num: '3',
                title: 'Paste your destination URL',
                body: 'Enter the long URL you want to shorten — a product page, registration form, Google Doc, YouTube video, or any other URL. Include any UTM parameters before shortening so the short link carries them silently.',
              },
              {
                num: '4',
                title: 'Type your custom slug',
                body: 'In the "Custom slug" field, type your chosen ending. Use lowercase letters, numbers, and hyphens. Examples: summer-sale, product-launch, my-cv, event-2026. Meshalive will tell you instantly if the slug is already taken.',
              },
              {
                num: '5',
                title: 'Click Create',
                body: 'Your custom short link is ready immediately: msha.live/your-slug. Copy it and share it anywhere. Click analytics start tracking from the first visit.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ display: 'flex', gap: 20, padding: '20px 0', borderBottom: `1px solid ${HAIR}` }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: ACCENT, color: '#fff', fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>{num}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 6 }}>{title}</div>
                  <p style={{ margin: 0, color: MUTED, fontSize: 15 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Use cases */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>When to use a custom slug</h2>
          <p>Custom slugs matter most in these situations:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0 32px' }}>
            {[
              { use: 'Print materials', ex: 'msha.live/menu', detail: 'Business cards, banners, flyers, packaging. People need to type the URL.' },
              { use: 'Instagram / TikTok bio', ex: 'msha.live/shop', detail: 'Your one bio link should be short and memorable. Update the destination each campaign.' },
              { use: 'Video or podcast CTA', ex: 'msha.live/free-guide', detail: 'Viewers hear the URL, not see it. Random slugs are impossible to recall.' },
              { use: 'Campaign tracking', ex: 'msha.live/black-friday', detail: 'Slug tells the team exactly which link belongs to which campaign without opening analytics.' },
              { use: 'Professional email / proposals', ex: 'msha.live/portfolio', detail: 'msha.live/john-cv reads like intent. msha.live/x4k9 looks like spam.' },
              { use: 'Affiliate links', ex: 'msha.live/my-deal', detail: 'A clean slug gets more clicks than a raw affiliate URL with 200 characters of tracking parameters.' },
              { use: 'WhatsApp campaigns', ex: 'msha.live/offer-june', detail: 'Clean slugs look legitimate in broadcast messages. Long URLs get fewer taps.' },
              { use: 'QR codes', ex: 'msha.live/scan-me', detail: 'The slug shows under the QR in print. A meaningful slug reinforces the CTA.' },
            ].map(({ use, ex, detail }) => (
              <div key={use} style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontWeight: 700, color: INK, fontSize: 14, marginBottom: 4 }}>{use}</div>
                <code style={{ fontSize: 13, color: ACCENT, display: 'block', marginBottom: 6 }}>{ex}</code>
                <div style={{ color: MUTED, fontSize: 13 }}>{detail}</div>
              </div>
            ))}
          </div>

          {/* Custom domain section */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Custom slug vs custom domain</h2>
          <p>A custom slug changes the path: <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>msha.live/your-slug</code>. A custom domain changes the entire domain: <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>links.yourbrand.com/slug</code>. Both are available on the Meshalive Starter plan ($4/month).</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '20px 0 32px' }}>
            <div style={{ border: `1px solid ${HAIR}`, borderRadius: 10, padding: '20px' }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: INK, marginBottom: 8 }}>Custom slug</div>
              <code style={{ display: 'block', fontSize: 13, color: ACCENT, marginBottom: 12, background: '#eff6ff', padding: '4px 8px', borderRadius: 4 }}>msha.live/your-brand</code>
              <ul style={{ paddingLeft: 16, margin: 0, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: MUTED }}>
                <li>Free with Starter plan</li>
                <li>Instant setup</li>
                <li>Shared msha.live domain</li>
                <li>Good for personal and small business use</li>
              </ul>
            </div>
            <div style={{ border: `1px solid #bfdbfe`, background: '#f0f7ff', borderRadius: 10, padding: '20px' }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: INK, marginBottom: 8 }}>Custom domain</div>
              <code style={{ display: 'block', fontSize: 13, color: ACCENT, marginBottom: 12, background: '#dbeafe', padding: '4px 8px', borderRadius: 4 }}>links.yourbrand.com/slug</code>
              <ul style={{ paddingLeft: 16, margin: 0, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: MUTED }}>
                <li>Included in Starter plan ($4/mo)</li>
                <li>5-minute setup via DNS CNAME</li>
                <li>Your brand in every link</li>
                <li>Higher trust and click-through rates</li>
              </ul>
            </div>
          </div>
          <p>To set up a custom domain: go to <strong>Dashboard → Settings → Custom Domains → Add domain</strong>. Enter your domain, add the CNAME record to your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.), and it is active within minutes. All links you create will use your domain instead of msha.live.</p>

          {/* Slug tips */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Slug best practices</h2>
          <ul style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><strong>Use hyphens, not underscores.</strong> <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>summer-sale</code> is easier to read and type than <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>summer_sale</code>.</li>
            <li><strong>Keep it short.</strong> 2–4 words is ideal. Under 20 characters total. The point is to make the URL shorter and memorable, not to describe the destination fully.</li>
            <li><strong>Make it campaign-specific.</strong> Include the campaign name or date: <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>diwali26</code>, <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>summer-sale</code>. This makes your dashboard readable without opening each link.</li>
            <li><strong>Add a brand prefix for shared workspaces.</strong> <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>brand-sale</code> instead of just <code style={{ background: '#f3f4f6', padding: '2px 5px', borderRadius: 4, fontSize: 14 }}>sale</code> — prevents slug conflicts if team members are creating links for different clients.</li>
            <li><strong>Update destinations, not slugs.</strong> If a campaign slug is already shared and printed, update the destination URL in the dashboard rather than creating a new slug. Everyone with the old link still lands in the right place.</li>
          </ul>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 20px' }}>Frequently asked questions</h2>
          <div style={{ borderTop: `1px solid ${HAIR}` }}>
            {[
              {
                q: 'Can I create a custom short URL for free?',
                a: 'Custom slugs on Meshalive require the Starter plan at $4/month. The free plan creates links with random 8-character slugs. If you need just one custom link (e.g. for a bio), the Starter plan at $4/month is the most affordable option available — comparable tools charge $10–$35/month for the same feature.',
              },
              {
                q: 'What if the slug I want is already taken?',
                a: 'Slugs are unique across the msha.live namespace — if another user has created msha.live/sale, you cannot use that slug. Add a brand prefix: msha.live/yourbrand-sale. On a custom domain (links.yourbrand.com), slugs are only shared within your own workspace, so conflicts with other Meshalive users do not apply.',
              },
              {
                q: 'Can I change a custom slug after creating the link?',
                a: 'You can change the destination URL of any link at any time. Changing the slug itself creates a new URL — any places you have already shared the old slug will stop working. For this reason, it is better to update the destination than to change the slug.',
              },
              {
                q: 'Do custom short URLs affect SEO?',
                a: 'Short links use 301 (permanent) redirects, which pass link equity to the destination. The slug itself does not affect the SEO of the destination page. However, a clean custom slug in a social media post or email looks more credible, which indirectly increases click-through rates — a positive engagement signal.',
              },
              {
                q: 'Can I use a custom domain instead of msha.live?',
                a: 'Yes. The Starter plan ($4/month) includes one custom domain. Go to Dashboard → Settings → Custom Domains → Add domain. Add a CNAME DNS record pointing to msha.live, and all your links will use your domain. Setup takes about 5 minutes. DNS propagation is usually instant with Cloudflare.',
              },
              {
                q: 'Is there a limit on how many custom slugs I can create?',
                a: 'No. The Starter plan allows unlimited links with custom slugs. The only constraint is slug uniqueness — each slug within a domain namespace must be unique. There is no cap on the total number of custom links.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: `1px solid ${HAIR}`, padding: '20px 0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, margin: '0 0 8px' }}>{q}</h3>
                <p style={{ color: MUTED, margin: 0, fontSize: 15, lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#f9fafb', border: `1px solid ${HAIR}`, borderRadius: 10, padding: '20px 24px', margin: '40px 0' }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: INK }}>Related guides</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="/blog/how-to-shorten-a-url" style={{ color: ACCENT, fontSize: 14, textDecoration: 'none' }}>How to shorten a URL (free, no sign-up) →</a>
              <a href="/blog/url-shortener-with-analytics" style={{ color: ACCENT, fontSize: 14, textDecoration: 'none' }}>Best free URL shorteners with analytics →</a>
              <a href="/tools/url-shortener" style={{ color: ACCENT, fontSize: 14, textDecoration: 'none' }}>Free URL shortener tool →</a>
            </div>
          </div>

          <div style={{ background: '#111111', borderRadius: 16, padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>Create your custom short URL</div>
            <p style={{ color: '#6b7280', fontSize: 15, margin: '0 0 24px' }}>Custom slugs · Custom domains · Click analytics · From $4/mo</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/register" style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                Get started free →
              </a>
              <a href="/tools/url-shortener" style={{ display: 'inline-block', background: 'transparent', border: '1px solid #374151', color: '#e5e7eb', padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                Try without signing up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
