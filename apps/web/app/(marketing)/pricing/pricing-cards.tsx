'use client';
import { useState } from 'react';

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    monthly: { usd: '$0', inr: '₹0/mo' },
    annual: { usd: '$0', inr: '₹0/yr' },
    features: [
      '25 links',
      '1,000 clicks/month',
      '7-day analytics retention',
      'mshl.in shared domain',
      'Community support',
    ],
    cta: 'Get started',
    href: '/register',
    highlight: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    monthly: { usd: '$2/mo', inr: '₹149/mo' },
    annual: { usd: '$1.60/mo', inr: '₹119/mo', badge: 'Save 20%' },
    yearlyTotal: { usd: 'billed $19.20/yr', inr: 'billed ₹1,428/yr' },
    features: [
      '500 links',
      '25,000 clicks/month',
      '30-day analytics retention',
      '1 custom domain',
      'QR codes',
      'REST API (1K req/day)',
      'Email support',
    ],
    cta: 'Start free trial',
    href: '/register',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: { usd: '$5/mo', inr: '₹399/mo' },
    annual: { usd: '$4/mo', inr: '₹319/mo', badge: 'Save 20%' },
    yearlyTotal: { usd: 'billed $48/yr', inr: 'billed ₹3,828/yr' },
    features: [
      'Unlimited links',
      '250,000 clicks/month',
      '90-day analytics retention',
      '5 custom domains',
      'QR codes',
      'REST API (unlimited)',
      'UTM builder',
      'Webhooks',
      '5 team seats',
      'Priority support',
    ],
    cta: 'Start free trial',
    href: '/register',
    highlight: true,
  },
];

export function PricingCards() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');

  return (
    <section style={{ padding: '0 24px 80px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Billing toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 48, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            background: 'var(--bg-3)',
            border: '1px solid var(--line-c)',
            borderRadius: 10,
            padding: 3,
            gap: 2,
          }}>
            {(['monthly', 'annual'] as const).map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: '6px 18px',
                  borderRadius: 8,
                  border: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: billing === b ? 'var(--bg)' : 'transparent',
                  color: billing === b ? 'var(--fg)' : 'var(--fg-muted)',
                  transition: 'all 120ms',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                {b === 'annual' ? 'Annual' : 'Monthly'}
                {b === 'annual' && (
                  <span style={{
                    background: 'var(--pulse-soft)',
                    color: 'var(--pulse)',
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: 999,
                    letterSpacing: '0.04em',
                  }}>SAVE 20%</span>
                )}
              </button>
            ))}
          </div>

          {/* Currency toggle */}
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
                  padding: '6px 16px',
                  borderRadius: 8,
                  border: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
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

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {PLANS.map(plan => {
            const price = billing === 'monthly' ? plan.monthly[currency] : plan.annual[currency];
            const yearlyNote = billing === 'annual' && plan.yearlyTotal ? plan.yearlyTotal[currency] : null;

            return (
              <div
                key={plan.id}
                className="card"
                style={{
                  padding: 28,
                  border: plan.highlight ? '1px solid var(--pulse)' : '1px solid var(--line-c)',
                  background: plan.highlight ? 'rgba(0,229,168,0.04)' : 'var(--bg-2)',
                  position: 'relative',
                  transition: 'transform 120ms',
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--pulse)', color: '#052018',
                    fontSize: 11, fontWeight: 700,
                    padding: '3px 12px', borderRadius: 999,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>Most popular</div>
                )}

                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{plan.name}</div>
                <div className="display" style={{
                  fontSize: 36,
                  color: plan.highlight ? 'var(--pulse)' : 'var(--fg)',
                  marginBottom: 4,
                  lineHeight: 1,
                }}>{price}</div>
                {yearlyNote && (
                  <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 4 }}>{yearlyNote}</div>
                )}
                {!yearlyNote && <div style={{ height: 16, marginBottom: 4 }} />}

                <div style={{ height: 1, background: 'var(--line-c)', margin: '20px 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 14 }}>
                      <span style={{ color: 'var(--pulse)', flexShrink: 0, fontWeight: 700, lineHeight: '20px' }}>✓</span>
                      <span style={{ color: 'var(--fg-muted)', lineHeight: '20px' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.href}
                  className={`btn btn-sm ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Indian billing note */}
        <div style={{
          marginTop: 32,
          padding: '16px 20px',
          background: 'var(--bg-2)',
          border: '1px solid var(--line-c)',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontSize: 14,
        }}>
          <span style={{ fontSize: 20 }}>🇮🇳</span>
          <div>
            <strong>Indian businesses:</strong>
            <span style={{ color: 'var(--fg-muted)', marginLeft: 6 }}>
              Pay in ₹ via Razorpay — UPI, RuPay, NetBanking, and cards supported. GST-compliant invoice with every payment.
              Visit <a href="https://meshalive.in" style={{ color: 'var(--pulse)', textDecoration: 'none' }}>meshalive.in</a> to register.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
