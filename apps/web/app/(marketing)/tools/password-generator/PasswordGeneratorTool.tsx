'use client'
import { useState, useCallback } from 'react'

const CHARS = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  digits: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?',
}

function generate(len: number, opts: { upper:boolean; lower:boolean; digits:boolean; symbols:boolean; noAmbig:boolean }) {
  let pool = ''
  if (opts.upper) pool += opts.noAmbig ? CHARS.upper.replace(/[ILO]/g,'') : CHARS.upper
  if (opts.lower) pool += opts.noAmbig ? CHARS.lower.replace(/[il0o]/g,'') : CHARS.lower
  if (opts.digits) pool += opts.noAmbig ? CHARS.digits.replace(/[01]/g,'') : CHARS.digits
  if (opts.symbols) pool += CHARS.symbols
  if (!pool) return ''
  const arr = new Uint32Array(len)
  crypto.getRandomValues(arr)
  return Array.from(arr).map(n => pool[n % pool.length]).join('')
}

function strength(pw: string) {
  if (!pw) return { label:'', color:'#e5e7eb', pct:0 }
  let score = 0
  if (pw.length >= 8) score++
  if (pw.length >= 12) score++
  if (pw.length >= 16) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  if (score <= 2) return { label:'Weak', color:'#ef4444', pct: 25 }
  if (score <= 4) return { label:'Fair', color:'#f59e0b', pct: 55 }
  if (score <= 5) return { label:'Strong', color:'#22c55e', pct: 80 }
  return { label:'Very strong', color:'#16a34a', pct: 100 }
}

