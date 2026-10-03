import type { Metadata } from 'next';
import Link from 'next/link';
import WifiQrClient from './WifiQrClient';

export const metadata: Metadata = {
  title: { absolute: 'Generador de Código QR para Wi-Fi Colombia Gratis — Conexión Directa | Meshalive' },
  description: 'Genera códigos QR para conectar a clientes y visitantes a la red Wi-Fi de tu local en Colombia. Sin escribir contraseñas complejas. Ideal para cafés, coworkings y tiendas.',
  keywords: ['codigo qr wifi gratis colombia', 'conectar wifi con qr restaurante', 'qr clave wifi bogota medellin', 'compartir wifi con qr colombia'],
  alternates: { canonical: 'https://meshalive.com/tools/generador-codigo-qr-wifi-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/generador-codigo-qr-wifi-colombia',
    title: { absolute: 'Generador de Código QR para Wi-Fi Colombia Gratis — Conexión Directa | Meshalive' },
    description: 'Genera códigos QR para conectar a clientes y visitantes a la red Wi-Fi de tu local en Colombia. Sin escribir contraseñas complejas. Ideal para cafés, coworkings y tiendas.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Generador de Código QR para Wi-Fi Colombia Gratis — Conexión Directa | Meshalive' },
    description: 'Genera códigos QR para conectar a clientes y visitantes a la red Wi-Fi de tu local en Colombia. Sin escribir contraseñas complejas. Ideal para cafés, coworkings y tiendas.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Código QR para Wi-Fi Colombia Gratis — Conexión Directa | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Genera códigos QR para conectar a clientes y visitantes a la red Wi-Fi de tu local en Colombia. Sin escribir contraseñas complejas. Ideal para cafés, coworkings y tiendas.',
      url: 'https://meshalive.com/tools/generador-codigo-qr-wifi-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Mis contraseñas se almacenan en sus servidores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. El código QR codifica los parámetros localmente en tu navegador bajo el estándar internacional de Wi-Fi, manteniendo tu clave segura.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si mi red es oculta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nuestra herramienta incluye la opción de marcar la red como oculta para que los dispositivos la reconozcan correctamente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona en iPhone y Android?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, iOS y Android admiten la conexión nativa a redes Wi-Fi mediante escaneo de códigos QR.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Generador de Código QR para Wi-Fi en Colombia', item: 'https://meshalive.com/tools/generador-codigo-qr-wifi-colombia' },
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

export default function GeneradorCodigoQrWifiColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Ideal para Cafeterías, Coworkings y Oficinas en Colombia</div>
          <h1 style={S.h1}>
            Generador de Código QR para Wi-Fi en Colombia: <span style={{ color: '#0057ff' }}>Conexión Instantánea</span>
          </h1>
          <p style={S.sub}>Elimina la molestia de deletrear contraseñas difíciles a tus clientes. Genera un código QR que tus visitantes pueden escanear para conectarse a tu Wi-Fi en un segundo.</p>

          <div style={{ maxWidth: 600, margin: '0 auto' }}><WifiQrClient /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📶</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Conexión con 1 Solo Escaneo</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>El cliente abre la cámara de su teléfono, apunta al QR y se conecta automáticamente sin escribir la clave.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Compatible con WPA, WPA2 y WPA3</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Soporta todos los estándares de seguridad de enrutadores Claro, Tigo, Movistar y ETB en Colombia.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏷️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Listo para Enmarcar</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Descarga el código en alta resolución y colócalo en el mostrador, mesas o recepción de tu negocio.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Mis contraseñas se almacenan en sus servidores?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>No. El código QR codifica los parámetros localmente en tu navegador bajo el estándar internacional de Wi-Fi, manteniendo tu clave segura.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Qué pasa si mi red es oculta?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Nuestra herramienta incluye la opción de marcar la red como oculta para que los dispositivos la reconozcan correctamente.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Funciona en iPhone y Android?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, iOS y Android admiten la conexión nativa a redes Wi-Fi mediante escaneo de códigos QR.</p>
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
