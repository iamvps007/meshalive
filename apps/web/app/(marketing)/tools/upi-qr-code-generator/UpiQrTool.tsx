'use client';

import React, { useState } from 'react';
import QRCode from 'qrcode';

export default function UpiQrTool() {
  const [upiId, setUpiId] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [rawUri, setRawUri] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateQr = async (id: string, name: string, amt: string, nt: string) => {
    const cleanId = id.trim();
    if (!cleanId) {
      setQrDataUrl(null);
      setRawUri('');
      return;
    }

    if (!cleanId.includes('@')) {
      setError('Please enter a valid UPI ID (e.g., yourname@okhdfcbank or 9876543210@paytm)');
      setQrDataUrl(null);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      let uri = `upi://pay?pa=${encodeURIComponent(cleanId)}`;
      if (name.trim()) uri += `&pn=${encodeURIComponent(name.trim())}`;
      if (amt.trim() && parseFloat(amt) > 0) uri += `&am=${encodeURIComponent(amt.trim())}`;
      uri += `&cu=INR`;
      if (nt.trim()) uri += `&tn=${encodeURIComponent(nt.trim())}`;

      setRawUri(uri);

      const dataUrl = await QRCode.toDataURL(uri, {
        width: 340,
        margin: 2,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      });
      setQrDataUrl(dataUrl);
    } catch (err: any) {
      setError(err?.message || 'Failed to generate UPI QR code');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    generateQr(upiId, payeeName, amount, note);
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    const filename = `${payeeName.trim() ? payeeName.trim().toLowerCase().replace(/\s+/g, '-') : 'upi'}-qr-meshalive.png`;
    a.download = filename;
    a.click();
  };

  const handleCopyLink = () => {
    if (!rawUri) return;
    navigator.clipboard.writeText(rawUri);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
        {/* Input Form */}
        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              UPI ID (VPA) <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. shopname@okaxis or 9876543210@paytm"
              value={upiId}
              onChange={(e) => { setUpiId(e.target.value); setError(null); }}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 15,
                border: error ? '1.5px solid #ef4444' : '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
            <span style={{ fontSize: 12, color: '#64748b', marginTop: 4, display: 'block' }}>
              Works with PhonePe, Google Pay, Paytm, BHIM, Amazon Pay & Cred
            </span>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Payee / Business Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh General Store or Priya Sharma"
              value={payeeName}
              onChange={(e) => setPayeeName(e.target.value)}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Amount (₹ INR - Optional)
              </label>
              <input
                type="number"
                step="0.01"
                min="1"
                placeholder="Leave blank for any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
                Note (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Invoice / Order #12"
                value={note}
                onChange={(e) => setNote(e.target.value)}
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
          </div>

          {error && (
            <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, color: '#b91c1c', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !upiId.trim()}
            style={{
              padding: '14px 20px',
              background: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: loading || !upiId.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !upiId.trim() ? 0.7 : 1,
              transition: 'background 0.15s ease',
              marginTop: 4,
            }}
          >
            {loading ? 'Generating QR Code...' : 'Generate UPI QR Code'}
          </button>
        </form>

        {/* QR Code Standee Preview */}
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
                padding: '20px 24px',
                textAlign: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
                maxWidth: 280,
                width: '100%',
              }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', color: '#16a34a', textTransform: 'uppercase', marginBottom: 4 }}>
                  Accepted Here
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {payeeName.trim() || 'Pay with Any UPI App'}
                </div>

                <img
                  src={qrDataUrl}
                  alt="UPI Payment QR Code"
                  style={{ width: '100%', maxWidth: 220, height: 'auto', display: 'block', margin: '0 auto' }}
                />

                {amount.trim() && parseFloat(amount) > 0 && (
                  <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, color: '#0f172a' }}>
                    ₹{parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </div>
                )}

                <div style={{ fontSize: 11, color: '#64748b', marginTop: 8, fontFamily: 'monospace' }}>
                  {upiId}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 10, fontSize: 10, fontWeight: 700, color: '#475569' }}>
                  <span>GPay</span> • <span>PhonePe</span> • <span>Paytm</span> • <span>BHIM</span>
                </div>
              </div>

              {/* Action Buttons */}
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
                  Print Standee
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#2563eb',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: 8,
                    cursor: 'pointer',
                  }}
                >
                  {copied ? 'Copied Link!' : 'Copy UPI URI'}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '20px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#334155', marginBottom: 4 }}>
                Ready to Generate
              </div>
              <div style={{ fontSize: 13, maxWidth: 240, margin: '0 auto', lineHeight: 1.4 }}>
                Enter your UPI ID on the left to instantly preview your printable payment QR code.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
