import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Free URL Shortener UAE & Dubai — WhatsApp Links & Analytics | Meshalive' },
  description:
    'Best free URL shortener in the UAE. Shorten links for WhatsApp, Instagram, Dubai real estate, SMS & social media. Unlimited links, custom slugs & QR codes with free click analytics.',
  keywords: [
    'url shortener uae',
    'free url shortener dubai',
    'link shortener uae',
    'best url shortener dubai',
    'whatsapp link shortener uae',
    'short url abu dhabi',
    'dubai real estate link shortener',
    'مختصر الروابط الإمارات',
  ],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-uae' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/url-shortener-uae',
    title: { absolute: 'Free URL Shortener UAE & Dubai | Meshalive' },
    description: 'Free URL shortener built for UAE businesses. WhatsApp analytics, unlimited links, QR codes — no signup required.',
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free URL Shortener UAE & Dubai | Meshalive',
    description: 'Shorten links for WhatsApp & social campaigns across Dubai and the UAE with free click analytics.',
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: 'Is Meshalive free to use in the UAE?',
    a: 'Yes! Meshalive is 100% free with unlimited links, real-time analytics, dynamic QR codes, and custom slugs. No credit card or paid subscription required.',
  },
  {
    q: 'Can I shorten WhatsApp business links with UAE numbers (+971)?',
    a: 'Yes. You can shorten any WhatsApp wa.me link with +971 numbers and pre-filled messages. Perfect for Dubai real estate brokers, restaurants, salons, and e-commerce stores.',
  },
  {
    q: 'Does it track geographic click analytics for Dubai and Abu Dhabi?',
    a: 'Yes. Every shortened link provides real-time geo-analytics, device types (iOS vs Android), and referrer platforms so you know exactly which channels drive your conversions.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Free URL Shortener UAE',
      url: 'https://meshalive.com/tools/url-shortener-uae',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'AED',
      },
      description: 'Free URL shortener and click analytics platform for Dubai and UAE businesses, marketing agencies, and real estate brokers.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' } as React.CSSProperties,
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' } as React.CSSProperties,
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' } as React.CSSProperties,
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 } as React.CSSProperties,
  card: { padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 } as React.CSSProperties,
};

export default function Page() {
  return (
    <main style={S.page}>
      <Script
        id="uae-shortener-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#2563eb', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          🇦🇪 Best URL Shortener in the UAE & Dubai
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Free URL Shortener for UAE <br />
          <span style={{ color: '#2563eb' }}>WhatsApp Links & Analytics</span>
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#4b5563', margin: '0 auto 40px', maxWidth: 640, lineHeight: 1.6 }}>
          Shorten links for WhatsApp campaigns, Dubai real estate property listings, Instagram bios, and SMS marketing. 100% free with unlimited links and real-time click tracking.
        </p>

        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      {/* UAE Use Cases */}
      <section style={S.section}>
        <h2 style={S.h2}>Tailored for UAE Marketers, Realtors & Brands</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginTop: 24 }}>
          <div style={S.card}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🏢</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>Dubai Real Estate</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Share brochure links, floor plans, and WhatsApp direct contact links across Property Finder, Bayut, and Instagram Ads without messy long URLs.
            </p>
          </div>
          <div style={S.card}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>💬</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>WhatsApp Marketing</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              WhatsApp is the primary business communication tool in the UAE. Track clicks and generate QR codes for in-store menus and counters.
            </p>
          </div>
          <div style={S.card}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🛍️</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>E-Commerce & Retail</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Clean, branded links for Noon, Amazon.ae, TikTok Shop, and Instagram stores that maximize click-through rates.
            </p>
          </div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* FAQ */}
      <section style={S.section}>
        <h2 style={S.h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
          {FAQS.map((item, idx) => (
            <div key={idx} style={S.card}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: '#111827' }}>
                {item.q}
              </h3>
              <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
