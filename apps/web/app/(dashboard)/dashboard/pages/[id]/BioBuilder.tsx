'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';

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
  | { id: string; type: 'header'; name: string; bio: string; avatarEmoji: string }
  | { id: string; type: 'link'; label: string; url: string; style: 'solid' | 'outline' | 'ghost' }
  | { id: string; type: 'heading'; text: string; level: 1 | 2 | 3; align: 'left' | 'center' | 'right' }
  | { id: string; type: 'text'; content: string; align: 'left' | 'center' | 'right' }
  | { id: string; type: 'image'; src: string; alt: string; caption: string }
  | { id: string; type: 'social'; links: { platform: string; url: string }[] }
  | { id: string; type: 'divider'; color: string }
  | { id: string; type: 'spacer'; height: number }
  | { id: string; type: 'embed'; html: string; caption: string };

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

const BLOCK_PALETTE = [
  { type: 'header',  icon: '👤', label: 'Profile Header' },
  { type: 'link',    icon: '🔗', label: 'Link Button' },
  { type: 'heading', icon: 'H',  label: 'Heading' },
  { type: 'text',    icon: '¶',  label: 'Text' },
  { type: 'image',   icon: '🖼',  label: 'Image' },
  { type: 'social',  icon: '⬡',  label: 'Social Links' },
  { type: 'divider', icon: '—',  label: 'Divider' },
  { type: 'spacer',  icon: '↕',  label: 'Spacer' },
  { type: 'embed',   icon: '</>',label: 'Embed' },
] as const;

const SOCIAL_PLATFORMS = [
  'Instagram', 'Twitter/X', 'LinkedIn', 'YouTube',
  'WhatsApp', 'TikTok', 'GitHub', 'Email', 'Website',
];

const THEME_PRESETS: { label: string; theme: Theme }[] = [
  {
    label: 'Dark',
    theme: {
      background: '#0f0f14',
      foreground: '#f0eef8',
      primary: '#7553FF',
      fontFamily: 'Inter',
      borderRadius: 12,
      maxWidth: 560,
    },
  },
  {
    label: 'Light',
    theme: {
      background: '#ffffff',
      foreground: '#1a1a2e',
      primary: '#0078D4',
      fontFamily: 'Inter',
      borderRadius: 8,
      maxWidth: 560,
    },
  },
  {
    label: 'Ocean',
    theme: {
      background: 'linear-gradient(160deg, #0d1b2a 0%, #0a3d62 100%)',
      foreground: '#e8f4f8',
      primary: '#00b4d8',
      fontFamily: 'Inter',
      borderRadius: 16,
      maxWidth: 560,
    },
  },
  {
    label: 'Minimal',
    theme: {
      background: '#fafaf9',
      foreground: '#292524',
      primary: '#292524',
      fontFamily: 'Georgia',
      borderRadius: 4,
      maxWidth: 640,
    },
  },
];

const PRESET_SWATCH_COLORS = ['#0f0f14', '#ffffff', '#0a3d62', '#fafaf9'];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function defaultBlock(type: Block['type']): Block {
  switch (type) {
    case 'header':  return { id: uid(), type: 'header', name: 'Your Name', bio: 'Welcome to my page!', avatarEmoji: '😊' };
    case 'link':    return { id: uid(), type: 'link', label: 'Visit my website', url: 'https://', style: 'solid' };
    case 'heading': return { id: uid(), type: 'heading', text: 'Section Heading', level: 2, align: 'center' };
    case 'text':    return { id: uid(), type: 'text', content: 'Write something here...', align: 'center' };
    case 'image':   return { id: uid(), type: 'image', src: '', alt: '', caption: '' };
    case 'social':  return { id: uid(), type: 'social', links: [{ platform: 'Instagram', url: '' }] };
    case 'divider': return { id: uid(), type: 'divider', color: '#444455' };
    case 'spacer':  return { id: uid(), type: 'spacer', height: 32 };
    case 'embed':   return { id: uid(), type: 'embed', html: '', caption: '' };
  }
}

