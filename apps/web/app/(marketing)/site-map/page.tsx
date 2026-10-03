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
      { label: 'Acortador de Links de Pago en Colombia 🇨🇴', href: '/tools/acortador-links-de-pago-colombia', desc: 'Acorta y personaliza tus enlaces de cobro de Bold, Wompi, Nequi, Daviplata y Mercado Pago en Colombia' },
      { label: 'Generador de Código QR para Menú de Restaurante 🇨🇴', href: '/tools/generador-codigo-qr-menu-restaurante-colombia', desc: 'Crea códigos QR en alta resolución para la carta digital de tu restaurante, café o gastrobar en Bogotá, Medellín, Cali y Cartagena' },
      { label: 'Link en Bio Gratis para Negocios y Creadores en Colombia 🇨🇴', href: '/tools/link-en-bio-colombia-gratis', desc: 'Crea tu página de enlaces en biografía gratis en Colombia' },
      { label: 'Generador de Código QR para Wi-Fi en Colombia 🇨🇴', href: '/tools/generador-codigo-qr-wifi-colombia', desc: 'Genera códigos QR para conectar a clientes y visitantes a la red Wi-Fi de tu local en Colombia' },
      { label: 'Generador de Enlaces UTM para Campañas en Colombia 🇨🇴', href: '/tools/generador-enlaces-utm-colombia', desc: 'Construye parámetros UTM (source, medium, campaign) para rastrear tus campañas en Facebook Ads, Google Ads, TikTok e influencers en Colombia' },
      { label: 'Acortador de URL para Instagram en Colombia 🇨🇴', href: '/tools/acortador-de-url-para-instagram-colombia', desc: 'Acorta enlaces para tu perfil de Instagram en Colombia' },
      { label: 'Acortador de Enlaces para TikTok en Colombia 🇨🇴', href: '/tools/acortador-de-enlaces-para-tiktok-colombia', desc: 'Acorta enlaces para tu cuenta de TikTok en Colombia' },
      { label: 'Generador de Código QR vCard de Contacto en Colombia 🇨🇴', href: '/tools/generador-codigo-qr-vcard-colombia', desc: 'Crea un código QR de contacto vCard para tus tarjetas de presentación en Colombia' },
      { label: 'Acortador de Enlaces para Catálogos y Domicilios 🇨🇴', href: '/tools/acortador-url-para-catalogos-domicilios-colombia', desc: 'Acorta enlaces de pedidos a domicilio, catálogos en PDF, menús y formularios de entrega en Colombia' },
      { label: 'Acortador de URL para Agencias de Marketing en Colombia 🇨🇴', href: '/tools/acortador-url-agencias-marketing-colombia', desc: 'Plataforma de enlaces cortos para agencias de publicidad, growth y marketing digital en Colombia' },
      { label: 'La Mejor Alternativa Gratuita a Bitly en Colombia 🇨🇴', href: '/tools/bitly-alternativa-gratis-colombia', desc: '¿Cansado del límite de 10 enlaces al mes de Bitly? Meshalive es la alternativa 100% gratuita para Colombia con enlaces ilimitados, códigos QR y analítica sin pagar dólares' },
      { label: 'Generador y Acortador de Enlaces para Grupos de WhatsApp 🇨🇴', href: '/tools/generador-enlaces-grupos-whatsapp-colombia', desc: 'Acorta y protege enlaces de invitación a grupos y canales de WhatsApp en Colombia' },
      { label: 'Acortador de URL Colombia 🇨🇴', href: '/tools/acortador-de-url-colombia', desc: 'Acortador de enlaces con CDN para Bogotá, Medellín y Cali' },
      { label: 'Crear Link WhatsApp Colombia (+57) 🇨🇴', href: '/tools/crear-link-de-whatsapp-colombia', desc: 'Generador de enlaces wa.me con código +57 y mensaje' },
      { label: 'Generador Código QR Colombia 🇨🇴', href: '/tools/generador-codigo-qr-colombia', desc: 'Códigos QR en alta resolución para restaurantes y locales' },
      { label: 'URL Shortener', href: '/tools/url-shortener', desc: 'Shorten any URL instantly — no account needed' },
      { label: 'QR Code Generator', href: '/tools/qr-code-generator', desc: 'Generate free QR codes for any URL' },
      { label: 'Link in Bio', href: '/tools/link-in-bio', desc: 'Build a full landing page behind one link' },
      { label: 'URL Shortener USA', href: '/tools/url-shortener-usa', desc: 'Fast, TCPA-compliant link shortener with US edge CDN' },
      { label: 'URL Shortener UK', href: '/tools/url-shortener-uk', desc: 'UK GDPR-compliant URL shortener with London edge routing' },
      { label: 'URL Shortener Canada', href: '/tools/url-shortener-canada', desc: 'CASL-compliant URL shortener with Toronto/Montreal CDN' },
      { label: 'URL Shortener Australia', href: '/tools/url-shortener-australia', desc: 'Aussie edge short links with Sydney/Melbourne routing' },
      { label: 'URL Shortener for Real Estate', href: '/tools/url-shortener-for-real-estate', desc: 'MLS listing short links and open house QR codes' },
      { label: 'URL Shortener for E-Commerce', href: '/tools/url-shortener-for-ecommerce', desc: 'Shopify SMS marketing links & UTM conversion tracking' },
      { label: 'Link in Bio for Podcasters', href: '/tools/link-in-bio-for-podcasters', desc: 'Smart links for Spotify, Apple Podcasts & YouTube' },
      { label: 'URL Shortener for Teachers', href: '/tools/url-shortener-for-teachers', desc: '100% ad-free link shortener for classrooms & Google Classroom' },
    ],
  },
  {
    title: 'Product',
    icon: '📊',
    color: '#f0fdf4',
    border: '#bbf7d0',
    links: [
      { label: 'Features', href: '/features', desc: 'All features — analytics, QR codes, custom slugs, API' },
      { label: 'Pricing', href: '/pricing', desc: '100% Free Forever — zero fees, unlimited links' },
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
      { label: 'For Agencies', href: '/solutions/marketing', desc: 'Manage links and analytics for multiple clients' },
      { label: 'For Developers', href: '/solutions/developers', desc: 'REST API, webhooks, and programmatic link creation' },
      { label: 'For E-commerce', href: '/solutions/retail', desc: 'Track clicks from every campaign and channel' },
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
      { label: '10 Best Link in Bio Tools (2026)', href: '/blog/best-link-in-bio-tools-free-alternatives', desc: 'Comparison of Linktree, Beacons & free alternatives' },
      { label: 'How to Create a Link in Bio Page', href: '/blog/how-to-create-a-link-in-bio-page', desc: 'Step-by-step guide to building a free mobile bio page' },
      { label: 'Link in Bio Conversion Rate Optimization', href: '/blog/link-in-bio-conversion-rate-optimization-guide', desc: 'How to get 3x higher clicks and sales from your bio link' },
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
