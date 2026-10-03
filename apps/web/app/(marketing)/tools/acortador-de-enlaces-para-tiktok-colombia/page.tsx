import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Acortador de Enlaces para TikTok Colombia Gratis — Bio y Pauta | Meshalive' },
  description: 'Acorta enlaces para tu cuenta de TikTok en Colombia. Perfecto para monetizar videos virales, dirigir tráfico a tu WhatsApp o tienda de e-commerce en Bogotá y Medellín.',
  keywords: ['acortador de enlaces para tiktok colombia', 'link tiktok bio colombia', 'vender por tiktok colombia', 'enlace corto tiktok medellin'],
  alternates: { canonical: 'https://meshalive.com/tools/acortador-de-enlaces-para-tiktok-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/acortador-de-enlaces-para-tiktok-colombia',
    title: { absolute: 'Acortador de Enlaces para TikTok Colombia Gratis — Bio y Pauta | Meshalive' },
    description: 'Acorta enlaces para tu cuenta de TikTok en Colombia. Perfecto para monetizar videos virales, dirigir tráfico a tu WhatsApp o tienda de e-commerce en Bogotá y Medellín.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Acortador de Enlaces para TikTok Colombia Gratis — Bio y Pauta | Meshalive' },
    description: 'Acorta enlaces para tu cuenta de TikTok en Colombia. Perfecto para monetizar videos virales, dirigir tráfico a tu WhatsApp o tienda de e-commerce en Bogotá y Medellín.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Acortador de Enlaces para TikTok Colombia Gratis — Bio y Pauta | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Acorta enlaces para tu cuenta de TikTok en Colombia. Perfecto para monetizar videos virales, dirigir tráfico a tu WhatsApp o tienda de e-commerce en Bogotá y Medellín.',
      url: 'https://meshalive.com/tools/acortador-de-enlaces-para-tiktok-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo coloco el enlace en mi perfil de TikTok?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ve a tu perfil, pulsa \'Editar perfil\' y agrega tu enlace corto en el campo \'Sitio web\' (disponible para cuentas comerciales).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona bien en conexiones móviles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, contamos con enrutamiento de baja latencia con respuesta sub-20ms en operadores colombianos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es gratis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, completamente gratis y sin límites de enlaces ni clics.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Acortador de Enlaces para TikTok en Colombia', item: 'https://meshalive.com/tools/acortador-de-enlaces-para-tiktok-colombia' },
      ],
    },
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 12px',
    borderRadius: '9999px',
    background: '#eff6ff',
    border: '1px solid #bfdbfe',
    color: '#0057ff',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '16px',
  },
  h1: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    color: '#111111',
    margin: '0 0 16px',
  },
  sub: {
    fontSize: '17px',
    lineHeight: 1.6,
    color: '#4b5563',
    margin: '0 0 32px',
  },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' },
};

export default function AcortadorDeEnlacesParaTiktokColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Optimizado para E-Commerce y Creadores de TikTok en Colombia</div>
          <h1 style={S.h1}>
            Acortador de Enlaces para TikTok en Colombia: <span style={{ color: '#0057ff' }}>Convierte Vistas en Ventas</span>
          </h1>
          <p style={S.sub}>Aprovecha el alcance viral de tus videos en Colombia llevando a tu audiencia directamente a tu WhatsApp, catálogo o tienda virtual con enlaces breves y medibles.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎵</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Tráfico Viral sin Fricción</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Navegación ultra rápida pensada para usuarios jóvenes que consumen contenido en TikTok y compran por impulso.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📈</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Rastreo de Campañas Spark Ads</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Identifica qué video o pauta de TikTok Ads genera más visitas efectivas hacia tus canales de venta en Colombia.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💬</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Directo a WhatsApp de Ventas</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Combina tu enlace corto con nuestro creador de links de WhatsApp para cerrar pedidos al instante.</p>
            </div>
          </div>
        </section>

        <hr style={S.divider} />

        {/* FAQs */}
        <section style={S.section}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 24px', color: '#111111', textAlign: 'center' }}>
            Preguntas Frecuentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Cómo coloco el enlace en mi perfil de TikTok?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Ve a tu perfil, pulsa 'Editar perfil' y agrega tu enlace corto en el campo 'Sitio web' (disponible para cuentas comerciales).</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Funciona bien en conexiones móviles?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, contamos con enrutamiento de baja latencia con respuesta sub-20ms en operadores colombianos.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Es gratis?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, completamente gratis y sin límites de enlaces ni clics.</p>
            </details>
          </div>
        </section>

        {/* Cross links */}
        <section style={{ ...S.section, textAlign: 'center', paddingTop: 16 }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Herramientas Recomendadas para Colombia
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link
              href="/tools/acortador-de-url-colombia"
              style={{ padding: '10px 18px', borderRadius: '10px', background: '#eff6ff', border: '1px solid #bfdbfe', color: '#0057ff', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
            >
              Acortador URL Colombia 🇨🇴 →
            </Link>
            <Link
              href="/tools/crear-link-de-whatsapp-colombia"
              style={{ padding: '10px 18px', borderRadius: '10px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
            >
              Crear Link WhatsApp (+57) 🇨🇴 →
            </Link>
            <Link
              href="/tools/generador-codigo-qr-colombia"
              style={{ padding: '10px 18px', borderRadius: '10px', background: '#eff6ff', border: '1px solid #bfdbfe', color: '#0057ff', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
            >
              Generador Código QR Colombia 🇨🇴 →
            </Link>
            <Link
              href="/blog/estrategia-whatsapp-marketing-enlaces-colombia"
              style={{ padding: '10px 18px', borderRadius: '10px', background: '#faf5ff', border: '1px solid #e9d5ff', color: '#7e22ce', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
            >
              Guía WhatsApp Marketing Colombia 🇨🇴 →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
