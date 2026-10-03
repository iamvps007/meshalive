import type { Metadata } from 'next';
import Script from 'next/script';
import WifiQrTool from './WifiQrTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Free Wi-Fi QR Code Generator — Scan to Connect Instantly | Meshalive' },
  description:
    'Generate free Wi-Fi QR codes. Let guests, customers, and employees scan to connect to your Wi-Fi network without typing long passwords. Works on iPhone & Android.',
  keywords: [
    'wifi qr code generator',
    'free wifi qr code',
    'scan to connect wifi qr code',
    'qr code for wifi password',
    'wifi password qr generator',
    'create wifi qr code',
    'guest wifi qr code maker',
    'printable wifi qr code standee',
  ],
  alternates: { canonical: 'https://meshalive.com/tools/wifi-qr-code-generator' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/wifi-qr-code-generator',
    title: { absolute: 'Free Wi-Fi QR Code Generator | Meshalive' },
    description: 'Instant Wi-Fi QR Code maker. Allow anyone to scan and join your Wi-Fi network without typing passwords.',
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Wi-Fi QR Code Generator | Meshalive',
    description: 'Generate scan-to-join Wi-Fi QR codes for home, office, and cafes. Free instant download.',
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: 'How does a Wi-Fi QR code work?',
    a: 'When you scan the QR code with an iPhone or Android camera, your phone reads the standard Wi-Fi protocol string (WIFI:S:MyNetwork;T:WPA;P:MyPassword;;) and automatically displays a prompt: "Join Network?". Tap it and your device connects in one second.',
  },
  {
    q: 'Does it work on both iOS and Android?',
    a: 'Yes. All modern smartphones running iOS 11+ and Android 9+ have built-in Wi-Fi QR scanning in their native camera apps without requiring any third-party scanner apps.',
  },
  {
    q: 'Is my Wi-Fi password sent to your servers?',
    a: 'No! The QR code is generated entirely inside your browser using client-side JavaScript. Your Wi-Fi network name and password never touch our servers or databases.',
  },
  {
    q: 'Can I use this for my cafe or hotel guest network?',
    a: 'Yes! Use our "Print Standee Card" button to print a clean, professional tabletop standee card to place on your tables, reception desk, or meeting room whiteboard.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Free Wi-Fi QR Code Generator',
      url: 'https://meshalive.com/tools/wifi-qr-code-generator',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Generate scan-to-connect Wi-Fi QR codes for homes, offices, hotels, and cafes without typing passwords.',
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
        id="wifi-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,80px) 16px clamp(32px,5vw,48px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#0284c7', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          📶 Free Wi-Fi Utility
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
          Free Wi-Fi QR Code Generator <br />
          <span style={{ color: '#0284c7' }}>Scan & Connect Instantly</span>
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#4b5563', margin: '0 auto 40px', maxWidth: 640, lineHeight: 1.6 }}>
          Never repeat your complex Wi-Fi password again. Create a printable QR code for guests, office visitors, and customers to connect in 1 second.
        </p>

        <WifiQrTool />
      </section>

      <hr style={S.divider} />

      {/* Benefits */}
      <section style={S.section}>
        <h2 style={S.h2}>Why Use a Wi-Fi QR Code?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 24 }}>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>☕ For Cafes & Restaurants</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Print a clean standee card on table tents or menus so customers connect effortlessly without bothering your staff.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>🏢 For Offices & Co-working</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Keep meeting rooms moving. Clients and visitors can scan from their seats to join guest networks in one tap.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>🏡 For Homes & Airbnb Hosts</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Frame it near your entryway or welcome book. Guests love the modern, seamless touch.
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
