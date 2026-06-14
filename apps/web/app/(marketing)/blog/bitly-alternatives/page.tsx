import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Bitly Alternatives in 2026 (Free URL Shorteners Compared)',
  description: 'Bitly now limits free users to 10 links per month. We compare the 6 best Bitly alternatives on price, analytics, custom domains, API access, and QR codes — so you can switch today.',
  keywords: ['bitly alternative', 'bitly alternative free', 'free url shortener', 'url shortener comparison', 'best url shortener 2026', 'rebrandly alternative', 'tinyurl alternative'],
  alternates: { canonical: 'https://meshalive.com/blog/bitly-alternatives' },
  openGraph: {
    title: 'Best Bitly Alternatives in 2026 (Free URL Shorteners Compared)',
    description: 'Bitly limits free users to 10 links/month. Here are 6 better alternatives with unlimited free links, real analytics, and no credit card required.',
    url: 'https://meshalive.com/blog/bitly-alternatives',
    type: 'article',
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Bitly Alternatives in 2026',
    description: '6 free URL shorteners that beat Bitly on price, features, and limits.',
  },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

const TOOLS = [
  {
    name: 'Meshalive',
    badge: 'Best overall',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    free: 'Unlimited',
    analytics: 'Real-time (country, device, referrer)',
    customSlug: '✓ Paid',
    customDomain: '✓ from $4/mo',
    qr: '✓ Free',
    api: '✓ from $4/mo',
    price: 'Free / $4/mo',
    highlight: true,
  },
  {
    name: 'Bitly',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    free: '10 links total',
    analytics: 'Basic (paid only)',
    customSlug: '✓ Paid ($35/mo)',
    customDomain: '✓ Paid ($35/mo)',
    qr: '✓ Paid ($35/mo)',
    api: '✓ Paid ($199/mo)',
    price: 'Free / $35/mo',
    highlight: false,
  },
  {
    name: 'Rebrandly',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    free: '5 branded links',
    analytics: 'Basic',
    customSlug: '✓',
    customDomain: '✓ from $13/mo',
    qr: '✓ Paid',
    api: '✓ Paid',
    price: 'Free / $13/mo',
    highlight: false,
  },
  {
    name: 'TinyURL',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    free: 'Unlimited',
    analytics: 'None on free',
    customSlug: '✓ Paid ($10/mo)',
    customDomain: '✓ Paid ($10/mo)',
    qr: '✗',
    api: '✓ Paid',
    price: 'Free / $10/mo',
    highlight: false,
  },
  {
    name: 'Short.io',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    free: 'Unlimited (1K clicks tracked)',
    analytics: '1K clicks/mo cap',
    customSlug: '✓',
    customDomain: '✓ Free',
    qr: '✗',
    api: '✓ Paid',
    price: 'Free / $20/mo',
    highlight: false,
  },
  {
    name: 'T2M',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    free: 'Unlimited',
    analytics: 'Basic',
    customSlug: '✓ Paid',
    customDomain: '✓ Paid',
    qr: '✓ Paid',
    api: '✓ Paid',
    price: 'Free / $5/mo',
    highlight: false,
  },
];

