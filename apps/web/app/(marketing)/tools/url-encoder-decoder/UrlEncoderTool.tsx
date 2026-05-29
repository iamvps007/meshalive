'use client'
import { useState } from 'react'

const LABEL: React.CSSProperties = {
  display:'block', fontSize:12, fontWeight:600, color:'#6b7280',
  marginBottom:6, letterSpacing:'0.05em', textTransform:'uppercase',
}
const INPUT: React.CSSProperties = {
  width:'100%', boxSizing:'border-box', padding:'11px 14px', fontSize:15,
  background:'#fff', color:'#111', border:'1.5px solid #e5e7eb',
  borderRadius:8, outline:'none', fontFamily:'inherit',
}

export default function UrlEncoderTool() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'encode'|'decode'>('encode')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const run = () => {
    setError(''); setOutput('')
    if (!input.trim()) return
    try {
      const result = mode === 'encode'
        ? encodeURIComponent(input.trim())
        : decodeURIComponent(input.trim())
      setOutput(result)
    } catch {
      setError(mode === 'decode' ? 'Invalid encoded string — check for malformed % sequences.' : 'Encoding failed.')
    }
  }

  const copy = () => {
    navigator.clipboard.writeText(output).then(() => { setCopied(true); setTimeout(()=>setCopied(false), 2000) })
  }

  const swap = () => {
    setInput(output); setOutput(''); setError('')
    setMode(m => m === 'encode' ? 'decode' : 'encode')
  }

  return (
    <div style={{ maxWidth:720, fontFamily:'inherit' }}>
      <div style={{ background:'color-mix(in srgb, var(--fg,#111) 4%, transparent)', border:'1px solid var(--line-c,#e5e7eb)', borderRadius:16, padding:32, marginBottom:24 }}>
        {/* Mode toggle */}
        <div style={{ display:'flex', gap:8, marginBottom:24, background:'#f3f4f6', borderRadius:10, padding:4 }}>
          {(['encode','decode'] as const).map(m => (
            <button key={m} onClick={()=>{setMode(m);setOutput('');setError('')}}
              style={{ flex:1, padding:'9px 16px', fontSize:14, fontWeight:600, borderRadius:7, border:'none', cursor:'pointer',
                background: mode===m ? '#fff' : 'transparent', color: mode===m ? '#111' : '#6b7280',
                boxShadow: mode===m ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', transition:'all 0.15s',
              }}>
              {m === 'encode' ? 'URL Encode' : 'URL Decode'}
            </button>
          ))}
        </div>

        <div style={{ marginBottom:16 }}>
          <label style={LABEL}>{mode === 'encode' ? 'Text to encode' : 'Encoded URL to decode'}</label>
          <textarea value={input} onChange={e=>{setInput(e.target.value);setError('')}}
            rows={4} placeholder={mode === 'encode' ? 'hello world / special chars like &, =, ?' : 'hello%20world%20%2F%20special%20chars'}
            style={{ ...INPUT, resize:'vertical', lineHeight:1.6, fontFamily:'ui-monospace,monospace', fontSize:13 }} />
          {error && <p role="alert" style={{ margin:'6px 0 0', fontSize:13, color:'#f87171' }}>{error}</p>}
        </div>

        <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
          <button onClick={run} style={{ padding:'10px 24px', fontSize:14, fontWeight:600, background:'#0057ff', color:'#fff', border:'none', borderRadius:8, cursor:'pointer' }}>
            {mode === 'encode' ? 'Encode' : 'Decode'}
          </button>
          {output && (
            <button onClick={swap} style={{ padding:'10px 16px', fontSize:13, color:'#6b7280', background:'transparent', border:'1px solid #e5e7eb', borderRadius:8, cursor:'pointer' }}>
              ⇄ Swap & {mode === 'encode' ? 'Decode' : 'Encode'}
            </button>
          )}
          <button onClick={()=>{setInput('');setOutput('');setError('')}} style={{ padding:'10px 14px', fontSize:13, color:'#6b7280', background:'transparent', border:'1px solid #e5e7eb', borderRadius:8, cursor:'pointer' }}>
            Clear
          </button>
        </div>

        {output && (
          <div style={{ marginTop:24, background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:10, padding:'16px 20px' }}>
            <div style={{ fontSize:12, fontWeight:600, color:'#6b7280', letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:8 }}>Result</div>
            <p style={{ margin:'0 0 14px', fontSize:13, wordBreak:'break-all', fontFamily:'ui-monospace,monospace', lineHeight:1.7, color:'#111', background:'#fff', border:'1px solid #e5e7eb', borderRadius:6, padding:'10px 12px' }}>
              {output}
            </p>
            <button onClick={copy} style={{ padding:'8px 18px', fontSize:13, fontWeight:600, background: copied ? '#16a34a' : '#0057ff', color:'#fff', border:'none', borderRadius:7, cursor:'pointer' }}>
              {copied ? '✓ Copied!' : 'Copy result'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
