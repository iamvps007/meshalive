import type { Metadata } from 'next'
import WhatsappLinkTool from './WhatsappLinkTool'

export const metadata: Metadata = {
  title: { absolute: 'Free WhatsApp Link Generator — Create Click-to-Chat Links | Meshalive' },
  description:
    'Generate a WhatsApp click-to-chat link or wa.me link for any phone number — free, instant, no signup. Add a pre-filled message for WhatsApp Business, ads, websites, and Instagram bios.',
  keywords: [
    'whatsapp link generator',
    'whatsapp click to chat',
    'wa.me link generator',
    'create whatsapp link',
    'whatsapp business link',
    'whatsapp chat link india',
    'generate whatsapp link',
    'whatsapp direct link',
    'whatsapp link maker',
    'click to chat whatsapp',
  ],
  alternates: {
    canonical: 'https://meshalive.com/tools/whatsapp-link-generator',
  },
  openGraph: {
    title: { absolute: 'Free WhatsApp Link Generator — Create Click-to-Chat Links | Meshalive' },
    description: 'Create WhatsApp click-to-chat links instantly. Free, no signup. Works for Indian (+91) and global numbers.',
    url: 'https://meshalive.com/tools/whatsapp-link-generator',
    siteName: 'Meshalive',
    type: 'website',
    images: [{ url: 'https://meshalive.com/og/whatsapp-link-generator.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: { absolute: 'Free WhatsApp Link Generator — Create Click-to-Chat Links | Meshalive' },
    description: 'Create WhatsApp click-to-chat links instantly. Free, no signup.',
    site: '@meshalive',
    images: ['https://meshalive.com/og/whatsapp-link-generator.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Meshalive WhatsApp Link Generator',
      description: 'Free WhatsApp click-to-chat link generator. Create wa.me links for any phone number with optional pre-filled messages. No signup required.',
      url: 'https://meshalive.com/tools/whatsapp-link-generator',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      provider: { '@type': 'Organization', name: 'Meshalive', url: 'https://meshalive.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a WhatsApp click-to-chat link?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A WhatsApp click-to-chat link (wa.me link) lets anyone start a WhatsApp chat with a phone number without saving it as a contact first. You can also pre-fill a message that appears in the chat box when they open it.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I create a WhatsApp link for my Indian business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enter your Indian mobile number with the +91 country code already selected, add an optional message, and click Generate. Your wa.me link will be ready to copy and share.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I shorten my WhatsApp link?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — wa.me links with pre-filled messages can get very long. Shortening them with Meshalive gives you a clean branded link and also lets you track how many people click it.',
          },
        },
      ],
    },
  ],
}

const INK = '#111111'
const MUTED = '#6b7280'
const HAIR = '#e5e7eb'
const GREEN = '#16a34a'

