import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Free Online Tools for Marketers & Developers | Meshalive' },
  description: 'Free online tools for marketers and growth teams: WhatsApp link generator, UTM builder, redirect checker, Bitly alternative, URL shortener, QR code generator, and more.',
  keywords: ['free online tools', 'url shortener', 'utm builder', 'qr code generator', 'password generator', 'character counter', 'slug generator', 'url encoder', 'whatsapp link generator', 'bulk url shortener', 'redirect checker', 'bitly alternative'],
  alternates: { canonical: 'https://meshalive.com/tools' },
  openGraph: {
    title: { absolute: 'Free Online Tools for Marketers & Developers | Meshalive' },
    description: 'Free tools: WhatsApp link generator, UTM builder, redirect checker, Bitly alternative, QR codes, short links, and more.',
    url: 'https://meshalive.com/tools',
    siteName: 'Meshalive',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const FEATURED_TOOLS = [
  { href: '/tools/whatsapp-link-generator', icon: '💬', name: 'WhatsApp Link Generator', stat: 'High-intent lead capture', desc: 'Create click-to-chat wa.me links with optional pre-filled messages for websites, Instagram bios, ads, and QR codes.' },
  { href: '/tools/utm-builder', icon: '📊', name: 'UTM Builder', stat: 'Campaign tracking essential', desc: 'Build clean UTM URLs for Google Analytics, paid ads, social campaigns, WhatsApp outreach, and email marketing.' },
  { href: '/tools/redirect-checker', icon: '↪️', name: 'Redirect Checker', stat: 'SEO and debugging utility', desc: 'Trace 301 and 302 redirect chains, inspect final destinations, and diagnose slow or broken short links.' },
  { href: '/tools/bitly-alternative', icon: '🔁', name: 'Bitly Alternative', stat: 'Commercial comparison page', desc: 'Compare Meshalive against Bitly and switch to free short links, analytics, QR codes, and custom domains.' },
]

const TOOLS = [
  {
    category: 'URL Shortening',
    items: [
      { href: '/tools/url-shortener',          icon: '🔗', name: 'URL Shortener',           desc: 'Shorten any URL instantly — no account needed.' },
      { href: '/tools/bulk-url-shortener',     icon: '📋', name: 'Bulk URL Shortener',      desc: 'Shorten hundreds of URLs at once.' },
      { href: '/tools/whatsapp-link-generator',icon: '💬', name: 'WhatsApp Link Generator', desc: 'Create click-to-chat wa.me links for any number.' },
      { href: '/tools/qr-code-generator',      icon: '⬛', name: 'QR Code Generator',       desc: 'Generate QR codes and download as PNG — free.' },
      { href: '/tools/link-in-bio',            icon: '👤', name: 'Link in Bio',              desc: 'Create a link-in-bio page for Instagram and TikTok.' },
    ],
  },
  {
    category: 'Marketing & Analytics',
    items: [
      { href: '/tools/utm-builder',            icon: '📊', name: 'UTM Builder',              desc: 'Add UTM parameters to URLs and track campaigns.' },
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
    ],
  },
  {
    category: 'Alternatives',
    items: [
      { href: '/tools/bitly-alternative',      icon: '↔️', name: 'Bitly Alternative',        desc: 'Free Bitly alternative with more links and real analytics.' },
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
            Built for keyword-driven utility pages
          </h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.8, margin: '0 0 14px' }}>
            Meshalive tools are designed for the exact tasks people search for: building UTM links, generating WhatsApp chat URLs, checking redirects, shortening long campaign URLs, and comparing alternatives to Bitly and TinyURL.
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.8, margin: 0 }}>
            If you want the fastest pages to start with, open the <a href="/tools/whatsapp-link-generator" style={{ color: '#0057ff', textDecoration: 'none' }}>WhatsApp Link Generator</a>, <a href="/tools/utm-builder" style={{ color: '#0057ff', textDecoration: 'none' }}>UTM Builder</a>, <a href="/tools/redirect-checker" style={{ color: '#0057ff', textDecoration: 'none' }}>Redirect Checker</a>, or <a href="/tools/bitly-alternative" style={{ color: '#0057ff', textDecoration: 'none' }}>Bitly Alternative</a> page.
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
