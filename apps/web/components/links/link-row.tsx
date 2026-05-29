'use client';
import { useState, useRef, useEffect } from 'react';
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

  const btnRef = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });

  const openMenu = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setMenuPos({ top: r.bottom + 4, right: window.innerWidth - r.right });
    }
    setMenuOpen(true);
  };

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = () => setMenuOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const cols = '28px 1fr 1.4fr 110px 130px 36px';
  return (
    <div className="t-row" style={{ gridTemplateColumns: cols, opacity: link.archived ? 0.5 : 1 }}>
      <Favicon host={destHost} size={20} />
      <div>
        <div className="row gap-6 center">
          <a
            href={`https://msha.live/${link.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mono"
            style={{ fontSize: 13, fontWeight: 600, color: '#0057ff', textDecoration: 'none' }}
          >
            msha.live/{link.slug}
          </a>
          <button className="btn btn-ghost btn-icon" style={{ width: 24, height: 24, outline: 'none' }} onClick={copy}>
            <Icon name={copied ? 'check' : 'copy'} size={13} style={{ color: copied ? 'var(--good)' : '#6b7280' }} />
          </button>
        </div>
        {link.title && <div style={{ fontSize: 12, marginTop: 1, color: '#6b7280' }}>{link.title}</div>}
      </div>
      <div style={{ fontSize: 12, color: '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {link.destination}
      </div>
      <div className="row gap-4">
        {link.tags?.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
      <div style={{ fontSize: 12, color: '#6b7280' }}>
        {new Date(link.created_at).toLocaleDateString()}
      </div>
      <div>
        <button
          ref={btnRef}
          className="btn btn-ghost btn-icon btn-sm"
          style={{ outline: 'none', border: '1px solid transparent' }}
          onClick={e => { e.stopPropagation(); openMenu(); }}
        >
          <Icon name="more" size={16} />
        </button>
        {menuOpen && (
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: menuPos.top,
              right: menuPos.right,
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: 4,
              zIndex: 9999,
              minWidth: 160,
              boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
            }}>
            <button className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '0 12px', gap: 10, color: '#374151' }} onClick={() => { archive(); setMenuOpen(false); }}>
              <Icon name="archive" size={14} /> {link.archived ? 'Restore' : 'Archive'}
            </button>
            <button className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '0 12px', gap: 10, color: '#ef4444' }} onClick={() => { del(); setMenuOpen(false); }}>
              <Icon name="trash" size={14} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
