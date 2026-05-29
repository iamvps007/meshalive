'use client'
import { useState } from 'react'

function toSlug(text: string, sep: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, sep)
    .replace(new RegExp('^' + sep + '+|' + sep + '+$', 'g'), '')
}

export default function SlugGeneratorTool() {
  const [input, setInput] = useState('')
  const [sep, setSep] = useState('-')
  const [copied, setCopied] = useState<string|null>(null)

  const slug = input ? toSlug(input, sep) : ''
  const preview = input ? `https://yoursite.com/${slug || '...'}` : ''

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(key); setTimeout(()=>setCopied(null), 2000) })
  }

  const EXAMPLES = [
    'How to Track Links with UTM Parameters',
    'Best Free URL Shorteners in 2026',
    'Getting Started With The Meshalive API',
  ]

  return (
    <div style={{ maxWidth:720, fontFamily:'inherit' }}>
      <div style={{ background:'color-mix(in srgb, var(--fg,#111) 4%, transparent)', border:'1px solid var(--line-c,#e5e7eb)', borderRadius:16, padding:32, marginBottom:24 }}>

        <div style={{ marginBottom:16 }}>
          <label style={{ display:'block', fontSize:12, fontWeight:600, color:'#6b7280', marginBottom:6, letterSpacing:'0.05em', textTransform:'uppercase' }}>
            Title or text
          </label>
          <input type="text" value={input} onChange={e=>setInput(e.target.value)}
            placeholder="How to Track Links with UTM Parameters"
            style={{ width:'100%', boxSizing:'border-box', padding:'12px 14px', fontSize:15, background:'#fff', color:'#111', border:'1.5px solid #e5e7eb', borderRadius:8, outline:'none', fontFamily:'inherit' }}
          />
        </div>

        {/* Separator */}
        <div style={{ display:'flex', gap:8, marginBottom:24, alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ fontSize:13, color:'#6b7280', fontWeight:500 }}>Separator:</span>
          {[{val:'-',label:'Hyphen (-)'},{ val:'_',label:'Underscore (_)'}].map(opt => (
            <button key={opt.val} onClick={()=>setSep(opt.val)}
              style={{ padding:'6px 14px', fontSize:13, fontWeight:600, borderRadius:20, border:`1.5px solid ${sep===opt.val?'#0057ff':'#e5e7eb'}`,
                background: sep===opt.val ? '#eff6ff' : '#fff', color: sep===opt.val ? '#0057ff' : '#6b7280', cursor:'pointer' }}>
              {opt.label}
            </button>
          ))}
        </div>

        {/* Quick examples */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, color:'#9ca3af', marginBottom:8 }}>Try an example:</div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {EXAMPLES.map(e => (
              <button key={e} onClick={()=>setInput(e)}
                style={{ fontSize:11, padding:'4px 10px', background:'#f3f4f6', color:'#6b7280', border:'1px solid transparent', borderRadius:20, cursor:'pointer', fontFamily:'inherit' }}>
                {e.length > 30 ? e.slice(0,30)+'…' : e}
              </button>
            ))}
          </div>
        </div>

        {/* Output */}
        {slug ? (
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {/* Slug */}
            <div style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:10, padding:'14px 18px' }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#6b7280', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:6 }}>Slug</div>
              <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
                <code style={{ flex:1, fontSize:15, fontWeight:600, color:'#111', fontFamily:'ui-monospace,monospace', wordBreak:'break-all' }}>{slug}</code>
                <button onClick={()=>copy(slug,'slug')} style={{ padding:'7px 16px', fontSize:13, fontWeight:600, background: copied==='slug'?'#16a34a':'#0057ff', color:'#fff', border:'none', borderRadius:7, cursor:'pointer', flexShrink:0 }}>
                  {copied==='slug'?'✓ Copied!':'Copy'}
                </button>
              </div>
            </div>
            {/* Full URL preview */}
            <div style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:10, padding:'14px 18px' }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#6b7280', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:6 }}>URL preview</div>
              <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
                <code style={{ flex:1, fontSize:13, color:'#374151', fontFamily:'ui-monospace,monospace', wordBreak:'break-all' }}>{preview}</code>
                <button onClick={()=>copy(slug,'url')} style={{ padding:'7px 16px', fontSize:13, fontWeight:600, background: copied==='url'?'#16a34a':'transparent', color: copied==='url'?'#fff':'#0057ff', border:`1.5px solid ${copied==='url'?'#16a34a':'#0057ff'}`, borderRadius:7, cursor:'pointer', flexShrink:0 }}>
                  {copied==='url'?'✓ Copied!':'Copy slug'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ background:'#f9fafb', border:'1px dashed #d1d5db', borderRadius:10, padding:'20px 24px', textAlign:'center', color:'#9ca3af', fontSize:14 }}>
            Type a title above to generate a slug
          </div>
        )}
      </div>
    </div>
  )
}
