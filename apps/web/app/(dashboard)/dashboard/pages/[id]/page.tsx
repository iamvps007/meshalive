'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import BioBuilder from './BioBuilder';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

// Reuse the same BioPage shape expected by BioBuilder
interface BioPage {
  id: string;
  slug: string;
  title: string;
  published: boolean;
  config: unknown; // BioBuilder owns the full typing
}

// ---------------------------------------------------------------------------
// Loader page
// ---------------------------------------------------------------------------

export default function BioBuilderPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [page, setPage] = useState<BioPage | null>(null);
  const [token, setToken] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const tk = localStorage.getItem('meshalive_token') ?? '';
    const ws = localStorage.getItem('meshalive_workspace') ?? '';

    if (!tk || !ws) {
      router.replace('/login');
      return;
    }

    setToken(tk);
    setWorkspaceId(ws);

    fetch(`https://api.meshalive.com/v1/bio-pages/${params.id}`, {
      headers: {
        Authorization: `Bearer ${tk}`,
        'X-Workspace-ID': ws,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.message ?? `Error ${res.status}`);
        }
        return res.json() as Promise<BioPage>;
      })
      .then(setPage)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : 'Failed to load page')
      );
  }, [params.id, router]);

  // Loading state
  if (!page && !error) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: 'var(--bg, #181225)',
          color: 'rgba(240,235,255,0.4)',
          fontFamily: 'Inter, system-ui, sans-serif',
          gap: 12,
          flexDirection: 'column',
        }}
      >
        <svg
          style={{ animation: 'spin 0.8s linear infinite' }}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
        >
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
        <span style={{ fontSize: '0.875rem' }}>Loading builder…</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: 'var(--bg, #181225)',
          fontFamily: 'Inter, system-ui, sans-serif',
          flexDirection: 'column',
          gap: 16,
          padding: 24,
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#f87171' }}>{error}</p>
        <button
          onClick={() => router.push('/dashboard/pages')}
          style={{
            background: 'transparent',
            color: 'rgba(240,235,255,0.55)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: '9px 16px',
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
        >
          ← Back to Pages
        </button>
      </div>
    );
  }

  return (
    <BioBuilder
      pageId={params.id}
      workspaceId={workspaceId}
      accessToken={token}
      initialPage={page as any}
    />
  );
}
