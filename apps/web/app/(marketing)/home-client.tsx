'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import QRCode from 'qrcode';
import { api } from '@/lib/api';

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const ACCENT = '#0057ff';
const ACCENT_SOFT = '#eff6ff';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortenError, setShortenError] = useState('');
  const [copied, setCopied] = useState(false);
  const [modal, setModal] = useState<{ slug: string; qrDataUrl: string } | null>(null);

  const shorten = async () => {
    if (!url.trim()) return;
    let rawUrl = url.trim();
    if (!/^https?:\/\//i.test(rawUrl)) rawUrl = 'https://' + rawUrl;
    setLoading(true);
    setShortenError('');
    try {
      const result = await api.postNoAuth<{ slug: string; short_url: string }>('/v1/shorten', { url: rawUrl });
      const shortUrl = `https://msha.live/${result.slug}`;
      let qrDataUrl = '';
      try {
        qrDataUrl = await QRCode.toDataURL(shortUrl, {
          width: 280, margin: 2,
          color: { dark: '#111111', light: '#ffffff' },
        });
      } catch {}
      setModal({ slug: result.slug, qrDataUrl });
      setUrl('');
    } catch {
      setShortenError('Could not shorten that URL. Please check the link and try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyShortUrl = () => {
    if (!modal) return;
    navigator.clipboard.writeText(`https://msha.live/${modal.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .shorten-btn:hover { background: #0047dd !important; }
        .shorten-btn:active { transform: scale(0.98); }
        .feature-card:hover { border-color: #d1d5db !important; box-shadow: 0 4px 16px rgba(0,0,0,0.06) !important; }
        .url-input:focus { outline: none; }
        .url-box:focus-within { border-color: #0057ff !important; box-shadow: 0 0 0 3px rgba(0,87,255,0.12) !important; }
      `}</style>

      {/* ── Hero ── */}
      <section style={{ background: '#ffffff', padding: '80px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', animation: 'fadeUp 0.5s ease both' }}>

          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: ACCENT_SOFT, border: '1px solid #bfdbfe',
            borderRadius: 999, padding: '5px 14px', marginBottom: 28,
            fontSize: 13, fontWeight: 500, color: ACCENT,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, display: 'inline-block' }} />
            Free forever · No account needed to start
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 800, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: INK, margin: '0 0 18px',
          }}>
            Shorten any URL,<br />
            <span style={{ color: ACCENT }}>free.</span>
          </h1>

          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.65, margin: '0 0 32px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Paste a long link and get a clean short URL instantly. No sign-up required.
          </p>

          {/* Product Hunt badge */}
          <div style={{ marginBottom: 32 }}>
            <a
              href="https://www.producthunt.com/products/url-shortener-with-analytics-qr-codes?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-url-shortener-with-analytics-qr-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="URL Shortener with Analytics & QR Codes - Shorten links, track clicks & make QR codes — 100% free | Product Hunt"
                width={250}
                height={54}
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1156121&theme=dark&t=1779796345056"
                style={{ display: 'inline-block' }}
              />
            </a>
          </div>

          {/* Input box */}
          <div className="url-box" style={{
            display: 'flex', alignItems: 'center',
            background: '#ffffff',
            border: `1.5px solid ${HAIR}`,
            borderRadius: 14,
            padding: 6,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'border-color 150ms, box-shadow 150ms',
            gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0, paddingLeft: 8 }}>
              <Icon name="link" size={18} style={{ color: MUTED, flexShrink: 0, marginRight: 10 }} />
              <input
                className="url-input"
                value={url}
                onChange={e => { setUrl(e.target.value); setShortenError(''); }}
                onKeyDown={e => e.key === 'Enter' && shorten()}
                placeholder="Paste your long URL here..."
                autoFocus
                style={{
                  flex: 1, minWidth: 0,
                  border: 0, background: 'transparent',
                  fontSize: 16, color: INK,
                  padding: '12px 4px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <button
              className="shorten-btn"
              onClick={shorten}
              disabled={loading}
              style={{
                background: ACCENT, color: '#ffffff',
                border: 'none', borderRadius: 10,
                padding: '13px 24px',
                fontSize: 15, fontWeight: 600,
                cursor: loading ? 'wait' : 'pointer',
                opacity: loading ? 0.8 : 1,
                whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: 8,
                transition: 'background 150ms',
                flexShrink: 0,
              }}
            >
              {loading ? (
                <>
                  <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                  Shortening…
                </>
              ) : (
                <>Shorten URL</>
              )}
            </button>
          </div>

          {/* Error message */}
          {shortenError && (
            <div style={{ marginTop: 10, fontSize: 13, color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Icon name="alert-circle" size={14} /> {shortenError}
            </div>
          )}

          {/* Feature chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 24 }}>
            {[
              { icon: 'check', label: 'Free forever' },
              { icon: 'chart', label: 'Click analytics' },
              { icon: 'qr', label: 'QR codes' },
              { icon: 'tag', label: 'Custom slugs' },
            ].map(f => (
              <div key={f.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, color: MUTED,
                background: '#f9fafb', border: `1px solid ${HAIR}`,
                borderRadius: 999, padding: '5px 12px',
              }}>
                <Icon name={f.icon} size={13} />
                {f.label}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ background: '#f9fafb', borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}`, padding: '56px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.025em', color: INK, margin: '0 0 8px' }}>How it works</h2>
            <p style={{ fontSize: 15, color: MUTED, margin: 0 }}>Three steps. Under 5 seconds.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { step: '1', title: 'Paste your URL', desc: 'Drop any long link into the box above — social posts, docs, articles, anything.' },
              { step: '2', title: 'Click Shorten', desc: 'We generate a clean short link like msha.live/abc123 instantly.' },
              { step: '3', title: 'Share it', desc: 'Copy your short link. Sign up free to track clicks and see analytics.' },
            ].map(s => (
              <div key={s.step} className="feature-card" style={{
                background: '#ffffff',
                border: `1px solid ${HAIR}`,
                borderRadius: 14, padding: '24px 20px',
                transition: 'border-color 150ms, box-shadow 150ms',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: ACCENT_SOFT, border: '1px solid #bfdbfe',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: ACCENT, marginBottom: 14,
                }}>{s.step}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: INK, marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.025em', color: INK, margin: '0 0 8px' }}>More than just short links</h2>
            <p style={{ fontSize: 15, color: MUTED, margin: 0 }}>Create a free account to unlock everything.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: 'chart', title: 'Click analytics', desc: 'See total clicks, countries, devices, and referrers in real time.' },
              { icon: 'qr', title: 'QR code generator', desc: 'Every short link comes with a downloadable QR code. Dynamic — update the URL after printing.' },
              { icon: 'tag', title: 'Custom slugs', desc: 'Choose your own link ending: msha.live/your-brand instead of random characters.' },
              { icon: 'globe', title: 'Custom domains', desc: 'Use your own domain for fully branded short links on paid plans.' },
            ].map(f => (
              <div key={f.title} className="feature-card" style={{
                background: '#ffffff', border: `1px solid ${HAIR}`,
                borderRadius: 14, padding: '22px 20px',
                transition: 'border-color 150ms, box-shadow 150ms',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: ACCENT_SOFT, border: '1px solid #bfdbfe',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ACCENT, marginBottom: 14,
                }}>
                  <Icon name={f.icon} size={16} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: INK, marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: INK, padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 12px' }}>
            Start for free. No credit card.
          </h2>
          <p style={{ fontSize: 16, color: '#777777', margin: '0 0 28px', lineHeight: 1.6 }}>
            Unlimited links, full analytics dashboard, custom domains — free forever.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#ffffff', color: INK,
              padding: '13px 26px', borderRadius: 999,
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              Create free account <Icon name="arrow-right" size={15} />
            </Link>
            <Link href="/pricing" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#4b5563',
              padding: '13px 26px', borderRadius: 999,
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Short link modal ── */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 500,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#ffffff', borderRadius: 24,
              padding: '40px 36px 32px',
              maxWidth: 400, width: '100%',
              boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 24, position: 'relative',
            }}
          >
            <button
              onClick={() => setModal(null)}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32, borderRadius: '50%',
                border: `1px solid ${HAIR}`, background: '#f9fafb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: MUTED,
              }}
            >
              <Icon name="x" size={15} />
            </button>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: '#f0fdf4', border: '1px solid #bbf7d0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 12px', color: '#16a34a',
              }}>
                <Icon name="check" size={20} />
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: INK }}>Your link is ready!</div>
            </div>

            {modal.qrDataUrl && (
              <div style={{ padding: 10, border: `1px solid ${HAIR}`, borderRadius: 14, background: '#fff', lineHeight: 0 }}>
                <img src={modal.qrDataUrl} alt="QR code" style={{ width: 180, height: 180, display: 'block', borderRadius: 6 }} />
              </div>
            )}

            <div style={{
              width: '100%', display: 'flex', alignItems: 'center',
              border: `1.5px solid ${ACCENT}`, borderRadius: 12,
              overflow: 'hidden', background: ACCENT_SOFT,
            }}>
              <a
                href={`https://msha.live/${modal.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1, padding: '12px 14px',
                  fontFamily: 'monospace', fontSize: 15, fontWeight: 600,
                  color: ACCENT, textDecoration: 'none',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}
              >
                msha.live/{modal.slug}
              </a>
              <button
                onClick={copyShortUrl}
                style={{
                  padding: '12px 16px', border: 'none',
                  borderLeft: `1px solid rgba(0,87,255,0.2)`,
                  background: copied ? ACCENT : 'transparent',
                  color: copied ? '#fff' : ACCENT,
                  cursor: 'pointer',
                  fontSize: 13, fontWeight: 600,
                  transition: 'all 150ms', flexShrink: 0,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <Icon name={copied ? 'check' : 'copy'} size={14} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div style={{ width: '100%', textAlign: 'center' }}>
              <p style={{ fontSize: 13, color: MUTED, margin: '0 0 12px', lineHeight: 1.5 }}>
                Sign up free to track clicks, use custom slugs, and manage all your links.
              </p>
              <Link href="/register" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 22px', borderRadius: 999,
                background: INK, color: '#ffffff',
                fontSize: 13, fontWeight: 600, textDecoration: 'none',
              }}>
                Save & track this link <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
