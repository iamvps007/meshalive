'use client'
import * as gtag from '@/lib/gtag';

import { useState, useEffect, useRef, useCallback } from 'react'
import QRCode from 'qrcode'

const POPULAR_HANDLES = [
  '@okhdfcbank',
  '@okicici',
  '@okaxis',
  '@paytm',
  '@ybl',
  '@upi',
  '@ibl',
]

const PRESET_AMOUNTS = ['100', '250', '500', '1000', '2000']

export default function UpiQrTool() {
  const [upiId, setUpiId] = useState('')
  const [payeeName, setPayeeName] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')
  const [cardTheme, setCardTheme] = useState<'emerald' | 'indigo' | 'midnight'>('emerald')
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedUpi, setCopiedUpi] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const printAreaRef = useRef<HTMLDivElement>(null)

  // Construct NPCI UPI Deep Link
  const buildUpiString = useCallback(() => {
    const cleanId = upiId.trim()
    const cleanName = payeeName.trim()
    if (!cleanId) return ''

    let uri = `upi://pay?pa=${encodeURIComponent(cleanId)}`
    if (cleanName) {
      uri += `&pn=${encodeURIComponent(cleanName)}`
    }
    if (amount && Number(amount) > 0) {
      uri += `&am=${encodeURIComponent(Number(amount).toFixed(2))}&cu=INR`
    }
    if (note.trim()) {
      uri += `&tn=${encodeURIComponent(note.trim())}`
    }
    return uri
  }, [upiId, payeeName, amount, note])

  const upiUri = buildUpiString()

  // Generate QR Code with high error correction (H) so it scans reliably even on paper
  useEffect(() => {
    if (!upiId.trim()) {
      setQrDataUrl('')
      return
    }

    // Validate UPI ID format roughly (contains @)
    if (!upiId.includes('@') || upiId.startsWith('@') || upiId.endsWith('@')) {
      setError('Please enter a valid UPI ID (e.g. name@okhdfcbank or 9876543210@paytm)')
    } else {
      setError(null)
    }

    const uri = buildUpiString()
    QRCode.toDataURL(uri, {
      width: 700,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    })
      .then(url => {
        setQrDataUrl(url)
        gtag.event('generate_upi_qr', { has_name: Boolean(payeeName), has_amount: Boolean(amount) })
      })
      .catch(err => {
        console.error('QR code generation error:', err)
      })
  }, [upiId, payeeName, amount, note, buildUpiString])

  const handleAppendHandle = (handle: string) => {
    const raw = upiId.trim()
    if (!raw) {
      setUpiId(handle)
      return
    }
    if (raw.includes('@')) {
      const prefix = raw.split('@')[0]
      setUpiId(`${prefix}${handle}`)
    } else {
      setUpiId(`${raw}${handle}`)
    }
  }

  const handleCopyLink = () => {
    if (!upiUri) return
    navigator.clipboard.writeText(upiUri).then(() => {
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2200)
    })
  }

  const handleCopyUpi = () => {
    if (!upiId) return
    navigator.clipboard.writeText(upiId.trim()).then(() => {
      setCopiedUpi(true)
      setTimeout(() => setCopiedUpi(false), 2200)
    })
  }

  const handleDownloadImage = () => {
    if (!qrDataUrl) return
    const link = document.createElement('a')
    const fileName = payeeName.trim()
      ? `upi-qr-${payeeName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`
      : 'upi-payment-qr.png'
    link.href = qrDataUrl
    link.download = fileName
    link.click()
    gtag.event('download_upi_qr')
  }

  const handlePrint = () => {
    window.print()
    gtag.event('print_upi_standee')
  }

  const getWhatsAppShareUrl = () => {
    const cleanId = upiId.trim()
    const cleanName = payeeName.trim() || 'me'
    const amtStr = amount && Number(amount) > 0 ? ` of ₹${Number(amount).toLocaleString('en-IN')}` : ''
    const msg = `Hi! Please make the payment${amtStr} to ${cleanName} via UPI.\n\nUPI ID: ${cleanId}\nDirect Pay Link: ${upiUri}\n\nGenerated with Meshalive (meshalive.com)`
    return `https://wa.me/?text=${encodeURIComponent(msg)}`
  }

  // Theme styling for the preview standee
  const themeStyles = {
    emerald: {
      headerBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      accentColor: '#059669',
      badgeBg: '#ecfdf5',
      badgeColor: '#065f46',
    },
    indigo: {
      headerBg: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
      accentColor: '#4f46e5',
      badgeBg: '#eef2ff',
      badgeColor: '#3730a3',
    },
    midnight: {
      headerBg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      accentColor: '#0f172a',
      badgeBg: '#f1f5f9',
      badgeColor: '#1e293b',
    },
  }[cardTheme]

  return (
    <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #printable-standee, #printable-standee * {
            visibility: visible !important;
          }
          #printable-standee {
            position: absolute !important;
            left: 50% !important;
            top: 20px !important;
            transform: translateX(-50%) !important;
            width: 380px !important;
            box-shadow: none !important;
            border: 2px solid #000000 !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          alignItems: 'start',
        }}
      >
        {/* Left Column: Form Controls */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 20,
            padding: '28px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#059669',
                background: '#ecfdf5',
                padding: '3px 10px',
                borderRadius: 999,
                marginBottom: 8,
              }}
            >
              100% Free • No KYC • Instant
            </span>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: 0 }}>
              Payment Details
            </h2>
            <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
              Direct bank-to-bank transfer with zero transaction cuts.
            </p>
          </div>

          {/* UPI ID Input */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#475569',
                marginBottom: 6,
              }}
            >
              UPI ID / VPA <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. rahul@okhdfcbank or 9876543210@paytm"
              value={upiId}
              onChange={e => setUpiId(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                fontSize: 15,
                borderRadius: 10,
                border: error ? '1.5px solid #ef4444' : '1.5px solid #cbd5e1',
                outline: 'none',
                background: '#f8fafc',
                color: '#0f172a',
                fontFamily: 'monospace',
              }}
            />
            {error && (
              <p style={{ fontSize: 12, color: '#ef4444', margin: '4px 0 0' }}>{error}</p>
            )}

            {/* Quick Handle Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
              {POPULAR_HANDLES.map(h => (
                <button
                  key={h}
                  type="button"
                  onClick={() => handleAppendHandle(h)}
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: 6,
                    border: '1px solid #e2e8f0',
                    background: '#ffffff',
                    color: '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#059669'
                    e.currentTarget.style.color = '#059669'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e2e8f0'
                    e.currentTarget.style.color = '#475569'
                  }}
                >
                  +{h}
                </button>
              ))}
            </div>
          </div>

          {/* Payee / Business Name */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#475569',
                marginBottom: 6,
              }}
            >
              Payee or Merchant Name
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh Stores or Sharma Freelance"
              value={payeeName}
              onChange={e => setPayeeName(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                fontSize: 14,
                borderRadius: 10,
                border: '1.5px solid #cbd5e1',
                outline: 'none',
                background: '#f8fafc',
                color: '#0f172a',
              }}
            />
          </div>

          {/* Amount (Optional) */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#475569',
                }}
              >
                Fixed Amount (₹ INR) — Optional
              </label>
              {amount && (
                <button
                  type="button"
                  onClick={() => setAmount('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    fontSize: 11,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Clear Amount
                </button>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontWeight: 700,
                  color: '#64748b',
                  fontSize: 16,
                }}
              >
                ₹
              </span>
              <input
                type="number"
                placeholder="Leave blank for any custom amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                min="1"
                step="any"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '12px 14px 12px 32px',
                  fontSize: 14,
                  borderRadius: 10,
                  border: '1.5px solid #cbd5e1',
                  outline: 'none',
                  background: '#f8fafc',
                  color: '#0f172a',
                }}
              />
            </div>

            {/* Quick Amount Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
              {PRESET_AMOUNTS.map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 6,
                    border: amount === p ? '1px solid #059669' : '1px solid #e2e8f0',
                    background: amount === p ? '#ecfdf5' : '#ffffff',
                    color: amount === p ? '#059669' : '#475569',
                    cursor: 'pointer',
                  }}
                >
                  ₹{Number(p).toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* Transaction Note */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#475569',
                marginBottom: 6,
              }}
            >
              Note / Purpose (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Website Design or Table 4"
              value={note}
              onChange={e => setNote(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                fontSize: 14,
                borderRadius: 10,
                border: '1.5px solid #cbd5e1',
                outline: 'none',
                background: '#f8fafc',
                color: '#0f172a',
              }}
            />
          </div>

          {/* Standee Color Theme Selector */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#475569',
                marginBottom: 8,
              }}
            >
              Card Header Accent
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { id: 'emerald', label: 'Emerald Green', bg: '#059669' },
                { id: 'indigo', label: 'Royal Indigo', bg: '#4f46e5' },
                { id: 'midnight', label: 'Midnight Black', bg: '#0f172a' },
              ].map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCardTheme(t.id as any)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    border: cardTheme === t.id ? '2px solid #0f172a' : '1px solid #cbd5e1',
                    background: cardTheme === t.id ? '#f1f5f9' : '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: t.bg,
                      display: 'inline-block',
                    }}
                  />
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Printable Standee & Sharing Controls */}
        <div>
          {/* The Physical Standee Card to Preview & Print */}
          <div
            id="printable-standee"
            ref={printAreaRef}
            style={{
              background: '#ffffff',
              borderRadius: 20,
              border: '2px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              maxWidth: 380,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            {/* Header Standee Banner */}
            <div
              style={{
                background: themeStyles.headerBg,
                padding: '20px 16px',
                color: '#ffffff',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  marginBottom: 4,
                }}
              >
                Scan &amp; Pay With Any UPI App
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                {payeeName.trim() || 'Accepted Here'}
              </div>
            </div>

            {/* Supported App Badges Row */}
            <div
              style={{
                background: '#f8fafc',
                borderBottom: '1px solid #f1f5f9',
                padding: '8px 12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                fontSize: 11,
                fontWeight: 700,
                color: '#475569',
              }}
            >
              <span style={{ color: '#2563eb' }}>GPay</span>
              <span style={{ color: '#6366f1' }}>PhonePe</span>
              <span style={{ color: '#0284c7' }}>Paytm</span>
              <span style={{ color: '#ea580c' }}>BHIM</span>
              <span style={{ color: '#0f172a' }}>Cred</span>
            </div>

            {/* QR Code Canvas Area */}
            <div style={{ padding: '24px 20px 16px' }}>
              <div
                style={{
                  background: '#ffffff',
                  padding: 12,
                  borderRadius: 16,
                  display: 'inline-block',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="UPI QR Code"
                    style={{
                      width: 230,
                      height: 230,
                      display: 'block',
                      borderRadius: 8,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 230,
                      height: 230,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#f8fafc',
                      borderRadius: 8,
                      color: '#94a3b8',
                      fontSize: 13,
                      padding: 16,
                    }}
                  >
                    Enter your UPI ID to generate live QR code
                  </div>
                )}
              </div>

              {/* Payee Info & Optional Amount */}
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: '#0f172a',
                    background: '#f1f5f9',
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: 999,
                    letterSpacing: '0.02em',
                  }}
                >
                  {upiId.trim() || 'yourname@upi'}
                </div>

                {amount && Number(amount) > 0 && (
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 22,
                      fontWeight: 800,
                      color: themeStyles.accentColor,
                    }}
                  >
                    ₹{Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </div>
                )}

                {note.trim() && (
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 12,
                      color: '#64748b',
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{note.trim()}&rdquo;
                  </div>
                )}
              </div>
            </div>

            {/* Standee Footer */}
            <div
              style={{
                borderTop: '1px dashed #e2e8f0',
                padding: '10px 16px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>
                100% Direct Bank Transfer
              </span>
              <span style={{ fontSize: 11, color: '#cbd5e1' }}>•</span>
              <span
                style={{
                  fontSize: 11,
                  color: '#64748b',
                  fontWeight: 700,
                }}
              >
                meshalive.com
              </span>
            </div>
          </div>

          {/* Actions & Sharing Toolbar */}
          <div
            style={{
              marginTop: 20,
              maxWidth: 380,
              margin: '20px auto 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {/* Download & Print Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <button
                type="button"
                onClick={handleDownloadImage}
                disabled={!qrDataUrl}
                style={{
                  padding: '12px 14px',
                  background: '#0f172a',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 700,
                  borderRadius: 10,
                  border: 'none',
                  cursor: qrDataUrl ? 'pointer' : 'not-allowed',
                  opacity: qrDataUrl ? 1 : 0.6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                <span>📥</span> Download PNG
              </button>
              <button
                type="button"
                onClick={handlePrint}
                disabled={!qrDataUrl}
                style={{
                  padding: '12px 14px',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: 13,
                  fontWeight: 700,
                  borderRadius: 10,
                  border: '1.5px solid #0f172a',
                  cursor: qrDataUrl ? 'pointer' : 'not-allowed',
                  opacity: qrDataUrl ? 1 : 0.6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                <span>🖨️</span> Print Standee
              </button>
            </div>

            {/* WhatsApp Share Link */}
            {upiId.trim() && (
              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 14px',
                  background: '#25d366',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 700,
                  borderRadius: 10,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                <span>💬</span> Share Payment Request on WhatsApp
              </a>
            )}

            {/* Copy Links & Mobile Open */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <button
                type="button"
                onClick={handleCopyLink}
                disabled={!upiUri}
                style={{
                  padding: '9px 12px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#334155',
                  cursor: upiUri ? 'pointer' : 'not-allowed',
                }}
              >
                {copiedLink ? '✓ Copied URI Link' : 'Copy UPI Link'}
              </button>

              <button
                type="button"
                onClick={handleCopyUpi}
                disabled={!upiId.trim()}
                style={{
                  padding: '9px 12px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#334155',
                  cursor: upiId.trim() ? 'pointer' : 'not-allowed',
                }}
              >
                {copiedUpi ? '✓ Copied UPI ID' : 'Copy UPI ID'}
              </button>
            </div>

            {/* Mobile Direct Pay Button (Active on Phones) */}
            {upiUri && (
              <a
                href={upiUri}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#059669',
                  background: '#ecfdf5',
                  padding: '8px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  marginTop: 2,
                }}
              >
                📱 Testing on Mobile? Click here to launch UPI app directly
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
