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

const SOURCES = ['google', 'facebook', 'instagram', 'linkedin', 'twitter', 'whatsapp', 'email', 'newsletter', 'youtube']
const MEDIUMS = ['cpc', 'social', 'email', 'organic', 'referral', 'banner', 'video', 'affiliate', 'sms']

function buildUtmUrl(base: string, params: Record<string, string>) {
  if (!base.trim()) return ''
  let url = base.trim()
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url
  try {
    const u = new URL(url)
    const entries = Object.entries(params).filter(([, v]) => v.trim())
    if (!entries.length) return u.toString()
    entries.forEach(([k, v]) => u.searchParams.set(k, v.trim()))
    return u.toString()
  } catch {
    return ''
  }
}

export default function UtmBuilderTool() {
  const [base, setBase] = useState('')
  const [source, setSource] = useState('')
  const [medium, setMedium] = useState('')
  const [campaign, setCampaign] = useState('')
  const [term, setTerm] = useState('')
  const [content, setContent] = useState('')
  const [copied, setCopied] = useState(false)
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  const utmUrl = buildUtmUrl(base, {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    ...(term ? { utm_term: term } : {}),
    ...(content ? { utm_content: content } : {}),
  })

  const handleCopy = useCallback(() => {
    if (!utmUrl) return
    navigator.clipboard.writeText(utmUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [utmUrl])

  const handleReset = () => {
    setBase(''); setSource(''); setMedium(''); setCampaign(''); setTerm(''); setContent('')
    setCopied(false)
  }

  const isComplete = Boolean(utmUrl && source.trim() && medium.trim() && campaign.trim())

  return (
    <div style={{ maxWidth: 720, fontFamily: 'inherit' }}>

      {/* Main card */}
      <div style={{
        background: 'color-mix(in srgb, var(--fg, #111) 4%, transparent)',
        border: '1px solid var(--line-c, #e5e7eb)',
        borderRadius: 16,
        padding: '32px',
        marginBottom: 24,
      }}>

        {/* Base URL */}
        <div style={{ marginBottom: 20 }}>
          <label style={LABEL} htmlFor="utm-base">Website URL *</label>
          <input
            id="utm-base"
            type="url"
            value={base}
            onChange={e => setBase(e.target.value)}
            placeholder="https://meshalive.com/pricing"
            style={{ ...INPUT, borderColor: focusedInput === 'base' ? '#0057ff' : '#e5e7eb' }}
            onFocus={() => setFocusedInput('base')}
            onBlur={() => setFocusedInput(null)}
          />
        </div>

        {/* Source + Medium */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 200px' }}>
            <label style={LABEL} htmlFor="utm-source">Campaign Source *</label>
            <input
              id="utm-source"
              type="text"
              list="source-list"
              value={source}
              onChange={e => setSource(e.target.value)}
              placeholder="google, facebook, newsletter…"
              style={{ ...INPUT, borderColor: focusedInput === 'source' ? '#0057ff' : '#e5e7eb' }}
              onFocus={() => setFocusedInput('source')}
              onBlur={() => setFocusedInput(null)}
            />
            <datalist id="source-list">{SOURCES.map(s => <option key={s} value={s} />)}</datalist>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <label style={LABEL} htmlFor="utm-medium">Campaign Medium *</label>
            <input
              id="utm-medium"
              type="text"
              list="medium-list"
              value={medium}
              onChange={e => setMedium(e.target.value)}
              placeholder="cpc, social, email…"
              style={{ ...INPUT, borderColor: focusedInput === 'medium' ? '#0057ff' : '#e5e7eb' }}
              onFocus={() => setFocusedInput('medium')}
              onBlur={() => setFocusedInput(null)}
            />
            <datalist id="medium-list">{MEDIUMS.map(m => <option key={m} value={m} />)}</datalist>
          </div>
        </div>

        {/* Campaign name */}
        <div style={{ marginBottom: 20 }}>
          <label style={LABEL} htmlFor="utm-campaign">Campaign Name *</label>
          <input
            id="utm-campaign"
            type="text"
            value={campaign}
            onChange={e => setCampaign(e.target.value)}
            placeholder="diwali_sale, product_launch, summer2026…"
            style={{ ...INPUT, borderColor: focusedInput === 'campaign' ? '#0057ff' : '#e5e7eb' }}
            onFocus={() => setFocusedInput('campaign')}
            onBlur={() => setFocusedInput(null)}
          />
          <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 5 }}>Use lowercase and underscores — spaces become %20 in analytics reports.</p>
        </div>

        {/* Optional: Term + Content */}
        <details style={{ marginBottom: 24 }}>
          <summary style={{ fontSize: 13, color: '#6b7280', cursor: 'pointer', userSelect: 'none', marginBottom: 16, fontWeight: 500 }}>
            + Optional parameters (utm_term, utm_content)
          </summary>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 4 }}>
            <div style={{ flex: '1 1 200px' }}>
              <label style={LABEL} htmlFor="utm-term">Campaign Term</label>
              <input
                id="utm-term"
                type="text"
                value={term}
                onChange={e => setTerm(e.target.value)}
                placeholder="url shortener india"
                style={{ ...INPUT, borderColor: focusedInput === 'term' ? '#0057ff' : '#e5e7eb' }}
                onFocus={() => setFocusedInput('term')}
                onBlur={() => setFocusedInput(null)}
              />
              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 5 }}>Paid keywords — for Google / Meta Ads</p>
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <label style={LABEL} htmlFor="utm-content">Campaign Content</label>
              <input
                id="utm-content"
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="hero_button, sidebar_ad…"
                style={{ ...INPUT, borderColor: focusedInput === 'content' ? '#0057ff' : '#e5e7eb' }}
                onFocus={() => setFocusedInput('content')}
                onBlur={() => setFocusedInput(null)}
              />
              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 5 }}>For A/B testing different creatives</p>
            </div>
          </div>
        </details>

        {/* Output */}
        {utmUrl && (
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 10,
            padding: '16px 20px',
            marginBottom: 16,
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 8 }}>
              Your UTM URL
            </div>
            <p style={{
              fontSize: 14,
              color: '#111',
              wordBreak: 'break-all',
              margin: '0 0 14px',
              fontFamily: 'ui-monospace, monospace',
              lineHeight: 1.6,
            }}>
              {utmUrl}
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                onClick={handleCopy}
                style={{
                  padding: '9px 20px',
                  fontSize: 14,
                  fontWeight: 600,
                  background: copied ? '#16a34a' : '#0057ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 7,
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                {copied ? (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>
                ) : (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy URL</>
                )}
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '9px 16px',
                  fontSize: 13,
                  color: '#6b7280',
                  background: 'transparent',
                  border: '1px solid #e5e7eb',
                  borderRadius: 7,
                  cursor: 'pointer',
                }}
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {!utmUrl && !base && (
          <div style={{ background: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: 10, padding: '20px 24px', textAlign: 'center', color: '#9ca3af', fontSize: 14 }}>
            Fill in the fields above — your UTM URL will appear here
          </div>
        )}
      </div>

      {/* Upsell */}
      {isComplete && (
        <div style={{
          background: 'linear-gradient(135deg, #eff6ff, #f0fdf4)',
          border: '1px solid #bfdbfe',
          borderRadius: 12,
          padding: '20px 24px',
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginBottom: 24,
        }}>
          <div style={{ flex: '1 1 260px' }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#111', margin: '0 0 4px' }}>
              Shorten this URL and track UTM performance
            </p>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
              Create a free Meshalive account to shorten your UTM link and see click data broken down by source, medium, and campaign — all in one dashboard.
            </p>
          </div>
          <a href="/register" style={{
            flexShrink: 0,
            alignSelf: 'center',
            padding: '10px 20px',
            fontSize: 13,
            fontWeight: 600,
            background: '#0057ff',
            color: '#fff',
            borderRadius: 8,
            textDecoration: 'none',
            display: 'inline-flex',
          }}>
            Sign up free →
          </a>
        </div>
      )}

      {/* UTM reference */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ background: '#f9fafb', padding: '14px 20px', borderBottom: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#374151', margin: 0 }}>What each UTM parameter does</h3>
        </div>
        {[
          { param: 'utm_source', required: true, desc: 'Where your traffic comes from', examples: 'google, facebook, newsletter, whatsapp' },
          { param: 'utm_medium', required: true, desc: 'The marketing channel or type', examples: 'cpc, social, email, organic' },
          { param: 'utm_campaign', required: true, desc: 'The specific campaign name', examples: 'diwali_sale, product_launch' },
          { param: 'utm_term', required: false, desc: 'Paid search keywords', examples: 'url shortener india, link management' },
          { param: 'utm_content', required: false, desc: 'Differentiates ads or links in A/B tests', examples: 'hero_cta, sidebar_banner' },
        ].map(row => (
          <div key={row.param} style={{ display: 'flex', gap: 16, padding: '12px 20px', borderBottom: '1px solid #f3f4f6', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 160px' }}>
              <code style={{ fontSize: 13, background: '#f3f4f6', padding: '2px 8px', borderRadius: 4, color: '#374151', fontFamily: 'monospace' }}>{row.param}</code>
              {row.required && <span style={{ fontSize: 11, color: '#dc2626', fontWeight: 600, marginLeft: 6 }}>required</span>}
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 13, color: '#374151' }}>{row.desc}</span>
              <span style={{ fontSize: 12, color: '#9ca3af', marginLeft: 8 }}>e.g. {row.examples}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #utm-base:focus, #utm-source:focus, #utm-medium:focus, #utm-campaign:focus, #utm-term:focus, #utm-content:focus {
          border-color: var(--pulse, #0057ff) !important;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--pulse, #0057ff) 12%, transparent);
        }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </div>
  )
}
