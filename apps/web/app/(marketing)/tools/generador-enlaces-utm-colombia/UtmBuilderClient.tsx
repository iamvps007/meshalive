'use client';

import React, { useState } from 'react';

export default function UtmBuilderClient() {
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('facebook');
  const [medium, setMedium] = useState('cpc');
  const [campaign, setCampaign] = useState('promo_colombia');
  const [term, setTerm] = useState('');
  const [content, setContent] = useState('');
  const [copied, setCopied] = useState(false);

  let finalUrl = '';
  if (url.trim()) {
    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) cleanUrl = 'https://' + cleanUrl;
    try {
      const u = new URL(cleanUrl);
      if (source.trim()) u.searchParams.set('utm_source', source.trim());
      if (medium.trim()) u.searchParams.set('utm_medium', medium.trim());
      if (campaign.trim()) u.searchParams.set('utm_campaign', campaign.trim());
      if (term.trim()) u.searchParams.set('utm_term', term.trim());
      if (content.trim()) u.searchParams.set('utm_content', content.trim());
      finalUrl = u.toString();
    } catch {
      finalUrl = '';
    }
  }

  const handleCopy = () => {
    if (!finalUrl) return;
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const applyPreset = (s: string, m: string) => {
    setSource(s);
    setMedium(m);
  };

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', textAlign: 'left' }}>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>URL de Destino</label>
        <input
          type="text"
          placeholder="https://tutienda.com.co/producto"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', border: '1.5px solid #d1d5db', borderRadius: '10px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Plantillas Rápidas:</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <button type="button" onClick={() => applyPreset('facebook', 'cpc')} style={{ padding: '6px 12px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '12px', color: '#1d4ed8', cursor: 'pointer', fontWeight: 600 }}>Facebook Ads</button>
          <button type="button" onClick={() => applyPreset('instagram', 'stories')} style={{ padding: '6px 12px', background: '#fdf2f8', border: '1px solid #fbcfe8', borderRadius: '8px', fontSize: '12px', color: '#be185d', cursor: 'pointer', fontWeight: 600 }}>Instagram Stories</button>
          <button type="button" onClick={() => applyPreset('tiktok', 'video')} style={{ padding: '6px 12px', background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '12px', color: '#111111', cursor: 'pointer', fontWeight: 600 }}>TikTok Ads</button>
          <button type="button" onClick={() => applyPreset('whatsapp', 'broadcast')} style={{ padding: '6px 12px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', fontSize: '12px', color: '#15803d', cursor: 'pointer', fontWeight: 600 }}>WhatsApp Difusión</button>
          <button type="button" onClick={() => applyPreset('google', 'cpc')} style={{ padding: '6px 12px', background: '#fefce8', border: '1px solid #fef08a', borderRadius: '8px', fontSize: '12px', color: '#a16207', cursor: 'pointer', fontWeight: 600 }}>Google Ads</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Fuente (utm_source)</label>
          <input type="text" placeholder="facebook, google, newsletter" value={source} onChange={(e) => setSource(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Medio (utm_medium)</label>
          <input type="text" placeholder="cpc, banner, email, story" value={medium} onChange={(e) => setMedium(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Campaña (utm_campaign)</label>
          <input type="text" placeholder="cyberlunes_colombia" value={campaign} onChange={(e) => setCampaign(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
        </div>
      </div>

      {finalUrl ? (
        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', marginBottom: '6px' }}>Enlace con Parámetros UTM Listos:</div>
          <div style={{ padding: '10px', background: '#ffffff', border: '1px solid #86efac', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace', color: '#15803d', wordBreak: 'break-all', marginBottom: '10px' }}>
            {finalUrl}
          </div>
          <button
            onClick={handleCopy}
            style={{ width: '100%', padding: '12px', background: '#16a34a', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
          >
            {copied ? '✓ ¡Enlace UTM Copiado!' : 'Copiar Enlace Completo'}
          </button>
        </div>
      ) : (
        <div style={{ padding: '16px', background: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: '10px', textAlign: 'center', fontSize: '13px', color: '#6b7280' }}>
          Ingresa la URL de destino arriba para generar tus parámetros de rastreo.
        </div>
      )}
    </div>
  );
}
