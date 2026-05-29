'use client';
import { useState, useEffect, useRef } from 'react';
import useSWR from 'swr';
import QRCode from 'qrcode';
import { api } from '@/lib/api';
import { ListLinksResponse, Link } from '@/lib/types';

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';

const fetcher = (url: string) => api.get<ListLinksResponse>(url);

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', ...style }}>
      {children}
    </div>
  );
}

function QRCard({ link }: { link: Link }) {
  const [dataUrl, setDataUrl] = useState<string>('');
  const shortUrl = link.short_url || `https://meshalive.com/${link.slug}`;

  useEffect(() => {
    QRCode.toDataURL(shortUrl, {
      width: 200, margin: 2,
      color: { dark: INK, light: '#ffffff' },
    }).then(setDataUrl).catch(() => {});
  }, [shortUrl]);

  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `qr-${link.slug}.png`;
    a.click();
  };

  return (
    <Card style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ padding: 10, border: `1px solid ${HAIR}`, borderRadius: 10, background: '#ffffff' }}>
        {dataUrl ? (
          <img src={dataUrl} alt={`QR for ${link.slug}`} style={{ width: '100%', aspectRatio: '1', display: 'block', borderRadius: 4 }} />
        ) : (
          <div style={{ width: '100%', aspectRatio: '1', background: PAPER2, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: MUTED, fontSize: 12 }}>Generating…</span>
          </div>
        )}
      </div>
      <div>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 13, fontWeight: 500, color: INK, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <span style={{ color: MUTED }}>/</span><span style={{ color: ACCENT_INK }}>{link.slug}</span>
        </div>
        {link.title && <div style={{ fontSize: 12, color: MUTED, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.title}</div>}
      </div>
      <button
        onClick={download}
        disabled={!dataUrl}
        style={{
          padding: '9px 14px', borderRadius: 999, border: `1px solid ${HAIR}`,
          background: 'transparent', color: INK, cursor: dataUrl ? 'pointer' : 'default',
          fontSize: 13, fontWeight: 500, fontFamily: 'inherit',
          transition: 'all 120ms', opacity: dataUrl ? 1 : 0.5,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}
        onMouseEnter={e => { if (dataUrl) (e.currentTarget as HTMLButtonElement).style.background = PAPER2; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}>
        Download PNG
      </button>
    </Card>
  );
}

export default function QRPage() {
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useSWR<ListLinksResponse>(
    `/v1/links?page_size=50&archived=false${search ? `&search=${encodeURIComponent(search)}` : ''}`,
    fetcher
  );

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1100, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: INK, margin: '0 0 4px', letterSpacing: '-0.02em' }}>QR Codes</h1>
        <div style={{ fontSize: 13, color: MUTED }}>Generate and download QR codes for any of your links.</div>
      </div>

      {/* Search */}
      <div style={{ marginBottom: 24, maxWidth: 400 }}>
        <input
          placeholder="Search links…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '10px 14px', borderRadius: 10,
            border: `1px solid ${HAIR}`, background: '#ffffff', color: INK,
            fontSize: 14, outline: 'none', fontFamily: 'inherit',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            transition: 'border-color 150ms',
          }}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = ACCENT; }}
          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = HAIR; }}
        />
      </div>

      {isLoading && <div style={{ textAlign: 'center', padding: '60px 0', color: MUTED, fontSize: 13 }}>Loading links…</div>}
      {error && <div style={{ color: '#c0392b', textAlign: 'center', padding: '60px 0' }}>Failed to load links.</div>}
      {data?.links.length === 0 && !isLoading && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: MUTED, fontSize: 13 }}>No links found. Create some links first.</div>
      )}

      {data && data.links.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {data.links.map(link => <QRCard key={link.id} link={link} />)}
        </div>
      )}
    </div>
  );
}