export default function WhatsappLinkGeneratorPage() {
  return (
    <div style={{ background: '#ffffff', color: INK }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '56px 32px 96px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 32, display: 'flex', gap: 8 }}>
          <a href="/tools" style={{ color: MUTED, textDecoration: 'none' }}>Tools</a>
          <span>→</span>
          <span>WhatsApp Link Generator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: GREEN, marginBottom: 16,
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
            Free Tool
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.15 }}>
            WhatsApp Link Generator
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.75, margin: '0 0 8px', maxWidth: 600 }}>
            Create a WhatsApp click-to-chat link for any phone number in seconds. Add a pre-filled message, share on your website, bio, visiting card, or anywhere.
          </p>
          <p style={{ fontSize: 13, color: '#9ca3af', margin: 0 }}>Free · No signup · Works for India (+91) and 190+ countries</p>
        </div>

        {/* Tool */}
        <div style={{ marginBottom: 64 }}>
          <WhatsappLinkTool />
        </div>

        {/* Article */}
        <article style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', maxWidth: 680 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '0 0 16px' }}>What is a WhatsApp click-to-chat link?</h2>
          <p>A WhatsApp click-to-chat link (formatted as <code style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '1px 6px', borderRadius: 3, fontSize: 14 }}>https://wa.me/91XXXXXXXXXX</code>) lets anyone open a WhatsApp chat with you instantly — without saving your number to their contacts first.</p>
          <p>When someone taps the link on their phone, WhatsApp opens automatically and a new conversation with your number starts. If you added a pre-filled message, it appears typed in the chat box — the user just has to press send.</p>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>How to create a WhatsApp link in 3 steps</h2>
          <ol style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Enter your phone number.</strong> Pick the country code, then type your number without the leading zero.</li>
            <li style={{ marginBottom: 12 }}><strong>Add a message.</strong> Pre-fill a sales, support, or booking message so the user sees the right prompt immediately.</li>
            <li style={{ marginBottom: 12 }}><strong>Copy and share the generated link.</strong> Add it to your website, Google Business Profile, Instagram bio, ads, QR codes, or email footer.</li>
          </ol>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Why Indian businesses love WhatsApp links</h2>
          <p>India has over 500 million WhatsApp users — more than any other country. For Indian SMBs, WhatsApp is the primary customer communication channel: orders, support, invoices, and follow-ups all happen there.</p>
          <p>Adding a WhatsApp link to your Google Business profile, Instagram bio, or website removes the biggest friction point in the customer journey: having to manually save a new number and then find it to start a chat. One tap and they're talking to you.</p>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Why shorten a WhatsApp link before sharing?</h2>
          <p>Raw wa.me URLs are fine for testing, but they become messy once you add a longer message parameter. For campaign links, a shortened URL is cleaner, easier to remember, and easier to fit into ads, flyers, bios, and SMS.</p>
          <p>Shortening your WhatsApp link with Meshalive also gives you another layer of measurement: you can see how many people clicked the link before the conversation started, which campaigns drove the most clicks, and which channels actually convert.</p>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>Where to add your WhatsApp link</h2>
          <ul style={{ paddingLeft: 20 }}>
            {[
              ['Google Business Profile', 'Customers searching for your business on Google can message you on WhatsApp in one click.'],
              ['Instagram & Facebook bio', 'Redirect your social followers directly to a WhatsApp conversation.'],
              ['Website header / footer', 'A persistent "Chat on WhatsApp" button converts visitors into leads.'],
              ['Email signature', 'Let email recipients jump to WhatsApp for faster responses.'],
              ['Visiting cards & brochures', 'Print a QR code or short link that opens WhatsApp — no number to type.'],
              ['Facebook / Instagram Ads', 'Use WhatsApp as the click destination for direct-response ads (WhatsApp Ads).'],
            ].map(([title, desc]) => (
              <li key={title} style={{ marginBottom: 12 }}><strong>{title}</strong> — {desc}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: '-0.02em', margin: '48px 0 16px' }}>FAQ</h2>
          <div style={{ border: `1px solid ${HAIR}`, borderRadius: 12, overflow: 'hidden' }}>
            {[
              { q: 'Does the person need to save my number to chat?', a: 'No — that\'s the whole point of a click-to-chat link. Anyone can start a conversation without adding your number to their contacts first.' },
              { q: 'Can I use this for WhatsApp Business?', a: 'Yes. The wa.me link works identically for both personal WhatsApp accounts and WhatsApp Business accounts.' },
              { q: 'The link is too long — how do I shorten it?', a: 'Once you generate your link above, sign up free on Meshalive to create a short branded link like msha.in/shop that also tracks every click.' },
              { q: 'Does it work outside India?', a: 'Yes — you can select any country code from the dropdown. The tool supports India (+91), USA (+1), UAE (+971), UK (+44), and many more.' },
            ].map((item, i, arr) => (
              <details key={i} style={{ borderBottom: i < arr.length - 1 ? `1px solid ${HAIR}` : 'none' }}>
                <summary style={{ padding: '16px 20px', fontSize: 15, fontWeight: 600, color: INK, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.q}
                  <span style={{ fontSize: 18, color: MUTED, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: '0 20px 16px', margin: 0, fontSize: 14, color: MUTED, lineHeight: 1.7 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </article>
        {/* Related tools */}
        <div style={{ marginTop:64, borderTop:'1px solid #e5e7eb', paddingTop:40 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:'#111', marginBottom:20, letterSpacing:'-0.01em' }}>Related free tools</h2>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                        <a href="/tools/url-shortener" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔗</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>URL Shortener</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Shorten your wa.me link before sharing</div>
              </div>
            </a>
            <a href="/tools/qr-code-generator" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>⬛</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>QR Code Generator</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Turn your WhatsApp link into a QR code</div>
              </div>
            </a>
            <a href="/tools/utm-builder" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>📊</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>UTM Builder</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Add UTM tracking to your links</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
