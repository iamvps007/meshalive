import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive | Meshalive' },
  description: 'One clean link in your Instagram bio that you can update anytime, track clicks on, and brand with your own domain. Free on Meshalive — no Linktree needed.',
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-for-instagram' },
  openGraph: { type:'website', url:'https://meshalive.com/tools/url-shortener-for-instagram', title:{ absolute: 'Meshalive | Meshalive' }, description:'One clean link in your Instagram bio that you can update anytime, track clicks on, and brand with your own domain. Free on Meshalive — no Linktree needed.', siteName:'Meshalive' },
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
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#faf5ff', border:'1px solid #e9d5ff', borderRadius:999, padding:'4px 14px', fontSize:12, fontWeight:700, color:'#9333ea', letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:20 }}>
          Instagram URL Shortener
        </div>
        <h1 style={{ fontSize:'clamp(30px,5vw,52px)', fontWeight:800, color:'#111111', margin:'0 0 16px', lineHeight:1.1, letterSpacing:'-0.03em' }}>
          Free URL shortener for<br />your Instagram bio.
        </h1>
        <p style={{ fontSize:'clamp(16px,2.5vw,19px)', color:'#6b7280', maxWidth:580, margin:'0 auto 40px', lineHeight:1.65 }}>
          One clean link in your Instagram bio that you can update anytime, track clicks on, and brand with your own domain. Free on Meshalive — no Linktree needed.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Key features</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginTop:24 }}>
          <div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📸</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Clean links for your bio</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Instagram allows one clickable link in the bio. Make it count — a clean msha.live/yourname link looks professional and you can change the destination anytime without updating your bio.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📊</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Track clicks from Instagram</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>See how many followers click your bio link each day, what device they use, and what time of day they're most active. Optimize your posting schedule to bio-link traffic.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔗</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Update destination without changing link</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Running a sale? New YouTube video? Just update the destination URL in your Meshalive dashboard. The link in your Instagram bio stays the same — no re-editing required.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📱</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>QR code for Instagram Stories</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Create a QR code for your short link and add it as a sticker in Instagram Stories. Viewers can scan directly without needing to go to your bio.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🌐</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Branded domain in your bio</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Instead of msha.live/slug, use your own domain: go.yourbrand.com/ig. Custom domains are free on Meshalive and look more professional in your Instagram bio.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔖</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Memorable custom slugs</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Choose a slug that matches your brand — /menu, /shop, /apply, /linktree. Easier to read in screenshots and remember when viewers see your bio.</p>
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
                <tr style={{ borderBottom:'1px solid #e5e7eb' }}><th style={{ padding:'14px 18px', textAlign:'left', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Feature</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#0057ff', fontWeight:700, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#eff6ff', whiteSpace:'nowrap' }}>Meshalive</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Linktree Free</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Bitly Free</th></tr>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Bio link</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes (direct)</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Multi-link page</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes (direct)</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom domain</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$5/month</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Click analytics</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Full, free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Basic</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>None</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Link-in-bio page</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Dashboard</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes (Linktree page)</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>QR codes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>No</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Update destination</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Yes (same link)</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Yes</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom slug</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Limited</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Free</td></tr><tr style={{ borderBottom:'none' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Price</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>$0</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$0 (limited)</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$0 (10 links)</td></tr>
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
            Should I use Meshalive or Linktree for my Instagram bio?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>It depends on your use case. If you want to send followers to a single destination (website, latest post, product page), Meshalive gives you a cleaner direct link with better analytics. If you want to show multiple links on a page, Linktree is better for that — though Meshalive's link-in-bio feature (coming soon) will offer the same.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I track how many Instagram followers click my bio link?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Meshalive tracks every click including the time, device, and geographic location. While Instagram doesn't pass a referrer that distinguishes bio clicks from other Instagram traffic, you can use a dedicated link for your Instagram bio and track all its clicks in Meshalive.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            How do I add a Meshalive link to my Instagram bio?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Shorten your destination URL above, copy the short link, then go to Instagram → Edit Profile → Website → paste the link. Or use a custom slug and domain for a branded look.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I use a custom domain in my Instagram bio link?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Custom domains are free on Meshalive. Instead of msha.live/yourname, you can use links.yourbrand.com/ig — set it up in Settings → Domains in your dashboard.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Does Meshalive work for Instagram Stories link stickers?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. You can paste any Meshalive short link as the URL for a link sticker in Instagram Stories. Clicks are tracked the same as bio link clicks.</div>
        </details>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={{ maxWidth:860, margin:'0 auto', padding:'0 16px 80px', textAlign:'center' }}>
        <div style={{ padding:'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background:'#f0f7ff', border:'1px solid #bfdbfe', borderRadius:24 }}>
          <h2 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:800, color:'#111111', margin:'0 0 12px', letterSpacing:'-0.03em' }}>
            Optimize your Instagram bio link — free
          </h2>
          <p style={{ fontSize:16, color:'#6b7280', margin:'0 auto 32px', maxWidth:480, lineHeight:1.65 }}>
            Create a free Meshalive account, set up your custom slug, connect your domain, and track every click from your Instagram bio.
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
