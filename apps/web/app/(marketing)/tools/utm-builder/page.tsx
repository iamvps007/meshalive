import type { Metadata } from 'next'
import UtmBuilderTool from './UtmBuilderTool'

export const metadata: Metadata = {
  title: { absolute: 'Free UTM Builder — UTM Link Generator | Meshalive' },
  description:
    'Build UTM-tagged URLs for free with a fast campaign URL builder. Add utm_source, utm_medium, utm_campaign, and more in seconds for Google Analytics and Meshalive.',
  keywords: [
    'utm builder',
    'utm link generator',
    'utm parameter generator',
    'utm url builder',
    'google analytics utm',
    'utm tags',
    'utm campaign builder',
    'free utm builder',
    'utm code generator',
    'campaign url builder',
    'google campaign url builder',
    'google url builder',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/utm-builder',
  },
  openGraph: {
    title: { absolute: 'Free UTM Builder — UTM Link Generator | Meshalive' },
    description: 'Build UTM-tagged URLs free and instantly. Track campaigns in Google Analytics.',
    url: 'https://meshalive.com/tools/utm-builder',
    siteName: 'Meshalive',
    type: 'website',
    images: [{ url: 'https://meshalive.com/og/utm-builder.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Free UTM Builder — UTM Link Generator | Meshalive' },
    description: 'Build UTM-tagged URLs free. Track campaigns in Google Analytics.',
    site: '@meshalive',
    images: ['https://meshalive.com/og/utm-builder.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Meshalive UTM Builder',
      description: 'Free online UTM parameter builder. Add UTM tags to your URLs to track campaigns in Google Analytics — no account required.',
      url: 'https://meshalive.com/tools/utm-builder',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      provider: { '@type': 'Organization', name: 'Meshalive', url: 'https://meshalive.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a UTM parameter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UTM parameters are tags added to a URL that tell analytics tools (like Google Analytics) where your traffic came from. They track the source, medium, and campaign name.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an account to use this UTM builder?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The UTM builder is completely free and requires no signup. Your URL is built entirely in your browser.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is utm_source?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'utm_source identifies where the traffic originates — for example "google", "facebook", "newsletter", or "whatsapp".',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I shorten UTM URLs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — UTM URLs are long and ugly. Shortening them with a tool like Meshalive makes them shareable on social media and WhatsApp, and also adds click tracking on top of the UTM data.',
          },
        },
      ],
    },
  ],
}

const INK = '#111111'
const MUTED = '#6b7280'
const HAIR = '#e5e7eb'
const ACCENT = '#0057ff'

