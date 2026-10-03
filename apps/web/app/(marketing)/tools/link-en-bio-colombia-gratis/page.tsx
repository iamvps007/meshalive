import type { Metadata } from 'next';
import Link from 'next/link';
import LinkInBioClient from './LinkInBioClient';

export const metadata: Metadata = {
  title: { absolute: 'Link en Bio Colombia Gratis — Alternativa a Linktree sin Costo | Meshalive' },
  description: 'Crea tu página de enlaces en biografía gratis en Colombia. Conecta tu WhatsApp (+57), catálogo de productos, tienda online y redes sociales en un solo link profesional.',
  keywords: ['link en bio colombia gratis', 'alternativa linktree colombia', 'link en bio instagram colombia', 'crear pagina de links gratis', 'arbol de enlaces colombia'],
  alternates: { canonical: 'https://meshalive.com/tools/link-en-bio-colombia-gratis' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/link-en-bio-colombia-gratis',
    title: { absolute: 'Link en Bio Colombia Gratis — Alternativa a Linktree sin Costo | Meshalive' },
    description: 'Crea tu página de enlaces en biografía gratis en Colombia. Conecta tu WhatsApp (+57), catálogo de productos, tienda online y redes sociales en un solo link profesional.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Link en Bio Colombia Gratis — Alternativa a Linktree sin Costo | Meshalive' },
    description: 'Crea tu página de enlaces en biografía gratis en Colombia. Conecta tu WhatsApp (+57), catálogo de productos, tienda online y redes sociales en un solo link profesional.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Link en Bio Colombia Gratis — Alternativa a Linktree sin Costo | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Crea tu página de enlaces en biografía gratis en Colombia. Conecta tu WhatsApp (+57), catálogo de productos, tienda online y redes sociales en un solo link profesional.',
      url: 'https://meshalive.com/tools/link-en-bio-colombia-gratis',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo coloco este link en mi biografía de Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copia el enlace generado y pégalo en la sección \'Enlaces\' al editar tu perfil en Instagram o TikTok.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuántos enlaces puedo agregar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes agregar todos los enlaces que necesites a WhatsApp, catálogo, redes sociales y tiendas online sin costo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es compatible con teléfonos colombianos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Totalmente optimizado para pantallas de smartphones y operadores móviles de toda Colombia.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Link en Bio Gratis para Negocios y Creadores en Colombia', item: 'https://meshalive.com/tools/link-en-bio-colombia-gratis' },
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

export default function LinkEnBioColombiaGratisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Alternativa a Linktree 100% Gratuita en Colombia</div>
          <h1 style={S.h1}>
            Link en Bio Gratis para Negocios y Creadores en Colombia: <span style={{ color: '#0057ff' }}>Centraliza tus Enlaces</span>
          </h1>
          <p style={S.sub}>Supera la limitación de enlaces en Instagram y TikTok. Conecta tu WhatsApp directo (+57), tus productos destacados, cuenta de Nequi/Daviplata y canales de YouTube en una página ligera y optimizada.</p>

          <div style={{ maxWidth: 580, margin: '0 auto' }}><LinkInBioClient /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📱</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Optimizado para Tráfico Móvil Colombiano</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Carga ultra veloz en redes 4G y 5G de Claro, Tigo y Movistar para evitar que tus seguidores abandonen la página.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💬</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Botón Directo de WhatsApp Integrado</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Permite que tus prospectos inicien una conversación de ventas de inmediato con mensaje precargado.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💰</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Sin Cuotas Mensuales en Dólares</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Olvídate de pagar suscripciones costosas en dólares para tener enlaces ilimitados y personalización completa.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Cómo coloco este link en mi biografía de Instagram?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Copia el enlace generado y pégalo en la sección 'Enlaces' al editar tu perfil en Instagram o TikTok.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Cuántos enlaces puedo agregar?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Puedes agregar todos los enlaces que necesites a WhatsApp, catálogo, redes sociales y tiendas online sin costo.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Es compatible con teléfonos colombianos?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Totalmente optimizado para pantallas de smartphones y operadores móviles de toda Colombia.</p>
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
