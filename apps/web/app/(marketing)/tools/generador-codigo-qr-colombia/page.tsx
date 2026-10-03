import type { Metadata } from 'next';
import Link from 'next/link';
import QrColombiaClient from './QrColombiaClient';

export const metadata: Metadata = {
  title: { absolute: 'Generador de Código QR Colombia Gratis — Descarga en Alta Resolución | Meshalive' },
  description:
    'Crea códigos QR personalizados para menús de restaurantes, pagos PSE, WhatsApp y redes sociales en Colombia. 100% gratuito, sin límites ni fecha de vencimiento.',
  keywords: [
    'generador de codigo qr colombia gratis',
    'crear codigo qr colombia',
    'codigo qr restaurante colombia',
    'qr para menu bogota',
    'codigo qr whatsapp colombia',
    'generar qr gratis medellin',
    'qr imprimible alta resolucion',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/generador-codigo-qr-colombia',
  },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/generador-codigo-qr-colombia',
    title: { absolute: 'Generador de Código QR Colombia Gratis | Meshalive' },
    description:
      'Generador de códigos QR en alta resolución para negocios, restaurantes y cartas digitales en Colombia.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Generador de Código QR Colombia Gratis | Meshalive' },
    description: 'Genera códigos QR listos para imprimir para tu negocio en Colombia.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Código QR Colombia — Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Genera códigos QR de alta resolución para menús de restaurantes, pagos y enlaces en Colombia.',
      url: 'https://meshalive.com/tools/generador-codigo-qr-colombia',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Generador Código QR Colombia', item: 'https://meshalive.com/tools/generador-codigo-qr-colombia' },
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

export default function GeneradorQrColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>
            <span>🇨🇴</span> Herramienta Diseñada para Comercios en Colombia
          </div>
          <h1 style={S.h1}>
            Generador de Códigos QR Gratis en Colombia:{' '}
            <span style={{ color: '#0057ff' }}>Alta Resolución e Imprimible</span>
          </h1>
          <p style={S.sub}>
            Crea códigos QR personalizados para menús de restaurantes, enlaces de WhatsApp, redes sociales
            o claves Wi-Fi. Sin caducidad, sin anuncios y listos para descargar en alta calidad.
          </p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <QrColombiaClient />
          </div>
        </section>

        {/* Benefits */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🖨️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Listo para Imprimir
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Genera imágenes nítidas de hasta 500px, ideales para cartas de restaurante, pendones, volantes y empaques comerciales.
              </p>
            </div>

            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📱</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Escaneo Universal
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Compatible con la cámara nativa de cualquier smartphone en Colombia (iPhone, Samsung, Xiaomi, Motorola, etc.).
              </p>
            </div>

            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>♾️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Sin Vencimiento ni Publicidad
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Tus códigos QR no redirigen a páginas intermediarias con anuncios molestos ni caducan a los 14 días.
              </p>
            </div>
          </div>
        </section>

        <hr style={S.divider} />

        {/* Colombian Cross Links */}
        <section style={{ ...S.section, textAlign: 'center', paddingTop: 16 }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Otras Herramientas Esenciales para Colombia
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link
              href="/tools/acortador-de-url-colombia"
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
              Acortador de URL Colombia 🇨🇴 →
            </Link>
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
