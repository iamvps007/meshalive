import type { Metadata } from 'next'
import UrlEncoderTool from './UrlEncoderTool'

export const metadata: Metadata = {
  title: { absolute: 'Free URL Encoder & Decoder Online | Meshalive' },
  description: 'Encode or decode any URL string instantly — free, no signup. Supports full URL encoding with encodeURIComponent. Works in your browser.',
  keywords: ["url encoder", "url decoder", "url encoding", "percent encoding", "urlencode online", "encode url", "decode url", "url encode decode", "percent encode", "free url encoder"],
  alternates: { canonical: 'https://meshalive.com/tools/url-encoder-decoder' },
  openGraph: {
    title: { absolute: 'Free URL Encoder & Decoder Online | Meshalive' },
    description: 'Encode or decode any URL string instantly — free, no signup. Supports full URL encoding with encodeURIComponent. Works in your browser.',
    url: 'https://meshalive.com/tools/url-encoder-decoder',
    siteName: 'Meshalive',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const INK = '#111111'
const MUTED = '#6b7280'
const ACCENT = '#0057ff'
const H2: React.CSSProperties = { fontSize:24, fontWeight:700, color:INK, letterSpacing:'-0.02em', margin:'48px 0 16px' }
const CODE: React.CSSProperties = { fontFamily:'ui-monospace,monospace', background:'#f3f4f6', padding:'1px 6px', borderRadius:3, fontSize:14 }

export default function Page() {
  return (
    <div style={{ background:'#ffffff', color:INK }}>
      <div style={{ maxWidth:800, margin:'0 auto', padding:'56px 32px 96px' }}>
        <div style={{ fontSize:13, color:MUTED, marginBottom:32, display:'flex', gap:8 }}>
          <a href="/tools" style={{ color:MUTED, textDecoration:'none' }}>Tools</a>
          <span>→</span>
          <span>URL Encoder & Decoder</span>
        </div>
        <div style={{ marginBottom:40 }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:ACCENT, marginBottom:16 }}>Free Tool</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-0.03em', margin:'0 0 16px', lineHeight:1.15 }}>
            URL Encoder & Decoder
          </h1>
          <p style={{ fontSize:17, color:MUTED, lineHeight:1.75, margin:'0 0 8px', maxWidth:600 }}>
            Encode special characters into percent-encoded URL format, or decode them back — instantly, in your browser. No account needed.
          </p>
          <p style={{ fontSize:13, color:'#9ca3af', margin:0 }}>Free · No signup · 100% client-side — your data never leaves your browser</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <UrlEncoderTool />
        </div>
        <article style={{ fontSize:16, lineHeight:1.8, color:'#374151', maxWidth:680 }}>
          <h2 style={H2}>What is URL encoding?</h2>
          <p>URLs can only contain a limited set of characters. When a URL contains spaces, symbols, or non-ASCII characters, those characters must be "percent-encoded" — replaced with a % sign followed by two hex digits representing the character code.</p>
          <p>For example, a space becomes <code style={CODE}>%20</code>, an ampersand becomes <code style={CODE}>%26</code>, and a plus sign becomes <code style={CODE}>%2B</code>.</p>
          <h2 style={H2}>When do you need URL encoding?</h2>
          <ul>
            <li style={{marginBottom:10}}><strong>Query parameters</strong> — values in query strings must be encoded: <code style={CODE}>?name=John%20Doe</code></li>
            <li style={{marginBottom:10}}><strong>Form submissions</strong> — form data sent via GET is URL-encoded automatically by browsers</li>
            <li style={{marginBottom:10}}><strong>API requests</strong> — when building API URLs programmatically, encode parameter values</li>
            <li style={{marginBottom:10}}><strong>UTM parameters</strong> — campaign names with spaces or special chars need encoding in URLs</li>
          </ul>
        </article>
        {/* Related tools */}
        <div style={{ marginTop:64, borderTop:'1px solid #e5e7eb', paddingTop:40 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:'#111', marginBottom:20, letterSpacing:'-0.01em' }}>Related free tools</h2>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                        <a href="/tools/utm-builder" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>📊</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>UTM Builder</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Build properly encoded UTM URLs</div>
              </div>
            </a>
            <a href="/tools/slug-generator" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔤</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>Slug Generator</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Generate URL-safe slugs from text</div>
              </div>
            </a>
            <a href="/tools/url-shortener" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔗</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>URL Shortener</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Shorten encoded URLs for sharing</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
