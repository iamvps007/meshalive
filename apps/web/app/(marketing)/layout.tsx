'use client';
import React from 'react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Icon } from '@/components/ui/icon';

/* ── Design tokens ── */
const INK   = '#111111';
const INK2  = '#374151';
const MUTED = '#6b7280';
const HAIR  = '#e5e7eb';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';
const ACCENT_SOFT = '#eff6ff';

/* ── Nav items ── */
const NAV_ITEMS = [
  { label: 'Product',   id: 'product'   },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Pricing',   href: '/pricing' },
  { label: 'Customers', href: '/about' },
];

const PRODUCTS = [
  { icon: 'link',   label: 'URL Shortener',  desc: 'Fast, trackable short links for any URL',    href: '/tools/url-shortener' },
  { icon: 'chart',  label: 'Click Analytics', desc: 'Geo, device, referrer — live dashboard',     href: '/features#analytics' },
  { icon: 'qr',     label: 'Dynamic QR Codes',desc: 'Print once, point anywhere, forever',        href: '/tools/qr-code-generator' },
  { icon: 'mobile', label: 'Link in Bio',     desc: 'A full landing page behind one link',        href: '/tools/link-in-bio' },
];

const FEATURES = [
  { icon: 'tag',     label: 'UTM Campaigns',   desc: 'Tag every source, track every click',        href: '/features#utm' },
  { icon: 'webhook', label: 'REST API',         desc: 'Create and manage links programmatically',  href: '/docs' },
  { icon: 'users',   label: 'Team Workspaces', desc: 'Roles, permissions, shared analytics',       href: '/features#teams' },
];

const SOLUTIONS = [
  { icon: 'zap',   label: 'Marketing Teams', desc: 'Campaign links, UTM tracking, bulk create',  href: '/solutions/marketing' },
  { icon: 'share', label: 'Creators',        desc: 'Bio pages, link tracking, QR codes',          href: '/solutions/creators' },
  { icon: 'globe', label: 'Agencies',        desc: 'Multi-workspace, white-label reporting',      href: '/solutions/marketing' },
  { icon: 'key',   label: 'Developers',      desc: 'Full REST API, webhooks, SDKs coming soon',  href: '/solutions/developers' },
];

