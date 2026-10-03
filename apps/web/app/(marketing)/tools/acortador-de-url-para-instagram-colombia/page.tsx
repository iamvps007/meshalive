import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Acortador de URL para Instagram Colombia Gratis — Bio, DM y Stories | Meshalive' },
  description: 'Acorta enlaces para tu perfil de Instagram en Colombia. Optimizado para la biografía, respuestas automáticas de mensajes directos (DM) y enlaces de historias.',
  keywords: ['acortador de url para instagram colombia', 'link bio instagram colombia', 'acortar enlaces instagram bogota', 'medir clics instagram colombia'],
  alternates: { canonical: 'https://meshalive.com/tools/acortador-de-url-para-instagram-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/acortador-de-url-para-instagram-colombia',
    title: { absolute: 'Acortador de URL para Instagram Colombia Gratis — Bio, DM y Stories | Meshalive' },
    description: 'Acorta enlaces para tu perfil de Instagram en Colombia. Optimizado para la biografía, respuestas automáticas de mensajes directos (DM) y enlaces de historias.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Acortador de URL para Instagram Colombia Gratis — Bio, DM y Stories | Meshalive' },
    description: 'Acorta enlaces para tu perfil de Instagram en Colombia. Optimizado para la biografía, respuestas automáticas de mensajes directos (DM) y enlaces de historias.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Acortador de URL para Instagram Colombia Gratis — Bio, DM y Stories | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Acorta enlaces para tu perfil de Instagram en Colombia. Optimizado para la biografía, respuestas automáticas de mensajes directos (DM) y enlaces de historias.',
      url: 'https://meshalive.com/tools/acortador-de-url-para-instagram-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Instagram bloquea los enlaces de Meshalive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Meshalive cuenta con dominios limpios y certificados SSL que cumplen con todas las políticas de Meta.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usarlo en respuestas automáticas de ManyChat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, es 100% compatible con flujos de ManyChat y automatizaciones de Instagram Direct.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Tiene límite de clics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, todos los enlaces cuentan con clics ilimitados de por vida.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Acortador de URL para Instagram en Colombia', item: 'https://meshalive.com/tools/acortador-de-url-para-instagram-colombia' },
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

export default function AcortadorDeUrlParaInstagramColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Crecimiento para Creadores y Tiendas de Instagram en Colombia</div>
          <h1 style={S.h1}>
            Acortador de URL para Instagram en Colombia: <span style={{ color: '#0057ff' }}>Maximiza los Clics de tu Bio</span>
          </h1>
          <p style={S.sub}>En Instagram, cada carácter cuenta. Crea enlaces limpios y atractivos para tus historias, mensajes directos y biografía comercial en Colombia.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📸</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Aspecto Visual Impecable</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Evita enlaces rotos o con advertencias de spam en Instagram. Links limpios y cortos que generan clics inmediatos.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📊</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Mide el Tráfico de tus Stories</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Usa enlaces distintos por historia para saber qué producto o promoción despertó mayor interés en tu audiencia colombiana.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Carga Rápida en In-App Browser</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Optimizado para abrir suavemente dentro del navegador integrado de la aplicación de Instagram.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Instagram bloquea los enlaces de Meshalive?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>No. Meshalive cuenta con dominios limpios y certificados SSL que cumplen con todas las políticas de Meta.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Puedo usarlo en respuestas automáticas de ManyChat?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, es 100% compatible con flujos de ManyChat y automatizaciones de Instagram Direct.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Tiene límite de clics?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>No, todos los enlaces cuentan con clics ilimitados de por vida.</p>
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
