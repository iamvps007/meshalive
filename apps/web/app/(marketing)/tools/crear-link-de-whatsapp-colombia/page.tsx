import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppColombiaClient from './WhatsAppColombiaClient';

export const metadata: Metadata = {
  title: { absolute: 'Crear Link de WhatsApp Colombia (+57) Gratis — Generador wa.link | Meshalive' },
  description:
    'Genera links de WhatsApp directos para números en Colombia con código +57 y mensaje personalizado. Permite que tus clientes en Bogotá, Medellín y Cali te escriban en 1 clic.',
  keywords: [
    'crear link de whatsapp colombia',
    'generador link whatsapp colombia',
    'wa link colombia',
    'link de whatsapp con mensaje colombia',
    'crear link wa me colombia 57',
    'link directo whatsapp colombia',
    'whatsapp business link colombia',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/crear-link-de-whatsapp-colombia',
  },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/crear-link-de-whatsapp-colombia',
    title: { absolute: 'Crear Link de WhatsApp Colombia (+57) Gratis | Meshalive' },
    description:
      'Crea enlaces wa.me directos para celulares colombianos (+57). Añade mensajes personalizados y multiplica tus ventas por chat.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Crear Link de WhatsApp Colombia (+57) Gratis | Meshalive' },
    description: 'Generador de enlaces para WhatsApp en Colombia con mensaje precargado instantáneo.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Links de WhatsApp Colombia (+57) — Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Genera enlaces directos a WhatsApp para números colombianos con código de país +57 y mensaje personalizado.',
      url: 'https://meshalive.com/tools/crear-link-de-whatsapp-colombia',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Link de WhatsApp Colombia (+57)', item: 'https://meshalive.com/tools/crear-link-de-whatsapp-colombia' },
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
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#15803d',
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

export default function WhatsAppColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>
            <span>🇨🇴</span> Código País Colombia (+57) Incluido
          </div>
          <h1 style={S.h1}>
            Crear Link de WhatsApp para Colombia:{' '}
            <span style={{ color: '#16a34a' }}>wa.link Gratis con Mensaje</span>
          </h1>
          <p style={S.sub}>
            Genera enlaces directos a tu chat de WhatsApp en Colombia. Tus compradores en Bogotá, Medellín,
            Cali y Barranquilla podrán escribirte con un solo toque, sin guardar tu número celular.
          </p>

          <div style={{ maxWidth: 580, margin: '0 auto' }}>
            <WhatsAppColombiaClient />
          </div>
        </section>

        {/* Benefits */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🚀</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Más Ventas, Cero Fricción
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                El 75% de los usuarios abandona si debe guardar manualmente un número en su agenda de contactos. Con este enlace chatean al instante.
              </p>
            </div>

            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>💬</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                Mensaje Precargado Automático
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Define un texto inicial personalizado para saber exactamente desde qué producto, pauta o red social te escriben.
              </p>
            </div>

            <div style={S.card}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>
                100% Permanente y Gratuito
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                Los enlaces no caducan nunca. Úsalos en Instagram, campañas de Facebook Ads, volantes o tarjetas de presentación.
              </p>
            </div>
          </div>
        </section>

        <hr style={S.divider} />

        {/* Use Cases */}
        <section style={S.section}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 20px', color: '#111111' }}>
            Casos de Uso más Comunes en Colombia
          </h2>
          <div style={S.grid}>
            <div style={{ ...S.card, background: '#ffffff' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>
                🛍️ Tiendas Virtuales y Emprendimientos
              </h4>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Ubica tu enlace en la biografía de Instagram o catálogo online para responder dudas y confirmar pagos por Nequi o Daviplata.
              </p>
            </div>
            <div style={{ ...S.card, background: '#ffffff' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>
                🍔 Restaurantes y Domicilios
              </h4>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Recibe órdenes de comida directa en tu WhatsApp sin pagar comisiones a plataformas intermediarias de delivery.
              </p>
            </div>
            <div style={{ ...S.card, background: '#ffffff' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>
                💼 Asesoría y Servicios Profesionales
              </h4>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Permite que clientes potenciales agenden reuniones, coticen asesorías jurídicas o soliciten visitas técnicas.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-links */}
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
              href="/tools/generador-codigo-qr-colombia"
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
              Generador Código QR Colombia 🇨🇴 →
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
