import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Shorten a URL in 3 Steps (Free, No Sign-Up)',
  description:
    'Shorten any URL for free in seconds. No account required. Get a clean msha.live short link you can share on WhatsApp, SMS, Instagram, or print.',
  keywords: [
    'how to shorten a url',
    'url shortener free',
    'shorten url',
    'shorten link',
    'free link shortener',
  ],
  alternates: { canonical: 'https://meshalive.com/blog/how-to-shorten-a-url' },
  openGraph: {
    type: 'article',
    title: 'How to Shorten a URL in 3 Steps (Free, No Sign-Up)',
    description:
      'Shorten any URL for free in seconds. No account required. Get a clean msha.live short link you can share on WhatsApp, SMS, Instagram, or print.',
    url: 'https://meshalive.com/blog/how-to-shorten-a-url',
    siteName: 'Meshalive',
  },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

export default function HowToShortenUrlPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', color: INK, fontFamily: 'system-ui, sans-serif', lineHeight: 1.7 }}>

      {/* Category chip */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, fontSize: 13, color: MUTED }}>
        <span style={{ background: '#fff7ed', color: '#c2410c', borderRadius: 4, padding: '2px 10px', fontWeight: 600, fontSize: 12 }}>Guide</span>
        <span>5 min read</span>
        <span>·</span>
        <span>Updated June 2026</span>
      </div>

      <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.02em' }}>
        How to Shorten a URL in 3 Steps (Free, No Sign-Up)
      </h1>

      <p style={{ fontSize: 18, color: MUTED, marginBottom: 40, lineHeight: 1.6 }}>
        URL shortening takes under 10 seconds and makes any link shareable on any platform.
        Here's exactly how to do it, what the options mean, and when it matters which type of short link you use.
      </p>

      {/* Steps */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, marginTop: 40 }}>The 3 Steps</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {[
          {
            num: '1',
            title: 'Copy your long URL',
            body: `Find the page you want to share — a product listing, a Google Doc, a YouTube video, a registration form, a news article. Copy the full URL from your browser's address bar. Include any query parameters or UTM tags that are already on the URL; the short link will carry them invisibly to the destination. The URL must start with http:// or https:// — bare domain names like "example.com" won't redirect correctly.`,
          },
          {
            num: '2',
            title: 'Paste it into Meshalive and click Shorten',
            body: `Go to meshalive.com/tools/url-shortener. Paste your URL into the input field. Click "Shorten." Within one second you'll see your short link in the format msha.live/xxxxxxxx — eight random characters that are unique to your link. If you're signed in to a Meshalive account, you'll also see an option to customise the slug before generating (e.g. change xxxxxxxx to "diwali-sale"). Click the copy icon to copy the short link to your clipboard.`,
          },
          {
            num: '3',
            title: 'Share it anywhere',
            body: `Paste the short link into your WhatsApp message, email, SMS, Instagram bio, Google Business post, or print material. The recipient who clicks it is redirected to your original long URL instantly — the redirect typically completes in under 50 ms. If you're signed in, click-through data starts appearing in your Meshalive dashboard within a few minutes of the first click.`,
          },
        ].map(({ num, title, body }) => (
          <div key={num} style={{ display: 'flex', gap: 20, padding: '24px 0', borderBottom: `1px solid ${HAIR}` }}>
            <div style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: ACCENT,
              color: '#fff',
              fontWeight: 800,
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 2,
            }}>
              {num}
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 0 }}>{title}</h3>
              <p style={{ margin: 0, color: MUTED, fontSize: 15 }}>{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, marginTop: 48 }}>When Should You Shorten a URL?</h2>
      <p style={{ marginBottom: 16 }}>
        Not every link needs to be shortened. Here's where it genuinely makes a difference:
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>WhatsApp and SMS</h3>
      <p style={{ marginBottom: 16 }}>
        Both channels display the raw URL before the recipient decides to click. A long URL with UTM parameters
        looks like spam. A short link looks intentional. On WhatsApp specifically, the link preview card pulls
        the destination page's title and image — a short redirect still shows the correct preview because
        it fetches Open Graph data from the final destination, not from the short domain.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Print and physical materials</h3>
      <p style={{ marginBottom: 16 }}>
        If you're printing a URL on a business card, menu, banner, flyer, or packaging, a long URL is
        unusable — no one will type 80 characters on a phone. A short slug like <code>msha.live/menu</code> is
        readable and typeable. Paired with a QR code on the same material, you cover both users who scan
        and users who prefer to type.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Email campaigns</h3>
      <p style={{ marginBottom: 16 }}>
        Email clients sometimes break long URLs across two lines, making the clickable anchor fail.
        Short links are also easier to track: if your email tool doesn't have built-in click tracking,
        a Meshalive link gives you an independent count that's not controlled by your email service provider.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Social media bios and posts</h3>
      <p style={{ marginBottom: 16 }}>
        Instagram, X (Twitter), and LinkedIn all have character limits on posts and bios. Short links save
        characters and look cleaner. On Instagram, the single bio link can be a Meshalive link that you
        update each week to point to a different campaign — no need to tell followers "link updated in bio"
        when the URL itself never changes.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, marginTop: 48 }}>Anonymous vs Signed-In: What's the Difference?</h2>
      <p style={{ marginBottom: 16 }}>
        You can shorten a URL without an account. The link works permanently. But the behaviour differs:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: 24 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#f9fafb' }}>
              {['Feature', 'Anonymous', 'Signed in (Free)', 'Signed in (Paid)'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 14px', borderBottom: `2px solid ${HAIR}`, fontWeight: 700, color: INK }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Link stays live', '✓', '✓', '✓'],
              ['Click count', '✗', '✓', '✓'],
              ['Country / device analytics', '✗', '✓', '✓'],
              ['Edit the destination URL', '✗', '✓', '✓'],
              ['Custom slug', '✗', '✗', '✓ Starter+'],
              ['Custom domain', '✗', '✗', '✓ Starter+'],
              ['QR code download', '✗', '✓', '✓'],
              ['API access', '✗', '✗', '✓ Starter+'],
            ].map(([feature, anon, free, paid], i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                <td style={{ padding: '9px 14px', borderBottom: `1px solid ${HAIR}`, fontWeight: 500 }}>{feature}</td>
                <td style={{ padding: '9px 14px', borderBottom: `1px solid ${HAIR}`, color: anon === '✓' ? '#16a34a' : anon === '✗' ? '#dc2626' : INK, fontWeight: 700 }}>{anon}</td>
                <td style={{ padding: '9px 14px', borderBottom: `1px solid ${HAIR}`, color: free === '✓' ? '#16a34a' : free === '✗' ? '#dc2626' : INK, fontWeight: free === '✓' || free === '✗' ? 700 : 400 }}>{free}</td>
                <td style={{ padding: '9px 14px', borderBottom: `1px solid ${HAIR}`, color: paid.startsWith('✓') ? '#16a34a' : paid === '✗' ? '#dc2626' : INK, fontWeight: paid === '✓' || paid === '✗' ? 700 : 400 }}>{paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>
        Starter plan is ₹249/month on meshalive.in or $4/month on meshalive.com.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, marginTop: 48 }}>Custom Slugs Explained</h2>
      <p style={{ marginBottom: 16 }}>
        By default, Meshalive generates a random 8-character slug: <code>msha.live/a7bK9xQr</code>.
        On paid plans, you can replace this with any word or phrase: <code>msha.live/diwali-sale</code>,
        <code>msha.live/menu</code>, or <code>msha.live/apply-now</code>.
      </p>
      <p style={{ marginBottom: 16 }}>
        Custom slugs are useful when:
      </p>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li style={{ marginBottom: 8 }}>You're printing the link and want something humans can type from memory.</li>
        <li style={{ marginBottom: 8 }}>You're running a campaign and want the link to reinforce the campaign name.</li>
        <li style={{ marginBottom: 8 }}>You're using the link in a video or audio format where someone needs to recall it.</li>
        <li style={{ marginBottom: 8 }}>You want the link to look credible in a professional email or proposal.</li>
      </ul>
      <p style={{ marginBottom: 16 }}>
        Slugs are unique across the entire Meshalive namespace. If someone else has already claimed
        <code>msha.live/sale</code>, you'll need to choose a different slug. Adding a brand prefix helps:
        <code>msha.live/yourstore-sale</code>.
      </p>
      <p style={{ marginBottom: 16 }}>
        On paid plans you can also add a custom domain — so the same slug logic applies to
        <code>links.yourbrand.com/diwali-sale</code>. Custom domain slugs are only shared within your
        own domain namespace, so conflicts with other Meshalive users don't apply.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, marginTop: 48 }}>QR Codes Explained</h2>
      <p style={{ marginBottom: 16 }}>
        Every Meshalive link (for signed-in users, free and paid) has a corresponding QR code. The QR
        encodes the short URL — <code>msha.live/xxxxxxxx</code> — so it's just 20–25 characters to encode,
        producing a low-density QR that scans reliably even when printed small.
      </p>
      <p style={{ marginBottom: 16 }}>
        QR codes are available as PNG (for digital use, social media, email) and SVG (for print, signage,
        and any size). Both formats are included on free and paid plans.
      </p>
      <p style={{ marginBottom: 16 }}>
        Clicks that arrive via QR scan are tracked separately from direct link clicks in the Meshalive analytics dashboard.
        This lets you measure offline-to-online conversion precisely — how many people scanned your flyer vs how
        many typed the link from your ad.
      </p>
      <p style={{ marginBottom: 16 }}>
        On paid plans, if you update the destination URL of a short link, the QR code updates automatically
        because the QR points to the short link, not the final destination. This is called a "dynamic QR code"
        and is a major advantage over static QRs generated by other tools — you can reprint a QR campaign
        that now points to a new page without reprinting the physical material.
      </p>

      {/* FAQ */}
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, marginTop: 48 }}>Frequently Asked Questions</h2>

      <div style={{ borderTop: `1px solid ${HAIR}` }}>
        {[
          {
            q: 'How long does a shortened URL last?',
            a: 'Links created by signed-in users (free and paid) are permanent and never expire. Anonymous links (no account) also remain active indefinitely. Meshalive does not delete links unless you explicitly delete them or your paid account lapses and the link was using a feature exclusive to that paid tier.',
          },
          {
            q: 'Can I change where a short link points after I create it?',
            a: 'Yes, if you\'re signed in. Go to your Meshalive dashboard, find the link, and edit the destination URL. The short link stays the same — so any QR codes, printed materials, or broadcasts you already sent will seamlessly redirect to the new destination. Anonymous links cannot be edited after creation.',
          },
          {
            q: 'Is there a maximum length for the URL I can shorten?',
            a: 'Meshalive accepts URLs up to 8,000 characters, which covers virtually every practical case including heavily parameterised analytics URLs, affiliate links, and data URLs. The URL must be a valid HTTP or HTTPS address. FTP, mailto, and other schemes are not supported.',
          },
          {
            q: 'Does shortening a URL affect SEO?',
            a: 'No, when used correctly. Meshalive uses 301 (permanent) redirects, which pass link equity to the destination URL. Search engines see the final destination, not the short link. Your SEO is unaffected whether you share a link directly or as a short link.',
          },
          {
            q: 'Can I bulk-shorten many URLs at once?',
            a: 'Bulk shortening via CSV upload is a planned V2 feature (expected Q3 2026). In the meantime, the API (available on Starter and above) can be used to programmatically shorten large batches via a script or Zapier automation.',
          },
          {
            q: 'What happens if I paste a URL that\'s already been shortened?',
            a: 'Meshalive will shorten it again, creating a second-level redirect. This technically works but adds unnecessary redirect hops and is bad practice. Always shorten the original long URL, not an existing short link.',
          },
        ].map(({ q, a }) => (
          <div key={q} style={{ borderBottom: `1px solid ${HAIR}`, padding: '20px 0' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{q}</h3>
            <p style={{ color: MUTED, margin: 0, fontSize: 15 }}>{a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#0a0a0a', borderRadius: 12, padding: '40px 36px', marginTop: 56, textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff', fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.02em' }}>
          Shorten your first URL — free, no account needed
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: 28, fontSize: 16 }}>
          Create a free account to unlock analytics, QR codes, and link editing. Unlimited links on the free plan.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/register"
            style={{
              display: 'inline-block',
              background: ACCENT,
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 32px',
              borderRadius: 8,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Create free account →
          </a>
          <a
            href="/tools/url-shortener"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#e5e7eb',
              fontWeight: 600,
              fontSize: 16,
              padding: '14px 32px',
              borderRadius: 8,
              textDecoration: 'none',
              border: '1px solid #374151',
              letterSpacing: '-0.01em',
            }}
          >
            Try without signing up
          </a>
        </div>
        <p style={{ color: '#6b7280', marginTop: 16, fontSize: 13 }}>
          Paid plans from ₹249/mo (India) or $4/mo (global) · Cancel anytime
        </p>
      </div>
    </div>
  );
}
