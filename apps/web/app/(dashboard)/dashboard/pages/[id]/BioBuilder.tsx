'use client';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken, getWorkspaceId } from '@/lib/auth';
import { api } from '@/lib/api';
import { Icon } from '@/components/ui/icon';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Theme {
  background: string;
  foreground: string;
  primary: string;
  fontFamily: 'Inter' | 'Roboto' | 'Georgia' | 'Courier New';
  borderRadius: number;
  maxWidth: number;
}

type Block =
  | { id: string; type: 'header'; name: string; bio: string; avatarIcon?: string; avatarUrl?: string; verified?: boolean; avatarEmoji?: string }
  | { id: string; type: 'link'; label: string; url: string; icon?: string; style: 'solid' | 'outline' | 'ghost' }
  | { id: string; type: 'heading'; text: string; level: 1 | 2 | 3; align: 'left' | 'center' | 'right' }
  | { id: string; type: 'text'; content: string; align: 'left' | 'center' | 'right' }
  | { id: string; type: 'image'; src: string; alt: string; caption: string }
  | { id: string; type: 'social'; links: { platform: string; url: string }[] }
  | { id: string; type: 'video'; url: string; title?: string }
  | { id: string; type: 'product'; title: string; price: string; url: string; buttonText?: string }
  | { id: string; type: 'contact'; phone: string; text?: string; label?: string }
  | { id: string; type: 'badge'; tags: string[] }
  | { id: string; type: 'divider'; color?: string }
  | { id: string; type: 'spacer'; height?: number }
  | { id: string; type: 'embed'; html: string; caption?: string };

interface BioPageConfig {
  blocks: Block[];
  theme: Theme;
}

