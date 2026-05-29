'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { api } from '@/lib/api';
import { WorkspaceAnalytics } from '@/lib/types';

const INK = '#111111';
const MUTED = '#6b7280';
const HAIR = '#e5e7eb';
const HAIR2 = 'rgba(229,221,208,0.5)';
const PAPER2 = '#f9fafb';
const ACCENT = '#0057ff';
const ACCENT_INK = '#003dc4';

const fetcher = (url: string) => api.get<WorkspaceAnalytics>(url);

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: '#ffffff', border: `1px solid ${HAIR}`, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', ...style }}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: MUTED, fontFamily: '"Geist Mono", monospace', marginBottom: 16 }}>
      {children}
    </div>
  );
}

function AreaChart({ data }: { data: { day: string; clicks: number }[] }) {
  if (!data || data.length < 2) return (
    <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: MUTED, fontSize: 13 }}>No click data yet.</div>
  );
  const W = 800, H = 240, PAD = 8;
  const max = Math.max(...data.map(d => d.clicks), 1);
  const pts = data.map((d, i) => {
    const x = PAD + (i / Math.max(data.length - 1, 1)) * (W - PAD * 2);
    const y = H - PAD - ((d.clicks / max) * (H - PAD * 2));
    return [x, y] as [number, number];
  });
  const linePath = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const fillPath = `${linePath} L${W - PAD},${H} L${PAD},${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 240, display: 'block' }}>
      <defs>
        <linearGradient id="ag2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.18" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((y, i) => (
        <line key={i} x1="0" x2={W} y1={H * y} y2={H * y} stroke={HAIR} strokeDasharray="3 5" />
      ))}
      <path d={fillPath} fill="url(#ag2)" />
      <path d={linePath} fill="none" stroke={ACCENT} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function HorizontalBars({ items }: { items: { label: string; value: number; pct: number }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map(item => (
        <div key={item.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
            <span style={{ color: INK }}>{item.label}</span>
            <span style={{ color: MUTED, fontFamily: '"Geist Mono", monospace', fontSize: 12 }}>{item.value.toLocaleString()} · {item.pct}%</span>
          </div>
          <div style={{ height: 5, background: PAPER2, borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${item.pct}%`, background: ACCENT, borderRadius: 999 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ items }: { items: { label: string; pct: number; color: string }[] }) {
  const size = 160;
  const r = size / 2 - 14;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flexShrink: 0 }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={PAPER2} strokeWidth="16" />
        {items.map((it, i) => {
          const len = (it.pct / 100) * c;
          const el = (
            <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke={it.color} strokeWidth="16"
              strokeDasharray={`${len} ${c}`} strokeDashoffset={-offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`} />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div key={it.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: INK }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: it.color, flexShrink: 0 }} />
              {it.label}
            </span>
            <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 12, color: MUTED }}>{it.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const { data, isLoading, error } = useSWR<WorkspaceAnalytics>(
    `/v1/analytics/summary?period=${period}`, fetcher
  );

  const RANGE_OPTS = ['7d', '30d', '90d'] as const;

  const deviceColors = [ACCENT, ACCENT_INK, '#d9a387', '#b5a695', '#6b7280'];
  const deviceItems = data?.devices?.map((d, i) => {
    const total = (data.devices ?? []).reduce((s, x) => s + x.clicks, 0);
    const pct = total > 0 ? Math.round((d.clicks / total) * 100) : 0;
    return { label: d.device, pct, color: deviceColors[i % deviceColors.length] };
  }) || [];

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1100, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: INK, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Where your clicks come from.
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
      </div>

      {isLoading && <div style={{ textAlign: 'center', padding: '60px 0', color: MUTED, fontSize: 13 }}>Loading analytics…</div>}
      {error && <div style={{ color: '#c0392b', textAlign: 'center', padding: '60px 0' }}>Failed to load analytics.</div>}

      {data && (
        <>
          {/* Summary cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
            {[
              { label: 'Total clicks', value: data.summary.total_clicks.toLocaleString() },
              { label: 'Total links', value: data.summary.total_links.toLocaleString() },
              { label: 'Today', value: data.summary.clicks_today.toLocaleString() },
              { label: 'This week', value: data.summary.clicks_week.toLocaleString() },
            ].map(kpi => (
              <Card key={kpi.label} style={{ padding: '18px 22px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: MUTED, fontFamily: '"Geist Mono", monospace', marginBottom: 8 }}>{kpi.label}</div>
                <div style={{ fontSize: 30, fontWeight: 400, fontFamily: 'Geist, sans-serif', letterSpacing: '-0.02em', color: INK }}>{kpi.value}</div>
              </Card>
            ))}
          </div>

          {/* Area chart */}
          <Card style={{ padding: '22px 24px', marginBottom: 20 }}>
            <Eyebrow>Click volume</Eyebrow>
            <AreaChart data={data.clicks_by_day} />
          </Card>

          {/* Geo + Devices + Referrers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
            <Card style={{ padding: '22px 24px' }}>
              <Eyebrow>By country</Eyebrow>
              {!data.countries?.length ? (
                <div style={{ color: MUTED, fontSize: 13 }}>No data yet.</div>
              ) : (
                <HorizontalBars items={data.countries.slice(0, 6).map(c => {
                  const max = Math.max(...data.countries.map(x => x.clicks), 1);
                  return { label: c.country || 'Unknown', value: c.clicks, pct: Math.round((c.clicks / max) * 100) };
                })} />
              )}
            </Card>

            <Card style={{ padding: '22px 24px' }}>
              <Eyebrow>By device</Eyebrow>
              {deviceItems.length === 0 ? (
                <div style={{ color: MUTED, fontSize: 13 }}>No device data yet.</div>
              ) : (
                <DonutChart items={deviceItems} />
              )}
            </Card>

            <Card style={{ padding: '22px 24px' }}>
              <Eyebrow>Top links</Eyebrow>
              {!data.top_links?.length ? (
                <div style={{ color: MUTED, fontSize: 13 }}>No link data yet.</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {data.top_links.slice(0, 5).map((l, i) => (
                    <div key={l.id} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      paddingTop: i > 0 ? 10 : 0, borderTop: i > 0 ? `1px solid ${HAIR2}` : 'none',
                      fontSize: 13,
                    }}>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          <span style={{ color: MUTED }}>/</span><span style={{ color: ACCENT_INK }}>{l.slug}</span>
                        </div>
                      </div>
                      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 13, color: INK, fontWeight: 500, marginLeft: 12 }}>
                        {l.clicks.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
