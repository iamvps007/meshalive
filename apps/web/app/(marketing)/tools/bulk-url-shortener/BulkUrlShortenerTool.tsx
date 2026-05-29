'use client'
import { useState } from 'react'

export default function BulkUrlShortenerTool() {
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)

  const urls = input.split('\n').map(l => l.trim()).filter(Boolean)
  const valid = urls.filter(u => { try { new URL(u.startsWith('http') ? u : 'https://'+u); return true } catch { return false } })
  const invalid = urls.filter(u => !valid.includes(u))

  const mockShort = (url: string, i: number) => {
    const codes = ['x7k2m','p9nqr','j4wbt','m8xyc','t3vzd','k6hls','n2fgp','q5rwu']
    return `https://msha.in/${codes[i % codes.length]}`
  }

  const copyAll = () => {
    const text = valid.map((u,i) => `${u} → ${mockShort(u,i)}`).join('\n')
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(()=>setCopied(false),2000) })
  }

  return (
    <div style={{ maxWidth:720, fontFamily:'inherit' }}>
      <div style={{ background:'color-mix(in srgb, var(--fg,#111) 4%, transparent)', border:'1px solid var(--line-c,#e5e7eb)', borderRadius:16, padding:32, marginBottom:24 }}>

        <div style={{ marginBottom:16 }}>
          <label style={{ display:'block', fontSize:12, fontWeight:600, color:'#6b7280', marginBottom:6, letterSpacing:'0.05em', textTransform:'uppercase' }}>
            Paste URLs — one per line
          </label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={8}
            placeholder={'https://example.com/very-long-url-here\nhttps://yoursite.com/another-page\nhttps://docs.google.com/spreadsheet/...'}
            style={{ width:'100%', boxSizing:'border-box', padding:'14px 16px', fontSize:13, background:'#fff', color:'#111',
              border:'1.5px solid #e5e7eb', borderRadius:10, outline:'none', fontFamily:'ui-monospace,monospace', resize:'vertical', lineHeight:1.7 }} />
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:5, fontSize:12, color:'#9ca3af' }}>
            <span>{urls.length} URL{urls.length !== 1 ? 's' : ''} detected · {valid.length} valid</span>
            {invalid.length > 0 && <span style={{ color:'#f87171' }}>{invalid.length} invalid</span>}
          </div>
        </div>

        {valid.length > 0 ? (
          <>
            {/* Preview table */}
            <div style={{ border:'1px solid #e5e7eb', borderRadius:10, overflow:'hidden', marginBottom:16 }}>
              <div style={{ background:'#f8fafc', padding:'10px 16px', borderBottom:'1px solid #e5e7eb', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontSize:12, fontWeight:700, color:'#6b7280', letterSpacing:'0.05em', textTransform:'uppercase' }}>Preview</span>
                <span style={{ fontSize:11, color:'#9ca3af' }}>Sign up to activate real short links</span>
              </div>
              <div style={{ maxHeight:260, overflowY:'auto' }}>
                {valid.map((url, i) => (
                  <div key={i} style={{ display:'flex', gap:12, padding:'10px 16px', borderBottom: i < valid.length-1 ? '1px solid #f3f4f6':'none', alignItems:'center', flexWrap:'wrap' }}>
                    <div style={{ flex:'1 1 200px', fontSize:12, color:'#6b7280', fontFamily:'ui-monospace,monospace', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                      {url}
                    </div>
                    <div style={{ fontSize:13, color:'#9ca3af', flexShrink:0 }}>→</div>
                    <div style={{ fontSize:13, fontWeight:600, color:'#0057ff', fontFamily:'ui-monospace,monospace', flexShrink:0, opacity:0.5, filter:'blur(2px)', userSelect:'none' }}>
                      {mockShort(url, i)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background:'linear-gradient(135deg,#eff6ff,#f0fdf4)', border:'1px solid #bfdbfe', borderRadius:12, padding:'20px 24px', display:'flex', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
              <div style={{ flex:'1 1 220px' }}>
                <p style={{ fontSize:14, fontWeight:700, color:'#111', margin:'0 0 4px' }}>
                  Shorten all {valid.length} URLs instantly
                </p>
                <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.6, margin:0 }}>
                  Create a free Meshalive account to shorten all your links at once, track every click, and export results as CSV — no limits, no credit card.
                </p>
              </div>
              <a href="/register" style={{ flexShrink:0, alignSelf:'center', padding:'10px 22px', fontSize:13, fontWeight:700, background:'#0057ff', color:'#fff', borderRadius:8, textDecoration:'none', display:'inline-flex', whiteSpace:'nowrap' }}>
                Sign up free →
              </a>
            </div>
          </>
        ) : (
          <div style={{ background:'#f9fafb', border:'1px dashed #d1d5db', borderRadius:10, padding:'20px 24px', textAlign:'center', color:'#9ca3af', fontSize:14 }}>
            Paste your URLs above — one per line — to get started
          </div>
        )}
      </div>

      {/* How it works */}
      <div style={{ border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden' }}>
        <div style={{ background:'#f9fafb', padding:'14px 20px', borderBottom:'1px solid #e5e7eb' }}>
          <h3 style={{ fontSize:13, fontWeight:700, color:'#374151', margin:0 }}>What you get with bulk shortening</h3>
        </div>
        {[
          { icon:'⚡', t:'Shorten hundreds of URLs at once', d:'Paste up to 500 URLs, get back clean short links in seconds.' },
          { icon:'📊', t:'Track every click individually', d:'Each short link has its own analytics — geo, device, referrer, and time breakdown.' },
          { icon:'📥', t:'Export results as CSV', d:'Download the full table of original URLs, short links, and click counts.' },
          { icon:'🔗', t:'Use your own domain', d:'Brand your short links with a custom domain like go.yourcompany.com.' },
        ].map(item => (
          <div key={item.t} style={{ display:'flex', gap:14, padding:'14px 20px', borderBottom:'1px solid #f3f4f6', alignItems:'flex-start' }}>
            <span style={{ fontSize:20, flexShrink:0, marginTop:1 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:'#111', marginBottom:2 }}>{item.t}</div>
              <div style={{ fontSize:13, color:'#6b7280', lineHeight:1.6 }}>{item.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
