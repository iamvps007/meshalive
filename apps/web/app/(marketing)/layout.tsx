'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Icon } from '@/components/ui/icon';

/* ── Design tokens ── */
const INK = '#0f172a';
const INK2 = '#334155';
const MUTED = '#64748b';
const HAIR = '#e2e8f0';
const PAPER2 = '#f8fafc';
const ACCENT_INK = '#0057ff';
const ACCENT_SOFT = '#eff6ff';

/* ── Categorized Product Mega-Menu Items ── */
interface MenuItem {
  icon: string;
  label: string;
  desc: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

const CATEGORY_INFRA: MenuItem[] = [
  { icon: 'link', label: 'URL Shortener', desc: 'Fast short links with custom aliases', href: '/tools/url-shortener' },
  { icon: 'chart', label: 'Click & Geo Analytics', desc: 'Country, device & referrer metrics', href: '/features#analytics' },
  { icon: 'tag', label: 'UTM Campaign Builder', desc: 'Track ad & campaign sources', href: '/tools/utm-builder' },
  { icon: 'split', label: 'Redirect Checker', desc: 'Trace 301/302 hops & verify health', href: '/tools/redirect-checker' },
  { icon: 'webhook', label: 'Developer REST API', desc: 'Sub-2ms programmatic link generation', href: '/docs' },
];

const CATEGORY_PAYMENTS_QR: MenuItem[] = [
  { icon: 'zap', label: 'UPI Payment QR', desc: 'Scan-to-pay for GPay, PhonePe, Paytm', href: '/tools/upi-qr-code-generator', badge: 'POPULAR', badgeColor: '#ea580c' },
  { icon: 'globe', label: 'Wi-Fi Connect QR', desc: 'Instant 1-scan connection for offices', href: '/tools/wifi-qr-code-generator', badge: 'NEW', badgeColor: '#0284c7' },
  { icon: 'qr', label: 'Dynamic QR Codes', desc: 'Printable vector QR codes with stats', href: '/tools/qr-code-generator' },
  { icon: 'credit-card', label: 'vCard Digital Profile', desc: 'Scan to save contact card (.vcf)', href: '/tools/vcard-generator' },
];

const CATEGORY_CREATORS: MenuItem[] = [
  { icon: 'sparkle', label: 'Amazon Affiliate Links', desc: 'Clean bloat & protect tag', href: '/tools/amazon-affiliate-link-shortener', badge: 'NEW', badgeColor: '#16a34a' },
  { icon: 'send', label: 'YouTube Subscribe Link', desc: '1-click channel growth links', href: '/tools/youtube-subscribe-link-generator', badge: 'CREATOR', badgeColor: '#dc2626' },
  { icon: 'whatsapp', label: 'WhatsApp Chat Link', desc: 'Direct wa.me chat with message', href: '/tools/whatsapp-link-generator' },
  { icon: 'mobile', label: 'Link in Bio Builder', desc: 'Mobile landing page for bio', href: '/tools/link-in-bio' },
];

const SOLUTIONS = [
  { icon: 'zap', label: 'Marketing Teams', desc: 'Campaign links, UTM tracking, bulk create', href: '/solutions/marketing' },
  { icon: 'share', label: 'Creators & Influencers', desc: 'Bio pages, affiliate links, YouTube growth', href: '/solutions/creators' },
  { icon: 'globe', label: 'Agencies & Enterprise', desc: 'Multi-workspace, white-label reporting', href: '/solutions/marketing' },
  { icon: 'key', label: 'Developers', desc: 'Full REST API, webhooks & SDK integration', href: '/solutions/developers' },
];

function MegaItem({ item }: { item: MenuItem }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={item.href}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '8px 10px',
        borderRadius: 8,
        textDecoration: 'none',
        background: hov ? '#f8fafc' : 'transparent',
        transition: 'all 120ms ease',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          flexShrink: 0,
          background: hov ? ACCENT_SOFT : '#f8fafc',
          border: `1px solid ${hov ? '#bfdbfe' : HAIR}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: ACCENT_INK,
          transition: 'all 120ms ease',
        }}
      >
        <Icon name={item.icon} size={15} />
      </div>
      <div style={{ flex: 1, minWidth: 0, paddingTop: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: hov ? ACCENT_INK : INK, lineHeight: 1.3, transition: 'color 120ms ease' }}>
            {item.label}
          </span>
          {item.badge && (
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.04em',
                padding: '1px 5px',
                borderRadius: 4,
                background: item.badge === 'POPULAR' ? '#fff7ed' : item.badge === 'CREATOR' ? '#f5f3ff' : '#eff6ff',
                color: item.badge === 'POPULAR' ? '#ea580c' : item.badge === 'CREATOR' ? '#7c3aed' : ACCENT_INK,
                border: `1px solid ${item.badge === 'POPULAR' ? '#ffedd5' : item.badge === 'CREATOR' ? '#ddd6fe' : '#bfdbfe'}`,
              }}
            >
              {item.badge}
            </span>
          )}
        </div>
        <div style={{ fontSize: 11.5, color: MUTED, lineHeight: 1.35, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.desc}
        </div>
      </div>
    </Link>
  );
}

function ProductMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: -16,
        width: 840,
        maxWidth: 'calc(100vw - 32px)',
        background: '#ffffff',
        border: `1px solid ${HAIR}`,
        borderRadius: 16,
        boxShadow: '0 24px 54px -12px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(15, 23, 42, 0.05)',
        overflow: 'hidden',
        zIndex: 999,
      }}
      onMouseLeave={onClose}
    >
      {/* 3 Categories Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 14, padding: '22px 22px 18px' }}>
        {/* Column 1 */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, paddingLeft: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED }}>
              Link Infrastructure
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {CATEGORY_INFRA.map((item) => (
              <MegaItem key={item.label} item={item} />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, paddingLeft: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED }}>
              Payments & Smart QR
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {CATEGORY_PAYMENTS_QR.map((item) => (
              <MegaItem key={item.label} item={item} />
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, paddingLeft: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED }}>
              Creators & Growth
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {CATEGORY_CREATORS.map((item) => (
              <MegaItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Bottom Banner */}
      <div
        style={{
          background: PAPER2,
          borderTop: `1px solid ${HAIR}`,
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, color: MUTED }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }} />
            Sub-2ms P99 Edge Latency
          </span>
          <span>·</span>
          <span>100% Free Tools</span>
          <span>·</span>
          <span>No Credit Card Required</span>
        </div>

        <Link
          href="/tools"
          style={{
            fontSize: 12.5,
            fontWeight: 600,
            color: ACCENT_INK,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          View all 34 free tools
          <Icon name="arrow-right" size={12} />
        </Link>
      </div>
    </div>
  );
}

function SolutionsMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: -20,
        width: 360,
        background: '#ffffff',
        border: `1px solid ${HAIR}`,
        borderRadius: 16,
        boxShadow: '0 20px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.04)',
        padding: '16px 14px 12px',
        zIndex: 999,
      }}
      onMouseLeave={onClose}
    >
      <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, marginBottom: 8, paddingLeft: 12 }}>
        By Team & Industry
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {SOLUTIONS.map((s) => (
          <MegaItem key={s.label} item={s} />
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${HAIR}`, marginTop: 10, paddingTop: 10, paddingLeft: 12 }}>
        <Link href="/about" style={{ fontSize: 12.5, fontWeight: 600, color: ACCENT_INK, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          Learn about Meshalive platform <Icon name="arrow-right" size={12} />
        </Link>
      </div>
    </div>
  );
}

