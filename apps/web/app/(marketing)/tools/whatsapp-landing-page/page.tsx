import { Metadata } from 'next';
import WALandingTool from './WALandingTool';

export const metadata: Metadata = {
  title: 'Free WhatsApp Link Generator — Create Click-to-Chat Links',
  description: 'Create a WhatsApp click-to-chat link with a pre-filled message. Turn your WhatsApp number into a short clickable link for your Instagram bio, Google Business profile, website, and visiting cards. Free for Indian businesses.',
  keywords: ['WhatsApp link generator', 'WhatsApp click to chat link', 'wa.me link generator', 'WhatsApp Business link creator', 'WhatsApp link for Instagram bio', 'WhatsApp direct message link India', 'create WhatsApp link free', 'WhatsApp landing page', 'WhatsApp contact link', 'wa.me India'],
  openGraph: {
    title: 'Free WhatsApp Click-to-Chat Link Generator',
    description: 'Create a short WhatsApp link with pre-filled message for your business. Free, no app needed.',
    url: 'https://meshalive.com/tools/whatsapp-landing-page',
    siteName: 'Meshalive', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'WhatsApp Link Generator', description: 'Create a WhatsApp click-to-chat link with pre-filled message. Free for Indian businesses.' },
  alternates: { canonical: 'https://meshalive.com/tools/whatsapp-landing-page' },
};

const faqs = [
  { q: 'What is a WhatsApp click-to-chat link?', a: 'A WhatsApp click-to-chat link (wa.me/PHONE_NUMBER) opens a WhatsApp chat with a specific number when clicked — without the person needing to save your number first. You can add a pre-filled message so customers arrive with a ready-made opener like "Hi, I\'m interested in your product". This is essential for Indian SMBs that use WhatsApp as their primary customer channel.' },
  { q: 'How do I add my WhatsApp link to Instagram bio?', a: 'Generate your WhatsApp short link using this tool, then go to Instagram → Edit Profile → Website → paste the link. The short meshalive.com URL fits cleanly in the 30-character bio link limit and is easier to track clicks than a raw wa.me URL.' },
  { q: 'Should I use +91 with my Indian number?', a: 'Yes — always include the country code. For Indian numbers, use +91 followed by the 10-digit mobile number (e.g., +91 98765 43210). Our tool automatically adds the 91 prefix if you paste just the 10-digit number.' },
  { q: 'Can I use this for WhatsApp Business?', a: 'Yes. WhatsApp Business and personal WhatsApp both use the same wa.me link format. If you have WhatsApp Business set up with a catalog, automated replies, and a business profile, the click-to-chat link opens directly into that Business account.' },
  { q: 'What is a pre-filled WhatsApp message?', a: 'A pre-filled message is text that automatically appears in the WhatsApp compose box when someone clicks your link — they just tap Send. Use it to prompt the specific action you want: "Hi, I want to enquire about a bulk order", "Please send me your menu", or "I saw your ad and want more info". It removes friction and increases the chances of customers actually messaging you.' },
  { q: 'Why create a short WhatsApp link instead of sharing wa.me directly?', a: 'A short Meshalive link (meshalive.com/xyz) is easier to share verbally ("go to meshalive.com/myshop"), fits on print materials like flyers and visiting cards, looks professional, and lets you track how many people clicked it.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Meshalive WhatsApp Link Generator',
  url: 'https://meshalive.com/tools/whatsapp-landing-page',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Free WhatsApp click-to-chat link generator with pre-filled message support. Create a short WhatsApp link for your Indian business.',
  featureList: ['WhatsApp click-to-chat link', 'Pre-filled message support', 'Short URL creation', 'India +91 support', 'No WhatsApp app required to generate'],
};

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — Perfect for Indian businesses
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            WhatsApp Link Generator
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.88)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Create a click-to-chat WhatsApp link with a pre-filled message. Share on Instagram bio, Google Business, visiting cards, and websites. Free for Indian businesses.
          </p>
          <WALandingTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            WhatsApp is India's most important customer channel
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            India has 500+ million WhatsApp users — more than any other country. For small businesses, freelancers, and local shops, WhatsApp is the primary way customers reach out, ask questions, and place orders. A WhatsApp click-to-chat link makes it effortless for customers to start a conversation with a single tap — no need to save your number first. Add a pre-filled message to guide customers toward the action you want, and shorten the link so it fits cleanly on visiting cards, posters, and your Instagram bio.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'Instagram bio link', body: 'Add your WhatsApp short link to your Instagram bio to drive direct messages. Works better than a generic wa.me URL because it\'s trackable and looks professional.' },
              { title: 'Google Business Profile', body: 'Add your WhatsApp link to your Google Business listing as a website or booking URL. Customers who find you on Google Maps can message you instantly.' },
              { title: 'Visiting cards & flyers', body: 'Print a QR code of your WhatsApp link on the back of your visiting card. One scan starts a conversation — no number saving required.' },
              { title: 'Pre-filled enquiry messages', body: 'Set up different links for different products: each one opens WhatsApp with a pre-filled message specific to that item. Route enquiries automatically.' },
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
