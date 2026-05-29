import type { Metadata } from 'next'
import SlugGeneratorTool from './SlugGeneratorTool'

export const metadata: Metadata = {
  title: { absolute: 'Free URL Slug Generator — Convert Text to URL-Friendly Slugs | Meshalive' },
  description: 'Generate clean, SEO-friendly URL slugs from any title or text — free, instant, no signup. Supports hyphen or underscore separators.',
  keywords: ["url slug generator", "slug generator", "url slug", "seo slug", "slug maker", "convert title to url", "permalink generator", "url friendly text", "slug creator", "blog slug"],
  alternates: { canonical: 'https://meshalive.com/tools/slug-generator' },
  openGraph: {
    title: { absolute: 'Free URL Slug Generator — Convert Text to URL-Friendly Slugs | Meshalive' },
    description: 'Generate clean, SEO-friendly URL slugs from any title or text — free, instant, no signup. Supports hyphen or underscore separators.',
    url: 'https://meshalive.com/tools/slug-generator',
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
          <span>URL Slug Generator</span>
        </div>
        <div style={{ marginBottom:40 }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:ACCENT, marginBottom:16 }}>Free Tool</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-0.03em', margin:'0 0 16px', lineHeight:1.15 }}>
            URL Slug Generator
          </h1>
          <p style={{ fontSize:17, color:MUTED, lineHeight:1.75, margin:'0 0 8px', maxWidth:600 }}>
            Convert any title or text into a clean, SEO-friendly URL slug. Removes special characters, lowercases everything, and handles spaces automatically.
          </p>
          <p style={{ fontSize:13, color:'#9ca3af', margin:0 }}>Free · No signup · Instant results</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <SlugGeneratorTool />
        </div>
        <article style={{ fontSize:16, lineHeight:1.8, color:'#374151', maxWidth:680 }}>
          <h2 style={H2}>What is a URL slug?</h2>
          <p>A URL slug is the part of a URL that identifies a specific page in a human-readable way. For a blog post titled "How to Track Links with UTM Parameters", the slug would be <code style={CODE}>how-to-track-links-with-utm-parameters</code>.</p>
          <p>Good slugs are lowercase, use hyphens instead of spaces, contain no special characters, and describe the content accurately.</p>
          <h2 style={H2}>URL slug best practices</h2>
          <ul>
            <li style={{marginBottom:10}}><strong>Use hyphens, not underscores.</strong> Google treats hyphens as word separators; underscores join words together in search indexing.</li>
            <li style={{marginBottom:10}}><strong>Keep it short.</strong> Shorter slugs are easier to share and read. Remove stop words like "a", "the", "and" when possible.</li>
            <li style={{marginBottom:10}}><strong>Include your target keyword.</strong> The slug is an on-page SEO factor — put the primary keyword near the front.</li>
            <li style={{marginBottom:10}}><strong>Never change a slug after publishing.</strong> Changing a slug breaks inbound links and loses page authority. Set it once and keep it.</li>
          </ul>
        </article>
        {/* Related tools */}
        <div style={{ marginTop:64, borderTop:'1px solid #e5e7eb', paddingTop:40 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:'#111', marginBottom:20, letterSpacing:'-0.01em' }}>Related free tools</h2>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                        <a href="/tools/url-encoder-decoder" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>⚙️</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>URL Encoder / Decoder</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Encode special characters in URLs</div>
              </div>
            </a>
            <a href="/tools/character-counter" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>✍️</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>Character Counter</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Check title length before converting</div>
              </div>
            </a>
            <a href="/tools/utm-builder" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>📊</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>UTM Builder</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Add UTM parameters to your slugged URLs</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