function NavDropBtn({ label, active, onEnter }: { label: string; active: boolean; onEnter: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setHov(true);
        onEnter();
      }}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 14,
        fontWeight: 500,
        color: active || hov ? INK : MUTED,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 14px',
        borderRadius: 999,
        whiteSpace: 'nowrap',
        transition: 'color 150ms ease',
        fontFamily: 'inherit',
      }}
    >
      {label}
      <Icon
        name="chevron-down"
        size={12}
        style={{
          opacity: 0.65,
          transition: 'transform 180ms',
          transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      />
    </button>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        fontSize: 14,
        fontWeight: 500,
        color: hov ? INK : MUTED,
        textDecoration: 'none',
        padding: '8px 14px',
        borderRadius: 999,
        whiteSpace: 'nowrap',
        transition: 'color 150ms ease',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </Link>
  );
}

const FOOTER_COLS = [
  {
    title: 'Product',
    items: [
      ['Short links', '/features'],
      ['QR codes', '/tools/qr-code-generator'],
      ['Analytics', '/features#analytics'],
      ['Link-in-bio', '/tools/link-in-bio'],
      ['API', '/docs'],
    ],
  },
  {
    title: 'High-Intent Tools',
    items: [
      ['UPI QR Generator', '/tools/upi-qr-code-generator'],
      ['Wi-Fi QR Generator', '/tools/wifi-qr-code-generator'],
      ['Amazon Affiliate Shortener', '/tools/amazon-affiliate-link-shortener'],
      ['YouTube Subscribe Link', '/tools/youtube-subscribe-link-generator'],
      ['WhatsApp Link Generator', '/tools/whatsapp-link-generator'],
      ['All 25+ free tools', '/tools'],
    ],
  },
  {
    title: 'Solutions',
    items: [
      ['Marketing', '/solutions/marketing'],
      ['Sales', '/solutions/sales'],
      ['Creators', '/solutions/creators'],
      ['Support teams', '/solutions/support'],
      ['Retail & QR', '/solutions/retail'],
      ['Developers', '/solutions/developers'],
    ],
  },
  {
    title: 'Colombia 🇨🇴',
    items: [
      ['Acortador de URL', '/tools/acortador-de-url-colombia'],
      ['Link WhatsApp (+57)', '/tools/crear-link-de-whatsapp-colombia'],
      ['QR Menú Restaurante', '/tools/generador-codigo-qr-menu-restaurante-colombia'],
      ['Link en Bio Gratis', '/tools/link-en-bio-colombia-gratis'],
      ['Links de Pago (Bold/Wompi)', '/tools/acortador-links-de-pago-colombia'],
      ['Guía WhatsApp Marketing', '/blog/estrategia-whatsapp-marketing-enlaces-colombia'],
    ],
  },
  {
    title: 'Company',
    items: [
      ['About', '/about'],
      ['Pricing', '/pricing'],
      ['Blog', '/blog'],
      ['Contact', '/contact'],
      ['Status', '/status'],
      ['Refund', '/refund'],
    ],
  },
  {
    title: 'Resources',
    items: [
      ['Help centre', '/docs'],
      ['Guides', '/blog'],
      ['API docs', '/docs'],
      ['Security', '/about#security'],
    ],
  },
];

function MobileMenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="nav-mobile-toggle"
      style={{
        marginLeft: 'auto',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        color: INK,
        alignItems: 'center',
      }}
      aria-label="Toggle menu"
    >
      <Icon name={open ? 'x' : 'menu'} size={22} />
    </button>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#ffffff',
        zIndex: 300,
        padding: '24px 20px',
        overflowY: 'auto',
        borderTop: `1px solid ${HAIR}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div>
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: MUTED, marginBottom: 8 }}>
          Popular Tools
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { label: '⚡ UPI QR Generator', href: '/tools/upi-qr-code-generator' },
            { label: '📶 Wi-Fi QR Generator', href: '/tools/wifi-qr-code-generator' },
            { label: '🛒 Amazon Affiliate Shortener', href: '/tools/amazon-affiliate-link-shortener' },
            { label: '▶️ YouTube Subscribe Link', href: '/tools/youtube-subscribe-link-generator' },
            { label: '🔗 URL Shortener', href: '/tools/url-shortener' },
            { label: '💬 WhatsApp Linker', href: '/tools/whatsapp-link-generator' },
            { label: '📇 All 25+ Free Tools', href: '/tools' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: INK,
                textDecoration: 'none',
                padding: '10px 12px',
                background: '#f8fafc',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {item.label}
              <Icon name="chevron-right" size={14} />
            </Link>
          ))}
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${HAIR}`, paddingTop: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: MUTED, marginBottom: 8 }}>
          Navigation
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { label: 'Product Features', href: '/features' },
            { label: 'Solutions', href: '/solutions/marketing' },
            { label: 'Tools', href: '/tools' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
            { label: 'API & Documentation', href: '/docs' },
            { label: 'About Us', href: '/about' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: INK2,
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: `1px solid #f1f5f9`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {item.label}
              <Icon name="chevron-right" size={14} />
            </Link>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 16 }}>
        <Link
          href="/login"
          onClick={onClose}
          style={{
            padding: '12px',
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 600,
            color: INK,
            border: `1px solid ${HAIR}`,
            textDecoration: 'none',
            background: '#f8fafc',
          }}
        >
          Sign in
        </Link>
        <Link
          href="/register"
          onClick={onClose}
          style={{
            padding: '12px',
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 600,
            color: '#ffffff',
            background: INK,
            textDecoration: 'none',
          }}
        >
          Start free
        </Link>
      </div>
    </div>
  );
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<'product' | 'solutions' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = (name: 'product' | 'solutions') => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(name);
  };
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(null), 160);
  };

  return (
    <div data-theme="light" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff', color: INK }}>
      <style>{`
        .nav-mobile-toggle { display: none !important; }
        .nav-desktop-links { display: flex !important; }
        .nav-desktop-cta { display: flex !important; }
        @media (max-width: 860px) {
          .nav-mobile-toggle { display: flex !important; }
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
        }
      `}</style>

      {/* ── Navbar ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'saturate(180%) blur(12px)',
          WebkitBackdropFilter: 'saturate(180%) blur(12px)',
          borderBottom: `1px solid ${HAIR}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', gap: 0 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', color: INK, display: 'inline-flex', marginRight: 32, flexShrink: 0 }}>
            <Logo size={20} />
          </Link>

          {/* Nav links */}
          <nav className="nav-desktop-links" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
            {/* Product dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => show('product')} onMouseLeave={hide}>
              <NavDropBtn label="Product" active={open === 'product'} onEnter={() => show('product')} />
              {open === 'product' && <ProductMenu onClose={hide} />}
            </div>

            {/* Solutions dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => show('solutions')} onMouseLeave={hide}>
              <NavDropBtn label="Solutions" active={open === 'solutions'} onEnter={() => show('solutions')} />
              {open === 'solutions' && <SolutionsMenu onClose={hide} />}
            </div>

            {/* Flat links */}
            {[
              { label: 'Tools', href: '/tools' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Blog', href: '/blog' },
            ].map((item) => (
              <NavLink key={item.href} label={item.label} href={item.href} />
            ))}
          </nav>

          {/* CTA */}
          <div className="nav-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <Link
              href="/login"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: MUTED,
                textDecoration: 'none',
                padding: '8px 12px',
                whiteSpace: 'nowrap',
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = INK;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = MUTED;
              }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '9px 18px',
                borderRadius: 999,
                background: INK,
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                transition: 'transform 150ms, opacity 150ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
              }}
            >
              Start free
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>

          <MobileMenuToggle open={mobileOpen} onToggle={() => setMobileOpen((o) => !o)} />
        </div>
      </header>
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* ── Content ── */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* ── Footer ── */}
      <footer style={{ background: PAPER2, borderTop: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 28px 32px' }}>
          {/* Top grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(5, 1fr)', gap: 40, marginBottom: 56 }}>
            {/* Brand */}
            <div>
              <div style={{ color: INK }}>
                <Logo size={20} />
              </div>
              <div
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 20,
                  marginTop: 16,
                  lineHeight: 1.3,
                  maxWidth: 260,
                  color: INK2,
                  fontWeight: 600,
                }}
              >
                Enterprise link infrastructure with{' '}
                <span style={{ color: ACCENT_INK, fontWeight: 700 }}>real-time telemetry.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24 }}>
                <input
                  placeholder="your@work.email"
                  style={{
                    flex: 1,
                    maxWidth: 200,
                    fontFamily: '"Geist Mono", monospace',
                    fontSize: 13,
                    padding: '10px 14px',
                    border: `1px solid ${HAIR}`,
                    borderRadius: 10,
                    background: '#fff',
                    color: INK,
                    outline: 'none',
                  }}
                />
                <button
                  style={{
                    padding: '10px 16px',
                    borderRadius: 999,
                    background: INK,
                    color: '#ffffff',
                    fontSize: 13,
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Subscribe
                </button>
              </div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 10 }}>One short update a month. No spam.</div>
            </div>

            {/* Columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: '"Geist Mono", monospace',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: MUTED,
                    marginBottom: 16,
                  }}
                >
                  {col.title}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        style={{ fontSize: 13, color: INK2, textDecoration: 'none', transition: 'color 150ms' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = ACCENT_INK;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = INK2;
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: `1px solid ${HAIR}`,
              paddingTop: 24,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div style={{ fontSize: 13, color: MUTED }}>© 2026 meshalive labs — Enterprise Grade Link Infrastructure.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {[
                ['Privacy', '/privacy'],
                ['Terms', '/terms'],
                ['Cookies', '/cookies'],
                ['Sitemap', '/site-map'],
              ].map(([l, h]) => (
                <Link key={l} href={h} style={{ fontSize: 13, color: MUTED, textDecoration: 'none' }}>
                  {l}
                </Link>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: MUTED }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                All systems operational
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
