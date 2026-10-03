import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Free Online Tools for Marketers & Developers | Meshalive' },
  description: 'Free online tools for marketers and growth teams: UPI QR code generator, WhatsApp link generator, YouTube subscribe link, UTM builder, redirect checker, Bitly alternative, and more.',
  keywords: ['free online tools', 'upi qr code generator', 'youtube subscribe link', 'url shortener', 'utm builder', 'qr code generator', 'password generator', 'character counter', 'slug generator', 'url encoder', 'whatsapp link generator', 'bulk url shortener', 'redirect checker', 'bitly alternative'],
  alternates: { canonical: 'https://meshalive.com/tools' },
  openGraph: {
    title: { absolute: 'Free Online Tools for Marketers & Developers | Meshalive' },
    description: 'Free tools: UPI QR code maker, WhatsApp link generator, YouTube auto-subscribe links, UTM builder, redirect checker, Bitly alternative, and more.',
    url: 'https://meshalive.com/tools',
    siteName: 'Meshalive',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const FEATURED_TOOLS = [
  { href: '/tools/upi-qr-code-generator', icon: '⚡', name: 'UPI QR Code Generator', stat: 'India payments utility', desc: 'Create printable UPI payment QR codes with custom amount and name for PhonePe, GPay, Paytm & BHIM.' },
  { href: '/tools/whatsapp-link-generator', icon: '💬', name: 'WhatsApp Link Generator', stat: 'High-intent lead capture', desc: 'Create click-to-chat wa.me links with optional pre-filled messages for websites, Instagram bios, ads, and QR codes.' },
  { href: '/tools/youtube-subscribe-link-generator', icon: '▶️', name: 'YouTube Subscribe Link', stat: 'Creator growth tool', desc: 'Generate auto-subscribe prompt confirmation links with custom short URLs and QR codes to boost subscribers.' },
  { href: '/tools/utm-builder', icon: '📊', name: 'UTM Builder', stat: 'Campaign tracking essential', desc: 'Build clean UTM URLs for Google Analytics, paid ads, social campaigns, WhatsApp outreach, and email marketing.' },
]

const TOOLS = [
  {
    category: 'India & Regional Growth',
    items: [
      { href: '/tools/upi-qr-code-generator',        icon: '⚡', name: 'UPI QR Code Generator',        desc: 'Generate printable scan-to-pay QR codes with custom amount.' },
      { href: '/tools/wifi-qr-code-generator',       icon: '📶', name: 'Wi-Fi QR Code Generator',       desc: 'Generate scan-to-connect Wi-Fi QR cards for guest networks & cafes.' },
      { href: '/tools/url-shortener-india',          icon: '🇮🇳', name: 'URL Shortener India',           desc: 'Free URL shortener for Indian businesses, WhatsApp, and SMS.' },
      { href: '/tools/url-shortener-uae',            icon: '🇦🇪', name: 'URL Shortener UAE & Dubai',     desc: 'Free short links for Dubai real estate, WhatsApp, and retail.' },
    ],
  },
  {
    category: 'Social Media & Creators',
    items: [
      { href: '/tools/amazon-affiliate-link-shortener', icon: '🛒', name: 'Amazon Affiliate Shortener', desc: 'Clean Amazon tracking bloat, preserve Associate tag & shorten.' },
      { href: '/tools/youtube-subscribe-link-generator', icon: '▶️', name: 'YouTube Subscribe Link', desc: 'Auto-confirmation subscription links for YouTube channels.' },
      { href: '/tools/whatsapp-link-generator',icon: '💬', name: 'WhatsApp Link Generator', desc: 'Create click-to-chat wa.me links for any number.' },
      { href: '/tools/url-shortener-for-whatsapp',   icon: '📱', name: 'URL Shortener for WhatsApp',    desc: 'Shorten links for sharing on WhatsApp with click tracking.' },
      { href: '/tools/url-shortener-for-instagram',  icon: '📸', name: 'URL Shortener for Instagram',   desc: 'Shorten URLs for Instagram bio, stories, and DMs.' },
      { href: '/tools/url-shortener-for-youtube',    icon: '🎥', name: 'URL Shortener for YouTube',     desc: 'Short links for YouTube video descriptions and community posts.' },
      { href: '/tools/link-in-bio',            icon: '👤', name: 'Link in Bio',              desc: 'Create a link-in-bio page for Instagram and TikTok.' },
      { href: '/tools/whatsapp-landing-page',   icon: '💚', name: 'WhatsApp Landing Page',   desc: 'Create a WhatsApp click-to-chat link with pre-filled message.' },
    ],
  },
  {
    category: 'URL Shortening & Management',
    items: [
      { href: '/tools/url-shortener',          icon: '🔗', name: 'URL Shortener',           desc: 'Shorten any URL instantly — no account needed.' },
      { href: '/tools/url-shortener-no-login', icon: '⚡', name: 'URL Shortener (No Login)', desc: 'Instant URL shortening without registration or ads.' },
      { href: '/tools/url-shortener-with-analytics', icon: '📈', name: 'URL Shortener with Analytics', desc: 'Shorten URLs and track every click with real-time analytics.' },
      { href: '/tools/custom-url-shortener',         icon: '✏️',  name: 'Custom URL Shortener',          desc: 'Create custom branded short links with your own slug.' },
      { href: '/tools/branded-url-shortener',        icon: '🏷️',  name: 'Branded URL Shortener',         desc: 'Branded short links with custom domains and analytics.' },
      { href: '/tools/bulk-url-shortener',     icon: '📋', name: 'Bulk URL Shortener',      desc: 'Shorten hundreds of URLs at once.' },
            { href: '/tools/permanent-qr-code-generator', icon: '♾️', name: 'Permanent QR Code Generator', desc: '100% free non-expiring QR codes with unlimited lifetime scans.' },
      { href: '/tools/qr-code-generator',      icon: '⬛', name: 'QR Code Generator',       desc: 'Generate QR codes and download as PNG — free.' },
      { href: '/tools/temporary-link-generator',icon: '⏱️', name: 'Temporary Link Generator', desc: 'Create expiring links that auto-delete after 1h to 7 days.' },
      { href: '/tools/affiliate-link-cloaker',  icon: '🔒', name: 'Affiliate Link Cloaker',  desc: 'Clean short URLs for Amazon and Flipkart affiliate links.' },
      { href: '/tools/vcard-generator',         icon: '📇', name: 'vCard QR Generator',      desc: 'Create a digital business card QR code, exports as .vcf.' },
    ],
  },
  {
    category: 'Marketing & Analytics',
    items: [
      { href: '/tools/utm-builder',            icon: '📊', name: 'UTM Builder',              desc: 'Add UTM parameters to URLs and track campaigns.' },
      { href: '/tools/link-preview-checker',   icon: '👁️', name: 'Link Preview Checker',    desc: 'See how your URL looks on WhatsApp, Twitter, and LinkedIn.' },
      { href: '/tools/character-counter',      icon: '✍️', name: 'Character Counter',        desc: 'Count characters and check limits for Twitter, Instagram, LinkedIn.' },
      { href: '/tools/slug-generator',         icon: '🔤', name: 'Slug Generator',           desc: 'Convert titles into SEO-friendly URL slugs.' },
    ],
  },
  {
    category: 'Developer Utilities',
    items: [
      { href: '/tools/url-encoder-decoder',    icon: '⚙️', name: 'URL Encoder / Decoder',   desc: 'Encode or decode percent-encoded URL strings.' },
      { href: '/tools/password-generator',     icon: '🔐', name: 'Password Generator',       desc: 'Generate strong, cryptographically random passwords.' },
      { href: '/tools/redirect-checker',       icon: '↪️', name: 'Redirect Checker',         desc: 'Trace 301, 302, 307, and 308 redirect hops instantly.' },
      { href: '/tools/deep-link-generator',    icon: '📱', name: 'Deep Link Generator',     desc: 'Generate iOS and Android deep links for Amazon, YouTube, Instagram.' },
    ],
  },
  {
    category: 'Competitor Alternatives',
    items: [
      { href: '/tools/bitly-alternative',      icon: '↔️', name: 'Bitly Alternative',        desc: 'Free Bitly alternative with more links and real analytics.' },
      { href: '/tools/google-url-shortener-alternative', icon: '🔍', name: 'Google URL Shortener Alt', desc: 'Modern alternative to deprecated goo.gl shortener.' },
      { href: '/tools/rebrandly-alternative',  icon: '↔️', name: 'Rebrandly Alternative',    desc: 'Branded short links at a fraction of the Rebrandly price.' },
      { href: '/tools/tinyurl-alternative',    icon: '↔️', name: 'TinyURL Alternative',      desc: 'TinyURL alternative with click analytics and custom slugs.' },
    ],
  },
]

const INK = '#111111'
const MUTED = '#6b7280'
const HAIR = '#e5e7eb'

export default function ToolsIndexPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 32px 96px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.1 }}>
            Free online tools
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
            Every tool is completely free with no account required. Use them directly in your browser — nothing is sent to our servers.
          </p>
        </div>

        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, marginBottom: 16 }}>
            Most searched tools
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
            {FEATURED_TOOLS.map(tool => (
              <a
                key={tool.href}
                href={tool.href}
                style={{ display: 'block', padding: '18px 18px 16px', background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 16, textDecoration: 'none', color: 'inherit', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{tool.icon}</span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: INK }}>{tool.name}</div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0057ff', marginBottom: 8 }}>
                  {tool.stat}
                </div>
                <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{tool.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Tool categories */}
        {TOOLS.map(cat => (
          <div key={cat.category} style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${HAIR}` }}>
              {cat.category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
              {cat.items.map(tool => (
                <a key={tool.href} href={tool.href}
                  style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#fafafa', border: `1px solid ${HAIR}`, borderRadius: 12, textDecoration: 'none', color: 'inherit', transition: 'border-color 0.15s' }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>{tool.icon}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 3 }}>{tool.name}</div>
                    <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{tool.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 8, marginBottom: 48, maxWidth: 760 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: INK, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Built for high-intent search queries
          </h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.8, margin: '0 0 14px' }}>
            Meshalive tools are designed for the exact tasks people search for: generating UPI payment QR codes, creating auto-subscribe YouTube links, building UTM campaign URLs, shortening long WhatsApp links, and comparing free alternatives to Bitly and TinyURL.
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Start with our most popular utilities: <a href="/tools/upi-qr-code-generator" style={{ color: '#0057ff', textDecoration: 'none' }}>UPI QR Code Generator</a>, <a href="/tools/whatsapp-link-generator" style={{ color: '#0057ff', textDecoration: 'none' }}>WhatsApp Link Generator</a>, <a href="/tools/youtube-subscribe-link-generator" style={{ color: '#0057ff', textDecoration: 'none' }}>YouTube Subscribe Link</a>, or <a href="/tools/utm-builder" style={{ color: '#0057ff', textDecoration: 'none' }}>UTM Builder</a>.
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 16, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 16, padding: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: INK, margin: '0 0 10px' }}>Want to track every click?</h2>
          <p style={{ fontSize: 15, color: MUTED, margin: '0 0 20px', lineHeight: 1.6 }}>
            Create a free Meshalive account to shorten links, view real-time analytics, generate QR codes, and manage everything in one dashboard.
          </p>
          <a href="/register" style={{ display: 'inline-flex', padding: '12px 28px', fontSize: 15, fontWeight: 700, background: '#0057ff', color: '#fff', borderRadius: 999, textDecoration: 'none' }}>
            Sign up free — no credit card
          </a>
        </div>
      </div>
    </div>
  )
}
