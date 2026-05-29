import type { Metadata } from 'next';
import Script from 'next/script';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';
import React from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive | Meshalive' },
  description: 'Branded short links on your own domain — go.yourbrand.com/slug. Custom domains, custom slugs, full analytics, and QR codes on Meshalive are free for everyo',
  alternates: { canonical: 'https://meshalive.com/tools/custom-url-shortener' },
  openGraph: { type:'website', url:'https://meshalive.com/tools/custom-url-shortener', title:{ absolute: 'Meshalive | Meshalive' }, description:'Branded short links on your own domain — go.yourbrand.com/slug. Custom domains, custom slugs, full analytics, and QR codes on Meshalive are free for everyo', siteName:'Meshalive' },
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
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#f5f3ff', border:'1px solid #ddd6fe', borderRadius:999, padding:'4px 14px', fontSize:12, fontWeight:700, color:'#7c3aed', letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:20 }}>
          Custom URL Shortener
        </div>
        <h1 style={{ fontSize:'clamp(30px,5vw,52px)', fontWeight:800, color:'#111111', margin:'0 0 16px', lineHeight:1.1, letterSpacing:'-0.03em' }}>
          Free custom URL shortener<br />with your own domain.
        </h1>
        <p style={{ fontSize:'clamp(16px,2.5vw,19px)', color:'#6b7280', maxWidth:580, margin:'0 auto 40px', lineHeight:1.65 }}>
          Branded short links on your own domain — go.yourbrand.com/slug. Custom domains, custom slugs, full analytics, and QR codes on Meshalive are free for everyone.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Key features</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginTop:24 }}>
          <div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🌐</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Your own branded domain</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Connect any domain you own (go.yourbrand.com, links.company.com) and every short link uses your brand instead of msha.live.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔖</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Custom slugs</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Choose exactly what comes after the slash — /sale, /menu, /apply, /demo. Clean, memorable, and on-brand.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📊</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>Analytics on branded links</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Track clicks on your custom domain links the same way as any other link. Geographic, device, referrer, and UTM breakdown.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔌</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>API for bulk creation</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Create thousands of branded short links programmatically via API. Perfect for per-user links, campaign automation, or product catalogues.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>📱</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>QR codes for branded links</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Every branded link gets a QR code. Use your custom domain link as the QR target so every scan reinforces your brand.</p>
        </div><div style={S.card}>
          <div style={{ fontSize:26, marginBottom:10 }}>🔒</div>
          <h3 style={{ fontSize:15, fontWeight:700, color:'#111111', margin:'0 0 8px' }}>HTTPS on custom domains</h3>
          <p style={{ fontSize:14, color:'#6b7280', margin:0, lineHeight:1.65 }}>Meshalive automatically provisions SSL certificates for every custom domain via Let's Encrypt. All redirects are served over HTTPS.</p>
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
                <tr style={{ borderBottom:'1px solid #e5e7eb' }}><th style={{ padding:'14px 18px', textAlign:'left', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Feature</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#0057ff', fontWeight:700, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#eff6ff', whiteSpace:'nowrap' }}>Meshalive</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Bitly</th><th style={{ padding:'14px 18px', textAlign:'center', color:'#6b7280', fontWeight:600, fontSize:12, letterSpacing:'0.05em', textTransform:'uppercase', background:'#f9fafb', whiteSpace:'nowrap' }}>Rebrandly</th></tr>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom domain</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$8/month</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>$13/month</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Custom slugs</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Free (Starter+)</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Free (Starter+)</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Branded QR codes</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid add-on</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Analytics on branded links</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Full, free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>API for link creation</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Paid</td></tr><tr style={{ borderBottom:'1px solid #e5e7eb' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>SSL on custom domain</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>Auto, free</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Included</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>Included</td></tr><tr style={{ borderBottom:'none' }}><td style={{ padding:'12px 18px', color:'#111111', fontWeight:500 }}>Price</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#111111', fontWeight:600, background:'#f8faff' }}>$0 forever</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>From $8/mo</td><td style={{ padding:'12px 18px', textAlign:'center', color:'#6b7280' }}>From $13/mo</td></tr>
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
            How do I set up a custom domain with Meshalive?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Go to Settings → Domains in your Meshalive dashboard, click Add Domain, enter your domain name, then update your DNS CNAME record to point to Meshalive's servers. SSL is provisioned automatically within a few minutes.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I use a subdomain like go.mycompany.com?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. You can use any subdomain or root domain. Most users use go.domain.com or links.domain.com. Root domain setup (domain.com) requires an ANAME/ALIAS record at the apex.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Is there a limit on how many custom domains I can add?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>No. You can add unlimited custom domains to your Meshalive account, all free.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            What happens if someone visits my custom domain directly (no slug)?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>You can set a root redirect in your domain settings — any visit to go.yourbrand.com without a valid slug will redirect to your homepage or any URL you choose.</div>
        </details><details style={{ background:'#fff', border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
          <summary style={{ padding:'18px 22px', cursor:'pointer', fontSize:15, fontWeight:600, color:'#111111', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, userSelect:'none' }}>
            Can I create links with my custom domain via the API?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div style={{ padding:'0 22px 18px', paddingTop:16, fontSize:14, color:'#6b7280', lineHeight:1.75, borderTop:'1px solid #e5e7eb' }}>Yes. Pass your custom domain in the API request body when creating a link and the returned short URL will use your branded domain.</div>
        </details>
        </div>
      </section>

      <hr style={S.divider} />

      <section style={{ maxWidth:860, margin:'0 auto', padding:'0 16px 80px', textAlign:'center' }}>
        <div style={{ padding:'clamp(36px,6vw,64px) clamp(20px,5vw,48px)', background:'#f0f7ff', border:'1px solid #bfdbfe', borderRadius:24 }}>
          <h2 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:800, color:'#111111', margin:'0 0 12px', letterSpacing:'-0.03em' }}>
            Brand your links today — free
          </h2>
          <p style={{ fontSize:16, color:'#6b7280', margin:'0 auto 32px', maxWidth:480, lineHeight:1.65 }}>
            Connect your domain and start creating branded short links. Custom domains, slugs, analytics, and API all included free.
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
