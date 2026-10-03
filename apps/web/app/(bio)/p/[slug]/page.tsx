import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Icon } from '@/components/ui/icon';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Block {
  id: string;
  type:
    | 'header'
    | 'link'
    | 'heading'
    | 'text'
    | 'image'
    | 'social'
    | 'divider'
    | 'spacer'
    | 'embed'
    | 'video'
    | 'product'
    | 'contact'
    | 'badge';
  // header
  avatarUrl?: string;
  avatarIcon?: string;
  avatarBg?: string;
  name?: string;
  bio?: string;
  verified?: boolean;
  // link
  label?: string;
  url?: string;
  icon?: string;
  style?: 'solid' | 'outline' | 'ghost';
  // heading
  level?: 1 | 2 | 3;
  text?: string;
  // text
  content?: string;
  // image
  src?: string;
  alt?: string;
  caption?: string;
  // social
  socials?: { platform: string; url: string }[];
  links?: { platform: string; url: string }[];
  // video
  title?: string;
  // product
  price?: string;
  buttonText?: string;
  // contact
  phone?: string;
  // badge
  tags?: string[];
  // spacer
  height?: number;
  // embed
  html?: string;
}

interface BioPageConfig {
  blocks: Block[];
  theme: {
    background: string;
    foreground: string;
    primary: string;
    fontFamily: string;
    borderRadius: number;
    maxWidth: number;
  };
}

interface BioPage {
  id: string;
  slug: string;
  title: string;
  config: BioPageConfig;
  published: boolean;
}

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

async function fetchPage(slug: string): Promise<BioPage | null> {
  try {
    const res = await fetch(`https://api.meshalive.com/v1/p/${slug}`, {
      next: { revalidate: 10 },
    });
    if (res.status === 404 || !res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const rawPage = await fetchPage(slug);
    if (!rawPage) return { title: 'Page Not Found — Meshalive' };
    const rawAny = rawPage as any;
    const cfg = rawPage.config || rawAny.Config;
    const title = rawPage.title || rawAny.Title || 'Meshalive Page';
    const blks = (cfg as any)?.blocks || (cfg as any)?.Blocks || [];
    const firstBio = blks.find((b: any) => b.type === 'header')?.bio;
    return {
      title: `${title} | Meshalive`,
      description: firstBio || `Visit ${title} on Meshalive`,
    };
  } catch {
    return { title: 'Meshalive Bio Page' };
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getInitials(name?: string): string {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

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

// ---------------------------------------------------------------------------
// Block renderers
// ---------------------------------------------------------------------------

function HeaderBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  const initials = getInitials(block.name);

  return (
    <div style={{ textAlign: 'center', paddingBottom: '8px' }}>
      {/* Avatar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        {block.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.avatarUrl}
            alt={block.name ?? 'Avatar'}
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              objectFit: 'cover',
              border: `3px solid ${theme.primary}40`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }}
          />
        ) : block.avatarIcon ? (
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              background: block.avatarBg ?? `${theme.primary}1f`,
              border: `2px solid ${theme.primary}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.primary,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
            <Icon name={block.avatarIcon} size={40} />
          </div>
        ) : initials ? (
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              background: block.avatarBg ?? `${theme.primary}22`,
              border: `2px solid ${theme.primary}44`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
              color: theme.primary,
              userSelect: 'none',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
            {initials}
          </div>
        ) : (
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              background: block.avatarBg ?? `${theme.primary}22`,
              border: `2px solid ${theme.primary}44`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.primary,
            }}
          >
            <Icon name="user" size={40} />
          </div>
        )}
      </div>

      {/* Name */}
      {block.name && (
        <h1
          style={{
            margin: '0 0 8px',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: theme.foreground,
            lineHeight: 1.2,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <span>{block.name}</span>
          {(block as any).verified && (
            <Icon name="verified" size={20} style={{ color: theme.primary, flexShrink: 0 }} />
          )}
        </h1>
      )}

      {/* Bio */}
      {block.bio && (
        <p
          style={{
            margin: 0,
            fontSize: '0.95rem',
            color: theme.foreground,
            opacity: 0.75,
            lineHeight: 1.6,
            maxWidth: 420,
            marginInline: 'auto',
          }}
        >
          {block.bio}
        </p>
      )}
    </div>
  );
}

function LinkBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  const style = block.style ?? 'solid';
  const radius = theme.borderRadius;

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    padding: '14px 20px',
    borderRadius: radius,
    textDecoration: 'none',
    fontSize: '0.975rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.15s, transform 0.1s',
    boxSizing: 'border-box',
    letterSpacing: '0.01em',
  };

  const variantStyle: React.CSSProperties =
    style === 'solid'
      ? {
          background: theme.primary,
          color: '#ffffff',
          border: '2px solid transparent',
          boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
        }
      : style === 'outline'
      ? {
          background: 'transparent',
          color: theme.primary,
          border: `2px solid ${theme.primary}`,
        }
      : /* ghost */ {
          background: 'transparent',
          color: theme.primary,
          border: '2px solid transparent',
        };

  return (
    <a
      href={block.url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...baseStyle, ...variantStyle }}
    >
      {block.icon && <Icon name={block.icon} size={18} />}
      <span>{block.label ?? 'Link'}</span>
    </a>
  );
}

function HeadingBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  const level = block.level ?? 2;
  const sizeMap = { 1: '1.4rem', 2: '1.2rem', 3: '1.05rem' };
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';
  return (
    <Tag
      style={{
        margin: '8px 0 2px',
        fontSize: sizeMap[level],
        fontWeight: 700,
        color: theme.foreground,
        textAlign: 'center',
        letterSpacing: '-0.01em',
      }}
    >
      {block.text ?? ''}
    </Tag>
  );
}

function TextBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  return (
    <p
      style={{
        margin: 0,
        fontSize: '0.9375rem',
        color: theme.foreground,
        opacity: 0.85,
        lineHeight: 1.7,
        textAlign: 'center',
      }}
    >
      {block.content ?? ''}
    </p>
  );
}

function ImageBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  return (
    <div style={{ width: '100%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={block.src ?? ''}
        alt={block.alt ?? ''}
        style={{
          width: '100%',
          display: 'block',
          borderRadius: theme.borderRadius,
          objectFit: 'cover',
        }}
      />
      {block.caption && (
        <p
          style={{
            margin: '6px 0 0',
            fontSize: '0.8rem',
            color: theme.foreground,
            opacity: 0.55,
            textAlign: 'center',
          }}
        >
          {block.caption}
        </p>
      )}
    </div>
  );
}

function SocialBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  const items = block.socials ?? block.links ?? [];
  if (!items.length) return null;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center',
      }}
    >
      {items.map((s, i) => {
        const meta = socialMeta(s.platform);
        return (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.platform}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: meta.bg + '18',
              border: `1.5px solid ${meta.bg}44`,
              color: meta.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 0.15s, opacity 0.15s',
            }}
          >
            <Icon name={meta.icon} size={20} />
          </a>
        );
      })}
    </div>
  );
}

function DividerBlock({ theme }: { theme: BioPageConfig['theme'] }) {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: `1px solid ${theme.foreground}25`,
        margin: '8px 0',
        width: '100%',
      }}
    />
  );
}

function SpacerBlock({ block }: { block: Block }) {
  return <div style={{ height: block.height ?? 24 }} aria-hidden />;
}

function sanitizeEmbed(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\bon\w+\s*=/gi, 'data-blocked=')
    .replace(/javascript\s*:/gi, 'blocked:');
}

function EmbedBlock({ block }: { block: Block }) {
  if (!block.html) return null;
  return (
    <div
      style={{ width: '100%', overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: sanitizeEmbed(block.html) }}
    />
  );
}

function getYoutubeEmbed(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}

