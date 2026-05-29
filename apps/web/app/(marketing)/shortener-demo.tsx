'use client';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';

export function ShortenerDemo() {
  const [url, setUrl] = useState('https://docs.example.com/getting-started?utm_source=email&utm_campaign=launch');
  const [result, setResult] = useState<{ slug: string; short_url: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shorten = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('https://api.meshalive.com/v1/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      if (!res.ok) throw new Error('Failed to shorten');
      const data = await res.json();
      setResult(data);
    } catch {
      setError('Could not shorten URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    if (!result) return;
    try { await navigator.clipboard.writeText(result.short_url); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: 14,
        padding: 6,
        display: 'flex',
        gap: 6,
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(0,0,0,0.3)',
          borderRadius: 10,
          padding: '0 14px',
        }}>
          <Icon name="link" size={15} style={{ color: '#6b7280', flexShrink: 0 }} />
          <input
            style={{
              flex: 1,
              height: 46,
              background: 'transparent',
              border: 0,
              outline: 0,
              color: '#111111',
              fontSize: 14,
              fontFamily: 'inherit',
              minWidth: 0,
            }}
            placeholder="Paste your long URL here..."
            value={url}
            onChange={e => { setUrl(e.target.value); setResult(null); setError(null); }}
            onKeyDown={e => e.key === 'Enter' && shorten()}
          />
        </div>
        <button
          onClick={shorten}
          disabled={loading || !url.trim()}
          className="btn btn-primary"
          style={{ height: 46, minWidth: 116, fontSize: 14, flexShrink: 0 }}
        >
          {loading
            ? <span style={{ width: 15, height: 15, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
            : <>Shorten <Icon name="arrow-right" size={14} /></>}
        </button>
      </div>

      {error && (
        <div style={{ marginTop: 8, padding: '10px 14px', background: 'rgba(255,60,60,0.07)', border: '1px solid rgba(255,60,60,0.25)', borderRadius: 10, fontSize: 13, color: '#ff7070' }}>
          {error}
        </div>
      )}

      {result && (
        <div style={{
          marginTop: 8,
          padding: '12px 16px',
          background: 'rgba(196,90,57,0.07)',
          border: '1px solid rgba(196,90,57,0.25)',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          animation: 'fadeIn 200ms ease-out',
        }}>
          <span style={{ color: '#0057ff', flexShrink: 0 }}>
            <Icon name="check" size={16} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 14, fontWeight: 600, color: '#0057ff' }}>
              {result.short_url}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              &#8594; {url}
            </div>
          </div>
          <button onClick={copy} className="btn btn-secondary btn-sm" style={{ flexShrink: 0, gap: 6 }}>
            <Icon name={copied ? 'check' : 'copy'} size={12} />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}

      <div style={{ display: 'flex', gap: 24, marginTop: 14, fontSize: 12, color: '#6b7280', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="zap" size={11} style={{ color: '#0057ff' }} />
          2ms redirect speed
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="lock" size={11} />
          No signup required
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon name="globe" size={11} />
          280+ edge cities
        </span>
      </div>
    </div>
  );
}
