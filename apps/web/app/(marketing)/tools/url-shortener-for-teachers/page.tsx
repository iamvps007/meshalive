import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: "Free URL Shortener for Teachers & Classrooms (Ad-Free & Safe) | Meshalive" },
  description: "Safe, ad-free URL shortener and QR code generator for teachers, professors & schools. Shorten Google Classroom, Zoom, and Canvas links with 0 ads.",
  keywords: ["url shortener for teachers", "classroom url shortener", "free link shortener for schools", "qr code generator for students", "education link shortener"],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-for-teachers' },
  openGraph: {
    type: 'website',
    url: 'https://meshalive.com/tools/url-shortener-for-teachers',
    title: { absolute: "Free URL Shortener for Teachers & Classrooms (Ad-Free & Safe) | Meshalive" },
    description: "Safe, ad-free URL shortener and QR code generator for teachers, professors & schools. Shorten Google Classroom, Zoom, and Canvas links with 0 ads.",
    siteName: 'Meshalive',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free URL Shortener for Teachers & Classrooms (Ad-Free & Safe) | Meshalive",
    description: "Safe, ad-free URL shortener and QR code generator for teachers, professors & schools. Shorten Google Classroom, Zoom, and Canvas links with 0 ads.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Safe, 100% Ad-Free URL Shortener for Teachers & Schools",
      "url": "https://meshalive.com/tools/url-shortener-for-teachers",
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
      "description": "Safe, ad-free URL shortener and QR code generator for teachers, professors & schools. Shorten Google Classroom, Zoom, and Canvas links with 0 ads."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Meshalive safe for school students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unlike typical free URL shorteners that display gambling or dating ads, Meshalive has ZERO ads, zero popups, and provides direct, clean redirects."
          }
        },
        {
          "@type": "Question",
          "name": "Can students scan the QR codes on school Chromebooks or iPads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! The QR codes work instantly with standard camera apps and QR scanners on iPads, Chromebooks, Android devices, and smartphones."
          }
        },
        {
          "@type": "Question",
          "name": "Can school districts use Meshalive for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Meshalive is completely free forever for teachers, educators, and schools with unlimited links and scans."
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
          "name": "Education & Classrooms",
          "item": "https://meshalive.com/tools/url-shortener-for-teachers"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <main style={{ width: '100%', paddingBottom: 96, color: '#0f172a', fontFamily: 'inherit' }}>
      <Script
        id="url-shortener-for-teachers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ maxWidth: 920, margin: '0 auto', padding: 'clamp(48px, 8vw, 84px) 20px clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, padding: '5px 16px', fontSize: 13, fontWeight: 700, color: '#2563eb', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }}></span>
          Education & Classrooms
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 54px)', fontWeight: 800, color: '#0f172a', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.035em' }}>
          Safe, 100% Ad-Free URL Shortener for Teachers & Schools<br />
          <span style={{ color: '#2563eb' }}>Clean Classroom Links & Printable QR Codes for Students</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', color: '#475569', margin: '0 auto 40px', maxWidth: 680, lineHeight: 1.65 }}>
          Never expose students to inappropriate popup ads on commercial link shorteners. Meshalive is 100% ad-free, COPPA-friendly, and perfect for shortening Google Classroom, Zoom, Canvas, and syllabus links for classroom handouts.
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
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Zero Ads & Student Safe</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Guaranteed 100% ad-free redirects. No popups, no interstitial timers, and no questionable sponsor links ever shown to students.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Instant Classroom Handout QR Codes</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Generate clean, scannable QR codes for worksheets, lab manuals, and syllabus handouts that students can scan on iPads and phones.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Easy-to-Type Custom Slugs</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Turn messy 100-character Google Drive and Canvas URLs into simple words like meshalive.com/p/bio-101 that students can type easily.</p>
          </div>
          <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: '#eff6ff', marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Class Assignment Traffic Verification</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.6 }}>Check click analytics to verify how many students actually accessed reading materials or video lectures before class.</p>
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
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Is Meshalive safe for school students?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes. Unlike typical free URL shorteners that display gambling or dating ads, Meshalive has ZERO ads, zero popups, and provides direct, clean redirects.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Can students scan the QR codes on school Chromebooks or iPads?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes! The QR codes work instantly with standard camera apps and QR scanners on iPads, Chromebooks, Android devices, and smartphones.</p>
          </div>
          <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>Can school districts use Meshalive for free?</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: 1.65 }}>Yes, Meshalive is completely free forever for teachers, educators, and schools with unlimited links and scans.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
