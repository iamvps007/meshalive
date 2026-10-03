import { Icon } from '@/components/ui/icon';
import type { Metadata } from 'next';
import Link from 'next/link';
import UrlShortenerTool from '../tools/url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: 'Link Not Found (404) | Meshalive',
  description: 'The short link or page you are looking for does not exist. Create your own free short link or explore tools.',
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

export default function NotFoundPage() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '80vh', padding: '56px 20px 96px', color: '#0f172a' }}>
      <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>

        {/* 404 Pill Badge */}
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

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          margin: '0 0 16px',
          color: '#0f172a',
        }}>
          Oops! This link doesn&apos;t exist
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 19px)',
          color: '#64748b',
          lineHeight: 1.6,
          maxWidth: 600,
          margin: '0 auto 32px',
        }}>
          The short link you clicked may have expired, reached its click limit, or was never created. Double-check the URL or create a fresh link below.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 56,
        }}>
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
              transition: 'transform 0.15s ease',
            }}
          >
            ← Back to Homepage
          </Link>
          <Link
            href="/register"
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
            Create Free Account →
          </Link>
        </div>

        {/* Interactive Link Shortener Container */}
        <div style={{
          background: '#ffffff',
          borderRadius: 16,
          border: '1px solid #e2e8f0',
          padding: '32px 24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          marginBottom: 64,
          textAlign: 'left',
        }}>
          <div style={{ marginBottom: 20, textAlign: 'center' }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px', color: '#0f172a' }}>
              Shorten Any Link Right Now
            </h2>
            <p style={{ fontSize: 14, color: '#64748b', margin: 0 }}>
              No sign up or credit card needed. Generate a permanent short link in seconds.
            </p>
          </div>
          <UrlShortenerTool />
        </div>

        {/* Popular Tools Shortcuts Grid */}
        <div style={{ textAlign: 'left', marginBottom: 48 }}>
          <h3 style={{
            fontSize: 16,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#64748b',
            marginBottom: 20,
            textAlign: 'center',
          }}>
            Explore Free Meshalive Tools
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {POPULAR_TOOLS.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '20px',
                  background: '#ffffff',
                  borderRadius: 12,
                  border: '1px solid #e2e8f0',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.15s, box-shadow 0.15s',
                }}
              >
                <span style={{ fontSize: 24, lineHeight: 1, flexShrink: 0 }}>{tool.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a', marginBottom: 4 }}>
                    {tool.title}
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
                    {tool.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Helper Links */}
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          flexWrap: 'wrap',
          fontSize: 14,
        }}>
          <Link href="/pricing" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>
            Pricing →
          </Link>
          <Link href="/docs" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>
            Documentation →
          </Link>
          <Link href="/status" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>
            System Status →
          </Link>
          <Link href="/contact" style={{ color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>
            Contact Support →
          </Link>
        </div>

      </div>
    </div>
  );
}
