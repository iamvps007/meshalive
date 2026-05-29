import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive | Meshalive' },
  description: 'Most free URL shorteners give you zero analytics. Meshalive gives you geographic breakdown, device tracking, referrer source, and UTM campaign data for eve',
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-with-analytics' },
  openGraph: { type:'website', url:'https://meshalive.com/tools/url-shortener-with-analytics', title:{ absolute: 'Meshalive | Meshalive' }, description:'Most free URL shorteners give you zero analytics. Meshalive gives you geographic breakdown, device tracking, referrer source, and UTM campaign data for eve', siteName:'Meshalive' },
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
          URL Shortener + Analytics
        </div>
        <h1 style={{ fontSize:'clamp(30px,5vw,52px)', fontWeight:800, color:'#111111', margin:'0 0 16px', lineHeight:1.1, letterSpacing:'-0.03em' }}>
          Free URL Shortener with<br />full click analytics.
        </h1>
        <p style={{ fontSize:'clamp(16px,2.5vw,19px)', color:'#6b7280', maxWidth:580, margin:'0 auto 40px', lineHeight:1.65 }}>
          Most free URL shorteners give you zero analytics. Meshalive gives you geographic breakdown, device tracking, referrer source, and UTM campaign data for every link — completely free.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Key features</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginTop:24 }}>
          <div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📊</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Geographic breakdown</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>See exactly which countries, states, and cities your clicks come from. Understand your audience location to target campaigns more effectively.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📱</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Device & browser tracking</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Know whether your audience is on mobile or desktop, which browser they use, and what OS they run. Optimize landing pages for your actual traffic.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔗</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Referrer source analytics</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>See which channels drive clicks — WhatsApp, Instagram, direct, search, email. Measure ROI across every marketing channel in one dashboard.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📈</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Click history over time</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Track click trends day by day. Identify which campaigns drove spikes and replicate what works. 90-day data retention.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🏷️</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>UTM campaign tracking</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Add UTM parameters before shortening to track campaign, source, medium, and content dimensions. All UTMs are preserved through the redirect.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔌</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Analytics API</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Pull click data programmatically via the Meshalive REST API. Build custom dashboards, feed data to your CRM, or automate reports.</p>
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
                <tr style={{ borderBottom:'1px solid #e5e7eb' }}><th style={{ padding:'14px 18px', textAlign:'left', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Feature</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#0057ff', fontWeight:700, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#eff6ff', whiteSpace:'nowrap' }}>Meshalive</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Bitly Free</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Google Analytics (alone)</th></tr>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Short link creation</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Click count</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Full history</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>With GA4 tags</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Geographic data</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Country + city</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Device breakdown</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Referrer tracking</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes (partial)</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>UTM tracking</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Requires UTM builder</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>API access</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Limited</td></tr><tr style={{ borderBottom:'none' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Price</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>$0</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$0</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$0 (setup required)</td></tr>
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
            Does Meshalive provide real-time analytics?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Click data appears in your dashboard within seconds of a link being clicked. You can watch clicks come in live after sending a campaign.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            What analytics does Meshalive track?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Click count, click timeline (day/week/month), geographic breakdown (country, state, city), device type (mobile/desktop/tablet), browser, operating system, referrer source (WhatsApp, Instagram, direct, search), and UTM campaign dimensions.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            How long is analytics data retained?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Analytics data is retained for 90 days on all Meshalive accounts.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I export analytics data?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Analytics can be exported via the Meshalive REST API as JSON, and CSV export is available from the dashboard for each link.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Does Meshalive analytics work without adding tracking code to my site?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Meshalive analytics are server-side — they fire when the short link is clicked, before the browser reaches your destination site. No code installation required on your website.</div>
        </details>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={{ maxWidth:860, margin:'0 auto', padding:'0 16px 80px', textAlign:'center' }}>
        <div style={{ padding:'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background:'#f0f7ff', border:'1px solid #bfdbfe', borderRadius:24 }}>
          <h2 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:800, color:'#111111', margin:'0 0 12px', letterSpacing:'-0.03em' }}>
            Measure every click — free
          </h2>
          <p style={{ fontSize:16, color:'#6b7280', margin:'0 auto 32px', maxWidth:480, lineHeight:1.65 }}>
            Create a free account and get full analytics on every link. No tracking code, no setup, no paid plan.
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
