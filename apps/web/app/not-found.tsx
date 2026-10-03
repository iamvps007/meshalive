import { Icon } from '@/components/ui/icon';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export const metadata: Metadata = {
  title: 'Page Not Found (404) — Meshalive',
  description: 'The page or short link you are looking for does not exist.',
  robots: { index: false, follow: true },
};

const POPULAR_TOOLS = [
  {
    icon: 'link',
    title: 'Free URL Shortener',
    desc: 'Instant short links with real-time click tracking & custom aliases.',
    href: '/tools/url-shortener',
  },
  {
    icon: 'qr',
    title: 'QR Code Generator',
    desc: '100% free vector QR codes with no expiration or scan limits.',
    href: '/tools/qr-code-generator',
  },
  {
    icon: 'sparkle',
    title: 'Bio & Mini-Sites',
    desc: 'One link in bio for Instagram, YouTube, and WhatsApp storefronts.',
    href: '/tools/link-in-bio',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp Chat Link',
    desc: 'Create direct 1-tap wa.me chat links with pre-filled greeting text.',
    href: '/tools/whatsapp-link-generator',
  },
];

export default function RootNotFoundPage() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#0f172a', fontFamily: '"Geist", "Inter", sans-serif' }}>

      {/* Top Navbar */}
      <header style={{
        height: 64,
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 1120, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#0f172a' }}>
            <Logo size={22} withWord={true} />
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link href="/tools" style={{ fontSize: 14, fontWeight: 500, color: '#334155', textDecoration: 'none' }}>
              Tools
            </Link>
            <Link href="/pricing" style={{ fontSize: 14, fontWeight: 500, color: '#334155', textDecoration: 'none' }}>
              Pricing
            </Link>
            <Link href="/docs" style={{ fontSize: 14, fontWeight: 500, color: '#334155', textDecoration: 'none' }}>
              Docs
            </Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link
              href="/login"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#0f172a',
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: 8,
                border: '1px solid #e2e8f0',
                background: '#ffffff',
              }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: 8,
                background: '#0057ff',
              }}
            >
              Start free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 20px 80px' }}>
        <div style={{ maxWidth: 760, width: '100%', textAlign: 'center' }}>

          {/* 404 Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#1d4ed8',
            padding: '6px 16px',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: 24,
          }}>
            <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#2563eb',
              boxShadow: '0 0 0 3px rgba(37,99,235,0.2)',
            }} />
            404 • LINK NOT FOUND
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: 16,
            color: '#0f172a',
          }}>
            Oops! This link doesn&apos;t exist
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 19px)',
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: 580,
            margin: '0 auto 36px',
          }}>
            The short link you followed has either expired, reached its click limit, or was never created. Double-check the URL or explore our free link tools.
          </p>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 10,
                background: '#0057ff',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,87,255,0.25)',
              }}
            >
              ← Back to Homepage
            </Link>
            <Link
              href="/tools/url-shortener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 10,
                background: '#ffffff',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              Create a Free Short Link →
            </Link>
          </div>

          {/* Popular Shortcuts */}
          <div style={{ textAlign: 'left', marginBottom: 40 }}>
            <h3 style={{
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#64748b',
              marginBottom: 16,
              textAlign: 'center',
            }}>
              Popular Free Tools
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 14,
            }}>
              {POPULAR_TOOLS.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '16px',
                    background: '#ffffff',
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{tool.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 2 }}>
                      {tool.title}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>
                      {tool.desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom helper */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '0 0 12px' }}>
              Looking for something specific?
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', fontSize: 13 }}>
              <Link href="/pricing" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>Pricing →</Link>
              <Link href="/docs" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>Documentation →</Link>
              <Link href="/status" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>Status →</Link>
              <Link href="/contact" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>Contact Support →</Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #e2e8f0',
        padding: '24px',
        textAlign: 'center',
        background: '#ffffff',
        fontSize: 13,
        color: '#64748b',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span>© {new Date().getFullYear()} Meshalive Labs. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/privacy" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: '#64748b', textDecoration: 'none' }}>Terms</Link>
            <Link href="/cookies" style={{ color: '#64748b', textDecoration: 'none' }}>Cookies</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