export default function BitlyAlternativesPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 32px 96px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</a>
          <span>→</span>
          <span>Comparison</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>Comparison · 10 min read</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px', lineHeight: 1.2 }}>
            Best Bitly Alternatives in 2026<br />(Free URL Shorteners Compared)
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.75, margin: 0 }}>
            Bitly cut its free plan to 10 links per month in 2024. If you need more — and you do — here are the 6 best free alternatives ranked by features, price, and what they actually give you for nothing.
          </p>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${HAIR}`, fontSize: 13, color: MUTED }}>
            Updated June 2026 · By Meshalive team
          </div>
        </div>

        <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>

          {/* TL;DR box */}
          <div style={{ background: '#f8fafc', border: `1px solid ${HAIR}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 8, padding: '20px 24px', marginBottom: 40 }}>
            <div style={{ fontWeight: 700, color: INK, marginBottom: 10, fontSize: 15 }}>Quick answer</div>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 15 }}>
              <li><strong>Best free overall:</strong> Meshalive — unlimited links, real analytics, QR codes, no card</li>
              <li><strong>Best for branded domains:</strong> Rebrandly (budget) or Short.io (developer)</li>
              <li><strong>Simplest no-frills option:</strong> TinyURL</li>
              <li><strong>Best API access on a budget:</strong> Meshalive Starter at $4/mo</li>
            </ul>
          </div>

          {/* Why switch */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Why people are leaving Bitly</h2>
          <p>Bitly was the default URL shortener for years. Then in 2024 they slashed the free plan from 1,000 links per month to just 10 — total, not monthly. Their paid Starter plan jumped to $35/month. For context, that is $420/year for basic link management.</p>
          <p style={{ marginTop: 16 }}>The specific pain points that drive people to look for alternatives:</p>
          <ul style={{ paddingLeft: 24, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><strong>10-link free cap.</strong> Genuinely unusable for anyone running campaigns, managing a social calendar, or sharing affiliate links at any meaningful volume.</li>
            <li><strong>API locked behind $199/month.</strong> Bitly gates programmatic access to its most expensive plan. Every competitor gives API access at $4–$20/month.</li>
            <li><strong>QR codes locked behind $35/month.</strong> QR codes are a basic feature. Charging $35/month for them is indefensible.</li>
            <li><strong>No analytics on free.</strong> You get a short link, but you cannot see how many people clicked it without paying.</li>
          </ul>

          {/* Full comparison table */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Full comparison: 6 Bitly alternatives</h2>
          <p style={{ marginBottom: 20, color: MUTED, fontSize: 14 }}>Prices as of June 2026. Free tier features only — paid tiers vary significantly.</p>
          <div style={{ overflowX: 'auto', marginBottom: 8 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {['Tool', 'Free links', 'Free analytics', 'Custom slug', 'Custom domain', 'QR code', 'API', 'Paid from'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, color: INK, borderBottom: `2px solid ${HAIR}`, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOOLS.map((t, i) => (
                  <tr key={t.name} style={{ background: t.highlight ? '#eff6ff' : i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontWeight: 700, whiteSpace: 'nowrap' }}>
                      <span style={{ color: t.highlight ? ACCENT : INK }}>{t.name}</span>
                      {t.badge && <span style={{ marginLeft: 6, background: t.badgeBg, color: t.badgeColor, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>{t.badge}</span>}
                    </td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{t.free}</td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{t.analytics}</td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{t.customSlug}</td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{t.customDomain}</td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{t.qr}</td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13 }}>{t.api}</td>
                    <td style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontSize: 13, whiteSpace: 'nowrap' }}>{t.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: MUTED, marginTop: 8, marginBottom: 40 }}>Bitly API access requires the $199/month Enterprise plan. Rebrandly free plan requires a custom domain on every link.</p>

          {/* Individual reviews */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 24px' }}>Detailed breakdown of each alternative</h2>

          {/* 1 - Meshalive */}
          <div style={{ border: `1px solid #bfdbfe`, background: '#eff6ff', borderRadius: 12, padding: '24px', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: 0 }}>1. Meshalive</h3>
              <span style={{ background: ACCENT, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 4 }}>Best Bitly alternative</span>
            </div>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>Meshalive gives you everything Bitly charges $35/month for — on the free plan. Unlimited short links, real-time click analytics broken down by country, device, browser, and referrer, plus a downloadable QR code for every link. No credit card required to start.</p>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>The Starter plan ($4/month or $40/year) adds custom slugs, one custom domain, and full API access. That is one-ninth the price of Bitly for equivalent functionality. There is no upsell wall — every paid tier includes the API, unlike Bitly which requires $199/month for API access.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 14 }}>
              {[
                ['Free links', 'Unlimited'],
                ['Click analytics', 'Real-time, free'],
                ['QR codes', 'Free on all plans'],
                ['API', 'From $4/mo'],
                ['Custom domain', 'From $4/mo'],
                ['Paid from', '$4/mo · $40/yr'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ color: MUTED }}>{k}:</span>
                  <span style={{ fontWeight: 600, color: INK }}>{v}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '14px 0 0', color: MUTED, fontSize: 14 }}><strong>Best for:</strong> Anyone leaving Bitly who wants the same feature set for free or near-free. Particularly strong for teams, marketers, and developers who use the API.</p>
          </div>

          {/* 2 - TinyURL */}
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 12, padding: '24px', marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: '0 0 12px' }}>2. TinyURL</h3>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>TinyURL is the oldest URL shortener still operating. The free plan gives you unlimited short links with no analytics, no custom slugs, and no link editing after creation. It does one thing: turn a long URL into a short one. The result uses the tinyurl.com domain.</p>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>The paid plan ($10/month) adds a dashboard, click stats, and custom aliases. It is a reasonable upgrade if you just need basic tracking and do not care about custom domains or API access.</p>
            <p style={{ margin: 0, color: MUTED, fontSize: 14 }}><strong>Best for:</strong> One-off link sharing where you only need a shorter URL and have zero need to track who clicked it. Not suitable for marketing, campaigns, or anything requiring measurement.</p>
          </div>

          {/* 3 - Rebrandly */}
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 12, padding: '24px', marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: '0 0 12px' }}>3. Rebrandly</h3>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>Rebrandly is purpose-built for branded short links — links that use your own domain rather than a shared short domain. The free plan gives you 5 branded links and basic analytics. The $13/month Starter plan unlocks more links and click data.</p>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>The downside: Rebrandly is expensive relative to what you get. The $29/month Professional plan is required for anything serious, and the API is not included until higher tiers. If you specifically need a branded domain and have the budget, Rebrandly is polished. If budget matters, Meshalive gives you custom domains from $4/month with more features included.</p>
            <p style={{ margin: 0, color: MUTED, fontSize: 14 }}><strong>Best for:</strong> Brand-first marketing teams where the visible domain in the short link matters more than price. Not the right call for budget-conscious users.</p>
          </div>

          {/* 4 - Short.io */}
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 12, padding: '24px', marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: '0 0 12px' }}>4. Short.io</h3>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>Short.io is the most developer-friendly option on this list. The free plan includes custom domains and unlimited link creation — but analytics are capped at 1,000 tracked clicks per month. Once you hit the cap, click counting stops until the next month. The $20/month plan removes the cap.</p>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>The API is well-documented and available on paid plans. Short.io does not include QR code generation on any plan, which is a gap compared to Meshalive and Rebrandly.</p>
            <p style={{ margin: 0, color: MUTED, fontSize: 14 }}><strong>Best for:</strong> Developers who need custom domains on the free plan and can live with capped analytics until they hit volume that justifies the paid plan.</p>
          </div>

          {/* 5 - T2M */}
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 12, padding: '24px', marginBottom: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: '0 0 12px' }}>5. T2M</h3>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>T2M (t2mio.com) is a lesser-known shortener with a generous free plan: unlimited links and basic analytics included. The interface is dated and the QR code and API features require a paid plan starting at $5/month. Not as polished as the top picks, but it works and the free tier is honest.</p>
            <p style={{ margin: 0, color: MUTED, fontSize: 14 }}><strong>Best for:</strong> Budget-conscious users who need basic analytics for free and are not concerned about UI quality or custom domains.</p>
          </div>

          {/* 6 - BL.INK */}
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 12, padding: '24px', marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: '0 0 12px' }}>6. BL.INK</h3>
            <p style={{ margin: '0 0 14px', color: '#374151' }}>BL.INK targets enterprise and agency users with features like geo-targeting, device-based redirects, and deep campaign analytics. The free plan is very limited (5 links). Paid plans start at $48/month — more expensive than Bitly. It is only worth considering if you need advanced redirect rules that simpler tools do not offer.</p>
            <p style={{ margin: 0, color: MUTED, fontSize: 14 }}><strong>Best for:</strong> Enterprise teams that need conditional redirects (send mobile users to the App Store, desktop users to a landing page). Not a cost-effective Bitly replacement for typical use cases.</p>
          </div>

          {/* Bitly pricing breakdown */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>What Bitly actually costs in 2026</h2>
          <p>It is worth spelling this out because Bitly is aggressive about making its free plan look functional when it is not:</p>
          <div style={{ overflowX: 'auto', marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {['Plan', 'Price', 'Links', 'Analytics', 'Custom domain', 'API', 'QR codes'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, color: INK, borderBottom: `2px solid ${HAIR}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Free', '$0', '10 total', 'None', '✗', '✗', '✗'],
                  ['Starter', '$35/mo', '200/mo', 'Basic', '1', '✗', '✓'],
                  ['Growth', '$75/mo', '500/mo', 'Full', '2', '✗', '✓'],
                  ['Premium', '$150/mo', 'Unlimited', 'Full', '3', '✗', '✓'],
                  ['Enterprise', '$199/mo+', 'Unlimited', 'Full', 'Custom', '✓', '✓'],
                ].map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 12px', borderBottom: `1px solid ${HAIR}`, fontWeight: j === 0 ? 600 : 400, color: cell === '✗' ? '#dc2626' : cell === '✓' ? '#16a34a' : '#374151' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>API access — something every developer tool competitor gives for $4–$20/month — costs $199/month on Bitly. That is not a typo.</p>

          {/* Switching guide */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>How to switch from Bitly to Meshalive</h2>
          <p>If you have existing Bitly links, they continue to work — Bitly does not break old links when you stop paying. You do not need to migrate old links. Just start creating new links on Meshalive. For any existing Bitly links you actively promote, you can create equivalent Meshalive links and update the destination in your materials over time.</p>
          <ol style={{ paddingLeft: 24, marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li>Create a free account at <a href="/register" style={{ color: ACCENT }}>meshalive.com/register</a> — no credit card required.</li>
            <li>Use the shortener at <a href="/tools/url-shortener" style={{ color: ACCENT }}>meshalive.com/tools/url-shortener</a> for anonymous links, or log in to create tracked links.</li>
            <li>If you had a custom domain on Bitly, add it to Meshalive via Settings → Custom Domains (available on the $4/mo Starter plan).</li>
            <li>Export your Bitly link history from Bitly dashboard → Export. Keep it as a record; you do not need to import it anywhere.</li>
          </ol>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 20px' }}>Frequently asked questions</h2>
          <div style={{ borderTop: `1px solid ${HAIR}` }}>
            {[
              {
                q: 'Is Meshalive really free?',
                a: 'Yes. The free plan has no link cap, no click cap on analytics, and no time limit. You get unlimited short links with real-time click analytics (country, device, referrer breakdown) and QR code downloads. No credit card is required. The paid Starter plan ($4/month) adds custom slugs, one custom domain, and API access.',
              },
              {
                q: 'Will my existing Bitly links break if I stop paying?',
                a: 'No. Bitly keeps short links live even if your account downgrades. However, if you were using a custom domain on Bitly and you stop paying, links using that custom domain will stop working. Links on the default bit.ly domain remain active.',
              },
              {
                q: 'Can I use a custom domain instead of msha.live?',
                a: 'Yes. The Meshalive Starter plan ($4/month) lets you connect one custom domain. Links you create will use that domain instead of msha.live. Setup takes about 5 minutes via a CNAME DNS record.',
              },
              {
                q: 'Which Bitly alternative has the best API?',
                a: 'Meshalive gives you full REST API access on the Starter plan ($4/month). Short.io also has a well-documented API from its paid tier. Bitly only offers API access at $199/month. For any developer automating link creation from a CRM, e-commerce system, or script, Meshalive or Short.io are the practical choices.',
              },
              {
                q: 'What happened to Bitly free plan?',
                a: 'In 2024, Bitly reduced the free plan from 1,000 links per month to 10 links total (not per month — total across the life of your account). At that point, many users left for alternatives. The paid plans also saw price increases: Starter went from $8/month to $35/month.',
              },
              {
                q: 'Does Meshalive work for teams?',
                a: 'Yes. Team workspaces are available on the Growth plan ($14/month, 5 seats) and Business plan ($49/month, 15 seats). Shared link libraries, role-based access, and multi-workspace support are included. The free and Starter plans are single-user.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: `1px solid ${HAIR}`, padding: '20px 0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, margin: '0 0 8px' }}>{q}</h3>
                <p style={{ color: MUTED, margin: 0, fontSize: 15, lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Bottom line</h2>
          <p>Bitly had a decade-long head start and spent it accumulating brand recognition. But since the 2024 free plan cuts, it no longer makes sense for the majority of users. The alternatives above — especially Meshalive — give you more links, more analytics, and better pricing. The free plan alone beats what Bitly charged $35/month for three years ago.</p>
          <p style={{ marginTop: 16 }}>If you need the simplest possible switch: create a Meshalive account, shorten your next link there, and never look at Bitly again. It takes 30 seconds.</p>

          {/* CTA */}
          <div style={{ background: '#111111', borderRadius: 16, padding: '40px', marginTop: 48, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>Switch from Bitly — free, today</div>
            <p style={{ color: '#6b7280', fontSize: 15, margin: '0 0 24px', lineHeight: 1.6 }}>Unlimited links · Real-time analytics · QR codes · No credit card</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/register" style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                Create free account →
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
