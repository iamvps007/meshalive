'use client';

import React, { useState, useRef } from 'react';

interface ShortenResult {
  slug: string;
  short_url: string;
}

export default function UrlShortenerTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ShortenResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    let rawUrl = url.trim();
    if (!/^https?:\/\//i.test(rawUrl)) rawUrl = 'https://' + rawUrl;

    setLoading(true);
    setError(null);
    setResult(null);
    setCopied(false);

    try {
      const res = await fetch('https://api.meshalive.com/v1/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: rawUrl }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || `Server error (${res.status}). Please try again.`);
      }

      const data: ShortenResult = await res.json();
      setResult(data);
      setUrl(rawUrl);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.short_url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = result.short_url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setUrl('');
    setCopied(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <section style={{ width: '100%', maxWidth: '760px', margin: '0 auto', padding: '0 16px' }}>

      {/* Free badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: '#eff6ff', border: '1px solid #bfdbfe',
        borderRadius: 999, padding: '4px 12px',
        fontSize: 12, fontWeight: 600, color: '#0057ff',
        letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20,
      }}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="#0057ff"><circle cx="4" cy="4" r="4"/></svg>
        Free — No signup required
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'stretch', width: '100%' }}>
          <input
            ref={inputRef}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a long URL — e.g. https://example.com/very/long/path"
            disabled={loading}
            autoFocus
            style={{
              flex: '1 1 320px', height: 52, padding: '0 18px',
              background: '#f9fafb', border: '1.5px solid #e5e7eb',
              borderRadius: 12, fontSize: 15, color: '#111111',
              outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#0057ff';
              e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.12)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            disabled={loading || !url.trim()}
            style={{
              height: 52, padding: '0 28px', borderRadius: 12,
              fontSize: 15, fontWeight: 600, border: 'none',
              background: loading || !url.trim() ? '#9ca3af' : '#0057ff',
              color: '#ffffff', cursor: loading || !url.trim() ? 'not-allowed' : 'pointer',
              flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'inherit', transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { if (!loading && url.trim()) (e.target as HTMLButtonElement).style.background = '#0047dd'; }}
            onMouseLeave={(e) => { if (!loading && url.trim()) (e.target as HTMLButtonElement).style.background = '#0057ff'; }}
          >
            {loading ? (
              <><Spinner /> Shortening…</>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                Shorten URL
              </>
            )}
          </button>
        </div>

        <p style={{ marginTop: 10, fontSize: 13, color: '#9ca3af', lineHeight: 1.4 }}>
          Anonymous links expire after 7 days and are limited to 20 clicks.{' '}
          <a href="/register" style={{ color: '#0057ff', textDecoration: 'none' }}>Sign up free</a>
          {' '}for unlimited links with full analytics.
        </p>
      </form>

      {/* Error */}
      {error && (
        <div role="alert" style={{
          marginTop: 20, padding: '14px 18px',
          background: '#fef2f2', border: '1px solid #fecaca',
          borderRadius: 12, color: '#dc2626', fontSize: 14,
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Result card */}
      {result && (
        <div style={{
          marginTop: 24, borderRadius: 16, overflow: 'hidden',
          border: '1px solid #d1fae5', background: '#ffffff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        }}>
          {/* Success header */}
          <div style={{
            padding: '12px 20px',
            background: '#f0fdf4', borderBottom: '1px solid #d1fae5',
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 600, color: '#16a34a',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Your short link is ready!
          </div>

          {/* Short URL */}
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
              <a
                href={result.short_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: '1 1 200px', fontSize: 22, fontWeight: 700,
                  color: '#0057ff', textDecoration: 'none',
                  wordBreak: 'break-all', fontFamily: 'monospace', letterSpacing: '-0.02em',
                }}
              >
                {result.short_url}
              </a>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <button
                  onClick={handleCopy}
                  style={{
                    height: 40, padding: '0 18px', borderRadius: 8,
                    border: copied ? '1px solid #d1fae5' : '1px solid #e5e7eb',
                    background: copied ? '#f0fdf4' : '#f9fafb',
                    color: copied ? '#16a34a' : '#374151',
                    fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: 'inherit', transition: 'all 0.15s',
                  }}
                >
                  {copied ? (
                    <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Copied!</>
                  ) : (
                    <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    height: 40, padding: '0 16px', borderRadius: 8,
                    border: '1px solid #e5e7eb', background: 'transparent',
                    color: '#6b7280', fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Shorten another
                </button>
              </div>
            </div>
            <p style={{ marginTop: 10, fontSize: 12, color: '#9ca3af', wordBreak: 'break-all', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 600 }}>Original:</span>{' '}
              <span>{url}</span>
            </p>
          </div>

          {/* Upsell strip */}
          <div style={{
            padding: '14px 20px',
            background: '#f9fafb', borderTop: '1px solid #f0fdf4',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 10,
          }}>
            <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>
              This link expires in <strong style={{ color: '#374151' }}>7 days</strong> and has a <strong style={{ color: '#374151' }}>20-click limit</strong>.
            </p>
            <a
              href="/register"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', borderRadius: 8,
                background: '#0057ff', color: '#ffffff',
                fontSize: 13, fontWeight: 600, textDecoration: 'none',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}
            >
              Get unlimited free links
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      style={{ animation: 'spin 0.7s linear infinite' }}>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  );
}
