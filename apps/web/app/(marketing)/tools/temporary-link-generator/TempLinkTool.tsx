'use client';
import React, { useState, useRef } from 'react';

const EXPIRY_OPTIONS = [
  { label: '1 hour', hours: 1 },
  { label: '6 hours', hours: 6 },
  { label: '24 hours', hours: 24 },
  { label: '3 days', hours: 72 },
  { label: '7 days', hours: 168 },
];

interface Result { short_url: string; slug: string; expires_at?: string; }

export default function TempLinkTool() {
  const [url, setUrl] = useState('');
  const [hours, setHours] = useState(24);
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
        body: JSON.stringify({ url: raw, expires_in_hours: hours }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || 'Failed to create link');
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

  const expiryLabel = EXPIRY_OPTIONS.find(o => o.hours === hours)?.label || `${hours}h`;

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <form onSubmit={submit}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <input ref={inputRef} type="text" value={url} onChange={e => setUrl(e.target.value)}
            placeholder="Paste any URL to create a temporary link"
            disabled={loading} autoFocus
            style={{ flex: '1 1 300px', height: 52, padding: '0 18px', background: '#f9fafb',
              border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 15, color: '#111111',
              outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
            onFocus={e => { e.target.style.borderColor = '#0057ff'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.12)'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Expires after:</span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {EXPIRY_OPTIONS.map(o => (
              <button key={o.hours} type="button" onClick={() => setHours(o.hours)} style={{
                height: 34, padding: '0 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
                background: hours === o.hours ? '#ffffff' : 'rgba(255,255,255,0.15)',
                color: hours === o.hours ? '#0057ff' : 'rgba(255,255,255,0.8)',
              }}>{o.label}</button>
            ))}
          </div>
          <button type="submit" disabled={loading || !url.trim()} style={{
            height: 44, padding: '0 24px', borderRadius: 10, fontSize: 14, fontWeight: 700,
            border: 'none', background: loading || !url.trim() ? 'rgba(255,255,255,0.3)' : '#ffffff',
            color: loading || !url.trim() ? 'rgba(255,255,255,0.5)' : '#0057ff',
            cursor: loading || !url.trim() ? 'not-allowed' : 'pointer', fontFamily: 'inherit', flexShrink: 0 }}>
            {loading ? 'Creating…' : `Create ${expiryLabel} link`}
          </button>
        </div>
      </form>

      {error && <div style={{ marginTop: 16, padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, color: '#dc2626', fontSize: 14 }}>{error}</div>}

      {result && (
        <div style={{ marginTop: 20, background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 10 }}>
            ✓ Temporary link created — expires in {expiryLabel}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <a href={result.short_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', textDecoration: 'none', fontFamily: 'monospace', wordBreak: 'break-all' as const, flex: 1 }}>
              {result.short_url}
            </a>
            <button onClick={copy} style={{ height: 40, padding: '0 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.3)', background: copied ? 'rgba(255,255,255,0.2)' : 'transparent', color: '#ffffff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              {copied ? '✓ Copied' : 'Copy'}
            </button>
            <button onClick={() => { setResult(null); setUrl(''); inputRef.current?.focus(); }} style={{ height: 40, padding: '0 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
              New link
            </button>
          </div>
          {result.expires_at && (
            <p style={{ margin: '10px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              Expires: {new Date(result.expires_at).toLocaleString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
