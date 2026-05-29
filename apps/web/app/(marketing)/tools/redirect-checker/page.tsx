import { Metadata } from 'next';
import RedirectCheckerTool from './RedirectCheckerTool';

export const metadata: Metadata = {
  title: { absolute: 'Free Redirect Checker — Check 301, 302 & Redirect Chains | Meshalive' },
  description: 'Check any redirect chain instantly. See every 301, 302, 307, and 308 hop, final destination, and HTTP status code with a free online redirect checker.',
  keywords: ['redirect checker', 'URL redirect checker', '301 redirect checker', 'redirect chain checker', 'HTTP redirect tracer', 'follow redirects online', 'URL redirect tracker', 'check redirect chain free', 'redirect path checker'],
  openGraph: {
    title: 'Free Redirect Checker — Check 301, 302 & Redirect Chains | Meshalive',
    description: 'Instantly trace any URL redirect chain. See all 301, 302, 307, and 308 hops, status codes, and the final destination.',
    url: 'https://meshalive.com/tools/redirect-checker',
    siteName: 'Meshalive',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Free URL Redirect Checker', description: 'Trace any URL redirect chain instantly — see every hop and status code.' },
  alternates: { canonical: 'https://meshalive.com/tools/redirect-checker' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Meshalive Redirect Checker', url: 'https://meshalive.com/tools/redirect-checker',
      applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web',
      description: 'Free online URL redirect chain checker. Trace every HTTP redirect, see status codes, and find the final destination URL.',
      featureList: ['Trace full redirect chains', 'Show HTTP status codes', 'Detect redirect loops', 'Check 301 permanent redirects', 'Check 302 temporary redirects'],
    },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is a redirect checker?', acceptedAnswer: { '@type': 'Answer', text: 'A redirect checker follows a URL through all its HTTP redirects and shows you every hop — including the status code (301, 302, 307) and final destination. This helps diagnose SEO issues, broken links, and redirect chains.' } },
      { '@type': 'Question', name: 'How many redirects is too many?', acceptedAnswer: { '@type': 'Answer', text: 'Google recommends keeping redirect chains under 3 hops. Each redirect adds latency and dilutes PageRank. More than 5 redirects in a chain is a serious SEO and performance issue.' } },
      { '@type': 'Question', name: 'What is the difference between 301 and 302 redirects?', acceptedAnswer: { '@type': 'Answer', text: 'A 301 is a permanent redirect — search engines transfer full PageRank and update their index. A 302 is temporary — search engines keep the original URL indexed. Use 301 for URL migrations and 302 for A/B tests or maintenance pages.' } },
    ]},
  ],
};

const faqs = [
  { q: 'What is a URL redirect checker?', a: 'A redirect checker follows a URL through all its HTTP redirects and shows every hop including status codes (301, 302, 307) and the final destination. Use it to diagnose SEO issues, broken links, and unnecessary redirect chains that slow down your pages.' },
  { q: 'How many redirects is too many?', a: 'Google recommends keeping redirect chains under 3 hops. Each additional redirect adds ~100–300ms of latency and dilutes link equity (PageRank). More than 5 hops in a chain is a significant SEO and performance problem worth fixing immediately.' },
  { q: 'What is the difference between 301 and 302 redirects?', a: 'A 301 is a permanent redirect — search engines transfer full link equity and update their index to the new URL. A 302 is temporary — search engines keep the original URL indexed. Use 301 for permanent URL migrations, 302 for A/B tests or maintenance pages.' },
  { q: 'Why do URL shorteners use redirects?', a: 'URL shorteners like Bitly, TinyURL, and Meshalive store the destination URL in a database and redirect visitors via a 301 or 302. When you enter a short link like meshalive.com/abc into this tool, you\'ll see exactly where it redirects and how many hops it takes.' },
  { q: 'Can redirect chains hurt my SEO?', a: 'Yes. Google crawls redirect chains but caps the crawl depth, so deep chains may prevent your final page from being indexed. Each hop also dilutes PageRank. A single direct redirect is always best for SEO.' },
  { q: 'What does status 200 mean in a redirect chain?', a: 'Status 200 means "OK" — the server returned the final page content successfully. When you see 200 at the end of a redirect chain, the destination is live and accessible. A 404 at the end means the final URL doesn\'t exist.' },
];

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'linear-gradient(135deg, #0057ff 0%, #0041cc 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — No signup required
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            URL Redirect Checker
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Trace every redirect hop, see HTTP status codes, and find the final destination of any URL. Instant results — no signup needed.
          </p>
          <RedirectCheckerTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            What is a URL Redirect Checker?
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            A URL redirect checker follows a link through every HTTP redirect and shows the complete chain — from the starting URL to the final destination, including every intermediate hop and its status code. Marketers use it to audit link quality, SEO professionals use it to detect PageRank leakage, and developers use it to debug misconfigured web servers. Enter any URL — a short link, an affiliate URL, or a website — and instantly see the full redirect path.
          </p>

          <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.025em', margin: '0 0 16px' }}>
            When to use a redirect checker
          </h2>
          <ul style={{ paddingLeft: 20, color: '#374151', margin: '0 0 40px' }}>
            <li style={{ marginBottom: 10 }}><strong>Before publishing short links:</strong> verify the destination is correct and free from unnecessary hops.</li>
            <li style={{ marginBottom: 10 }}><strong>After a site migration:</strong> confirm old URLs redirect with clean 301s to the intended new pages.</li>
            <li style={{ marginBottom: 10 }}><strong>During SEO audits:</strong> catch chains, loops, mixed http/https behavior, and dead-end 404 destinations.</li>
            <li style={{ marginBottom: 10 }}><strong>For affiliate or partner links:</strong> inspect the full redirect path before sharing it with customers.</li>
          </ul>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'See every redirect hop', body: 'Trace 301 permanent, 302 temporary, 307 and 308 redirects. Know exactly how many hops your URL goes through before reaching the final page.' },
              { title: 'Detect redirect loops', body: 'Identify circular redirects (A → B → A) and dead-end chains that could trap visitors and search engine crawlers in an infinite loop.' },
              { title: 'Audit short links', body: 'Check where a Bitly, TinyURL, or Meshalive short link actually resolves to. Verify affiliate links point to the right destination before publishing.' },
              { title: 'Fix SEO redirect chains', body: 'Google caps redirect crawl depth. Long chains dilute PageRank and slow page load. Find and fix unnecessary hops to improve your search rankings.' },
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

          <div style={{ marginTop: 56, padding: '40px 40px', background: '#0057ff', borderRadius: 20, textAlign: 'center' }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>Create clean short links with Meshalive</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)', margin: '0 0 24px' }}>Shorten any URL and track every click with real-time analytics. Free forever.</p>
            <a href="/tools/url-shortener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: '#ffffff', color: '#0057ff', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
              Shorten a URL free →
            </a>
          </div>

          <div style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#111111', margin: '0 0 16px' }}>Related tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 12 }}>
              {[
                ['URL Shortener', '/tools/url-shortener', 'Create a short link, then test its redirect path here.'],
                ['Bitly Alternative', '/tools/bitly-alternative', 'Compare Meshalive short links and analytics with Bitly.'],
                ['Link Preview Checker', '/tools/link-preview-checker', 'Check how the final URL appears on social and messaging apps.'],
              ].map(([title, href, desc]) => (
                <a key={href} href={href} style={{ textDecoration: 'none', color: 'inherit', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '16px 18px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#111111', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{desc}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
