import type { Metadata } from 'next';
import Link from 'next/link';
import QrColombiaClient from '../generador-codigo-qr-colombia/QrColombiaClient';

export const metadata: Metadata = {
  title: { absolute: 'Generador de Código QR para Menú de Restaurante Colombia Gratis | Meshalive' },
  description: 'Crea códigos QR en alta resolución para la carta digital de tu restaurante, café o gastrobar en Bogotá, Medellín, Cali y Cartagena. Listo para imprimir en mesas y pendones.',
  keywords: ['codigo qr menu restaurante colombia', 'carta digital qr bogota', 'codigo qr restaurante medellin', 'qr para cartas de restaurantes gratis', 'menu digital cali'],
  alternates: { canonical: 'https://meshalive.com/tools/generador-codigo-qr-menu-restaurante-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/generador-codigo-qr-menu-restaurante-colombia',
    title: { absolute: 'Generador de Código QR para Menú de Restaurante Colombia Gratis | Meshalive' },
    description: 'Crea códigos QR en alta resolución para la carta digital de tu restaurante, café o gastrobar en Bogotá, Medellín, Cali y Cartagena. Listo para imprimir en mesas y pendones.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Generador de Código QR para Menú de Restaurante Colombia Gratis | Meshalive' },
    description: 'Crea códigos QR en alta resolución para la carta digital de tu restaurante, café o gastrobar en Bogotá, Medellín, Cali y Cartagena. Listo para imprimir en mesas y pendones.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Código QR para Menú de Restaurante Colombia Gratis | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Crea códigos QR en alta resolución para la carta digital de tu restaurante, café o gastrobar en Bogotá, Medellín, Cali y Cartagena. Listo para imprimir en mesas y pendones.',
      url: 'https://meshalive.com/tools/generador-codigo-qr-menu-restaurante-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puedo vincular el QR a un PDF en Google Drive o a mi Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Puedes enlazarlo a un PDF en Drive, a un menú publicado en tu web o directamente al catálogo de WhatsApp de tu restaurante.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué tamaño de imagen debo usar para imprimir en mesas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recomendamos descargar la resolución de 400px o 500px para garantizar un escaneo perfecto bajo cualquier iluminación.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es compatible con todos los celulares?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, funciona con la cámara nativa de iPhone y todos los teléfonos Android sin necesidad de instalar apps adicionales.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Generador de Código QR para Menú de Restaurante', item: 'https://meshalive.com/tools/generador-codigo-qr-menu-restaurante-colombia' },
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

export default function GeneradorCodigoQrMenuRestauranteColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Especial para Restaurantes y Gastrobares en Colombia</div>
          <h1 style={S.h1}>
            Generador de Código QR para Menú de Restaurante: <span style={{ color: '#0057ff' }}>Alta Resolución e Imprimible</span>
          </h1>
          <p style={S.sub}>Diseñado para restaurantes en zonas gastronómicas como Usaquén, Parque de la 93, El Poblado, Granada o la Ciudad Amurallada. Códigos QR nítidos sin caducidad ni publicidad invasiva.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><QrColombiaClient /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🍽️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Cero Fricción para tus Comensales</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Permite que tus clientes escaneen desde la mesa y vean la carta o menú del día al instante en su celular.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🖨️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Descarga en Alta Resolución (Hasta 500px)</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Calidad profesional lista para imprimir en habladores de acrílico, individuales de papel, pendones o la fachada.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>♾️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Sin Vencimiento ni Anuncios</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Tus comensales no verán páginas publicitarias de terceros antes de abrir tu menú. El código es directo y permanente.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Puedo vincular el QR a un PDF en Google Drive o a mi Instagram?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí. Puedes enlazarlo a un PDF en Drive, a un menú publicado en tu web o directamente al catálogo de WhatsApp de tu restaurante.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Qué tamaño de imagen debo usar para imprimir en mesas?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Recomendamos descargar la resolución de 400px o 500px para garantizar un escaneo perfecto bajo cualquier iluminación.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Es compatible con todos los celulares?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, funciona con la cámara nativa de iPhone y todos los teléfonos Android sin necesidad de instalar apps adicionales.</p>
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
