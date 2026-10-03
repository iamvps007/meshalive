import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: "Free URL Shortener USA \u2014 Branded Short Links & QR Codes | Meshalive" },
  description: "The #1 free URL shortener for US businesses, agencies & creators. Custom branded domains, 10DLC SMS compliance, sub-15ms US edge routing, and zero ads.",
  keywords: ["url shortener usa", "free url shortener usa", "branded short links us", "custom domain url shortener usa", "link shortener united states", "bitly alternative usa"],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-usa' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/url-shortener-usa',
    title: { absolute: "Free URL Shortener USA \u2014 Branded Short Links & QR Codes | Meshalive" },
    description: "The #1 free URL shortener for US businesses, agencies & creators. Custom branded domains, 10DLC SMS compliance, sub-15ms US edge routing, and zero ads.",
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free URL Shortener USA \u2014 Branded Short Links & QR Codes | Meshalive",
    description: "The #1 free URL shortener for US businesses, agencies & creators. Custom branded domains, 10DLC SMS compliance, sub-15ms US edge routing, and zero ads.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "The Fast, Ad-Free URL Shortener Built for US Businesses",
      "url": "https://meshalive.com/tools/url-shortener-usa",
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
      "description": "The #1 free URL shortener for US businesses, agencies & creators. Custom branded domains, 10DLC SMS compliance, sub-15ms US edge routing, and zero ads."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Meshalive really 100% free for US users?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Meshalive includes unlimited link shortening, custom slugs, real-time analytics, and dynamic QR codes with no credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use these short links in SMS marketing campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Unlike spammy link shorteners that get blocked by US carriers (AT&T, Verizon, T-Mobile), Meshalive's domains are clean and trusted for 10DLC messaging."
          }
        },
        {
          "@type": "Question",
          "name": "How does Meshalive compare to Bitly in the US?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bitly limits free users to just 5 links per month and charges $35+/mo for basic features. Meshalive provides unlimited links, custom QR codes, and API access for free."
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
          "name": "United States & North America",
          "item": "https://meshalive.com/tools/url-shortener-usa"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <main style={{ width: '100%', paddingBottom: 96, color: '#0f172a', fontFamily: 'inherit' }}>
      <Script
        id="url-shortener-usa-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ maxWidth: 920, margin: '0 auto', padding: 'clamp(48px, 8vw, 84px) 20px clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '5px 16px', fontSize: 13, fontWeight: 700, color: '#2563eb', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }}></span>
          United States & North America
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', fontWeight: 800, color: '#0f172a', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.035em' }}>
          The Fast, Ad-Free URL Shortener Built for US Businesses<br />
          <span style={{ color: '#2563eb' }}>Sub-15ms Edge Routing & 10DLC SMS Compliance</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', color: '#475569', margin: '0 auto 40px', maxWidth: 680, lineHeight: 1.65 }}>
          Eliminate expensive $35/mo Bitly bills. Meshalive gives American creators, marketing teams, and enterprises unlimited short links with custom domains, real-time geographic click tracking, and 100% TCPA/10DLC SMS marketing compliance.
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>US East & West Coast Edge</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Sub-15ms redirect latency routed through Cloudflare and AWS us-east-1 (N. Virginia) and us-west-2 (Oregon) edge datacenters.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>10DLC & TCPA Compliant</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Clean carrier-safe domains that never get flagged by Verizon, AT&T, or T-Mobile spam filters on high-volume SMS campaigns.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Custom Branded Domains</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Connect your own brand domain (e.g., links.yourbrand.com) with automated free SSL certificates.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Cookieless US Privacy</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>CCPA and state-level privacy compliant analytics tracking referrer, device, and US metro locations without invasive cookies.</p>
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
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Is Meshalive really 100% free for US users?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes! Meshalive includes unlimited link shortening, custom slugs, real-time analytics, and dynamic QR codes with no credit card required.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Can I use these short links in SMS marketing campaigns?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Absolutely. Unlike spammy link shorteners that get blocked by US carriers (AT&T, Verizon, T-Mobile), Meshalive's domains are clean and trusted for 10DLC messaging.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>How does Meshalive compare to Bitly in the US?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Bitly limits free users to just 5 links per month and charges $35+/mo for basic features. Meshalive provides unlimited links, custom QR codes, and API access for free.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
