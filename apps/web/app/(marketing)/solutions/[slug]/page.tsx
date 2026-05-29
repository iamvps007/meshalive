import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

const INK = '#111111';
const INK2 = '#374151';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';
const ACCENT_SOFT = '#eff6ff';
const GOOD = '#2f7a55';

type Solution = {
  slug: string;
  title: string;
  headline: string;
  sub: string;
  body: string;
  heroIcon: string;
  stats: { v: string; l: string }[];
  features: { icon: string; title: string; desc: string }[];
  steps: string[];
  quote: { text: string; who: string; role: string };
};

const SOLUTIONS: Record<string, Solution> = {
  marketing: {
    slug: 'marketing',
    title: 'meshalive for Marketing Teams',
    headline: 'Every campaign link, tracked and branded.',
    sub: 'UTM builder, bulk create, geo redirects, and a real-time dashboard your whole team can read in ten seconds.',
    body: 'Marketing teams run on links — campaign URLs, ad creatives, email CTAs, influencer codes. meshalive keeps every one of them branded, tracked, and organised without a spreadsheet in sight.',
    heroIcon: 'tag',
    stats: [
      { v: '38%', l: 'Average CTR lift with branded short links vs raw URLs' },
      { v: '4×', l: 'Faster campaign setup with UTM templates' },
      { v: '90 days', l: 'Click analytics retention on Growth plan' },
    ],
    features: [
      { icon: 'tag', title: 'UTM campaign builder', desc: 'Build UTM templates once, apply them to hundreds of links. Consistent tracking across every channel — no more manually appending ?utm_source=...' },
      { icon: 'link', title: 'Branded short links', desc: 'Use your own domain — yourco.link/campaign — instead of a generic shortener. Branded links get 34% more clicks than anonymous ones.' },
      { icon: 'chart', title: 'Real-time click analytics', desc: 'Country, device, browser, referrer — every click logged within two seconds. Filter by time range, compare campaigns, export to CSV.' },
      { icon: 'globe', title: 'Geo redirects', desc: 'Send Indian visitors to your .in landing page and UK visitors to your .co.uk — automatically. One link, six localised destinations.' },
      { icon: 'users', title: 'Team workspaces', desc: 'Give every campaign or brand its own workspace. Set roles so interns can create but only admins can delete.' },
      { icon: 'webhook', title: 'Slack & webhook alerts', desc: 'Get a Slack ping when a campaign link hits 10K clicks. Wire any event — milestone, expiry, error — to any endpoint.' },
    ],
    steps: [
      'Create a UTM template for your campaign (30 seconds)',
      'Import your long URLs from a CSV — meshalive shortens and tags them all',
      'Share branded links in emails, ads, and social posts',
      'Watch the analytics dashboard update live as clicks roll in',
    ],
    quote: {
      text: 'The UTM template feature alone saved us two hours a week. Every channel now uses the same naming convention and our attribution is finally clean.',
      who: 'Priya Sharma',
      role: 'Head of Marketing, Fernco',
    },
  },
  sales: {
    slug: 'sales',
    title: 'meshalive for Sales Teams',
    headline: 'Links that close deals.',
    sub: 'Personalised short links for every prospect. Track exactly who clicked, when, and from which pitch.',
    body: 'Every link you send a prospect is a signal. meshalive makes it easy to create personalised short links, see who opens them, and follow up at exactly the right moment.',
    heroIcon: 'zap',
    stats: [
      { v: '2.3×', l: 'Response rate with a named short link vs a raw URL' },
      { v: '< 30 s', l: 'Time to create a personalised link for any prospect' },
      { v: '100%', l: 'Of click data available via API for CRM sync' },
    ],
    features: [
      { icon: 'link', title: 'Personalised slugs', desc: 'Create /proposal-acme or /deck-raj in seconds. A prospect who sees their name in a link is twice as likely to click.' },
      { icon: 'chart', title: 'Click notifications', desc: 'Get an instant Slack or email alert the moment a prospect opens your proposal link. Follow up while you\'re top of mind.' },
      { icon: 'calendar', title: 'Link expiry', desc: 'Set a deadline on a discount link — it auto-expires and redirects to a "talk to us" page, creating natural urgency without hard selling.' },
      { icon: 'key', title: 'API for CRM sync', desc: 'Push click data to HubSpot, Salesforce, or any CRM via the REST API. Know which prospects engaged and when.' },
      { icon: 'eye', title: 'Click-through analytics', desc: 'See device, country, and referrer for every prospect click. Know if they forwarded your deck to a colleague.' },
      { icon: 'users', title: 'Shared team links', desc: 'Everyone on the sales floor uses the same branded domain. No more rep sending a bitly while another sends a raw URL.' },
    ],
    steps: [
      'Create your personalised link — /demo-acme or /proposal-rahul',
      'Drop it in your email, LinkedIn message, or WhatsApp',
      'Get notified the instant they click',
      'Follow up with context — you know they opened it',
    ],
    quote: {
      text: 'Our AEs love the personalised slug trick. Response rates on cold outreach went up noticeably in the first month.',
      who: 'Arjun Mehta',
      role: 'VP Sales, Stackr',
    },
  },
  support: {
    slug: 'support',
    title: 'meshalive for Support Teams',
    headline: 'Help centre links that never go stale.',
    sub: 'Short, trackable links in every support reply. Update the destination without editing a single ticket.',
    body: 'Support teams send the same ten links hundreds of times a week. meshalive turns them into short, memorable slugs — and lets you silently swap the destination when docs change.',
    heroIcon: 'mail',
    stats: [
      { v: '60%', l: 'Fewer "that link is broken" replies after switching to meshalive short links' },
      { v: '0', l: 'Tickets needed to update a link destination — just edit in the dashboard' },
      { v: '12 s', l: 'Average time to create a new support link with a template' },
    ],
    features: [
      { icon: 'link', title: 'Short links for your macros', desc: 'Replace docs.yourco.com/v2/help/how-to-reset-password?ref=support with help.yourco.com/reset. Clean, fast, branded.' },
      { icon: 'edit', title: 'Update without reprinting', desc: 'Docs moved? Just edit the destination in meshalive. Every old link — in closed tickets, email history, everywhere — now points to the right place.' },
      { icon: 'chart', title: 'See which articles get clicked', desc: 'Find out which help links get used most. The ones no one clicks may need to be surfaced better — or retired.' },
      { icon: 'calendar', title: 'Version-aware expiry', desc: 'Set an expiry date on links tied to old product versions. They auto-redirect to the latest docs after the date passes.' },
      { icon: 'tag', title: 'UTM source tracking', desc: 'Tag links by channel — email, chat, phone — so you know where support traffic is coming from and whether self-serve is working.' },
      { icon: 'key', title: 'API for help desk sync', desc: 'Create links programmatically from Zendesk or Intercom. Always have a meshalive link ready for every macro.' },
    ],
    steps: [
      'Create a short link for each of your top-10 support docs',
      'Add them to your macro library in Zendesk or Intercom',
      'When docs update, change the destination in meshalive — zero macro edits needed',
      'Check the analytics weekly to see which links actually help',
    ],
    quote: {
      text: 'We\'d been sending broken links for months after a docs migration. With meshalive we just redirect once and every historical ticket is fixed instantly.',
      who: 'Shreya Kapoor',
      role: 'Support Lead, Halcyon',
    },
  },
  retail: {
    slug: 'retail',
    title: 'meshalive for Retail & Food',
    headline: 'Print once. Point anywhere. Forever.',
    sub: 'Dynamic QR codes for menus, packaging, and receipts. Change the destination without reprinting anything.',
    body: 'A QR code on a printed menu is a commitment. meshalive makes it changeable — point it at today\'s specials, this week\'s offer, or a new landing page — without touching the print file.',
    heroIcon: 'qr',
    stats: [
      { v: '0', l: 'Reprint jobs needed to update a QR destination' },
      { v: '183M', l: 'QR scans tracked on meshalive since launch' },
      { v: '< 2 ms', l: 'QR redirect latency — no one waits at a table' },
    ],
    features: [
      { icon: 'qr', title: 'Dynamic QR codes', desc: 'Every QR on meshalive is dynamic — the printed code never changes but the destination can be updated any time from the dashboard.' },
      { icon: 'download', title: 'SVG + high-res PNG export', desc: 'Download print-ready files at 300 DPI. Hand them directly to your designer or printer without resizing.' },
      { icon: 'chart', title: 'Scan analytics by location', desc: 'See which table, which outlet, which SKU gets the most scans. Compare your flagship store vs your new location.' },
      { icon: 'calendar', title: 'Time-based redirects', desc: 'Lunch menu from 11am–3pm, dinner menu after 5pm — one QR, automatic rotation. No staff intervention required.' },
      { icon: 'globe', title: 'Language geo-routing', desc: 'Show an English menu to international tourists and a Hindi menu to local regulars — automatically, from one QR code.' },
      { icon: 'zap', title: 'Free forever', desc: 'No plans, no tiers, no credit card. Every feature is available to every user from day one.' },
    ],
    steps: [
      'Create a short link or QR in meshalive (2 minutes)',
      'Download SVG or PNG and give it to your printer',
      'Print on menus, packaging, table tents, receipts',
      'Update the destination whenever you want — the QR never changes',
    ],
    quote: {
      text: 'We reprinted menus four times last year every time the menu changed. Now we just update the link. The QR on 2,000 printed menus always points to the right page.',
      who: 'Vikram Sood',
      role: 'Owner, Spice Route Restaurants',
    },
  },
  product: {
    slug: 'product',
    title: 'meshalive for Product Teams',
    headline: 'Links for every stage of the lifecycle.',
    sub: 'Trial links, onboarding flows, feature flags via redirect, and in-app deep links — all trackable, all updatable.',
    body: 'Product teams send thousands of links across the lifecycle — activation emails, onboarding tooltips, changelog announcements, deprecation notices. meshalive makes each one observable and changeable without a deploy.',
    heroIcon: 'gear',
    stats: [
      { v: '1 edit', l: 'To update a deep link destination across every channel at once' },
      { v: '100%', l: 'API coverage — every link operation available programmatically' },
      { v: '90 day', l: 'Analytics retention so you can audit post-launch behaviour' },
    ],
    features: [
      { icon: 'link', title: 'Trial + activation links', desc: 'Create named links for each activation flow — /trial-team, /trial-solo. Track which converts better without changing your app code.' },
      { icon: 'globe', title: 'Deep link routing', desc: 'Route mobile users to your app and desktop users to your web app — one link, automatic detection, zero redirects wasted.' },
      { icon: 'calendar', title: 'Time-boxed feature links', desc: 'Link to a beta feature with an expiry date. After launch, it auto-redirects to the GA docs. Clean deprecation.' },
      { icon: 'key', title: 'Full REST API', desc: 'Create and manage links from your CI/CD pipeline. Auto-generate docs links for every release. Available from Starter plan.' },
      { icon: 'webhook', title: 'Webhooks on click events', desc: 'Fire a webhook when a user clicks an onboarding link. Update your CRM, trigger a Slack message, start a Zapier flow.' },
      { icon: 'chart', title: 'Funnel analytics', desc: 'Compare click-through rates across activation emails, in-app tooltips, and docs links. Find the drop-off points.' },
    ],
    steps: [
      'Create a link for each key lifecycle touchpoint via the API',
      'Drop them into your email templates, in-app tooltips, and changelogs',
      'Watch click analytics to find which flows convert users',
      'Update destinations without changing any app code or re-deploying',
    ],
    quote: {
      text: 'We use meshalive links in every onboarding email. When we update the docs URL, the old activation links in thousands of inboxes start pointing to the right page automatically.',
      who: 'Tanya Iyer',
      role: 'Head of Product, Oblique Studio',
    },
  },
  creators: {
    slug: 'creators',
    title: 'meshalive for Creators',
    headline: 'One link. Your whole world.',
    sub: 'A branded bio page, custom short links, and analytics that tell you what your audience actually clicks.',
    body: 'You share one link everywhere — in your bio, your stories, your email footer. Make it count. meshalive gives you a full landing page behind that one link, with click tracking on every block.',
    heroIcon: 'mobile',
    stats: [
      { v: '3.1×', l: 'More clicks on a branded /yourname link vs a raw URL' },
      { v: '∞', l: 'Links on your bio page — no tier restrictions' },
      { v: '$4/mo', l: 'Starter plan — cheaper than one sponsored post boost' },
    ],
    features: [
      { icon: 'mobile', title: 'Link-in-bio page', desc: 'A full landing page behind one URL — profile photo, social links, CTAs, affiliate links. Customise the design to match your brand.' },
      { icon: 'chart', title: 'Click tracking per block', desc: 'See exactly which link on your bio page gets clicked most. Move your best-performing block to the top.' },
      { icon: 'link', title: 'Branded short links', desc: 'Share yourname.link/latest instead of a random string. Recognisable links get clicked more — and remembered.' },
      { icon: 'qr', title: 'QR code for everything', desc: 'Put a QR on your merch, your packaging, your business card. Change where it points any time without reprinting.' },
            { icon: 'calendar', title: 'Time-limited drops', desc: 'Make a link expire when your product launch window closes. Creates urgency without a countdown timer on your site.' },
    ],
    steps: [
      'Build your link-in-bio page in under ten minutes',
      'Point your social bio links to it',
      'Share short links in videos, stories, and emails',
      'Check the analytics to see what your audience loves most',
    ],
    quote: {
      text: 'I used to lose track of which links I\'d shared in which video. Now everything goes through meshalive and I can see exactly which video drove the most clicks to my course.',
      who: 'Rohan Gupta',
      role: 'Creator, 280K subscribers',
    },
  },
  events: {
    slug: 'events',
    title: 'meshalive for Events',
    headline: 'Every scan, every RSVP, tracked.',
    sub: 'Dynamic QR codes for on-stage slides, short links for RSVP flows, and click-by-hour analytics to measure engagement live.',
    body: 'Events run on QR codes and short links — registration pages, schedules, session recordings, feedback forms. meshalive makes every one of them dynamic, trackable, and updatable from your phone.',
    heroIcon: 'calendar',
    stats: [
      { v: '< 2 ms', l: 'QR scan redirect speed — no awkward waiting on stage' },
      { v: '0', l: 'Reprints needed when the recording URL changes after the event' },
      { v: '280+', l: 'Cloudflare cities serving your links globally' },
    ],
    features: [
      { icon: 'qr', title: 'On-stage QR codes', desc: 'Show a QR on your slide. Attendees scan it and land on your registration page, survey, or resource. Update the destination after the talk without reshowing the slide.' },
      { icon: 'calendar', title: 'Countdown expiry links', desc: 'RSVP links that expire at event start. Early-bird pricing links that die at midnight. Zero manual intervention.' },
      { icon: 'chart', title: 'Live scan analytics', desc: 'Watch the click-by-minute chart update in real time during your talk. See which session QR drove the most engagement.' },
      { icon: 'link', title: 'Short links for every asset', desc: 'event.yourco.com/deck, /feedback, /recordings — clean URLs your emcee can read aloud and attendees can type from memory.' },
      { icon: 'globe', title: 'Geo routing', desc: 'Send attendees in different countries to localised versions of your RSVP page. One link, automatic routing.' },
      { icon: 'users', title: 'Team access for event staff', desc: 'Give your event coordinator, AV team, and marketing leads access to the right links. Role-based permissions.' },
    ],
    steps: [
      'Create links for registration, schedule, and all session resources',
      'Generate QR codes and drop them into your slide deck',
      'Go live — links and QRs work the moment the event starts',
      'Update recording URLs after the event; all QRs follow automatically',
    ],
    quote: {
      text: 'We had 1,200 attendees scan the on-stage QR in under 90 seconds. Zero lag, zero errors. The post-event recording swap took 30 seconds in the dashboard.',
      who: 'Ankita Rao',
      role: 'Events Manager, PilotConf',
    },
  },
  developers: {
    slug: 'developers',
    title: 'meshalive for Developers',
    headline: 'The link API that doesn\'t gate you.',
    sub: 'Full REST API from $4/mo. JWT and token auth, OpenAPI 3.0 spec, webhooks, TypeScript SDK. No enterprise negotiation.',
    body: 'Bitly charges $300+/mo to get API access. Rebrandly gates webhooks behind enterprise. meshalive includes the full API from the first paid tier — $4/mo — and publishes the OpenAPI spec so your types are always in sync.',
    heroIcon: 'key',
    stats: [
      { v: '$4/mo', l: 'Full API access starts at Starter — not $300 enterprise' },
      { v: '< 2 ms', l: 'P99 redirect latency on all plans' },
      { v: '100%', l: 'REST coverage — create, read, update, delete, analytics, workspaces' },
    ],
    features: [
      { icon: 'key', title: 'JWT + API token auth', desc: 'Use Bearer JWT for server-to-server calls or long-lived API tokens for CI/CD pipelines. Both are first-class.' },
      { icon: 'webhook', title: 'Webhooks', desc: 'Subscribe to click, create, update, and expiry events. JSON payloads, retry logic with exponential backoff, signature verification.' },
      { icon: 'link', title: 'Full CRUD API', desc: 'Create, read, update, delete links. Manage workspaces, members, and custom domains. Everything in the UI is also in the API.' },
      { icon: 'chart', title: 'Analytics API', desc: 'Pull per-link and account-wide click data. Filter by date range, country, device, referrer. Export programmatically.' },
      { icon: 'gear', title: 'OpenAPI 3.0 spec', desc: 'The spec is published and versioned. Generate types for TypeScript, Python, Go, or Ruby in one command. No stale type files.' },
      { icon: 'zap', title: 'Idempotent operations', desc: 'Pass an idempotency key on any write. Safe to retry in unreliable networks. The TypeScript SDK handles it automatically.' },
    ],
    steps: [
      'Sign up and generate an API token from Settings',
      'curl -X POST /v1/links — you\'re creating links',
      'Subscribe to click webhooks to get real-time data in your system',
      'Generate types from the OpenAPI spec with your preferred codegen tool',
    ],
    quote: {
      text: 'The OpenAPI spec is accurate and always up to date. I generated our TypeScript client in 10 minutes and it just worked. Haven\'t touched it since.',
      who: 'Mihail Popescu',
      role: 'Senior Engineer, Stackr',
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SOLUTIONS[slug];
  if (!s) return {};
  return {
    title: `${s.title} | Meshalive`,
    description: s.sub,
    alternates: { canonical: `https://meshalive.com/solutions/${slug}` },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SOLUTIONS[slug];
  if (!s) notFound();

  return (
    <div style={{ background: '#ffffff', color: INK }}>

      {/* Hero */}
      <section style={{ padding: '96px 32px 80px', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, background: PAPER2, border: `1px solid ${HAIR}`, borderRadius: 999, padding: '5px 14px', marginBottom: 28 }}>
            <Icon name={s.heroIcon} size={12} />
            Solutions · {s.slug}
          </div>
          <h1 style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px, 5vw, 62px)', fontWeight: 400, letterSpacing: '-0.02em', color: INK, margin: '0 0 20px', lineHeight: 1.1 }}>
            {s.headline}
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.65, maxWidth: 560, margin: '0 auto 36px' }}>{s.sub}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 24px', borderRadius: 999, background: INK, color: '#f6f2ea', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
              Start free <Icon name="arrow-right" size={15} />
            </Link>
            <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 24px', borderRadius: 999, background: PAPER2, color: INK2, border: `1px solid ${HAIR}`, fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '56px 32px', borderBottom: `1px solid ${HAIR}`, background: PAPER2 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {s.stats.map(st => (
            <div key={st.l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', color: ACCENT, marginBottom: 8 }}>{st.v}</div>
              <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.5 }}>{st.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 32px', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 42, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 12px' }}>Everything you need.</h2>
            <p style={{ fontSize: 16, color: MUTED }}>{s.body}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {s.features.map(f => (
              <div key={f.title} style={{ padding: '28px 24px', background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: ACCENT_SOFT, border: '1px solid #d4a88a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT_INK, marginBottom: 16 }}>
                  <Icon name={f.icon} size={17} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: INK, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 32px', background: PAPER2, borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, textAlign: 'center', margin: '0 0 48px' }}>How it works.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < s.steps.length - 1 ? 32 : 0, position: 'relative' }}>
                {i < s.steps.length - 1 && (
                  <div style={{ position: 'absolute', left: 19, top: 38, bottom: 0, width: 1, background: HAIR }} />
                )}
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#ffffff', border: `1px solid ${HAIR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: '"Geist Mono", monospace', fontSize: 13, fontWeight: 600, color: ACCENT_INK }}>
                  {i + 1}
                </div>
                <div style={{ paddingTop: 8, fontSize: 15, color: INK2, lineHeight: 1.6 }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: '80px 32px', borderBottom: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.4, color: INK2, margin: '0 0 32px', fontStyle: 'italic' }}>
            &ldquo;{s.quote.text}&rdquo;
          </p>
          <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{s.quote.who}</div>
          <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{s.quote.role}</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 38, fontWeight: 400, letterSpacing: '-0.01em', color: INK, margin: '0 0 12px' }}>
            Ready to start?
          </h2>
          <p style={{ fontSize: 15, color: MUTED, marginBottom: 28, lineHeight: 1.65 }}>
            Free plan forever. No credit card required. Upgrade when you need more.
          </p>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 999, background: INK, color: '#f6f2ea', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
            Create free account <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
