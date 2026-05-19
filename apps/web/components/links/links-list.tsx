'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { Icon } from '@/components/ui/icon';
import { LinkRow } from './link-row';
import { CreateLinkPanel } from './create-link-panel';
import { api } from '@/lib/api';
import { Link, ListLinksResponse } from '@/lib/types';

const fetcher = (url: string) => api.get<ListLinksResponse>(url);

export function LinksList() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'archived'>('active');
  const [page, setPage] = useState(1);

  const params: Record<string, string> = { search, page: String(page), page_size: '20' };
  if (filter !== 'all') params.archived = filter === 'archived' ? 'true' : 'false';
  const query = new URLSearchParams(params);
  const { data, error, isLoading, mutate } = useSWR<ListLinksResponse>(
    `/v1/links?${query}`,
    fetcher,
    { keepPreviousData: true }
  );

  const handleCreated = (link: Link) => {
    mutate(prev => prev ? { ...prev, links: [link, ...prev.links], total_count: prev.total_count + 1 } : prev, false);
  };
  const handleDeleted = (id: string) => {
    mutate(prev => prev ? { ...prev, links: prev.links.filter(l => l.id !== id), total_count: prev.total_count - 1 } : prev, false);
  };
  const handleUpdated = (updated: Link) => {
    mutate(prev => prev ? { ...prev, links: prev.links.map(l => l.id === updated.id ? updated : l) } : prev, false);
  };

  const cols = '28px 1fr 1.4fr auto 140px 36px';

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="row between" style={{ marginBottom: 24 }}>
        <div>
          <h1 className="display" style={{ fontSize: 28, margin: 0 }}>Links</h1>
          <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
            {data ? `${data.total_count} link${data.total_count !== 1 ? 's' : ''}` : '…'}
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setPanelOpen(true)}>
          <Icon name="plus" size={16} /> New link
        </button>
      </div>

      <div className="row gap-12" style={{ marginBottom: 16 }}>
        <div style={{ position: 'relative', flex: '0 0 300px' }}>
          <Icon name="search" size={15} style={{ position: 'absolute', left: 11, top: 12, color: 'var(--fg-muted)' }} />
          <input className="input" style={{ paddingLeft: 34 }} placeholder="Search links, destinations…"
            value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} />
        </div>
        <div className="row gap-4">
          {(['all', 'active', 'archived'] as const).map(f => (
            <button key={f} onClick={() => { setFilter(f); setPage(1); }} className="btn btn-sm"
              style={{ background: filter === f ? 'var(--bg-3)' : 'transparent', color: filter === f ? 'var(--fg)' : 'var(--fg-muted)', border: `1px solid ${filter === f ? 'var(--line-c)' : 'transparent'}`, textTransform: 'capitalize' }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="t-head" style={{ gridTemplateColumns: cols }}>
          <span />
          <span>Short link</span>
          <span>Destination</span>
          <span>Tags</span>
          <span>Created</span>
          <span />
        </div>

        {isLoading && (
          <div style={{ padding: '60px 40px', textAlign: 'center', color: 'var(--fg-muted)' }}>Loading…</div>
        )}
        {error && (
          <div style={{ padding: '60px 40px', textAlign: 'center', color: 'var(--bad)' }}>Failed to load links.</div>
        )}
        {data?.links.length === 0 && !isLoading && (
          <div style={{ padding: '80px 40px', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, margin: '0 auto 16px', background: 'var(--bg-3)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-muted)' }}>
              <Icon name="link" size={28} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>
              {search ? 'No matches.' : 'No links yet.'}
            </div>
            {!search && (
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 8 }} onClick={() => setPanelOpen(true)}>
                Create your first link
              </button>
            )}
          </div>
        )}
        {data?.links.map(link => (
          <LinkRow key={link.id} link={link} onDeleted={handleDeleted} onUpdated={handleUpdated} />
        ))}
      </div>

      {data && data.total_count > 20 && (
        <div className="row gap-8 center" style={{ marginTop: 16, justifyContent: 'center' }}>
          <button className="btn btn-secondary btn-sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
            <Icon name="arrow-left" size={14} /> Prev
          </button>
          <span className="muted" style={{ fontSize: 13 }}>Page {page} of {Math.ceil(data.total_count / 20)}</span>
          <button className="btn btn-secondary btn-sm" onClick={() => setPage(p => p + 1)} disabled={page * 20 >= data.total_count}>
            Next <Icon name="arrow-right" size={14} />
          </button>
        </div>
      )}

      <CreateLinkPanel open={panelOpen} onClose={() => setPanelOpen(false)} onCreate={handleCreated} />
    </div>
  );
}