interface BioBuilderProps {
  pageId: string;
  workspaceId: string;
  accessToken: string;
  initialPage: {
    id: string;
    slug: string;
    title: string;
    config: BioPageConfig;
    published: boolean;
  };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BLOCK_TYPES = [
  { type: 'header', icon: 'user', label: 'Profile Header', desc: 'Avatar, name, bio & verified badge' },
  { type: 'link', icon: 'link', label: 'Link Button', desc: 'Direct trackable button to any URL' },
  { type: 'product', icon: 'shopping-bag', label: 'Store Product', desc: 'Product card with price & Buy CTA' },
  { type: 'contact', icon: 'whatsapp', label: 'WhatsApp Chat', desc: '1-tap instant WhatsApp chat booking' },
  { type: 'video', icon: 'video', label: 'YouTube Video', desc: 'Interactive responsive video player' },
  { type: 'badge', icon: 'tag', label: 'Skills & Badges', desc: 'Horizontal tag pills & tech stack' },
  { type: 'social', icon: 'share', label: 'Social Handles', desc: 'Instagram, X, LinkedIn, YouTube, etc.' },
  { type: 'heading', icon: 'edit', label: 'Section Heading', desc: 'Visual divider heading' },
  { type: 'text', icon: 'file-text', label: 'Text Paragraph', desc: 'Rich narrative or announcement' },
  { type: 'divider', icon: 'split', label: 'Divider Rule', desc: 'Subtle separator line' },
] as const;

const AVATAR_ICONS = [
  { id: 'user', label: 'Profile' },
  { id: 'code', label: 'Developer' },
  { id: 'sparkle', label: 'Creator' },
  { id: 'zap', label: 'Speed' },
  { id: 'briefcase', label: 'Business' },
  { id: 'globe', label: 'Global' },
  { id: 'shield', label: 'Security' },
  { id: 'edit', label: 'Writer' },
  { id: 'shopping-bag', label: 'Commerce' },
];

const THEME_PRESETS: { label: string; previewBg: string; previewAccent: string; theme: Theme }[] = [
  { label: 'Clean SaaS', previewBg: '#ffffff', previewAccent: '#0057ff', theme: { background: '#ffffff', foreground: '#0f172a', primary: '#0057ff', fontFamily: 'Inter', borderRadius: 10, maxWidth: 560 } },
  { label: 'Obsidian Night', previewBg: '#0f172a', previewAccent: '#38bdf8', theme: { background: '#0f172a', foreground: '#f8fafc', primary: '#38bdf8', fontFamily: 'Inter', borderRadius: 10, maxWidth: 560 } },
  { label: 'Midnight OLED', previewBg: '#000000', previewAccent: '#8b5cf6', theme: { background: '#000000', foreground: '#ffffff', primary: '#8b5cf6', fontFamily: 'Inter', borderRadius: 14, maxWidth: 560 } },
  { label: 'Dev Console', previewBg: '#0d1117', previewAccent: '#2ea043', theme: { background: '#0d1117', foreground: '#c9d1d9', primary: '#2ea043', fontFamily: 'Courier New', borderRadius: 8, maxWidth: 580 } },
  { label: 'Sunset Glow', previewBg: '#ff4e50', previewAccent: '#f9d423', theme: { background: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)', foreground: '#ffffff', primary: '#ff4e50', fontFamily: 'Inter', borderRadius: 16, maxWidth: 560 } },
  { label: 'Emerald Luxe', previewBg: '#062c21', previewAccent: '#10b981', theme: { background: '#062c21', foreground: '#f0fdf4', primary: '#10b981', fontFamily: 'Inter', borderRadius: 12, maxWidth: 560 } },
  { label: 'Velvet Rose', previewBg: '#340c35', previewAccent: '#f472b6', theme: { background: 'linear-gradient(135deg, #18091e 0%, #340c35 100%)', foreground: '#fdf2f8', primary: '#f472b6', fontFamily: 'Inter', borderRadius: 16, maxWidth: 560 } },
  { label: 'Warm Terracotta', previewBg: '#faf8f5', previewAccent: '#c2410c', theme: { background: '#faf8f5', foreground: '#292524', primary: '#c2410c', fontFamily: 'Georgia', borderRadius: 8, maxWidth: 580 } },
  { label: 'Nordic Frost', previewBg: '#f0f4f8', previewAccent: '#0284c7', theme: { background: '#f0f4f8', foreground: '#1e293b', primary: '#0284c7', fontFamily: 'Inter', borderRadius: 12, maxWidth: 560 } },
  { label: 'Tokyo Neon', previewBg: '#120e2e', previewAccent: '#00f0ff', theme: { background: '#120e2e', foreground: '#f5f3ff', primary: '#00f0ff', fontFamily: 'Inter', borderRadius: 16, maxWidth: 560 } },
  { label: 'Paper & Ink', previewBg: '#fdfbf7', previewAccent: '#18181b', theme: { background: '#fdfbf7', foreground: '#18181b', primary: '#18181b', fontFamily: 'Georgia', borderRadius: 0, maxWidth: 600 } },
  { label: 'Ocean Deep', previewBg: '#0d1b2a', previewAccent: '#00b4d8', theme: { background: 'linear-gradient(160deg, #0d1b2a 0%, #0a3d62 100%)', foreground: '#e8f4f8', primary: '#00b4d8', fontFamily: 'Inter', borderRadius: 16, maxWidth: 560 } },
];

const SOCIAL_META: Record<string, { bg: string; icon: string }> = {
  instagram: { bg: '#E1306C', icon: 'instagram' },
  twitter: { bg: '#1DA1F2', icon: 'twitter' },
  'twitter/x': { bg: '#0f172a', icon: 'twitter' },
  x: { bg: '#0f172a', icon: 'twitter' },
  linkedin: { bg: '#0A66C2', icon: 'linkedin' },
  youtube: { bg: '#FF0000', icon: 'youtube' },
  whatsapp: { bg: '#25D366', icon: 'whatsapp' },
  tiktok: { bg: '#010101', icon: 'video' },
  github: { bg: '#24292e', icon: 'github' },
  email: { bg: '#6B7280', icon: 'mail' },
  website: { bg: '#2563EB', icon: 'globe' },
};

function socialMeta(platform: string) {
  return SOCIAL_META[platform.toLowerCase()] ?? { bg: '#6B7280', icon: 'link' };
}

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function getInitials(name?: string): string {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function defaultBlock(type: Block['type']): Block {
  switch (type) {
    case 'header': return { id: uid(), type: 'header', name: 'Your Name', bio: 'Welcome to my bio mini-site!', avatarIcon: 'user', verified: true };
    case 'link': return { id: uid(), type: 'link', label: 'Visit My Website', url: 'https://', style: 'solid' };
    case 'heading': return { id: uid(), type: 'heading', text: 'Featured Work', level: 2, align: 'center' };
    case 'text': return { id: uid(), type: 'text', content: 'Add any details or an intro paragraph here...', align: 'center' };
    case 'image': return { id: uid(), type: 'image', src: '', alt: '', caption: '' };
    case 'social': return { id: uid(), type: 'social', links: [{ platform: 'Instagram', url: '' }, { platform: 'Twitter/X', url: '' }, { platform: 'LinkedIn', url: '' }] };
    case 'video': return { id: uid(), type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'Featured Video' };
    case 'product': return { id: uid(), type: 'product', title: 'Digital Product / Guide', price: '₹499 / $9.99', url: 'https://', buttonText: 'Buy Now →' };
    case 'contact': return { id: uid(), type: 'contact', phone: '919999999999', text: 'Hi! Reaching out via your bio page.', label: 'Chat on WhatsApp' };
    case 'badge': return { id: uid(), type: 'badge', tags: ['Featured', 'Creator', 'Verified'] };
    case 'divider': return { id: uid(), type: 'divider', color: 'rgba(255,255,255,0.2)' };
    case 'spacer': return { id: uid(), type: 'spacer', height: 24 };
    case 'embed': return { id: uid(), type: 'embed', html: '', caption: '' };
  }
}

// ─── Main Bio Studio Builder Component ────────────────────────────────────────

export default function BioBuilder({
  pageId,
  initialPage,
}: BioBuilderProps) {
  const router = useRouter();

  // Normalize incoming initialPage
  const initialConfig: any = initialPage.config || (initialPage as any).Config || {};
  const rawTheme = initialConfig.theme || initialConfig.Theme || THEME_PRESETS[0].theme;
  const rawBlocks = initialConfig.blocks || initialConfig.Blocks || [];

  const [title, setTitle] = useState(initialPage.title || 'My Bio Page');
  const [slug, setSlug] = useState(initialPage.slug || 'my-page');
  const [blocks, setBlocks] = useState<Block[]>(rawBlocks);
  const [theme, setTheme] = useState<Theme>(rawTheme);
  const [published, setPublished] = useState(initialPage.published !== false);

  const [activeTab, setActiveTab] = useState<'blocks' | 'design'>('blocks');
  const [selectedId, setSelectedId] = useState<string | null>(rawBlocks[0]?.id || null);
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('saved');
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Debounced auto-save using central API client
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerSave = useCallback(
    (nextTitle: string, nextSlug: string, nextBlocks: Block[], nextTheme: Theme, nextPublished: boolean) => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      setSaveStatus('saving');
      saveTimerRef.current = setTimeout(async () => {
        try {
          await api.put(`/v1/bio-pages/${pageId}`, {
            slug: nextSlug,
            title: nextTitle,
            config: { blocks: nextBlocks, theme: nextTheme },
            published: nextPublished,
          });
          setSaveStatus('saved');
        } catch {
          setSaveStatus('error');
        }
      }, 1200);
    },
    [pageId]
  );

  const updateBlocks = (next: Block[]) => {
    setBlocks(next);
    triggerSave(title, slug, next, theme, published);
  };

  const updateTheme = (next: Theme) => {
    setTheme(next);
    triggerSave(title, slug, blocks, next, published);
  };

  const addBlock = (type: Block['type']) => {
    const nb = defaultBlock(type);
    const nextList = [...blocks, nb];
    updateBlocks(nextList);
    setSelectedId(nb.id);
    setShowAddMenu(false);
  };

  const deleteBlock = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextList = blocks.filter(b => b.id !== id);
    updateBlocks(nextList);
    if (selectedId === id) {
      setSelectedId(nextList[0]?.id || null);
    }
  };

  const moveBlock = (index: number, direction: 'up' | 'down', e?: React.MouseEvent) => {
    e?.stopPropagation();
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;
    const nextList = [...blocks];
    const [moved] = nextList.splice(index, 1);
    nextList.splice(targetIndex, 0, moved);
    updateBlocks(nextList);
  };

  const updateBlock = (updated: Block) => {
    const nextList = blocks.map(b => b.id === updated.id ? updated : b);
    updateBlocks(nextList);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://meshalive.com/p/${slug}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const selectedBlock = useMemo(() => blocks.find(b => b.id === selectedId), [blocks, selectedId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f8fafc', color: '#0f172a', fontFamily: '"Geist", "Inter", -apple-system, sans-serif' }}>

      {/* ── Studio Top Navbar (Google & Microsoft Fluent Style) ── */}
      <header style={{
        height: 62,
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: '#ffffff',
        flexShrink: 0,
        gap: 16,
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
        zIndex: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            onClick={() => router.push('/dashboard/pages')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              borderRadius: 8,
              padding: '7px 12px',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#334155',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <Icon name="arrow-left" size={14} /> Back
          </button>

          <div style={{ width: 1, height: 20, background: '#e2e8f0' }} />

          {/* Editable Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                triggerSave(e.target.value, slug, blocks, theme, published);
              }}
              placeholder="Page Title"
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: '#0f172a',
                border: '1px solid transparent',
                borderRadius: 6,
                padding: '4px 8px',
                background: 'transparent',
                outline: 'none',
                maxWidth: 220,
              }}
              onFocus={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.borderColor = '#0057ff';
                e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Public Slug Pill with Copy Link */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 20,
            padding: '4px 12px',
            fontSize: 12,
          }}>
            <span style={{ color: '#64748b' }}>meshalive.com/p/</span>
            <input
              value={slug}
              onChange={(e) => {
                const s = e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, '');
                setSlug(s);
                triggerSave(title, s, blocks, theme, published);
              }}
              style={{
                border: 'none',
                background: 'transparent',
                fontWeight: 700,
                color: '#0057ff',
                outline: 'none',
                width: `${Math.max(slug.length, 4) * 8.5}px`,
                maxWidth: 160,
              }}
            />
            <button
              onClick={handleCopyLink}
              title="Copy public link"
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: copied ? '#10b981' : '#64748b',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 4px',
                borderRadius: 4,
              }}
            >
              <Icon name={copied ? 'check' : 'copy'} size={13} />
            </button>
          </div>
        </div>

        {/* Center: Device Viewport Switcher */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f1f5f9',
          padding: 3,
          borderRadius: 8,
          border: '1px solid #e2e8f0',
          gap: 2,
        }}>
          <button
            onClick={() => setPreviewDevice('mobile')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px',
              borderRadius: 6,
              border: 'none',
              background: previewDevice === 'mobile' ? '#ffffff' : 'transparent',
              color: previewDevice === 'mobile' ? '#0057ff' : '#64748b',
              fontWeight: 600,
              fontSize: 12,
              cursor: 'pointer',
              boxShadow: previewDevice === 'mobile' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            <Icon name="smartphone" size={14} /> Mobile
          </button>
          <button
            onClick={() => setPreviewDevice('desktop')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px',
              borderRadius: 6,
              border: 'none',
              background: previewDevice === 'desktop' ? '#ffffff' : 'transparent',
              color: previewDevice === 'desktop' ? '#0057ff' : '#64748b',
              fontWeight: 600,
              fontSize: 12,
              cursor: 'pointer',
              boxShadow: previewDevice === 'desktop' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            <Icon name="monitor" size={14} /> Desktop
          </button>
        </div>

        {/* Right: Cloud Save Status & Live Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Save status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: saveStatus === 'saving' ? '#0284c7' : saveStatus === 'error' ? '#ef4444' : '#10b981' }}>
            <Icon name={saveStatus === 'saving' ? 'zap' : 'cloud-check'} size={14} />
            <span>{saveStatus === 'saving' ? 'Saving...' : saveStatus === 'error' ? 'Save Error' : 'Saved'}</span>
          </div>

          {/* Publish Toggle Button */}
          <button
            onClick={() => {
              const next = !published;
              setPublished(next);
              triggerSave(title, slug, blocks, theme, next);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 12px',
              borderRadius: 20,
              border: `1px solid ${published ? '#a7f3d0' : '#e2e8f0'}`,
              background: published ? '#ecfdf5' : '#f8fafc',
              color: published ? '#059669' : '#64748b',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: published ? '#10b981' : '#94a3b8' }} />
            {published ? 'Live' : 'Draft'}
          </button>

          {/* Open live page */}
          <a
            href={`https://meshalive.com/p/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#0057ff',
              color: '#ffffff',
              padding: '7px 14px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,87,255,0.25)',
            }}
          >
            View Live <Icon name="arrow-up-right" size={14} />
          </a>
        </div>
      </header>

      {/* ── Studio Body Layout ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* ── Left Sidebar (Workspace Panel) ── */}
        <aside style={{
          width: 460,
          background: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}>
          {/* Segmented Tab Headers */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #e2e8f0',
            padding: '8px 16px',
            background: '#ffffff',
            gap: 8,
          }}>
            <button
              onClick={() => setActiveTab('blocks')}
              style={{
                flex: 1,
                padding: '9px 12px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'blocks' ? '#f0f7ff' : 'transparent',
                color: activeTab === 'blocks' ? '#0057ff' : '#64748b',
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 7,
                transition: 'all 0.15s',
              }}
            >
              <Icon name="layers" size={16} /> Blocks & Content
            </button>
            <button
              onClick={() => setActiveTab('design')}
              style={{
                flex: 1,
                padding: '9px 12px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === 'design' ? '#f0f7ff' : 'transparent',
                color: activeTab === 'design' ? '#0057ff' : '#64748b',
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 7,
                transition: 'all 0.15s',
              }}
            >
              <Icon name="palette" size={16} /> Themes & Design
            </button>
          </div>

          {/* ── TAB CONTENT ── */}
          <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>

            {/* ══ TAB 1: BLOCKS ══ */}
            {activeTab === 'blocks' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                {/* Add Block Button */}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowAddMenu(!showAddMenu)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 10,
                      border: '1.5px dashed #0057ff',
                      background: '#f0f7ff',
                      color: '#0057ff',
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      transition: 'all 0.15s',
                    }}
                  >
                    <Icon name="plus" size={16} /> Add New Block
                  </button>

                  {/* Add Block Dropdown Catalog */}
                  {showAddMenu && (
                    <div style={{
                      position: 'absolute',
                      top: '105%',
                      left: 0,
                      right: 0,
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 12,
                      boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                      zIndex: 50,
                      padding: 10,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 8,
                    }}>
                      {BLOCK_TYPES.map(bt => (
                        <button
                          key={bt.type}
                          onClick={() => addBlock(bt.type)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '10px 12px',
                            borderRadius: 8,
                            border: '1px solid #f1f5f9',
                            background: '#ffffff',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                          onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
                        >
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#eff6ff', color: '#0057ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon name={bt.icon} size={16} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{bt.label}</div>
                            <div style={{ fontSize: 11, color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{bt.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blocks List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Page Structure ({blocks.length} Blocks)
                  </div>
                  {blocks.map((block, idx) => {
                    const isSelected = block.id === selectedId;
                    const btInfo = BLOCK_TYPES.find(t => t.type === block.type) || { icon: 'layers', label: block.type };
                    return (
                      <div
                        key={block.id}
                        onClick={() => setSelectedId(block.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderRadius: 8,
                          border: `1.5px solid ${isSelected ? '#0057ff' : '#e2e8f0'}`,
                          background: isSelected ? '#f8fafc' : '#ffffff',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          boxShadow: isSelected ? '0 0 0 3px rgba(0,87,255,0.08)' : 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, overflow: 'hidden' }}>
                          <Icon name="grip" size={14} style={{ color: '#cbd5e1', cursor: 'grab' }} />
                          <div style={{ width: 28, height: 28, borderRadius: 6, background: isSelected ? '#eff6ff' : '#f1f5f9', color: isSelected ? '#0057ff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon name={btInfo.icon} size={14} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {'name' in block ? block.name : 'label' in block ? block.label : 'title' in block ? block.title : 'text' in block ? block.text : btInfo.label}
                            </div>
                            <div style={{ fontSize: 11, color: '#64748b' }}>{btInfo.label}</div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <button
                            onClick={(e) => moveBlock(idx, 'up', e)}
                            disabled={idx === 0}
                            style={{ border: 'none', background: 'transparent', color: idx === 0 ? '#e2e8f0' : '#64748b', cursor: idx === 0 ? 'default' : 'pointer', padding: 4 }}
                          >
                            <Icon name="chevron-up" size={14} />
                          </button>
                          <button
                            onClick={(e) => moveBlock(idx, 'down', e)}
                            disabled={idx === blocks.length - 1}
                            style={{ border: 'none', background: 'transparent', color: idx === blocks.length - 1 ? '#e2e8f0' : '#64748b', cursor: idx === blocks.length - 1 ? 'default' : 'pointer', padding: 4 }}
                          >
                            <Icon name="chevron-down" size={14} />
                          </button>
                          <button
                            onClick={(e) => deleteBlock(block.id, e)}
                            style={{ border: 'none', background: 'transparent', color: '#ef4444', cursor: 'pointer', padding: 4 }}
                          >
                            <Icon name="trash" size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Block Inspector */}
                {selectedBlock && (
                  <div style={{
                    marginTop: 8,
                    padding: 16,
                    borderRadius: 12,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0057ff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Icon name="edit" size={14} /> Edit {selectedBlock.type.toUpperCase()}
                    </div>

                    <BlockForm block={selectedBlock} onChange={updateBlock} />
                  </div>
                )}

              </div>
            )}

            {/* ══ TAB 2: DESIGN & STYLES ══ */}
            {activeTab === 'design' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Theme Preset Swatches */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 8, display: 'block' }}>
                    Curated Themes (1-Tap Apply)
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {THEME_PRESETS.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => updateTheme(p.theme)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          padding: '8px 12px',
                          borderRadius: 8,
                          border: '1px solid #e2e8f0',
                          background: '#ffffff',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: p.previewBg,
                          border: '2px solid #e2e8f0',
                          flexShrink: 0,
                          boxShadow: 'inset 0 0 0 2px ' + p.previewAccent,
                        }} />
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#0f172a' }}>{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 6, display: 'block' }}>
                    Font Family
                  </label>
                  <select
                    value={theme.fontFamily}
                    onChange={(e) => updateTheme({ ...theme, fontFamily: e.target.value as any })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: '1px solid #cbd5e1',
                      background: '#ffffff',
                      fontSize: 13,
                      outline: 'none',
                    }}
                  >
                    <option value="Inter">Inter (Clean Modern UI)</option>
                    <option value="Roboto">Roboto (Google Neutral)</option>
                    <option value="Georgia">Georgia (Editorial Serif)</option>
                    <option value="Courier New">Courier New (Developer Terminal)</option>
                  </select>
                </div>

                {/* Primary Accent Color */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 6, display: 'block' }}>
                    Primary Accent Color
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input
                      type="color"
                      value={theme.primary}
                      onChange={(e) => updateTheme({ ...theme, primary: e.target.value })}
                      style={{ width: 44, height: 38, border: 'none', borderRadius: 8, cursor: 'pointer', background: 'transparent' }}
                    />
                    <input
                      type="text"
                      value={theme.primary}
                      onChange={(e) => updateTheme({ ...theme, primary: e.target.value })}
                      style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 13, background: '#ffffff' }}
                    />
                  </div>
                </div>

                {/* Button Corner Radius */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#334155' }}>Corner Roundness</label>
                    <span style={{ fontSize: 12, color: '#64748b' }}>{theme.borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="28"
                    value={theme.borderRadius}
                    onChange={(e) => updateTheme({ ...theme, borderRadius: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#0057ff' }}
                  />
                </div>
              </div>
            )}

          </div>
        </aside>

        {/* ── Center Studio Canvas (Device Preview) ── */}
        <main style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          overflowY: 'auto',
          background: '#f1f5f9',
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}>
          {previewDevice === 'mobile' ? (
            /* iPhone 16 Pro Device Mockup */
            <div style={{
              width: 380,
              height: 740,
              background: '#1e293b',
              borderRadius: 48,
              padding: 12,
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              flexShrink: 0,
            }}>
              {/* Dynamic Island Notch */}
              <div style={{
                width: 100,
                height: 24,
                background: '#0f172a',
                borderRadius: 14,
                position: 'absolute',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
              }} />

              {/* Mobile Screen Surface */}
              <div style={{
                flex: 1,
                borderRadius: 38,
                background: theme.background,
                fontFamily: `'${theme.fontFamily}', sans-serif`,
                overflowY: 'auto',
                padding: '48px 18px 30px',
                color: theme.foreground,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 340, margin: '0 auto' }}>
                  {blocks.map(block => (
                    <PreviewBlock key={block.id} block={block} theme={theme} />
                  ))}

                  {/* Powered by Meshalive badge */}
                  <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <span style={{ fontSize: 11, color: theme.foreground, opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Icon name="zap" size={12} style={{ color: theme.primary }} />
                      <span>Powered by <strong style={{ color: theme.primary }}>Meshalive</strong></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop Browser Mockup */
            <div style={{
              width: 680,
              height: 700,
              background: '#ffffff',
              borderRadius: 14,
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              {/* Browser Header Bar */}
              <div style={{
                height: 40,
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                padding: '0 14px',
                gap: 12,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{
                  flex: 1,
                  height: 24,
                  background: '#ffffff',
                  borderRadius: 6,
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  fontSize: 11,
                  color: '#64748b',
                }}>
                  https://meshalive.com/p/{slug}
                </div>
              </div>

              {/* Desktop Screen Surface */}
              <div style={{
                flex: 1,
                background: theme.background,
                fontFamily: `'${theme.fontFamily}', sans-serif`,
                overflowY: 'auto',
                padding: '40px 24px',
                color: theme.foreground,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: theme.maxWidth, margin: '0 auto' }}>
                  {blocks.map(block => (
                    <PreviewBlock key={block.id} block={block} theme={theme} />
                  ))}

                  <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <span style={{ fontSize: 11, color: theme.foreground, opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Icon name="zap" size={12} style={{ color: theme.primary }} />
                      <span>Powered by <strong style={{ color: theme.primary }}>Meshalive</strong></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}

// ─── Inspector Form for Block Editing ─────────────────────────────────────────

function BlockForm({ block, onChange }: { block: Block; onChange: (b: Block) => void }) {
  const inpStyle: React.CSSProperties = {
    width: '100%',
    padding: '9px 12px',
    borderRadius: 8,
    border: '1px solid #cbd5e1',
    fontSize: 13,
    outline: 'none',
    background: '#ffffff',
    color: '#0f172a',
    boxSizing: 'border-box',
  };

  const lblStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 12,
    fontWeight: 700,
    color: '#334155',
    marginBottom: 5,
  };

  switch (block.type) {
    case 'header':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={lblStyle}>Full Name / Display Title</label>
            <input style={inpStyle} value={block.name} onChange={e => onChange({ ...block, name: e.target.value })} placeholder="e.g. Alex Chen" />
          </div>

          <div>
            <label style={lblStyle}>Bio / Tagline</label>
            <textarea style={{ ...inpStyle, resize: 'vertical', minHeight: 60 }} value={block.bio} onChange={e => onChange({ ...block, bio: e.target.value })} placeholder="Short bio or description" />
          </div>

          {/* Official Verified Badge Switch (Google / Microsoft Style) */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 10,
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="verified" size={20} style={{ color: '#0057ff' }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Verified Checkmark</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>Display official blue badge next to name</div>
              </div>
            </div>

            {/* Interactive Fluent Switch */}
            <button
              type="button"
              onClick={() => onChange({ ...block, verified: !block.verified })}
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                background: block.verified ? '#0057ff' : '#cbd5e1',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s',
                padding: 2,
              }}
            >
              <div style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                transform: block.verified ? 'translateX(20px)' : 'translateX(0)',
                transition: 'transform 0.2s',
              }} />
            </button>
          </div>

          {/* Avatar Icon Preset Picker */}
          <div>
            <label style={lblStyle}>Avatar Vector Icon</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
              {AVATAR_ICONS.map(ai => {
                const isCur = (block.avatarIcon || 'user') === ai.id;
                return (
                  <button
                    key={ai.id}
                    type="button"
                    onClick={() => onChange({ ...block, avatarIcon: ai.id, avatarUrl: '' })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '7px 10px',
                      borderRadius: 6,
                      border: `1px solid ${isCur ? '#0057ff' : '#e2e8f0'}`,
                      background: isCur ? '#eff6ff' : '#ffffff',
                      color: isCur ? '#0057ff' : '#334155',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Icon name={ai.id} size={14} />
                    <span>{ai.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label style={lblStyle}>Custom Avatar Image URL (Optional)</label>
            <input style={inpStyle} value={block.avatarUrl || ''} onChange={e => onChange({ ...block, avatarUrl: e.target.value })} placeholder="https://example.com/photo.jpg" />
          </div>
        </div>
      );

    case 'link':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={lblStyle}>Button Label</label>
            <input style={inpStyle} value={block.label} onChange={e => onChange({ ...block, label: e.target.value })} placeholder="e.g. Visit My Portfolio" />
          </div>
          <div>
            <label style={lblStyle}>Destination URL</label>
            <input style={inpStyle} value={block.url} onChange={e => onChange({ ...block, url: e.target.value })} placeholder="https://..." />
          </div>
          <div>
            <label style={lblStyle}>Button Style</label>
            <select
              style={inpStyle}
              value={block.style || 'solid'}
              onChange={e => onChange({ ...block, style: e.target.value as any })}
            >
              <option value="solid">Solid Filled (High Contrast)</option>
              <option value="outline">Outlined Border</option>
              <option value="ghost">Ghost Minimal</option>
            </select>
          </div>
        </div>
      );

    case 'product':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={lblStyle}>Product Title</label>
            <input style={inpStyle} value={block.title} onChange={e => onChange({ ...block, title: e.target.value })} placeholder="e.g. Creator Preset Pack" />
          </div>
          <div>
            <label style={lblStyle}>Price Display</label>
            <input style={inpStyle} value={block.price} onChange={e => onChange({ ...block, price: e.target.value })} placeholder="₹499 / $9.99" />
          </div>
          <div>
            <label style={lblStyle}>Checkout / Store URL</label>
            <input style={inpStyle} value={block.url} onChange={e => onChange({ ...block, url: e.target.value })} placeholder="https://store..." />
          </div>
          <div>
            <label style={lblStyle}>Call-to-Action Text</label>
            <input style={inpStyle} value={block.buttonText || 'Buy Now →'} onChange={e => onChange({ ...block, buttonText: e.target.value })} placeholder="Buy Now →" />
          </div>
        </div>
      );

    case 'contact':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={lblStyle}>WhatsApp Phone Number (with Country Code)</label>
            <input style={inpStyle} value={block.phone} onChange={e => onChange({ ...block, phone: e.target.value })} placeholder="e.g. 919999999999" />
          </div>
          <div>
            <label style={lblStyle}>Button Label</label>
            <input style={inpStyle} value={block.label || ''} onChange={e => onChange({ ...block, label: e.target.value })} placeholder="Chat on WhatsApp" />
          </div>
          <div>
            <label style={lblStyle}>Prefilled Message</label>
            <input style={inpStyle} value={block.text || ''} onChange={e => onChange({ ...block, text: e.target.value })} placeholder="Hi! Inquiring via your bio link." />
          </div>
        </div>
      );

    case 'video':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={lblStyle}>YouTube Video URL</label>
            <input style={inpStyle} value={block.url} onChange={e => onChange({ ...block, url: e.target.value })} placeholder="https://www.youtube.com/watch?v=..." />
          </div>
          <div>
            <label style={lblStyle}>Video Title</label>
            <input style={inpStyle} value={block.title || ''} onChange={e => onChange({ ...block, title: e.target.value })} placeholder="e.g. Latest YouTube Episode" />
          </div>
        </div>
      );

    case 'badge':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={lblStyle}>Badges (Comma Separated)</label>
          <input
            style={inpStyle}
            value={(block.tags || []).join(', ')}
            onChange={e => onChange({ ...block, tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
            placeholder="TypeScript, Next.js, Cloud"
          />
        </div>
      );

    case 'heading':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={lblStyle}>Heading Text</label>
            <input style={inpStyle} value={block.text} onChange={e => onChange({ ...block, text: e.target.value })} placeholder="Featured Section" />
          </div>
        </div>
      );

    case 'text':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={lblStyle}>Paragraph Text</label>
          <textarea
            style={{ ...inpStyle, minHeight: 80 }}
            value={block.content}
            onChange={e => onChange({ ...block, content: e.target.value })}
            placeholder="Write your note or announcement..."
          />
        </div>
      );

    default:
      return null;
  }
}

// ─── Preview Renderer for Individual Blocks ───────────────────────────────────

function PreviewBlock({ block, theme }: { block: Block; theme: Theme }) {
  switch (block.type) {
    case 'header': {
      const initials = getInitials(block.name);
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
            {block.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={block.avatarUrl} alt="" style={{ width: 68, height: 68, borderRadius: '50%', objectFit: 'cover', border: `2.5px solid ${theme.primary}40`, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }} />
            ) : block.avatarIcon ? (
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: `${theme.primary}20`, border: `2px solid ${theme.primary}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.primary, boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                <Icon name={block.avatarIcon} size={32} />
              </div>
            ) : initials ? (
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: `${theme.primary}20`, border: `2px solid ${theme.primary}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: theme.primary, boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                {initials}
              </div>
            ) : (
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: `${theme.primary}20`, border: `2px solid ${theme.primary}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.primary }}>
                <Icon name="user" size={32} />
              </div>
            )}
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: theme.foreground, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <span>{block.name}</span>
            {block.verified && <Icon name="verified" size={18} style={{ color: '#0057ff' }} />}
          </div>
          {block.bio && (
            <div style={{ fontSize: 13, color: theme.foreground, opacity: 0.75, marginTop: 4, lineHeight: 1.4 }}>
              {block.bio}
            </div>
          )}
        </div>
      );
    }

    case 'link': {
      const isSolid = (block.style || 'solid') === 'solid';
      const isOutline = block.style === 'outline';
      return (
        <div style={{
          width: '100%',
          padding: '12px 16px',
          textAlign: 'center',
          borderRadius: theme.borderRadius,
          background: isSolid ? theme.primary : 'transparent',
          color: isSolid ? '#ffffff' : theme.primary,
          border: isOutline ? `2px solid ${theme.primary}` : 'none',
          fontWeight: 600,
          fontSize: 14,
          boxShadow: isSolid ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
        }}>
          {block.label}
        </div>
      );
    }

    case 'product':
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          borderRadius: theme.borderRadius,
          background: 'rgba(255,255,255,0.06)',
          border: `1px solid ${theme.foreground}20`,
          gap: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, overflow: 'hidden' }}>
            <div style={{ width: 34, height: 34, borderRadius: 6, background: `${theme.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.primary, flexShrink: 0 }}>
              <Icon name="shopping-bag" size={18} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: theme.foreground, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {block.title || 'Product Title'}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: theme.primary }}>
                {block.price || 'Free'}
              </div>
            </div>
          </div>
          <div style={{
            padding: '6px 12px',
            borderRadius: Math.max(theme.borderRadius - 4, 6),
            background: theme.primary,
            color: '#ffffff',
            fontSize: 12,
            fontWeight: 700,
            flexShrink: 0,
          }}>
            {block.buttonText || 'Buy Now →'}
          </div>
        </div>
      );

    case 'contact':
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '12px 16px',
          borderRadius: theme.borderRadius,
          background: '#25D366',
          color: '#ffffff',
          fontWeight: 600,
          fontSize: 14,
          boxShadow: '0 4px 12px rgba(37,211,102,0.25)',
        }}>
          <Icon name="whatsapp" size={18} />
          <span>{block.label || 'Chat on WhatsApp'}</span>
        </div>
      );

    case 'video':
      return (
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: theme.borderRadius,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.foreground,
          gap: 8,
          fontSize: 13,
          fontWeight: 600,
          border: `1px solid ${theme.foreground}20`,
        }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
            <Icon name="video" size={20} />
          </div>
          <span>{block.title || 'Video Player Preview'}</span>
        </div>
      );

    case 'social':
      return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
          {(block.links || []).map((l, i) => {
            const meta = socialMeta(l.platform);
            return (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: meta.bg + '18',
                  border: `1.5px solid ${meta.bg}44`,
                  color: meta.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name={meta.icon} size={18} />
              </div>
            );
          })}
        </div>
      );

    case 'badge':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
          {(block.tags || []).map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 999,
                background: `${theme.primary}20`,
                border: `1px solid ${theme.primary}40`,
                color: theme.foreground,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      );

    case 'heading':
      return (
        <div style={{ textAlign: 'center', fontSize: 16, fontWeight: 700, color: theme.foreground, margin: '6px 0 2px' }}>
          {block.text}
        </div>
      );

    case 'text':
      return (
        <div style={{ fontSize: 13, color: theme.foreground, opacity: 0.8, textAlign: 'center', lineHeight: 1.5 }}>
          {block.content}
        </div>
      );

    case 'divider':
      return <hr style={{ border: 'none', borderTop: `1px solid ${theme.foreground}20`, margin: '4px 0' }} />;

    default:
      return null;
  }
}
