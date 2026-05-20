'use client';
import { useState } from 'react';
import Link from 'next/link';

const PLANS = [
  {
    id: 'free', name: 'Free', price: { usd: 0, inr: 0 }, period: '',
    desc: 'For individuals getting started.',
    features: ['25 links', '1,000 clicks/mo', '7-day analytics', 'mshl.in shared domain', 'Community support'],
    cta: 'Get started free', ctaHref: '/register', highlight: false,
  },
  {
    id: 'starter', name: 'Starter', price: { usd: 2, inr: 149 }, period: '/mo',
    desc: 'For freelancers and small teams.',
    features: ['500 links', '25,000 clicks/mo', '30-day analytics', '1 custom domain', 'QR codes', 'REST API (1K req/day)', 'Email support'],
    cta: 'Start Starter', ctaHref: '/register', highlight: false,
  },
  {
    id: 'pro', name: 'Pro', price: { usd: 5, inr: 399 }, period: '/mo',
    desc: 'For growing teams that need it all.',
    features: ['Unlimited links', '250,000 clicks/mo', '90-day analytics', '5 custom domains', 'QR codes', 'REST API (unlimited)', '5 team members', 'UTM builder', 'Webhooks', 'Priority support'],
    cta: 'Start Pro', ctaHref: '/register', highlight: true,
  },
];

export default function PricingCards() {
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month');

  const getPrice = (plan: typeof PLANS[0]) => {
    if (plan.price.usd === 0) return 'Free';
    const base = currency === 'usd' ? plan.price.usd : plan.price.inr;
    const symbol = currency === 'usd' ? '$' : '₹';
    if (billingInterval === 'year') {
      const discounted = Math.floor(base * 10) / 10;
      return `${symbol}${discounted}`;
    }
    return `${symbol}${base}`;
  };

  return (
    <section style={{ padding: '0 32px 80px' }}>
      <div style={{ maxWidth: 1020, margin: '0 auto' }}>

        {/* Toggles */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          {/* Interval toggle */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 4 }}>
            {(['month', 'year'] as const).map(i => (
              <button key={i} onClick={() => setBillingInterval(i)} style={{
                padding: '7px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 600,
                background: billingInterval === i ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: billingInterval === i ? 'var(--fg)' : 'var(--fg-muted)',
                transition: 'all 150ms',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {i === 'month' ? 'Monthly' : (
                  <>
                    Annual
                    <span style={{ background: 'rgba(0,229,168,0.15)', color: 'var(--pulse)', fontSize: 11, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>Save 20%</span>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Currency toggle */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 4 }}>
            {(['usd', 'inr'] as const).map(c => (
              <button key={c} onClick={() => setCurrency(c)} style={{
                padding: '7px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 600,
                background: currency === c ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: currency === c ? 'var(--fg)' : 'var(--fg-muted)',
                transition: 'all 150ms',
              }}>
                {c === 'usd' ? '$ USD' : '₹ INR'}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
          {PLANS.map((plan) => (
            <div key={plan.id} style={{
              position: 'relative',
              background: plan.highlight ? 'rgba(108,92,231,0.08)' : 'rgba(255,255,255,0.025)',
              border: `1px solid ${plan.highlight ? 'rgba(108,92,231,0.35)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 18, padding: '28px',
              marginTop: plan.highlight ? -12 : 0,
              paddingTop: plan.highlight ? '40px' : '28px',
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--violet)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 14px', borderRadius: 999, whiteSpace: 'nowrap' }}>Most popular</div>
              )}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>{plan.name}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 16 }}>{plan.desc}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span className="display" style={{ fontSize: 42, letterSpacing: '-0.03em', lineHeight: 1 }}>{getPrice(plan)}</span>
                  {plan.period && <span style={{ fontSize: 14, color: 'var(--fg-muted)' }}>{plan.period}</span>}
                </div>
                {billingInterval === 'year' && plan.price.usd > 0 && (
                  <div style={{ fontSize: 12, color: 'var(--pulse)', marginTop: 4 }}>
                    Billed annually — 2 months free
                  </div>
                )}
                {currency === 'inr' && plan.price.usd > 0 && (
                  <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>via Razorpay · GST invoice included</div>
                )}
              </div>

              <Link href={plan.ctaHref} className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center', display: 'flex', marginBottom: 24 }}>
                {plan.cta}
              </Link>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13.5 }}>
                    <span style={{ color: 'var(--pulse)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: 'var(--fg-muted)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: 'var(--fg-muted)' }}>
          All plans include a free <span style={{ color: 'var(--fg)' }}>mshl.in</span> shared domain · No credit card for Free plan
        </p>
      </div>
    </section>
  );
}
