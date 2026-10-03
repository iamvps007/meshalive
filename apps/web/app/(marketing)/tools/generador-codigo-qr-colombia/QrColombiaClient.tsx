'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export default function QrColombiaClient() {
  const [data, setData] = useState('https://meshalive.com');
  const [qrUrl, setQrUrl] = useState<string>('');
  const [size, setSize] = useState<number>(300);

  useEffect(() => {
    if (!data.trim()) {
      setQrUrl('');
      return;
    }
    QRCode.toDataURL(data.trim(), {
      width: size,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => setQrUrl(url))
      .catch(() => setQrUrl(''));
  }, [data, size]);

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid #e5e7eb',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 700,
                color: '#111111',
                marginBottom: '8px',
              }}
            >
              Contenido del Código QR
            </label>
            <input
              type="text"
              placeholder="https://tutienda.com o enlace de WhatsApp"
              value={data}
              onChange={(e) => setData(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 14px',
                border: '1.5px solid #d1d5db',
                borderRadius: '10px',
                outline: 'none',
                fontSize: '14px',
                color: '#111111',
              }}
            />
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '6px 0 0' }}>
              Pega una URL web, link de WhatsApp (+57), menú digital o texto.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 700,
                color: '#111111',
                marginBottom: '8px',
              }}
            >
              Resolución de Descarga
            </label>
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '10px 12px',
                border: '1.5px solid #d1d5db',
                borderRadius: '10px',
                background: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                color: '#111111',
              }}
            >
              <option value={200}>200 x 200 px (Digital / Redes)</option>
              <option value={300}>300 x 300 px (Estándar)</option>
              <option value={400}>400 x 400 px (Impresión Media)</option>
              <option value={500}>500 x 500 px (Alta Calidad para Menús)</option>
            </select>
          </div>

          {qrUrl && (
            <a
              href={qrUrl}
              download="codigo-qr-colombia.png"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                boxSizing: 'border-box',
                padding: '12px 20px',
                background: '#0057ff',
                color: '#ffffff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Descargar Código QR (PNG) ↓
            </a>
          )}
        </div>

        {/* QR Preview Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: '#f9fafb',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
          }}
        >
          {qrUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qrUrl}
              alt="Código QR Generado"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '8px',
                background: '#ffffff',
                padding: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            />
          ) : (
            <div
              style={{
                width: '180px',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                border: '1.5px dashed #d1d5db',
                borderRadius: '8px',
                fontSize: '13px',
              }}
            >
              Ingresa un texto o link
            </div>
          )}
          <span style={{ fontSize: '11px', color: '#6b7280', marginTop: '12px', fontWeight: 600 }}>
            Escaneo instantáneo con cualquier celular
          </span>
        </div>
      </div>
    </div>
  );
}
