import type { Metadata } from 'next'
import Link from 'next/link'
import InvoiceGeneratorTool from './InvoiceGeneratorTool'

export const metadata: Metadata = {
  title: {
    absolute: 'Free In-Browser Invoice Generator — No Signup, No Watermark | Meshalive',
  },
  description:
    'Create, customize, and download professional vector PDF invoices directly in your browser. 100% client-side privacy, zero signup, no watermarks, and embedded payment QR codes (UPI, PayPal, Stripe). Free forever on Meshalive.',
  keywords: [
    'free invoice generator',
    'in browser invoice maker',
    'free invoice generator no sign up',
    'invoice generator without watermark',
    'invoice generator with payment qr code',
    'pdf invoice maker online',
    'freelance invoice generator free',
    'gst invoice generator online',
    'vat invoice generator',
    'client side invoice generator',
    'receipt generator free',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/invoice-generator',
  },
  openGraph: {
    title: {
      absolute: 'Free In-Browser Invoice Generator — No Signup, No Watermark | Meshalive',
    },
    description:
      'Generate professional PDF invoices with zero sign up and zero watermark. 100% client-side private with integrated payment QR codes. Free forever.',
    url: 'https://meshalive.com/tools/invoice-generator',
    siteName: 'Meshalive',
    type: 'website',
    images: [
      {
        url: 'https://meshalive.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free In-Browser Invoice Generator by Meshalive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      absolute: 'Free In-Browser Invoice Generator — No Signup, No Watermark | Meshalive',
    },
    description:
      'Create and download crisp PDF invoices instantly. 100% private, client-side, zero signup, and no subscription paywalls.',
    site: '@meshalive',
    images: ['https://meshalive.com/og-image.png'],
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
      name: 'Meshalive Free In-Browser Invoice Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'A 100% client-side, zero-telemetry invoice and receipt maker. Create itemized invoices with live tax/VAT/GST math, custom logos, payment QR codes (UPI, PayPal, Stripe), and export to crisp vector PDF without registering an account.',
      url: 'https://meshalive.com/tools/invoice-generator',
      provider: {
        '@type': 'Organization',
        name: 'Meshalive',
        url: 'https://meshalive.com',
      },
      featureList: [
        '100% client-side execution — financial data never touches external servers',
        'Direct vector PDF download via browser print engine (no raster blur)',
        'Built-in Payment QR Code generation for instant UPI, PayPal, or Stripe checkout',
        'Automatic subtotal, discounts, multi-currency, and tax calculations',
        'Zero forced account signups, zero watermarks, zero monthly subscription paywalls',
        'Local storage auto-save remembers business profile and active drafts',
        'Shareable invoice URLs via client-side hash encoding',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this invoice generator truly 100% free with no watermarks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Unlike Wave, Canva, or InvoiceSimple that lock PDF downloads behind monthly subscriptions or inject intrusive watermarks, Meshalive is 100% free forever. You get full access to vector PDF downloads, custom logos, and payment QR codes with zero paywalls.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my financial or client data get sent to your servers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Never. The Meshalive Invoice Generator runs 100% locally in your web browser using client-side JavaScript. Your client names, billing addresses, line items, and bank details are never transmitted over the internet or stored on our servers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the integrated Payment QR Code work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can choose between UPI (for Indian bank accounts via GPay, PhonePe, Paytm), PayPal.me, Stripe payment links, or custom checkout URLs. The tool renders a high-contrast QR code directly on the printed invoice so your client can scan it with their phone camera and pay immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my invoice data be saved if I close the browser tab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Your active draft and your business profile (including logo, tax ID, and address) are automatically persisted in your browsers private localStorage. When you return to the page, your information is instantly restored.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I download the invoice as a PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Click the "Download / Print PDF" button in the top toolbar. Your browsers native print dialog will open with print styling pre-applied. Simply select "Save as PDF" as the destination and click Save. The result is a crisp, vector-quality PDF document formatted for standard A4 or US Letter paper.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I generate Tax Invoices, Receipts, or Quotes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can switch the document header between INVOICE, TAX INVOICE, RECEIPT, PROFORMA INVOICE, and QUOTE / ESTIMATE with one click in the Document Setup panel.',
          },
        },
      ],
    },
  ],
}

