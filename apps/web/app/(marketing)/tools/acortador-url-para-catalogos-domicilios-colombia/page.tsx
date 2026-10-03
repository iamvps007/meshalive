import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Acortador de URL para Catálogos y Domicilios Colombia Gratis | Meshalive' },
  description: 'Acorta enlaces de pedidos a domicilio, catálogos en PDF, menús y formularios de entrega en Colombia. Ideal para ventas por WhatsApp en Bogotá, Medellín y Cali.',
  keywords: ['acortador catalogos domicilios colombia', 'link pedidos whatsapp colombia', 'enlace catalogo virtual bogota', 'domicilios sin comisiones medellin'],
  alternates: { canonical: 'https://meshalive.com/tools/acortador-url-para-catalogos-domicilios-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/acortador-url-para-catalogos-domicilios-colombia',
    title: { absolute: 'Acortador de URL para Catálogos y Domicilios Colombia Gratis | Meshalive' },
    description: 'Acorta enlaces de pedidos a domicilio, catálogos en PDF, menús y formularios de entrega en Colombia. Ideal para ventas por WhatsApp en Bogotá, Medellín y Cali.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Acortador de URL para Catálogos y Domicilios Colombia Gratis | Meshalive' },
    description: 'Acorta enlaces de pedidos a domicilio, catálogos en PDF, menús y formularios de entrega en Colombia. Ideal para ventas por WhatsApp en Bogotá, Medellín y Cali.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Acortador de URL para Catálogos y Domicilios Colombia Gratis | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Acorta enlaces de pedidos a domicilio, catálogos en PDF, menús y formularios de entrega en Colombia. Ideal para ventas por WhatsApp en Bogotá, Medellín y Cali.',
      url: 'https://meshalive.com/tools/acortador-url-para-catalogos-domicilios-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puedo actualizar el PDF de mi catálogo sin cambiar el link?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si alojas tu PDF en Google Drive con enlace público, puedes actualizar el archivo en Drive y tu enlace corto seguirá funcionando.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué es mejor que compartir el PDF directo por chat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enviar un PDF pesado consume los datos móviles de tu cliente y satura la memoria de su teléfono. Un enlace web abre al instante.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Tiene costo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '100% gratuito y sin límites.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Acortador de Enlaces para Catálogos y Domicilios', item: 'https://meshalive.com/tools/acortador-url-para-catalogos-domicilios-colombia' },
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

export default function AcortadorUrlParaCatalogosDomiciliosColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Para Restaurantes, Dark Kitchens y Domiciliarios en Colombia</div>
          <h1 style={S.h1}>
            Acortador de Enlaces para Catálogos y Domicilios: <span style={{ color: '#0057ff' }}>Vende sin Comisiones</span>
          </h1>
          <p style={S.sub}>Envía tu catálogo digital o enlace de pedidos a tus clientes frecuentes sin pagar comisiones abusivas a aplicaciones intermediarias de delivery.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🛵</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Canal Propio de Domicilios</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Fomenta la compra recurrente directa a través de WhatsApp compartiendo links cortos y fáciles de guardar.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📦</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Compatible con Enlaces a PDF y Drive</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Acorta enlaces largos de Google Drive, OneDrive o Dropbox para compartir cartas y menús sin saturar los chats.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📊</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Monitorea tus Horarios Pico</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Descubre a qué horas y qué días de la semana tus clientes hacen más clics en tu catálogo para optimizar tu personal de cocina.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Puedo actualizar el PDF de mi catálogo sin cambiar el link?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Si alojas tu PDF en Google Drive con enlace público, puedes actualizar el archivo en Drive y tu enlace corto seguirá funcionando.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Por qué es mejor que compartir el PDF directo por chat?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Enviar un PDF pesado consume los datos móviles de tu cliente y satura la memoria de su teléfono. Un enlace web abre al instante.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Tiene costo?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>100% gratuito y sin límites.</p>
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
