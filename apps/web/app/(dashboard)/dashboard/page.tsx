'use client';
import { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { api } from '@/lib/api';
import { WorkspaceAnalytics } from '@/lib/types';

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const HAIR2 = 'rgba(229,221,208,0.5)';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';
const ACCENT_SOFT = '#eff6ff';
const GOOD = '#2f7a55';

const fetcher = (url: string) => api.get<WorkspaceAnalytics>(url);

function KpiCard({ label, value, delta, deltaUp }: { label: string; value: string | number; delta?: string; deltaUp?: boolean }) {
  return (
    <div style={{
      padding: '20px 22px', background: '#ffffff',
      border: `1px solid ${HAIR}`, borderRadius: 12,
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: MUTED, fontFamily: '"Geist Mono", monospace', marginBottom: 10 }}>{label}</div>
      <div style={{ fontSize: 32, fontWeight: 400, fontFamily: 'Geist, sans-serif', letterSpacing: '-0.02em', color: INK, lineHeight: 1 }}>{value}</div>
      {delta && (
        <div style={{ fontSize: 12, marginTop: 8, color: deltaUp ? GOOD : '#c0392b' }}>{delta}</div>
      )}
    </div>
  );
}

function AreaChart({ data }: { data: { day: string; clicks: number }[] }) {
  if (!data || data.length < 2) return (
    <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: MUTED, fontSize: 13 }}>
      No click data yet — create some links and share them.
    </div>
  );
  const W = 800, H = 200, PAD = 8;
  const max = Math.max(...data.map(d => d.clicks), 1);
  const pts = data.map((d, i) => {
    const x = PAD + (i / Math.max(data.length - 1, 1)) * (W - PAD * 2);
    const y = H - PAD - ((d.clicks / max) * (H - PAD * 2));
    return [x, y] as [number, number];
  });
  const linePath = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const fillPath = `${linePath} L${W - PAD},${H} L${PAD},${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 200, display: 'block' }}>
      <defs>
        <linearGradient id="agrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.18" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((y, i) => (
        <line key={i} x1="0" x2={W} y1={H * y} y2={H * y} stroke={HAIR} strokeDasharray="3 5" />
      ))}
      <path d={fillPath} fill="url(#agrad)" />
      <path d={linePath} fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function TopLinksTable({ links }: { links: { id: string; slug: string; title?: string; clicks: number }[] }) {
  if (!links?.length) return (
    <div style={{ padding: '32px 0', textAlign: 'center', color: MUTED, fontSize: 13 }}>No links yet.</div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {links.slice(0, 5).map((l, i) => (
        <div key={l.id} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 0', borderTop: i > 0 ? `1px solid ${HAIR2}` : 'none',
          fontSize: 14,
        }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 13 }}>
              <span style={{ color: MUTED }}>msha.live/</span>
              <span style={{ color: ACCENT_INK }}>{l.slug}</span>
            </div>
            {l.title && <div style={{ fontSize: 12, color: MUTED, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title}</div>}
          </div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 14, color: INK, fontWeight: 500, marginLeft: 24, flexShrink: 0 }}>
            {l.clicks.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const { data, isLoading } = useSWR<WorkspaceAnalytics>(`/v1/analytics/summary?period=${period}`, fetcher);

  const RANGE_OPTS = ['7d', '30d', '90d'] as const;

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1100, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: INK, margin: '0 0 4px', letterSpacing: '-0.02em' }}>Overview</h1>
          <div style={{ fontSize: 13, color: MUTED }}>Here&apos;s what your links are doing.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: PAPER2, border: `1px solid ${HAIR}`, borderRadius: 10, padding: 4 }}>
          {RANGE_OPTS.map(r => (
            <button key={r} onClick={() => setPeriod(r)} style={{
              padding: '6px 12px', borderRadius: 7, border: 'none', cursor: 'pointer', fontSize: 13,
              background: period === r ? '#ffffff' : 'transparent',
              color: period === r ? INK : MUTED,
              boxShadow: period === r ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 120ms', fontFamily: 'inherit',
            }}>{r}</button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: MUTED, fontSize: 13 }}>Loading analytics…</div>
      )}

      {data && (
        <>
          {/* KPI cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
            <KpiCard label="Total clicks" value={data.summary.total_clicks.toLocaleString()} delta={`+${data.summary.clicks_week.toLocaleString()} this week`} deltaUp />
            <KpiCard label="Active links" value={data.summary.total_links.toLocaleString()} />
            <KpiCard label="Today" value={data.summary.clicks_today.toLocaleString()} />
            <KpiCard label="This week" value={data.summary.clicks_week.toLocaleString()} deltaUp />
          </div>

          {/* Area chart */}
          <div style={{ background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 12, padding: '22px 24px', marginBottom: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: MUTED, fontFamily: '"Geist Mono", monospace' }}>Clicks over time</div>
                <div style={{ fontSize: 12, color: MUTED, marginTop: 3 }}>Updated a few minutes ago</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: MUTED }}>
                <span style={{ width: 10, height: 2, background: ACCENT, display: 'inline-block', borderRadius: 1 }} />
                Clicks
              </div>
            </div>
            <AreaChart data={data.clicks_by_day} />
          </div>

          {/* Bottom grid: top links + geo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
            <div style={{ background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 12, padding: '22px 24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: MUTED, fontFamily: '"Geist Mono", monospace' }}>Top links</div>
                <Link href="/dashboard/links" style={{ fontSize: 12, color: ACCENT_INK, textDecoration: 'none', fontWeight: 500 }}>View all →</Link>
              </div>
              <TopLinksTable links={data.top_links || []} />
            </div>

            <div style={{ background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 12, padding: '22px 24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: MUTED, fontFamily: '"Geist Mono", monospace', marginBottom: 16 }}>Top countries</div>
              {!data.countries?.length ? (
                <div style={{ padding: '20px 0', textAlign: 'center', color: MUTED, fontSize: 13 }}>No geo data yet.</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {data.countries.slice(0, 6).map(c => {
                    const max = Math.max(...data.countries.map(x => x.clicks), 1);
                    const pct = Math.round((c.clicks / max) * 100);
                    return (
                      <div key={c.country}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                          <span style={{ color: INK }}>{c.country || 'Unknown'}</span>
                          <span style={{ color: MUTED, fontFamily: '"Geist Mono", monospace', fontSize: 12 }}>{c.clicks.toLocaleString()}</span>
                        </div>
                        <div style={{ height: 4, background: PAPER2, borderRadius: 999, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${pct}%`, background: ACCENT, borderRadius: 999 }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {!isLoading && !data && (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: 40, fontFamily: 'Geist, sans-serif', color: INK, marginBottom: 12 }}>Welcome to meshalive</div>
          <div style={{ fontSize: 14, color: MUTED, marginBottom: 24 }}>Create your first short link to see analytics here.</div>
          <Link href="/dashboard/links" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '12px 22px', borderRadius: 999,
            background: INK, color: '#ffffff',
            fontSize: 14, fontWeight: 500, textDecoration: 'none',
          }}>Create first link</Link>
        </div>
      )}
    </div>
  );
}
