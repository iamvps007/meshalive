'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BioPageSummary {
  id: string;
  slug: string;
  title: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function publicUrl(slug: string) {
  return `meshalive.com/p/${slug}`;
}

function fullPublicUrl(slug: string) {
  return `https://meshalive.com/p/${slug}`;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Spinner() {
  return (
    <svg
      style={{ animation: 'spin 0.8s linear infinite' }}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function StatusBadge({ published }: { published: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '3px 10px',
        borderRadius: 20,
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        background: published ? 'rgba(34,197,94,0.12)' : 'rgba(148,163,184,0.1)',
        color: published ? '#4ade80' : '#94a3b8',
        border: `1px solid ${published ? 'rgba(74,222,128,0.25)' : 'rgba(148,163,184,0.2)'}`,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: published ? '#4ade80' : '#64748b',
          flexShrink: 0,
        }}
      />
      {published ? 'Live' : 'Draft'}
    </span>
  );
}

// ---------------------------------------------------------------------------
// New Page Modal
// ---------------------------------------------------------------------------

interface NewPageModalProps {
  onClose: () => void;
  onCreated: (id: string) => void;
  token: string;
  workspaceId: string;
}

function NewPageModal({ onClose, onCreated, token, workspaceId }: NewPageModalProps) {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const slugify = (val: string) =>
    val
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

  async function handleCreate() {
    if (!title.trim() || !slug.trim()) {
      setError('Title and slug are required.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.meshalive.com/v1/bio-pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-Workspace-ID': workspaceId,
        },
        body: JSON.stringify({ slug, title }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message ?? `Error ${res.status}`);
      }
      const data = await res.json();
      onCreated(data.id);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: 'var(--surface, #1e1433)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14,
          padding: '28px 28px 24px',
          width: '100%',
          maxWidth: 420,
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        }}
      >
        <h2
          style={{
            margin: '0 0 20px',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--fg, #f0ebff)',
          }}
        >
          New Bio Page
        </h2>

        <label style={labelStyle}>
          Page Title
          <input
            style={inputStyle}
            placeholder="My Links"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (!slug) setSlug(slugify(e.target.value));
            }}
          />
        </label>

        <label style={{ ...labelStyle, marginTop: 14 }}>
          Slug — your public URL
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '0.82rem',
                color: 'rgba(240,235,255,0.3)',
                pointerEvents: 'none',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              meshalive.com/p/
            </span>
            <input
              style={{ ...inputStyle, paddingLeft: 148 }}
              placeholder="my-links"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
            />
          </div>
        </label>

        {error && (
          <p
            style={{
              margin: '12px 0 0',
              fontSize: '0.82rem',
              color: '#f87171',
            }}
          >
            {error}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 24,
            justifyContent: 'flex-end',
          }}
        >
          <button onClick={onClose} style={ghostBtnStyle}>
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={loading}
            style={{
              ...primaryBtnStyle,
              opacity: loading ? 0.6 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {loading && <Spinner />}
            {loading ? 'Creating…' : 'Create & Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared style objects
// ---------------------------------------------------------------------------

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'rgba(240,235,255,0.55)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
};

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  padding: '10px 12px',
  color: 'var(--fg, #f0ebff)',
  fontSize: '0.9rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

const primaryBtnStyle: React.CSSProperties = {
  background: '#0057ff',
  color: '#ffffff',
  border: 'none',
  borderRadius: 8,
  padding: '9px 18px',
  fontSize: '0.875rem',
  fontWeight: 600,
  cursor: 'pointer',
  lineHeight: 1,
};

const ghostBtnStyle: React.CSSProperties = {
  background: 'transparent',
  color: 'rgba(240,235,255,0.55)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 8,
  padding: '9px 16px',
  fontSize: '0.875rem',
  fontWeight: 500,
  cursor: 'pointer',
  lineHeight: 1,
};

const dangerBtnStyle: React.CSSProperties = {
  background: 'transparent',
  color: '#f87171',
  border: '1px solid rgba(248,113,113,0.25)',
  borderRadius: 7,
  padding: '7px 12px',
  fontSize: '0.8rem',
  fontWeight: 500,
  cursor: 'pointer',
  lineHeight: 1,
};

// ---------------------------------------------------------------------------
// Page card
// ---------------------------------------------------------------------------

interface PageCardProps {
  page: BioPageSummary;
  onDelete: (id: string) => void;
}

function PageCard({ page, onDelete }: PageCardProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(fullPublicUrl(page.slug)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <div
      style={{
        background: 'var(--surface, #1e1433)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'border-color 0.15s',
      }}
    >
      {/* Top row: title + badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--fg, #f0ebff)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {page.title}
          </h3>
          <button
            onClick={handleCopy}
            title="Copy URL"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontSize: '0.78rem',
              color: copied ? '#4ade80' : 'rgba(240,235,255,0.35)',
              marginTop: 4,
              display: 'block',
              transition: 'color 0.15s',
              textAlign: 'left',
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {copied ? '✓ Copied!' : publicUrl(page.slug)}
          </button>
        </div>
        <StatusBadge published={page.published} />
      </div>

      {/* Date */}
      <p
        style={{
          margin: 0,
          fontSize: '0.75rem',
          color: 'rgba(240,235,255,0.3)',
        }}
      >
        Created {fmtDate(page.createdAt)}
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <button
          onClick={() => router.push(`/dashboard/pages/${page.id}`)}
          style={{ ...primaryBtnStyle, fontSize: '0.8rem', padding: '7px 14px' }}
        >
          Edit
        </button>
        <button
          onClick={handleCopy}
          style={{ ...ghostBtnStyle, fontSize: '0.8rem', padding: '7px 12px' }}
        >
          {copied ? '✓ Copied' : 'Copy URL'}
        </button>
        <div style={{ marginLeft: 'auto' }}>
          {confirmDelete ? (
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#f87171' }}>Sure?</span>
              <button
                onClick={() => onDelete(page.id)}
                style={{ ...dangerBtnStyle, padding: '7px 10px' }}
              >
                Yes
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                style={{ ...ghostBtnStyle, padding: '7px 10px', fontSize: '0.8rem' }}
              >
                No
              </button>
            </div>
          ) : (
            <button onClick={() => setConfirmDelete(true)} style={dangerBtnStyle}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        gap: 16,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: 'rgba(196,90,57,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
        }}
      >
        🔗
      </div>
      <h2
        style={{
          margin: 0,
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--fg, #f0ebff)',
        }}
      >
        No pages yet
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: '0.9rem',
          color: 'rgba(240,235,255,0.45)',
          maxWidth: 320,
        }}
      >
        Create a bio page to share all your links in one place — perfect for Instagram, WhatsApp, and more.
      </p>
      <button onClick={onCreate} style={{ ...primaryBtnStyle, marginTop: 8, padding: '11px 24px' }}>
        Create your first page
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------

export default function BioPagesList() {
  const router = useRouter();
  const [pages, setPages] = useState<BioPageSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');

  // Read credentials from localStorage on mount
  useEffect(() => {
    const tk = localStorage.getItem('meshalive_token') ?? '';
    const ws = localStorage.getItem('meshalive_workspace') ?? '';
    if (!tk || !ws) {
      router.replace('/login');
      return;
    }
    setToken(tk);
    setWorkspaceId(ws);
  }, [router]);

  const loadPages = useCallback(async () => {
    if (!token || !workspaceId) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.meshalive.com/v1/bio-pages', {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Workspace-ID': workspaceId,
        },
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      setPages(data.pages ?? data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load pages');
    } finally {
      setLoading(false);
    }
  }, [token, workspaceId]);

  useEffect(() => {
    loadPages();
  }, [loadPages]);

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`https://api.meshalive.com/v1/bio-pages/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Workspace-ID': workspaceId,
        },
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      setPages((prev) => prev.filter((p) => p.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Delete failed');
    }
  }

  function handleCreated(newId: string) {
    setShowModal(false);
    router.push(`/dashboard/pages/${newId}`);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg, #181225)',
        color: 'var(--fg, #f0ebff)',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          marginInline: 'auto',
          padding: '40px 24px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 32,
            gap: 16,
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--fg, #f0ebff)',
              }}
            >
              Bio Pages
            </h1>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: '0.875rem',
                color: 'rgba(240,235,255,0.45)',
              }}
            >
              All your links, one shareable URL.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{
              ...primaryBtnStyle,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 20px',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>+</span>
            New Page
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 0',
              color: 'rgba(240,235,255,0.35)',
              gap: 10,
            }}
          >
            <Spinner />
            <span style={{ fontSize: '0.9rem' }}>Loading pages…</span>
          </div>
        ) : error ? (
          <div
            style={{
              background: 'rgba(248,113,113,0.08)',
              border: '1px solid rgba(248,113,113,0.2)',
              borderRadius: 10,
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#f87171' }}>{error}</p>
            <button onClick={loadPages} style={ghostBtnStyle}>
              Retry
            </button>
          </div>
        ) : pages.length === 0 ? (
          <EmptyState onCreate={() => setShowModal(true)} />
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 16,
            }}
          >
            {pages.map((page) => (
              <PageCard key={page.id} page={page} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>

      {/* New page modal */}
      {showModal && (
        <NewPageModal
          token={token}
          workspaceId={workspaceId}
          onClose={() => setShowModal(false)}
          onCreated={handleCreated}
        />
      )}
    </div>
  );
}
