import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'URL Shortener Blog, Guides & Link Strategy | Meshalive' },
  description: 'Read Meshalive guides on URL shorteners, click tracking, QR codes, UTM parameters, Bitly alternatives, TinyURL alternatives, and link strategy.',
  alternates: { canonical: 'https://meshalive.com/blog' },
  openGraph: {
    title: 'URL Shortener Blog, Guides & Link Strategy | Meshalive',
    description: 'Guides and comparisons for short links, analytics, QR codes, UTM tracking, and branded URLs.',
    url: 'https://meshalive.com/blog',
  },
};


const PUBLISHED = [
  {
    slug: 'how-to-shorten-a-url',
    title: 'How to Shorten a URL in 3 Steps (Free, No Sign-Up)',
    excerpt: 'URL shortening takes under 10 seconds. No account required. Here is exactly how to do it, what the options mean, and when it matters which type of short link you use.',
    category: 'Guide',
    read: '5 min read',
  },
  {
    slug: 'url-shortener-for-whatsapp',
    title: 'Free URL Shortener for WhatsApp (Works in India)',
    excerpt: 'Long product URLs kill WhatsApp messages. Here is how to shorten any link for WhatsApp in under a minute — free, no account required — and track how many contacts clicked.',
    category: 'Social Media',
    read: '5 min read',
  },
  {
    slug: 'best-url-shortener-india',
    title: 'Best Free URL Shortener for India in 2026 (UPI, GST, INR)',
    excerpt: 'Compare the best URL shorteners for Indian businesses — INR pricing, UPI payments, GST invoicing, and WhatsApp analytics. One clear winner.',
    category: 'Guide',
    read: '7 min read',
  },
  {
    slug: 'bitly-alternatives',
    title: 'Best Bitly Alternatives in 2026 (Free URL Shorteners Compared)',
    excerpt: 'Bitly now limits you to 10 links per month for free. Here are the best alternatives that give you unlimited links and analytics for free.',
    category: 'Comparison',
    read: '8 min read',
  },
  {
    slug: 'tinyurl-alternative',
    title: 'Best TinyURL Alternatives in 2026',
    excerpt: 'TinyURL has no analytics and no custom slugs. Here are the best free alternatives that give you more control over your short links.',
    category: 'Comparison',
    read: '5 min read',
  },
  {
    slug: 'url-shortener-with-analytics',
    title: 'Best Free URL Shorteners with Analytics in 2026',
    excerpt: 'A short link without analytics is just a shorter URL. Here are the tools that actually tell you who clicked, from where, and on what device — for free.',
    category: 'Guide',
    read: '6 min read',
  },
  {
    slug: 'utm-parameters-guide',
    title: 'UTM Parameters: The Complete Guide for 2026',
    excerpt: 'UTM parameters tell Google Analytics exactly which campaign is driving traffic. This guide covers all 5 parameters with examples for every channel.',
    category: 'Analytics',
    read: '9 min read',
  },
  {
    slug: 'url-shortener-for-instagram',
    title: 'Best URL Shortener for Instagram Bio & Stories (Free)',
    excerpt: 'Instagram only lets you put one clickable link in your bio. Here is how to make that link count — and how to track exactly how many people are clicking it.',
    category: 'Social Media',
    read: '5 min read',
  },
  {
    slug: 'free-qr-code-generator',
    title: 'Free QR Code Generator for Any URL (No Sign-Up)',
    excerpt: 'Generate free dynamic QR codes for any URL. Download as PNG and use anywhere — print, web, packaging. Update the destination after printing without reprinting.',
    category: 'QR Codes',
    read: '5 min read',
  },
  {
    slug: 'url-shortener-api',
    title: 'Free URL Shortener API — Shorten Links Programmatically',
    excerpt: 'Use the Meshalive REST API to shorten URLs from any app, script, or automation. No credit card required. Works with curl, JavaScript, Python, and more.',
    category: 'Developer',
    read: '6 min read',
  },
  {
    slug: 'custom-short-url',
    title: 'How to Create a Custom Short URL for Free',
    excerpt: 'Instead of random characters, choose your own slug: msha.live/your-brand. Custom short URLs get more clicks and look more professional.',
    category: 'Guide',
    read: '4 min read',
  },
];

const UPCOMING = [
{ title: 'Custom domains vs shared short links — a decision guide for small businesses', category: 'Strategy', read: '7 min read' },
  { title: 'UTM parameters: the complete guide for digital marketers in 2026', category: 'Guide', read: '9 min read' },
];

export default function BlogPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <h1 className="display" style={{ fontSize: 'clamp(32px,4vw,48px)', margin: '0 0 16px', letterSpacing: '-0.025em' }}>Meshalive Blog</h1>
          <p style={{ fontSize: 17, color: '#6b7280', margin: '0 auto', maxWidth: 480, lineHeight: 1.65 }}>
            URL shortener guides, product updates, and link strategy.
          </p>
        </div>

        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 14, padding: '32px', textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Fresh guides for link growth</div>
          <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 24px', lineHeight: 1.65 }}>
            New tutorials, comparisons, and campaign playbooks are published here. Browse the live articles below, or subscribe for the next round of URL shortener and analytics guides.
          </p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto' }}>
            <input className="input" type="email" placeholder="you@company.com" style={{ flex: 1 }} />
            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Notify me</button>
          </div>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 24px', letterSpacing: '-0.01em' }}>All articles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          {PUBLISHED.map(article => (
            <a key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
              <div className="blog-card" style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0057ff', background: '#eff6ff', padding: '3px 10px', borderRadius: 999 }}>{article.category}</span>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>{article.read}</span>
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#111111', letterSpacing: '-0.01em', lineHeight: 1.4 }}>{article.title}</div>
                <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{article.excerpt}</div>
              </div>
            </a>
          ))}
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 24px', letterSpacing: '-0.01em' }}>Coming soon</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {UPCOMING.map(article => (
            <div key={article.title} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ background: 'rgba(196,90,57,0.12)', border: '1px solid rgba(196,90,57,0.2)', borderRadius: 6, padding: '2px 8px', fontSize: 11, fontWeight: 700, color: '#0057ff', letterSpacing: '0.06em' }}>{article.category}</span>
                  <span style={{ fontSize: 12, color: '#6b7280' }}>{article.read}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{article.title}</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', whiteSpace: 'nowrap', flexShrink: 0, background: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '4px 10px' }}>Coming soon</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
