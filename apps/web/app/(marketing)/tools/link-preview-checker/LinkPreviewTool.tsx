'use client';
import React, { useState } from 'react';

interface OGResult {
  url: string;
  og: { title: string; description: string; image: string; siteName: string; type: string; url: string };
  twitter: { card: string; title: string; description: string; image: string };
  rawTitle: string;
  missing: string[];
  score: number;
}

export default function LinkPreviewTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OGResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<'whatsapp'|'twitter'|'linkedin'>('whatsapp');

  const check = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
    try {
      const res = await fetch('/api/og-check', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally { setLoading(false); }
  };

  const scoreColor = (s: number) => s >= 80 ? '#16a34a' : s >= 60 ? '#d97706' : '#dc2626';

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <form onSubmit={check}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <input type="text" value={url} onChange={e => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com/blog/article"
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
            {loading ? 'Fetching…' : 'Check Preview'}
          </button>
        </div>
      </form>

      {error && <div style={{ marginTop: 20, padding: '14px 18px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, color: '#dc2626', fontSize: 14 }}>{error}</div>}

      {result && (
        <div style={{ marginTop: 24 }}>
          {/* Score */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, padding: '14px 18px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12 }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: scoreColor(result.score) }}>{result.score}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111111' }}>OG Score</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>
                {result.missing.length === 0 ? 'All meta tags present ✓' : `Missing: ${result.missing.join(', ')}`}
              </div>
            </div>
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 16, background: '#f3f4f6', padding: 4, borderRadius: 10, width: 'fit-content' }}>
            {(['whatsapp', 'twitter', 'linkedin'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: '7px 16px', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
                background: tab === t ? '#ffffff' : 'transparent', color: tab === t ? '#111111' : '#6b7280',
                boxShadow: tab === t ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              }}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Preview Card */}
          {tab === 'whatsapp' && (
            <div style={{ background: '#e5ddd5', borderRadius: 12, padding: 16, maxWidth: 400 }}>
              <div style={{ background: '#ffffff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                {result.og.image && <img src={result.og.image} alt="" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />}
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: 12, color: '#0057ff', fontWeight: 600, marginBottom: 2 }}>{result.og.siteName || new URL(result.url).hostname}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#111111', marginBottom: 4, lineHeight: 1.35 }}>{result.og.title || '(no title)'}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{(result.og.description || '').slice(0, 120)}{result.og.description?.length > 120 ? '…' : ''}</div>
                </div>
              </div>
            </div>
          )}
          {tab === 'twitter' && (
            <div style={{ background: '#f7f9f9', borderRadius: 12, padding: 16, maxWidth: 520, border: '1px solid #e5e7eb' }}>
              <div style={{ background: '#ffffff', borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                {result.twitter.image && <img src={result.twitter.image} alt="" style={{ width: '100%', height: 250, objectFit: 'cover', display: 'block' }} />}
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#111111', marginBottom: 4 }}>{result.twitter.title || '(no title)'}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{(result.twitter.description || '').slice(0, 140)}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', marginTop: 6 }}>🔗 {new URL(result.url).hostname}</div>
                </div>
              </div>
            </div>
          )}
          {tab === 'linkedin' && (
            <div style={{ background: '#f3f2ef', borderRadius: 12, padding: 16, maxWidth: 520 }}>
              <div style={{ background: '#ffffff', borderRadius: 4, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                {result.og.image && <img src={result.og.image} alt="" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />}
                <div style={{ padding: '12px 14px', borderTop: '1px solid #e5e7eb', background: '#f3f2ef' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#111111', marginBottom: 2 }}>{result.og.title || '(no title)'}</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{new URL(result.url).hostname}</div>
                </div>
              </div>
            </div>
          )}

          {result.missing.length > 0 && (
            <div style={{ marginTop: 20, padding: '16px 18px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#92400e', marginBottom: 8 }}>⚠ Missing meta tags</div>
              <ul style={{ margin: 0, padding: '0 0 0 20px', fontSize: 13, color: '#92400e', lineHeight: 1.8 }}>
                {result.missing.map(m => <li key={m}><code>{m}</code> — add this to your page's &lt;head&gt;</li>)}
              </ul>
            </div>
          )}
          <button onClick={() => { setResult(null); setUrl(''); }} style={{ marginTop: 16, height: 36, padding: '0 16px', borderRadius: 8, border: '1px solid #e5e7eb', background: 'transparent', color: '#6b7280', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
            Check another URL
          </button>
        </div>
      )}
    </div>
  );
}
