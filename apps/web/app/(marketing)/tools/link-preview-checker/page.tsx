import { Metadata } from 'next';
import LinkPreviewTool from './LinkPreviewTool';

export const metadata: Metadata = {
  title: 'Link Preview Checker — See How Your URL Looks on WhatsApp, Twitter & LinkedIn',
  description: 'Check how your URL looks when shared on WhatsApp, Twitter, and LinkedIn. Preview OG tags, meta image, title and description. Fix missing Open Graph tags instantly. Free tool.',
  keywords: ['link preview checker', 'OG tag checker', 'open graph checker', 'WhatsApp link preview', 'social media preview checker', 'meta tag checker', 'og:image checker', 'link preview generator', 'Twitter card checker', 'Facebook link preview'],
  openGraph: {
    title: 'Link Preview Checker — WhatsApp, Twitter & LinkedIn',
    description: 'See exactly how your URL looks when shared on social media. Check OG tags, preview cards, and fix missing meta tags.',
    url: 'https://meshalive.com/tools/link-preview-checker',
    siteName: 'Meshalive',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Link Preview Checker', description: 'Preview how any URL looks on WhatsApp, Twitter, and LinkedIn.' },
  alternates: { canonical: 'https://meshalive.com/tools/link-preview-checker' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Meshalive Link Preview Checker',
  url: 'https://meshalive.com/tools/link-preview-checker',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Free online Open Graph and social media preview checker. See how any URL looks when shared on WhatsApp, Twitter, and LinkedIn.',
  featureList: ['WhatsApp link preview', 'Twitter card preview', 'LinkedIn preview', 'OG tag score', 'Missing meta tag detection'],
};

const faqs = [
  { q: 'What are Open Graph tags?', a: 'Open Graph (OG) tags are HTML meta tags that control how your URL appears when shared on social media and messaging apps. They define the title, description, image, and site name shown in link preview cards on WhatsApp, Twitter, Facebook, LinkedIn, and Slack.' },
  { q: 'Why does my link look bad when shared on WhatsApp?', a: 'WhatsApp uses og:title, og:description, and og:image to generate link previews. If these tags are missing or incorrect, WhatsApp shows a generic preview or no image. Use this checker to see exactly what WhatsApp will display and fix missing tags.' },
  { q: 'What size should my og:image be?', a: 'The recommended og:image size is 1200×630 pixels (1.91:1 ratio). Twitter cards display best at 1200×628px. Use a JPG or PNG under 8MB. Images smaller than 200×200px may not display at all on some platforms.' },
  { q: 'How do I add Open Graph tags to my website?', a: 'Add meta tags inside your HTML <head> section: <meta property="og:title" content="Your Title"> and <meta property="og:description" content="Your description">. If you use Next.js, WordPress, or Webflow, there are built-in SEO settings or plugins that handle this automatically.' },
  { q: 'What is a Twitter Card?', a: 'Twitter Cards are similar to Open Graph tags but specific to Twitter/X. Use twitter:card (set to "summary_large_image" for a big image preview), twitter:title, twitter:description, and twitter:image. If these are absent, Twitter falls back to OG tags.' },
];

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — No signup required
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Link Preview Checker
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            See exactly how your URL looks when shared on WhatsApp, Twitter, and LinkedIn. Check Open Graph tags and fix missing previews instantly.
          </p>
          <LinkPreviewTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            What is an Open Graph Checker?
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            When you share a URL on WhatsApp, Twitter, LinkedIn, or Facebook, these platforms read special HTML tags — called Open Graph tags — to build the preview card. The og:title, og:description, og:image, and og:site_name tags control what users see. If these tags are missing or wrong, your links show up as plain text or with a broken image, killing click-through rates. This free tool fetches any URL and shows you the exact preview card across three major platforms, along with a score and list of missing tags to fix.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'WhatsApp preview', body: 'See the exact thumbnail card WhatsApp generates when someone shares your link in a chat. Critical for viral sharing in Indian WhatsApp groups.' },
              { title: 'Twitter / X card', body: 'Check your twitter:card and twitter:image tags. A large image card gets 3× more engagement than a simple summary card.' },
              { title: 'LinkedIn preview', body: 'LinkedIn uses og:image and og:title for professional link shares. Important for B2B content and founder updates.' },
              { title: 'OG tag score', body: 'Get a 0–100 score based on which Open Graph tags are present. See exactly which tags are missing and what to add to improve your score.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', margin: '0 0 10px' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.025em', margin: '0 0 28px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                <summary style={{ padding: '18px 24px', fontSize: 15, fontWeight: 600, color: '#111111', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.q}<span style={{ fontSize: 20, color: '#6b7280', fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <p style={{ padding: '0 24px 18px', margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.75 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
