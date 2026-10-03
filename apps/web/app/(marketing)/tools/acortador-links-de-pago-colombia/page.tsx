import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Acortador de Links de Pago Colombia Gratis — Nequi, Bold, Wompi y PSE | Meshalive' },
  description: 'Acorta y personaliza tus enlaces de cobro de Bold, Wompi, Nequi, Daviplata y Mercado Pago en Colombia. Enlaces seguros y profesionales que aumentan la confianza del comprador.',
  keywords: ['acortador links de pago colombia', 'acortar link nequi', 'link de pago bold colombia', 'acortar link wompi', 'enlaces de cobro pse'],
  alternates: { canonical: 'https://meshalive.com/tools/acortador-links-de-pago-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/acortador-links-de-pago-colombia',
    title: { absolute: 'Acortador de Links de Pago Colombia Gratis — Nequi, Bold, Wompi y PSE | Meshalive' },
    description: 'Acorta y personaliza tus enlaces de cobro de Bold, Wompi, Nequi, Daviplata y Mercado Pago en Colombia. Enlaces seguros y profesionales que aumentan la confianza del comprador.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Acortador de Links de Pago Colombia Gratis — Nequi, Bold, Wompi y PSE | Meshalive' },
    description: 'Acorta y personaliza tus enlaces de cobro de Bold, Wompi, Nequi, Daviplata y Mercado Pago en Colombia. Enlaces seguros y profesionales que aumentan la confianza del comprador.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Acortador de Links de Pago Colombia Gratis — Nequi, Bold, Wompi y PSE | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Acorta y personaliza tus enlaces de cobro de Bold, Wompi, Nequi, Daviplata y Mercado Pago en Colombia. Enlaces seguros y profesionales que aumentan la confianza del comprador.',
      url: 'https://meshalive.com/tools/acortador-links-de-pago-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Es seguro usar un acortador para enlaces de pago de Bold o Wompi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Totalmente seguro. Meshalive realiza una redirección 301 directa y transparente con cifrado SSL/TLS de grado bancario, sin almacenar ni interceptar datos financieros.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo acortar enlaces de cobro de Nequi o Daviplata?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Puedes acortar cualquier enlace web de pago generado por Nequi Negocios, llaves PSE o formularios de Daviplata.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Tiene costo o límite de clics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es 100% gratuito con clics ilimitados para todos los comercios y emprendimientos de Colombia.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Acortador de Links de Pago en Colombia', item: 'https://meshalive.com/tools/acortador-links-de-pago-colombia' },
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

export default function AcortadorLinksDePagoColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Pasarelas de Pago Colombia (PSE, Bold, Wompi, Nequi)</div>
          <h1 style={S.h1}>
            Acortador de Links de Pago en Colombia: <span style={{ color: '#0057ff' }}>Seguro y Confiable</span>
          </h1>
          <p style={S.sub}>Convierte URLs de cobro extensas y confusas en enlaces cortos y elegantes para enviar por WhatsApp, Instagram DM o SMS. Compatible con Bold, Wompi, Mercado Pago, PSE y transferencias digitales.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Mayor Confianza al Pagar</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Los clientes en Colombia desconfían de links largos con parámetros extraños. Un enlace limpio de Meshalive incrementa la tasa de pago efectivo.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Redirección Instantánea</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Sin pantallas intermedias ni demoras: tu comprador llega directo al formulario de pago seguro de tu pasarela en menos de 20ms.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📊</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Control de Clics en Tiempo Real</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Verifica cuántas personas abrieron el enlace de cobro y confirma si están a punto de completar la transacción.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Es seguro usar un acortador para enlaces de pago de Bold o Wompi?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Totalmente seguro. Meshalive realiza una redirección 301 directa y transparente con cifrado SSL/TLS de grado bancario, sin almacenar ni interceptar datos financieros.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Puedo acortar enlaces de cobro de Nequi o Daviplata?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí. Puedes acortar cualquier enlace web de pago generado por Nequi Negocios, llaves PSE o formularios de Daviplata.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Tiene costo o límite de clics?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Es 100% gratuito con clics ilimitados para todos los comercios y emprendimientos de Colombia.</p>
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
