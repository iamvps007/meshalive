'use client';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { Favicon } from '@/components/ui/favicon';
import { Link } from '@/lib/types';
import { api } from '@/lib/api';
import { useToast } from '@/components/ui/toast';

interface Props { link: Link; onDeleted: (id: string) => void; onUpdated: (link: Link) => void; }

export function LinkRow({ link, onDeleted, onUpdated }: Props) {
  const toast = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const destHost = (() => { try { return new URL(link.destination).hostname; } catch { return link.destination; } })();

  const copy = () => {
    if (link.short_url) navigator.clipboard.writeText(link.short_url);
    setCopied(true);
    toast({ title: 'Copied to clipboard.' });
    setTimeout(() => setCopied(false), 1600);
  };

  const archive = async () => {
    try {
      const updated = await api.patch<Link>(`/v1/links/${link.id}`, {
        destination: link.destination,
        title: link.title,
        tags: link.tags,
        archived: !link.archived,
      });
      onUpdated(updated);
      toast({ title: link.archived ? 'Link restored.' : 'Link archived.' });
    } catch { toast({ title: 'Failed to archive.', variant: 'bad' }); }
  };

  const del = async () => {
    if (!confirm('Delete this link? This cannot be undone.')) return;
    try {
      await api.delete(`/v1/links/${link.id}`);
      onDeleted(link.id);
      toast({ title: 'Link deleted.', variant: 'bad' });
    } catch { toast({ title: 'Failed to delete.', variant: 'bad' }); }
  };

  const cols = '28px 1fr 1.4fr auto 140px 36px';
  return (
    <div className="t-row" style={{ gridTemplateColumns: cols, opacity: link.archived ? 0.5 : 1 }}>
      <Favicon host={destHost} size={20} />
      <div>
        <div className="row gap-6 center">
          <span className="mono" style={{ fontSize: 13, fontWeight: 600 }}>
            {link.short_url ?? `/${link.slug}`}
          </span>
          <button className="btn btn-ghost btn-icon" style={{ width: 24, height: 24 }} onClick={copy}>
            <Icon name={copied ? 'check' : 'copy'} size={13} style={{ color: copied ? 'var(--good)' : undefined }} />
          </button>
        </div>
        {link.title && <div className="muted" style={{ fontSize: 12, marginTop: 1 }}>{link.title}</div>}
      </div>
      <div className="muted" style={{ fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {link.destination}
      </div>
      <div className="row gap-4">
        {link.tags?.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
      <div className="muted" style={{ fontSize: 12 }}>
        {new Date(link.created_at).toLocaleDateString()}
      </div>
      <div style={{ position: 'relative' }}>
        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setMenuOpen(v => !v)}>
          <Icon name="more" size={16} />
        </button>
        {menuOpen && (
          <div style={{ position: 'absolute', right: 0, top: '100%', background: 'var(--bg-2)', border: '1px solid var(--line-c)', borderRadius: 10, padding: 4, zIndex: 50, minWidth: 160, boxShadow: 'var(--shadow-pop)' }}
               onMouseLeave={() => setMenuOpen(false)}>
            <button className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '0 12px', gap: 10 }} onClick={() => { archive(); setMenuOpen(false); }}>
              <Icon name="archive" size={14} /> {link.archived ? 'Restore' : 'Archive'}
            </button>
            <button className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '0 12px', gap: 10, color: 'var(--bad)' }} onClick={() => { del(); setMenuOpen(false); }}>
              <Icon name="trash" size={14} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
