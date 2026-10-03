'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export default function WifiQrClient() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('WPA');
  const [hidden, setHidden] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    if (!ssid.trim()) {
      setQrUrl('');
      return;
    }
    const payload = `WIFI:S:${ssid.trim()};T:${auth};P:${password};H:${hidden ? 'true' : 'false'};;`;
    QRCode.toDataURL(payload, {
      width: 320,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
      errorCorrectionLevel: 'M',
    })
      .then((url) => setQrUrl(url))
      .catch(() => setQrUrl(''));
  }, [ssid, password, auth, hidden]);

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', textAlign: 'left' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>Nombre de la Red Wi-Fi (SSID)</label>
            <input
              type="text"
              placeholder="Ej: Cafe_Bogota_WiFi"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
              style={{ width: '100%', boxSizing: 'border-box', padding: '11px 13px', border: '1.5px solid #d1d5db', borderRadius: '10px', fontSize: '14px' }}
            />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>Contraseña</label>
            <input
              type="text"
              placeholder="Clave de acceso"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', boxSizing: 'border-box', padding: '11px 13px', border: '1.5px solid #d1d5db', borderRadius: '10px', fontSize: '14px' }}
            />
          </div>
          <div style={{ marginBottom: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#6b7280', display: 'block', marginBottom: '4px' }}>Seguridad</label>
              <select
                value={auth}
                onChange={(e) => setAuth(e.target.value)}
                style={{ padding: '8px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px', background: '#ffffff' }}
              >
                <option value="WPA">WPA / WPA2 / WPA3</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Sin Contraseña</option>
              </select>
            </div>
            <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', marginTop: '18px' }}>
              <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} />
              Red Oculta
            </label>
          </div>

          {qrUrl && (
            <a
              href={qrUrl}
              download={`wifi-${ssid || 'red'}-qr.png`}
              style={{ display: 'inline-block', width: '100%', textAlign: 'center', boxSizing: 'border-box', padding: '12px 18px', background: '#0057ff', color: '#ffffff', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
            >
              Descargar Código QR Wi-Fi (PNG) ↓
            </a>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
          {qrUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qrUrl} alt="QR WiFi" style={{ width: '180px', height: '180px', borderRadius: '8px', background: '#ffffff', padding: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          ) : (
            <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', border: '1.5px dashed #d1d5db', borderRadius: '8px', fontSize: '13px' }}>
              Escribe el nombre de red
            </div>
          )}
          <span style={{ fontSize: '11px', color: '#6b7280', marginTop: '12px', fontWeight: 600 }}>Apunta la cámara para conectar</span>
        </div>
      </div>
    </div>
  );
}