// ─── Block Preview Renderer ───────────────────────────────────────────────────

function BlockPreview({ block, theme }: { block: Block; theme: Theme }) {
  const radius = `${theme.borderRadius}px`;

  switch (block.type) {
    case 'header':
      return (
        <div style={{ textAlign: 'center', padding: '12px 0' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: theme.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, margin: '0 auto 10px',
          }}>
            {block.avatarEmoji}
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: theme.foreground, marginBottom: 4 }}>
            {block.name || 'Your Name'}
          </div>
          <div style={{ fontSize: 14, color: theme.foreground, opacity: 0.65 }}>
            {block.bio}
          </div>
        </div>
      );

    case 'link': {
      const base: React.CSSProperties = {
        display: 'block', width: '100%', padding: '12px 20px',
        textAlign: 'center', fontWeight: 600, fontSize: 15,
        cursor: 'pointer', transition: 'opacity .15s',
        borderRadius: radius, boxSizing: 'border-box',
      };
      const solid: React.CSSProperties = { ...base, background: theme.primary, color: '#fff', border: 'none' };
      const outline: React.CSSProperties = { ...base, background: 'transparent', color: theme.primary, border: `2px solid ${theme.primary}` };
      const ghost: React.CSSProperties = { ...base, background: 'transparent', color: theme.primary, border: 'none', textDecoration: 'underline' };
      return <button style={block.style === 'solid' ? solid : block.style === 'outline' ? outline : ghost}>{block.label || 'Link'}</button>;
    }

    case 'heading': {
      const sizes: Record<number, number> = { 1: 28, 2: 22, 3: 17 };
      return (
        <div style={{
          fontSize: sizes[block.level], fontWeight: block.level === 1 ? 800 : 700,
          color: theme.foreground, textAlign: block.align, lineHeight: 1.25,
        }}>
          {block.text}
        </div>
      );
    }

    case 'text':
      return (
        <div style={{
          fontSize: 15, lineHeight: 1.6,
          color: theme.foreground, opacity: 0.8,
          textAlign: block.align,
        }}>
          {block.content}
        </div>
      );

    case 'image':
      return (
        <div style={{ textAlign: 'center' }}>
          {block.src ? (
            <img src={block.src} alt={block.alt}
              style={{ maxWidth: '100%', borderRadius: radius }} />
          ) : (
            <div style={{
              height: 100, borderRadius: radius,
              background: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, color: theme.foreground, opacity: 0.4,
            }}>
              🖼 No image URL set
            </div>
          )}
          {block.caption && (
            <div style={{ fontSize: 12, color: theme.foreground, opacity: 0.5, marginTop: 6 }}>
              {block.caption}
            </div>
          )}
        </div>
      );

    case 'social':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {block.links.map((l, i) => (
            <div key={i} style={{
              width: 40, height: 40, borderRadius: '50%',
              background: theme.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: '#fff',
            }} title={l.platform}>
              {l.platform.slice(0, 2)}
            </div>
          ))}
          {block.links.length === 0 && (
            <span style={{ fontSize: 13, color: theme.foreground, opacity: 0.4 }}>No links added</span>
          )}
        </div>
      );

    case 'divider':
      return <hr style={{ border: 'none', borderTop: `1px solid ${block.color}`, margin: '4px 0' }} />;

    case 'spacer':
      return <div style={{ height: block.height }} />;

    case 'embed':
      return (
        <div style={{
          padding: '12px 16px', borderRadius: radius,
          background: 'rgba(255,255,255,0.05)',
          border: '1px dashed rgba(255,255,255,0.15)',
          fontSize: 13, color: theme.foreground, opacity: 0.6,
          fontFamily: 'monospace',
        }}>
          {block.html ? `Embed: ${block.html.slice(0, 40)}${block.html.length > 40 ? '…' : ''}` : 'Embed placeholder'}
        </div>
      );
  }
}