export default function UtmBuilderPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '56px 32px 96px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/tools" style={{ color: MUTED, textDecoration: 'none' }}>Tools</a>
          <span>→</span>
          <span>UTM Builder</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: 16,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
            Free Tool
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.15 }}>
            UTM Builder
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.75, margin: '0 0 8px', maxWidth: 600 }}>
            Add UTM parameters to any URL and track where your traffic really comes from. Works with Google Analytics, Meshalive, and any analytics platform.
          </p>
          <p style={{ fontSize: 13, color: '#9ca3af', margin: 0 }}>Free · No signup · Built in your browser</p>
        </div>

        {/* Tool */}
        <div style={{ marginBottom: 64 }}>
          <UtmBuilderTool />
        </div>

        {/* Article */}
        <article style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', maxWidth: 680 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>What are UTM parameters?</h2>
          <p>UTM parameters (Urchin Tracking Module — named after the analytics company Google acquired) are snippets of text appended to a URL that tell your analytics platform exactly where a visitor came from, which campaign drove them, and what they clicked.</p>
          <p>A URL with UTM tags looks like this:</p>
          <pre style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '12px 16px', fontSize: 13, overflowX: 'auto', lineHeight: 1.6, fontFamily: 'ui-monospace, monospace', color: '#374151' }}>
{`https://meshalive.com/pricing
  ?utm_source=whatsapp
  &utm_medium=social
  &utm_campaign=diwali_sale`}
          </pre>
          <p>Without UTM tags, Google Analytics lumps all your WhatsApp shares, newsletter clicks, and ad traffic together under "direct" or "referral". With them, you can see exactly which channel drives sign-ups, revenue, or whatever you care about.</p>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>How to use this UTM builder</h2>
          <ol style={{ paddingLeft: 20, color: '#374151' }}>
            <li style={{ marginBottom: 12 }}><strong>Paste your destination URL.</strong> This is the page people should land on after clicking the link.</li>
            <li style={{ marginBottom: 12 }}><strong>Fill source, medium, and campaign.</strong> These three parameters do most of the reporting work in Google Analytics.</li>
            <li style={{ marginBottom: 12 }}><strong>Copy the final UTM URL.</strong> Then shorten it with Meshalive before using it in WhatsApp, ads, email, QR codes, or social bios.</li>
          </ol>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>The 5 UTM parameters explained</h2>
          <p><strong>utm_source</strong> (required) — identifies where the traffic comes from. Use the platform name: <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>google</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>facebook</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>whatsapp</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>newsletter</code>.</p>
          <p><strong>utm_medium</strong> (required) — the type of marketing channel: <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>cpc</code> for paid ads, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>social</code> for organic social, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>email</code> for email campaigns.</p>
          <p><strong>utm_campaign</strong> (required) — the name of the specific campaign: <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>diwali_sale</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>product_launch_2026</code>. Use lowercase and underscores for cleaner reports.</p>
          <p><strong>utm_term</strong> (optional) — for paid search ads, the keyword that triggered the ad: <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>url+shortener+india</code>.</p>
          <p><strong>utm_content</strong> (optional) — for A/B tests or differentiating multiple links in the same campaign: <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>hero_cta</code> vs. <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>sidebar_banner</code>.</p>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>UTM best practices</h2>
          <ul style={{ paddingLeft: 20, color: '#374151' }}>
            <li style={{ marginBottom: 10 }}><strong>Always use lowercase.</strong> <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 5px', borderRadius: 3, fontSize: 13 }}>Facebook</code> and <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 5px', borderRadius: 3, fontSize: 13 }}>facebook</code> show up as two different sources in GA4 — pick one and stick with it.</li>
            <li style={{ marginBottom: 10 }}><strong>Use underscores, not spaces.</strong> Spaces become <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 5px', borderRadius: 3, fontSize: 13 }}>%20</code> in the URL, making reports hard to read.</li>
            <li style={{ marginBottom: 10 }}><strong>Shorten UTM URLs before sharing.</strong> Raw UTM links are 100+ characters and look spammy. Use a URL shortener like Meshalive to make them shareable on WhatsApp, Instagram, and SMS.</li>
            <li style={{ marginBottom: 10 }}><strong>Document your naming convention.</strong> A spreadsheet with source/medium/campaign standards prevents teammates from using <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 5px', borderRadius: 3, fontSize: 13 }}>fb</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 5px', borderRadius: 3, fontSize: 13 }}>Facebook</code>, and <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 5px', borderRadius: 3, fontSize: 13 }}>facebook</code> for the same source.</li>
            <li style={{ marginBottom: 10 }}><strong>Don't use UTM tags on internal links.</strong> This resets the session source in GA4 — only add UTMs to external links you share.</li>
          </ul>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Common UTM examples</h2>
          <ul style={{ paddingLeft: 20, color: '#374151' }}>
            <li style={{ marginBottom: 10 }}><strong>WhatsApp campaign:</strong> <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_source=whatsapp</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_medium=social</code></li>
            <li style={{ marginBottom: 10 }}><strong>Email newsletter:</strong> <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_source=newsletter</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_medium=email</code></li>
            <li style={{ marginBottom: 10 }}><strong>Google Ads:</strong> <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_source=google</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_medium=cpc</code></li>
            <li style={{ marginBottom: 10 }}><strong>Instagram bio link:</strong> <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_source=instagram</code>, <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>utm_medium=social</code></li>
          </ul>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: `1px solid ${HAIR}`, borderRadius: 12, overflow: 'hidden' }}>
            {[
              { q: 'Does this UTM builder cost anything?', a: 'No — it\'s completely free with no signup required. The URL is built entirely in your browser, nothing is sent to our servers.' },
              { q: 'Should I shorten UTM URLs?', a: 'Yes. UTM URLs are often 150–200 characters long, which looks unprofessional and gets cut off on WhatsApp and SMS. Shortening them with Meshalive also adds a layer of click tracking on top of your GA data.' },
              { q: 'Do UTM parameters work with GA4?', a: 'Yes. GA4 reads all standard UTM parameters (source, medium, campaign, term, content) natively. No additional setup required.' },
              { q: 'What\'s the difference between utm_source and utm_medium?', a: 'Source is the specific platform (google, whatsapp, mailchimp), while medium is the category of channel (cpc, social, email). Think of source as "who sent them" and medium as "how they arrived."' },
            ].map((item, i, arr) => (
              <details key={i} style={{ borderBottom: i < arr.length - 1 ? `1px solid ${HAIR}` : 'none' }}>
                <summary style={{ padding: '16px 20px', fontSize: 15, fontWeight: 600, color: INK, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.q}
                  <span style={{ fontSize: 18, color: MUTED, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: '0 20px 16px', margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.7 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </article>
        {/* Related tools */}
        <div style={{ marginTop:64, borderTop:'1px solid #e5e7eb', paddingTop:40 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:'#111', marginBottom:20, letterSpacing:'-0.01em' }}>Related free tools</h2>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                        <a href="/tools/url-shortener" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔗</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>URL Shortener</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Shorten your UTM links before sharing</div>
              </div>
            </a>
            <a href="/tools/character-counter" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>✍️</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>Character Counter</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Check link length for Twitter/X posts</div>
              </div>
            </a>
            <a href="/tools/whatsapp-link-generator" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>💬</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>WhatsApp Link Generator</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Create trackable WhatsApp links</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
