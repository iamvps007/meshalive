'use client';
import React, { useState, useRef } from 'react';

interface Result { short_url: string; slug: string; }

export default function AffiliateTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    let raw = url.trim();
    if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
    setLoading(true); setError(null); setResult(null); setCopied(false);
    try {
      const res = await fetch('https://api.meshalive.com/v1/shorten', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: raw }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || 'Failed to cloak link');
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally { setLoading(false); }
  };

  const copy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.short_url);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const isAffiliate = url.includes('tag=') || url.includes('ref=') || url.includes('affiliate') ||
    url.includes('amzn.to') || url.includes('flipkart') || url.includes('meesho');

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <form onSubmit={submit}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <input ref={inputRef} type="text" value={url} onChange={e => setUrl(e.target.value)}
            placeholder="Paste your Amazon, Flipkart, or any affiliate link"
            disabled={loading} autoFocus
            style={{ flex: '1 1 320px', height: 52, padding: '0 18px', background: '#f9fafb',
              border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 15, color: '#111111',
              outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
            onFocus={e => { e.target.style.borderColor = '#f59e0b'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.15)'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
          />
          <button type="submit" disabled={loading || !url.trim()} style={{
            height: 52, padding: '0 28px', borderRadius: 12, fontSize: 15, fontWeight: 600,
            border: 'none', background: loading || !url.trim() ? '#9ca3af' : '#f59e0b',
            color: '#ffffff', cursor: loading || !url.trim() ? 'not-allowed' : 'pointer',
            flexShrink: 0, fontFamily: 'inherit' }}>
            {loading ? 'Cloaking…' : 'Cloak Link'}
          </button>
        </div>
        {isAffiliate && url.trim() && (
          <p style={{ marginTop: 8, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
            ✓ Affiliate link detected — will be cloaked to a clean meshalive.com URL
          </p>
        )}
      </form>

      {error && <div style={{ marginTop: 16, padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, color: '#dc2626', fontSize: 14 }}>{error}</div>}

      {result && (
        <div style={{ marginTop: 20, borderRadius: 16, border: '1px solid #d1fae5', background: '#ffffff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ padding: '12px 20px', background: '#f0fdf4', borderBottom: '1px solid #d1fae5', fontSize: 13, fontWeight: 600, color: '#16a34a', display: 'flex', alignItems: 'center', gap: 8 }}>
            ✓ Your cloaked affiliate link is ready
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
              <a href={result.short_url} target="_blank" rel="noopener noreferrer" style={{ flex: '1 1 200px', fontSize: 22, fontWeight: 700, color: '#0057ff', textDecoration: 'none', wordBreak: 'break-all' as const, fontFamily: 'monospace' }}>
                {result.short_url}
              </a>
              <button onClick={copy} style={{ height: 40, padding: '0 18px', borderRadius: 8, border: copied ? '1px solid #d1fae5' : '1px solid #e5e7eb', background: copied ? '#f0fdf4' : '#f9fafb', color: copied ? '#16a34a' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
              <button onClick={() => { setResult(null); setUrl(''); inputRef.current?.focus(); }} style={{ height: 40, padding: '0 14px', borderRadius: 8, border: '1px solid #e5e7eb', background: 'transparent', color: '#6b7280', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                Cloak another
              </button>
            </div>
            <p style={{ marginTop: 10, fontSize: 12, color: '#9ca3af', wordBreak: 'break-all' as const, lineHeight: 1.5 }}>
              <strong>Original:</strong> {url}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
