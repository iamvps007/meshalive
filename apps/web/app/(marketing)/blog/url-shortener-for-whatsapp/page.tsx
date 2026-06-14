import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free URL Shortener for WhatsApp India — Shorten & Track Links (2026)',
  description:
    'Shorten long URLs for WhatsApp Business broadcasts, groups, and status updates. Free, instant, no sign-up. Track clicks, cities, and devices. Built for Indian businesses.',
  keywords: [
    'url shortener for whatsapp',
    'whatsapp link shortener',
    'shorten url whatsapp india',
    'whatsapp url shortener',
    'short link for whatsapp business',
    'whatsapp link generator india',
    'url shortener whatsapp business india',
    'shorten whatsapp link',
    'free url shortener india',
  ],
  alternates: { canonical: 'https://meshalive.com/blog/url-shortener-for-whatsapp' },
  openGraph: {
    type: 'article',
    title: 'Free URL Shortener for WhatsApp India — Shorten & Track Links (2026)',
    description:
      'Shorten long URLs for WhatsApp Business broadcasts, groups, and status updates. Free, instant, no sign-up. Built for Indian businesses.',
    url: 'https://meshalive.com/blog/url-shortener-for-whatsapp',
    siteName: 'Meshalive',
  },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';
const BG_LIGHT = '#f9fafb';

export default function WhatsAppUrlShortenerPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px', color: INK, fontFamily: 'system-ui, sans-serif', lineHeight: 1.75 }}>

      {/* Category chip */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, fontSize: 13, color: MUTED }}>
        <span style={{ background: '#eff6ff', color: ACCENT, borderRadius: 4, padding: '2px 10px', fontWeight: 600, fontSize: 12 }}>WhatsApp & Social</span>
        <span>10 min read</span>
        <span>·</span>
        <span>Updated June 2026</span>
      </div>

      <h1 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
        Free URL Shortener for WhatsApp (Works in India, 2026)
      </h1>

      <p style={{ fontSize: 18, color: MUTED, marginBottom: 16, lineHeight: 1.65 }}>
        Long product URLs kill WhatsApp messages. A 180-character link shoved into a broadcast looks spammy,
        wraps onto three lines, and almost never gets tapped. Here's how to fix that in under a minute — free, no account required.
      </p>
      <p style={{ fontSize: 16, color: MUTED, marginBottom: 40, lineHeight: 1.65 }}>
        Whether you run a kirana store on WhatsApp Business, send campaign links via Interakt or Wati, or share product
        catalog links in groups — this guide covers everything you need to know about shortening URLs for WhatsApp in India.
      </p>

      {/* TOC */}
      <div style={{ background: BG_LIGHT, border: `1px solid ${HAIR}`, borderRadius: 10, padding: '24px 28px', marginBottom: 48 }}>
        <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contents</p>
        <ol style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
          {[
            ['Why long URLs break WhatsApp messages', '#why'],
            ['How to shorten a URL for WhatsApp (step by step)', '#how'],
            ['WhatsApp click-to-chat link generator', '#click-to-chat'],
            ['India-specific use cases', '#india-usecases'],
            ['WhatsApp Status link tips', '#status'],
            ['WhatsApp Business broadcast best practices', '#broadcast'],
            ['Comparison: best URL shorteners for WhatsApp India', '#comparison'],
            ['Festive season campaign tips (Diwali, Navratri, Holi)', '#festive'],
            ['Frequently asked questions', '#faq'],
          ].map(([label, href]) => (
            <li key={href as string} style={{ marginBottom: 8 }}>
              <a href={href as string} style={{ color: ACCENT, textDecoration: 'none' }}>{label as string}</a>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 1 */}
      <h2 id="why" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 0 }}>Why Long URLs Break WhatsApp Messages</h2>
      <p style={{ marginBottom: 16 }}>
        WhatsApp previews the first link it finds in a message. When that link is a 200-character UTM-tagged product URL
        from your e-commerce store, two things happen: the preview card shows a raw ugly string, and the message itself
        looks cluttered before the recipient has even read your text.
      </p>
      <p style={{ marginBottom: 16 }}>
        Worse, many Indian Android devices running older versions of WhatsApp — particularly JioPhones and budget Android
        phones running Android 9 or below — silently truncate very long links. The recipient
        taps the preview and lands on a broken page, or nowhere at all. You lose the sale and never know why.
      </p>
      <p style={{ marginBottom: 16 }}>
        WhatsApp Business broadcasts have an additional problem: if too many recipients mark your message as spam,
        Meta throttles your sending rate. A clean, recognisable short domain like <strong>msha.live</strong> reads more
        like a real business link and less like a forwarded scam message.
      </p>
      <p style={{ marginBottom: 16 }}>
        India has the largest WhatsApp user base in the world — over 500 million active users as of 2026. The platform
        is used for commerce, customer support, education, and political campaigns. With that scale, even a 5% improvement
        in link tap-through rate translates to thousands of extra visits per broadcast.
      </p>

      {/* Section 2 */}
      <h2 id="how" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>How to Shorten a URL for WhatsApp — Step by Step</h2>
      <p style={{ marginBottom: 16 }}>
        The fastest path is the free shortener at{' '}
        <a href="/tools/url-shortener" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>meshalive.com/tools/url-shortener</a>.
        No sign-up, no CAPTCHA, no credit card. Here's the full flow:
      </p>
      <ol style={{ paddingLeft: 24, marginBottom: 24 }}>
        <li style={{ marginBottom: 12 }}>
          <strong>Paste your long URL.</strong> Copy the product page, catalog PDF, Google Form, YouTube video, or payment link you want to share.
          Paste it into the box. The tool accepts any valid URL including <code>http://</code>, <code>https://</code>, and links with UTM parameters.
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Click "Shorten".</strong> Within one second you'll see a short <code>msha.live/xxxxxxxx</code> link.
          If you're signed in, you can customise the slug (e.g. <code>msha.live/diwali-sale</code>) before generating.
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Copy and paste into WhatsApp.</strong> Tap the copy icon, switch to WhatsApp, and paste into your message, broadcast, or group.
          The short link renders cleanly on every device — JioPhone, Samsung, iPhone, all of them.
        </li>
      </ol>
      <p style={{ marginBottom: 16 }}>
        If you create a free Meshalive account, every link you shorten is stored in your dashboard. You can see total clicks,
        unique clicks, cities, devices, and referrers — so you know which broadcast actually drove traffic.
        Anonymous links (no sign-in) give you the short URL but no analytics.
      </p>
      <p style={{ marginBottom: 16 }}>
        <strong>Pro tip for UTM users:</strong> Shorten the URL <em>after</em> adding UTM parameters to your original link.
        Append <code>?utm_source=whatsapp&amp;utm_medium=broadcast&amp;utm_campaign=june26</code> first,
        then paste the full tagged URL into the shortener. Your short link carries the UTMs invisibly — Google Analytics
        and Mixpanel will still attribute the session correctly, without the parameters cluttering the shared link.
      </p>

      {/* Section 3 — Click-to-chat */}
      <h2 id="click-to-chat" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>WhatsApp Click-to-Chat Link Generator (India)</h2>
      <p style={{ marginBottom: 16 }}>
        A <strong>click-to-chat link</strong> lets anyone start a WhatsApp chat with you without saving your number.
        The standard format is:
      </p>
      <div style={{ background: BG_LIGHT, border: `1px solid ${HAIR}`, borderRadius: 8, padding: '16px 20px', fontFamily: 'monospace', fontSize: 14, marginBottom: 16, wordBreak: 'break-all' }}>
        https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20your%20products
      </div>
      <p style={{ marginBottom: 16 }}>
        For Indian numbers, the format is <code>+91</code> followed by the 10-digit mobile number (no spaces or dashes).
        The <code>text=</code> parameter pre-fills a message in the chat box — the user just taps Send.
      </p>
      <p style={{ marginBottom: 16 }}>
        The problem with raw <code>wa.me</code> links: they're long, untracked, and hard to remember.
        Use Meshalive to shorten them:
      </p>
      <ol style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li style={{ marginBottom: 10 }}>Generate your <code>wa.me</code> link using the{' '}
          <a href="/tools/whatsapp-link-generator" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>WhatsApp link generator</a>.</li>
        <li style={{ marginBottom: 10 }}>Paste the generated <code>wa.me</code> URL into the URL shortener.</li>
        <li style={{ marginBottom: 10 }}>Get a clean link like <code>msha.live/chat-with-us</code>.</li>
      </ol>
      <p style={{ marginBottom: 16 }}>
        Put this short link in your Instagram bio, Google Business profile, visiting card QR code, and email signature.
        Every click is tracked — you'll know exactly how many people initiated a WhatsApp chat from each source.
      </p>

      {/* Comparison table */}
      <h2 id="comparison" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>Best URL Shorteners for WhatsApp Business India — Compared</h2>
      <p style={{ marginBottom: 20 }}>
        Not all URL shorteners work well for WhatsApp. Some use domains that get flagged as suspicious by WhatsApp's
        preview system. Others don't offer India-specific analytics. Here's how the main options compare:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: BG_LIGHT }}>
              {['Feature', 'Meshalive', 'Bitly', 'TinyURL', 'bit.ly'].map(h => (
                <th key={h} style={{ padding: '12px 14px', textAlign: 'left', borderBottom: `2px solid ${HAIR}`, fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Free tier', '✅ Unlimited links', '✅ 10 links/mo', '✅ Unlimited', '⚠️ Limited'],
              ['India city analytics', '✅ Yes', '✅ Paid only', '❌ No', '❌ No'],
              ['INR pricing', '✅ ₹249/mo', '❌ USD only', '❌ USD only', '❌ USD only'],
              ['Custom domain', '✅ ₹249/mo', '✅ $8/mo', '✅ $9/mo', '✅ $29/mo'],
              ['WhatsApp safe domain', '✅ msha.live', '✅ bit.ly', '✅ tinyurl.com', '✅ bit.ly'],
              ['Click-to-chat tool', '✅ Built-in', '❌ No', '❌ No', '❌ No'],
              ['QR code included', '✅ Free', '✅ Paid only', '✅ Paid only', '❌ No'],
              ['API access', '✅ All paid plans', '⚠️ Paid only', '✅ Paid only', '⚠️ Paid only'],
            ].map(([feat, ...vals]) => (
              <tr key={feat as string} style={{ borderBottom: `1px solid ${HAIR}` }}>
                <td style={{ padding: '11px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{feat}</td>
                {vals.map((v, i) => (
                  <td key={i} style={{ padding: '11px 14px', color: (v as string).startsWith('✅') ? '#16a34a' : (v as string).startsWith('❌') ? '#dc2626' : MUTED }}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ marginBottom: 16, fontSize: 14, color: MUTED }}>
        * Bitly's free plan reduced monthly link limit to 10 in 2024. TinyURL free plan has no analytics at all.
      </p>

      {/* Section 4 — India use cases */}
      <h2 id="india-usecases" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>India-Specific WhatsApp Use Cases</h2>
      <p style={{ marginBottom: 20 }}>
        WhatsApp is used very differently in India compared to the US or Europe. Here are the most common business
        scenarios and how to handle link sharing for each:
      </p>

      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, marginTop: 28 }}>Kirana stores and local retailers</h3>
      <p style={{ marginBottom: 16 }}>
        Kirana owners typically send product catalogs as PDFs or Google Drive links. A link like
        <code> https://drive.google.com/file/d/1AbCdEfGhIjKl/view?usp=sharing</code> is 63 characters long, looks
        untrustworthy, and doesn't work well as a tap target in WhatsApp. Shorten it to <code>msha.live/june-catalog</code>
        and it becomes shareable in any group. You'll also see how many customers actually opened it, which tells you
        whether the catalog format is working.
      </p>

      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, marginTop: 28 }}>D2C brands using WhatsApp Business API</h3>
      <p style={{ marginBottom: 16 }}>
        D2C brands using BSPs like Interakt, Wati, AiSensy, Gupshup, or Zoko send template messages at scale.
        WhatsApp's template approval process checks URLs for safety — short branded links from trusted domains
        pass review faster than raw affiliate or Shopify checkout links. Additionally, Meshalive's analytics let you
        measure per-campaign click rates separate from your Shopify or WooCommerce conversion tracking.
      </p>
      <p style={{ marginBottom: 16 }}>
        For retargeting: if a broadcast link got 800 clicks but only 60 purchases, the drop-off is after the landing page,
        not the WhatsApp message. If a broadcast got 200 clicks out of 5000 delivered, the message itself needs work.
        Short link analytics separates these two problems.
      </p>

      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, marginTop: 28 }}>Coaching institutes and EdTech businesses</h3>
      <p style={{ marginBottom: 16 }}>
        Education businesses in India — coaching centres, online tutors, test prep institutes — rely heavily on
        WhatsApp for student communication. Common links shared: admission forms (Google Forms or Typeform),
        payment links (Razorpay or Instamojo), and live class Zoom or Google Meet URLs.
      </p>
      <p style={{ marginBottom: 16 }}>
        A recurring problem: Zoom links contain authentication tokens that expire. If you send a raw Zoom link in
        a broadcast today for a class next week, students might tap the link early, the link preview refreshes,
        and the token expires before the class. With Meshalive, you can shorten the link now and update the
        destination later — the short link stays the same but points to the new Zoom URL when the class actually happens.
      </p>

      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, marginTop: 28 }}>Real estate agents</h3>
      <p style={{ marginBottom: 16 }}>
        Real estate agents share property listings from Housing.com, 99acres, MagicBricks, or their own websites.
        These URLs are often 150–200 characters with multiple query parameters. A shortened link like
        <code> msha.live/3bhk-baner-pune</code> is memorable, shareable in groups, and trackable.
        You'll know how many serious enquiries tapped the link versus how many people saw the message.
      </p>

      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, marginTop: 28 }}>UPI and payment links</h3>
      <p style={{ marginBottom: 16 }}>
        UPI payment links — Razorpay payment pages, Instamojo, Cashfree, or even manual UPI deep links —
        can be shortened and shared on WhatsApp. A short link like <code>msha.live/pay-me</code> in your
        WhatsApp Business profile's "Call-to-action" button or your bio is much cleaner than a raw payment URL.
      </p>
      <p style={{ marginBottom: 16, color: MUTED, fontSize: 14 }}>
        ⚠️ Note: Never shorten UPI deep links that contain sensitive payment amounts or pre-filled account numbers for public sharing. Use payment links that generate fresh sessions for each customer.
      </p>

      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, marginTop: 28 }}>Political campaigns and NGOs</h3>
      <p style={{ marginBottom: 16 }}>
        Political campaigns and NGOs use WhatsApp extensively for volunteer mobilisation, donation drives, and
        voter outreach. Short links with city-specific UTM tags let you measure which district drives the most
        engagement — you can use the same landing page with different short links per constituency to track
        regional performance without building separate pages.
      </p>

      {/* Section 5 — WhatsApp Status */}
      <h2 id="status" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>WhatsApp Status Link Tips</h2>
      <p style={{ marginBottom: 16 }}>
        WhatsApp Status (the 24-hour stories feature) is one of the most underrated marketing channels in India.
        According to Meta, over 450 million people use WhatsApp Status every day — a large portion of them in India.
      </p>
      <p style={{ marginBottom: 16 }}>
        You can't add clickable links directly to WhatsApp Status images or videos (Meta restricts this to verified
        Business accounts in select countries). However, there are two effective workarounds:
      </p>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li style={{ marginBottom: 10 }}>
          <strong>Text status with short link.</strong> Post a text status that includes your short link as text.
          Recipients can long-press and copy it, or type it manually. A short <code>msha.live/offer</code> is
          easy to remember and type; a 150-character Amazon affiliate URL is not.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>Image with link overlay.</strong> Add the short URL as text on top of a product image.
          Use Canva to add the short link prominently on your Status image. When someone sees
          <code> msha.live/diwali-sale</code> on a nice creative, they'll type it into their browser.
        </li>
      </ul>
      <p style={{ marginBottom: 16 }}>
        If you have a WhatsApp Business API account with the Status CTA feature enabled,
        you can add a direct button — in that case, shorten the URL first so the CTA preview looks clean.
      </p>

      {/* Section 6 — Broadcast best practices */}
      <h2 id="broadcast" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>WhatsApp Business Broadcast Best Practices</h2>
      <p style={{ marginBottom: 16 }}>
        If you use WhatsApp Business App or WhatsApp Business API (via BSPs like Interakt, Wati, AiSensy, or Gupshup),
        these practices will improve your delivery rate and link clicks:
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>One link per broadcast</h3>
      <p style={{ marginBottom: 16 }}>
        WhatsApp's algorithm treats messages with multiple URLs more harshly. Pick the single most important
        destination — your product page, form, or offer — and shorten only that one.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Time broadcasts for IST business hours</h3>
      <p style={{ marginBottom: 16 }}>
        Open rates peak between <strong>9–11 AM and 7–9 PM IST</strong> for Indian WhatsApp users. Scheduling at
        3 AM IST to match a US working hour is a common mistake among businesses using US-based tools.
        Meshalive's analytics show click timestamps in IST by default.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Use UTM parameters before shortening</h3>
      <p style={{ marginBottom: 16 }}>
        Add UTM tags to your long URL first — <code>?utm_source=whatsapp&utm_medium=broadcast&utm_campaign=diwali26</code> —
        then shorten. The short link carries the UTMs invisibly to your analytics platform.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Check your click map before re-broadcasting</h3>
      <p style={{ marginBottom: 16 }}>
        If a previous broadcast link got low clicks, check the Meshalive analytics tab to see if it was a device
        issue (e.g. almost all desktop, but you sent to mobile-only contacts) or a time issue. Use that data
        to improve the next send.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Reuse the same short link across multiple sends</h3>
      <p style={{ marginBottom: 16 }}>
        On paid Meshalive plans, you can update the destination of a short link without changing its URL.
        Every existing share — in older broadcasts, forwarded messages, saved chats — immediately points to
        the new destination. Keep the same short link in your WhatsApp Business profile and update it each season.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Test the link before broadcasting</h3>
      <p style={{ marginBottom: 16 }}>
        Before sending to 500 contacts, send the short link to yourself on a test WhatsApp account.
        Confirm the preview card loads correctly, the redirect lands on the right page, and the page renders
        properly on mobile. If the card shows stale content, use the Facebook Sharing Debugger to force
        a cache refresh on the Open Graph data, then re-shorten if needed.
      </p>

      {/* Section 7 — Festive */}
      <h2 id="festive" style={{ fontSize: 26, fontWeight: 700, marginBottom: 14, marginTop: 48 }}>Festive Season Campaign Tips (Diwali, Navratri, Holi)</h2>
      <p style={{ marginBottom: 16 }}>
        India's festive season — Navratri (September/October), Diwali (October/November), and Holi (March) — drives
        massive e-commerce and WhatsApp marketing activity. Here's how to use short links strategically during these periods:
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Create one short link per campaign, not per product</h3>
      <p style={{ marginBottom: 16 }}>
        Rather than shortening every individual product URL separately, create one short link per campaign
        (e.g. <code>msha.live/diwali26</code>) that points to a curated landing page or WhatsApp catalog.
        This gives you a single click metric to track the entire campaign's performance.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>City-specific short links for regional targeting</h3>
      <p style={{ marginBottom: 16 }}>
        If you have contacts segmented by city (Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai),
        create separate short links per city with different UTM campaign tags:
      </p>
      <div style={{ background: BG_LIGHT, border: `1px solid ${HAIR}`, borderRadius: 8, padding: '16px 20px', fontFamily: 'monospace', fontSize: 13, marginBottom: 16 }}>
        msha.live/diwali-mumbai → product page?utm_campaign=diwali-mumbai<br />
        msha.live/diwali-delhi → product page?utm_campaign=diwali-delhi<br />
        msha.live/diwali-blr → product page?utm_campaign=diwali-bangalore
      </div>
      <p style={{ marginBottom: 16 }}>
        This tells you which city drives the highest conversion, and you can shift your broadcast budget accordingly.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Schedule links in advance</h3>
      <p style={{ marginBottom: 16 }}>
        Create all your festive short links 2–3 days before the campaign starts. This gives Google time to crawl
        and cache the preview card, and lets you test each link thoroughly before the broadcast goes out.
        During Diwali week, WhatsApp servers slow down due to volume — pre-generating links ensures no last-minute failures.
      </p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, marginTop: 24 }}>Update destinations mid-campaign</h3>
      <p style={{ marginBottom: 16 }}>
        If a product sells out mid-campaign, update the short link's destination to an "out of stock" page
        or an alternative product — without changing the short URL itself. Recipients who tap the link from
        an old broadcast still see a relevant page instead of a dead product listing.
      </p>

      {/* FAQ */}
      <h2 id="faq" style={{ fontSize: 26, fontWeight: 700, marginBottom: 24, marginTop: 56 }}>Frequently Asked Questions</h2>

      <div style={{ borderTop: `1px solid ${HAIR}` }}>
        {[
          {
            q: 'Do I need to create an account to shorten a URL for WhatsApp?',
            a: 'No. The anonymous shortener at meshalive.com/tools/url-shortener works without any account. You get a short msha.live link instantly. If you want to see click analytics or use a custom slug, you\'ll need a free account — but basic shortening is always free and unlimited.',
          },
          {
            q: 'Will WhatsApp block msha.live links?',
            a: 'No. Meshalive short links point to clean destinations and use standard HTTP redirects. WhatsApp may show a brief "you\'re leaving WhatsApp" prompt for any unfamiliar short domain on first click, but msha.live is not on any block list. If you use your own custom domain on a paid plan (e.g. links.yourbrand.com), there is no prompt at all.',
          },
          {
            q: 'Can I track how many WhatsApp contacts clicked my link?',
            a: 'Yes, if you have a Meshalive account (free or paid). Every signed-in link shows total clicks, unique clicks, city-level breakdown (for India: Mumbai, Delhi, Bangalore etc.), device type (Android, iOS, desktop), and referrer. Anonymous links have no tracking.',
          },
          {
            q: 'What is the best URL shortener for WhatsApp Business in India?',
            a: 'Meshalive is built specifically for Indian businesses — INR pricing (₹249/mo for the Starter plan), city-level analytics for Indian metros, and a free WhatsApp link generator tool. Bitly and TinyURL work but charge in USD, have limited free tiers, and don\'t show Indian city breakdowns on analytics.',
          },
          {
            q: 'How do I create a WhatsApp click-to-chat link with a pre-filled message?',
            a: 'Use the free WhatsApp Link Generator at meshalive.com/tools/whatsapp-link-generator. Enter your Indian mobile number (+91) and an optional pre-filled message. The tool generates a wa.me link. You can then shorten that link with Meshalive for clean sharing in your bio, visiting cards, and status.',
          },
          {
            q: 'Is there a limit on how many links I can shorten for free?',
            a: 'The free plan has unlimited links. You can shorten as many URLs as you need without paying. Paid plans add features like custom domains, team seats, and API access — not more link capacity.',
          },
          {
            q: 'Can I use a custom domain so my links show my brand instead of msha.live?',
            a: 'Yes. The Starter plan (₹249/mo or $4/mo) includes one custom domain. You connect your domain via a CNAME record, and all links use that domain. Custom domains work on all WhatsApp clients and devices including JioPhone and older Android.',
          },
          {
            q: 'Do short links work on WhatsApp for JioPhone users?',
            a: 'Yes. msha.live short links are simple HTTP redirects and work on any device with a browser and internet — including JioPhone\'s KaiOS browser. In fact, short links are more reliable on JioPhone than long URLs, which are frequently truncated in WhatsApp on older KaiOS builds.',
          },
        ].map(({ q, a }) => (
          <div key={q} style={{ borderBottom: `1px solid ${HAIR}`, padding: '22px 0' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>{q}</h3>
            <p style={{ color: MUTED, margin: 0, fontSize: 15, lineHeight: 1.7 }}>{a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#0a0a0a', borderRadius: 14, padding: '44px 36px', marginTop: 60, textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff', fontSize: 28, fontWeight: 800, marginBottom: 14, letterSpacing: '-0.02em' }}>
          Start shortening WhatsApp links — free, forever
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: 32, fontSize: 16, lineHeight: 1.6, maxWidth: 480, margin: '0 auto 32px' }}>
          Unlimited links on the free plan. No credit card. See city-level click analytics from your very first link.
          Built for Indian businesses.
        </p>
        <a
          href="/register"
          style={{
            display: 'inline-block',
            background: ACCENT,
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 16,
            padding: '14px 36px',
            borderRadius: 8,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Create your free account →
        </a>
        <p style={{ color: '#6b7280', marginTop: 18, fontSize: 13 }}>
          Or try without signing up at{' '}
          <a href="/tools/url-shortener" style={{ color: '#93c5fd', textDecoration: 'none' }}>
            meshalive.com/tools/url-shortener
          </a>
        </p>
      </div>
    </div>
  );
}
