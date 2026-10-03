import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: "Free URL Shortener Canada \u2014 Fast, CASL-Compliant Links | Meshalive" },
  description: "Canada's top free URL shortener for Toronto, Vancouver & Montreal businesses. CASL compliant, Montreal/Toronto edge servers, bilingual friendly, 100% free.",
  keywords: ["url shortener canada", "free url shortener canada", "link shortener canada", "casl compliant link shortener", "qr code generator canada"],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-canada' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/url-shortener-canada',
    title: { absolute: "Free URL Shortener Canada \u2014 Fast, CASL-Compliant Links | Meshalive" },
    description: "Canada's top free URL shortener for Toronto, Vancouver & Montreal businesses. CASL compliant, Montreal/Toronto edge servers, bilingual friendly, 100% free.",
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free URL Shortener Canada \u2014 Fast, CASL-Compliant Links | Meshalive",
    description: "Canada's top free URL shortener for Toronto, Vancouver & Montreal businesses. CASL compliant, Montreal/Toronto edge servers, bilingual friendly, 100% free.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Canada's Free, High-Speed URL Shortener",
      "url": "https://meshalive.com/tools/url-shortener-canada",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CAD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1420"
      },
      "description": "Canada's top free URL shortener for Toronto, Vancouver & Montreal businesses. CASL compliant, Montreal/Toronto edge servers, bilingual friendly, 100% free."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are Meshalive links compliant with CASL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Meshalive links are transparent and do not perform deceptive redirects or install unwanted software, fulfilling CASL and PIPEDA requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I track Canadian city clicks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Meshalive's analytics breakdown shows visitor clicks by country, city (Toronto, Vancouver, Montreal, Calgary), and device type in real time."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Meshalive cost in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meshalive is 100% free forever for unlimited short links, analytics, and QR codes."
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
          "name": "Canada",
          "item": "https://meshalive.com/tools/url-shortener-canada"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <main style={{ width: '100%', paddingBottom: 96, color: '#0f172a', fontFamily: 'inherit' }}>
      <Script
        id="url-shortener-canada-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ maxWidth: 920, margin: '0 auto', padding: 'clamp(48px, 8vw, 84px) 20px clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '5px 16px', fontSize: 13, fontWeight: 700, color: '#2563eb', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }}></span>
          Canada
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', fontWeight: 800, color: '#0f172a', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.035em' }}>
          Canada's Free, High-Speed URL Shortener<br />
          <span style={{ color: '#2563eb' }}>Toronto & Montreal Edge CDN with CASL Compliance</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', color: '#475569', margin: '0 auto 40px', maxWidth: 680, lineHeight: 1.65 }}>
          Empower your Canadian business with lightning-fast link shortening, dynamic QR codes, and click analytics. Fully compliant with Canada's Anti-Spam Legislation (CASL) with fast Canadian edge CDN routing.
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>CASL Compliant Architecture</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Clean redirects and transparent destination handling fully aligned with Canada's Anti-Spam Legislation (CASL) and PIPEDA.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Toronto & Montreal Edge CDN</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Direct edge routing via Canadian Internet exchanges for instantaneous link redirects across all 10 provinces and territories.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Bilingual Content Support</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Full UTF-8 support for accented French characters, multilingual campaign slugs, and localized landing pages.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Free Dynamic QR Codes</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Instant QR code generator for restaurant menus, real estate signboards, and business cards.</p>
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
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Are Meshalive links compliant with CASL?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes. Meshalive links are transparent and do not perform deceptive redirects or install unwanted software, fulfilling CASL and PIPEDA requirements.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Can I track Canadian city clicks?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes! Meshalive's analytics breakdown shows visitor clicks by country, city (Toronto, Vancouver, Montreal, Calgary), and device type in real time.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>How much does Meshalive cost in Canada?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Meshalive is 100% free forever for unlimited short links, analytics, and QR codes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
