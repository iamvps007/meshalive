import type { Metadata } from 'next'
import CharacterCounterTool from './CharacterCounterTool'

export const metadata: Metadata = {
  title: { absolute: 'Free Character Counter — Count Characters, Words & More | Meshalive' },
  description: 'Count characters, words, sentences, and lines instantly — free, no signup. Check Twitter/X, Instagram, LinkedIn, and meta description limits in real time.',
  keywords: ["character counter", "character count", "word counter", "count characters", "twitter character counter", "instagram character counter", "character counter online", "free character counter", "letter counter", "word count tool"],
  alternates: { canonical: 'https://meshalive.com/tools/character-counter' },
  openGraph: {
    title: { absolute: 'Free Character Counter — Count Characters, Words & More | Meshalive' },
    description: 'Count characters, words, sentences, and lines instantly — free, no signup. Check Twitter/X, Instagram, LinkedIn, and meta description limits in real time.',
    url: 'https://meshalive.com/tools/character-counter',
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
          <span>Character Counter</span>
        </div>
        <div style={{ marginBottom:40 }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:ACCENT, marginBottom:16 }}>Free Tool</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-0.03em', margin:'0 0 16px', lineHeight:1.15 }}>
            Character Counter
          </h1>
          <p style={{ fontSize:17, color:MUTED, lineHeight:1.75, margin:'0 0 8px', maxWidth:600 }}>
            Count characters, words, lines, and sentences in real time. Check limits for Twitter/X, Instagram, LinkedIn, YouTube, and SEO meta tags.
          </p>
          <p style={{ fontSize:13, color:'#9ca3af', margin:0 }}>Free · No signup · Instant results · Works offline</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <CharacterCounterTool />
        </div>
        <article style={{ fontSize:16, lineHeight:1.8, color:'#374151', maxWidth:680 }}>
          <h2 style={H2}>Character limits for popular platforms</h2>
          <p>Every platform has a different character limit. Exceeding them means your content gets cut off, rejected, or penalized in search results.</p>
          <ul>
            <li style={{marginBottom:8}}><strong>X / Twitter:</strong> 280 characters per post (premium subscribers get more)</li>
            <li style={{marginBottom:8}}><strong>Instagram caption:</strong> 2,200 characters (only the first 125 show without "more")</li>
            <li style={{marginBottom:8}}><strong>Instagram bio:</strong> 150 characters</li>
            <li style={{marginBottom:8}}><strong>LinkedIn post:</strong> 3,000 characters</li>
            <li style={{marginBottom:8}}><strong>Meta description (SEO):</strong> 155–160 characters — Google truncates longer ones</li>
            <li style={{marginBottom:8}}><strong>Title tag (SEO):</strong> 50–60 characters for optimal display in search results</li>
            <li style={{marginBottom:8}}><strong>YouTube title:</strong> 100 characters (Google shows ~70 in search)</li>
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
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Build UTM links for your social posts</div>
              </div>
            </a>
            <a href="/tools/slug-generator" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔤</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>Slug Generator</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Generate URL slugs from your titles</div>
              </div>
            </a>
            <a href="/tools/url-shortener" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔗</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>URL Shortener</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Shorten links that are too long to share</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
