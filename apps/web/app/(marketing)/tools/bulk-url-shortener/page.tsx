import type { Metadata } from 'next'
import BulkUrlShortenerTool from './BulkUrlShortenerTool'

export const metadata: Metadata = {
  title: { absolute: 'Free Bulk URL Shortener — Shorten Multiple Links at Once | Meshalive' },
  description: 'Shorten multiple URLs at once for free. Paste up to 500 links, get short URLs instantly. No credit card, no account required for preview.',
  keywords: ["bulk url shortener", "shorten multiple urls", "bulk link shortener", "mass url shortener", "shorten urls in bulk", "multiple url shortener", "batch url shortener", "shorten many links", "bulk short links", "free bulk url shortener"],
  alternates: { canonical: 'https://meshalive.com/tools/bulk-url-shortener' },
  openGraph: {
    title: { absolute: 'Free Bulk URL Shortener — Shorten Multiple Links at Once | Meshalive' },
    description: 'Shorten multiple URLs at once for free. Paste up to 500 links, get short URLs instantly. No credit card, no account required for preview.',
    url: 'https://meshalive.com/tools/bulk-url-shortener',
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
          <span>Bulk URL Shortener</span>
        </div>
        <div style={{ marginBottom:40 }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:ACCENT, marginBottom:16 }}>Free Tool</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-0.03em', margin:'0 0 16px', lineHeight:1.15 }}>
            Bulk URL Shortener
          </h1>
          <p style={{ fontSize:17, color:MUTED, lineHeight:1.75, margin:'0 0 8px', maxWidth:600 }}>
            Shorten hundreds of URLs at once. Paste your list, get clean short links with individual click analytics for every URL.
          </p>
          <p style={{ fontSize:13, color:'#9ca3af', margin:0 }}>Free · Shorten up to 500 URLs at once · Export as CSV</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <BulkUrlShortenerTool />
        </div>
        <article style={{ fontSize:16, lineHeight:1.8, color:'#374151', maxWidth:680 }}>
          <h2 style={H2}>When do you need bulk URL shortening?</h2>
          <p>Bulk URL shortening is useful whenever you have a spreadsheet, campaign list, or dataset full of long URLs that need to be made shareable or trackable.</p>
          <ul>
            <li style={{marginBottom:10}}><strong>Email campaigns</strong> — shorten every link in a campaign so you can track clicks per link, not just opens</li>
            <li style={{marginBottom:10}}><strong>Social media schedules</strong> — pre-shorten all links in your content calendar at once</li>
            <li style={{marginBottom:10}}><strong>Affiliate marketing</strong> — replace long affiliate URLs with clean branded links across all your content</li>
            <li style={{marginBottom:10}}><strong>QR code campaigns</strong> — shorten links before generating QR codes so you can update the destination later</li>
            <li style={{marginBottom:10}}><strong>Print materials</strong> — shorten URLs for business cards, flyers, and brochures where space is limited</li>
          </ul>
        </article>
        {/* Related tools */}
        <div style={{ marginTop:64, borderTop:'1px solid #e5e7eb', paddingTop:40 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:'#111', marginBottom:20, letterSpacing:'-0.01em' }}>Related free tools</h2>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                        <a href="/tools/url-shortener" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>🔗</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>URL Shortener</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Shorten a single URL quickly</div>
              </div>
            </a>
            <a href="/tools/utm-builder" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>📊</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>UTM Builder</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Add UTM tracking to each URL first</div>
              </div>
            </a>
            <a href="/tools/qr-code-generator" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>⬛</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>QR Code Generator</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Generate QR codes for your short links</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
