import type { Metadata } from 'next';
import Script from 'next/script';
import YoutubeSubscribeTool from './YoutubeSubscribeTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Free YouTube Auto Subscribe Link Generator with Confirmation | Meshalive' },
  description:
    'Create an auto-subscribe link for your YouTube channel. Automatically prompts viewers to subscribe with sub_confirmation=1. Get a short link and QR code free.',
  keywords: [
    'youtube subscribe link generator',
    'youtube auto subscribe link generator',
    'create youtube subscribe link',
    'youtube sub confirmation 1',
    'youtube subscription link maker',
    'how to make a youtube auto subscribe link',
    'youtube channel subscribe link',
    'shorten youtube link',
  ],
  alternates: { canonical: 'https://meshalive.com/tools/youtube-subscribe-link-generator' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/youtube-subscribe-link-generator',
    title: { absolute: 'Free YouTube Auto Subscribe Link Generator | Meshalive' },
    description: 'Grow your YouTube channel faster. Generate auto-subscribe prompt links with sub_confirmation=1 and track clicks with free analytics.',
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Auto Subscribe Link Generator | Meshalive',
    description: 'Generate auto-subscribe links for your YouTube channel with sub_confirmation=1. Free short link & QR code.',
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: 'What does sub_confirmation=1 do on YouTube?',
    a: 'When you append ?sub_confirmation=1 to your YouTube channel URL, anyone who clicks the link on desktop is greeted with an automatic popup asking "Confirm Channel Subscription" before showing the channel page. This eliminates extra clicks and drastically increases subscription conversion rates.',
  },
  {
    q: 'Does the auto-subscribe link work on mobile phones?',
    a: 'On mobile web browsers, it prompts the subscription dialog. When opened inside the native YouTube mobile app, it directs users immediately to the channel header with a prominent Subscribe button.',
  },
  {
    q: 'Can I track how many people click my subscribe link?',
    a: 'Yes! Our tool automatically generates a short msha.live link with built-in analytics so you can track total clicks, geographic location, and device types for all your social media campaigns.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'YouTube Auto Subscribe Link Generator',
      url: 'https://meshalive.com/tools/youtube-subscribe-link-generator',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: 'Generate YouTube auto-confirmation subscription links and trackable short links to increase channel subscribers.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' } as React.CSSProperties,
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' } as React.CSSProperties,
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' } as React.CSSProperties,
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 } as React.CSSProperties,
  card: { padding: 24, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16 } as React.CSSProperties,
};

export default function Page() {
  return (
    <main style={S.page}>
      <Script
        id="yt-subscribe-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,80px) 16px clamp(32px,5vw,48px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#dc2626', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          ▶️ YouTube Growth Utility
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
          YouTube Auto Subscribe <br />
          <span style={{ color: '#dc2626' }}>Link & QR Code Generator</span>
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#4b5563', margin: '0 auto 40px', maxWidth: 640, lineHeight: 1.6 }}>
          Turn casual visitors into loyal subscribers. Automatically generate instant confirmation links, clean short URLs, and printable QR codes for your YouTube channel.
        </p>

        <YoutubeSubscribeTool />
      </section>

      <hr style={S.divider} />

      {/* Benefits */}
      <section style={S.section}>
        <h2 style={S.h2}>Why Every Creator Needs an Auto-Subscribe Link</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 24 }}>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>🚀 300% Higher Conversion Rate</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Standard channel links require users to manually search for the subscribe button. The confirmation popup prompts immediate action with a single tap.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>📊 Free Real-Time Click Analytics</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Every link generated with Meshalive comes with free click analytics. Monitor which platforms (Instagram, Twitter, TikTok, WhatsApp) drive your subscribers.
            </p>
          </div>
          <div style={S.card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>⬛ Instant YouTube Channel QR Code</h3>
            <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5 }}>
              Download a high-resolution QR code styled for YouTube to print on video end-cards, flyers, event passes, or business cards.
            </p>
          </div>
        </div>
      </section>

      <hr style={S.divider} />

      {/* FAQ */}
      <section style={S.section}>
        <h2 style={S.h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
          {FAQS.map((item, idx) => (
            <div key={idx} style={S.card}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: '#111827' }}>
                {item.q}
              </h3>
              <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
