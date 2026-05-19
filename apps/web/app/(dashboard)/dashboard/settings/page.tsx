'use client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { api } from '@/lib/api';
import { WorkspaceSettings, APIToken } from '@/lib/types';
import { useToast } from '@/components/ui/toast';

const wsFetcher = (url: string) => api.get<WorkspaceSettings>(url);
const tokensFetcher = (url: string) => api.get<{ tokens: APIToken[] }>(url);

export default function SettingsPage() {
  const toast = useToast();
  const { data: ws, mutate: mutateWs } = useSWR<WorkspaceSettings>('/v1/workspace', wsFetcher);
  const { data: tokensData, mutate: mutateTokens } = useSWR<{ tokens: APIToken[] }>('/v1/tokens', tokensFetcher);

  const [name, setName] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [savingWs, setSavingWs] = useState(false);
  const [newTokenName, setNewTokenName] = useState('');
  const [creatingToken, setCreatingToken] = useState(false);
  const [newToken, setNewToken] = useState<APIToken | null>(null);
  const [deletingToken, setDeletingToken] = useState<string | null>(null);

  useEffect(() => {
    if (ws) {
      setName(ws.name ?? '');
      setBillingEmail(ws.billing_email ?? '');
    }
  }, [ws]);

  const saveWorkspace = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingWs(true);
    try {
      const updated = await api.patch<WorkspaceSettings>('/v1/workspace', {
        name: name || undefined,
        billing_email: billingEmail || undefined,
      });
      mutateWs(updated, false);
      toast({ title: 'Settings saved', variant: 'info' });
    } catch {
      toast({ title: 'Failed to save settings', variant: 'bad' });
    } finally {
      setSavingWs(false);
    }
  };

  const createToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTokenName.trim()) return;
    setCreatingToken(true);
    try {
      const token = await api.post<APIToken>('/v1/tokens', { name: newTokenName.trim() });
      setNewToken(token);
      mutateTokens(prev => prev ? { tokens: [token, ...prev.tokens] } : { tokens: [token] }, false);
      setNewTokenName('');
    } catch {
      toast({ title: 'Failed to create token', variant: 'bad' });
    } finally {
      setCreatingToken(false);
    }
  };

  const revokeToken = async (id: string) => {
    setDeletingToken(id);
    try {
      await api.delete(`/v1/tokens/${id}`);
      mutateTokens(prev => prev ? { tokens: prev.tokens.filter(t => t.id !== id) } : prev, false);
      toast({ title: 'Token revoked', variant: 'info' });
    } catch {
      toast({ title: 'Failed to revoke token', variant: 'bad' });
    } finally {
      setDeletingToken(null);
    }
  };

  return (
    <div style={{ padding: '24px 32px', maxWidth: 700, margin: '0 auto' }}>
      <h1 className="display" style={{ fontSize: 28, marginBottom: 24 }}>Settings</h1>

      {/* Workspace */}
      <section className="card" style={{ padding: '24px', marginBottom: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, marginTop: 0 }}>Workspace</h2>
        <form onSubmit={saveWorkspace} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label className="label">Workspace name</label>
            <input className="input" value={name} onChange={e => setName(e.target.value)} placeholder="My Company" />
          </div>
          <div>
            <label className="label">Billing email</label>
            <input className="input" type="email" value={billingEmail} onChange={e => setBillingEmail(e.target.value)} placeholder="billing@example.com" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button className="btn btn-primary" type="submit" disabled={savingWs}>
              {savingWs ? 'Saving...' : 'Save changes'}
            </button>
            {ws && <span className="muted" style={{ fontSize: 12 }}>Plan: <strong>{ws.plan}</strong> · {ws.currency}</span>}
          </div>
        </form>
      </section>

      {/* API Tokens */}
      <section className="card" style={{ padding: '24px', marginBottom: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, marginTop: 0 }}>API tokens</h2>
        <p className="muted" style={{ fontSize: 13, marginBottom: 16 }}>Tokens give programmatic access to your workspace. They are shown once on creation.</p>

        {newToken && (
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--good)', borderRadius: 8, padding: '12px 16px', marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--good)', marginBottom: 6 }}>Token created — copy it now, it won&apos;t be shown again</div>
            <code style={{ fontSize: 12, wordBreak: 'break-all', background: 'var(--bg-3)', padding: '6px 10px', borderRadius: 4, display: 'block' }}>
              {newToken.raw_token}
            </code>
            <button className="btn btn-sm" onClick={() => setNewToken(null)} style={{ marginTop: 8, fontSize: 12 }}>Dismiss</button>
          </div>
        )}

        <form onSubmit={createToken} style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <input className="input" style={{ flex: 1 }} value={newTokenName} onChange={e => setNewTokenName(e.target.value)} placeholder="Token name (e.g. CI/CD)" />
          <button className="btn btn-primary" type="submit" disabled={creatingToken}>
            {creatingToken ? 'Creating...' : 'Create token'}
          </button>
        </form>

        <div style={{ borderTop: '1px solid var(--line-c)' }}>
          {tokensData?.tokens.length === 0 && (
            <div className="muted" style={{ padding: '20px 0', textAlign: 'center', fontSize: 13 }}>No tokens yet.</div>
          )}
          {tokensData?.tokens.map(t => (
            <div key={t.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line-c)' }}>
              <div>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{t.name}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>
                  <code>{t.prefix}...</code>
                  {t.last_used_at ? ` · Last used ${new Date(t.last_used_at).toLocaleDateString()}` : ' · Never used'}
                </div>
              </div>
              <button className="btn btn-sm" onClick={() => revokeToken(t.id)} disabled={deletingToken === t.id}
                style={{ color: 'var(--bad)', background: 'transparent', border: '1px solid var(--bad)', opacity: deletingToken === t.id ? 0.5 : 1 }}>
                {deletingToken === t.id ? '...' : 'Revoke'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
