import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Acortador de URL Colombia Gratis — Enlaces Rápidos y Seguros | Meshalive' },
  description:
    'El mejor acortador de enlaces para Colombia. Optimizado para WhatsApp Business, Instagram y pauta digital en Bogotá, Medellín y Cali. Redirección ultra rápida y analítica sin costo.',
  keywords: [
    'acortador de url colombia',
    'acortador de links colombia',
    'acortar url gratis colombia',
    'cortador de enlaces bogota',
    'acortador whatsapp colombia',
    'links cortos colombia',
    'acortador de enlaces medellin',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/acortador-de-url-colombia',
  },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/acortador-de-url-colombia',
    title: { absolute: 'Acortador de URL Colombia Gratis — Enlaces Rápidos y Seguros | Meshalive' },
    description:
      'Acorta enlaces largos para WhatsApp, redes sociales y campañas en Colombia. Sin límites molestos y con analíticas de clics en tiempo real.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Acortador de URL Colombia Gratis | Meshalive' },
    description: 'Acorta enlaces largos para WhatsApp, Instagram y comercio electrónico en Colombia.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Acortador de URL Colombia — Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Herramienta gratuita para acortar enlaces web optimizada para empresas y emprendedores en Colombia.',
      url: 'https://meshalive.com/tools/acortador-de-url-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué usar un acortador de URL optimizado para Colombia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Meshalive cuenta con enrutamiento de baja latencia hacia Sudamérica y compatibilidad total con los operadores móviles colombianos (Claro, Tigo, Movistar, WOM), asegurando que tus clientes en Bogotá, Medellín o Cali abran tus enlaces en menos de 20ms.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es compatible con WhatsApp y chats de ventas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, los enlaces generados por Meshalive son 100% limpios y seguros, evitando bloqueos en WhatsApp Business, Instagram DM y mensajes SMS de promociones.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Tiene costo acortar enlaces en Meshalive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes acortar enlaces completamente gratis sin necesidad de tarjeta de crédito ni registro forzoso.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Acortador de URL Colombia', item: 'https://meshalive.com/tools/acortador-de-url-colombia' },
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
    fontSize: 'clamp(28px, 5vw, 44px)',
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    color: '#111111',
    margin: '0 0 16px',
  },
  sub: {
    fontSize: '18px',
    lineHeight: 1.6,
    color: '#4b5563',
    margin: '0 0 32px',
  },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
  card: { padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' },
};

export default function AcortadorColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        {/* Hero */}
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>
            <span>🇨🇴</span> Infraestructura Optimizada para Colombia
          </div>
          <h1 style={S.h1}>
            Acortador de URL en Colombia:{' '}
            <span style={{ color: '#0057ff' }}>Rápido, Seguro y Confiable</span>
          </h1>
          <p style={S.sub}>
            Convierte enlaces extensos en URLs cortas y profesionales. Diseñado para emprendedores,
            marcas de e-commerce y agencias de marketing en Bogotá, Medellín, Cali, Barranquilla y Bucaramanga.
          </p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <UrlShortenerTool />
          </div>
        </section>

        {/* Feature Cards */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Redirección Sub-20ms en Colombia
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Nodos Edge CDN optimizados para conexiones móviles 4G/5G en operadores como Claro, Tigo, Movistar y WOM.
              </p>
            </div>

            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💬</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Optimizado para WhatsApp Business
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Ideal para canales de venta directa, mensajes de broadcast y catálogos en WhatsApp sin riesgo de bloqueos.
              </p>
            </div>

            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📊</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Métricas de Clics en Tiempo Real
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Analiza de qué ciudades provienen tus clics (Bogotá, Medellín, Cali), dispositivos móviles y fuentes de tráfico.
              </p>
            </div>
          </div>
        </section>

        <hr style={S.divider} />

        {/* Localized Colombian Context */}
        <section style={S.section}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 16px', color: '#111111', letterSpacing: '-0.02em' }}>
            ¿Por qué los negocios colombianos eligen Meshalive?
          </h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px' }}>
            En Colombia, el comercio conversacional a través de redes sociales y WhatsApp representa la mayor parte de las ventas de micro, pequeñas y medianas empresas. Compartir URLs kilométricas con parámetros UTM desordenados asusta a los clientes potenciales y reduce la tasa de clics (CTR).
          </p>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 24px' }}>
            Con Meshalive, creas enlaces cortos y limpios que inspiran confianza inmediata, facilitando el cierre de ventas en pasarelas de pago colombianas como PSE, Wompi, Bold, Mercado Pago y transferencias Nequi / Daviplata.
          </p>

          <div style={S.grid}>
            <div style={{ ...S.card, background: '#ffffff' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>
                📱 Bio de Instagram y TikTok
              </h4>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Aprovecha el espacio limitado de tu biografía con un enlace directo a tus promociones o catálogo.
              </p>
            </div>

            <div style={{ ...S.card, background: '#ffffff' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>
                📦 Empaques y Envíos Nacionales
              </h4>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Añade links breves en tus tarjetas de agradecimiento para incentivar recompras y reseñas de servicio.
              </p>
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
            {[
              {
                q: '¿Por qué usar un acortador de URL optimizado para Colombia?',
                a: 'Meshalive cuenta con enrutamiento de baja latencia hacia Sudamérica y compatibilidad total con los operadores móviles colombianos (Claro, Tigo, Movistar, WOM), asegurando que tus clientes en Bogotá, Medellín o Cali abran tus enlaces al instante.',
              },
              {
                q: '¿Es compatible con WhatsApp y chats de ventas?',
                a: 'Sí, los enlaces generados por Meshalive son 100% limpios y seguros, evitando bloqueos en WhatsApp Business, Instagram DM y mensajes SMS de promociones.',
              },
              {
                q: '¿Tiene costo acortar enlaces en Meshalive?',
                a: 'Puedes acortar enlaces completamente gratis sin necesidad de tarjeta de crédito ni registro obligatorio.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '16px 20px',
                }}
              >
                <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>
                  {faq.q}
                </summary>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Colombian Tools Cross-links */}
        <section style={{ ...S.section, textAlign: 'center', paddingTop: 16 }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Herramientas Relacionadas para Colombia
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link
              href="/tools/crear-link-de-whatsapp-colombia"
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                color: '#15803d',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Crear Link de WhatsApp (+57) 🇨🇴 →
            </Link>
            <Link
              href="/tools/generador-codigo-qr-colombia"
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#0057ff',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Generador Código QR Colombia 🇨🇴 →
            </Link>
            <Link
              href="/blog/estrategia-whatsapp-marketing-enlaces-colombia"
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                background: '#faf5ff',
                border: '1px solid #e9d5ff',
                color: '#7e22ce',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Guía WhatsApp Marketing Colombia 🇨🇴 →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
