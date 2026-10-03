import UrlShortenerTool from '../../tools/url-shortener/UrlShortenerTool';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive vs TinyURL — Full Comparison 2026 | Meshalive' },
  description: 'Meshalive vs TinyURL 2026 — TinyURL has no analytics on any plan. Meshalive includes full click tracking, custom domains, and QR codes free. Full comparison.',
  keywords: ['meshalive vs tinyurl', 'tinyurl alternative', 'best tinyurl alternative', 'tinyurl alternative free', 'tinyurl alternative india'],
  alternates: { canonical: 'https://meshalive.com/vs/tinyurl' },
  openGraph: { title: { absolute: 'Meshalive vs TinyURL 2026 | Meshalive' }, description: 'Meshalive vs TinyURL 2026 — TinyURL has no analytics on any plan. Meshalive includes full click tracking, custom domains, and QR codes free. Full comparison.', url: 'https://meshalive.com/vs/tinyurl', siteName: 'Meshalive', type: 'website' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {"@type":"Question","name":'Does TinyURL have analytics?',"acceptedAnswer":{"@type":"Answer","text":'No. TinyURL provides zero click analytics on any plan — free or paid. If you need to know how many people clicked your link, you need Meshalive or another analytics-capable shortener.'}},
        {"@type":"Question","name":'Is TinyURL safe to use?',"acceptedAnswer":{"@type":"Answer","text":'TinyURL itself is safe. However, tinyurl.com links are widely used for spam, so some corporate firewalls block them. Meshalive links on msha.live have a much lower spam footprint.'}},
        {"@type":"Question","name":'What does TinyURL Pro include?',"acceptedAnswer":{"@type":"Answer","text":'TinyURL Pro ($9.99/month) adds custom domains, QR codes, and basic click counts. Meshalive includes all of this plus full geo/device/referrer analytics — completely free.'}},
        {"@type":"Question","name":'Can I migrate from TinyURL to Meshalive?',"acceptedAnswer":{"@type":"Answer","text":"TinyURL doesn't provide bulk export. You'll need to recreate links manually or via the Meshalive API. TinyURL links continue to work — migration isn't urgent."}},
        {"@type":"Question","name":'Is Meshalive free like TinyURL?',"acceptedAnswer":{"@type":"Answer","text":'Yes, with more. TinyURL free: unlimited anonymous links, no analytics. Meshalive free: unlimited anonymous links with full analytics and QR codes — no monthly cap.'}},
        {"@type":"Question","name":'How fast are Meshalive redirects vs TinyURL?',"acceptedAnswer":{"@type":"Answer","text":'Both deliver fast redirects. Meshalive targets sub-100ms with Redis caching. Speed is not a meaningful differentiator — choose based on analytics and features.'}}
  ],
};

const ROWS: { f:string; ml:string; comp:string; win:'ml'|'comp'|'tie' }[] = [
    { f:'Click analytics', ml:'Full — geo, device, referrer', comp:'None on any plan', win:'ml' },
    { f:'Free links', ml:'Unlimited tracked & anon', comp:'Unlimited', win:'tie' },
    { f:'Custom domain', ml:'Free', comp:'From $9.99/month', win:'ml' },
    { f:'QR code generation', ml:'Free for every link', comp:'Pro plan only', win:'ml' },
    { f:'Link expiry', ml:'Yes (temporary links)', comp:'No', win:'ml' },
    { f:'API access', ml:'Free — included', comp:'No API', win:'ml' },
    { f:'Edit link destination', ml:'Yes', comp:'Pro plan only', win:'ml' },
    { f:'100% Free Forever', ml:'Yes (₹0)', comp:'Paid ($9.99/mo)', win:'ml' },
    { f:'Redirect speed', ml:'Sub-100ms (Redis cached)', comp:'Fast', win:'tie' },
    { f:'Pricing', ml:'Free forever', comp:'From $9.99/month', win:'ml' },
];

const WHY: { t:string; b:string }[] = [
    { t:'Analytics where TinyURL has none', b:'TinyURL shows zero click data on any plan. Meshalive shows geo, device, browser, and referrer on the free plan.' },
    { t:'QR codes, free forever', b:'TinyURL gates QR codes behind Pro ($9.99/month). Every Meshalive link gets a free QR code — always.' },
    { t:'API for developers, free', b:'TinyURL has no public API. Meshalive has a full REST API — completely free, no paid plan required.' },
    { t:'Link expiry', b:"TinyURL doesn't support link expiry. Meshalive lets you set links to expire after a date or N clicks." },
    { t:'Edit after creation', b:'TinyURL free links cannot be changed after creation. Meshalive lets you update the destination anytime.' },
    { t:'100% Free Forever', b:'TinyURL charges $9.99/month for custom domains and basic features. Meshalive provides custom domains, QR codes, and analytics completely free.' },
];

