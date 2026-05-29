import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive | Meshalive' },
  description: 'Rebrandly charges $13/month for what Meshalive gives free: custom domains, unlimited links, full analytics, QR codes, and API access. No credit card, no pa',
  alternates: { canonical: 'https://meshalive.com/tools/rebrandly-alternative' },
  openGraph: { type:'website', url:'https://meshalive.com/tools/rebrandly-alternative', title:{ absolute: 'Meshalive | Meshalive' }, description:'Rebrandly charges $13/month for what Meshalive gives free: custom domains, unlimited links, full analytics, QR codes, and API access. No credit card, no pa', siteName:'Meshalive' },
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
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:999, padding:'4px 14px', fontSize:12, fontWeight:700, color:'#0057ff', letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:20 }}>
          Rebrandly Alternative
        </div>
        <h1 style={{ fontSize:'clamp(30px,5vw,52px)', fontWeight:800, color:'#111111', margin:'0 0 16px', lineHeight:1.1, letterSpacing:'-0.03em' }}>
          Free Rebrandly alternative —<br />unlimited branded links.
        </h1>
        <p style={{ fontSize:'clamp(16px,2.5vw,19px)', color:'#6b7280', maxWidth:580, margin:'0 auto 40px', lineHeight:1.65 }}>
          Rebrandly charges $13/month for what Meshalive gives free: custom domains, unlimited links, full analytics, QR codes, and API access. No credit card, no paid plan.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Key features</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginTop:24 }}>
          <div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>💸</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>$0 forever vs $13/month</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Rebrandly Free is limited to 500 tracked clicks/month and 5 links. Meshalive gives you unlimited links, unlimited clicks, and full analytics — free.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🌐</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Unlimited custom domains</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Rebrandly Free allows 1 custom domain with severe limits. Meshalive lets you add unlimited branded domains at no cost.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📊</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Full analytics vs Rebrandly's limits</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Rebrandly Free tracks only 500 clicks/month. Meshalive tracks every click with no monthly cap, including geo, device, and referrer data.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔌</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>API without the price tag</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Rebrandly gates API access behind $13/month+. Meshalive's full REST API is free — create links, pull analytics, manage domains programmatically.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>👥</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Team collaboration</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Rebrandly charges per seat. Meshalive includes team workspace features at no additional cost.</p>
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
                <tr style={{ borderBottom:'1px solid #e5e7eb' }}><th style={{ padding:'14px 18px', textAlign:'left', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Feature</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#0057ff', fontWeight:700, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#eff6ff', whiteSpace:'nowrap' }}>Meshalive</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Rebrandly Free</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Rebrandly Starter ($13/mo)</th></tr>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Short links</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Unlimited</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>10/month</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>5,000/month</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Tracked clicks/month</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Unlimited</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>500</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>50,000</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom domains</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Unlimited, free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>1</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>1</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom slugs</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Free</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Analytics detail</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Full (geo, device, referrer)</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Basic</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Advanced</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>API access</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Included</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>QR codes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Included</td></tr><tr style={{ borderBottom:'none' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Price</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>$0</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$0</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$13/month</td></tr>
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
            Why is Rebrandly so expensive?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Rebrandly is positioned as an enterprise link management platform and prices accordingly — $13/month for Starter, $32/month for Pro, $499+/month for enterprise. Meshalive offers the same core features (branded links, analytics, API, QR codes) for free.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can Meshalive replace Rebrandly for my agency?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Meshalive supports unlimited custom domains (one per client brand), custom slugs, full click analytics, team collaboration, and API access — all the features an agency needs to manage links for multiple clients.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Does Meshalive have the same analytics as Rebrandly?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Meshalive provides geographic (country, city), device type, browser, OS, referrer source, and UTM campaign analytics — comparable to or better than Rebrandly Starter analytics, completely free.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I bulk create links like with Rebrandly's API?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Meshalive's REST API supports bulk link creation, analytics retrieval, domain management, and slug availability checking. Full API documentation is at meshalive.com/docs.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Does Meshalive support link retargeting like Rebrandly?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Link retargeting (appending retargeting pixels) is on the Meshalive roadmap. Currently Meshalive supports standard redirects with full analytics. For retargeting, you can use UTM parameters and connect to your ad platform via the API.</div>
        </details>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={{ maxWidth:860, margin:'0 auto', padding:'0 16px 80px', textAlign:'center' }}>
        <div style={{ padding:'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background:'#f0f7ff', border:'1px solid #bfdbfe', borderRadius:24 }}>
          <h2 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:800, color:'#111111', margin:'0 0 12px', letterSpacing:'-0.03em' }}>
            Switch from Rebrandly — save $13/month
          </h2>
          <p style={{ fontSize:16, color:'#6b7280', margin:'0 auto 32px', maxWidth:480, lineHeight:1.65 }}>
            Everything Rebrandly charges for is free on Meshalive. Custom domains, analytics, API, and QR codes — all included.
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
