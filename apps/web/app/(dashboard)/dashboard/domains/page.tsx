'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { api } from '@/lib/api';
import { Domain } from '@/lib/types';
import { useToast } from '@/components/ui/toast';

const fetcher = (url: string) => api.get<{ domains: Domain[] }>(url);

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    active: 'var(--good)', pending: 'var(--fg-muted)', error: 'var(--bad)',
  };
  return (
    <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 99, background: 'var(--bg-3)', color: colors[status] || 'var(--fg-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
      {status}
    </span>
  );
}

export default function DomainsPage() {
  const { data, error, isLoading, mutate } = useSWR<{ domains: Domain[] }>('/v1/domains', fetcher);
  const [hostname, setHostname] = useState('');
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const toast = useToast();

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostname.trim()) return;
    setAdding(true);
    try {
      const domain = await api.post<Domain>('/v1/domains', { hostname: hostname.trim() });
      mutate(prev => prev ? { domains: [...prev.domains, domain] } : { domains: [domain] }, false);
      setHostname('');
      toast({ title: 'Domain added' });
    } catch (err: unknown) {
      const msg = (err as { error?: { message: string } })?.error?.message ?? 'Failed to add domain';
      toast({ title: msg, variant: 'bad' });
    } finally {
      setAdding(false);
    }
  };

  const del = async (id: string, host: string) => {
    setDeleting(id);
    try {
      await api.delete(`/v1/domains/${id}?hostname=${encodeURIComponent(host)}`);
      mutate(prev => prev ? { domains: prev.domains.filter(d => d.id !== id) } : prev, false);
      toast({ title: 'Domain removed' });
    } catch {
      toast({ title: 'Failed to remove domain', variant: 'bad' });
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div style={{ padding: '24px 32px', maxWidth: 900, margin: '0 auto' }}>
      <h1 className="display" style={{ fontSize: 28, marginBottom: 6 }}>Domains</h1>
      <p className="muted" style={{ fontSize: 13, marginBottom: 24 }}>Add custom domains to use as branded short link hosts.</p>

      <form onSubmit={add} className="card" style={{ padding: '20px 24px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label className="label">Domain hostname</label>
          <input className="input" value={hostname} onChange={e => setHostname(e.target.value)} placeholder="links.yourcompany.com" required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={adding}>
          {adding ? 'Adding...' : 'Add domain'}
        </button>
      </form>

      <div className="card" style={{ padding: '20px 24px', marginBottom: 24, background: 'var(--bg-2)', border: '1px solid var(--line-c)' }}>
        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>DNS setup instructions</div>
        <p className="muted" style={{ fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>
          Add a CNAME record pointing your domain to <code style={{ background: 'var(--bg-3)', padding: '1px 6px', borderRadius: 4, fontSize: 12 }}>redirect.meshalive.com</code>. After adding, click Verify to confirm DNS propagation.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, fontFamily: 'monospace' }}>
          <thead><tr>
            <th style={{ textAlign: 'left', color: 'var(--fg-muted)', padding: '4px 0', fontWeight: 600 }}>Type</th>
            <th style={{ textAlign: 'left', color: 'var(--fg-muted)', padding: '4px 0', fontWeight: 600 }}>Name</th>
            <th style={{ textAlign: 'left', color: 'var(--fg-muted)', padding: '4px 0', fontWeight: 600 }}>Value</th>
          </tr></thead>
          <tbody><tr>
            <td style={{ padding: '4px 0', color: 'var(--pulse)' }}>CNAME</td>
            <td style={{ padding: '4px 0' }}>@ or subdomain</td>
            <td style={{ padding: '4px 0' }}>redirect.meshalive.com</td>
          </tr></tbody>
        </table>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {isLoading && <div className="muted" style={{ padding: '40px', textAlign: 'center', fontSize: 13 }}>Loading...</div>}
        {error && <div style={{ color: 'var(--bad)', padding: '40px', textAlign: 'center', fontSize: 13 }}>Failed to load domains.</div>}
        {data?.domains.length === 0 && !isLoading && (
          <div className="muted" style={{ padding: '60px 40px', textAlign: 'center', fontSize: 13 }}>No domains added yet.</div>
        )}
        {data?.domains.map(d => (
          <div key={d.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid var(--line-c)' }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>{d.hostname}</div>
              {d.verified_at && <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>Verified {new Date(d.verified_at).toLocaleDateString()}</div>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <StatusBadge status={d.status} />
              <button className="btn btn-sm" onClick={() => del(d.id, d.hostname)} disabled={deleting === d.id}
                style={{ color: 'var(--bad)', background: 'transparent', border: '1px solid var(--bad)', opacity: deleting === d.id ? 0.5 : 1 }}>
                {deleting === d.id ? '...' : 'Remove'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
