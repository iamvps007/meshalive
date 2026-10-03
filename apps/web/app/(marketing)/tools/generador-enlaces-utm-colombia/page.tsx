import type { Metadata } from 'next';
import Link from 'next/link';
import UtmBuilderClient from './UtmBuilderClient';

export const metadata: Metadata = {
  title: { absolute: 'Generador de Enlaces UTM Colombia Gratis — Campañas y Pauta Digital | Meshalive' },
  description: 'Construye parámetros UTM (source, medium, campaign) para rastrear tus campañas en Facebook Ads, Google Ads, TikTok e influencers en Colombia. Compatible con Google Analytics 4.',
  keywords: ['generador enlaces utm colombia', 'utm builder espanol gratis', 'rastreo campanas marketing bogota', 'crear utm google analytics colombia', 'medir pauta digital colombia'],
  alternates: { canonical: 'https://meshalive.com/tools/generador-enlaces-utm-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/generador-enlaces-utm-colombia',
    title: { absolute: 'Generador de Enlaces UTM Colombia Gratis — Campañas y Pauta Digital | Meshalive' },
    description: 'Construye parámetros UTM (source, medium, campaign) para rastrear tus campañas en Facebook Ads, Google Ads, TikTok e influencers en Colombia. Compatible con Google Analytics 4.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Generador de Enlaces UTM Colombia Gratis — Campañas y Pauta Digital | Meshalive' },
    description: 'Construye parámetros UTM (source, medium, campaign) para rastrear tus campañas en Facebook Ads, Google Ads, TikTok e influencers en Colombia. Compatible con Google Analytics 4.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Enlaces UTM Colombia Gratis — Campañas y Pauta Digital | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Construye parámetros UTM (source, medium, campaign) para rastrear tus campañas en Facebook Ads, Google Ads, TikTok e influencers en Colombia. Compatible con Google Analytics 4.',
      url: 'https://meshalive.com/tools/generador-enlaces-utm-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es un parámetro UTM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es un fragmento de código añadido al final de una URL que permite a Google Analytics identificar de qué campaña, anuncio o red proviene una visita.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué debo acortar una URL con UTM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las URLs con UTMs son muy largas y pueden cortarse al enviarse por WhatsApp o SMS. Acortarlas preserva los parámetros y se ve profesional.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona con Google Analytics 4 (GA4)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, cumple 100% con los estándares de etiquetado estándar de Google para GA4.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Generador de Enlaces UTM para Campañas en Colombia', item: 'https://meshalive.com/tools/generador-enlaces-utm-colombia' },
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

export default function GeneradorEnlacesUtmColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Para Agencias y Marketers en Colombia (GA4 Ready)</div>
          <h1 style={S.h1}>
            Generador de Enlaces UTM para Campañas en Colombia: <span style={{ color: '#0057ff' }}>Rastreo Preciso en GA4</span>
          </h1>
          <p style={S.sub}>Etiqueta tus enlaces de pauta digital, correos masivos y colaboraciones con influencers en Colombia. Mide qué canal genera más conversiones en pesos colombianos.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UtmBuilderClient /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎯</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Plantillas para Canales Locales</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Presets automáticos para Facebook Ads, Instagram Stories, TikTok Ads, WhatsApp Broadcasts y Google Ads.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🔗</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Acortado Instantáneo Integrado</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Genera el enlace largo con UTMs y acórtalo en 1 clic para no compartir URLs de 200 caracteres en tus anuncios.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📈</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Estandarización para Agencias</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Evita errores de sintaxis o espacios que arruinen los reportes de atribución en Google Analytics 4.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Qué es un parámetro UTM?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Es un fragmento de código añadido al final de una URL que permite a Google Analytics identificar de qué campaña, anuncio o red proviene una visita.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Por qué debo acortar una URL con UTM?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Las URLs con UTMs son muy largas y pueden cortarse al enviarse por WhatsApp o SMS. Acortarlas preserva los parámetros y se ve profesional.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Funciona con Google Analytics 4 (GA4)?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, cumple 100% con los estándares de etiquetado estándar de Google para GA4.</p>
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
