import type { Metadata } from 'next'
import PasswordGeneratorTool from './PasswordGeneratorTool'

export const metadata: Metadata = {
  title: { absolute: 'Free Password Generator — Strong Random Passwords | Meshalive' },
  description: 'Generate strong, random passwords instantly — free, no signup. Choose length, include symbols, uppercase, numbers. Cryptographically secure, generated in your browser.',
  keywords: ["password generator", "random password generator", "strong password generator", "secure password generator", "free password generator", "password maker", "generate password", "password creator", "safe password", "online password generator"],
  alternates: { canonical: 'https://meshalive.com/tools/password-generator' },
  openGraph: {
    title: { absolute: 'Free Password Generator — Strong Random Passwords | Meshalive' },
    description: 'Generate strong, random passwords instantly — free, no signup. Choose length, include symbols, uppercase, numbers. Cryptographically secure, generated in your browser.',
    url: 'https://meshalive.com/tools/password-generator',
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
          <span>Password Generator</span>
        </div>
        <div style={{ marginBottom:40 }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:ACCENT, marginBottom:16 }}>Free Tool</div>
          <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-0.03em', margin:'0 0 16px', lineHeight:1.15 }}>
            Password Generator
          </h1>
          <p style={{ fontSize:17, color:MUTED, lineHeight:1.75, margin:'0 0 8px', maxWidth:600 }}>
            Generate strong, cryptographically secure passwords instantly. No data is sent to any server — your passwords are generated entirely in your browser.
          </p>
          <p style={{ fontSize:13, color:'#9ca3af', margin:0 }}>Free · No signup · Cryptographically secure · Never leaves your browser</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <PasswordGeneratorTool />
        </div>
        <article style={{ fontSize:16, lineHeight:1.8, color:'#374151', maxWidth:680 }}>
          <h2 style={H2}>What makes a password strong?</h2>
          <p>A strong password has three properties: it is long (12+ characters), it is random (not based on words or patterns), and it uses a mix of character types (uppercase, lowercase, numbers, symbols).</p>
          <p>A 16-character random password using all character types has approximately 95^16 = 44 quadrillion possible combinations — effectively uncrackable with current hardware.</p>
          <h2 style={H2}>Password security tips</h2>
          <ul>
            <li style={{marginBottom:10}}><strong>Use a unique password for every account.</strong> If one site is breached, your other accounts remain safe.</li>
            <li style={{marginBottom:10}}><strong>Use a password manager.</strong> Tools like Bitwarden (free), 1Password, or Dashlane store and autofill your passwords so you only need to remember one master password.</li>
            <li style={{marginBottom:10}}><strong>Enable two-factor authentication (2FA).</strong> Even if someone gets your password, they cannot log in without the second factor.</li>
            <li style={{marginBottom:10}}><strong>Never reuse passwords.</strong> Password reuse is the #1 cause of account takeovers.</li>
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
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Encode special characters for web use</div>
              </div>
            </a>
            <a href="/tools/bulk-url-shortener" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>📋</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>Bulk URL Shortener</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Shorten multiple links at once</div>
              </div>
            </a>
            <a href="/tools/qr-code-generator" style={{ display:'flex', gap:12, padding:'14px 18px', background:'#fafafa', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'inherit', flex:'1 1 200px', minWidth:200, transition:'border-color 0.15s' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>⬛</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#111', marginBottom:2 }}>QR Code Generator</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>Generate free QR codes</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
