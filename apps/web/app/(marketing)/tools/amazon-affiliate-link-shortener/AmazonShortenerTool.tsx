'use client';

import React, { useState } from 'react';
import QRCode from 'qrcode';

export default function AmazonShortenerTool() {
  const [inputUrl, setInputUrl] = useState('');
  const [affiliateTag, setAffiliateTag] = useState('');
  const [cleanedUrl, setCleanedUrl] = useState<string | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper to extract ASIN and clean Amazon URL
  const cleanAmazonLink = (rawUrl: string, customTag?: string): { url: string; extractedTag: string | null } => {
    try {
      const parsed = new URL(rawUrl.trim());
      const currentTag = customTag?.trim() || parsed.searchParams.get('tag') || null;

      // Check if it's an Amazon domain
      if (/amazon\.(com|in|co\.uk|de|ca|ae|sa|fr|it|es|com\.au|co\.jp)/i.test(parsed.hostname)) {
        // Look for /dp/ASIN or /gp/product/ASIN
        const asinMatch = parsed.pathname.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i);
        if (asinMatch && asinMatch[1]) {
          const asin = asinMatch[1].toUpperCase();
          let clean = `https://${parsed.hostname}/dp/${asin}`;
          if (currentTag) {
            clean += `?tag=${encodeURIComponent(currentTag)}`;
          }
          return { url: clean, extractedTag: currentTag };
        }
      }

      // Check if it's Flipkart
      if (/flipkart\.com/i.test(parsed.hostname)) {
        // Flipkart affiliate tag is usually affiliate_id or affid
        const affid = customTag?.trim() || parsed.searchParams.get('affid') || null;
        let clean = `https://www.flipkart.com${parsed.pathname}`;
        const pid = parsed.searchParams.get('pid');
        const params = new URLSearchParams();
        if (pid) params.set('pid', pid);
        if (affid) params.set('affid', affid);
        const q = params.toString();
        if (q) clean += `?${q}`;
        return { url: clean, extractedTag: affid };
      }

      // Generic URL fallback: clean utm_* junk
      const params = new URLSearchParams(parsed.search);
      const junkParams = ['ref', 'ref_', 'crid', 'sprefix', 'keywords', 'qid', 'sr', 'pd_rd_w', 'pd_rd_wg', 'pd_rd_r', 'content-id'];
      junkParams.forEach(p => params.delete(p));
      if (customTag && customTag.trim()) {
        params.set('tag', customTag.trim());
      }
      const searchStr = params.toString();
      const clean = `${parsed.origin}${parsed.pathname}${searchStr ? '?' + searchStr : ''}`;
      return { url: clean, extractedTag: customTag?.trim() || null };
    } catch {
      throw new Error('Please enter a valid product URL (e.g., https://amazon.in/dp/...)');
    }
  };

  const handleProcess = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCopied(false);
    setCleanedUrl(null);
    setShortUrl(null);
    setQrCodeUrl(null);

    if (!inputUrl.trim()) {
      setError('Please paste your Amazon or product link.');
      return;
    }

    let urlToClean = inputUrl.trim();
    if (!urlToClean.startsWith('http://') && !urlToClean.startsWith('https://')) {
      urlToClean = 'https://' + urlToClean;
    }

    setLoading(true);

    try {
      const { url: finalCleanUrl, extractedTag } = cleanAmazonLink(urlToClean, affiliateTag);
      setCleanedUrl(finalCleanUrl);
      if (extractedTag && !affiliateTag) {
        setAffiliateTag(extractedTag);
      }

      // Generate QR Code for the link
      const qrData = await QRCode.toDataURL(finalCleanUrl, {
        width: 300,
        margin: 2,
        color: { dark: '#0f172a', light: '#ffffff' }
      });
      setQrCodeUrl(qrData);

      // Shorten via Meshalive API
      try {
        const res = await fetch('https://api.meshalive.com/v1/shorten', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: finalCleanUrl }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data && (data.short_url || data.shortUrl)) {
            setShortUrl(data.short_url || data.shortUrl);
          }
        }
      } catch (apiErr) {
        // Non-blocking if API call fails
        console.warn('API shorten error:', apiErr);
      }
    } catch (err: any) {
      setError(err?.message || 'Could not process this link. Please ensure it is a valid product URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const activeLink = shortUrl || cleanedUrl;

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', width: '100%' }}>
      <div style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 20,
        padding: 'clamp(20px, 4vw, 36px)',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
      }}>
        <form onSubmit={handleProcess} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Amazon / E-Commerce Product Link <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Paste long link: https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY/ref=sr_1_1?crid=..."
              value={inputUrl}
              onChange={(e) => { setInputUrl(e.target.value); setError(null); }}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 14,
                border: '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
            <span style={{ fontSize: 12, color: '#64748b', marginTop: 4, display: 'block' }}>
              Works with Amazon (.in, .com, .ae, .co.uk, etc.), Flipkart, and direct e-commerce stores.
            </span>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Your Affiliate Associate Tag (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. techreview-21 or mychannel-20 (Leave blank to keep existing tag)"
              value={affiliateTag}
              onChange={(e) => setAffiliateTag(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 14,
                border: '1px solid #cbd5e1',
                borderRadius: 10,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, color: '#b91c1c', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !inputUrl.trim()}
            style={{
              padding: '14px 20px',
              background: '#ea580c',
              color: '#ffffff',
              border: 'none',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: loading || !inputUrl.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !inputUrl.trim() ? 0.7 : 1,
              transition: 'background 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {loading ? 'Cleaning & Shortening...' : 'Clean & Shorten Affiliate Link 🚀'}
          </button>
        </form>

        {/* Results Box */}
        {activeLink && (
          <div style={{
            marginTop: 28,
            padding: 24,
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c2410c' }}>
                ✓ Cleaned & Tracking Preserved
              </span>
              {copied && (
                <span style={{ fontSize: 12, fontWeight: 700, color: '#16a34a' }}>
                  ✓ Copied to clipboard!
                </span>
              )}
            </div>

            {shortUrl && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 4 }}>
                  Branded Short Link (Best for YouTube description & Telegram)
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    readOnly
                    value={shortUrl}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#0f172a',
                      background: '#ffffff',
                      border: '1px solid #fdba74',
                      borderRadius: 8,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(shortUrl)}
                    style={{
                      padding: '10px 18px',
                      background: '#ea580c',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}

            {cleanedUrl && (
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 4 }}>
                  Canonical ASIN Link (Full clean URL)
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    readOnly
                    value={cleanedUrl}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: 13,
                      color: '#334155',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 8,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(cleanedUrl)}
                    style={{
                      padding: '10px 18px',
                      background: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: 13,
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}

            {qrCodeUrl && (
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px dashed #fed7aa', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <img src={qrCodeUrl} alt="Affiliate Link QR Code" style={{ width: 100, height: 100, borderRadius: 8, background: '#fff', padding: 4 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
                    Product QR Code Ready
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', maxWidth: 360, lineHeight: 1.4 }}>
                    Use this QR code in product unboxing videos, packaging inserts, or printed banners to earn affiliate commission on mobile scans.
                  </div>
                  <a
                    href={qrCodeUrl}
                    download="affiliate-qr.png"
                    style={{ display: 'inline-block', marginTop: 8, fontSize: 12, fontWeight: 700, color: '#ea580c', textDecoration: 'none' }}
                  >
                    Download QR Image ↓
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
