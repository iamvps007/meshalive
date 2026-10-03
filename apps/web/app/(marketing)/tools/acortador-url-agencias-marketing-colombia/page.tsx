import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Acortador de URL para Agencias de Marketing en Colombia | Meshalive' },
  description: 'Plataforma de enlaces cortos para agencias de publicidad, growth y marketing digital en Colombia. Alta velocidad, analítica detallada y compatibilidad con GA4.',
  keywords: ['acortador url agencias colombia', 'software enlaces agencias bogota', 'acortador de links para marketing colombia', 'plataforma de enlaces medellin'],
  alternates: { canonical: 'https://meshalive.com/tools/acortador-url-agencias-marketing-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/acortador-url-agencias-marketing-colombia',
    title: { absolute: 'Acortador de URL para Agencias de Marketing en Colombia | Meshalive' },
    description: 'Plataforma de enlaces cortos para agencias de publicidad, growth y marketing digital en Colombia. Alta velocidad, analítica detallada y compatibilidad con GA4.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Acortador de URL para Agencias de Marketing en Colombia | Meshalive' },
    description: 'Plataforma de enlaces cortos para agencias de publicidad, growth y marketing digital en Colombia. Alta velocidad, analítica detallada y compatibilidad con GA4.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Acortador de URL para Agencias de Marketing en Colombia | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Plataforma de enlaces cortos para agencias de publicidad, growth y marketing digital en Colombia. Alta velocidad, analítica detallada y compatibilidad con GA4.',
      url: 'https://meshalive.com/tools/acortador-url-agencias-marketing-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo ayuda a la atribución en Google Ads y Meta Ads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Permite incluir parámetros UTM estructurados sin que la URL se corte, manteniendo el rastreo íntegro.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Hay límites en la cantidad de links creados?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, Meshalive es completamente gratuito con enlaces y clics ilimitados.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Ofrecen acceso por API para desarrolladores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, contamos con una API REST rápida para generación automática de enlaces desde sistemas CRM o bots.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Acortador de URL para Agencias de Marketing en Colombia', item: 'https://meshalive.com/tools/acortador-url-agencias-marketing-colombia' },
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

export default function AcortadorUrlAgenciasMarketingColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Diseñado para Agencias de Publicidad y Growth en Colombia</div>
          <h1 style={S.h1}>
            Acortador de URL para Agencias de Marketing en Colombia: <span style={{ color: '#0057ff' }}>Rendimiento y Analítica</span>
          </h1>
          <p style={S.sub}>Gestiona y rastrea enlaces para múltiples clientes y campañas. Redirección de baja latencia en Colombia con analítica completa de dispositivos, ciudades y fuentes de tráfico.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏢</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Estructura para Equipos y Cuentas</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Organiza enlaces por clientes, campañas de pauta o canales de distribución con total claridad.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Infraestructura Localizada</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Garantiza que la pauta de tus clientes no pierda conversiones por servidores lentos en otros continentes.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📈</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Reportes Transparentes para Clientes</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Muestra métricas reales de interacción para justificar el retorno de inversión (ROI) de tus campañas de marketing.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Cómo ayuda a la atribución en Google Ads y Meta Ads?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Permite incluir parámetros UTM estructurados sin que la URL se corte, manteniendo el rastreo íntegro.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Hay límites en la cantidad de links creados?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>No, Meshalive es completamente gratuito con enlaces y clics ilimitados.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Ofrecen acceso por API para desarrolladores?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, contamos con una API REST rápida para generación automática de enlaces desde sistemas CRM o bots.</p>
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
