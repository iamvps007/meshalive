import type { Metadata } from 'next';
import Script from 'next/script';
import UpiQrTool from './UpiQrTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Free UPI QR Code Generator with Amount & Name — GPay, PhonePe, Paytm | Meshalive' },
  description:
    'Generate free, printable UPI payment QR codes for your shop, freelancing, or website. Supports Google Pay, PhonePe, Paytm & BHIM with custom amounts & business names. No signup needed.',
  keywords: [
    'upi qr code generator',
    'free upi qr code generator',
    'upi qr code generator with amount',
    'phonepe qr code generator',
    'paytm qr code maker',
    'google pay qr code generator',
    'bhim upi qr code',
    'upi payment link generator',
    'printable upi qr code standee',
    'create upi qr code for shop',
    'upi qr code banaye',
  ],
  alternates: { canonical: 'https://meshalive.com/tools/upi-qr-code-generator' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/upi-qr-code-generator',
    title: { absolute: 'Free UPI QR Code Generator with Amount & Name | Meshalive' },
    description: 'Instant UPI Payment QR Code maker. Download printable high-res QR codes for PhonePe, Google Pay, Paytm & BHIM.',
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free UPI QR Code Generator with Amount & Name | Meshalive',
    description: 'Instant UPI Payment QR Code generator for Indian shops, businesses, and freelancers.',
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: 'How do I create a UPI QR code with a fixed amount?',
    a: 'Enter your UPI ID (VPA), your business or payee name, and specify the exact amount in Rupees. Our tool embeds the amount into the official NPCI UPI URI specifications (am=XX). When a customer scans the QR code, the amount is automatically pre-filled in their UPI app.',
  },
  {
    q: 'Which UPI apps can scan this QR code?',
    a: 'This QR code complies with the official National Payments Corporation of India (NPCI) UPI deep-linking standard. It works with all Indian UPI apps including Google Pay (GPay), PhonePe, Paytm, BHIM, Amazon Pay, Cred, and mobile banking apps.',
  },
  {
    q: 'Does Meshalive charge any commission or fee on payments?',
    a: 'No. Meshalive is 100% free and does not sit between your money. Customers transfer directly from their bank account to your bank account via standard peer-to-peer (P2P) or peer-to-merchant (P2M) UPI protocols with 0% fee.',
  },
  {
    q: 'Can I print this QR code for my retail shop counter?',
    a: 'Yes! Click "Print Standee" or "Download PNG" to get a high-resolution standee card that you can print, laminate, and place on your shop counter or restaurant table.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Free UPI QR Code Generator',
      url: 'https://meshalive.com/tools/upi-qr-code-generator',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      description: 'Generate free custom UPI payment QR codes compatible with all Indian UPI apps including Google Pay, PhonePe, Paytm, and BHIM.',
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
        id="upi-qr-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,80px) 16px clamp(32px,5vw,48px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#059669', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          ⚡ 100% Free UPI Payment Generator
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
          Free UPI QR Code Generator <br />
          <span style={{ color: '#2563eb' }}>With Custom Amount & Name</span>
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#4b5563', margin: '0 auto 40px', maxWidth: 640, lineHeight: 1.6 }}>
          Generate instant, printable payment QR codes for shops, freelance invoices, event tickets, and donations. Compatible with PhonePe, Google Pay, Paytm & all Indian banking apps.
        </p>

        {/* Interactive Tool Component */}
        <UpiQrTool />
      </section>

      <hr style={S.divider} />

      {/* How it Works */}
      <section style={S.section}>
        <h2 style={S.h2}>How to Generate and Use Your UPI QR Code</h2>
        <p style={{ fontSize: 16, color: '#4b5563', margin: '0 0 32px', lineHeight: 1.6 }}>
          Whether you run a local retail store, sell products via Instagram or WhatsApp, or invoice freelance clients, here is how you can accept payments in under 30 seconds:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          <div style={S.card}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#2563eb', marginBottom: 8 }}>01</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>Enter Your UPI ID</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Type your existing VPA/UPI ID from any app (e.g. <code>username@okaxis</code>, <code>9876543210@paytm</code>, or <code>merchant@ybl</code>).
            </p>
          </div>
          <div style={S.card}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#2563eb', marginBottom: 8 }}>02</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>Add Name & Amount</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Optionally set your shop name and a pre-defined payment amount so customers don't have to enter the price manually.
            </p>
          </div>
          <div style={S.card}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#2563eb', marginBottom: 8 }}>03</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>Download or Print</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Download the high-resolution PNG image for digital invoices, or hit "Print Standee" to put it right onto your payment counter.
            </p>
          </div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* Why Use Meshalive UPI Generator */}
      <section style={S.section}>
        <h2 style={S.h2}>Why Indian Businesses & Creators Use Meshalive</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24, marginTop: 24 }}>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>🔒 Direct Bank-to-Bank (0% Commission)</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Unlike payment gateways that deduct 2% to 3% transaction fees, standard UPI payments go straight from your customer's bank account to yours with zero deductions.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>⚡ Instant Scan with Any App</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Built according to the official NPCI specifications. Customers can scan with Google Pay, PhonePe, Paytm, BHIM, Cred, or any BHIM-enabled banking app.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>🖨️ Printable Tabletop Standee Format</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Designed to look clean, professional, and clear when printed. Includes trusted payment logos and merchant name for customer trust.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>🔗 Shareable UPI Payment Deep Link</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Copy the generated <code>upi://pay</code> link to send via WhatsApp, SMS, or embed inside emails for single-tap mobile checkout.
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
