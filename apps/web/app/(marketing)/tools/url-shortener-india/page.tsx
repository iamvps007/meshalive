import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive | Meshalive' },
  description: 'Meshalive is built specifically for Indian businesses. UPI and RuPay payments, WhatsApp analytics, GST-compliant invoicing, and IST timezone by default. Fr',
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-india' },
  openGraph: { type:'website', url:'https://meshalive.com/tools/url-shortener-india', title:{ absolute: 'Meshalive | Meshalive' }, description:'Meshalive is built specifically for Indian businesses. UPI and RuPay payments, WhatsApp analytics, GST-compliant invoicing, and IST timezone by default. Fr', siteName:'Meshalive' },
};

const S = {
  page: { width:'100%', paddingBottom:80, color:'#111111', fontFamily:'inherit' } as React.CSSProperties,
  section: { maxWidth:860, margin:'0 auto', padding:'0 16px 56px' } as React.CSSProperties,
  h2: { fontSize:'clamp(22px,4vw,30px)', fontWeight:700, color:'#111111', margin:'0 0 10px', letterSpacing:'-0.02em' } as React.CSSProperties,
  divider: { border:'none', borderTop:'1px solid #e5e7eb', margin:'0 auto 56px', maxWidth:860 } as React.CSSProperties,
  card: { padding:24, background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:16 } as React.CSSProperties,
};

export default function Page() {
  return (
    <main style={S.page}>
      <section style={{ maxWidth:860, margin:'0 auto', padding:'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign:'center' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:999, padding:'4px 14px', fontSize:12, fontWeight:700, color:'#16a34a', letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:20 }}>
          Best URL Shortener in India
        </div>
        <h1 style={{ fontSize:'clamp(30px,5vw,52px)', fontWeight:800, color:'#111111', margin:'0 0 16px', lineHeight:1.1, letterSpacing:'-0.03em' }}>
          India's free URL shortener —<br />UPI, WhatsApp, GST invoices.
        </h1>
        <p style={{ fontSize:'clamp(16px,2.5vw,19px)', color:'#6b7280', maxWidth:580, margin:'0 auto 40px', lineHeight:1.65 }}>
          Meshalive is built specifically for Indian businesses. UPI and RuPay payments, WhatsApp analytics, GST-compliant invoicing, and IST timezone by default. Free forever.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Key features</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginTop:24 }}>
          <div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📱</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>WhatsApp-first analytics</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>See WhatsApp as a distinct traffic source in your analytics. Track which broadcasts drive the most clicks. Built for the way Indian SMBs actually do marketing.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🏷️</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>GST-compliant invoicing</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Every transaction generates a GST-compliant tax invoice with GSTIN, HSN code, and IGST/CGST/SGST breakdown. Downloadable from your billing dashboard.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>⚡</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Fast redirects from India</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Meshalive's infrastructure includes edge nodes optimized for low latency in India. Short link redirects typically complete in under 50ms from major Indian metros.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🌐</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Hindi & regional support (roadmap)</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Dashboard localization for Hindi, Tamil, Telugu, and Marathi is on the Meshalive roadmap. Currently the dashboard is in English.</p>
        </div>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>How Meshalive compares</h2>
        <div style={{ overflowX:'auto', borderRadius:16, border:'1px solid #e5e7eb', marginTop:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ borderBottom:'1px solid #e5e7eb' }}>
                <tr style={{ borderBottom:'1px solid #e5e7eb' }}><th style={{ padding:'14px 18px', textAlign:'left', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Feature</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#0057ff', fontWeight:700, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#eff6ff', whiteSpace:'nowrap' }}>Meshalive</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Bitly</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Linktree</th></tr>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Pricing in INR</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>UPI / RuPay</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>GST invoice</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>WhatsApp analytics</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom domain</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$8/mo</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$5/mo</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Analytics</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Full, free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Limited free</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>API access</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid only</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'none' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>IST timezone default</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Frequently asked questions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:2, marginTop:24 }}>
          <details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Is Meshalive made in India?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Meshalive is built and operated by an Indian team with a specific focus on Indian SMBs, freelancers, and creators. The product is designed around how Indian businesses actually use short links — primarily WhatsApp, Instagram, and print QR codes.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I pay for Meshalive using UPI?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Meshalive is free, but if premium features are ever introduced, payments will be accepted via UPI, RuPay, NetBanking, credit card, and debit card — all Indian payment methods supported.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Does Meshalive generate GST invoices?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. For any paid transactions, Meshalive generates GST-compliant tax invoices including GSTIN, HSN/SAC code, and correct IGST/CGST/SGST split based on your billing state. Downloadable as PDF.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            How fast are redirects in India?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Meshalive uses CDN infrastructure with edge nodes to minimize redirect latency. From major Indian cities (Mumbai, Delhi, Bengaluru, Chennai), redirect times are typically under 50–80ms.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            What languages does the Meshalive dashboard support?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>The Meshalive dashboard is currently in English. Hindi and major regional language localization is on the roadmap. Short links themselves redirect regardless of language — the dashboard language doesn't affect your end users.</div>
        </details>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={{ maxWidth:860, margin:'0 auto', padding:'0 16px 80px', textAlign:'center' }}>
        <div style={{ padding:'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background:'#f0f7ff', border:'1px solid #bfdbfe', borderRadius:24 }}>
          <h2 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:800, color:'#111111', margin:'0 0 12px', letterSpacing:'-0.03em' }}>
            The URL shortener built for India
          </h2>
          <p style={{ fontSize:16, color:'#6b7280', margin:'0 auto 32px', maxWidth:480, lineHeight:1.65 }}>
            Join thousands of Indian SMBs, freelancers, and creators who use Meshalive for their WhatsApp campaigns, Instagram bios, and QR codes.
          </p>
          <a href="/register" style={{ padding:'14px 32px', borderRadius:12, fontSize:16, fontWeight:700, textDecoration:'none', background:'#0057ff', color:'#fff', display:'inline-flex', alignItems:'center', gap:8, margin:'0 auto' }}>
            Get started free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <p style={{ marginTop:16, fontSize:13, color:'#9ca3af' }}>100% free · No credit card · Unlimited links</p>
        </div>
      </section>
    </main>
  );
}
