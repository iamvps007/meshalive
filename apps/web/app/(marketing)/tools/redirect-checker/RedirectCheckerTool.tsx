'use client';
import React, { useState, useRef } from 'react';

interface Hop { url: string; status: number; label: string; type: string; }

export default function RedirectCheckerTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [chain, setChain] = useState<Hop[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const check = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true); setError(null); setChain(null);
    try {
      const res = await fetch('/api/check-redirects', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setChain(data.chain);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally { setLoading(false); }
  };

  const statusColor = (type: string) =>
    type === 'final' ? '#16a34a' : type === 'redirect' ? '#0057ff' : '#dc2626';
  const statusBg = (type: string) =>
    type === 'final' ? '#f0fdf4' : type === 'redirect' ? '#eff6ff' : '#fef2f2';

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <form onSubmit={check}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <input ref={inputRef} type="text" value={url} onChange={e => setUrl(e.target.value)}
            placeholder="https://bit.ly/example or any URL with redirects"
            disabled={loading} autoFocus
            style={{ flex: '1 1 320px', height: 52, padding: '0 18px', background: '#f9fafb',
              border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 15, color: '#111111',
              outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
            onFocus={e => { e.target.style.borderColor = '#0057ff'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.12)'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
          />
          <button type="submit" disabled={loading || !url.trim()} style={{
            height: 52, padding: '0 28px', borderRadius: 12, fontSize: 15, fontWeight: 600,
            border: 'none', background: loading || !url.trim() ? '#9ca3af' : '#0057ff',
            color: '#fff', cursor: loading || !url.trim() ? 'not-allowed' : 'pointer',
            flexShrink: 0, fontFamily: 'inherit' }}>
            {loading ? 'Checking…' : 'Check Redirects'}
          </button>
        </div>
      </form>

      {error && (
        <div style={{ marginTop: 20, padding: '14px 18px', background: '#fef2f2',
          border: '1px solid #fecaca', borderRadius: 12, color: '#dc2626', fontSize: 14 }}>
          {error}
        </div>
      )}

      {chain && (
        <div style={{ marginTop: 24 }}>
          <div style={{ marginBottom: 12, fontSize: 13, color: '#6b7280' }}>
            <strong style={{ color: '#111111' }}>{chain.length - 1} redirect{chain.length !== 2 ? 's' : ''}</strong>
            {' '}— {chain.length} hop{chain.length !== 1 ? 's' : ''} total
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {chain.map((hop, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
                {/* Connector line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 14, paddingTop: 4 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: statusBg(hop.type),
                    border: `2px solid ${statusColor(hop.type)}`, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 11, fontWeight: 700, color: statusColor(hop.type), flexShrink: 0 }}>
                    {hop.status || '!'}
                  </div>
                  {i < chain.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 20, background: '#e5e7eb', margin: '4px 0' }} />
                  )}
                </div>
                <div style={{ flex: 1, padding: '2px 0 20px' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: statusColor(hop.type),
                    textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                    {hop.type === 'final' ? '✓ Final destination' : hop.type === 'redirect' ? `↪ ${hop.label}` : `✗ ${hop.label}`}
                  </div>
                  <div style={{ fontSize: 13, color: '#374151', wordBreak: 'break-all', lineHeight: 1.5,
                    background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 12px', fontFamily: 'monospace' }}>
                    {hop.url}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {chain[chain.length - 1]?.type === 'final' && (
            <div style={{ marginTop: 8, padding: '12px 16px', background: '#f0fdf4',
              border: '1px solid #d1fae5', borderRadius: 10, fontSize: 13, color: '#16a34a', fontWeight: 600 }}>
              ✓ Link is healthy — final destination reached with 200 OK
            </div>
          )}
          <button onClick={() => { setChain(null); setUrl(''); inputRef.current?.focus(); }}
            style={{ marginTop: 16, height: 36, padding: '0 16px', borderRadius: 8, border: '1px solid #e5e7eb',
              background: 'transparent', color: '#6b7280', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
            Check another URL
          </button>
        </div>
      )}
    </div>
  );
}
