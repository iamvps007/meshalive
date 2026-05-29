import { Metadata } from 'next';
import AffiliateTool from './AffiliateTool';

export const metadata: Metadata = {
  title: 'Free Affiliate Link Cloaker — Shorten & Hide Affiliate URLs',
  description: 'Cloak and shorten your Amazon, Flipkart, Meesho, or any affiliate link for free. Replace long ugly URLs with clean short links. Track clicks and protect commissions. No signup required.',
  keywords: ['affiliate link cloaker', 'hide affiliate links free', 'affiliate URL shortener', 'cloak affiliate links', 'Amazon affiliate link shortener', 'Flipkart affiliate link cloaker', 'affiliate link tracker free', 'shorten affiliate links', 'clean affiliate URL', 'Amazon Associates link shortener India'],
  openGraph: {
    title: 'Free Affiliate Link Cloaker — Clean & Track Affiliate URLs',
    description: 'Cloak Amazon, Flipkart, or any affiliate link into a clean short URL. Free, with click tracking.',
    url: 'https://meshalive.com/tools/affiliate-link-cloaker',
    siteName: 'Meshalive', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Affiliate Link Cloaker', description: 'Shorten and cloak affiliate links from Amazon, Flipkart, Meesho and more. Free.' },
  alternates: { canonical: 'https://meshalive.com/tools/affiliate-link-cloaker' },
};

const faqs = [
  { q: 'What is affiliate link cloaking?', a: 'Affiliate link cloaking replaces a long, ugly affiliate URL (like amazon.in/dp/B09XYZ?tag=myid-21&linkCode=ogi...) with a clean, short URL (like meshalive.com/abc123). The short link redirects to your affiliate URL, keeping your commission tracking intact while looking professional in YouTube descriptions, Instagram bios, and WhatsApp messages.' },
  { q: 'Does cloaking affiliate links violate Amazon\'s terms?', a: 'Amazon Associates and most affiliate programs allow link shortening and cloaking as long as you disclose that links are affiliate links to your audience. What Amazon prohibits is using cloaking to hide the affiliate nature of the link from Amazon\'s tracking system — which this tool does not do. Your affiliate tag is preserved in the redirect.' },
  { q: 'Will I still get credit for purchases?', a: 'Yes. The cloaked link redirects through Meshalive to your original affiliate URL complete with your tracking tag. When a customer lands on Amazon, your associate tag is in the URL exactly as before. Commissions are tracked normally.' },
  { q: 'Why should I cloak my affiliate links?', a: 'Cloaked links look professional and trustworthy, get more clicks, are easier to remember, fit cleanly in YouTube video descriptions and Instagram bios, and can be updated if your affiliate URL changes — without updating every post where you\'ve shared the link.' },
  { q: 'Which affiliate programs work with this tool?', a: 'All major Indian affiliate programs: Amazon Associates (amazon.in), Flipkart Affiliate, Meesho, Myntra, Nykaa, ShareASale, Commission Junction, Impact, Involve Asia, and any other URL-based affiliate program. Simply paste your affiliate URL and cloak it.' },
];

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication',
        name: 'Meshalive Affiliate Link Cloaker', url: 'https://meshalive.com/tools/affiliate-link-cloaker',
        applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web',
        description: 'Free affiliate link cloaker and shortener. Replace ugly Amazon and Flipkart affiliate URLs with clean short links.',
      }) }} />

      <section style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — Works with Amazon, Flipkart & all affiliate programs
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Affiliate Link Cloaker
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Turn ugly Amazon, Flipkart, or any affiliate URL into a clean short link. Your commission tracking stays intact. Free with no signup.
          </p>
          <AffiliateTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Why cloak affiliate links?</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            A raw Amazon Associates link looks like: <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>https://www.amazon.in/dp/B09XYZ123/ref=nosim?tag=myassociateid-21&linkCode=ogi&th=1&psc=1</code>. That is 100+ characters that nobody wants to type, and it gets cut off in YouTube descriptions, Instagram bios, and WhatsApp messages. A cloaked link like <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 13 }}>meshalive.com/my-pick</code> looks professional, earns more trust, and gets more clicks — while your commission tracking works exactly the same.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'Amazon Associates India', body: 'Shorten amazon.in affiliate links with your associate tag intact. Perfect for YouTube video descriptions and Instagram story links.' },
              { title: 'Flipkart Affiliate', body: 'Cloak Flipkart affiliate URLs for cleaner sharing on social media, WhatsApp groups, and blog posts.' },
              { title: 'Meesho & Myntra', body: 'Works with all major Indian e-commerce affiliate programs. Paste any affiliate URL and get a clean short link.' },
              { title: 'Track your clicks', body: 'Every cloaked link includes click tracking — see how many people are clicking your affiliate links and optimize your content.' },
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
