'use client'

import QRCode from 'qrcode'
import { useState, useRef } from 'react'

const SIZE_OPTIONS = [
  { label: '200 px — small / digital', value: 200 },
  { label: '300 px — standard', value: 300 },
  { label: '400 px — print-ready', value: 400 },
  { label: '500 px — high-res / signage', value: 500 },
]

export default function QrCodeTool() {
  const [input, setInput] = useState('')
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [size, setSize] = useState<number>(300)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleGenerate = async () => {
    const trimmed = input.trim()
    if (!trimmed) {
      setError('Please enter a URL or text to generate a QR code.')
      inputRef.current?.focus()
      return
    }
    setError(null)
    setLoading(true)
    try {
      const dataUrl = await QRCode.toDataURL(trimmed, {
        width: size,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M',
      })
      setQrDataUrl(dataUrl)
    } catch (err) {
      setError(
        err instanceof Error
          ? `Failed to generate QR code: ${err.message}`
          : 'Failed to generate QR code. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (!qrDataUrl) return
    const a = document.createElement('a')
    a.href = qrDataUrl
    a.download = 'qr-code.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleGenerate()
  }

  const handleReset = () => {
    setInput('')
    setQrDataUrl(null)
    setError(null)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  return (
    <div
      style={{
        background: 'color-mix(in srgb, var(--fg) 5%, transparent)',
        border: '1px solid var(--line-c)',
        borderRadius: '16px',
        padding: '32px',
        maxWidth: '720px',
      }}
    >
      {/* Input row */}
      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor="qr-input"
          style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 600,
            color: '#6b7280',
            marginBottom: '8px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          URL or text
        </label>
        <input
          ref={inputRef}
          id="qr-input"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            if (error) setError(null)
          }}
          onKeyDown={handleKeyDown}
          placeholder="https://yourdomain.com/landing-page"
          autoComplete="off"
          spellCheck={false}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '14px 16px',
            fontSize: '16px',
            background: 'color-mix(in srgb, var(--bg, #0d0d14) 80%, transparent)',
            color: '#111111',
            border: error
              ? '1.5px solid #f87171'
              : '1.5px solid var(--line-c)',
            borderRadius: '10px',
            outline: 'none',
            transition: 'border-color 0.15s',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => {
            if (!error) e.currentTarget.style.borderColor = '#0057ff'
          }}
          onBlur={(e) => {
            if (!error) e.currentTarget.style.borderColor = '#e5e7eb'
          }}
        />
        {error && (
          <p
            role="alert"
            style={{
              marginTop: '6px',
              fontSize: '13px',
              color: '#f87171',
            }}
          >
            {error}
          </p>
        )}
      </div>

      {/* Size selector + generate button */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          marginBottom: '24px',
        }}
      >
        <div style={{ flex: '1 1 200px' }}>
          <label
            htmlFor="qr-size"
            style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: '#6b7280',
              marginBottom: '8px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Output size
          </label>
          <select
            id="qr-size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '14px',
              background: 'color-mix(in srgb, var(--bg, #0d0d14) 80%, transparent)',
              color: '#111111',
              border: '1.5px solid var(--line-c)',
              borderRadius: '10px',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 14px center',
              paddingRight: '36px',
            }}
          >
            {SIZE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="btn btn-primary"
          style={{
            flex: '0 0 auto',
            padding: '12px 28px',
            fontSize: '15px',
            fontWeight: 600,
            minWidth: '200px',
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {loading ? (
            <>
              <span
                style={{
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#fff',
                  borderRadius: '50%',
                  animation: 'qr-spin 0.6s linear infinite',
                }}
              />
              Generating…
            </>
          ) : (
            'Generate QR Code'
          )}
        </button>
      </div>

      {/* Result area */}
      {qrDataUrl && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: '#e5e7eb',
            }}
          />

          {/* QR preview card — white bg required for scanning */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              display: 'inline-flex',
              boxShadow:
                '0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrDataUrl}
              alt="Generated QR code"
              width={size}
              height={size}
              style={{
                display: 'block',
                maxWidth: '100%',
                imageRendering: 'pixelated',
              }}
            />
          </div>

          {/* Action buttons */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={handleDownload}
              style={{
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
                background: '#16a34a',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = '#15803d')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = '#16a34a')
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PNG
            </button>

            <button
              onClick={handleReset}
              className="btn btn-outline"
              style={{
                padding: '12px 20px',
                fontSize: '14px',
              }}
            >
              Generate another
            </button>
          </div>

          {/* Upsell card */}
          <div
            style={{
              width: '100%',
              background:
                'linear-gradient(135deg, color-mix(in srgb, var(--pulse) 12%, transparent), color-mix(in srgb, var(--pulse) 6%, transparent))',
              border:
                '1px solid color-mix(in srgb, var(--pulse) 30%, transparent)',
              borderRadius: '12px',
              padding: '20px 24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '1 1 280px' }}>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#111111',
                  marginBottom: '4px',
                }}
              >
                Want to track how many times this QR code was scanned?
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}
              >
                Create a free Meshalive account and get scan analytics — total
                scans, city breakdown, device type, and time-of-day trends —
                for every QR code and short link you create.
              </p>
            </div>
            <a
              href="/register"
              className="btn btn-primary"
              style={{
                flexShrink: 0,
                alignSelf: 'center',
                textDecoration: 'none',
                fontSize: '13px',
                padding: '10px 20px',
                display: 'inline-flex',
              }}
            >
              Sign up free →
            </a>
          </div>

          {/* Privacy note */}
          <p
            style={{
              fontSize: '12px',
              color: '#6b7280',
              textAlign: 'center',
              lineHeight: 1.5,
              opacity: 0.7,
            }}
          >
            Works on all QR code readers, including iOS Camera and Android
            Camera.{' '}
            <strong style={{ fontWeight: 500 }}>
              Generated entirely in your browser — your URL or text is never
              sent to our servers.
            </strong>
          </p>
        </div>
      )}

      {/* Spinner keyframes injected once */}
      <style>{`
        @keyframes qr-spin {
          to { transform: rotate(360deg); }
        }
        #qr-input:focus {
          border-color: var(--pulse) !important;
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        details[open] summary span:last-child {
          transform: rotate(45deg);
          display: inline-block;
        }
      `}</style>
    </div>
  )
}