export default function PasswordGeneratorTool() {
  const [len, setLen] = useState(16)
  const [opts, setOpts] = useState({ upper:true, lower:true, digits:true, symbols:false, noAmbig:false })
  const [password, setPassword] = useState(() => generate(16, { upper:true, lower:true, digits:true, symbols:false, noAmbig:false }))
  const [copied, setCopied] = useState(false)
  const [count, setCount] = useState(1)
  const [bulk, setBulk] = useState<string[]>([])

  const refresh = useCallback((l=len, o=opts) => {
    setPassword(generate(l, o))
    setBulk([])
    setCopied(false)
  }, [len, opts])

  const toggle = (key: keyof typeof opts) => {
    const next = { ...opts, [key]: !opts[key] }
    const anyChar = next.upper || next.lower || next.digits || next.symbols
    if (!anyChar) return
    setOpts(next)
    setPassword(generate(len, next))
    setBulk([])
  }

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(()=>setCopied(false),2000) })
  }

  const generateBulk = () => {
    setBulk(Array.from({length:count}, () => generate(len, opts)))
  }

  const str = strength(password)

  return (
    <div style={{ maxWidth:720, fontFamily:'inherit' }}>
      <div style={{ background:'color-mix(in srgb, var(--fg,#111) 4%, transparent)', border:'1px solid var(--line-c,#e5e7eb)', borderRadius:16, padding:32, marginBottom:24 }}>

        {/* Password display */}
        <div style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:10, padding:'18px 20px', marginBottom:20 }}>
          <div style={{ display:'flex', gap:12, alignItems:'center', flexWrap:'wrap' }}>
            <code style={{ flex:1, fontSize:18, fontWeight:700, color:'#111', fontFamily:'ui-monospace,monospace', letterSpacing:'0.04em', wordBreak:'break-all', minWidth:0 }}>
              {password || '—'}
            </code>
            <div style={{ display:'flex', gap:8, flexShrink:0 }}>
              <button onClick={()=>refresh()} title="Regenerate" style={{ padding:'8px 10px', background:'#f3f4f6', border:'1px solid #e5e7eb', borderRadius:7, cursor:'pointer', fontSize:16, lineHeight:1 }}>↻</button>
              <button onClick={()=>copy(password)} style={{ padding:'8px 18px', fontSize:13, fontWeight:600, background: copied?'#16a34a':'#0057ff', color:'#fff', border:'none', borderRadius:7, cursor:'pointer' }}>
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          {/* Strength bar */}
          {password && (
            <div style={{ marginTop:14 }}>
              <div style={{ height:4, background:'#e5e7eb', borderRadius:4, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${str.pct}%`, background:str.color, borderRadius:4, transition:'width 0.3s, background 0.3s' }} />
              </div>
              <div style={{ fontSize:12, color:str.color, fontWeight:600, marginTop:5 }}>{str.label}</div>
            </div>
          )}
        </div>

        {/* Length slider */}
        <div style={{ marginBottom:20 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
            <label style={{ fontSize:12, fontWeight:600, color:'#6b7280', letterSpacing:'0.05em', textTransform:'uppercase' }}>Length</label>
            <span style={{ fontSize:16, fontWeight:700, color:'#111', fontFamily:'ui-monospace,monospace', minWidth:28, textAlign:'right' }}>{len}</span>
          </div>
          <input type="range" min={6} max={64} value={len}
            onChange={e=>{ const l=Number(e.target.value); setLen(l); refresh(l, opts) }}
            style={{ width:'100%', accentColor:'#0057ff' }} />
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#9ca3af', marginTop:3 }}>
            <span>6</span><span>64</span>
          </div>
        </div>

        {/* Options */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
          {([
            { key:'upper', label:'Uppercase (A–Z)' },
            { key:'lower', label:'Lowercase (a–z)' },
            { key:'digits', label:'Numbers (0–9)' },
            { key:'symbols', label:'Symbols (!@#…)' },
            { key:'noAmbig', label:'No ambiguous (0/O, 1/l)' },
          ] as { key: keyof typeof opts; label: string }[]).map(o => (
            <button key={o.key} onClick={()=>toggle(o.key)}
              style={{ padding:'7px 14px', fontSize:13, fontWeight:500, borderRadius:20, border:`1.5px solid ${opts[o.key]?'#0057ff':'#e5e7eb'}`,
                background: opts[o.key]?'#eff6ff':'#fff', color: opts[o.key]?'#0057ff':'#6b7280', cursor:'pointer', transition:'all 0.1s' }}>
              {opts[o.key] ? '✓ ' : ''}{o.label}
            </button>
          ))}
        </div>

        {/* Bulk generator */}
        <div style={{ borderTop:'1px solid #f3f4f6', paddingTop:20 }}>
          <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap', marginBottom:12 }}>
            <span style={{ fontSize:13, color:'#6b7280', fontWeight:500 }}>Generate</span>
            <select value={count} onChange={e=>setCount(Number(e.target.value))}
              style={{ padding:'7px 10px', fontSize:13, border:'1.5px solid #e5e7eb', borderRadius:7, background:'#fff', color:'#111', cursor:'pointer', fontFamily:'inherit' }}>
              {[5,10,20,50].map(n=><option key={n} value={n}>{n} passwords</option>)}
            </select>
            <button onClick={generateBulk}
              style={{ padding:'8px 18px', fontSize:13, fontWeight:600, background:'transparent', color:'#0057ff', border:'1.5px solid #0057ff', borderRadius:7, cursor:'pointer' }}>
              Generate
            </button>
          </div>
          {bulk.length > 0 && (
            <div style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:10, padding:'12px 16px', maxHeight:200, overflowY:'auto' }}>
              {bulk.map((pw,i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'5px 0', borderBottom: i < bulk.length-1 ? '1px solid #f3f4f6' : 'none' }}>
                  <code style={{ fontSize:13, fontFamily:'ui-monospace,monospace', color:'#111' }}>{pw}</code>
                  <button onClick={()=>navigator.clipboard.writeText(pw)}
                    style={{ fontSize:11, padding:'3px 8px', background:'#f3f4f6', border:'none', borderRadius:4, cursor:'pointer', color:'#6b7280', flexShrink:0, marginLeft:8 }}>
                    Copy
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
