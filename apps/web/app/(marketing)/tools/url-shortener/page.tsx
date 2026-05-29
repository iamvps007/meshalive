import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from './UrlShortenerTool';

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: { absolute: 'Free URL Shortener — Shorten Links Instantly | Meshalive' },
  description:
    'Shorten any URL for free in seconds. No account needed. Get short links with click tracking — or sign up free for unlimited links, full analytics, and custom slugs.',
  keywords: [
    'url shortener',
    'free url shortener',
    'link shortener',
    'short link generator',
    'url shortener online',
    'shorten url',
    'url shortener for teams',
    'custom short links',
    'free link shortener',
    'bitly alternative free',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/url-shortener',
  },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/url-shortener',
    title: { absolute: 'Free URL Shortener — Shorten Links Instantly | Meshalive' },
    description:
      'Shorten any URL for free in seconds. No account needed. Get short links with click tracking — or sign up free for unlimited links, full analytics, and custom slugs.',
    siteName: 'Meshalive',
    images: [
      {
        url: 'https://meshalive.com/og/url-shortener.png',
        width: 1200,
        height: 630,
        alt: 'Meshalive — Free URL Shortener',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Free URL Shortener — Shorten Links Instantly | Meshalive' },
    description:
      'Shorten any URL for free in seconds. No account needed. unlimited links when you sign up — analytics, custom slugs, QR codes.',
    images: ['https://meshalive.com/og/url-shortener.png'],
    site: '@meshalive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─── JSON-LD schemas ───────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Meshalive URL Shortener',
      url: 'https://meshalive.com/tools/url-shortener',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      description:
        'Free online URL shortener. Shorten any long URL instantly with no account required. Get real-time click analytics, custom slugs, QR codes, and UTM tracking — 100% free, forever.',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1240',
      },
      featureList: [
        'Instant URL shortening',
        'Click analytics and tracking',
        'Custom slugs and branded short links',
        'QR code generation',
        'UTM parameter management',
        'Multi-currency billing with tax-compliant invoicing',
        'WhatsApp-optimized share links',
        'API access on all paid plans',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I shorten a URL with Meshalive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Paste any long URL into the input field above and click "Shorten URL". Within a second you will receive a short link you can copy and share anywhere — no signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to create an account to shorten a link?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. You can shorten links anonymously without any account. Anonymous links support up to 20 clicks and expire after 7 days. To get unlimited links, full analytics, custom slugs, and no expiry, create a free account at meshalive.com/register.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the 20-click limit for anonymous links?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anonymous short links — created without an account — will redirect for up to 20 clicks. After the 20th click, the link will no longer redirect. This limit exists to prevent anonymous abuse. Sign up for a free Meshalive account to remove this restriction and get unlimited links with no per-link click cap.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a custom slug like msha.in/my-brand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom slugs and custom domains (e.g. go.yourbrand.com) are available to all Meshalive users — completely free. No paid plan required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use Meshalive short links on WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Meshalive short links work perfectly in WhatsApp messages, WhatsApp Business broadcasts, and WhatsApp Status. The short URL previews with the destination page\'s Open Graph title and image, making your campaigns look professional.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Meshalive provide click analytics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All users get full click analytics including All analytics are free: geographic breakdown (country, city), device type, browser, referrer source, and UTM campaign data — retained for up to 90 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the pricing for Meshalive in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Meshalive is 100% free for everyone. You get unlimited links, full analytics, custom domains, API access, QR codes, and team features — all at no cost. No credit card. No paid plans.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Meshalive compare with Bitly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bitly\'s free plan caps you at 10 links per month with no analytics and no API. Meshalive\'s free plan gives you unlimited links. At equivalent paid tiers, Meshalive is approximately 50% cheaper than Bitly, includes API access on all paid tiers (Bitly gates API access to enterprise), provides GST invoicing for Indian businesses, and accepts Razorpay payments (UPI, RuPay, NetBanking) — which Bitly does not.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Meshalive compare with TinyURL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TinyURL offers basic free link shortening but has limited analytics and no custom domains. Meshalive provides deeper analytics (geo, device, referrer, UTM), custom branded domains, QR code generation, team workspaces, and a developer API — making it a more complete solution for businesses and marketing teams.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens when an anonymous link reaches its 20-click limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once an anonymous short link accumulates 20 clicks, subsequent visitors will see a page informing them the link has expired. The link cannot be reactivated. To avoid this, sign up for a free Meshalive account — free accounts have no per-link click cap (subject to the monthly link creation limit of 100). Paid accounts have no link creation limits and no click caps.',
          },
        },
      ],
    },
  ],
};

