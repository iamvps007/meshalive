'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { api } from '@/lib/api';
import { WorkspaceAnalytics } from '@/lib/types';

const fetcher = (url: string) => api.get<WorkspaceAnalytics>(url);

function SummaryCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="card" style={{ flex: 1, padding: '20px 24px' }}>
      <div className="muted" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</div>
      <div className="display" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{value}</div>
      {sub && <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

function ClickChart({ data }: { data: { day: string; clicks: number }[] }) {
  if (!data || data.length === 0) {
    return <div className="muted" style={{ padding: '40px 0', textAlign: 'center', fontSize: 13 }}>No click data yet.</div>;
  }
  const W = 600, H = 120, PAD = 8;
  const max = Math.max(...data.map(d => d.clicks), 1);
  const pts = data.map((d, i) => {
    const x = PAD + (i / Math.max(data.length - 1, 1)) * (W - PAD * 2);
    const y = H - PAD - ((d.clicks / max) * (H - PAD * 2));
    return `${x},${y}`;
  });
  const filled = [...pts, `${W - PAD},${H}`, `${PAD},${H}`].join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 120, display: 'block' }}>
      <polygon points={filled} fill="var(--pulse)" opacity="0.15" />
      <polyline points={pts.join(' ')} fill="none" stroke="var(--pulse)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function GeoTable({ data }: { data: { country: string; clicks: number }[] }) {
  if (!data || data.length === 0) return <div className="muted" style={{ padding: '20px 0', textAlign: 'center', fontSize: 13 }}>No geo data yet.</div>;
  const max = Math.max(...data.map(d => d.clicks), 1);
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ borderBottom: '1px solid var(--line-c)' }}>
          <th style={{ textAlign: 'left', padding: '6px 0', color: 'var(--fg-muted)', fontWeight: 600 }}>Country</th>
          <th style={{ textAlign: 'right', padding: '6px 0', color: 'var(--fg-muted)', fontWeight: 600 }}>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {data.map(r => (
          <tr key={r.country} style={{ borderBottom: '1px solid var(--line-c)' }}>
            <td style={{ padding: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, height: 4, background: 'var(--bg-3)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ width: `${(r.clicks / max) * 100}%`, height: '100%', background: 'var(--pulse)', borderRadius: 2 }} />
                </div>
                <span style={{ minWidth: 30 }}>{r.country || '??'}</span>
              </div>
            </td>
            <td style={{ textAlign: 'right', padding: '8px 0', fontVariantNumeric: 'tabular-nums' }}>{r.clicks.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const { data, isLoading, error } = useSWR<WorkspaceAnalytics>(
    `/v1/analytics/summary?period=${period}`, fetcher
  );

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 className="display" style={{ fontSize: 28, margin: 0 }}>Analytics</h1>
          <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>Click performance across all your links</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['7d', '30d', '90d'] as const).map(p => (
            <button key={p} onClick={() => setPeriod(p)} className="btn btn-sm"
              style={{ background: period === p ? 'var(--bg-3)' : 'transparent', color: period === p ? 'var(--fg)' : 'var(--fg-muted)', border: `1px solid ${period === p ? 'var(--line-c)' : 'transparent'}` }}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {isLoading && <div className="muted" style={{ textAlign: 'center', padding: 60 }}>Loading...</div>}
      {error && <div style={{ color: 'var(--bad)', textAlign: 'center', padding: 60 }}>Failed to load analytics.</div>}

      {data && (
        <>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
            <SummaryCard label="Total links" value={data.summary.total_links.toLocaleString()} />
            <SummaryCard label="Total clicks" value={data.summary.total_clicks.toLocaleString()} />
            <SummaryCard label="Clicks today" value={data.summary.clicks_today.toLocaleString()} />
            <SummaryCard label="This week" value={data.summary.clicks_week.toLocaleString()} />
          </div>

          <div className="card" style={{ padding: '20px 24px', marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Clicks over time</div>
            <ClickChart data={data.clicks_by_day} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div className="card" style={{ padding: '20px 24px' }}>
              <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Top countries</div>
              <GeoTable data={data.countries} />
            </div>
            <div className="card" style={{ padding: '20px 24px' }}>
              <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Top links</div>
              {!data.top_links?.length && <div className="muted" style={{ fontSize: 13, textAlign: 'center', padding: '20px 0' }}>No link data yet.</div>}
              {data.top_links?.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--line-c)', fontSize: 13 }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title || l.slug}</div>
                    <div className="muted" style={{ fontSize: 11 }}>/{l.slug}</div>
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--pulse)', flexShrink: 0, marginLeft: 16 }}>{l.clicks.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          {data.devices && data.devices.length > 0 && (
            <div className="card" style={{ padding: '20px 24px' }}>
              <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Devices</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {data.devices.map(d => {
                  const total = data.devices.reduce((s, x) => s + x.clicks, 0);
                  const pct = total > 0 ? Math.round((d.clicks / total) * 100) : 0;
                  return (
                    <div key={d.device} className="card" style={{ padding: '10px 16px', background: 'var(--bg-2)', fontSize: 13 }}>
                      <span style={{ fontWeight: 600 }}>{d.device}</span>
                      <span className="muted" style={{ marginLeft: 8 }}>{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
