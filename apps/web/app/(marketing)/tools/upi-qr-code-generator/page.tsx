import type { Metadata } from 'next'
import Link from 'next/link'
import UpiQrTool from './UpiQrTool'

export const metadata: Metadata = {
  title: {
    absolute: 'Free UPI QR Code Generator — Create Printable Payment Standee & Links | Meshalive',
  },
  description:
    'Generate a free UPI payment QR code and printable table standee for Google Pay, PhonePe, Paytm, BHIM & Cred. Instant setup, zero transaction fees, no KYC, and optional fixed amounts. Free forever on Meshalive.',
  keywords: [
    'free upi qr code generator',
    'upi qr code maker online',
    'upi payment standee generator',
    'printable upi qr code for shop',
    'gpay phonepe paytm qr code generator',
    'create upi link with amount',
    'upi payment link generator',
    'free upi qr code for freelancers',
    'instant upi qr code india',
    'direct bank transfer qr code',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/upi-qr-code-generator',
  },
  openGraph: {
    title: {
      absolute: 'Free UPI QR Code Generator — Printable Payment Standee & Links | Meshalive',
    },
    description:
      'Generate instant UPI QR codes for GPay, PhonePe, Paytm, BHIM & Cred. Printable table standees, zero fees, no KYC, no signup. Free forever.',
    url: 'https://meshalive.com/tools/upi-qr-code-generator',
    siteName: 'Meshalive',
    type: 'website',
    images: [
      {
        url: 'https://meshalive.com/og/upi-qr-code-generator.png',
        width: 1200,
        height: 630,
        alt: 'Free UPI QR Code Generator by Meshalive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      absolute: 'Free UPI QR Code Generator — Printable Standees & Links | Meshalive',
    },
    description:
      'Create custom UPI payment QR codes and printable table tent cards. 100% free, zero transaction fees, instant setup.',
    site: '@meshalive',
    images: ['https://meshalive.com/og/upi-qr-code-generator.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Meshalive UPI QR Code & Standee Generator',
      applicationCategory: 'FinancialApplication',
      operatingSystem: 'Web',
      description:
        'Free online UPI payment QR code generator and printable standee creator. Compatible with Google Pay, PhonePe, Paytm, BHIM, and Cred. Generates instant NPCI deep links with zero transaction fees and zero KYC.',
      url: 'https://meshalive.com/tools/upi-qr-code-generator',
      provider: {
        '@type': 'Organization',
        name: 'Meshalive',
        url: 'https://meshalive.com',
      },
      featureList: [
        'Direct bank-to-bank UPI transfers via NPCI specification',
        'Printable payment standees and desk cards for retail shops and freelancers',
        'Pre-filled payment amount in INR',
        'Direct WhatsApp payment request link generator',
        'Compatible with Google Pay, PhonePe, Paytm, BHIM, Cred, and Amazon Pay',
        'Zero registration, zero merchant KYC, and zero transaction cuts',
        '100% client-side execution for data privacy',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does this UPI QR code work with Google Pay, PhonePe, and Paytm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The QR code adheres strictly to the National Payments Corporation of India (NPCI) unified payment interface specification (upi://pay). Customers can scan it using Google Pay, PhonePe, Paytm, BHIM, Cred, Amazon Pay, or any bank UPI app.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any transaction fees or payment deductions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Meshalive charges 0% fees. Unlike payment gateways like Razorpay or Cashfree that deduct 2% plus GST, UPI is a direct bank-to-bank protocol. 100% of the money sent by the customer goes directly into your linked bank account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pre-fill a fixed payment amount in the QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can enter an optional amount (in ₹ INR). When scanned, the customer will see the exact amount pre-filled and locked in their UPI app, making it ideal for set-price invoices, event tickets, or menu items.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I print a payment standee for my shop or counter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enter your UPI ID and merchant name, select your preferred color accent, and click "Print Standee". Our print layout isolates the desk card with official app badges (GPay, PhonePe, Paytm, BHIM, Cred) ready to cut and display on your counter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a merchant account or business KYC to use this?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. You can use any existing personal or business UPI ID (VPA) from any bank or app. No paperwork, GST registration, or merchant onboarding is required.',
          },
        },
      ],
    },
  ],
}

