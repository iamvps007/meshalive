'use client'

import { useState, useCallback } from 'react'

const LABEL: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 600,
  color: '#6b7280',
  marginBottom: '6px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
}

const INPUT: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '11px 14px',
  fontSize: '15px',
  background: '#ffffff',
  color: '#111111',
  border: '1.5px solid #e5e7eb',
  borderRadius: '8px',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.15s',
}

const COUNTRY_CODES = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'USA / Canada' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
]

const MESSAGE_TEMPLATES = [
  'Hi, I found your website and had a quick question.',
  "Hello! I'm interested in your products/services.",
  "Hi! I'd like to get a quote please.",
  'Hello, can we schedule a call?',
]

export default function WhatsappLinkTool() {
  const [countryCode, setCountryCode] = useState('+91')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [copiedShort, setCopiedShort] = useState(false)

  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '').replace(/^0+/, '')
  const fullNumber = cleanPhone ? `${countryCode.replace('+', '')}${cleanPhone}` : ''
  const waUrl = fullNumber
    ? `https://wa.me/${fullNumber}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ''}`
    : ''

  const handleCopy = useCallback(() => {
    if (!waUrl) return
    navigator.clipboard.writeText(waUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [waUrl])

  const handleCopyPhone = useCallback(() => {
    if (!fullNumber) return
    const shortLink = `https://wa.me/${fullNumber}`
    navigator.clipboard.writeText(shortLink).then(() => {
      setCopiedShort(true)
      setTimeout(() => setCopiedShort(false), 2000)
    })
  }, [fullNumber])

  return (
    <div style={{ maxWidth: 720, fontFamily: 'inherit' }}>

      <div style={{
        background: 'color-mix(in srgb, var(--fg, #111) 4%, transparent)',
        border: '1px solid var(--line-c, #e5e7eb)',
        borderRadius: 16,
        padding: '32px',
        marginBottom: 24,
      }}>

        {/* Phone number */}
        <div style={{ marginBottom: 20 }}>
          <label style={LABEL}>WhatsApp Phone Number *</label>
          <div style={{ display: 'flex', gap: 10 }}>
            <select
              value={countryCode}
              onChange={e => setCountryCode(e.target.value)}
              style={{
                ...INPUT,
                width: 'auto',
                flex: '0 0 auto',
                padding: '11px 12px',
                fontSize: 14,
                cursor: 'pointer',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                paddingRight: 28,
                appearance: 'none',
              }}
            >
              {COUNTRY_CODES.map(c => (
                <option key={c.code} value={c.code}>{c.flag} {c.code} {c.name}</option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="98765 43210"
              style={{ ...INPUT, flex: 1 }}
            />
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 5 }}>
            Enter without country code — it's added automatically. Spaces and dashes are stripped.
          </p>
        </div>

        {/* Pre-filled message */}
        <div style={{ marginBottom: 24 }}>
          <label style={LABEL}>Pre-filled Message <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none' }}>(optional)</span></label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Hi! I'm interested in your services…"
            rows={3}
            style={{
              ...INPUT,
              resize: 'vertical',
              minHeight: 80,
              lineHeight: 1.5,
            }}
          />
          {/* Quick templates */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
            {MESSAGE_TEMPLATES.map(t => (
              <button
                key={t}
                onClick={() => setMessage(t)}
                style={{
                  fontSize: 11,
                  padding: '4px 10px',
                  background: message === t ? '#dcfce7' : '#f3f4f6',
                  color: message === t ? '#15803d' : '#6b7280',
                  border: message === t ? '1px solid #86efac' : '1px solid transparent',
                  borderRadius: 20,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.1s',
                }}
              >
                {t.length > 35 ? t.slice(0, 35) + '…' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Output */}
        {waUrl ? (
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: 10,
            padding: '16px 20px',
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#16a34a', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 10 }}>
              Your WhatsApp Link
            </div>
            <p style={{
              fontSize: 13,
              color: '#111',
              wordBreak: 'break-all',
              margin: '0 0 14px',
              fontFamily: 'ui-monospace, monospace',
              lineHeight: 1.6,
              background: '#fff',
              border: '1px solid #dcfce7',
              borderRadius: 6,
              padding: '10px 12px',
            }}>
              {waUrl}
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                onClick={handleCopy}
                style={{
                  padding: '9px 20px',
                  fontSize: 14,
                  fontWeight: 600,
                  background: copied ? '#15803d' : '#16a34a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 7,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  transition: 'background 0.15s',
                }}
              >
                {copied ? (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>
                ) : (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Link</>
                )}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '9px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  background: 'transparent',
                  color: '#16a34a',
                  border: '1.5px solid #86efac',
                  borderRadius: 7,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Test link
              </a>
            </div>
          </div>
        ) : (
          <div style={{ background: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: 10, padding: '20px 24px', textAlign: 'center', color: '#9ca3af', fontSize: 14 }}>
            Enter a phone number above to generate your WhatsApp link
          </div>
        )}
      </div>

      {/* Upsell */}
      {waUrl && (
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4, #eff6ff)',
          border: '1px solid #86efac',
          borderRadius: 12,
          padding: '20px 24px',
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginBottom: 32,
        }}>
          <div style={{ flex: '1 1 260px' }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#111', margin: '0 0 4px' }}>
              Shorten and track who clicks your WhatsApp link
            </p>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
              Get a short branded link like <code style={{ fontFamily: 'monospace', background: '#f0f9f0', padding: '1px 5px', borderRadius: 3 }}>msha.in/whatsapp</code> that tracks every click — city, device, and time. Free with Meshalive.
            </p>
          </div>
          <a href="/register" style={{
            flexShrink: 0,
            alignSelf: 'center',
            padding: '10px 20px',
            fontSize: 13,
            fontWeight: 600,
            background: '#16a34a',
            color: '#fff',
            borderRadius: 8,
            textDecoration: 'none',
            display: 'inline-flex',
          }}>
            Sign up free →
          </a>
        </div>
      )}

      {/* Use cases */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ background: '#f9fafb', padding: '14px 20px', borderBottom: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#374151', margin: 0 }}>Popular use cases in India</h3>
        </div>
        {[
          { icon: '🛒', title: 'WhatsApp Commerce', desc: 'Add a click-to-chat link to your Instagram bio, Google Business profile, or website so customers can order directly on WhatsApp.' },
          { icon: '📦', title: 'Delivery & Support', desc: 'Print a QR code on your packaging or invoices that opens a WhatsApp chat with your support team instantly.' },
          { icon: '📢', title: 'Marketing Campaigns', desc: 'Share a pre-filled message link in flyers, banners, or email — when customers tap it, their message is already written.' },
          { icon: '💼', title: 'Freelancers & Agencies', desc: 'Add your WhatsApp link to your portfolio, visiting card, and social profiles so clients can reach you in one tap.' },
        ].map(item => (
          <div key={item.title} style={{ display: 'flex', gap: 16, padding: '16px 20px', borderBottom: '1px solid #f3f4f6', alignItems: 'flex-start' }}>
            <span style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 3 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
