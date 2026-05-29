import type { Metadata } from 'next'
import QrCodeTool from './QrCodeTool'

export const metadata: Metadata = {
  title: { absolute: 'Free QR Code Generator — Create & Download QR Codes | Meshalive' },
  description:
    'Generate QR codes for any URL, text, or phone number — free, instant, no signup. Download as PNG. Sign up to track QR code scans with analytics.',
  keywords: [
    'qr code generator',
    'free qr code generator',
    'qr code maker',
    'create qr code',
    'qr code generator online',
    'free qr code',
    'qr code download',
    'qr code creator',
    'generate qr code',
    'qr code for website',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/qr-code-generator',
  },
  openGraph: {
    title: { absolute: 'Free QR Code Generator — Create & Download QR Codes | Meshalive' },
    description:
      'Generate QR codes for any URL, text, or phone number — free, instant, no signup. Download as PNG and track scans with analytics.',
    url: 'https://meshalive.com/tools/qr-code-generator',
    siteName: 'Meshalive',
    type: 'website',
    images: [
      {
        url: 'https://meshalive.com/og/qr-code-generator.png',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator by Meshalive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Free QR Code Generator — Create & Download QR Codes | Meshalive' },
    description:
      'Generate QR codes for any URL, text, or phone number — free, instant, no signup. Download as PNG and track scans with analytics.',
    site: '@meshalive',
    images: ['https://meshalive.com/og/qr-code-generator.png'],
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
      '@type': 'SoftwareApplication',
      name: 'Meshalive QR Code Generator',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      description:
        'Free online QR code generator. Create QR codes for URLs, text, phone numbers. Download as PNG instantly — no signup required.',
      url: 'https://meshalive.com/tools/qr-code-generator',
      provider: {
        '@type': 'Organization',
        name: 'Meshalive',
        url: 'https://meshalive.com',
      },
      featureList: [
        'Generate QR codes for any URL or text',
        'Download as high-resolution PNG',
        'Multiple size options (200px–500px)',
        'Generated in browser — private and instant',
        'Track scans with analytics on paid plans',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A QR (Quick Response) code is a two-dimensional barcode that can store URLs, text, phone numbers, and other data. Smartphones can scan QR codes with the camera app to instantly open links or read information — no app required on modern devices.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I create a free QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Using Meshalive\'s free QR code generator: (1) Enter your URL or text in the input field above. (2) Click "Generate QR Code". (3) Download the PNG image. No account or signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I download the QR code as an image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. After generating your QR code, click the "Download PNG" button to save a high-resolution PNG file to your device. The image is suitable for print, digital, and social media use.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do QR codes expire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Static QR codes — which encode a URL or text directly — never expire and work forever. Dynamic QR codes (available on paid Meshalive plans) use a short redirect link, and will stop working if the underlying link is deactivated or the subscription lapses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I track QR code scans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To track how many times your QR code is scanned — and see data on geography, device type, and time — sign up for a free Meshalive account. Create a tracked short link first, generate a QR code for that short link, and every scan appears in your analytics dashboard.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should a QR code be for printing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For reliable scanning, printed QR codes should be at least 2 cm × 2 cm (roughly 0.8 inches). For posters, banners, or product packaging, use 3–5 cm or larger. Always test the printed code with multiple devices before mass printing. Download at 400px or 500px for the best print quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are QR codes safe to scan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'QR codes generated by reputable tools that point to your own URLs are safe. However, always verify the destination URL before sharing a QR code received from unknown sources, as QR codes can point to malicious websites. Meshalive-generated QR codes display the destination URL transparently.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a static and a dynamic QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A static QR code encodes the destination URL directly in the image — it cannot be changed after creation. A dynamic QR code uses a short redirect link so the destination can be updated without reprinting the code, and it supports analytics like scan counts, device types, and geolocation. Meshalive offers dynamic QR codes on paid plans.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Meshalive',
          item: 'https://meshalive.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tools',
          item: 'https://meshalive.com/tools',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'QR Code Generator',
          item: 'https://meshalive.com/tools/qr-code-generator',
        },
      ],
    },
  ],
}

