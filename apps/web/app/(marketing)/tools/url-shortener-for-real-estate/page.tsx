import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: "Free URL Shortener for Real Estate Agents (MLS Links & QR Codes) | Meshalive" },
  description: "Create short links and dynamic QR codes for property listings, virtual 3D tours, and open house signs. Instant WhatsApp chat booking for realtors.",
  keywords: ["url shortener for real estate", "real estate link shortener", "qr code for real estate listings", "open house qr code", "realtor link in bio"],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-for-real-estate' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/url-shortener-for-real-estate',
    title: { absolute: "Free URL Shortener for Real Estate Agents (MLS Links & QR Codes) | Meshalive" },
    description: "Create short links and dynamic QR codes for property listings, virtual 3D tours, and open house signs. Instant WhatsApp chat booking for realtors.",
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free URL Shortener for Real Estate Agents (MLS Links & QR Codes) | Meshalive",
    description: "Create short links and dynamic QR codes for property listings, virtual 3D tours, and open house signs. Instant WhatsApp chat booking for realtors.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "URL Shortener & QR Codes for Real Estate Professionals",
      "url": "https://meshalive.com/tools/url-shortener-for-real-estate",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1420"
      },
      "description": "Create short links and dynamic QR codes for property listings, virtual 3D tours, and open house signs. Instant WhatsApp chat booking for realtors."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I update the listing URL after printing the yard sign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! When you use a custom slug or dynamic QR code, you can update the destination URL anytime without reprinting your flyers or signage."
          }
        },
        {
          "@type": "Question",
          "name": "How do real estate agents use this for open houses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Print a Meshalive QR code on an acrylic stand at the entrance. Visitors scan it to view the property digital brochure and contact you on WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Does it work for luxury property brochures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, download SVG vector QR codes that remain razor-sharp at any print resolution."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://meshalive.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools",
          "item": "https://meshalive.com/tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Real Estate & Property Brokers",
          "item": "https://meshalive.com/tools/url-shortener-for-real-estate"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <main style={{ width: '100%', paddingBottom: 96, color: '#0f172a', fontFamily: 'inherit' }}>
      <Script
        id="url-shortener-for-real-estate-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ maxWidth: 920, margin: '0 auto', padding: 'clamp(48px, 8vw, 84px) 20px clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '5px 16px', fontSize: 13, fontWeight: 700, color: '#2563eb', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }}></span>
          Real Estate & Property Brokers
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', fontWeight: 800, color: '#0f172a', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.035em' }}>
          URL Shortener & QR Codes for Real Estate Professionals<br />
          <span style={{ color: '#2563eb' }}>Turn MLS Listings & Open House Signs into Instant Inquiries</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', color: '#475569', margin: '0 auto 40px', maxWidth: 680, lineHeight: 1.65 }}>
          Turn long MLS listing URLs and 40-character Matterport 3D tour links into branded short links and high-res QR codes. Place them on yard signs, flyers, and WhatsApp status updates to capture more buyer leads.
        </p>

        {/* Embedded Interactive Shortener Tool */}
        <UrlShortenerTool />
      </section>

      {/* Features Grid */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 64px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#0f172a', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Engineered for Maximum Reliability & Conversion
          </h2>
          <p style={{ fontSize: '16px', color: '#64748b', margin: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Everything you need to shorten, organize, and analyze links at scale with zero cost.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Yard Sign & Flyer QR Codes</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Generate high-resolution vector QR codes ready for yard signs, open house sign-in sheets, and luxury glossy brochures.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>1-Tap WhatsApp Lead Capture</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Connect interested buyers directly to your mobile phone with a prefilled inquiry message via instant WhatsApp chat.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>MLS & Virtual Tour Cloaking</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Clean, memorable URLs for Zillow, Realtor.com, Matterport, and MLS links that look trustworthy in SMS and social posts.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Live Listing Traffic Stats</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Track exactly which flyers, yard signs, and social media posts drive the most buyer views and inquiries.</p>
          </div>
        </div>
      </section>

      {/* Trust & Comparison Banner */}
      <section style={{ maxWidth: 960, margin: '0 auto 64px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: 20, padding: 'clamp(32px, 5vw, 48px)', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Why Switch to Meshalive?</span>
            <h3 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 800, margin: '8px 0 12px', letterSpacing: '-0.02em' }}>
              Compare Meshalive vs Traditional Link Shorteners
            </h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0, maxWidth: 700, lineHeight: 1.6 }}>
              Legacy link shorteners cap you at 5 to 10 links per month and charge $35+/month for basic custom domains and click analytics. Meshalive provides enterprise-tier link infrastructure 100% free forever.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, borderTop: '1px solid #334155', paddingTop: 24 }}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#38bdf8' }}>Unlimited</div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 4 }}>Free short links with zero monthly caps</div>
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#38bdf8' }}>0 ms</div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 4 }}>Zero ad interstitials or redirect countdowns</div>
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#38bdf8' }}>$0 / mo</div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 4 }}>No credit card or recurring subscriptions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#0f172a', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
            Answers to common questions about Meshalive's free link infrastructure.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Can I update the listing URL after printing the yard sign?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes! When you use a custom slug or dynamic QR code, you can update the destination URL anytime without reprinting your flyers or signage.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>How do real estate agents use this for open houses?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Print a Meshalive QR code on an acrylic stand at the entrance. Visitors scan it to view the property digital brochure and contact you on WhatsApp.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Does it work for luxury property brochures?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes, download SVG vector QR codes that remain razor-sharp at any print resolution.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