export default function Page() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', color: '#111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', padding: '72px 24px 60px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: '4px 16px', fontSize: 12, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.07em', textTransform: 'uppercase' as const, marginBottom: 24 }}>Head-to-Head</div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Meshalive vs TinyURL</h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', color: '#94a3b8', maxWidth: 620, margin: '0 auto 12px', lineHeight: 1.7 }}>TinyURL offers unlimited shortening but zero analytics on any plan. Meshalive gives you full click intelligence, custom domains, and QR codes — completely free.</p>
          <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>Last updated July 2026 · Verified against official pricing pages</p>
        </div>
      </section>

      {/* Interactive Tool Embed */}
      <section style={{ maxWidth: 860, margin: '-32px auto 40px', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ background: '#ffffff', borderRadius: 16, border: '1.5px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', padding: '24px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#0057ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Instant Free Test</span>
            <h3 style={{ fontSize: 18, fontWeight: 800, margin: '4px 0 0', color: '#0f172a' }}>Shorten a Link Now — No Signup or Credit Card Required</h3>
          </div>
          <UrlShortenerTool />
        </div>
      </section>

      {/* Table */}
      <section style={{ padding: '64px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, color: '#111', textAlign: 'center' as const, margin: '0 0 32px' }}>Feature comparison</h2>
          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  {['Feature','Meshalive','TinyURL','Winner'].map(h=>(
                    <th key={h} style={{ padding:'12px 18px', textAlign:'left' as const, fontWeight:700, color:'#374151', borderBottom:'2px solid #e5e7eb', fontSize:13 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r,i)=>(
                  <tr key={r.f} style={{ background: i%2===0?'#fff':'#fafafa' }}>
                    <td style={{ padding:'12px 18px', fontWeight:600, color:'#374151', borderBottom:'1px solid #f3f4f6' }}>{r.f}</td>
                    <td style={{ padding:'12px 18px', borderBottom:'1px solid #f3f4f6', color:r.win==='ml'?'#16a34a':'#374151', fontWeight:r.win==='ml'?700:400 }}>{r.win==='ml'&&'✓ '}{r.ml}</td>
                    <td style={{ padding:'12px 18px', borderBottom:'1px solid #f3f4f6', color:r.win==='comp'?'#16a34a':'#6b7280', fontWeight:r.win==='comp'?700:400 }}>{r.win==='comp'&&'✓ '}{r.comp}</td>
                    <td style={{ padding:'12px 18px', borderBottom:'1px solid #f3f4f6', fontSize:12, fontWeight:700, color:r.win==='ml'?'#16a34a':r.win==='comp'?'#6b7280':'#9ca3af' }}>{r.win==='ml'?'Meshalive':r.win==='comp'?'TinyURL':'Tie'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why switch */}
          <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#111', margin:'56px 0 20px' }}>Why teams switch from TinyURL to Meshalive</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16, marginBottom:56 }}>
            {WHY.map(w=>(
              <div key={w.t} style={{ background:'#fff', border:'1px solid #e5e7eb', borderLeft:`4px solid #0ea5e9`, borderRadius:12, padding:'20px 22px' }}>
                <div style={{ fontSize:15, fontWeight:700, color:'#111', marginBottom:6 }}>{w.t}</div>
                <div style={{ fontSize:14, color:'#6b7280', lineHeight:1.75 }}>{w.b}</div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#111', margin:'0 0 20px' }}>Frequently asked questions</h2>
          <div style={{ border:'1px solid #e5e7eb', borderRadius:14, overflow:'hidden', marginBottom:48 }}>
            {jsonLd.mainEntity.map((faq,i)=>(
              <details key={i} style={{ borderBottom: i<5?'1px solid #e5e7eb':'none' }}>
                <summary style={{ padding:'16px 22px', fontSize:15, fontWeight:600, cursor:'pointer', listStyle:'none', display:'flex', justifyContent:'space-between' }}>{faq.name}<span style={{ color:'#9ca3af' }}>+</span></summary>
                <p style={{ padding:'0 22px 16px', margin:0, fontSize:14, color:'#6b7280', lineHeight:1.75 }}>{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>

          {/* Verdict */}
          <div style={{ background:'linear-gradient(135deg,#0f172a,#1e293b)', borderRadius:16, padding:'36px 32px' }}>
            <div style={{ fontSize:11, fontWeight:700, color:'#64748b', letterSpacing:'0.08em', textTransform:'uppercase' as const, marginBottom:10 }}>Our verdict</div>
            <p style={{ fontSize:15, color:'#e2e8f0', lineHeight:1.8, margin:'0 0 24px', maxWidth:700 }}>TinyURL wins on raw simplicity — no account, unlimited links, works since 2002. But if you care at all about whether people are clicking your links, TinyURL leaves you blind. Meshalive gives you a full analytics dashboard on the free plan. Switch to Meshalive and go from zero insight to complete click intelligence at no cost.</p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' as const }}>
              <a href="/register" style={{ padding:'12px 24px', background:'#0ea5e9', color:'#fff', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>Try Meshalive free</a>
              <a href="/pricing" style={{ padding:'12px 24px', background:'rgba(255,255,255,0.08)', color:'#e2e8f0', borderRadius:10, fontWeight:600, fontSize:14, textDecoration:'none' }}>See pricing</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
