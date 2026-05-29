import { Metadata } from 'next';
import VCardTool from './VCardTool';

export const metadata: Metadata = {
  title: 'Free Digital Business Card Generator — Create vCard QR Code Online',
  description: 'Create a free digital business card with a scannable QR code. Enter your name, phone, email, and company — get a vCard QR code you can print or share instantly. No app needed.',
  keywords: ['digital business card maker', 'vCard QR code generator', 'free visiting card QR code', 'contact QR code generator', 'digital visiting card India', 'business card QR code free', 'vCard generator online', 'scan to save contact QR', 'paperless business card', 'free digital name card'],
  openGraph: {
    title: 'Free Digital Business Card QR Generator',
    description: 'Create a scannable vCard QR code business card in seconds. Free, no app required.',
    url: 'https://meshalive.com/tools/vcard-generator',
    siteName: 'Meshalive',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Free Digital Business Card Generator', description: 'Create a vCard QR code business card instantly. Print or share digitally.' },
  alternates: { canonical: 'https://meshalive.com/tools/vcard-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Meshalive Digital Business Card Generator',
  url: 'https://meshalive.com/tools/vcard-generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web',
  description: 'Free online vCard QR code generator. Create a digital business card with scannable QR code — enter your contact details and get a downloadable QR code instantly.',
  featureList: ['vCard QR code generation', 'Downloadable PNG QR code', 'Includes name, phone, email, company', 'Works with all QR scanners', 'No app required'],
};

const faqs = [
  { q: 'What is a vCard QR code?', a: 'A vCard QR code encodes your contact information (name, phone, email, company, website) in the QR code format. When someone scans it with their phone camera, it prompts them to save your details directly to their contacts app — no typing required.' },
  { q: 'Does the QR code work on all phones?', a: 'Yes. vCard QR codes are a standard format supported by the native camera app on all modern iOS and Android devices. No third-party app is needed to scan and save the contact.' },
  { q: 'Can I print this QR code on my business card?', a: 'Absolutely. Download the PNG at 300×300px and place it on the back of your physical business card. For print, we recommend using a 2×2cm minimum size so it scans reliably. The QR code contains only your vCard data — it works forever without any server.' },
  { q: 'What is the difference between a vCard and a digital business card app?', a: 'Apps like HiHello or Blinq require both parties to have the app installed (or scan to a website). A vCard QR code works with any phone camera app with zero friction — it directly saves the contact to the phone\'s native address book. No app, no subscription, no friction.' },
  { q: 'Is this free?', a: 'Yes, completely free. No signup, no watermarks, no subscription. Generate and download as many QR code business cards as you need.' },
];

export default function Page() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#111111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Free Tool — No signup required
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Digital Business Card Generator
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Create a scannable vCard QR code in seconds. Anyone who scans it saves your contact instantly — no app needed. Free to generate and download.
          </p>
          <VCardTool />
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            The free digital visiting card for Indian professionals
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, margin: '0 0 48px', maxWidth: 720 }}>
            Paper visiting cards get lost, become outdated, and are expensive to reprint. A vCard QR code business card gives anyone your latest contact details instantly — they scan it, their phone prompts them to save your contact, done. No app installation, no account, no recurring subscription. Perfect for networking events, trade shows, WhatsApp Business profiles, email signatures, and your office reception desk.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { title: 'Works with all phone cameras', body: 'Native iOS and Android camera apps read vCard QR codes without any third-party app. Point, scan, save — takes 3 seconds.' },
              { title: 'Print on visiting cards', body: 'Download a 300×300px PNG and place it on the back of your physical card. Recommended minimum print size: 2×2cm.' },
              { title: 'Share on WhatsApp & email', body: 'Send the QR image in WhatsApp, add it to your email signature, or display it on screen at a meeting. Scanned contacts save directly to the phone.' },
              { title: 'No subscription, no watermarks', body: 'Unlike HiHello, Blinq, or Linktree, there is no paid tier required. Your QR code is a standalone file that works forever.' },
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