// ─── Block Properties Editor ─────────────────────────────────────────────────

function BlockEditor({
  block,
  onChange,
}: {
  block: Block;
  onChange: (updated: Block) => void;
}) {
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '8px 10px', borderRadius: 6,
    border: '1px solid var(--line-c)',
    background: 'var(--bg)', color: 'var(--fg)',
    fontSize: 13, boxSizing: 'border-box', outline: 'none',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 11, fontWeight: 600,
    color: 'var(--fg-muted)', textTransform: 'uppercase',
    letterSpacing: '0.06em', marginBottom: 4,
  };
  const fieldStyle: React.CSSProperties = { marginBottom: 14 };

  const radioGroupStyle: React.CSSProperties = {
    display: 'flex', gap: 6,
  };

  function RadioOpt({ value, current, onSelect, label }: {
    value: string; current: string; onSelect: (v: string) => void; label: string;
  }) {
    const active = value === current;
    return (
      <button
        onClick={() => onSelect(value)}
        style={{
          padding: '5px 10px', borderRadius: 5, fontSize: 12, fontWeight: 600,
          border: `1px solid ${active ? 'var(--pulse)' : 'var(--line-c)'}`,
          background: active ? 'var(--pulse)' : 'transparent',
          color: active ? '#fff' : 'var(--fg)',
          cursor: 'pointer', transition: 'all .15s',
        }}
      >
        {label}
      </button>
    );
  }

  switch (block.type) {
    case 'header':
      return (
        <>
          <div style={fieldStyle}>
            <label style={labelStyle}>Avatar Emoji</label>
            <input style={inputStyle} value={block.avatarEmoji}
              onChange={e => onChange({ ...block, avatarEmoji: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Name</label>
            <input style={inputStyle} value={block.name}
              onChange={e => onChange({ ...block, name: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Bio</label>
            <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
              value={block.bio}
              onChange={e => onChange({ ...block, bio: e.target.value })} />
          </div>
        </>
      );

    case 'link':
      return (
        <>
          <div style={fieldStyle}>
            <label style={labelStyle}>Label</label>
            <input style={inputStyle} value={block.label}
              onChange={e => onChange({ ...block, label: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>URL</label>
            <input style={inputStyle} type="url" value={block.url}
              onChange={e => onChange({ ...block, url: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Style</label>
            <div style={radioGroupStyle}>
              {(['solid', 'outline', 'ghost'] as const).map(s => (
                <RadioOpt key={s} value={s} current={block.style}
                  onSelect={v => onChange({ ...block, style: v as 'solid' | 'outline' | 'ghost' })}
                  label={s[0].toUpperCase() + s.slice(1)} />
              ))}
            </div>
          </div>
        </>
      );

    case 'heading':
      return (
        <>
          <div style={fieldStyle}>
            <label style={labelStyle}>Text</label>
            <input style={inputStyle} value={block.text}
              onChange={e => onChange({ ...block, text: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Level</label>
            <div style={radioGroupStyle}>
              {([1, 2, 3] as const).map(l => (
                <RadioOpt key={l} value={String(l)} current={String(block.level)}
                  onSelect={v => onChange({ ...block, level: Number(v) as 1|2|3 })}
                  label={`H${l}`} />
              ))}
            </div>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Align</label>
            <div style={radioGroupStyle}>
              {(['left', 'center', 'right'] as const).map(a => (
                <RadioOpt key={a} value={a} current={block.align}
                  onSelect={v => onChange({ ...block, align: v as 'left'|'center'|'right' })}
                  label={a[0].toUpperCase() + a.slice(1)} />
              ))}
            </div>
          </div>
        </>
      );

    case 'text':
      return (
        <>
          <div style={fieldStyle}>
            <label style={labelStyle}>Content</label>
            <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
              value={block.content}
              onChange={e => onChange({ ...block, content: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Align</label>
            <div style={radioGroupStyle}>
              {(['left', 'center', 'right'] as const).map(a => (
                <RadioOpt key={a} value={a} current={block.align}
                  onSelect={v => onChange({ ...block, align: v as 'left'|'center'|'right' })}
                  label={a[0].toUpperCase() + a.slice(1)} />
              ))}
            </div>
          </div>
        </>
      );

    case 'image':
      return (
        <>
          <div style={fieldStyle}>
            <label style={labelStyle}>Image URL</label>
            <input style={inputStyle} type="url" value={block.src}
              onChange={e => onChange({ ...block, src: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Alt text</label>
            <input style={inputStyle} value={block.alt}
              onChange={e => onChange({ ...block, alt: e.target.value })} />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Caption</label>
            <input style={inputStyle} value={block.caption}
              onChange={e => onChange({ ...block, caption: e.target.value })} />
          </div>
        </>
      );

    case 'social': {
      const addLink = () =>
        onChange({ ...block, links: [...block.links, { platform: 'Instagram', url: '' }] });
      const removeLink = (i: number) =>
        onChange({ ...block, links: block.links.filter((_, idx) => idx !== i) });
      const updateLink = (i: number, key: 'platform' | 'url', value: string) =>
        onChange({
          ...block,
          links: block.links.map((l, idx) => idx === i ? { ...l, [key]: value } : l),
        });
      return (
        <>
          {block.links.map((link, i) => (
            <div key={i} style={{ ...fieldStyle, display: 'flex', gap: 6, alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Platform</label>
                <select style={inputStyle} value={link.platform}
                  onChange={e => updateLink(i, 'platform', e.target.value)}>
                  {SOCIAL_PLATFORMS.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div style={{ flex: 2 }}>
                <label style={labelStyle}>URL</label>
                <input style={inputStyle} type="url" value={link.url}
                  onChange={e => updateLink(i, 'url', e.target.value)} />
              </div>
              <button onClick={() => removeLink(i)} style={{
                background: 'none', border: 'none', color: 'var(--fg-muted)',
                cursor: 'pointer', fontSize: 16, padding: '8px 4px', marginBottom: 0,
              }}>×</button>
            </div>
          ))}
          <button onClick={addLink} style={{
            padding: '7px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600,
            border: '1px solid var(--line-c)', background: 'transparent',
            color: 'var(--fg)', cursor: 'pointer',
          }}>+ Add Platform</button>
        </>
      );
    }

    case 'divider':
      return (
        <div style={fieldStyle}>
          <label style={labelStyle}>Line Color</label>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="color" value={block.color}
              onChange={e => onChange({ ...block, color: e.target.value })}
              style={{ width: 40, height: 32, padding: 2, border: '1px solid var(--line-c)', borderRadius: 6, cursor: 'pointer', background: 'none' }} />
            <input style={{ ...inputStyle, flex: 1 }} value={block.color}
              onChange={e => onChange({ ...block, color: e.target.value })} />
          </div>
        </div>
      );

    case 'spacer':
      return (
        <div style={fieldStyle}>
          <label style={labelStyle}>Height: {block.height}px</label>
          <input type="range" min={8} max={120} value={block.height}
            onChange={e => onChange({ ...block, height: Number(e.target.value) })}
            style={{ width: '100%' }} />
        </div>
      );

    case 'embed':
      return (
        <>
          <div style={fieldStyle}>
            <label style={labelStyle}>HTML / Iframe</label>
            <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 100, fontFamily: 'monospace', fontSize: 12 }}
              value={block.html}
              onChange={e => onChange({ ...block, html: e.target.value })} />
            <p style={{ fontSize: 11, color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
              ⚠ Only use trusted HTML/iframe embeds.
            </p>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Caption</label>
            <input style={inputStyle} value={block.caption}
              onChange={e => onChange({ ...block, caption: e.target.value })} />
          </div>
        </>
      );
  }
}

// ─── Theme Editor ─────────────────────────────────────────────────────────────

function ThemeEditor({ theme, onChange }: { theme: Theme; onChange: (t: Theme) => void }) {
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '8px 10px', borderRadius: 6,
    border: '1px solid var(--line-c)',
    background: 'var(--bg)', color: 'var(--fg)',
    fontSize: 13, boxSizing: 'border-box', outline: 'none',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 11, fontWeight: 600,
    color: 'var(--fg-muted)', textTransform: 'uppercase',
    letterSpacing: '0.06em', marginBottom: 4,
  };
  const fieldStyle: React.CSSProperties = { marginBottom: 16 };

  return (
    <>
      <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
        Quick Presets
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {THEME_PRESETS.map((preset, i) => (
          <button
            key={preset.label}
            title={preset.label}
            onClick={() => onChange(preset.theme)}
            style={{
              width: 32, height: 32, borderRadius: 6, cursor: 'pointer',
              background: PRESET_SWATCH_COLORS[i],
              border: '2px solid var(--line-c)',
              transition: 'transform .15s',
            }}
          />
        ))}
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Background</label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="color"
            value={theme.background.startsWith('#') ? theme.background : '#0f0f14'}
            onChange={e => onChange({ ...theme, background: e.target.value })}
            style={{ width: 40, height: 32, padding: 2, border: '1px solid var(--line-c)', borderRadius: 6, cursor: 'pointer', background: 'none' }} />
          <input style={{ ...inputStyle, flex: 1 }} value={theme.background}
            onChange={e => onChange({ ...theme, background: e.target.value })}
            placeholder="hex or CSS gradient" />
        </div>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Text Color</label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="color" value={theme.foreground}
            onChange={e => onChange({ ...theme, foreground: e.target.value })}
            style={{ width: 40, height: 32, padding: 2, border: '1px solid var(--line-c)', borderRadius: 6, cursor: 'pointer', background: 'none' }} />
          <input style={{ ...inputStyle, flex: 1 }} value={theme.foreground}
            onChange={e => onChange({ ...theme, foreground: e.target.value })} />
        </div>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Button / Primary Color</label>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="color" value={theme.primary}
            onChange={e => onChange({ ...theme, primary: e.target.value })}
            style={{ width: 40, height: 32, padding: 2, border: '1px solid var(--line-c)', borderRadius: 6, cursor: 'pointer', background: 'none' }} />
          <input style={{ ...inputStyle, flex: 1 }} value={theme.primary}
            onChange={e => onChange({ ...theme, primary: e.target.value })} />
        </div>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Font Family</label>
        <select style={inputStyle} value={theme.fontFamily}
          onChange={e => onChange({ ...theme, fontFamily: e.target.value as Theme['fontFamily'] })}>
          {(['Inter', 'Roboto', 'Georgia', 'Courier New'] as const).map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Border Radius: {theme.borderRadius}px</label>
        <input type="range" min={0} max={24} value={theme.borderRadius}
          onChange={e => onChange({ ...theme, borderRadius: Number(e.target.value) })}
          style={{ width: '100%' }} />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Max Width</label>
        <select style={inputStyle} value={theme.maxWidth}
          onChange={e => onChange({ ...theme, maxWidth: Number(e.target.value) })}>
          {[480, 560, 640, 720, 800].map(w => (
            <option key={w} value={w}>{w}px</option>
          ))}
        </select>
      </div>
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BioBuilder({
  pageId,
  workspaceId,
  accessToken,
  initialPage,
}: BioBuilderProps) {
  const [title, setTitle] = useState(initialPage.title);
  const [slug, setSlug] = useState(initialPage.slug);
  const [blocks, setBlocks] = useState<Block[]>(initialPage.config.blocks);
  const [theme, setTheme] = useState<Theme>(initialPage.config.theme);
  const [published, setPublished] = useState(initialPage.published);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // DnD state
  const dragIndexRef = useRef<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);

  // Debounced auto-save
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerSave = useCallback(
    (nextTitle: string, nextSlug: string, nextBlocks: Block[], nextTheme: Theme, nextPublished: boolean) => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      setSaveStatus('saving');
      saveTimerRef.current = setTimeout(async () => {
        try {
          const res = await fetch(`https://api.meshalive.com/v1/bio-pages/${pageId}`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'X-Workspace-ID': workspaceId,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              slug: nextSlug,
              title: nextTitle,
              config: { blocks: nextBlocks, theme: nextTheme },
              published: nextPublished,
            }),
          });
          setSaveStatus(res.ok ? 'saved' : 'error');
        } catch {
          setSaveStatus('error');
        }
      }, 1500);
    },
    [pageId, accessToken, workspaceId]
  );

  // Trigger save whenever anything changes
  useEffect(() => {
    if (saveStatus === 'idle') return; // skip on mount
    triggerSave(title, slug, blocks, theme, published);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, slug, blocks, theme, published]);

  // Mark dirty on first user interaction
  const markDirty = useCallback(() => {
    if (saveStatus === 'idle') setSaveStatus('saving');
  }, [saveStatus]);

  const updateBlocks = useCallback((next: Block[]) => {
    setBlocks(next);
    markDirty();
    triggerSave(title, slug, next, theme, published);
  }, [title, slug, theme, published, triggerSave, markDirty]);

  const updateTheme = useCallback((next: Theme) => {
    setTheme(next);
    triggerSave(title, slug, blocks, next, published);
    if (saveStatus === 'idle') setSaveStatus('saving');
  }, [title, slug, blocks, published, triggerSave, saveStatus]);

  const addBlock = (type: Block['type']) => {
    const nb = [...blocks, defaultBlock(type)];
    updateBlocks(nb);
    setTimeout(() => setSelectedId(nb[nb.length - 1].id), 0);
  };

  const deleteBlock = (id: string) => {
    updateBlocks(blocks.filter(b => b.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const updateBlock = (updated: Block) => {
    updateBlocks(blocks.map(b => b.id === updated.id ? updated : b));
  };

  const moveBlock = (from: number, to: number) => {
    if (from === to) return;
    const nb = [...blocks];
    const [item] = nb.splice(from, 1);
    nb.splice(to, 0, item);
    updateBlocks(nb);
  };

  // ── Drag handlers ──────────────────────────────────────────────────────────
  const handleDragStart = (e: React.DragEvent, index: number) => {
    dragIndexRef.current = index;
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDropIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIdx: number) => {
    e.preventDefault();
    if (dragIndexRef.current !== null) {
      moveBlock(dragIndexRef.current, dropIdx);
    }
    dragIndexRef.current = null;
    setDropIndex(null);
  };

  const handleDragEnd = () => {
    dragIndexRef.current = null;
    setDropIndex(null);
  };

  // ── Derived ────────────────────────────────────────────────────────────────
  const selectedBlock = useMemo(
    () => blocks.find(b => b.id === selectedId) ?? null,
    [blocks, selectedId]
  );

  const saveLabel = { idle: 'Saved', saving: 'Saving…', saved: 'Saved', error: 'Save failed' }[saveStatus];
  const saveColor = { idle: 'var(--fg-muted)', saving: 'var(--fg-muted)', saved: '#22c55e', error: '#f87171' }[saveStatus];

  // ── Styles ─────────────────────────────────────────────────────────────────
  const shell: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', height: '100%',
    fontFamily: 'Inter, system-ui, sans-serif',
    background: 'var(--bg)', color: 'var(--fg)',
  };

  const topBar: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '10px 20px',
    borderBottom: '1px solid var(--line-c)',
    background: 'var(--ink-2, #12101c)',
    flexShrink: 0,
  };

  const body: React.CSSProperties = {
    display: 'flex', flex: 1, overflow: 'hidden',
  };

  const leftPanel: React.CSSProperties = {
    width: 200, flexShrink: 0,
    borderRight: '1px solid var(--line-c)',
    padding: '16px 12px',
    overflowY: 'auto',
    background: 'var(--ink-2, #12101c)',
  };

  const canvas: React.CSSProperties = {
    flex: 1, overflowY: 'auto',
    padding: '24px 32px',
    background: 'var(--bg)',
  };

  const rightPanel: React.CSSProperties = {
    width: 280, flexShrink: 0,
    borderLeft: '1px solid var(--line-c)',
    padding: '16px 16px',
    overflowY: 'auto',
    background: 'var(--ink-2, #12101c)',
  };

  return (
    <div style={shell}>
      {/* Top Bar */}
      <div style={topBar}>
        <input
          value={title}
          onChange={e => { setTitle(e.target.value); triggerSave(e.target.value, slug, blocks, theme, published); setSaveStatus('saving'); }}
          style={{
            background: 'transparent', border: 'none', outline: 'none',
            color: 'var(--fg)', fontSize: 15, fontWeight: 700, minWidth: 0, flex: 1,
          }}
          placeholder="Page Title"
        />
        <span style={{ color: 'var(--fg-muted)', fontSize: 13, flexShrink: 0 }}>/p/</span>
        <input
          value={slug}
          onChange={e => { setSlug(e.target.value); triggerSave(title, e.target.value, blocks, theme, published); setSaveStatus('saving'); }}
          style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid var(--line-c)',
            borderRadius: 5, color: 'var(--fg)', fontSize: 13,
            padding: '4px 8px', outline: 'none', width: 140,
          }}
          placeholder="your-slug"
        />
        <span style={{ fontSize: 12, color: saveColor, flexShrink: 0 }}>{saveLabel}</span>
        <button
          onClick={() => {
            const next = !published;
            setPublished(next);
            triggerSave(title, slug, blocks, theme, next);
            setSaveStatus('saving');
          }}
          style={{
            padding: '6px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600,
            border: '1px solid var(--line-c)',
            background: published ? 'rgba(34,197,94,0.15)' : 'transparent',
            color: published ? '#22c55e' : 'var(--fg-muted)',
            cursor: 'pointer', flexShrink: 0,
          }}
        >
          {published ? 'Published' : 'Draft'}
        </button>
        <button
          onClick={() => window.open(`/p/${slug}`, '_blank')}
          style={{
            padding: '6px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600,
            border: '1px solid var(--pulse)',
            background: 'transparent', color: 'var(--pulse)',
            cursor: 'pointer', flexShrink: 0,
          }}
        >
          Preview ↗
        </button>
      </div>

      {/* Body */}
      <div style={body}>
        {/* Left Panel */}
        <div style={leftPanel}>
          <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Add Block
          </p>
          {BLOCK_PALETTE.map(({ type, icon, label }) => (
            <button
              key={type}
              onClick={() => addBlock(type as Block['type'])}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                width: '100%', padding: '8px 10px',
                marginBottom: 4, borderRadius: 7,
                border: '1px solid transparent',
                background: 'transparent', color: 'var(--fg)',
                cursor: 'pointer', fontSize: 13, textAlign: 'left',
                transition: 'background .12s, border-color .12s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(117,83,255,0.12)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(117,83,255,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
              }}
            >
              <span style={{ fontSize: 15, width: 20, textAlign: 'center', flexShrink: 0 }}>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Canvas */}
        <div style={canvas} onClick={() => setSelectedId(null)}>
          {blocks.length === 0 && (
            <div style={{
              textAlign: 'center', marginTop: 60,
              color: 'var(--fg-muted)', fontSize: 14,
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>✦</div>
              Click a block type on the left to start building your page.
            </div>
          )}

          {blocks.map((block, index) => {
            const isSelected = block.id === selectedId;
            const isHovered = block.id === hoveredId;
            const showDrop = dropIndex === index && dragIndexRef.current !== null && dragIndexRef.current !== index;

            return (
              <div key={block.id} style={{ position: 'relative' }}>
                {/* Drop indicator above */}
                {showDrop && (
                  <div style={{
                    height: 2, borderRadius: 2,
                    background: 'var(--pulse)',
                    margin: '0 0 4px',
                    transition: 'opacity .1s',
                  }} />
                )}

                <div
                  draggable
                  onDragStart={e => handleDragStart(e, index)}
                  onDragOver={e => handleDragOver(e, index)}
                  onDrop={e => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  onClick={e => { e.stopPropagation(); setSelectedId(block.id); }}
                  onMouseEnter={() => setHoveredId(block.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    position: 'relative',
                    display: 'flex', alignItems: 'stretch',
                    borderRadius: 8,
                    border: `1.5px solid ${isSelected ? 'var(--pulse)' : isHovered ? 'rgba(117,83,255,0.3)' : 'transparent'}`,
                    boxShadow: isSelected ? '0 0 0 3px rgba(117,83,255,0.15)' : 'none',
                    marginBottom: 8,
                    transition: 'border-color .15s, box-shadow .15s',
                    background: isSelected ? 'rgba(117,83,255,0.06)' : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {/* Drag handle */}
                  <div
                    title="Drag to reorder"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 24, flexShrink: 0, cursor: 'grab',
                      color: 'var(--fg-muted)', fontSize: 14, opacity: isHovered || isSelected ? 1 : 0,
                      transition: 'opacity .15s',
                    }}
                    onMouseDown={e => e.stopPropagation()}
                  >
                    ≡
                  </div>

                  {/* Block content */}
                  <div style={{ flex: 1, padding: '10px 12px', minWidth: 0 }}>
                    <BlockPreview block={block} theme={theme} />
                  </div>

                  {/* Controls */}
                  <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    gap: 2, padding: '4px 6px',
                    opacity: isHovered || isSelected ? 1 : 0,
                    transition: 'opacity .15s',
                  }}>
                    <button
                      title="Move up"
                      onClick={e => { e.stopPropagation(); moveBlock(index, Math.max(0, index - 1)); }}
                      disabled={index === 0}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--fg-muted)', fontSize: 12, padding: '2px 4px',
                        opacity: index === 0 ? 0.3 : 1,
                      }}
                    >▲</button>
                    <button
                      title="Move down"
                      onClick={e => { e.stopPropagation(); moveBlock(index, Math.min(blocks.length - 1, index + 1)); }}
                      disabled={index === blocks.length - 1}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--fg-muted)', fontSize: 12, padding: '2px 4px',
                        opacity: index === blocks.length - 1 ? 0.3 : 1,
                      }}
                    >▼</button>
                    <button
                      title="Delete block"
                      onClick={e => { e.stopPropagation(); deleteBlock(block.id); }}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: '#f87171', fontSize: 14, padding: '2px 4px',
                      }}
                    >×</button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Drop indicator at end */}
          {dropIndex === blocks.length && dragIndexRef.current !== null && (
            <div style={{ height: 2, borderRadius: 2, background: 'var(--pulse)' }} />
          )}
          <div
            onDragOver={e => { e.preventDefault(); setDropIndex(blocks.length); }}
            onDrop={e => handleDrop(e, blocks.length)}
            style={{ height: 40 }}
          />
        </div>

        {/* Right Panel */}
        <div style={rightPanel}>
          {selectedBlock ? (
            <>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 16,
              }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {selectedBlock.type.toUpperCase()} BLOCK
                </p>
                <button
                  onClick={() => setSelectedId(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-muted)', fontSize: 16 }}
                >
                  ×
                </button>
              </div>
              <BlockEditor block={selectedBlock} onChange={updateBlock} />
            </>
          ) : (
            <>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                Page Theme
              </p>
              <ThemeEditor theme={theme} onChange={updateTheme} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
