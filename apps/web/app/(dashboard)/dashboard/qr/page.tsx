'use client';
import { useState, useEffect, useRef } from 'react';
import useSWR from 'swr';
import QRCode from 'qrcode';
import { api } from '@/lib/api';
import { ListLinksResponse, Link } from '@/lib/types';

const fetcher = (url: string) => api.get<ListLinksResponse>(url);

function QRCard({ link }: { link: Link }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dataUrl, setDataUrl] = useState<string>('');
  const shortUrl = link.short_url || `https://mshl.in/${link.slug}`;

  useEffect(() => {
    QRCode.toDataURL(shortUrl, { width: 200, margin: 1, color: { dark: '#000000', light: '#ffffff' } })
      .then(setDataUrl)
      .catch(() => {});
  }, [shortUrl]);

  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `qr-${link.slug}.png`;
    a.click();
  };

  return (
    <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      {dataUrl ? (
        <img src={dataUrl} alt={`QR for ${link.slug}`} style={{ width: 150, height: 150, borderRadius: 8, border: '1px solid var(--line-c)' }} />
      ) : (
        <div style={{ width: 150, height: 150, background: 'var(--bg-3)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="muted" style={{ fontSize: 12 }}>...</span>
        </div>
      )}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <div style={{ fontWeight: 600, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {link.title || `/${link.slug}`}
        </div>
        <div className="muted" style={{ fontSize: 11, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {shortUrl}
        </div>
      </div>
      <button className="btn btn-secondary btn-sm" onClick={download} disabled={!dataUrl} style={{ width: '100%' }}>
        Download PNG
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default function QRPage() {
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useSWR<ListLinksResponse>(
    `/v1/links?page_size=50&archived=false${search ? `&search=${encodeURIComponent(search)}` : ''}`,
    fetcher
  );

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 className="display" style={{ fontSize: 28, margin: 0 }}>QR codes</h1>
        <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>Generate and download QR codes for any of your links.</div>
      </div>

      <div style={{ marginBottom: 20, maxWidth: 360 }}>
        <input className="input" placeholder="Search links..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {isLoading && <div className="muted" style={{ textAlign: 'center', padding: 60 }}>Loading links...</div>}
      {error && <div style={{ color: 'var(--bad)', textAlign: 'center', padding: 60 }}>Failed to load links.</div>}
      {data?.links.length === 0 && !isLoading && (
        <div className="muted" style={{ textAlign: 'center', padding: 60, fontSize: 13 }}>No links found. Create some links first.</div>
      )}

      {data && data.links.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {data.links.map(link => <QRCard key={link.id} link={link} />)}
        </div>
      )}
    </div>
  );
}