export default function InvoiceGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0d1117] text-[#e6edf3] selection:bg-blue-600 selection:text-white">
        
        {/* Hero Section (Hidden on Print) */}
        <section className="no-print pt-14 pb-8 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <span>🛡️ 100% Client-Side Privacy</span>
            <span className="text-neutral-600">•</span>
            <span>Zero Server Storage</span>
            <span className="text-neutral-600">•</span>
            <span>Zero Watermarks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Free In-Browser Invoice Generator
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Create, customize, and download clean vector PDF invoices in seconds.
            Built for freelancers, contractors, and agencies tired of subscription paywalls, forced sign-ups, and watermarks.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> No registration or card needed
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Vector-crisp PDF export
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Scan-to-pay QR codes included
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Multi-currency & VAT/GST math
            </div>
          </div>
        </section>

        {/* Interactive Tool Component */}
        <InvoiceGeneratorTool />

        {/* Informational & SEO Content Guide (Hidden on Print) */}
        <section className="no-print max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16 border-t border-neutral-800/80 mt-12">
          
          {/* Comparison Table: Meshalive vs Competitors */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Freelancers Choose Meshalive Over Paid Invoicing Apps
            </h2>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Mainstream invoicing platforms like Wave, Canva, and InvoiceSimple have steadily locked core features behind $16–$35 monthly subscriptions. Here is how Meshalive compares:
            </p>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/60">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="bg-neutral-800/80 text-xs font-semibold uppercase text-neutral-400 border-b border-neutral-700">
                  <tr>
                    <th className="py-3 px-4">Feature</th>
                    <th className="py-3 px-4 text-emerald-400 font-bold">Meshalive</th>
                    <th className="py-3 px-4 text-neutral-400">Wave Accounting</th>
                    <th className="py-3 px-4 text-neutral-400">Canva / Adobe</th>
                    <th className="py-3 px-4 text-neutral-400">Traditional SaaS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-xs sm:text-sm">
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Monthly Cost</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">$0 Forever</td>
                    <td className="py-3 px-4 text-neutral-400">$16 – $20 / mo</td>
                    <td className="py-3 px-4 text-neutral-400">$13 / mo Pro</td>
                    <td className="py-3 px-4 text-neutral-400">$15 – $40 / mo</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Account Signup Required</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">None (Instant)</td>
                    <td className="py-3 px-4 text-neutral-400">Mandatory</td>
                    <td className="py-3 px-4 text-neutral-400">Mandatory</td>
                    <td className="py-3 px-4 text-neutral-400">Mandatory</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Financial Privacy</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">100% In-Browser</td>
                    <td className="py-3 px-4 text-neutral-400">Cloud Database</td>
                    <td className="py-3 px-4 text-neutral-400">Cloud Database</td>
                    <td className="py-3 px-4 text-neutral-400">Cloud Database</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Watermarks on PDF</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">Zero Watermarks</td>
                    <td className="py-3 px-4 text-neutral-400">No (Paid Tier)</td>
                    <td className="py-3 px-4 text-neutral-400">Brand Watermark</td>
                    <td className="py-3 px-4 text-neutral-400">Watermarked on Free</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Payment QR Code Integration</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">Included (UPI, Stripe, PayPal)</td>
                    <td className="py-3 px-4 text-neutral-400">Only Wave Payments</td>
                    <td className="py-3 px-4 text-neutral-400">Manual Setup</td>
                    <td className="py-3 px-4 text-neutral-400">Requires Addon</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">PDF Export Engine</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">Native Vector Print Engine</td>
                    <td className="py-3 px-4 text-neutral-400">Server PDF Render</td>
                    <td className="py-3 px-4 text-neutral-400">Raster/Canvas Export</td>
                    <td className="py-3 px-4 text-neutral-400">Server PDF Render</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Core Feature Deep-Dive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-lg">
                🔒
              </div>
              <h3 className="text-base font-bold text-white">Total Privacy Architecture</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Your client list, project hourly rates, bank account numbers, and GSTIN/VAT records never touch an external database. All computations and renders happen within your local browser sandbox.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-lg">
                ⚡
              </div>
              <h3 className="text-base font-bold text-white">Scan-to-Pay QR Codes</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Accelerate invoice settlements. Clients can simply scan the embedded QR code with their mobile device to trigger instant UPI bank transfers, PayPal payments, or direct Stripe checkout sessions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg">
                📄
              </div>
              <h3 className="text-base font-bold text-white">Vector-Sharp PDF Quality</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We leverage native browser vector print styling (`@media print`) instead of blurry HTML5 canvas snapshots. Text remains selectable, crisp, and perfectly scaled for physical printers or digital archival.
              </p>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">How to Create and Download an Invoice in 60 Seconds</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-neutral-300 leading-relaxed pl-2">
              <li>
                <strong className="text-white">Configure Your Business Details:</strong> Enter your company name, address, tax identification (GSTIN, VAT, or EIN), and optionally upload your company logo.
              </li>
              <li>
                <strong className="text-white">Add Billed Client Info:</strong> Provide your client's name, billing address, and contact email.
              </li>
              <li>
                <strong className="text-white">Itemize Services or Products:</strong> Add line items with descriptions, hours or quantities, and unit rates. Subtotals and balances update in real-time.
              </li>
              <li>
                <strong className="text-white">Configure Adjustments:</strong> Add optional discounts, shipping fees, or regional tax rates (such as 18% GST or 20% VAT).
              </li>
              <li>
                <strong className="text-white">Enable Scan-to-Pay QR:</strong> Toggle on the Payment QR Code to let clients scan and pay via UPI, PayPal, or Stripe directly from their phones.
              </li>
              <li>
                <strong className="text-white">Export to PDF:</strong> Click "Download / Print PDF" to save a vector-crisp PDF document or print directly to paper.
              </li>
            </ol>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  q: 'Is there any limit to how many invoices I can create?',
                  a: 'No. You can create an unlimited number of invoices, estimates, and receipts completely free. There are no monthly quotas, trial periods, or subscription gates.',
                },
                {
                  q: 'Does it support international currencies?',
                  a: 'Yes. You can issue invoices in USD ($), EUR (€), GBP (£), INR (₹), CAD (CA$), AUD (AU$), SGD (S$), AED (AED), JPY (¥), and more with real-time formatting.',
                },
                {
                  q: 'Can I remove the Meshalive attribution footer?',
                  a: 'Yes. In the "Notes & Terms" section, there is an easy toggle to disable the footer credit. We believe in providing truly open utilities without holding users hostage.',
                },
                {
                  q: 'How do I save my company info so I do not retype it next time?',
                  a: 'Click the "Save Business Profile" button in the top action bar. Your details and logo will be stored securely in your browsers local storage and automatically loaded whenever you return.',
                },
                {
                  q: 'Can I share an invoice draft with a colleague or client?',
                  a: 'Yes! Click "Share Live Link". The invoice state is encoded directly into a shareable URL hash. Anyone who opens the link will see the complete invoice loaded in their browser without touching any database.',
                },
                {
                  q: 'Can I generate cash receipts or quotes instead of invoices?',
                  a: 'Yes. Use the "Doc Type" dropdown in the Document Setup card to change the header to RECEIPT, QUOTE, PROFORMA INVOICE, or TAX INVOICE.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Tools Interlinking */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
            <h3 className="text-base font-bold text-white">Explore More Free Utilities from Meshalive</h3>
            <p className="text-xs text-neutral-400">
              Clean, fast, client-side web utilities built for modern builders and freelancers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <Link
                href="/tools/upi-qr-code-generator"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all text-xs block group"
              >
                <div className="font-semibold text-white group-hover:text-blue-400 mb-1 flex items-center gap-1.5">
                  <span>⚡</span> UPI QR Code Generator
                </div>
                <div className="text-neutral-400 text-[11px]">
                  Printable payment standees & deep links for GPay, PhonePe & Paytm.
                </div>
              </Link>

              <Link
                href="/tools/permanent-qr-code-generator"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all text-xs block group"
              >
                <div className="font-semibold text-white group-hover:text-blue-400 mb-1 flex items-center gap-1.5">
                  <span>♾️</span> Permanent QR Code Maker
                </div>
                <div className="text-neutral-400 text-[11px]">
                  Non-expiring high-resolution QR codes with zero scan limits.
                </div>
              </Link>

              <Link
                href="/tools/utm-builder"
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all text-xs block group"
              >
                <div className="font-semibold text-white group-hover:text-blue-400 mb-1 flex items-center gap-1.5">
                  <span>📊</span> UTM Parameter Builder
                </div>
                <div className="text-neutral-400 text-[11px]">
                  Tag campaign URLs with GA4 source, medium & campaign parameters.
                </div>
              </Link>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
