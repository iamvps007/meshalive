import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Meshalive vs Rebrandly — Full Comparison 2026 | Meshalive' },
  description: 'Meshalive vs Rebrandly 2026 — full comparison of pricing, branded links, analytics, and free plan. Meshalive is 100% free forever with unlimited links, analytics, and API access.',
  keywords: ['meshalive vs rebrandly', 'rebrandly alternative', 'best rebrandly alternative', 'rebrandly alternative free', 'rebrandly alternative india'],
  alternates: { canonical: 'https://meshalive.com/vs/rebrandly' },
  openGraph: { title: { absolute: 'Meshalive vs Rebrandly 2026 | Meshalive' }, description: 'Meshalive vs Rebrandly 2026 — full comparison of pricing, branded links, analytics, and free plan. Meshalive is 100% free forever with unlimited links, analytics, and API access.', url: 'https://meshalive.com/vs/rebrandly', siteName: 'Meshalive', type: 'website' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {"@type":"Question","name":'Is Meshalive a good Rebrandly alternative?',"acceptedAnswer":{"@type":"Answer","text":'Yes, especially for SMBs and Indian businesses. Meshalive covers branded links, analytics, UTM building, QR codes, and team workspaces completely free forever. Rebrandly has stronger enterprise integrations (Salesforce, Marketo) that matter at large-company scale.'}},
        {"@type":"Question","name":'Can I migrate Rebrandly links to Meshalive?',"acceptedAnswer":{"@type":"Answer","text":'Yes. Export as CSV and import via the Meshalive bulk import tool. Custom slugs are preserved. Reconfigure your DNS CNAME to point to Meshalive after import.'}},
        {"@type":"Question","name":'Does Meshalive support multiple custom domains?',"acceptedAnswer":{"@type":"Answer","text":'Yes. Meshalive supports multiple custom domains — completely free. Each domain can be used for different campaigns or clients.'}},
        {"@type":"Question","name":'Is Rebrandly better for enterprise?',"acceptedAnswer":{"@type":"Answer","text":'For large enterprises with existing Salesforce/HubSpot/Marketo integrations, Rebrandly has native connectors that Meshalive does not yet have. For everyone else, why pay $19–$89/month when Meshalive is 100% free forever?'}},
        {"@type":"Question","name":'Does Meshalive have a white-label option?',"acceptedAnswer":{"@type":"Answer","text":'Custom domains act as white-label branding. A full white-label dashboard for agencies is on the roadmap for Q2 2027.'}},
        {"@type":"Question","name":'How does Meshalive compare for agencies?',"acceptedAnswer":{"@type":"Answer","text":'Meshalive workspaces let you create separate environments per client on the Business plan. The main gap vs Rebrandly is the absence of white-label client reports — in development. Agencies get unlimited workspaces and links completely free.'}}
  ],
};

const ROWS: { f:string; ml:string; comp:string; win:'ml'|'comp'|'tie' }[] = [
    { f:'Free plan links', ml:'Unlimited', comp:'10/month', win:'ml' },
    { f:'Analytics on free plan', ml:'Full', comp:'Basic only', win:'ml' },
    { f:'Custom domain', ml:'Free', comp:'From $19/month', win:'ml' },
    { f:'India billing (INR + UPI)', ml:'Yes', comp:'No', win:'ml' },
    { f:'GST invoice', ml:'Yes', comp:'No', win:'ml' },
    { f:'UTM builder', ml:'Free', comp:'Paid plans', win:'ml' },
    { f:'QR code generation', ml:'Free', comp:'Paid plans', win:'ml' },
    { f:'API access', ml:'Free — included', comp:'From $19/month', win:'ml' },
    { f:'Salesforce / Marketo', ml:'Not yet', comp:'Yes', win:'comp' },
    { f:'Team seats', ml:'Unlimited', comp:'Up to 5 (Essentials)', win:'ml' },
    { f:'Pricing', ml:'Free forever', comp:'From $19/month', win:'ml' },
];

const WHY: { t:string; b:string }[] = [
    { t:'Free vs $19/month', b:'Rebrandly Essentials is $19/month for 5K links. Meshalive is completely free with unlimited links — it is not even a comparison.' },
    { t:'Zero Cost Forever', b:'Rebrandly charges $19 to $89/month. Meshalive is 100% free forever for Indian and global teams — zero subscriptions or credit cards required.' },
    { t:'UTM builder is free', b:'Rebrandly charges for UTM management. Meshalive UTM builder is completely free with visual interface.' },
    { t:'QR codes, free forever', b:'Rebrandly gates QR codes behind paid plans. Meshalive generates QR codes for every link — completely free.' },
    { t:'Unlimited team seats, free', b:'Rebrandly charges $19+/month per team. Meshalive team workspaces are completely free — no per-seat pricing.' },
    { t:'Unlimited Links Free', b:'Rebrandly free allows only 10 links with minimal analytics. Meshalive includes unlimited links, real-time analytics, dynamic QR codes, and REST API completely free.' },
];

export default function Page() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', color: '#111', fontFamily: 'Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', padding: '72px 24px 60px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: '4px 16px', fontSize: 12, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.07em', textTransform: 'uppercase' as const, marginBottom: 24 }}>Head-to-Head</div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 16px' }}>Meshalive vs Rebrandly</h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', color: '#94a3b8', maxWidth: 620, margin: '0 auto 12px', lineHeight: 1.7 }}>Rebrandly starts at $19/month for only 5,000 links. Meshalive delivers unlimited links, full analytics, dynamic QR codes, and API access 100% free forever.</p>
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
                  {['Feature','Meshalive','Rebrandly','Winner'].map(h=>(
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
                    <td style={{ padding:'12px 18px', borderBottom:'1px solid #f3f4f6', fontSize:12, fontWeight:700, color:r.win==='ml'?'#16a34a':r.win==='comp'?'#6b7280':'#9ca3af' }}>{r.win==='ml'?'Meshalive':r.win==='comp'?'Rebrandly':'Tie'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why switch */}
          <h2 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:800, color:'#111', margin:'56px 0 20px' }}>Why teams switch from Rebrandly to Meshalive</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16, marginBottom:56 }}>
            {WHY.map(w=>(
              <div key={w.t} style={{ background:'#fff', border:'1px solid #e5e7eb', borderLeft:`4px solid #f59e0b`, borderRadius:12, padding:'20px 22px' }}>
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
            <p style={{ fontSize:15, color:'#e2e8f0', lineHeight:1.8, margin:'0 0 24px', maxWidth:700 }}>Rebrandly is well-built but priced for enterprises. For Indian businesses, SMBs, and freelancers who don't need Salesforce/Marketo integration, Meshalive delivers equivalent value at 4x lower cost with native INR billing, GST invoices, and UPI support. Switch and reallocate the savings to actual marketing spend.</p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' as const }}>
              <a href="/register" style={{ padding:'12px 24px', background:'#f59e0b', color:'#fff', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>Try Meshalive free</a>
              <a href="/pricing" style={{ padding:'12px 24px', background:'rgba(255,255,255,0.08)', color:'#e2e8f0', borderRadius:10, fontWeight:600, fontSize:14, textDecoration:'none' }}>See pricing</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
