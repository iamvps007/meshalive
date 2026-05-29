'use client';
import React, { useState } from 'react';

interface Result { short_url: string; slug: string; }

export default function WALandingTool() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  const buildWaUrl = () => {
    const clean = phone.replace(/[^0-9]/g, '');
    const num = clean.startsWith('91') ? clean : `91${clean}`;
    let url = `https://wa.me/${num}`;
    if (message.trim()) url += `?text=${encodeURIComponent(message.trim())}`;
    return url;
  };

  const isValid = phone.replace(/[^0-9]/g, '').length >= 10;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const waUrl = buildWaUrl();
    setLoading(true); setResult(null); setCopied(false);
    try {
      const res = await fetch('https://api.meshalive.com/v1/shorten', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: waUrl }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error('Failed');
      setResult(data);
    } catch { setResult(null); }
    finally { setLoading(false); }
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const waUrl = isValid ? buildWaUrl() : '';
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.15)' }}>
        <form onSubmit={submit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 14, marginBottom: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>WhatsApp Number *</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                style={{ height: 48, padding: '0 14px', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: 10, fontSize: 15, color: '#ffffff', outline: 'none', fontFamily: 'inherit' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>Pre-filled Message (optional)</label>
              <input type="text" value={message} onChange={e => setMessage(e.target.value)}
                placeholder="Hi! I'd like to know more about your services"
                style={{ height: 48, padding: '0 14px', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: 10, fontSize: 14, color: '#ffffff', outline: 'none', fontFamily: 'inherit' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              />
            </div>
          </div>

          {/* Preview */}
          {isValid && (
            <div style={{ marginBottom: 16, padding: '10px 14px', background: 'rgba(255,255,255,0.08)', borderRadius: 10, fontSize: 12, color: 'rgba(255,255,255,0.7)', wordBreak: 'break-all' as const }}>
              <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Preview:</strong> {waUrl}
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {isValid && (
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ height: 48, padding: '0 22px', borderRadius: 10, background: '#25d366', color: '#ffffff', fontSize: 14, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                💬 Test on WhatsApp
              </a>
            )}
            <button type="submit" disabled={!isValid || loading} style={{ height: 48, padding: '0 22px', borderRadius: 10, fontSize: 14, fontWeight: 700, border: 'none', background: !isValid || loading ? 'rgba(255,255,255,0.3)' : '#ffffff', color: !isValid || loading ? 'rgba(255,255,255,0.5)' : '#0057ff', cursor: !isValid || loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
              {loading ? 'Creating…' : 'Create Short Link'}
            </button>
          </div>
        </form>

        {result && (
          <div style={{ marginTop: 20, padding: '16px 18px', background: 'rgba(37,211,102,0.15)', borderRadius: 12, border: '1px solid rgba(37,211,102,0.3)' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#25d366', marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>✓ Short WhatsApp link ready</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <a href={result.short_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', textDecoration: 'none', fontFamily: 'monospace', flex: 1 }}>{result.short_url}</a>
              <button onClick={() => copy(result.short_url)} style={{ height: 36, padding: '0 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: '#ffffff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
