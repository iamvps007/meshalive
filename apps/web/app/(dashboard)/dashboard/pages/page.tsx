'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken, getWorkspaceId } from '@/lib/auth';
import { api } from '@/lib/api';
import { Icon } from '@/components/ui/icon';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BioPageSummary {
  id: string;
  slug: string;
  title: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

function publicUrl(slug: string) {
  return `meshalive.com/p/${slug}`;
}

function fullPublicUrl(slug: string) {
  return `https://meshalive.com/p/${slug}`;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ---------------------------------------------------------------------------
// Starter Templates Config
// ---------------------------------------------------------------------------

interface TemplateConfig {
  id: string;
  name: string;
  icon: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  desc: string;
  theme: {
    background: string;
    foreground: string;
    primary: string;
    fontFamily: string;
    borderRadius: number;
    maxWidth: number;
  };
  blocks: any[];
}

const STARTER_TEMPLATES: TemplateConfig[] = [
  {
    id: 'developer',
    name: 'Developer & Tech Portfolio',
    icon: 'desktop',
    tag: 'ENGINEERING',
    tagBg: '#eff6ff',
    tagColor: '#2563eb',
    desc: 'Showcase GitHub repos, tech stack tags, live project links, and resume download.',
    theme: {
      background: '#090d16',
      foreground: '#f1f5f9',
      primary: '#38bdf8',
      fontFamily: 'Inter',
      borderRadius: 10,
      maxWidth: 640,
    },
    blocks: [
      { id: 'b1', type: 'header', name: 'Alex Chen', bio: 'Full-Stack Software Engineer & Open Source Builder. Crafting resilient web tools.', avatarIcon: 'code', verified: true },
      { id: 'b2', type: 'badge', tags: ['TypeScript', 'Next.js', 'Go', 'PostgreSQL', 'Docker', 'AWS'] },
      { id: 'b3', type: 'social', links: [{ platform: 'GitHub', url: 'https://github.com' }, { platform: 'Twitter/X', url: 'https://x.com' }, { platform: 'LinkedIn', url: 'https://linkedin.com' }] },
      { id: 'b4', type: 'heading', text: 'Featured Projects', level: 2, align: 'center' },
      { id: 'b5', type: 'link', label: 'View My Open Source Projects', url: 'https://github.com', style: 'solid' },
      { id: 'b6', type: 'link', label: 'Download Engineering Resume (PDF)', url: 'https://', style: 'outline' },
      { id: 'b7', type: 'link', label: 'Schedule 1:1 Tech Consultation', url: 'https://calendly.com', style: 'solid' },
    ],
  },
  {
    id: 'instagram',
    name: 'Instagram & TikTok Creator',
    icon: 'share',
    tag: 'CREATOR',
    tagBg: '#fdf2f8',
    tagColor: '#db2777',
    desc: 'Profile photo, outfit storefront links, latest reels embed, and direct brand collab WhatsApp.',
    theme: {
      background: 'linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%)',
      foreground: '#1c1917',
      primary: '#e11d48',
      fontFamily: 'Inter',
      borderRadius: 16,
      maxWidth: 580,
    },
    blocks: [
      { id: 'b1', type: 'header', name: 'Maya Sharma', bio: 'Fashion, Lifestyle & Creative Direction. Sharing daily essentials & creative journey.', avatarIcon: 'sparkle', verified: true },
      { id: 'b2', type: 'social', links: [{ platform: 'Instagram', url: 'https://instagram.com' }, { platform: 'TikTok', url: 'https://tiktok.com' }, { platform: 'YouTube', url: 'https://youtube.com' }] },
      { id: 'b3', type: 'link', label: 'Shop My Outfits (Amazon & Myntra Picks)', url: 'https://', style: 'solid' },
      { id: 'b4', type: 'link', label: 'Watch Latest Video Reel', url: 'https://', style: 'solid' },
      { id: 'b5', type: 'contact', phone: '919999999999', text: 'Hi Maya! Inquiring about a brand collaboration.', label: 'Brand Collab WhatsApp Direct' },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube & Video Creator',
    icon: 'zap',
    tag: 'VIDEO',
    tagBg: '#fef2f2',
    tagColor: '#dc2626',
    desc: 'Subscribe button, latest video embed player, preset store, and Discord community.',
    theme: {
      background: '#0a0a0c',
      foreground: '#f8fafc',
      primary: '#ef4444',
      fontFamily: 'Inter',
      borderRadius: 12,
      maxWidth: 640,
    },
    blocks: [
      { id: 'b1', type: 'header', name: 'TechVerse Studio', bio: 'Deep dives into AI, cutting-edge hardware, and digital product reviews.', avatarIcon: 'video', verified: true },
      { id: 'b2', type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'Latest Video' },
      { id: 'b3', type: 'link', label: 'Subscribe to Channel (Free)', url: 'https://youtube.com', style: 'solid' },
      { id: 'b4', type: 'product', title: 'Cinematic 4K LUTs & Editing Preset Pack', price: '₹799 / $9.99', url: 'https://', buttonText: 'Download Pack →' },
      { id: 'b5', type: 'social', links: [{ platform: 'YouTube', url: 'https://youtube.com' }, { platform: 'Twitter/X', url: 'https://x.com' }, { platform: 'Discord', url: 'https://discord.gg' }] },
    ],
  },
  {
    id: 'storefront',
    name: 'Digital Storefront & Shop',
    icon: 'credit-card',
    tag: 'COMMERCE',
    tagBg: '#f0fdf4',
    tagColor: '#16a34a',
    desc: 'Product cards with pricing and checkout buttons, quick WhatsApp ordering, and reviews.',
    theme: {
      background: '#fdfbf7',
      foreground: '#1c1917',
      primary: '#059669',
      fontFamily: 'Georgia',
      borderRadius: 14,
      maxWidth: 600,
    },
    blocks: [
      { id: 'b1', type: 'header', name: 'Artisan Ceramics & Decor', bio: 'Handcrafted studio pottery & organic living goods. Pan-India shipping.', avatarIcon: 'shopping-bag', verified: true },
      { id: 'b2', type: 'product', title: 'Handmade Glazed Coffee Mug (Pair)', price: '₹899', url: 'https://', buttonText: 'Order Now' },
      { id: 'b3', type: 'product', title: 'Pure Soy Wax Botanical Candle', price: '₹499', url: 'https://', buttonText: 'Order Now' },
      { id: 'b4', type: 'contact', phone: '919876543210', text: 'Hi! I would like to place an order.', label: 'Quick Order via WhatsApp' },
      { id: 'b5', type: 'link', label: 'Visit Our Studio on Google Maps', url: 'https://maps.google.com', style: 'outline' },
    ],
  },
  {
    id: 'writer',
    name: 'Writer & Substack Newsletter',
    icon: 'edit',
    tag: 'EDITORIAL',
    tagBg: '#fffbeb',
    tagColor: '#d97706',
    desc: 'Substack newsletter subscription, featured essays, book chapters, and editorial styling.',
    theme: {
      background: '#faf9f5',
      foreground: '#292524',
      primary: '#b45309',
      fontFamily: 'Georgia',
      borderRadius: 8,
      maxWidth: 580,
    },
    blocks: [
      { id: 'b1', type: 'header', name: 'Kavita Rao', bio: 'Essays on technology, culture, and indie capitalism. Read by 12,000+ thinkers.', avatarIcon: 'edit', verified: false },
      { id: 'b2', type: 'link', label: 'Read & Subscribe on Substack (Free)', url: 'https://substack.com', style: 'solid' },
      { id: 'b3', type: 'heading', text: 'Selected Reading', level: 2, align: 'center' },
      { id: 'b4', type: 'link', label: 'Essay: The Architecture of Solo Founders', url: 'https://', style: 'outline' },
      { id: 'b5', type: 'link', label: 'Essay: Why Simple Software Always Wins', url: 'https://', style: 'outline' },
      { id: 'b6', type: 'social', links: [{ platform: 'Twitter/X', url: 'https://x.com' }, { platform: 'LinkedIn', url: 'https://linkedin.com' }] },
    ],
  },
  {
    id: 'minimalist',
    name: 'Minimalist Personal Link',
    icon: 'sparkle',
    tag: 'MINIMAL',
    tagBg: '#faf5ff',
    tagColor: '#9333ea',
    desc: 'Ultra-fast, distraction-free link card with custom avatar and essential handles.',
    theme: {
      background: '#ffffff',
      foreground: '#0f172a',
      primary: '#0057ff',
      fontFamily: 'Inter',
      borderRadius: 12,
      maxWidth: 540,
    },
    blocks: [
      { id: 'b1', type: 'header', name: 'Rohan Patel', bio: 'Product Manager @ Bangalore. Angel investing & building cool things.', avatarIcon: 'user', verified: false },
      { id: 'b2', type: 'link', label: 'Current Projects & Portfolio', url: 'https://', style: 'solid' },
      { id: 'b3', type: 'link', label: 'My 2026 Reading List', url: 'https://', style: 'solid' },
      { id: 'b4', type: 'social', links: [{ platform: 'Twitter/X', url: 'https://x.com' }, { platform: 'LinkedIn', url: 'https://linkedin.com' }, { platform: 'Email', url: 'mailto:hello@example.com' }] },
    ],
  },
];

// ---------------------------------------------------------------------------
// Status Badge
// ---------------------------------------------------------------------------

function StatusBadge({ published }: { published: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '3px 9px',
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        background: published ? '#ecfdf5' : '#f1f5f9',
        color: published ? '#059669' : '#64748b',
        border: `1px solid ${published ? '#a7f3d0' : '#e2e8f0'}`,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: published ? '#10b981' : '#94a3b8',
          flexShrink: 0,
        }}
      />
      {published ? 'Live' : 'Draft'}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Template Selection Modal
// ---------------------------------------------------------------------------

interface NewPageModalProps {
  token: string;
  workspaceId: string;
  onClose: () => void;
  onCreated: (id: string) => void;
}

function NewPageModal({ token, workspaceId, onClose, onCreated }: NewPageModalProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('developer');
  const [title, setTitle] = useState('My Bio Page');
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleCreate() {
    if (!slug.trim()) {
      setError('Please provide a public slug.');
      return;
    }
    setLoading(true);
    setError('');

    const tpl = STARTER_TEMPLATES.find((t) => t.id === selectedTemplate) || STARTER_TEMPLATES[0];
    const initialConfig = {
      theme: tpl.theme,
      blocks: tpl.blocks.map((b, i) => ({ ...b, id: `blk_${Date.now()}_${i}` })),
    };

    try {
      const data = await api.post<any>('/v1/bio-pages', {
        slug: slugify(slug),
        title,
        config: initialConfig,
      });
      onCreated(data.id || data.ID);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : (err as any)?.error?.message ||
            (typeof (err as any)?.error === 'string' ? (err as any).error : '') ||
            (err as any)?.message ||
            'Failed to create page';
      setError(typeof msg === 'string' && msg !== '[object Object]' ? msg : 'Failed to create page. Please check your slug.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          border: '1px solid #e2e8f0',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.2)',
          width: '100%',
          maxWidth: 680,
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          color: '#0f172a',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px 16px',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Create Bio & Mini-Site
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
              Choose a starter layout to launch your page in seconds. You can customize everything later.
            </p>
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-icon btn-sm"
            style={{ borderRadius: 8, padding: 6, color: '#94a3b8' }}
          >
            <Icon name="x" size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 24px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b', marginBottom: 12 }}>
            Choose a Starter Template
          </div>

          {/* Template Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 12,
              marginBottom: 24,
            }}
          >
            {STARTER_TEMPLATES.map((t) => {
              const selected = selectedTemplate === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTemplate(t.id)}
                  style={{
                    padding: '16px',
                    borderRadius: 12,
                    border: selected ? '2px solid #0057ff' : '1px solid #e2e8f0',
                    background: selected ? '#f0f7ff' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: t.tagBg,
                          color: t.tagColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name={t.icon} size={16} />
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          padding: '2px 8px',
                          borderRadius: 999,
                          background: t.tagBg,
                          color: t.tagColor,
                        }}
                      >
                        {t.tag}
                      </span>
                    </div>

                    {selected && (
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          background: '#0057ff',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name="check" size={12} />
                      </div>
                    )}
                  </div>

                  <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 4 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.45 }}>
                    {t.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                Page Title
              </label>
              <input
                className="input"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 8 }}
                placeholder="e.g. Alex Chen Portfolio"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (!slug) setSlug(slugify(e.target.value));
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                Public Slug
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <span style={{ fontSize: 12, color: '#64748b', padding: '0 10px', background: '#f1f5f9', height: 40, display: 'flex', alignItems: 'center', borderRight: '1px solid #cbd5e1' }}>
                  meshalive.com/p/
                </span>
                <input
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: '#ffffff',
                    padding: '0 12px',
                    fontSize: 13,
                    height: 40,
                    color: '#0f172a',
                  }}
                  placeholder="my-name"
                  value={slug}
                  onChange={(e) => setSlug(slugify(e.target.value))}
                />
              </div>
            </div>
          </div>

          {error && (
            <div
              style={{
                marginTop: 16,
                padding: '10px 14px',
                borderRadius: 8,
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#dc2626',
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Icon name="alert" size={15} />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 28px',
            background: '#f8fafc',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 12,
          }}
        >
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ borderRadius: 8, padding: '9px 18px', fontSize: 13 }}
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={loading}
            className="btn btn-primary"
            style={{ borderRadius: 8, padding: '9px 22px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}
          >
            {loading ? 'Creating...' : 'Create & Open Builder →'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page Card Component
// ---------------------------------------------------------------------------

interface PageCardProps {
  page: BioPageSummary;
  onDelete: (id: string) => void;
}

function PageCard({ page, onDelete }: PageCardProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(fullPublicUrl(page.slug)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 12,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      }}
    >
      {/* Top row: Title + Live/Draft status badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 700,
              color: '#0f172a',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {page.title || 'Untitled Page'}
          </h3>

          <a
            href={fullPublicUrl(page.slug)}
            target="_blank"
            rel="noopener noreferrer"
            title="Open live bio page in a new tab"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 13,
              color: '#0057ff',
              fontWeight: 500,
              marginTop: 4,
              textDecoration: 'none',
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{publicUrl(page.slug)}</span>
            <Icon name="arrow-up-right" size={12} />
          </a>
        </div>

        <StatusBadge published={page.published} />
      </div>

      {/* Date */}
      <div style={{ fontSize: 12, color: '#94a3b8' }}>
        Created {fmtDate(page.createdAt)}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', paddingTop: 4, borderTop: '1px solid #f1f5f9' }}>
        <button
          onClick={() => router.push(`/dashboard/pages/${page.id}`)}
          className="btn btn-primary btn-sm"
          style={{ fontSize: 13, padding: '7px 14px', borderRadius: 7 }}
        >
          <Icon name="edit" size={13} /> Edit
        </button>

        <a
          href={fullPublicUrl(page.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          style={{ fontSize: 13, padding: '7px 12px', borderRadius: 7, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
        >
          <Icon name="arrow-up-right" size={13} /> View Live
        </a>

        <button
          onClick={handleCopy}
          className="btn btn-secondary btn-sm"
          style={{ fontSize: 13, padding: '7px 12px', borderRadius: 7, display: 'inline-flex', alignItems: 'center', gap: 4 }}
        >
          <Icon name="copy" size={13} /> {copied ? 'Copied' : 'Copy'}
        </button>

        <div style={{ marginLeft: 'auto' }}>
          {confirmDelete ? (
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: '#ef4444', fontWeight: 600 }}>Sure?</span>
              <button
                onClick={() => onDelete(page.id)}
                className="btn btn-sm"
                style={{ background: '#ef4444', color: '#ffffff', padding: '5px 10px', fontSize: 12, borderRadius: 6 }}
              >
                Yes
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="btn btn-secondary btn-sm"
                style={{ padding: '5px 10px', fontSize: 12, borderRadius: 6 }}
              >
                No
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="btn btn-ghost btn-sm"
              style={{ color: '#94a3b8', padding: '6px 8px', borderRadius: 6 }}
              title="Delete page"
            >
              <Icon name="trash" size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Dashboard Bio Pages List Component
// ---------------------------------------------------------------------------

export default function BioPagesList() {
  const router = useRouter();
  const [pages, setPages] = useState<BioPageSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');

  // Read credentials on mount
  useEffect(() => {
    const tk = getAccessToken() || (typeof window !== 'undefined' ? (localStorage.getItem('mshl_access_token') || localStorage.getItem('meshalive_token') || '') : '');
    const ws = getWorkspaceId() || (typeof window !== 'undefined' ? (localStorage.getItem('mshl_workspace_id') || localStorage.getItem('meshalive_workspace') || '') : '');
    if (!tk) {
      router.replace('/login');
      return;
    }
    setToken(tk);
    setWorkspaceId(ws);
  }, [router]);

  const loadPages = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await api.get<any>('/v1/bio-pages');
      const rawList = data.bio_pages ?? data.pages ?? data;
      const normalized = (Array.isArray(rawList) ? rawList : []).map((p: any) => ({
        id: p.id || p.ID,
        slug: p.slug || p.Slug,
        title: p.title || p.Title,
        published: p.published !== undefined ? p.published : p.Published,
        createdAt: p.created_at || p.CreatedAt || new Date().toISOString(),
        updatedAt: p.updated_at || p.UpdatedAt || new Date().toISOString(),
      }));
      setPages(normalized);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load bio pages';
      setError(typeof msg === 'string' && msg !== '[object Object]' ? msg : 'Failed to load bio pages');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPages();
  }, [loadPages]);

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`https://api.meshalive.com/v1/bio-pages/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          ...(workspaceId ? { 'X-Workspace-ID': workspaceId } : {}),
        },
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      setPages((prev) => prev.filter((p) => p.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  function handleCreated(newId: string) {
    setShowModal(false);
    router.push(`/dashboard/pages/${newId}`);
  }

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1100, margin: '0 auto', color: '#0f172a' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, gap: 16 }}>
        <div>
          <h1 className="display" style={{ fontSize: 28, margin: 0, color: '#111111', fontWeight: 700 }}>
            Bio & Mini Sites
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: '#6b7280' }}>
            All your links, socials, products, and media in one shareable profile.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 8 }}
        >
          <Icon name="plus" size={16} />
          New Page
        </button>
      </div>

      {/* Content Area */}
      {loading ? (
        <div style={{ padding: '80px 0', textAlign: 'center', color: '#94a3b8' }}>
          Loading bio pages...
        </div>
      ) : error ? (
        <div
          style={{
            background: '#fef2f2',
            border: '1px solid #fee2e2',
            borderRadius: 10,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: '#dc2626' }}>{error}</p>
          <button onClick={loadPages} className="btn btn-secondary btn-sm">
            Retry
          </button>
        </div>
      ) : pages.length === 0 ? (
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 16,
            padding: '80px 24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              margin: '0 auto 16px',
              background: '#eff6ff',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0057ff',
            }}
          >
            <Icon name="sparkle" size={28} />
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 6px', color: '#0f172a' }}>
            No bio pages yet
          </h2>
          <p style={{ fontSize: 14, color: '#64748b', maxWidth: 420, margin: '0 auto 20px', lineHeight: 1.5 }}>
            Create a bio page to share all your links, videos, and storefront cards in one place. Perfect for Instagram, YouTube, and WhatsApp.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary"
            style={{ padding: '10px 22px', borderRadius: 8 }}
          >
            Create your first page
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 16,
          }}
        >
          {pages.map((page) => (
            <PageCard key={page.id} page={page} onDelete={handleDelete} />
          ))}
        </div>
      )}

      {/* New page template selector modal */}
      {showModal && (
        <NewPageModal
          token={token}
          workspaceId={workspaceId}
          onClose={() => setShowModal(false)}
          onCreated={handleCreated}
        />
      )}
    </div>
  );
}
