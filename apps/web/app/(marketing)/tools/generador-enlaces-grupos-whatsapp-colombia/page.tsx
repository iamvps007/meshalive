import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Generador de Enlaces para Grupos de WhatsApp Colombia Gratis | Meshalive' },
  description: 'Acorta y protege enlaces de invitación a grupos y canales de WhatsApp en Colombia. Mide cuántas personas se unen desde Facebook, TikTok, Instagram o volantes impresos.',
  keywords: ['generador enlaces grupos de whatsapp colombia', 'acortar link grupo whatsapp', 'link invitacion grupo whatsapp colombia', 'unirse a grupo whatsapp bogota'],
  alternates: { canonical: 'https://meshalive.com/tools/generador-enlaces-grupos-whatsapp-colombia' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/generador-enlaces-grupos-whatsapp-colombia',
    title: { absolute: 'Generador de Enlaces para Grupos de WhatsApp Colombia Gratis | Meshalive' },
    description: 'Acorta y protege enlaces de invitación a grupos y canales de WhatsApp en Colombia. Mide cuántas personas se unen desde Facebook, TikTok, Instagram o volantes impresos.',
    siteName: 'Meshalive',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Generador de Enlaces para Grupos de WhatsApp Colombia Gratis | Meshalive' },
    description: 'Acorta y protege enlaces de invitación a grupos y canales de WhatsApp en Colombia. Mide cuántas personas se unen desde Facebook, TikTok, Instagram o volantes impresos.',
    site: '@meshalive',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Generador de Enlaces para Grupos de WhatsApp Colombia Gratis | Meshalive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'COP',
      },
      description: 'Acorta y protege enlaces de invitación a grupos y canales de WhatsApp en Colombia. Mide cuántas personas se unen desde Facebook, TikTok, Instagram o volantes impresos.',
      url: 'https://meshalive.com/tools/generador-enlaces-grupos-whatsapp-colombia',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo consigo el enlace de mi grupo de WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Abre tu grupo en WhatsApp, toca el nombre del grupo, baja hasta \'Enlace de invitación al grupo\' y selecciona \'Copiar enlace\'.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si cambio el enlace de invitación en WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si restableces el enlace en WhatsApp, simplemente genera un nuevo enlace corto en Meshalive con la nueva URL.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona también para Canales de WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, es 100% compatible con enlaces de canales públicos y privados de WhatsApp.',
          },
        }
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://meshalive.com' },
        { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://meshalive.com/tools' },
        { '@type': 'ListItem', position: 3, name: 'Generador y Acortador de Enlaces para Grupos de WhatsApp', item: 'https://meshalive.com/tools/generador-enlaces-grupos-whatsapp-colombia' },
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

export default function GeneradorEnlacesGruposWhatsappColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={S.page}>
        <section style={{ ...S.section, paddingTop: 48, textAlign: 'center' }}>
          <div style={S.badge}>🇨🇴 Comunidades y Grupos de WhatsApp en Colombia</div>
          <h1 style={S.h1}>
            Generador y Acortador de Enlaces para Grupos de WhatsApp: <span style={{ color: '#0057ff' }}>Crece tu Comunidad</span>
          </h1>
          <p style={S.sub}>Los enlaces nativos de invitación a grupos de WhatsApp (`chat.whatsapp.com/...`) son largos e impersonales. Acórtalos para medir de qué red social llegan más miembros a tu comunidad.</p>

          <div style={{ maxWidth: 640, margin: '0 auto' }}><UrlShortenerTool /></div>
        </section>

        {/* Benefits Grid */}
        <section style={S.section}>
          <div style={S.grid}>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>👥</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Mide el Crecimiento de tu Grupo</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Rastrea cuántas personas hicieron clic en el link de invitación antes de unirse al grupo o canal.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🛡️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Protege tu Enlace en Redes</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Evita que las plataformas marquen los enlaces crudos de WhatsApp como sospechosos o spam.</p>
            </div>
            <div style={{ padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📱</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#111111' }}>Apertura Directa en la App</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>Garantiza que el enlace abra la aplicación de WhatsApp directamente en el celular del usuario sin errores de redirección.</p>
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
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Cómo consigo el enlace de mi grupo de WhatsApp?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Abre tu grupo en WhatsApp, toca el nombre del grupo, baja hasta 'Enlace de invitación al grupo' y selecciona 'Copiar enlace'.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Qué pasa si cambio el enlace de invitación en WhatsApp?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Si restableces el enlace en WhatsApp, simplemente genera un nuevo enlace corto en Meshalive con la nueva URL.</p>
            </details>
            <details style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px' }}>
              <summary style={{ fontWeight: 600, fontSize: '15px', color: '#111111', cursor: 'pointer' }}>¿Funciona también para Canales de WhatsApp?</summary>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>Sí, es 100% compatible con enlaces de canales públicos y privados de WhatsApp.</p>
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
