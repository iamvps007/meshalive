import type { Metadata } from 'next';
import Script from 'next/script';
import PermanentQrTool from './PermanentQrTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Free Permanent QR Code Generator (No Sign-Up, No Expiration) | Meshalive' },
  description:
    'Generate 100% free permanent QR codes with no expiration date, no trial period, and no sign-up required. Unlimited scans forever for business cards, menus, stickers, and websites.',
  keywords: [
    'free permanent qr code',
    'free non expiring qr code generator',
    'free qr code generator no sign up no expiration',
    'free lifetime qr code generator',
    'permanent qr code generator',
    'qr code without expiration date',
    'unlimited scan qr code generator free',
    'create permanent qr code online',
    'lifetime valid qr code',
    'static qr code generator free',
  ],
  alternates: { canonical: 'https://meshalive.com/tools/permanent-qr-code-generator' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/permanent-qr-code-generator',
    title: { absolute: 'Free Permanent QR Code Generator — Never Expires, No Sign-Up | Meshalive' },
    description: 'Create high-resolution permanent QR codes with unlimited lifetime scans. 100% free, no credit card, no sign-up, no 14-day trial traps.',
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Permanent QR Code Generator (No Expiration) | Meshalive',
    description: 'Zero expiration date. Zero scan limits. 100% free permanent QR codes for print & digital.',
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: 'Do these QR codes really never expire?',
    a: 'Yes, 100%. Our tool generates direct static QR codes. The destination URL or data is encoded directly into the black-and-white pixel matrix itself. Because the scan does not rely on a middleman redirect server that can be shut down or paywalled, your QR code will work as long as the underlying destination exists.',
  },
  {
    q: 'Why do other QR code generators expire after 14 days?',
    a: 'Many commercial QR generators use a bait-and-switch tactic: they create a "dynamic" link that routes through their domain, and after 14 days they lock the link behind an expensive \$15–\$35/month recurring subscription. If you do not pay, the QR code on your printed business cards or restaurant tables stops working. Meshalive generates true permanent codes that never expire and never ask for a credit card.',
  },
  {
    q: 'Are there any limits on the number of scans?',
    a: 'No. Static QR codes have zero scan limits. They can be scanned 10 times or 10,000,000 times by anyone around the world without hitting a quota or triggering a paywall.',
  },
  {
    q: 'What resolution should I use for printing?',
    a: 'For small business cards or stickers, 500px is excellent. For restaurant table tents, flyers, or window decals, use 800px. For large signs, banners, or trade show displays, select 1200px to ensure crisp, razor-sharp edges without pixelation.',
  },
  {
    q: 'Can I track scan analytics on a permanent QR code?',
    a: 'If you want click and device analytics on a permanent code, simply paste a Meshalive short link (or any URL with Google Analytics UTM parameters) into the generator. You get lifetime permanent scannability plus full visitor analytics without risking trial expirations.',
  },
];

export default function PermanentQrCodePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Permanent QR Code Generator',
    url: 'https://meshalive.com/tools/permanent-qr-code-generator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    description: 'Free permanent QR code generator that never expires. No sign-up, no credit card, unlimited scans forever.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Meshalive',
      url: 'https://meshalive.com',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Script id="permanent-qr-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="permanent-qr-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ minHeight: '100vh', background: '#fafbfc', padding: '60px 20px 100px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                padding: '5px 14px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                color: '#16a34a',
                marginBottom: 16,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }} />
              100% Free Lifetime Validity · No Expiration Date
            </div>
            <h1
              style={{
                fontSize: 'clamp(28px, 4.5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#0f172a',
                lineHeight: 1.2,
                margin: '0 0 16px',
              }}
            >
              Free Permanent QR Code Generator
            </h1>
            <p
              style={{
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: '#64748b',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 620,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              No 14-day trial traps. No forced accounts. Create clean, high-resolution QR codes that work forever with unlimited scans.
            </p>
          </div>

          {/* Interactive Tool */}
          <PermanentQrTool />

          {/* Value Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
              marginTop: 48,
              marginBottom: 56,
            }}
          >
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: '#f0fdf4',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 14,
                }}
              >
                ∞
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Lifetime Validity</h3>
              <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                Direct static encoding means your code never breaks, even years after being printed on marketing collaterals.
              </p>
            </div>

            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: '#eff6ff',
                  color: '#0057ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 14,
                }}
              >
                HD
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>High-Res Vector Clarity</h3>
              <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                Download up to 1200px ultra high-definition PNGs engineered with Level H error correction for flawless optical readability.
              </p>
            </div>

            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: '#faf5ff',
                  color: '#9333ea',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 14,
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Zero Subscription Traps</h3>
              <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                No credit cards, no sign-ups, and no paywalls. Created by Meshalive to support founders, creators, and local businesses.
              </p>
            </div>
          </div>

          {/* Deep Guide Content */}
          <section
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 20,
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: 48,
              lineHeight: 1.7,
              color: '#334155',
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Why Do Most QR Code Generators Stop Working?
            </h2>
            <p>
              If you have ever printed a QR code on thousands of brochures, restaurant menus, product labels, or trade show stands only to find that it redirects to an error page demanding a monthly subscription, you have experienced the infamous <strong>QR trial paywall trap</strong>.
            </p>
            <p>
              Most top-ranking QR generators on search engines do not inform you that they are routing your traffic through proprietary short URLs. After a 14-day trial expires, those redirect servers purposefully disable the route until you enter payment information.
            </p>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginTop: 24, marginBottom: 12 }}>
              The Meshalive Permanent Difference: Static vs Dynamic
            </h3>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <strong>Static QR Codes (This Tool):</strong> Your exact target destination is converted directly into 2D binary modules. A user’s camera reads the data directly off the paper or screen with no intermediary server. It works offline, never expires, and cannot be intercepted.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Zero Maintenance:</strong> Once printed, you never have to renew an account, log in, or pay subscription fees.
              </li>
              <li>
                <strong>Level H Error Correction:</strong> Even if a printed code suffers up to 30% wear, dirt, or tear, the built-in Reed-Solomon error correction algorithm recovers the full data string instantly.
              </li>
            </ul>
          </section>

          {/* FAQ Accordion */}
          <section style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', textAlign: 'center', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 14,
                    padding: '20px 24px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>{faq.q}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
