import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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
    | 'embed';
  // header
  avatarEmoji?: string;
  avatarUrl?: string;
  avatarBg?: string;
  name?: string;
  bio?: string;
  // link
  label?: string;
  url?: string;
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

async function fetchPage(slug: string): Promise<BioPage> {
  const res = await fetch(`https://api.meshalive.com/v1/p/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`Failed to fetch page: ${res.status}`);
  return res.json();
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
    const page = await fetchPage(slug);
    const firstBio = page.config.blocks.find((b) => b.type === 'header')?.bio;
    return {
      title: page.title || 'Meshalive Page',
      description: firstBio || `Visit ${page.title} on Meshalive`,
    };
  } catch {
    return { title: 'Meshalive Page' };
  }
}

// ---------------------------------------------------------------------------
// Platform colour palette for social blocks
// ---------------------------------------------------------------------------

const SOCIAL_META: Record<string, { bg: string; label: string }> = {
  instagram: { bg: '#E1306C', label: 'IG' },
  twitter: { bg: '#000000', label: 'X' },
  x: { bg: '#000000', label: 'X' },
  linkedin: { bg: '#0A66C2', label: 'in' },
  youtube: { bg: '#FF0000', label: 'YT' },
  whatsapp: { bg: '#25D366', label: 'WA' },
  tiktok: { bg: '#010101', label: 'TT' },
  github: { bg: '#6e40c9', label: 'GH' },
  email: { bg: '#6B7280', label: '@' },
  website: { bg: '#2563EB', label: 'WEB' },
};

function socialMeta(platform: string) {
  return SOCIAL_META[platform.toLowerCase()] ?? { bg: '#6B7280', label: platform.slice(0, 2).toUpperCase() };
}

// ---------------------------------------------------------------------------
// Block renderers (plain inline-styled JSX — no CSS-in-JS dependency)
// ---------------------------------------------------------------------------

function HeaderBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  const radius = theme.borderRadius;
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
            }}
          />
        ) : (
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              background: block.avatarBg ?? theme.primary + '33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              userSelect: 'none',
            }}
          >
            {block.avatarEmoji ?? '🙂'}
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
          }}
        >
          {block.name}
        </h1>
      )}

      {/* Bio */}
      {block.bio && (
        <p
          style={{
            margin: 0,
            fontSize: '0.95rem',
            color: theme.foreground,
            opacity: 0.65,
            lineHeight: 1.6,
            maxWidth: 400,
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
    display: 'block',
    width: '100%',
    padding: '14px 20px',
    borderRadius: radius,
    textDecoration: 'none',
    textAlign: 'center',
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
      {block.label ?? 'Link'}
    </a>
  );
}

function HeadingBlock({ block, theme }: { block: Block; theme: BioPageConfig['theme'] }) {
  const level = block.level ?? 2;
  const sizeMap = { 1: '1.5rem', 2: '1.2rem', 3: '1rem' };
  const marginMap = { 1: '24px', 2: '16px', 3: '12px' };
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      style={{
        margin: 0,
        marginTop: marginMap[level],
        fontSize: sizeMap[level],
        fontWeight: level === 1 ? 700 : level === 2 ? 600 : 500,
        color: theme.foreground,
        lineHeight: 1.3,
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
          borderRadius: 8,
          objectFit: 'cover',
        }}
      />
      {block.caption && (
        <p
          style={{
            margin: '6px 0 0',
            fontSize: '0.8rem',
            color: theme.foreground,
            opacity: 0.5,
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
  const items = block.socials ?? [];
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
              background: meta.bg + '22',
              border: `2px solid ${meta.bg}55`,
              color: meta.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              fontWeight: 700,
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {meta.label}
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
        borderTop: `1px solid ${theme.foreground}33`,
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
      style={{ overflow: 'hidden', width: '100%', borderRadius: 8 }}
      dangerouslySetInnerHTML={{ __html: sanitizeEmbed(block.html) }}
    />
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
  const page = await fetchPage(slug);
  const { config } = page;
  const { theme, blocks } = config;

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
          {blocks.map((block) => (
            <div key={block.id}>{renderBlock(block, theme)}</div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 48,
            fontSize: '0.75rem',
          }}
        >
          <a
            href="https://meshalive.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme.foreground,
              opacity: 0.3,
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            Made with Meshalive
          </a>
        </div>
      </main>
    </>
  );
}
