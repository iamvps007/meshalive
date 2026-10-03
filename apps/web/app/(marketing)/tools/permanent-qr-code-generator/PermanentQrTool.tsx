'use client';

import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import * as gtag from '@/lib/gtag';

const SIZE_OPTIONS = [
  { label: '300 px (Standard Web)', value: 300 },
  { label: '500 px (HD Print / Stickers)', value: 500 },
  { label: '800 px (Ultra HD / Signage)', value: 800 },
  { label: '1200 px (Billboard / Packaging)', value: 1200 },
];

export default function PermanentQrTool() {
  const [content, setContent] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [size, setSize] = useState<number>(500);
  const [darkColor, setDarkColor] = useState('#111111');
  const [lightColor, setLightColor] = useState('#ffffff');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const generatePermanentQr = async (text: string, qrSize: number, dark: string, light: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      setError('Please enter a website URL, contact info, or text.');
      inputRef.current?.focus();
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const dataUrl = await QRCode.toDataURL(trimmed, {
        width: qrSize,
        margin: 2,
        color: {
          dark: dark || '#111111',
          light: light || '#ffffff',
        },
        errorCorrectionLevel: 'H', // High error correction: scannable even if printed and 30% scratched
      });
      setQrDataUrl(dataUrl);
      gtag.event('generate_permanent_qr', { size: qrSize, has_custom_colors: dark !== '#111111' });
    } catch (err: any) {
      setError(err?.message || 'Failed to generate permanent QR code.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generatePermanentQr(content, size, darkColor, lightColor);
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    gtag.event('download_permanent_qr', { size, type: 'png' });
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `meshalive-permanent-qr-${size}px.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyImage = async () => {
    if (!qrDataUrl) return;
    try {
      const res = await fetch(qrDataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      setCopied(true);
      gtag.event('copy_permanent_qr_image');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: copy content
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', width: '100%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 24,
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 12px 32px -8px rgba(0,0,0,0.06)',
        }}
      >
        {/* Left Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <label
                htmlFor="permanent-qr-input"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#1e293b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Website URL or Raw Text <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#16a34a',
                  background: '#f0fdf4',
                  padding: '2px 8px',
                  borderRadius: 12,
                  border: '1px solid #bbf7d0',
                }}
              >
                Never Expires (Static)
              </span>
            </div>
            <input
              id="permanent-qr-input"
              ref={inputRef}
              type="text"
              placeholder="https://yourwebsite.com/menu or Wi-Fi info"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                setError(null);
              }}
              required
              style={{
                width: '100%',
                padding: '13px 16px',
                fontSize: 15,
                border: '1.5px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                background: '#f8fafc',
              }}
            />
            <p style={{ margin: '6px 0 0', fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>
              Encodes your target data directly into the QR matrix. Works offline, forever, without intermediary redirect servers.
            </p>
          </div>

          {/* Size Select */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: 13,
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Print Resolution
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {SIZE_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => {
                    setSize(opt.value);
                    if (content.trim()) generatePermanentQr(content, opt.value, darkColor, lightColor);
                  }}
                  style={{
                    padding: '10px 12px',
                    fontSize: 12,
                    fontWeight: size === opt.value ? 700 : 500,
                    color: size === opt.value ? '#0057ff' : '#475569',
                    background: size === opt.value ? '#eff6ff' : '#f8fafc',
                    border: size === opt.value ? '1.5px solid #0057ff' : '1px solid #e2e8f0',
                    borderRadius: 8,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#475569',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                }}
              >
                Foreground
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '6px 10px', borderRadius: 8 }}>
                <input
                  type="color"
                  value={darkColor}
                  onChange={(e) => setDarkColor(e.target.value)}
                  style={{ width: 28, height: 28, border: 'none', background: 'none', cursor: 'pointer' }}
                />
                <span style={{ fontSize: 13, fontFamily: 'monospace', color: '#1e293b' }}>{darkColor}</span>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#475569',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                }}
              >
                Background
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '6px 10px', borderRadius: 8 }}>
                <input
                  type="color"
                  value={lightColor}
                  onChange={(e) => setLightColor(e.target.value)}
                  style={{ width: 28, height: 28, border: 'none', background: 'none', cursor: 'pointer' }}
                />
                <span style={{ fontSize: 13, fontFamily: 'monospace', color: '#1e293b' }}>{lightColor}</span>
              </div>
            </div>
          </div>

          {error && (
            <div style={{ padding: '10px 14px', borderRadius: 8, background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '14px 24px',
              fontSize: 15,
              fontWeight: 700,
              color: '#ffffff',
              background: '#0057ff',
              border: 'none',
              borderRadius: 12,
              cursor: loading ? 'wait' : 'pointer',
              boxShadow: '0 4px 14px rgba(0, 87, 255, 0.3)',
              transition: 'background 0.15s ease',
            }}
          >
            {loading ? 'Generating High-Res Code…' : 'Generate Permanent QR Code'}
          </button>
        </form>

        {/* Right Preview */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8fafc',
            border: '1.5px dashed #cbd5e1',
            borderRadius: 18,
            padding: 24,
            textAlign: 'center',
            minHeight: 340,
          }}
        >
          {qrDataUrl ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%' }}>
              <div
                style={{
                  padding: 16,
                  background: lightColor,
                  borderRadius: 16,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                }}
              >
                <img
                  src={qrDataUrl}
                  alt="Free Permanent Non-Expiring QR Code"
                  style={{ width: 220, height: 220, display: 'block', borderRadius: 4 }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: 20 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: '#16a34a' }}>Lifetime Validity · Unlimited Scans Guaranteed</span>
              </div>

              <div style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 300 }}>
                <button
                  type="button"
                  onClick={handleDownload}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#ffffff',
                    background: '#0f172a',
                    border: 'none',
                    borderRadius: 10,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  }}
                >
                  Download PNG
                </button>
                <button
                  type="button"
                  onClick={handleCopyImage}
                  style={{
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 600,
                    color: copied ? '#16a34a' : '#334155',
                    background: copied ? '#f0fdf4' : '#ffffff',
                    border: copied ? '1.5px solid #16a34a' : '1px solid #cbd5e1',
                    borderRadius: 10,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 260 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#0057ff',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', margin: '0 0 6px' }}>QR Preview</h4>
              <p style={{ fontSize: 13, color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                Enter your target link or information to instantly render your non-expiring permanent QR code.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
