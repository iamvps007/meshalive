'use client';

import React, { useState } from 'react';
import QRCode from 'qrcode';

export default function YoutubeSubscribeTool() {
  const [channelInput, setChannelInput] = useState('');
  const [subscribeUrl, setSubscribeUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedLong, setCopiedLong] = useState(false);
  const [copiedShort, setCopiedShort] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const raw = channelInput.trim();
    if (!raw) return;

    setError(null);
    setLoading(true);

    try {
      let cleanUrl = raw;
      if (cleanUrl.startsWith('@')) {
        cleanUrl = `https://www.youtube.com/${cleanUrl}`;
      } else if (!/^https?:\/\//i.test(cleanUrl)) {
        cleanUrl = `https://${cleanUrl}`;
      }

      // Check if it's a valid youtube domain
      if (!cleanUrl.includes('youtube.com') && !cleanUrl.includes('youtu.be')) {
        throw new Error('Please enter a valid YouTube channel URL or @handle.');
      }

      const parsed = new URL(cleanUrl);
      parsed.searchParams.set('sub_confirmation', '1');
      const finalSubscribeUrl = parsed.toString();
      setSubscribeUrl(finalSubscribeUrl);

      // Shorten URL via Meshalive API
      try {
        const res = await fetch('https://api.meshalive.com/v1/shorten', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: finalSubscribeUrl }),
        });
        if (res.ok) {
          const data = await res.json();
          setShortUrl(data.short_url);
        } else {
          setShortUrl(finalSubscribeUrl);
        }
      } catch {
        setShortUrl(finalSubscribeUrl);
      }

      // Generate QR Code
      const qrData = await QRCode.toDataURL(finalSubscribeUrl, {
        width: 300,
        margin: 2,
        color: { dark: '#ff0000', light: '#ffffff' },
      });
      setQrCodeUrl(qrData);
    } catch (err: any) {
      setError(err?.message || 'Invalid YouTube URL.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, isShort: boolean) => {
    navigator.clipboard.writeText(text);
    if (isShort) {
      setCopiedShort(true);
      setTimeout(() => setCopiedShort(false), 2000);
    } else {
      setCopiedLong(true);
      setTimeout(() => setCopiedLong(false), 2000);
    }
  };

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', width: '100%' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 20,
          padding: 'clamp(20px, 4vw, 36px)',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        }}
      >
        <label style={{ fontSize: 14, fontWeight: 700, color: '#1e293b', textAlign: 'left' }}>
          Enter YouTube Channel Link or @Handle
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <input
            type="text"
            placeholder="e.g. https://youtube.com/@channel or @channelname"
            value={channelInput}
            onChange={(e) => setChannelInput(e.target.value)}
            required
            style={{
              flex: '1 1 300px',
              padding: '14px 18px',
              fontSize: 16,
              border: '1px solid #cbd5e1',
              borderRadius: 12,
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
          <button
            type="submit"
            disabled={loading || !channelInput.trim()}
            style={{
              padding: '14px 28px',
              fontSize: 15,
              fontWeight: 700,
              color: '#ffffff',
              background: '#dc2626',
              border: 'none',
              borderRadius: 12,
              cursor: loading || !channelInput.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !channelInput.trim() ? 0.7 : 1,
              whiteSpace: 'nowrap',
            }}
          >
            {loading ? 'Creating...' : 'Generate Auto-Subscribe Link'}
          </button>
        </div>

        {error && (
          <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, color: '#b91c1c', fontSize: 13, textAlign: 'left' }}>
            {error}
          </div>
        )}
      </form>

      {/* Result Card */}
      {subscribeUrl && (
        <div style={{
          marginTop: 32,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 20,
          padding: 'clamp(20px, 4vw, 36px)',
          textAlign: 'left',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 20 }}>✅</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#0f172a' }}>
              Your Auto-Subscribe Link is Ready!
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'center' }}>
            <div>
              {shortUrl && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#64748b', display: 'block', marginBottom: 6 }}>
                    Short Trackable Link (Best for Bio, Twitter, WhatsApp)
                  </label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      type="text"
                      readOnly
                      value={shortUrl}
                      style={{ flex: 1, padding: '10px 14px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 8, fontSize: 14, fontFamily: 'monospace' }}
                    />
                    <button
                      type="button"
                      onClick={() => copyToClipboard(shortUrl, true)}
                      style={{ padding: '10px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
                    >
                      {copiedShort ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#64748b', display: 'block', marginBottom: 6 }}>
                  Full YouTube URL with Confirmation Parameter
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    readOnly
                    value={subscribeUrl}
                    style={{ flex: 1, padding: '10px 14px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 8, fontSize: 13, fontFamily: 'monospace' }}
                  />
                  <button
                    type="button"
                    onClick={() => copyToClipboard(subscribeUrl, false)}
                    style={{ padding: '10px 18px', background: '#0f172a', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
                  >
                    {copiedLong ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div style={{ marginTop: 20, padding: 12, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, fontSize: 13, color: '#166534', lineHeight: 1.5 }}>
                💡 <strong>Pro Tip:</strong> When anyone clicks this link on desktop, YouTube immediately shows a <em>"Confirm Channel Subscription"</em> popup. Creators report up to <strong>3x higher subscription conversion</strong>!
              </div>
            </div>

            {qrCodeUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f8fafc', padding: 16, borderRadius: 16, border: '1px solid #e2e8f0' }}>
                <img src={qrCodeUrl} alt="YouTube Subscribe QR Code" style={{ width: 180, height: 180, borderRadius: 8 }} />
                <a
                  href={qrCodeUrl}
                  download="youtube-subscribe-qr.png"
                  style={{ marginTop: 12, fontSize: 12, fontWeight: 700, color: '#dc2626', textDecoration: 'none' }}
                >
                  Download QR Code (PNG)
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
