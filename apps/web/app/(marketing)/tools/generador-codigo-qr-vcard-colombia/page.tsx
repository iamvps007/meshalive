import type { Metadata } from 'next';
import Link from 'next/link';
import VcardQrClient from './VcardQrClient';

export const metadata: Metadata = {
  title: { absolute: 'Generador de Código QR vCard Colombia Gratis — Tarjetas Digitales | Meshalive' },
  description: 'Crea un código QR de contacto vCard para tus tarjetas de presentación en Colombia. Permite que clientes y socios guarden tu teléfono, email y empresa en su agenda con 1 escaneo.',
  keywords: ['generador codigo qr vcard contacto colombia', 'tarjeta de presentacion digital qr colombia', 'guardar contacto qr bogota', 'tarjeta digital ejecutiva medellin'],
  alternates: { canonical: 'https://meshalive.com/tools/generador-codigo-qr-vcard-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/generador-codigo-qr-vcard-colombia',
    title: { absolute: 'Generador de Código QR vCard Colombia Gratis — Tarjetas Digitales | Meshalive' },
    description: 'Crea un código QR de contacto vCard para tus tarjetas de presentación en Colombia. Permite que clientes y socios guarden tu teléfono, email y empresa en su agenda con 1 escaneo.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Generador de Código QR vCard Colombia Gratis — Tarjetas Digitales | Meshalive' },
    description: 'Crea un código QR de contacto vCard para tus tarjetas de presentación en Colombia. Permite que clientes y socios guarden tu teléfono, email y empresa en su agenda con 1 escaneo.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Código QR vCard Colombia Gratis — Tarjetas Digitales | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Crea un código QR de contacto vCard para tus tarjetas de presentación en Colombia. Permite que clientes y socios guarden tu teléfono, email y empresa en su agenda con 1 escaneo.',
      url: 'https://meshalive.com/tools/generador-codigo-qr-vcard-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué datos puedo incluir en la tarjeta vCard?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nombre, apellido, número de celular (+57), correo electrónico corporativo, cargo, empresa y sitio web.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesita conexión a internet para guardar el contacto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. El código QR codifica la ficha vCard completa dentro de la imagen, funcionando incluso sin datos activos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona en iPhone y Android?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, ambos sistemas operativos reconocen los estándares vCard nativamente al escanear con la cámara.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Generador de Código QR vCard de Contacto en Colombia', item: 'https://meshalive.com/tools/generador-codigo-qr-vcard-colombia' },
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

export default function GeneradorCodigoQrVcardColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Para Profesionales, Ejecutivos y Equipos Comerciales</div>
          <h1 style={S.h1}>
            Generador de Código QR vCard de Contacto en Colombia: <span style={{ color: '#0057ff' }}>Tarjetas Digitales Inteligentes</span>
          </h1>
          <p style={S.sub}>Moderniza tu networking en eventos comerciales, ferias y reuniones de negocios en Colombia. Tus prospectos guardarán todos tus datos de contacto en su agenda con un solo toque.</p>

          <div style={{ maxWidth: 600, margin: '0 auto' }}><VcardQrClient /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📇</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Guardado Automático en Contactos</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Al escanear el QR, el smartphone abre directamente la libreta de direcciones con nombre, teléfono celular, email y empresa completos.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🌱</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Ecológico y Económico</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Reduce el desperdicio de tarjetas de presentación impresas y mantén tu información comercial siempre accesible.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💼</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Ideal para Ferias y Networking</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Perfecto para eventos como Corferias, ruedas de negocios en cámaras de comercio o firmas de correo electrónico.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Qué datos puedo incluir en la tarjeta vCard?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Nombre, apellido, número de celular (+57), correo electrónico corporativo, cargo, empresa y sitio web.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Necesita conexión a internet para guardar el contacto?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>No. El código QR codifica la ficha vCard completa dentro de la imagen, funcionando incluso sin datos activos.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Funciona en iPhone y Android?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, ambos sistemas operativos reconocen los estándares vCard nativamente al escanear con la cámara.</p>
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
