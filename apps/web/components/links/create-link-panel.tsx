'use client';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { api } from '@/lib/api';
import { Link } from '@/lib/types';
import { useToast } from '@/components/ui/toast';

interface Props { open: boolean; onClose: () => void; onCreate: (link: Link) => void; }

export function CreateLinkPanel({ open, onClose, onCreate }: Props) {
  const toast = useToast();
  const [destination, setDestination] = useState('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [tagsRaw, setTagsRaw] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = () => { setDestination(''); setTitle(''); setSlug(''); setTagsRaw(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const link = await api.post<Link>('/v1/links', {
        destination,
        title: title || undefined,
        slug: slug || undefined,
        tags: tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [],
      });
      toast({ title: 'Short link created — copied to clipboard.' });
      if (link.short_url) navigator.clipboard.writeText(link.short_url).catch(() => {});
      onCreate(link);
      reset();
      onClose();
    } catch (err: unknown) {
      const msg = (err as { error?: { message: string } })?.error?.message ?? 'Failed to create link';
      toast({ title: msg, variant: 'bad' });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <>
      <div className="panel-backdrop" onClick={onClose} />
      <div className="side-panel">
        <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid var(--line-c)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 className="display" style={{ fontSize: 18, margin: 0 }}>New short link</h2>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><Icon name="x" size={16} /></button>
        </div>
        <form onSubmit={handleSubmit} style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label className="label">Destination URL *</label>
            <input className="input" type="url" value={destination} onChange={e => setDestination(e.target.value)} placeholder="https://example.com/your-long-link" required autoFocus />
          </div>
          <div>
            <label className="label">Title (optional)</label>
            <input className="input" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Summer sale campaign" />
          </div>
          <div>
            <label className="label">Custom slug (optional)</label>
            <input className="input" type="text" value={slug} onChange={e => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))} placeholder="e.g. summer-sale" />
            <p className="muted" style={{ fontSize: 12, marginTop: 4 }}>Leave blank to auto-generate.</p>
          </div>
          <div>
            <label className="label">Tags (comma separated)</label>
            <input className="input" type="text" value={tagsRaw} onChange={e => setTagsRaw(e.target.value)} placeholder="e.g. marketing, q4, india" />
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 8 }}>
            <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Creating…' : 'Create short link'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
