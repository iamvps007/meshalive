import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Browse all pages on Meshalive — URL shortener tools, blog guides, pricing, API docs, and more.',
  alternates: { canonical: 'https://meshalive.com/site-map' },
  robots: { index: true, follow: true },
};

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';

const SECTIONS = [
  {
    title: 'Tools',
    icon: '⚡',
    color: '#eff6ff',
    border: '#bfdbfe',
    links: [
      { label: 'URL Shortener', href: '/tools/url-shortener', desc: 'Shorten any URL instantly — no account needed' },
      { label: 'QR Code Generator', href: '/tools/qr-code-generator', desc: 'Generate free QR codes for any URL' },
      { label: 'Link in Bio', href: '/tools/link-in-bio', desc: 'Build a full landing page behind one link' },
    ],
  },
  {
    title: 'Product',
    icon: '📊',
    color: '#f0fdf4',
    border: '#bbf7d0',
    links: [
      { label: 'Features', href: '/features', desc: 'All features — analytics, QR codes, custom slugs, API' },
      { label: 'Pricing', href: '/pricing', desc: 'Free forever plan + Pro plans for teams' },
      { label: 'Analytics', href: '/features#analytics', desc: 'Real-time click tracking, geo, device, referrer' },
      { label: 'Custom Domains', href: '/features#domains', desc: 'Brand your short links with your own domain' },
    ],
  },
  {
    title: 'Solutions',
    icon: '🏢',
    color: '#fdf4ff',
    border: '#e9d5ff',
    links: [
      { label: 'For Marketing Teams', href: '/solutions/marketing', desc: 'UTM tracking, campaign analytics, team workspace' },
      { label: 'For Agencies', href: '/solutions/agencies', desc: 'Manage links and analytics for multiple clients' },
      { label: 'For Developers', href: '/solutions/developers', desc: 'REST API, webhooks, and programmatic link creation' },
      { label: 'For E-commerce', href: '/solutions/ecommerce', desc: 'Track clicks from every campaign and channel' },
      { label: 'For Sales Teams', href: '/solutions/sales', desc: 'Track proposal links and follow up at the right time' },
      { label: 'For Support Teams', href: '/solutions/support', desc: 'Short links for help articles and onboarding guides' },
      { label: 'For Retail & QR', href: '/solutions/retail', desc: 'Dynamic QR codes for menus, packaging, and displays' },
    ],
  },
  {
    title: 'Blog & Guides',
    icon: '📝',
    color: '#fff7ed',
    border: '#fed7aa',
    links: [
      { label: 'All Blog Posts', href: '/blog', desc: 'Guides on URL shortening, UTM tracking, and link strategy' },
      { label: 'How to Shorten a URL', href: '/blog/how-to-shorten-a-url', desc: 'Step-by-step guide — free, no account needed' },
      { label: 'Best Bitly Alternatives', href: '/blog/bitly-alternatives', desc: 'Free URL shorteners with analytics compared' },
      { label: 'Best TinyURL Alternatives', href: '/blog/tinyurl-alternative', desc: 'TinyURL alternatives with custom slugs and analytics' },
      { label: 'URL Shorteners with Analytics', href: '/blog/url-shortener-with-analytics', desc: 'Best free URL shorteners that track clicks' },
      { label: 'UTM Parameters Guide', href: '/blog/utm-parameters-guide', desc: 'Complete guide to UTM tracking in 2026' },
      { label: 'URL Shortener for Instagram', href: '/blog/url-shortener-for-instagram', desc: 'Track bio and Story link clicks from Instagram' },
      { label: 'Free QR Code Generator', href: '/blog/free-qr-code-generator', desc: 'Generate dynamic QR codes for any URL' },
      { label: 'URL Shortener API Guide', href: '/blog/url-shortener-api', desc: 'Shorten URLs programmatically with our REST API' },
      { label: 'Custom Short URL Guide', href: '/blog/custom-short-url', desc: 'Create short links with your own custom slug' },
    ],
  },
  {
    title: 'Company',
    icon: '🏛️',
    color: '#f9fafb',
    border: '#e5e7eb',
    links: [
      { label: 'About', href: '/about', desc: 'Our story, mission, and the team behind meshalive' },
      { label: 'API Docs', href: '/docs', desc: 'Full REST API documentation and reference' },
      { label: 'System Status', href: '/status', desc: 'Uptime and incident history for all services' },
    ],
  },
  {
    title: 'Account',
    icon: '👤',
    color: '#f9fafb',
    border: '#e5e7eb',
    links: [
      { label: 'Create Account', href: '/register', desc: 'Sign up free — no credit card required' },
      { label: 'Log In', href: '/login', desc: 'Access your links dashboard and analytics' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div style={{ background: '#ffffff', color: INK, padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Sitemap</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.2 }}>Everything on Meshalive</h1>
          <p style={{ fontSize: 17, color: MUTED, margin: 0, lineHeight: 1.65, maxWidth: 520 }}>
            A complete directory of all pages — tools, guides, product docs, and company information.
          </p>
        </div>

        {/* Sections grid */}
        <div style={{ display: 'grid', gap: 32 }}>
          {SECTIONS.map(section => (
            <div key={section.title}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ fontSize: 20 }}>{section.icon}</span>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: INK, margin: 0, letterSpacing: '-0.01em' }}>{section.title}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                {section.links.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      display: 'block',
                      background: section.color,
                      border: `1px solid ${section.border}`,
                      borderRadius: 10,
                      padding: '14px 16px',
                      textDecoration: 'none',
                      transition: 'border-color 150ms',
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: INK, marginBottom: 4 }}>{link.label}</div>
                    <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{link.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: `1px solid ${HAIR}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: MUTED }}>Looking for the XML sitemap? <a href="/sitemap.xml" style={{ color: ACCENT }}>sitemap.xml</a></div>
          <div style={{ fontSize: 13, color: MUTED }}>Last updated: May 2026</div>
        </div>

      </div>
    </div>
  );
}
