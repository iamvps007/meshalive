import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Free MeshAlive Badges & Embed Widgets | Meshalive' },
  description: 'Add a verified "Shortened by MeshAlive" or "Powered by MeshAlive" badge to your website, blog, or GitHub README.',
  alternates: { canonical: 'https://meshalive.com/tools/badges' },
};

export default function BadgesPage() {
  const badgeDark = '<a href="https://meshalive.com" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Links-MeshAlive-0057ff?style=flat-square&logo=link" alt="Shortened with MeshAlive" /></a>';
  const badgeLight = '<a href="https://meshalive.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#0057ff;text-decoration:none;font-family:sans-serif;"><span>⚡ Shortened by MeshAlive</span></a>';

  return (
    <main style={{ maxWidth: 840, margin: '0 auto', padding: '60px 16px 80px', color: '#111' }}>
      <Link href="/tools" style={{ fontSize: '13px', color: '#0057ff', textDecoration: 'none', fontWeight: 600 }}>← Back to Tools</Link>
      <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '16px 0 12px' }}>MeshAlive Badges & Backlink Widgets</h1>
      <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.6, marginBottom: '40px' }}>
        Showcase fast, secure, enterprise-grade links on your web pages, store footers, and GitHub repositories.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div style={{ padding: '24px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px' }}>1. Shields.io Markdown Badge (For GitHub READMEs)</h3>
          <div style={{ marginBottom: '14px' }}>
            <img src="https://img.shields.io/badge/Links-MeshAlive-0057ff?style=flat-square" alt="Shortened with MeshAlive" />
          </div>
          <code style={{ display: 'block', padding: '12px', background: '#fff', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', overflowX: 'auto', userSelect: 'all' }}>
            {badgeDark}
          </code>
        </div>

        <div style={{ padding: '24px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px' }}>2. HTML Footer Widget (For Blogs & Stores)</h3>
          <div style={{ marginBottom: '14px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#0057ff', fontWeight: 600 }}>
              ⚡ Shortened by MeshAlive
            </span>
          </div>
          <code style={{ display: 'block', padding: '12px', background: '#fff', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', overflowX: 'auto', userSelect: 'all' }}>
            {badgeLight}
          </code>
        </div>
      </div>
    </main>
  );
}