export default function QrCodeGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '48px 20px 80px',
          color: '#111111',
        }}
      >
        {/* Page heading */}
        <div style={{ marginBottom: '12px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'color-mix(in srgb, var(--pulse) 15%, transparent)',
              color: '#0057ff',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '4px',
              marginBottom: '16px',
            }}
          >
            Free Tool
          </span>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Free QR Code Generator
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '580px',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            Create a QR code for any URL, text, or phone number in seconds.
            Download as PNG — no signup, no watermark, no expiry.
          </p>
        </div>

        {/* Interactive tool */}
        <QrCodeTool />

        {/* ── SEO Content ── */}

        {/* How to create a QR code */}
        <section style={{ marginTop: '72px' }}>
          <h2
            className="display"
            style={{
              fontSize: '26px',
              fontWeight: 700,
              marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}
          >
            How to Create a QR Code in 3 Steps
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                step: '1',
                title: 'Enter your URL or text',
                body: 'Paste any website link, plain text, phone number (tel:+919876543210), or email address into the input field. There is no character limit for text inputs.',
              },
              {
                step: '2',
                title: 'Choose a size and generate',
                body: 'Select your preferred output size (200 px to 500 px). Click "Generate QR Code" — the image is created instantly in your browser with no data sent to our servers.',
              },
              {
                step: '3',
                title: 'Download and share',
                body: 'Click "Download PNG" to save the QR code. Use it on business cards, posters, product packaging, social media, email signatures, or anywhere you want a scannable link.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'color-mix(in srgb, var(--fg) 4%, transparent)',
                  border: '1px solid var(--line-c)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#0057ff',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section style={{ marginTop: '64px' }}>
          <h2
            className="display"
            style={{
              fontSize: '26px',
              fontWeight: 700,
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}
          >
            Popular QR Code Use Cases
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#6b7280',
              marginBottom: '28px',
              lineHeight: 1.6,
            }}
          >
            QR codes bridge the physical and digital world. Here are the most
            common ways businesses and creators use them.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                icon: '💼',
                title: 'Business Cards',
                body: 'Add a QR code to your business card that opens your LinkedIn profile, portfolio, or contact page. Recipients scan instead of typing long URLs — zero friction.',
              },
              {
                icon: '🍽️',
                title: 'Restaurant Menus',
                body: 'Replace printed menus with QR codes on every table. Update your menu digitally without reprinting. A dynamic QR code (on paid plans) lets you swap menus seasonally.',
              },
              {
                icon: '📦',
                title: 'Product Packaging',
                body: 'Link customers to setup guides, warranty registration, product demos, or reorder pages directly from the packaging. Reduces support queries and increases repeat purchases.',
              },
              {
                icon: '📱',
                title: 'WhatsApp & Instagram',
                body: 'Share QR codes in your WhatsApp status or Instagram stories linking to special offers, new product drops, or sign-up pages. Offline customers can scan from a printed flyer too.',
              },
              {
                icon: '🎟️',
                title: 'Events & Conferences',
                body: 'Use QR codes on banners, stage backdrops, and lanyards to link to the event schedule, speaker bios, feedback forms, or after-party details.',
              },
              {
                icon: '💳',
                title: 'Payment Links',
                body: 'Generate a QR code for your Razorpay or UPI payment link. Customers at your stall, kiosk, or reception desk can pay instantly by scanning — no cash, no terminal.',
              },
            ].map((uc) => (
              <div
                key={uc.title}
                style={{
                  background: 'color-mix(in srgb, var(--fg) 4%, transparent)',
                  border: '1px solid var(--line-c)',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>
                  {uc.icon}
                </div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {uc.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    lineHeight: 1.65,
                  }}
                >
                  {uc.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* QR codes for business */}
        <section style={{ marginTop: '64px' }}>
          <h2
            className="display"
            style={{
              fontSize: '26px',
              fontWeight: 700,
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}
          >
            QR Codes for Business: Analytics, Tracking, and Dynamic QR
          </h2>
          <div
            style={{
              fontSize: '15px',
              color: '#6b7280',
              lineHeight: 1.75,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p>
              A free, static QR code is great for getting started — but growing
              businesses need more. When you generate a QR code through a
              Meshalive short link, every scan is tracked. You get a real-time
              count of how many people scanned your code, which city they were
              in, what device they used, and when they scanned it.
            </p>
            <p>
              <strong style={{ color: '#111111' }}>
                Static vs. Dynamic QR codes:
              </strong>{' '}
              The free QR code tool above creates <em>static</em> QR codes —
              the destination URL is baked into the image. If you need to update
              the link later (say, your menu changes or a campaign URL changes),
              you must reprint the code. A <em>dynamic</em> QR code uses a
              Meshalive short link as the encoded URL. You can change where the
              link redirects at any time from your dashboard — the physical QR
              code on your flyers and packaging stays the same.
            </p>
            <p>
              <strong style={{ color: '#111111' }}>
                Analytics that matter for Indian SMBs:
              </strong>{' '}
              Meshalive analytics show scan volume by hour (great for knowing
              peak engagement times), city-level geo data (know if your Pune
              flyer campaign is working vs. your Mumbai one), device breakdown
              (Android vs. iOS — important for app install campaigns), and
              referrer source. All data is available for 90 days on the free
              plan and indefinitely on paid plans.
            </p>
            <p>
              <strong style={{ color: '#111111' }}>
                Bulk QR codes for agencies:
              </strong>{' '}
              If you manage campaigns for multiple clients, Meshalive&apos;s
              Growth and Business plans support team workspaces, bulk link
              creation via CSV import, and per-link QR code generation at scale.
              Each workspace has its own analytics and custom domain.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginTop: '64px' }}>
          <h2
            className="display"
            style={{
              fontSize: '26px',
              fontWeight: 700,
              marginBottom: '28px',
              letterSpacing: '-0.01em',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              {
                q: 'What is a QR code?',
                a: 'A QR (Quick Response) code is a two-dimensional barcode that encodes information — most commonly a URL — in a grid of black and white squares. Modern smartphones can scan QR codes directly from the camera app without a separate reader. QR codes can store website URLs, plain text, phone numbers, email addresses, SMS messages, Wi-Fi credentials, and more.',
              },
              {
                q: 'How do I create a free QR code online?',
                a: 'Use the generator at the top of this page. Paste your URL or enter any text, choose a size, and click "Generate QR Code". Your QR code is ready to download in under a second. No account required, no watermarks, and there is no limit on how many you create.',
              },
              {
                q: 'Can I download the QR code as an image file?',
                a: 'Yes. After generating, click "Download PNG" to save the QR code as a high-resolution PNG image. The downloaded file has a white background, which is required for QR codes to scan correctly on all readers. For vector formats (SVG, PDF) suitable for large-format print, those are available on Meshalive paid plans.',
              },
              {
                q: 'Do QR codes created with this tool expire?',
                a: 'No. Static QR codes like the ones created by this free tool do not expire. The encoded URL or text is permanently stored in the image — there is no server or account keeping it alive. As long as the destination URL (the website you linked to) remains active, the QR code will work forever.',
              },
              {
                q: 'How can I track how many times my QR code has been scanned?',
                a: 'The free tool on this page creates static QR codes with no tracking. To track scans, create a free Meshalive account, shorten your destination URL into a Meshalive short link (e.g. mlv.in/yourlink), then generate a QR code for that short link. Every scan will appear in your analytics dashboard with count, device, city, and time data.',
              },
              {
                q: 'What size should I use for printing a QR code?',
                a: 'For business cards, use at least 200 px output and ensure the printed size is no smaller than 2 cm × 2 cm. For A4 flyers, 300–400 px works well. For large banners, posters, or outdoor signage, use the 500 px option and scale up in your design tool — QR codes are well-suited to enlargement since they use high-contrast geometry. Always test-scan the final design before printing in bulk.',
              },
              {
                q: 'Are QR codes safe to use?',
                a: 'QR codes are as safe as the URLs they point to. Codes you generate yourself for your own content are completely safe. Exercise caution when scanning QR codes from unknown sources — malicious codes can redirect to phishing sites. Meshalive displays destination URLs transparently, and our platform scans short links for known malicious destinations.',
              },
              {
                q: 'What is the difference between a static and a dynamic QR code?',
                a: 'A static QR code has the destination URL encoded directly in the image. It cannot be changed, and clicking data cannot be tracked. A dynamic QR code encodes a short redirect URL — the actual destination can be changed at any time from a dashboard without reprinting the code. Dynamic QR codes support analytics (scan counts, geo, device), are editable, and can be deactivated. Meshalive offers dynamic QR codes on Free (unlimited links, full analytics) and above.',
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: '1px solid var(--line-c)',
                  padding: '0',
                }}
              >
                <summary
                  style={{
                    padding: '18px 4px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    userSelect: 'none',
                  }}
                >
                  {item.q}
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#6b7280',
                      fontWeight: 300,
                      flexShrink: 0,
                      marginLeft: '12px',
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    padding: '0 4px 18px',
                    fontSize: '14px',
                    color: '#6b7280',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: '64px',
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--pulse) 12%, transparent), color-mix(in srgb, var(--pulse) 5%, transparent))',
            border: '1px solid color-mix(in srgb, var(--pulse) 30%, transparent)',
            borderRadius: '16px',
            padding: '48px 40px',
            textAlign: 'center',
          }}
        >
          <h2
            className="display"
            style={{
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '12px',
              letterSpacing: '-0.01em',
            }}
          >
            Track every QR scan with free analytics
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#6b7280',
              maxWidth: '500px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            Sign up free to get scan counts, city-level geo data, device
            breakdowns, and referrer analytics for every QR code and short link
            you create.
          </p>
          <a
            href="/register"
            className="btn btn-primary"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            Sign up free — no credit card required
          </a>
          <p
            style={{
              marginTop: '16px',
              fontSize: '13px',
              color: '#6b7280',
            }}
          >
            Free plan includes unlimited links, unlimited clicks, and full analytics.
            Free forever. Local billing available in 10+ currencies.
          </p>
        </section>

        {/* Related tools */}
        <section style={{ marginTop: '56px' }}>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            More free tools from Meshalive
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { label: 'URL Shortener', href: '/tools/url-shortener' },
              { label: 'UTM Builder', href: '/tools/utm-builder' },
              { label: 'Redirect Checker', href: '/tools/redirect-checker' },
              { label: 'Link Preview Checker', href: '/tools/link-preview-checker' },
            ].map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="btn btn-outline"
                style={{
                  textDecoration: 'none',
                  fontSize: '13px',
                }}
              >
                {t.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
