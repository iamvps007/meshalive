'use client';

import React, { useState } from 'react';
import QRCode from 'qrcode';

export default function WifiQrTool() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [hidden, setHidden] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSsid = ssid.trim();
    if (!cleanSsid) {
      setError('Please enter your Wi-Fi Network Name (SSID).');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Escape special characters per standard WiFi QR code spec (MECARD format)
      const escapeVal = (v: string) => v.replace(/([\\;,:"])/g, '\\$1');

      let wifiString = `WIFI:S:${escapeVal(cleanSsid)};`;
      if (encryption !== 'nopass') {
        wifiString += `T:${encryption};`;
        if (password) {
          wifiString += `P:${escapeVal(password)};`;
        }
      } else {
        wifiString += `T:nopass;`;
      }
      if (hidden) {
        wifiString += `H:true;`;
      }
      wifiString += ';';

      const dataUrl = await QRCode.toDataURL(wifiString, {
        width: 340,
        margin: 2,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M',
      });
      setQrDataUrl(dataUrl);
    } catch (err: any) {
      setError(err?.message || 'Failed to generate Wi-Fi QR code');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `wifi-${ssid.trim().toLowerCase().replace(/\s+/g, '-')}-qr.png`;
    a.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', width: '100%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 32,
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 20,
        padding: 'clamp(20px, 4vw, 36px)',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
      }}>
        {/* Form */}
        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Network Name (SSID) <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Office_Guest_WiFi or Home_5G"
              value={ssid}
              onChange={(e) => { setSsid(e.target.value); setError(null); }}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 15,
                border: '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Security Encryption
            </label>
            <select
              value={encryption}
              onChange={(e) => setEncryption(e.target.value as any)}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 15,
                border: '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
                fontFamily: 'inherit',
                background: '#fff',
                boxSizing: 'border-box',
              }}
            >
              <option value="WPA">WPA / WPA2 / WPA3 (Standard / Recommended)</option>
              <option value="WEP">WEP (Older routers)</option>
              <option value="nopass">None / Open (No password)</option>
            </select>
          </div>

          {encryption !== 'nopass' && (
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Wi-Fi Password
              </label>
              <input
                type="text"
                placeholder="Enter router Wi-Fi password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: 15,
                  border: '1px solid #cbd5e1',
                  borderRadius: 10,
                  outline: 'none',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <input
              type="checkbox"
              id="hidden-wifi"
              checked={hidden}
              onChange={(e) => setHidden(e.target.checked)}
              style={{ width: 16, height: 16, accentColor: '#2563eb' }}
            />
            <label htmlFor="hidden-wifi" style={{ fontSize: 14, color: '#475569', cursor: 'pointer' }}>
              Hidden network (SSID is not broadcasted)
            </label>
          </div>

          {error && (
            <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, color: '#b91c1c', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !ssid.trim()}
            style={{
              padding: '14px 20px',
              background: '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: loading || !ssid.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !ssid.trim() ? 0.7 : 1,
              transition: 'background 0.15s ease',
              marginTop: 4,
            }}
          >
            {loading ? 'Creating QR Code...' : 'Generate Wi-Fi QR Code'}
          </button>
        </form>

        {/* QR Card Standee */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8fafc',
          border: '1px dashed #cbd5e1',
          borderRadius: 16,
          padding: 24,
          minHeight: 340,
        }}>
          {qrDataUrl ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{
                background: '#ffffff',
                border: '2px solid #0f172a',
                borderRadius: 16,
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
                maxWidth: 290,
                width: '100%',
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', color: '#0284c7', textTransform: 'uppercase', marginBottom: 4 }}>
                  📶 Scan to Join Wi-Fi
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
                  {ssid}
                </div>

                <img
                  src={qrDataUrl}
                  alt="Wi-Fi Connection QR Code"
                  style={{ width: '100%', maxWidth: 220, height: 'auto', display: 'block', margin: '0 auto' }}
                />

                <div style={{ fontSize: 12, color: '#64748b', marginTop: 12, lineHeight: 1.4 }}>
                  Open camera & point to connect automatically without typing password.
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20, justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={handleDownload}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#ffffff',
                    background: '#0f172a',
                    border: 'none',
                    borderRadius: 8,
                    cursor: 'pointer',
                  }}
                >
                  Download PNG
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#0f172a',
                    background: '#e2e8f0',
                    border: 'none',
                    borderRadius: 8,
                    cursor: 'pointer',
                  }}
                >
                  Print Standee Card
                </button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '20px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📶</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#334155', marginBottom: 4 }}>
                Instant Wi-Fi Access
              </div>
              <div style={{ fontSize: 13, maxWidth: 240, margin: '0 auto', lineHeight: 1.4 }}>
                Enter your Wi-Fi details to create a guest card your visitors can scan to connect immediately.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
