import type { Metadata } from 'next';
import Link from 'next/link';
import AmazonShortenerTool from './AmazonShortenerTool';

export const metadata: Metadata = {
  title: 'Free Amazon Affiliate Link Shortener & Cleaner - Boost CTR | Meshalive',
  description: 'Clean ugly Amazon URLs, remove tracking bloat, preserve your affiliate tag, and generate high-converting short links with QR codes. 100% free and Amazon TOS compliant.',
  keywords: [
    'amazon affiliate link shortener',
    'clean amazon link',
    'amazon associates url shortener',
    'shorten amazon link for youtube',
    'flipkart affiliate link generator',
    'e-commerce affiliate link cleaner',
    'amazon asin link shortener',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/amazon-affiliate-link-shortener',
  },
  openGraph: {
    title: 'Free Amazon Affiliate Link Shortener & URL Cleaner | Meshalive',
    description: 'Turn 400-character ugly Amazon links into clean, high-CTR short links with your Associates tracking tag intact.',
    url: 'https://meshalive.com/tools/amazon-affiliate-link-shortener',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'Does shortening Amazon links violate Amazon Associates Operating Agreement?',
    a: 'No, provided that it is clear to the user where the link leads and you do not mislead customers. Meshalive short links cleanly redirect directly to the canonical Amazon product page with your affiliate tag intact, fully complying with Amazon Associates policies.',
  },
  {
    q: 'How does the Amazon URL Cleaner work?',
    a: 'Amazon product URLs frequently contain hundreds of characters of bloated session identifiers, search query parameters (ref, qid, sr, crid, sprefix), and tracking cookies. Our tool strips all unnecessary parameters while keeping the exact product ASIN (10-digit ID) and your affiliate associate tag.',
  },
  {
    q: 'Can I use this for YouTube descriptions and Telegram channels?',
    a: 'Yes! YouTube descriptions and Telegram messages look much cleaner with short links. Long URLs often break across multiple lines on mobile screens, leading to 404 errors and lost commission. Meshalive links ensure 100% click delivery.',
  },
  {
    q: 'Does it work for Flipkart and other regional e-commerce stores?',
    a: 'Yes. Our tool cleans Flipkart URLs and preserves Flipkart affiliate IDs (affid), as well as stripping tracking cookies from generic e-commerce platforms.',
  },
  {
    q: 'Is this Amazon Affiliate Link Shortener free to use?',
    a: 'Yes, it is 100% free with unlimited link cleanups and short link generations. No account or credit card required.',
  },
];

export default function AmazonAffiliatePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Amazon Affiliate Link Shortener & Cleaner',
        url: 'https://meshalive.com/tools/amazon-affiliate-link-shortener',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Free tool to clean, optimize, and shorten Amazon Associates product links with QR code generator.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://meshalive.com' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://meshalive.com/tools' },
          { '@type': 'ListItem', position: 3, name: 'Amazon Affiliate Shortener', item: 'https://meshalive.com/tools/amazon-affiliate-link-shortener' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '40px 20px 80px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: '#64748b', marginBottom: 24 }}>
          <Link href="/" style={{ color: '#0f172a', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link href="/tools" style={{ color: '#0f172a', textDecoration: 'none' }}>Tools</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#ea580c', fontWeight: 600 }}>Amazon Affiliate Shortener</span>
        </nav>

        {/* Hero */}
        <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 14px',
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            color: '#c2410c',
            marginBottom: 16,
          }}>
            🛒 E-Commerce & Influencer Growth Tool
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4.5vw, 46px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}>
            Free Amazon Affiliate Link Shortener & Cleaner
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#475569', lineHeight: 1.6, margin: '0 auto' }}>
            Strip 300+ characters of ugly tracking bloat, preserve your Amazon Associates tag, and create high-converting short links for YouTube, Instagram, Telegram, and blogs.
          </p>
        </div>

        {/* Interactive Tool */}
        <AmazonShortenerTool />

        {/* Value Pillars */}
        <div style={{ marginTop: 72 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: 36, letterSpacing: '-0.02em' }}>
            Why Top Creators & Affiliates Clean Their Links
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>⚡</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>+34% Higher Click-Through Rates</h3>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Long links look suspicious and trigger spam filters on WhatsApp and Telegram. Clean branded short links look trustworthy and invite clicks.
              </p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🛡️</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>Amazon Associates Safe</h3>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Guarantees your <code style={{ background: '#f1f5f9', padding: '2px 5px', borderRadius: 4 }}>tag=</code> parameter is permanently preserved while removing broken session keys that invalidate commissions.
              </p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📱</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>Instant QR Code Included</h3>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Every shortened product link generates an on-screen QR code ready to drop into product reviews, video frames, and packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div style={{ marginTop: 64, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 20, padding: 'clamp(24px, 4vw, 40px)' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginBottom: 20 }}>
            How to Shorten an Amazon Affiliate Link in 3 Steps
          </h2>
          <ol style={{ paddingLeft: 20, color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
            <li><strong>Copy the product link:</strong> Grab any product URL from Amazon India (<code style={{ background: '#e2e8f0', padding: '1px 5px', borderRadius: 4 }}>amazon.in</code>) or international Amazon storefronts.</li>
            <li><strong>Paste & verify your tag:</strong> Paste into the cleaner above. If your URL already has an associate tag, it is detected automatically; otherwise, type your tag in the optional field.</li>
            <li><strong>Click Generate & Share:</strong> Copy the branded short link or download the product QR code for instant posting across social media.</li>
          </ol>
        </div>

        {/* FAQs */}
        <div style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: 32, letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((faq, idx) => (
              <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '20px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 64,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 20,
          padding: 'clamp(32px, 5vw, 48px)',
          textAlign: 'center',
          color: '#ffffff',
        }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800, marginBottom: 12 }}>
            Scale Your Affiliate Business with Custom Branded Links
          </h2>
          <p style={{ fontSize: 15, color: '#94a3b8', maxWidth: 600, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Connect your custom domain (e.g. <code style={{ color: '#fdba74' }}>deals.yourbrand.com</code>) and track real-time revenue, geolocation, and device analytics.
          </p>
          <Link
            href="/register"
            style={{
              display: 'inline-block',
              background: '#ea580c',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 15,
              padding: '12px 28px',
              borderRadius: 10,
              textDecoration: 'none',
            }}
          >
            Create Free Account →
          </Link>
        </div>
      </div>
    </>
  );
}
