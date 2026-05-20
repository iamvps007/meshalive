import Link from 'next/link';
import PricingCards from './pricing-cards';

const FAQ = [
  { q: 'Can I create links without a custom domain?', a: 'Yes — all plans including Free include the shared mshl.in short domain. You can create links immediately after signup with no setup required.' },
  { q: 'What happens when I hit my link limit?', a: 'Existing links keep working perfectly. New link creation is paused until you upgrade or archive old links. We never break your existing short URLs.' },
  { q: 'Is the API available on Starter?', a: 'Yes. The REST API is included on Starter ($2/mo) with 1,000 requests/day, and unlimited on Pro ($5/mo). Most competitors gate the API at $30+/mo.' },
  { q: 'Do you offer Indian billing?', a: 'Yes. Pay in ₹ via UPI, RuPay, Netbanking, or credit card through Razorpay. Starter is ₹149/mo, Pro is ₹399/mo. GST-compliant invoice included on every payment.' },
  { q: 'Can I cancel anytime?', a: 'Yes. No lock-in, no cancellation fees. Cancel from your billing dashboard and your subscription ends at the period close. Your links stay active until then.' },
  { q: 'What counts as a click?', a: 'Every redirect through your short link counts as one click. We apply bot filtering to exclude known crawlers and monitoring pings from your analytics. No double-counting.' },
];

const ALL_FEATURES = [
  { label: 'Links stored', free: '25', starter: '500', pro: 'Unlimited' },
  { label: 'Clicks tracked/mo', free: '1,000', starter: '25,000', pro: '250,000' },
  { label: 'Analytics retention', free: '7 days', starter: '30 days', pro: '90 days' },
  { label: 'Custom domains', free: '—', starter: '1', pro: '5' },
  { label: 'Shared mshl.in domain', free: '✓', starter: '✓', pro: '✓' },
  { label: 'QR code generation', free: '—', starter: '✓', pro: '✓' },
  { label: 'REST API', free: '—', starter: '1K req/day', pro: 'Unlimited' },
  { label: 'API token auth', free: '—', starter: '✓', pro: '✓' },
  { label: 'Team members', free: '1', starter: '1', pro: '5' },
  { label: 'UTM builder', free: '—', starter: '—', pro: '✓' },
  { label: 'Webhook events', free: '—', starter: '—', pro: '✓' },
  { label: 'India billing (₹/UPI)', free: '—', starter: '✓', pro: '✓' },
  { label: 'GST invoice', free: '—', starter: '✓', pro: '✓' },
  { label: 'Support', free: 'Community', starter: 'Email', pro: 'Priority' },
];

export default function PricingPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)' }}>

      {/* Header */}
      <section style={{ padding: '80px 32px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(108,92,231,0.1) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(108,92,231,0.1)', border: '1px solid rgba(108,92,231,0.25)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#8B7CFF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>Pricing</div>
          <h1 className="display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', margin: '0 0 16px', letterSpacing: '-0.03em' }}>Simple, honest pricing</h1>
          <p style={{ fontSize: 18, color: 'var(--fg-muted)', margin: '0 auto', maxWidth: 480, lineHeight: 1.6 }}>No hidden fees. No per-click billing surprises. No API paywalls.</p>
        </div>
      </section>

      {/* Pricing cards (client for toggle) */}
      <PricingCards />

      {/* Full feature comparison */}
      <section style={{ padding: '80px 32px' }} id="comparison">
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 28, textAlign: 'center', marginBottom: 40, letterSpacing: '-0.02em' }}>Full feature comparison</h2>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: 'var(--fg-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Feature</th>
                  {['Free', 'Starter', 'Pro'].map((name, i) => (
                    <th key={name} style={{ padding: '16px 20px', textAlign: 'center', fontSize: 13, fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.07)', background: i === 1 ? 'rgba(108,92,231,0.06)' : 'transparent', color: i === 2 ? 'var(--pulse)' : 'var(--fg)' }}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_FEATURES.map(row => (
                  <tr key={row.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px 20px', fontSize: 14, color: 'var(--fg-muted)' }}>{row.label}</td>
                    {[row.free, row.starter, row.pro].map((val, i) => (
                      <td key={i} style={{ padding: '12px 20px', textAlign: 'center', fontSize: 14, background: i === 1 ? 'rgba(108,92,231,0.03)' : 'transparent', color: val === '✓' ? 'var(--pulse)' : val === '—' ? 'rgba(255,255,255,0.2)' : 'var(--fg)' }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 32px 96px' }} id="faq">
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 28, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>Frequently asked questions</h2>
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ padding: '24px 28px', borderBottom: i < FAQ.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)', marginBottom: 10 }}>{item.q}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '64px 32px 80px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(108,92,231,0.04)' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 32, margin: '0 0 16px', letterSpacing: '-0.025em' }}>Start free today</h2>
          <p style={{ color: 'var(--fg-muted)', marginBottom: 28, fontSize: 16 }}>25 links, mshl.in domain, 7-day analytics — no credit card needed.</p>
          <Link href="/register" className="btn btn-primary btn-lg">Create free account →</Link>
        </div>
      </section>
    </div>
  );
}
