import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Bitly Alternativa Gratis en Colombia — 100% Ilimitado sin Pagos en USD | Meshalive' },
  description: '¿Cansado del límite de 10 enlaces al mes de Bitly? Meshalive es la alternativa 100% gratuita para Colombia con enlaces ilimitados, códigos QR y analítica sin pagar dólares.',
  keywords: ['bitly alternativa gratis colombia', 'acortador ilimitado gratis colombia', 'reemplazo bitly bogota medellin', 'acortador sin limites colombia'],
  alternates: { canonical: 'https://meshalive.com/tools/bitly-alternativa-gratis-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/bitly-alternativa-gratis-colombia',
    title: { absolute: 'Bitly Alternativa Gratis en Colombia — 100% Ilimitado sin Pagos en USD | Meshalive' },
    description: '¿Cansado del límite de 10 enlaces al mes de Bitly? Meshalive es la alternativa 100% gratuita para Colombia con enlaces ilimitados, códigos QR y analítica sin pagar dólares.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Bitly Alternativa Gratis en Colombia — 100% Ilimitado sin Pagos en USD | Meshalive' },
    description: '¿Cansado del límite de 10 enlaces al mes de Bitly? Meshalive es la alternativa 100% gratuita para Colombia con enlaces ilimitados, códigos QR y analítica sin pagar dólares.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Bitly Alternativa Gratis en Colombia — 100% Ilimitado sin Pagos en USD | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: '¿Cansado del límite de 10 enlaces al mes de Bitly? Meshalive es la alternativa 100% gratuita para Colombia con enlaces ilimitados, códigos QR y analítica sin pagar dólares.',
      url: 'https://meshalive.com/tools/bitly-alternativa-gratis-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué Meshalive es gratis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nuestra misión es empoderar a emprendedores y negocios en Latinoamérica con infraestructura digital moderna sin barreras económicas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo migrar mis enlaces desde Bitly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes comenzar a acortar todos tus nuevos enlaces de inmediato sin necesidad de configuraciones complicadas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Incluye códigos QR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, puedes generar códigos QR de alta resolución descargables para todos tus enlaces.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'La Mejor Alternativa Gratuita a Bitly en Colombia', item: 'https://meshalive.com/tools/bitly-alternativa-gratis-colombia' },
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

export default function BitlyAlternativaGratisColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 La Alternativa Real a Bitly en Colombia</div>
          <h1 style={S.h1}>
            La Mejor Alternativa Gratuita a Bitly en Colombia: <span style={{ color: '#0057ff' }}>100% Gratis e Ilimitado</span>
          </h1>
          <p style={S.sub}>Bitly redujo su plan gratuito a solo 10 enlaces por mes y cobra tarifas elevadas en dólares que no justifican su uso en Colombia. Meshalive te ofrece enlaces y clics ilimitados sin tarjetas de crédito.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💸</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Zero Costo en Dólares (TRM)</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Ahorra cientos de dólares anuales en suscripciones extranjeras con una herramienta pensada para el mercado local.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🚀</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Sin Límites Ridículos de 10 Links</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Crea decenas o cientos de enlaces para tus promociones sin que un muro de pago bloquee tus campañas a mitad de mes.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🇨🇴</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Optimizado para Redes Colombianas</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Servidores edge con CDN de alta velocidad para conexiones móviles Claro, Tigo, Movistar y WOM.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Por qué Meshalive es gratis?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Nuestra misión es empoderar a emprendedores y negocios en Latinoamérica con infraestructura digital moderna sin barreras económicas.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Puedo migrar mis enlaces desde Bitly?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Puedes comenzar a acortar todos tus nuevos enlaces de inmediato sin necesidad de configuraciones complicadas.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Incluye códigos QR?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, puedes generar códigos QR de alta resolución descargables para todos tus enlaces.</p>
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
