'use client';
import React, { useState } from 'react';

const PLATFORMS = [
  { id: 'amazon', label: 'Amazon', icon: '🛒', detect: (u: string) => /amazon\.(in|com)/.test(u),
    convert: (u: string) => {
      const m = u.match(/\/dp\/([A-Z0-9]+)/);
      if (m) return { ios: `amzn://dp/${m[1]}`, android: `com.amazon.mShop.android.shopping://www.amazon.in/dp/${m[1]}`, web: u };
      return { ios: `amzn://`, android: `com.amazon.mShop.android.shopping://`, web: u };
    }
  },
  { id: 'youtube', label: 'YouTube', icon: '▶️', detect: (u: string) => /youtube\.com|youtu\.be/.test(u),
    convert: (u: string) => {
      const v = u.match(/[?&]v=([^&]+)/) || u.match(/youtu\.be\/([^?]+)/);
      if (v) return { ios: `vnd.youtube://${v[1]}`, android: `vnd.youtube:${v[1]}`, web: `https://www.youtube.com/watch?v=${v[1]}` };
      return { ios: `vnd.youtube://`, android: `vnd.youtube://`, web: u };
    }
  },
  { id: 'instagram', label: 'Instagram', icon: '📸', detect: (u: string) => /instagram\.com/.test(u),
    convert: (u: string) => {
      const user = u.match(/instagram\.com\/([^/?]+)/)?.[1];
      if (user && !['p','reel','stories','explore'].includes(user))
        return { ios: `instagram://user?username=${user}`, android: `intent://instagram.com/${user}#Intent;package=com.instagram.android;scheme=https;end`, web: u };
      return { ios: `instagram://`, android: `instagram://`, web: u };
    }
  },
  { id: 'twitter', label: 'X / Twitter', icon: '𝕏', detect: (u: string) => /twitter\.com|x\.com/.test(u),
    convert: (u: string) => {
      const user = u.match(/(?:twitter|x)\.com\/([^/?]+)/)?.[1];
      if (user && user !== 'i') return { ios: `twitter://user?screen_name=${user}`, android: `twitter://user?screen_name=${user}`, web: u };
      return { ios: `twitter://`, android: `twitter://`, web: u };
    }
  },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼', detect: (u: string) => /linkedin\.com/.test(u),
    convert: (u: string) => ({ ios: `linkedin://`, android: `intent://www.linkedin.com#Intent;package=com.linkedin.android;scheme=https;end`, web: u })
  },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬', detect: (u: string) => /wa\.me|whatsapp\.com/.test(u),
    convert: (u: string) => ({ ios: u.replace('https://', 'whatsapp://'), android: u.replace('https://', 'whatsapp://'), web: u })
  },
];

export default function DeepLinkTool() {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [result, setResult] = useState<{ ios: string; android: string; web: string } | null>(null);
  const [copied, setCopied] = useState('');

  const detected = PLATFORMS.find(p => p.detect(url));

  const generate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    const pid = platform || detected?.id;
    const p = PLATFORMS.find(x => x.id === pid);
    if (!p) return;
    setResult(p.convert(url.trim()));
  };

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key); setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      {/* Platform selector */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14, justifyContent: 'center' }}>
        {PLATFORMS.map(p => (
          <button key={p.id} type="button" onClick={() => setPlatform(p.id)} style={{
            height: 36, padding: '0 16px', borderRadius: 999, border: 'none', cursor: 'pointer',
            fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
            background: (platform || detected?.id) === p.id ? '#ffffff' : 'rgba(255,255,255,0.15)',
            color: (platform || detected?.id) === p.id ? '#0057ff' : 'rgba(255,255,255,0.85)',
          }}>{p.icon} {p.label}</button>
        ))}
      </div>

      <form onSubmit={generate}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <input type="text" value={url} onChange={e => { setUrl(e.target.value); setResult(null); }}
            placeholder="Paste an Amazon, YouTube, Instagram, or Twitter URL"
            autoFocus
            style={{ flex: '1 1 320px', height: 52, padding: '0 18px', background: '#f9fafb',
              border: '1.5px solid #e5e7eb', borderRadius: 12, fontSize: 15, color: '#111111',
              outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
            onFocus={e => { e.target.style.borderColor = '#0057ff'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.12)'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
          />
          <button type="submit" disabled={!url.trim() || (!platform && !detected)} style={{
            height: 52, padding: '0 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, border: 'none',
            background: !url.trim() || (!platform && !detected) ? '#9ca3af' : '#0057ff',
            color: '#fff', cursor: !url.trim() || (!platform && !detected) ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
            Generate Deep Link
          </button>
        </div>
        {detected && !platform && <p style={{ marginTop: 8, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>✓ Detected: {detected.label}</p>}
      </form>

      {result && (
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
          {[
            { key: 'ios', label: '🍎 iOS Deep Link', value: result.ios },
            { key: 'android', label: '🤖 Android Deep Link', value: result.android },
            { key: 'web', label: '🌐 Web Fallback URL', value: result.web },
          ].map(row => (
            <div key={row.key} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 16px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 6 }}>{row.label}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' as const }}>
                <code style={{ flex: 1, fontSize: 13, color: '#111111', wordBreak: 'break-all' as const, lineHeight: 1.5 }}>{row.value}</code>
                <button onClick={() => copy(row.value, row.key)} style={{ height: 32, padding: '0 12px', borderRadius: 6, border: '1px solid #e5e7eb', background: copied === row.key ? '#f0fdf4' : '#ffffff', color: copied === row.key ? '#16a34a' : '#374151', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}>
                  {copied === row.key ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
          <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>
            Use the iOS or Android deep link in your app campaigns. Always include the web URL as a fallback for users who don't have the app installed.
          </p>
        </div>
      )}
    </div>
  );
}