/* ─── Shared style helpers ──────────────────────────────────────────────────── */

const sectionStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '860px',
  margin: '0 auto',
  padding: '0 16px',
};

const headingStyle: React.CSSProperties = {
  fontSize: 'clamp(22px, 4vw, 28px)',
  fontWeight: 700,
  color: '#111111',
  margin: '0 0 8px',
  lineHeight: 1.25,
};

const subheadStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#6b7280',
  margin: '0 0 32px',
  lineHeight: 1.6,
  maxWidth: '620px',
};

const dividerStyle: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '56px auto',
  maxWidth: '860px',
};

/* ─── Page Component ────────────────────────────────────────────────────────── */

export default function UrlShortenerPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="url-shortener-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          width: '100%',
          paddingBottom: '80px',
          color: '#111111',
          fontFamily: 'inherit',
        }}
      >
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          style={{
            ...sectionStyle,
            paddingTop: 'clamp(48px, 8vw, 88px)',
            paddingBottom: 'clamp(40px, 6vw, 64px)',
            textAlign: 'center',
          }}
        >
          <h1
            className="display"
            style={{
              fontSize: 'clamp(30px, 5vw, 48px)',
              fontWeight: 800,
              color: '#111111',
              margin: '0 0 14px',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            Free URL Shortener
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 19px)',
              color: '#6b7280',
              maxWidth: '560px',
              margin: '0 auto 40px',
              lineHeight: 1.65,
            }}
          >
            Shorten any URL instantly — no signup, no credit card. Share clean short links
            on WhatsApp, Instagram, email, and more.
          </p>

          {/* Tool widget */}
          <UrlShortenerTool />
        </section>

        <hr style={dividerStyle} />

        {/* ── How it works ─────────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>How it works</h2>
          <p style={subheadStyle}>
            Shorten your first link in under 10 seconds — three simple steps.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Paste your long URL',
                body: 'Copy any long URL — a product page, campaign landing page, Google Doc, or social profile — and paste it into the input field above.',
              },
              {
                step: '02',
                title: 'Click "Shorten URL"',
                body: 'Hit the Shorten URL button. Our API generates a unique short link at msha.in in under 300ms. No email, no captcha, no waiting.',
              },
              {
                step: '03',
                title: 'Share your link',
                body: 'Copy the short link and share it anywhere — WhatsApp broadcasts, Instagram bio, email campaigns, QR codes, SMS, or printed flyers.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: '24px',
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#0057ff',
                    letterSpacing: '0.05em',
                    marginBottom: '12px',
                    fontFamily: 'monospace',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 8px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={dividerStyle} />

        {/* ── Anonymous vs Free Account ─────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Anonymous vs Free Account</h2>
          <p style={subheadStyle}>
            You can shorten links right now without signing up. But creating a free account
            unlocks substantially more — still at zero cost.
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <th
                    style={{
                      padding: '14px 20px',
                      textAlign: 'left',
                      color: '#6b7280',
                      fontWeight: 600,
                      fontSize: '12px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      background: '#f9fafb',
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: '14px 20px',
                      textAlign: 'center',
                      color: '#6b7280',
                      fontWeight: 600,
                      fontSize: '12px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      background: '#f9fafb',
                    }}
                  >
                    Anonymous
                  </th>
                  <th
                    style={{
                      padding: '14px 20px',
                      textAlign: 'center',
                      color: '#0057ff',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      background: '#eff6ff',
                    }}
                  >
                    Free Account
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Links per month', anon: '∞ (20-click limit each)', free: 'Unlimited' },
                  { feature: 'Clicks per link', anon: '20 clicks', free: 'Unlimited' },
                  { feature: 'Link expiry', anon: '7 days', free: 'Never' },
                  { feature: 'Click analytics', anon: '—', free: 'Full analytics' },
                  { feature: 'Custom slugs', anon: '—', free: '—' },
                  { feature: 'QR code generation', anon: '—', free: 'Included' },
                  { feature: 'API access', anon: '—', free: '—' },
                  { feature: 'Dashboard / link management', anon: '—', free: 'Included' },
                  { feature: 'Account needed', anon: 'No', free: 'Email only' },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: i < 8 ? '1px solid var(--line-c)' : 'none',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                    }}
                  >
                    <td style={{ padding: '13px 20px', color: '#111111', fontWeight: 500 }}>
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: '13px 20px',
                        textAlign: 'center',
                        color: row.anon === '—' ? '#d1d5db' : '#6b7280',
                      }}
                    >
                      {row.anon}
                    </td>
                    <td
                      style={{
                        padding: '13px 20px',
                        textAlign: 'center',
                        color: row.free === '—' ? '#d1d5db' : '#111111',
                        fontWeight: row.free !== '—' ? 500 : 400,
                        background: '#f8faff',
                      }}
                    >
                      {row.free}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a
              href="/register"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Create free account — takes 30 seconds
            </a>
          </div>
        </section>

        <hr style={dividerStyle} />

        {/* ── Use cases ─────────────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Built for every use case</h2>
          <p style={subheadStyle}>
            From WhatsApp campaigns to Instagram bios, Meshalive short links work wherever
            you need to share a URL.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                icon: '💬',
                title: 'WhatsApp Campaigns',
                body: 'Indian SMBs run entire sales cycles over WhatsApp. Long product URLs get broken in messages and look untrustworthy. A Meshalive short link is clean, clickable, and works perfectly in WhatsApp Business broadcasts and individual chats. With click analytics, you can measure exactly how many customers clicked your offer.',
              },
              {
                icon: '📸',
                title: 'Instagram Bio Link',
                body: 'Instagram only allows one clickable link in the bio. Use a Meshalive short link to point followers to your latest offer, a Linktree-style landing page, or directly to a product. When the campaign changes, update the destination without changing the URL in your bio.',
              },
              {
                icon: '📧',
                title: 'Email Marketing',
                body: 'Long tracking URLs in email campaigns look spammy and reduce click-through rates. Replace them with clean Meshalive short links. Our analytics capture click counts, geographic data, and referrer sources — giving your email analytics a second data source to cross-reference.',
              },
              {
                icon: '🔲',
                title: 'QR Codes for Print',
                body: 'Generate a high-resolution QR code for any of your short links directly from the Meshalive dashboard. Use QR codes on packaging, flyers, visiting cards, banners, and product labels. Every scan is tracked as a click — so you know exactly which offline materials are driving traffic.',
              },
              {
                icon: '🏷️',
                title: 'UTM Tracking & Attribution',
                body: 'Append UTM parameters (source, medium, campaign, term, content) to any URL before shortening. Meshalive preserves UTM parameters end-to-end while keeping the shared link clean. Our UTM builder tool lets you build and save UTM templates for repeatable campaigns.',
              },
            ].map((uc) => (
              <div
                key={uc.title}
                style={{
                  padding: '24px',
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{uc.icon}</div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#111111',
                    margin: '0 0 10px',
                  }}
                >
                  {uc.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: 1.7 }}>
                  {uc.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={dividerStyle} />

        {/* ── Why Meshalive ─────────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Why teams choose Meshalive over Bitly and Rebrandly</h2>
          <p style={subheadStyle}>
            Priced for Indian businesses. Built for every team size — from solo freelancers
            to 15-person marketing agencies.
          </p>

          {/* Comparison table */}
          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid #e5e7eb', marginBottom: '28px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  {['Feature', 'Meshalive (Free)', 'Bitly (Free)', 'Rebrandly (Free)'].map(
                    (h, i) => (
                      <th
                        key={h}
                        style={{
                          padding: '14px 18px',
                          textAlign: i === 0 ? 'left' : 'center',
                          color: i === 1 ? '#0057ff' : '#6b7280',
                          fontWeight: i === 1 ? 700 : 600,
                          fontSize: '12px',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          background: i === 1 ? 'rgba(196,90,57,0.06)' : 'rgba(255,255,255,0.03)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Links / month',
                    meshalive: 'Unlimited',
                    bitly: '10',
                    rebrandly: '10',
                  },
                  {
                    feature: 'Click analytics',
                    meshalive: 'Full analytics',
                    bitly: 'None',
                    rebrandly: 'None',
                  },
                                    {
                    feature: 'API access',
                    meshalive: 'Free',
                    bitly: 'Enterprise only',
                    rebrandly: 'Paid ($13/mo)',
                  },
                  {
                    feature: 'QR codes',
                    meshalive: 'Free account',
                    bitly: 'Paid',
                    rebrandly: 'Paid',
                  },
                                                      {
                    feature: 'Pricing',
                    meshalive: 'Always free',
                    bitly: '$8/mo (~₹670)',
                    rebrandly: '$13/mo (~₹1,100)',
                  },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: i < 7 ? '1px solid var(--line-c)' : 'none',
                    }}
                  >
                    <td style={{ padding: '12px 18px', color: '#111111', fontWeight: 500 }}>
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: '12px 18px',
                        textAlign: 'center',
                        color: '#111111',
                        fontWeight: 600,
                        background: '#f8faff',
                      }}
                    >
                      {row.meshalive}
                    </td>
                    <td
                      style={{
                        padding: '12px 18px',
                        textAlign: 'center',
                        color: '#6b7280',
                      }}
                    >
                      {row.bitly}
                    </td>
                    <td
                      style={{
                        padding: '12px 18px',
                        textAlign: 'center',
                        color: '#6b7280',
                      }}
                    >
                      {row.rebrandly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              padding: '20px 24px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '14px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                color: '#111111',
                lineHeight: 1.7,
              }}
            >
              <strong>No credit card needed to get started.</strong> Meshalive&apos;s free plan
              gives Indian teams 10× more links than Bitly Free, with QR code generation and a
              real analytics dashboard. Custom domains, API access, QR codes, and full analytics are all included free. No credit card. No paid plans. Just sign up.
            </p>
          </div>
        </section>

        <hr style={dividerStyle} />

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Frequently asked questions</h2>
          <p style={subheadStyle}>
            Everything you need to know about Meshalive&apos;s free URL shortener.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              {
                q: 'How do I shorten a URL with Meshalive?',
                a: 'Paste your long URL into the input box at the top of this page and click "Shorten URL." Within a second you will receive a short link at msha.in. No account or email address is required. Click the copy button to copy the short link to your clipboard, then share it anywhere.',
              },
              {
                q: 'Do I need to create an account to shorten a link?',
                a: 'No, you can shorten links anonymously without creating an account. Anonymous links work for up to 20 clicks and expire after 7 days. If you need more — unlimited links with a full dashboard, complete analytics, QR code generation — you can create a free Meshalive account at meshalive.com/register in under 30 seconds using just your email address.',
              },
              {
                q: 'What is the 20-click limit on anonymous links?',
                a: 'To prevent abuse of the anonymous shortening tool, anonymous links (created without logging in) are limited to 20 total clicks. After the 20th visitor clicks the link, it stops redirecting and the short URL becomes inactive. If you need your links to work for more than 20 clicks, sign up for a free Meshalive account. Free accounts have no per-link click limit — only a 100-link-per-month creation limit.',
              },
              {
                q: 'How long do anonymous short links last?',
                a: 'Anonymous short links expire after 7 days from creation, even if they have not yet reached the 20-click limit. Links created on a free account do not expire. Paid plan links also never expire.',
              },
              {
                q: 'Can I customise the slug — for example, msha.in/my-sale?',
                a: 'Custom slugs are free for all registered users. When creating a link from the dashboard you can type any available slug. Custom domain short links (e.g. go.yourbrand.com/my-sale) are also supported. For anonymous links, slugs are auto-generated as random alphanumeric strings.',
              },
              {
                q: 'Can I use Meshalive short links in WhatsApp messages?',
                a: 'Yes, absolutely. Meshalive short links are fully compatible with WhatsApp personal messages, WhatsApp Business, and broadcast lists. The link unfurls with the destination page\'s title, description, and image — just like any other URL. Many Indian SMBs use Meshalive to shorten long product or catalogue links before sending them in WhatsApp campaigns, making the message look cleaner and more trustworthy.',
              },
              {
                q: 'What analytics do I get with a free account?',
                a: 'All users get full analytics — click counts, history, for all users: geographic breakdown (country, city), device type, browser, referrer source, and UTM campaign dimensions. Data is retained for 90 days.',
              },
              {
                q: 'What are the prices for Meshalive in India?',
                a: 'Meshalive offers transparent flat-rate plans: Free (unlimited links, full analytics). Payment is accepted via card, UPI, RuPay, and NetBanking. Tax-compliant invoices are generated automatically and available for download.',
              },
              {
                q: 'How is Meshalive different from Bitly?',
                a: 'The three main differences are price, link limits, and payment flexibility. Bitly Free gives you only 10 links per month; Meshalive Free gives you 100. Meshalive is completely free — no paid tiers at all. Bitly charges $8/month for features Meshalive gives you for free, and Bitly doesn’t support UPI or RuPay payments.',
              },
              {
                q: 'How is Meshalive different from TinyURL?',
                a: 'TinyURL is a basic free tool for generating short links but offers very limited analytics, no custom domains, and no team workspaces. Meshalive provides a full link-management platform: real-time click analytics (geo, device, referrer, UTM), custom branded domains, QR code generation, team collaboration, and a developer API. TinyURL is suitable for quickly sharing a single link; Meshalive is built for businesses that want to manage and measure all their links in one place.',
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '0',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    padding: '18px 22px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111111',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    userSelect: 'none',
                  }}
                >
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, color: '#6b7280' }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div
                  style={{
                    padding: '0 22px 18px',
                    fontSize: '14px',
                    color: '#6b7280',
                    lineHeight: 1.75,
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: '16px',
                  }}
                >
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <hr style={dividerStyle} />

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section
          style={{
            ...sectionStyle,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              padding: 'clamp(36px, 6vw, 64px) clamp(20px, 5vw, 48px)',
              background: '#f0f7ff',
              border: '1px solid #bfdbfe',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-60px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(0,87,255,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <h2
              className="display"
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 800,
                color: '#111111',
                margin: '0 0 12px',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                position: 'relative',
              }}
            >
              Create unlimited links — free forever
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: '0 auto 32px',
                maxWidth: '480px',
                lineHeight: 1.65,
                position: 'relative',
              }}
            >
              Join thousands of Indian businesses and creators who use Meshalive to share,
              track, and grow. 100% free — no credit card, no paid plans, ever.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <a
                href="/register"
                className="btn btn-primary"
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Get started free
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="/pricing"
                className="btn btn-outline"
                style={{
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                View pricing
              </a>
            </div>

            <p
              style={{
                marginTop: '20px',
                fontSize: '13px',
                color: '#6b7280',
                position: 'relative',
              }}
            >
              100% free · No credit card · Custom domains included
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
