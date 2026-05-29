import { Metadata } from 'next';
import DeepLinkTool from './DeepLinkTool';

export const metadata: Metadata = {
  title: 'Free Deep Link Generator — Open URLs Directly in Mobile Apps',
  description: 'Generate deep links for Amazon, YouTube, Instagram, Twitter, WhatsApp, and LinkedIn. Create iOS and Android app deep links that open content directly in the native app instead of the browser. Free tool.',
  keywords: ['deep link generator', 'app deep link creator', 'open link in app', 'Amazon app deep link', 'YouTube deep link', 'Instagram deep link', 'universal link generator', 'iOS deep link', 'Android deep link', 'intent URL generator'],
  openGraph: {
    title: 'Free Deep Link Generator — Open URLs in Mobile Apps',
    description: 'Generate iOS and Android deep links for Amazon, YouTube, Instagram, and more. Free tool, no signup.',
    url: 'https://meshalive.com/tools/deep-link-generator',
    siteName: 'Meshalive', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Deep Link Generator', description: 'Create iOS & Android deep links for any major app. Free.' },
  alternates: { canonical: 'https://meshalive.com/tools/deep-link-generator' },
};

const faqs = [
  { q: 'What is a deep link?', a: 'A deep link is a URL that opens a specific page or content directly inside a mobile app, instead of opening a web browser. For example, instead of opening amazon.in in Chrome, a deep link opens the Amazon app directly on the product page. Deep links provide a faster, better user experience for mobile visitors.' },
  { q: 'What is the difference between a deep link and a universal link?', a: 'A deep link uses a custom URL scheme (like amzn:// or vnd.youtube://) that only works if the app is installed. A universal link (iOS) or App Link (Android) is a regular https:// URL that opens the app if installed, or falls back to the website if not. Universal links are more reliable for marketing campaigns.' },
  { q: 'How do I use a deep link in my campaign?', a: 'Create a Meshalive short link pointing to your deep link URL, then share that short link in your WhatsApp campaign, Instagram bio, or email. When users click on Android, they get the Android deep link. For cross-platform use, use the web fallback URL — it will open the app on most devices through the browser\'s app association.' },
  { q: 'Do deep links work for Amazon affiliate marketing in India?', a: 'Yes. Amazon\'s native app deep links (amzn://dp/ASIN) open the Amazon India app directly on the product page. For affiliate marketers, this dramatically improves the purchase experience — customers are already logged in to the app with saved payment methods, leading to higher conversion rates.' },
  { q: 'What if the user does not have the app installed?', a: 'Custom scheme deep links (amzn://, vnd.youtube://) fail silently if the app is not installed. Always provide a web fallback URL — the standard https:// web version of the page — so users without the app still reach the content. Consider using a short link that detects the device and routes accordingly.' },
];

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication',
        name: 'Meshalive Deep Link Generator', url: 'https://meshalive.com/tools/deep-link-generator',
        applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web',
        description: 'Free deep link generator for Amazon, YouTube, Instagram, Twitter, WhatsApp and LinkedIn. Generate iOS and Android deep links instantly.',
        featureList: ['Amazon deep links', 'YouTube deep links', 'Instagram deep links', 'Twitter/X deep links', 'iOS and Android support'],
      }) }} />

      <section style={{ background: 'linear-gradient(135deg, #0057ff 0%, #7c3aed 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — Amazon, YouTube, Instagram & more
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Deep Link Generator
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Generate iOS and Android deep links that open content directly in the native app. Supports Amazon, YouTube, Instagram, Twitter, WhatsApp, and LinkedIn.
          </p>
          <DeepLinkTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Why use deep links?</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            Mobile users spend 90% of their time in apps, not browsers. When you send someone a regular https:// link in WhatsApp, it opens in Chrome — even if they have the Amazon or YouTube app installed. A deep link bypasses the browser entirely and opens the content directly in the native app, where users are already logged in with saved preferences. For affiliate marketers, this directly translates to higher conversion rates because customers reach the checkout with their saved payment methods already loaded.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'Better user experience', body: 'Deep links open apps directly, skipping the browser. Users are already logged in, get native performance, and have a faster path to completing the action.' },
              { title: 'Higher conversion rates', body: 'Amazon deep links improve purchase conversion by 2–3× compared to web links because users are already logged in with saved payment methods in the app.' },
              { title: 'Affiliate marketing in India', body: 'Critical for Amazon Associates and Flipkart affiliates sharing links on WhatsApp groups. App opens mean faster checkouts and more commissions.' },
              { title: 'iOS & Android support', body: 'Generate separate deep link formats for iOS (URL schemes) and Android (Intent URLs). Both platforms are covered with a single tool.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', margin: '0 0 10px' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.025em', margin: '0 0 28px' }}>FAQ</h2>
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