export default function UpiQrCodeGeneratorPage() {
  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          padding: '64px 24px 72px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              color: '#94a3b8',
              marginBottom: 24,
            }}
          >
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/tools" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Tools
            </Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>UPI QR Generator</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(5, 150, 105, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#34d399',
              padding: '6px 16px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            ⚡ Zero Transaction Fees • 100% Free Forever
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: '0 0 16px',
            }}
          >
            Free UPI QR Code &amp; Standee Generator
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              color: '#cbd5e1',
              maxWidth: 620,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Create scannable UPI payment QR codes and printable table tent standees in seconds.
            Works instantly with Google Pay, PhonePe, Paytm, BHIM &amp; Cred.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Container */}
      <section style={{ maxWidth: 1040, margin: '-40px auto 60px', padding: '0 20px' }}>
        <UpiQrTool />
      </section>

      {/* How it Works / Feature Guide */}
      <section
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '40px 24px 80px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '0 0 12px',
            }}
          >
            Why Switch from Heavy Payment Gateways to Direct UPI?
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            Traditional payment gateways take 2% to 3% cuts on every invoice and require business
            registration. Meshalive gives you direct peer-to-peer and merchant QR codes.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>🛡️</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>
              0% Commission &amp; Instant Settlement
            </h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.55, margin: 0 }}>
              Payment goes straight from your customer&apos;s bank account to yours. No 2–3 day settlement
              delays and zero gateway deductions.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>🖨️</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>
              Print-Ready Counter Standee
            </h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.55, margin: 0 }}>
              Click &ldquo;Print Standee&rdquo; to instantly output an immaculate table tent card
              formatted for shop counters, exhibition stalls, and freelance studios.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>💬</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>
              1-Click WhatsApp Payment Requests
            </h3>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.55, margin: 0 }}>
              Send clients pre-formatted payment messages on WhatsApp with your UPI details and a direct
              tap-to-pay link that opens directly on their phone.
            </p>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 20,
            padding: '36px 32px',
            marginBottom: 64,
          }}
        >
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 20px' }}>
            How to Create and Print Your UPI Payment QR Code
          </h3>
          <ol style={{ paddingLeft: 20, margin: 0, color: '#475569', lineHeight: 1.8 }}>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: '#0f172a' }}>Enter your UPI ID (VPA):</strong> Type your UPI address
              (such as <code>name@okhdfcbank</code>, <code>mobile@paytm</code>, or <code>business@ybl</code>).
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: '#0f172a' }}>Add Payee Name:</strong> Enter your name or store name as
              it will appear on the standee banner.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: '#0f172a' }}>Set Optional Amount:</strong> Enter a fixed amount in
              INR if you are generating a specific bill or leave blank for open customer payments.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: '#0f172a' }}>Download or Print:</strong> Choose your favorite color
              accent and click &ldquo;Download PNG&rdquo; for digital invoices or &ldquo;Print Standee&rdquo; for
              physical display.
            </li>
          </ol>
        </div>

        {/* Frequently Asked Questions */}
        <div>
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 24px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Which UPI apps are compatible with this QR code?',
                a: 'All NPCI-certified UPI applications in India work seamlessly, including Google Pay (GPay), PhonePe, Paytm, BHIM, Cred, Amazon Pay, Axis Mobile, HDFC PayZapp, and WhatsApp Pay.',
              },
              {
                q: 'Can customers tamper with the amount in a fixed QR code?',
                a: 'When an amount parameter (&am=...) is included in the NPCI UPI link, compliant UPI apps lock the payable amount in the payment confirmation screen to prevent payment discrepancies.',
              },
              {
                q: 'Is my banking or financial information safe?',
                a: 'Yes. All QR codes are generated 100% inside your browser using client-side JavaScript. No UPI IDs, transaction amounts, or personal customer data are ever transmitted to or stored on our servers.',
              },
              {
                q: 'Can I shorten my UPI payment link to track clicks?',
                a: 'Yes. You can copy the generated UPI link and paste it into the Meshalive URL shortener on our homepage to track clicks, geolocation, and referrer analytics completely free.',
              },
            ].map(f => (
              <div
                key={f.q}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 14,
                  padding: '20px 24px',
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
                  {f.q}
                </div>
                <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
