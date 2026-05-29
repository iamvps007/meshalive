'use client'
import { useState, useEffect } from 'react'

const LIMITS: Record<string, { limit: number; label: string; color: string }> = {
  'twitter': { limit:280, label:'X / Twitter', color:'#000000' },
  'instagram-caption': { limit:2200, label:'Instagram caption', color:'#e1306c' },
  'instagram-bio': { limit:150, label:'Instagram bio', color:'#e1306c' },
  'linkedin': { limit:3000, label:'LinkedIn post', color:'#0a66c2' },
  'meta-description': { limit:160, label:'Meta description', color:'#16a34a' },
  'title-tag': { limit:60, label:'Title tag (SEO)', color:'#16a34a' },
  'youtube-title': { limit:100, label:'YouTube title', color:'#ff0000' },
  'whatsapp': { limit:65536, label:'WhatsApp message', color:'#25d366' },
}

export default function CharacterCounterTool() {
  const [text, setText] = useState('')
  const [platform, setPlatform] = useState('twitter')

  const chars = text.length
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const lines = text.split('\n').length
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length
  const readTime = Math.max(1, Math.ceil(words / 200))
  const lim = LIMITS[platform]
  const remaining = lim.limit - chars
  const pct = Math.min(100, (chars / lim.limit) * 100)
  const over = remaining < 0

  return (
    <div style={{ maxWidth:720, fontFamily:'inherit' }}>
      <div style={{ background:'color-mix(in srgb, var(--fg,#111) 4%, transparent)', border:'1px solid var(--line-c,#e5e7eb)', borderRadius:16, padding:32, marginBottom:24 }}>

        {/* Platform selector */}
        <div style={{ marginBottom:16 }}>
          <label style={{ display:'block', fontSize:12, fontWeight:600, color:'#6b7280', marginBottom:8, letterSpacing:'0.05em', textTransform:'uppercase' }}>
            Check limit for
          </label>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {Object.entries(LIMITS).map(([key, val]) => (
              <button key={key} onClick={()=>setPlatform(key)}
                style={{ padding:'6px 12px', fontSize:12, fontWeight:600, borderRadius:20, border:`1.5px solid ${platform===key ? val.color : '#e5e7eb'}`,
                  background: platform===key ? `${val.color}15` : '#fff', color: platform===key ? val.color : '#6b7280', cursor:'pointer', transition:'all 0.1s' }}>
                {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <div style={{ position:'relative', marginBottom:20 }}>
          <textarea value={text} onChange={e=>setText(e.target.value)} rows={8}
            placeholder="Start typing or paste your text here…"
            style={{ width:'100%', boxSizing:'border-box', padding:'14px 16px', fontSize:15, background:'#fff', color:'#111',
              border:`1.5px solid ${over ? '#ef4444' : '#e5e7eb'}`, borderRadius:10, outline:'none', fontFamily:'inherit', resize:'vertical', lineHeight:1.7 }} />
          <div style={{ position:'absolute', bottom:10, right:12, fontSize:12, fontWeight:600,
            color: over ? '#ef4444' : pct > 80 ? '#f59e0b' : '#9ca3af' }}>
            {chars.toLocaleString()} / {lim.limit.toLocaleString()}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom:24 }}>
          <div style={{ height:5, background:'#f3f4f6', borderRadius:4, overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${pct}%`, background: over?'#ef4444': pct>80?'#f59e0b': lim.color, borderRadius:4, transition:'width 0.2s' }} />
          </div>
          <div style={{ marginTop:6, fontSize:13, fontWeight:600, color: over?'#ef4444': pct>80?'#d97706':'#6b7280' }}>
            {over ? `${Math.abs(remaining).toLocaleString()} characters over the ${lim.label} limit` : `${remaining.toLocaleString()} characters remaining for ${lim.label}`}
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(130px, 1fr))', gap:12 }}>
          {[
            { label:'Characters', value: chars.toLocaleString() },
            { label:'Words', value: words.toLocaleString() },
            { label:'Lines', value: lines.toLocaleString() },
            { label:'Sentences', value: sentences.toLocaleString() },
            { label:'Read time', value: `~${readTime} min` },
            { label:'Paragraphs', value: text.split(/\n\s*\n/).filter(p=>p.trim()).length || 0 },
          ].map(stat => (
            <div key={stat.label} style={{ background:'#f8fafc', border:'1px solid #e5e7eb', borderRadius:10, padding:'14px 16px', textAlign:'center' }}>
              <div style={{ fontSize:22, fontWeight:800, color:'#111', fontFamily:'ui-monospace,monospace' }}>{stat.value}</div>
              <div style={{ fontSize:11, color:'#9ca3af', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.05em', marginTop:3 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {text && (
          <div style={{ marginTop:16, display:'flex', gap:8 }}>
            <button onClick={()=>navigator.clipboard.writeText(text)}
              style={{ padding:'8px 16px', fontSize:13, fontWeight:600, background:'#0057ff', color:'#fff', border:'none', borderRadius:7, cursor:'pointer' }}>
              Copy text
            </button>
            <button onClick={()=>setText('')}
              style={{ padding:'8px 14px', fontSize:13, color:'#6b7280', background:'transparent', border:'1px solid #e5e7eb', borderRadius:7, cursor:'pointer' }}>
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
