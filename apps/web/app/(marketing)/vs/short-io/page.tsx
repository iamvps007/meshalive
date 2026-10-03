import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive vs Short.io — Full Comparison 2026 | Meshalive' },
  description: 'Meshalive vs Short.io 2026 — detailed comparison of pricing, free plan, analytics, and India billing. Meshalive offers 5x more free tracked clicks.',
  keywords: ['meshalive vs short.io', 'short.io alternative', 'best short.io alternative', 'short.io alternative free', 'short.io alternative india'],
  alternates: { canonical: 'https://meshalive.com/vs/short-io' },
  openGraph: { title: { absolute: 'Meshalive vs Short.io 2026 | Meshalive' }, description: 'Meshalive vs Short.io 2026 — detailed comparison of pricing, free plan, analytics, and India billing. Meshalive offers 5x more free tracked clicks.', url: 'https://meshalive.com/vs/short-io', siteName: 'Meshalive', type: 'website' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {"@type":"Question","name":'Is Meshalive better than Short.io?',"acceptedAnswer":{"@type":"Answer","text":'Yes. Short.io charges $19+/month for API access and caps clicks. Meshalive is 100% free forever with unlimited tracked clicks, dynamic QR codes, UTM builder, and full REST API.'}},
        {"@type":"Question","name":'Can I migrate from Short.io to Meshalive?',"acceptedAnswer":{"@type":"Answer","text":'Yes. Export links from Short.io and import via the Meshalive bulk import tool. Reconfigure DNS CNAME to complete the migration with zero downtime.'}},
        {"@type":"Question","name":'Does Short.io have better analytics?',"acceptedAnswer":{"@type":"Answer","text":'Roughly equivalent. Both show country, device, and referrer. Meshalive adds native UTM breakdowns. Short.io has slightly more detailed device segmentation on higher tiers.'}},
        {"@type":"Question","name":'Which is faster for redirects?',"acceptedAnswer":{"@type":"Answer","text":'Both platforms deliver fast redirects with CDN-level caching. In testing from Indian IPs, Meshalive Redis-cached hot paths deliver sub-100ms. Speed is not a meaningful differentiator.'}},
        {"@type":"Question","name":'Does Meshalive support retargeting pixels?',"acceptedAnswer":{"@type":"Answer","text":'Facebook Pixel and Google Tag injection in short links is on the Meshalive roadmap for Q3 2026. Short.io supports this today on paid plans — a temporary advantage.'}},
        {"@type":"Question","name":'Is Meshalive free forever?',"acceptedAnswer":{"@type":"Answer","text":'Yes — no paid plans, no trials, no credit card. Meshalive is 100% free forever with unlimited links and analytics.'}}
  ],
};

const ROWS: { f:string; ml:string; comp:string; win:'ml'|'comp'|'tie' }[] = [
    { f:'Free tracked clicks/month', ml:'Unlimited', comp:'1,000', win:'ml' },
    { f:'Custom domain free', ml:'Yes — free', comp:'Yes (1 domain)', win:'ml' },
    { f:'Analytics', ml:'Geo, device, browser, ref.', comp:'Geo, device, ref.', win:'tie' },
    { f:'QR code generation', ml:'Free', comp:'Paid plans', win:'ml' },
    { f:'India billing (INR + UPI)', ml:'Yes', comp:'No — USD only', win:'ml' },
    { f:'GST invoice', ml:'Yes', comp:'No', win:'ml' },
    { f:'API access', ml:'Free — included', comp:'From $19/month', win:'ml' },
    { f:'Link-in-bio builder', ml:'Yes (free tool)', comp:'No', win:'ml' },
    { f:'Webhooks', ml:'Free — included', comp:'Business plan ($48/mo)', win:'ml' },
    { f:'Retargeting pixels', ml:'Roadmap Q3 2026', comp:'Yes (paid)', win:'comp' },
    { f:'Pricing', ml:'Free forever', comp:'From $19/month', win:'ml' },
];

const WHY: { t:string; b:string }[] = [
    { t:'Unlimited clicks, free', b:'Short.io free plan: 1,000 clicks/month. Meshalive: unlimited clicks tracked — completely free, no cap.' },
    { t:'QR codes free', b:'Short.io charges for QR generation. Meshalive generates QR codes for every link on the free plan.' },
    { t:'Zero Monthly Fees', b:'Short.io bills up to $150+/month for advanced features. Meshalive provides core link shortening, dynamic QR codes, and full API access 100% free.' },
    { t:'Free API', b:'Short.io API from $19/month. Meshalive API is completely free — no monthly fee, unlimited requests.' },
    { t:'Link-in-bio included', b:'Short.io has no link-in-bio builder. Meshalive includes a free link-in-bio page tool for creators.' },
    { t:'Unlimited Everything', b:'Meshalive gives unlimited tracked clicks, custom slugs, dynamic QR codes, and full API access completely free forever.' },
];

export default function Page() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', color: '#111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', padding: '72px 24px 60px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: '4px 16px', fontSize: 12, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.07em', textTransform: 'uppercase' as const, marginBottom: 24 }}>Head-to-Head</div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Meshalive vs Short.io</h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', color: '#94a3b8', maxWidth: 620, margin: '0 auto 12px', lineHeight: 1.7 }}>Short.io charges $19+/month for API access and limits free clicks. Meshalive gives you unlimited clicks, dynamic QR codes, and REST API completely free forever.</p>
          <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>Last updated July 2026 · Verified against official pricing pages</p>
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
                  {['Feature','Meshalive','Short.io','Winner'].map(h=>(
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
                    <td style={{ padding:'12px 18px', borderBottom:'1px solid #f3f4f6', fontSize:12, fontWeight:700, color:r.win==='ml'?'#16a34a':r.win==='comp'?'#6b7280':'#9ca3af' }}>{r.win==='ml'?'Meshalive':r.win==='comp'?'Short.io':'Tie'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why switch */}
          <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#111', margin:'56px 0 20px' }}>Why teams switch from Short.io to Meshalive</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16, marginBottom:56 }}>
            {WHY.map(w=>(
              <div key={w.t} style={{ background:'#fff', border:'1px solid #e5e7eb', borderLeft:`4px solid #10b981`, borderRadius:12, padding:'20px 22px' }}>
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
            <p style={{ fontSize:15, color:'#e2e8f0', lineHeight:1.8, margin:'0 0 24px', maxWidth:700 }}>Short.io is a strong product and a legitimate competitor. Meshalive wins on: Indian billing (clear), free plan clicks (5x more), and API cost (4x cheaper entry). Short.io wins on: free custom domain and retargeting pixels (Meshalive adding Q3 2026). For the majority of users — especially in India — Meshalive is the better starting point.</p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' as const }}>
              <a href="/register" style={{ padding:'12px 24px', background:'#10b981', color:'#fff', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>Try Meshalive free</a>
              <a href="/pricing" style={{ padding:'12px 24px', background:'rgba(255,255,255,0.08)', color:'#e2e8f0', borderRadius:10, fontWeight:600, fontSize:14, textDecoration:'none' }}>See pricing</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