function VideoBlock({ block, theme }: { block: any; theme: BioPageConfig['theme'] }) {
  const embedUrl = getYoutubeEmbed(block.url || '');
  if (!embedUrl) {
    return (
      <a
        href={block.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '12px 18px',
          borderRadius: theme.borderRadius,
          background: 'rgba(255,255,255,0.06)',
          border: `1px solid ${theme.foreground}20`,
          color: theme.foreground,
          textDecoration: 'none',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <Icon name="video" size={16} />
        <span>Watch Video: {block.title || block.url}</span>
      </a>
    );
  }
  return (
    <div style={{ width: '100%', borderRadius: theme.borderRadius, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', aspectRatio: '16/9' }}>
      <iframe
        src={embedUrl}
        title={block.title || 'Video player'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

function ProductBlock({ block, theme }: { block: any; theme: BioPageConfig['theme'] }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 18px',
        borderRadius: theme.borderRadius,
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${theme.foreground}20`,
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: `${theme.primary}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.primary,
            flexShrink: 0,
          }}
        >
          <Icon name="shopping-bag" size={20} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: theme.foreground, marginBottom: 2 }}>
            {block.title || 'Featured Product'}
          </div>
          {block.price && (
            <div style={{ fontSize: 13, fontWeight: 700, color: theme.primary }}>
              {block.price}
            </div>
          )}
        </div>
      </div>
      <a
        href={block.url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '8px 16px',
          borderRadius: Math.max(theme.borderRadius - 4, 6),
          background: theme.primary,
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 13,
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        {block.buttonText || 'Buy Now →'}
      </a>
    </div>
  );
}

function ContactBlock({ block, theme }: { block: any; theme: BioPageConfig['theme'] }) {
  const phone = (block.phone || '').replace(/[^0-9]/g, '');
  const text = encodeURIComponent(block.text || 'Hello! Reaching out via your bio page.');
  const waUrl = `https://wa.me/${phone}?text=${text}`;
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        padding: '14px 20px',
        borderRadius: theme.borderRadius,
        background: '#25D366',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: 15,
        textDecoration: 'none',
        boxShadow: '0 4px 14px rgba(37,211,102,0.3)',
      }}
    >
      <Icon name="whatsapp" size={20} />
      <span>{block.label || 'Chat on WhatsApp'}</span>
    </a>
  );
}

function BadgeBlock({ block, theme }: { block: any; theme: BioPageConfig['theme'] }) {
  const tags = block.tags || [];
  if (!tags.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
      {tags.map((tag: string, i: number) => (
        <span
          key={i}
          style={{
            fontSize: 12,
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: 999,
            background: `${theme.primary}22`,
            border: `1px solid ${theme.primary}44`,
            color: theme.foreground,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function renderBlock(block: Block, theme: BioPageConfig['theme']) {
  switch (block.type) {
    case 'header':
      return <HeaderBlock block={block} theme={theme} />;
    case 'link':
      return <LinkBlock block={block} theme={theme} />;
    case 'heading':
      return <HeadingBlock block={block} theme={theme} />;
    case 'text':
      return <TextBlock block={block} theme={theme} />;
    case 'image':
      return <ImageBlock block={block} theme={theme} />;
    case 'social':
      return <SocialBlock block={block} theme={theme} />;
    case 'divider':
      return <DividerBlock theme={theme} />;
    case 'spacer':
      return <SpacerBlock block={block} />;
    case 'embed':
      return <EmbedBlock block={block} />;
    case 'video':
      return <VideoBlock block={block} theme={theme} />;
    case 'product':
      return <ProductBlock block={block} theme={theme} />;
    case 'contact':
      return <ContactBlock block={block} theme={theme} />;
    case 'badge':
      return <BadgeBlock block={block} theme={theme} />;
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BioPublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rawPage = await fetchPage(slug);
  if (!rawPage) notFound();
  const rawAny = rawPage as any;
  const config = rawPage.config || rawAny.Config;
  if (!config) notFound();

  const theme = (config as any)?.theme || (config as any)?.Theme || {
    background: '#0f172a',
    foreground: '#ffffff',
    primary: '#0078D4',
    fontFamily: 'Inter',
    borderRadius: 12,
    maxWidth: 640,
  };
  const blocks: Block[] = (config as any)?.blocks || (config as any)?.Blocks || [];

  return (
    <>
      {/* Inject font from Google Fonts — safe server render */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(
              theme.fontFamily
            )}:wght@400;500;600;700&display=swap');
          `,
        }}
      />

      <main
        style={{
          minHeight: '100vh',
          background: theme.background,
          fontFamily: `'${theme.fontFamily.replace(/[^a-zA-Z0-9 \-_+]/g, '')}', system-ui, sans-serif`,
          padding: '48px 16px 80px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: theme.maxWidth,
            marginInline: 'auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {blocks.map((block: Block) => (
            <div key={block.id}>{renderBlock(block, theme)}</div>
          ))}
        </div>

        {/* Viral Growth Footer */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a
            href="https://meshalive.com/tools/link-in-bio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 16px',
              borderRadius: 999,
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${theme.foreground}25`,
              color: theme.foreground,
              fontSize: '0.78rem',
              fontWeight: 500,
              textDecoration: 'none',
              opacity: 0.85,
            }}
          >
            <Icon name="zap" size={13} style={{ color: theme.primary }} />
            <span>Create your free mini-site on</span>
            <strong style={{ color: theme.primary }}>Meshalive</strong>
          </a>
        </div>
      </main>
    </>
  );
}
