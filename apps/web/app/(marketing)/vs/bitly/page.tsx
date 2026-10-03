import UrlShortenerTool from '../../tools/url-shortener/UrlShortenerTool';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive vs Bitly (2026 Full Comparison) — Which Free Shortener Wins?' },
  description: "Meshalive vs Bitly 2026 — free plan comparison, analytics, and API. Meshalive is completely free with unlimited links and full analytics. No paid plans.",
  keywords: ['meshalive vs bitly', 'bitly alternative', 'best bitly alternative', 'bitly alternative free', 'bitly alternative india'],
  alternates: { canonical: 'https://meshalive.com/vs/bitly' },
  openGraph: { title: { absolute: 'Meshalive vs Bitly 2026 | Meshalive' }, description: "Meshalive vs Bitly 2026 — free plan comparison, analytics, and API. Meshalive is completely free with unlimited links and full analytics. No paid plans.", url: 'https://meshalive.com/vs/bitly', siteName: 'Meshalive', type: 'website' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {"@type":"Question","name":'Is Meshalive a good Bitly alternative?',"acceptedAnswer":{"@type":"Answer","text":"Yes. Bitly gives only 10 links/month and locks analytics behind $35+/month plans. Meshalive is 100% free forever with unlimited links, real-time analytics, QR codes, and API access. Bitly's main advantage is broader third-party integrations."}},
        {"@type":"Question","name":'Can I import my Bitly links to Meshalive?',"acceptedAnswer":{"@type":"Answer","text":'Yes. Export your Bitly links as CSV, then use the Meshalive bulk import tool. Custom slugs are preserved.'}},
        {"@type":"Question","name":'Is Meshalive really free?',"acceptedAnswer":{"@type":"Answer","text":'Yes, permanently. Unlimited links and unlimited click tracking — free forever. No credit card needed. Meshalive does not sell ads or user data.'}},
        {"@type":"Question","name":'What happened to Bitly free plan links?',"acceptedAnswer":{"@type":"Answer","text":'In March 2023, Bitly deactivated all free-plan links created before November 2022. Meshalive has committed to never deactivating existing links without prior notice.'}},
        {"@type":"Question","name":'Does Meshalive work with Zapier?',"acceptedAnswer":{"@type":"Answer","text":'Not natively yet. Meshalive has a full REST API — completely free — so you can connect via Zapier Webhooks. Native Zapier app is on the roadmap for Q4 2026.'}},
        {"@type":"Question","name":'Is Meshalive really free forever?',"acceptedAnswer":{"@type":"Answer","text":'Yes — no credit card, no paid plans, no catch. Unlimited links and analytics are free forever.'}}
  ],
};

const ROWS: { f:string; ml:string; comp:string; win:'ml'|'comp'|'tie' }[] = [
    { f:'Free links/month', ml:'Unlimited', comp:'10 links', win:'ml' },
    { f:'Analytics on free plan', ml:'Full (geo, device, referrer)', comp:'None', win:'ml' },
    { f:'Custom domain', ml:'Free', comp:'From $8/month', win:'ml' },
    { f:'API access', ml:'Free — included', comp:'From $35/month', win:'ml' },
    { f:'India billing (INR + UPI)', ml:'Yes', comp:'No — USD only', win:'ml' },
    { f:'GST invoice', ml:'Yes', comp:'No', win:'ml' },
    { f:'QR code generation', ml:'Free', comp:'Paid only', win:'ml' },
    { f:'Link expiry', ml:'Free', comp:'Paid only', win:'ml' },
    { f:'Link deactivation history', ml:'No deactivations', comp:'Deactivated links 2023', win:'ml' },
    { f:'Brand recognition', ml:'Growing', comp:'Industry standard', win:'comp' },
    { f:'Zapier / HubSpot native', ml:'API + webhooks', comp:'Native integrations', win:'comp' },
    { f:'Pricing', ml:'Free forever', comp:'From $8/month', win:'ml' },
];

const WHY: { t:string; b:string }[] = [
    { t:'Unlimited Free Links', b:'Bitly restricts free accounts to just 10 links per month. Meshalive gives you unlimited short links — 100% free forever with zero caps.' },
    { t:'Full analytics, free forever', b:'Bitly hides analytics behind paid plans. Meshalive shows country, device, and referrer — completely free, no upgrade needed.' },
    { t:'API included, free forever', b:'Bitly API starts at $35/month. Meshalive includes full API access completely free — no paid plan required.' },
    { t:'100% Free Forever', b:'Bitly charges $8 to $35+/month with expensive USD billing. Meshalive is completely free for all Indian and worldwide users.' },
    { t:'QR codes free', b:'Bitly charges for QR generation. Meshalive generates QR codes for every link — completely free.' },
    { t:'No link deactivations', b:'Bitly deactivated free-plan links in 2023 without warning. Meshalive keeps all links active.' },
];

export default function Page() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', color: '#111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', padding: '72px 24px 60px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: '4px 16px', fontSize: 12, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.07em', textTransform: 'uppercase' as const, marginBottom: 24 }}>Head-to-Head</div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Meshalive vs Bitly</h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', color: '#94a3b8', maxWidth: 620, margin: '0 auto 12px', lineHeight: 1.7 }}>Meshalive is completely free with unlimited links, full analytics, and API access — everything Bitly charges $35+/month for.</p>
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
                  {['Feature','Meshalive','Bitly','Winner'].map(h=>(
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
                    <td style={{ padding:'12px 18px', borderBottom:'1px solid #f3f4f6', fontSize:12, fontWeight:700, color:r.win==='ml'?'#16a34a':r.win==='comp'?'#6b7280':'#9ca3af' }}>{r.win==='ml'?'Meshalive':r.win==='comp'?'Bitly':'Tie'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why switch */}
          <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#111', margin:'56px 0 20px' }}>Why teams switch from Bitly to Meshalive</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16, marginBottom:56 }}>
            {WHY.map(w=>(
              <div key={w.t} style={{ background:'#fff', border:'1px solid #e5e7eb', borderLeft:`4px solid #7553ff`, borderRadius:12, padding:'20px 22px' }}>
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
            <p style={{ fontSize:15, color:'#e2e8f0', lineHeight:1.8, margin:'0 0 24px', maxWidth:700 }}>Meshalive is the better choice for the vast majority of Bitly users: unlimited links, full analytics, and API access — all completely free. Bitly is worth keeping only if you rely on deep HubSpot or Salesforce integrations. For everyone else — Meshalive is free forever.</p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' as const }}>
              <a href="/register" style={{ padding:'12px 24px', background:'#7553ff', color:'#fff', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>Try Meshalive free</a>
              <a href="/pricing" style={{ padding:'12px 24px', background:'rgba(255,255,255,0.08)', color:'#e2e8f0', borderRadius:10, fontWeight:600, fontSize:14, textDecoration:'none' }}>See pricing</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
