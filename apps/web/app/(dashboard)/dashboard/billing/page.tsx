'use client';
import { useState } from 'react';
import useSWR from 'swr';
import { api } from '@/lib/api';
import { WorkspaceSettings } from '@/lib/types';

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: { usd: '$0', inr: '₹0' },
    links: 25,
    clicks: 1000,
    domains: 0,
    api: false,
    seats: 1,
    features: ['25 links', '1K clicks/mo', '7-day analytics', 'mshl.in domain'],
  },
  {
    id: 'starter',
    name: 'Starter',
    price: { usd: '$2/mo', inr: '₹149/mo' },
    links: 500,
    clicks: 25000,
    domains: 1,
    api: true,
    seats: 1,
    features: ['500 links', '25K clicks/mo', '30-day analytics', '1 custom domain', 'QR codes', 'API (1K req/day)'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { usd: '$5/mo', inr: '₹399/mo' },
    links: -1,
    clicks: 250000,
    domains: 5,
    api: true,
    seats: 5,
    features: ['Unlimited links', '250K clicks/mo', '90-day analytics', '5 domains', 'Unlimited API', 'UTM builder', 'Webhooks', '5 seats'],
    highlight: true,
  },
];

function fmtNum(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return String(n);
}

function UsageBar({ used, total, label }: { used: number; total: number; label: string }) {
  const pct = total === -1 ? 0 : Math.min(100, (used / total) * 100);
  const color = pct > 90 ? 'var(--bad)' : pct > 70 ? 'var(--warn)' : 'var(--pulse)';
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
        <span style={{ color: 'var(--fg-muted)' }}>{label}</span>
        <span style={{ color: 'var(--fg)', fontWeight: 600 }}>
          {fmtNum(used)} {total === -1 ? '' : `/ ${fmtNum(total)}`}
        </span>
      </div>
      {total !== -1 && (
        <div style={{ height: 6, background: 'var(--bg-3)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 999, transition: 'width 600ms' }} />
        </div>
      )}
    </div>
  );
}

export default function BillingPage() {
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [loading, setLoading] = useState<string | null>(null);

  const { data: workspace } = useSWR<WorkspaceSettings>('/v1/workspace', () =>
    api.get<WorkspaceSettings>('/v1/workspace')
  );

  const { data: analytics } = useSWR('/v1/analytics/summary?period=30d', () =>
    api.get<{ summary: { total_links: number; total_clicks: number } }>('/v1/analytics/summary?period=30d')
  );

  const currentPlanId = workspace?.plan ?? 'free';
  const currentPlan = PLANS.find(p => p.id === currentPlanId) ?? PLANS[0];

  const totalLinks = analytics?.summary?.total_links ?? 0;
  const totalClicks = analytics?.summary?.total_clicks ?? 0;

  const handleUpgrade = async (planId: string) => {
    if (planId === 'free') return;
    setLoading(planId);
    try {
      const resp = await api.post<{ checkout_url: string; message?: string }>('/v1/billing/checkout', {
        plan: planId,
        currency: currency,
        interval: 'month',
      });
      if (resp.checkout_url && resp.checkout_url !== 'https://meshalive.com/pricing') {
        window.location.href = resp.checkout_url;
      } else {
        alert(resp.message ?? 'Stripe not yet configured. Contact support@meshalive.com');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div style={{ padding: '32px', maxWidth: 900 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="display" style={{ fontSize: 24, margin: '0 0 6px' }}>Billing</h1>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: 0 }}>Manage your plan and usage.</p>
      </div>

      {/* Current plan */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--fg-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Current plan</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="display" style={{ fontSize: 22 }}>{currentPlan.name}</span>
              <span style={{
                background: currentPlanId === 'free' ? 'var(--bg-3)' : 'var(--pulse-soft)',
                color: currentPlanId === 'free' ? 'var(--fg-muted)' : 'var(--pulse)',
                border: `1px solid ${currentPlanId === 'free' ? 'var(--line-c)' : 'var(--pulse)'}`,
                borderRadius: 999, padding: '2px 10px', fontSize: 12, fontWeight: 700,
              }}>
                {currentPlanId === 'free' ? 'Free forever' : 'Active'}
              </span>
            </div>
          </div>
          <div className="display" style={{ fontSize: 24, color: 'var(--pulse)' }}>{currentPlan.price[currency]}</div>
        </div>

        <div style={{ borderTop: '1px solid var(--line-c)', paddingTop: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg-muted)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Usage this month</div>
          <UsageBar used={totalLinks} total={currentPlan.links} label="Links" />
          <UsageBar used={totalClicks} total={currentPlan.clicks} label="Clicks tracked" />
        </div>
      </div>

      {/* Currency toggle + Indian billing note */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Available plans</div>
        <div style={{
          display: 'flex',
          background: 'var(--bg-3)',
          border: '1px solid var(--line-c)',
          borderRadius: 10,
          padding: 3,
          gap: 2,
        }}>
          {(['usd', 'inr'] as const).map(c => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              style={{
                padding: '5px 14px', borderRadius: 8, border: 'none',
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                background: currency === c ? 'var(--bg)' : 'transparent',
                color: currency === c ? 'var(--fg)' : 'var(--fg-muted)',
                transition: 'all 120ms',
              }}
            >
              {c === 'usd' ? '$ USD' : '₹ INR'}
            </button>
          ))}
        </div>
      </div>

      {currency === 'inr' && (
        <div style={{
          marginBottom: 16, padding: '12px 16px',
          background: 'var(--pulse-soft)', border: '1px solid rgba(0,229,168,0.3)',
          borderRadius: 10, fontSize: 13, color: 'var(--fg-muted)',
        }}>
          🇮🇳 <strong style={{ color: 'var(--pulse)' }}>Indian billing</strong> — pay via UPI, RuPay, NetBanking, or cards through Razorpay. GST invoice included.
        </div>
      )}

      {/* Plan cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        {PLANS.map(plan => {
          const isCurrent = plan.id === currentPlanId;
          const isDowngrade = PLANS.indexOf(plan) < PLANS.indexOf(currentPlan);
          const isHigher = PLANS.indexOf(plan) > PLANS.indexOf(currentPlan);

          return (
            <div
              key={plan.id}
              className="card"
              style={{
                padding: 20,
                border: isCurrent
                  ? '1px solid var(--pulse)'
                  : plan.highlight
                    ? '1px solid rgba(0,229,168,0.3)'
                    : '1px solid var(--line-c)',
                background: isCurrent ? 'rgba(0,229,168,0.04)' : 'var(--bg-2)',
                position: 'relative',
              }}
            >
              {isCurrent && (
                <div style={{
                  position: 'absolute', top: -10, left: 16,
                  background: 'var(--pulse)', color: '#052018',
                  fontSize: 10, fontWeight: 700,
                  padding: '2px 10px', borderRadius: 999,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>Current</div>
              )}

              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{plan.name}</div>
              <div className="display" style={{ fontSize: 22, color: isCurrent ? 'var(--pulse)' : 'var(--fg)', marginBottom: 16 }}>
                {plan.price[currency]}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 6, fontSize: 13 }}>
                    <span style={{ color: 'var(--pulse)', flexShrink: 0 }}>✓</span>
                    <span style={{ color: 'var(--fg-muted)' }}>{f}</span>
                  </div>
                ))}
              </div>

              {isCurrent ? (
                <div className="btn btn-sm btn-secondary" style={{ width: '100%', justifyContent: 'center', opacity: 0.7, cursor: 'default', pointerEvents: 'none' }}>
                  Current plan
                </div>
              ) : isDowngrade ? (
                <button
                  className="btn btn-sm btn-ghost"
                  style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}
                  onClick={() => alert('To downgrade, contact support@meshalive.com')}
                >
                  Downgrade
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={loading === plan.id}
                  onClick={() => handleUpgrade(plan.id)}
                >
                  {loading === plan.id ? 'Loading…' : `Upgrade to ${plan.name}`}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Manage billing */}
      {currentPlanId !== 'free' && (
        <div style={{ marginTop: 24 }}>
          <button
            className="btn btn-ghost btn-sm"
            onClick={async () => {
              const resp = await api.get<{ portal_url: string; message?: string }>('/v1/billing/portal');
              if (resp.portal_url && resp.portal_url !== 'https://meshalive.com/pricing') {
                window.location.href = resp.portal_url;
              } else {
                alert(resp.message ?? 'Contact support@meshalive.com to manage your subscription.');
              }
            }}
          >
            Manage billing &amp; invoices →
          </button>
        </div>
      )}
    </div>
  );
}