function DropItem({ icon, label, desc, href }: { icon: string; label: string; desc: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
      background: hov ? '#f3f4f6' : 'transparent', transition: 'background 120ms',
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{
        width: 34, height: 34, borderRadius: 8, flexShrink: 0,
        background: hov ? ACCENT_SOFT : '#f3f4f6',
        border: `1px solid ${hov ? ACCENT_SOFT : HAIR}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: ACCENT_INK, transition: 'all 120ms',
      }}>
        <Icon name={icon} size={15} />
      </div>
      <div style={{ paddingTop: 1 }}>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: INK, marginBottom: 2, lineHeight: 1.3 }}>{label}</div>
        <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>{desc}</div>
      </div>
    </Link>
  );
}

function ProductMenu({ onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 10px)', left: '50%',
      transform: 'translateX(-50%)', width: 760,
      background: '#fff', border: `1px solid ${HAIR}`, borderRadius: 18,
      boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.12)',
      display: 'grid', gridTemplateColumns: '1fr 200px',
      overflow: 'hidden', zIndex: 999,
    }} onMouseLeave={onClose}>
      <div style={{ padding: '22px 18px 18px' }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 8, paddingLeft: 12 }}>Products</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {PRODUCTS.map(p => <DropItem key={p.label} {...p} />)}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${HAIR}`, paddingTop: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 8, paddingLeft: 12 }}>Features</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {FEATURES.map(f => <DropItem key={f.label} {...f} />)}
          </div>
        </div>
      </div>
      <div style={{ background: PAPER2, borderLeft: `1px solid ${HAIR}`, padding: '22px 14px 18px' }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 10 }}>Free Tools</div>
          {[['URL Shortener', '/tools/url-shortener'], ['WhatsApp Link Generator', '/tools/whatsapp-link-generator'], ['UTM Builder', '/tools/utm-builder'], ['QR Code Generator', '/tools/qr-code-generator'], ['Redirect Checker', '/tools/redirect-checker']].map(([l, h]) => (
            <SideLink key={l} label={l} href={h} />
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${HAIR}`, paddingTop: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 10 }}>Discover More</div>
          {[['API & Docs', '/docs'], ['System Status', '/status']].map(([l, h]) => (
            <SideLink key={l} label={l} href={h} />
          ))}
        </div>
        <div style={{ marginTop: 18, padding: '10px', background: '#fff', border: `1px solid ${HAIR}`, borderRadius: 9 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginBottom: 2 }}>GDPR · CCPA · Sub-2ms P99</div>
          <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>Privacy-first infrastructure on every plan.</div>
        </div>
      </div>
    </div>
  );
}

function SolutionsMenu({ onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 10px)', left: '50%',
      transform: 'translateX(-50%)', width: 380,
      background: '#fff', border: `1px solid ${HAIR}`, borderRadius: 16,
      boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.12)',
      padding: '16px 14px 12px', zIndex: 999,
    }} onMouseLeave={onClose}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 8, paddingLeft: 12 }}>By Team Type</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {SOLUTIONS.map(s => <DropItem key={s.label} {...s} />)}
      </div>
      <div style={{ borderTop: `1px solid ${HAIR}`, marginTop: 10, paddingTop: 10, paddingLeft: 12 }}>
        <Link href="/about" style={{ fontSize: 12.5, fontWeight: 500, color: ACCENT_INK, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          Learn about meshalive <Icon name="arrow-right" size={12} />
        </Link>
      </div>
    </div>
  );
}

function SideLink({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontSize: 13, color: hov ? INK : MUTED, fontWeight: hov ? 500 : 400,
      padding: '7px 10px', borderRadius: 7, textDecoration: 'none',
      background: hov ? '#f3f4f6' : 'transparent', transition: 'all 100ms',
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
      <Icon name="chevron-right" size={12} style={{ opacity: hov ? 0.6 : 0.3 }} />
    </Link>
  );
}

function NavDropBtn({ label, active, onEnter }: { label: string; active: boolean; onEnter: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => { setHov(true); onEnter(); }}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 4,
        fontSize: 14, color: active || hov ? INK : MUTED,
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '8px 12px', borderRadius: 999, whiteSpace: 'nowrap',
        transition: 'color 150ms',
        fontFamily: 'inherit',
      }}>
      {label}
      <Icon name="chevron-down" size={12} style={{ opacity: 0.65, transition: 'transform 180ms', transform: active ? 'rotate(180deg)' : 'rotate(0deg)' }} />
    </button>
  );
}

const FOOTER_COLS = [
  { title: 'Product', items: [
    ['Short links',    '/features'],
    ['QR codes',       '/tools/qr-code-generator'],
    ['Analytics',      '/features#analytics'],
    ['Link-in-bio',    '/tools/link-in-bio'],
    ['API',            '/docs#api'],
  ]},
  { title: 'Tools', items: [
    ['WhatsApp Link Generator', '/tools/whatsapp-link-generator'],
    ['UTM Builder', '/tools/utm-builder'],
    ['Redirect Checker', '/tools/redirect-checker'],
    ['Bitly Alternative', '/tools/bitly-alternative'],
    ['All tools', '/tools'],
  ]},
  { title: 'Solutions', items: [
    ['Marketing',      '/solutions/marketing'],
    ['Sales',          '/solutions/sales'],
    ['Support teams',  '/solutions/support'],
    ['Retail & QR',    '/solutions/retail'],
    ['Developers',     '/solutions/developers'],
  ]},
  { title: 'Company', items: [
    ['About',     '/about'],
    ['Pricing',   '/pricing'],
    ['Blog',      '/blog'],
    ['Status',    '/status'],
  ]},
  { title: 'Resources', items: [
    ['Help centre', '/docs'],
    ['Guides',      '/blog'],
    ['API docs',    '/docs#api'],
    ['Security',    '/about#security'],
  ]},
];

function MobileMenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="nav-mobile-toggle"
      style={{
        marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer',
        padding: 8, color: INK, display: 'flex', alignItems: 'center',
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
    <div style={{
      position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
      background: '#ffffff', zIndex: 300,
      padding: '24px 20px', overflowY: 'auto', borderTop: `1px solid ${HAIR}`,
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      {[
        { label: 'Product',   href: '/features' },
        { label: 'Solutions', href: '/solutions/marketing' },
        { label: 'Pricing',   href: '/pricing' },
        { label: 'About',     href: '/about' },
        { label: 'Docs',      href: '/docs' },
      ].map(item => (
        <Link key={item.label} href={item.href} onClick={onClose} style={{
          fontSize: 18, fontWeight: 500, color: INK, textDecoration: 'none',
          padding: '14px 0', borderBottom: `1px solid ${HAIR}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {item.label}
          <Icon name="chevron-right" size={16} />
        </Link>
      ))}
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Link href="/login" onClick={onClose} style={{
          padding: '14px', borderRadius: 999, textAlign: 'center', fontSize: 15, fontWeight: 500,
          color: INK, border: `1px solid ${HAIR}`, textDecoration: 'none', background: '#f9fafb',
        }}>Sign in</Link>
        <Link href="/register" onClick={onClose} style={{
          padding: '14px', borderRadius: 999, textAlign: 'center', fontSize: 15, fontWeight: 500,
          color: '#ffffff', background: INK, textDecoration: 'none',
        }}>Start free</Link>
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

      {/* ── Navbar ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.86)',
        backdropFilter: 'saturate(140%) blur(10px)',
        WebkitBackdropFilter: 'saturate(140%) blur(10px)',
        borderBottom: `1px solid ${HAIR}`,
      }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', gap: 0 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', color: INK, display: 'inline-flex', marginRight: 32, flexShrink: 0 }}>
            <Logo size={20} />
          </Link>

          {/* Nav links */}
          <nav className="nav-desktop-links" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 0 }}>

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
            {[{ label: 'Pricing', href: '/pricing' }].map(item => (
              <NavLink key={item.href} label={item.label} href={item.href} />
            ))}
          </nav>

          {/* CTA */}
          <div className="nav-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <Link href="/login" style={{ fontSize: 14, color: MUTED, textDecoration: 'none', padding: '8px 12px', whiteSpace: 'nowrap', transition: 'color 150ms' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = INK; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = MUTED; }}>
              Sign in
            </Link>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 18px', borderRadius: 999,
              background: INK, color: '#ffffff',
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
              whiteSpace: 'nowrap', transition: 'transform 150ms, opacity 150ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; }}>
              Start free
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
          <MobileMenuToggle open={mobileOpen} onToggle={() => setMobileOpen(o => !o)} />
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
              <div style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 20, marginTop: 16, lineHeight: 1.3, maxWidth: 260, color: INK2,
              }}>
                Free URL shortener with{' '}
                <span style={{ color: ACCENT_INK, fontWeight: 700 }}>real analytics.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24 }}>
                <input placeholder="your@work.email" style={{
                  flex: 1, maxWidth: 200,
                  fontFamily: '"Geist Mono", monospace', fontSize: 13,
                  padding: '10px 14px', border: `1px solid ${HAIR}`, borderRadius: 10,
                  background: '#fff', color: INK, outline: 'none',
                }}/>
                <button style={{
                  padding: '10px 16px', borderRadius: 999,
                  background: INK, color: '#ffffff',
                  fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit',
                }}>Subscribe</button>
              </div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 10 }}>One short letter a month. No spam.</div>
            </div>

            {/* Columns */}
            {FOOTER_COLS.map(col => (
              <div key={col.title}>
                <div style={{
                  fontFamily: '"Geist Mono", monospace', fontSize: 10,
                  letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED,
                  marginBottom: 16,
                }}>{col.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} style={{ fontSize: 13, color: INK2, textDecoration: 'none', transition: 'color 150ms' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT_INK; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = INK2; }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: `1px solid ${HAIR}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ fontSize: 13, color: MUTED }}>© 2026 meshalive labs — Made in three time zones.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Cookies', '/cookies'], ['Sitemap', '/site-map']].map(([l, h]) => (
                <Link key={l} href={h} style={{ fontSize: 13, color: MUTED, textDecoration: 'none' }}>{l}</Link>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: MUTED }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2f7a55', display: 'inline-block' }} />
                All systems normal
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} style={{
      fontSize: 14, color: hov ? INK : MUTED,
      textDecoration: 'none', padding: '8px 12px', borderRadius: 999,
      whiteSpace: 'nowrap', transition: 'color 150ms',
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </Link>
  );
}
