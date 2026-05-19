import { PricingCards } from './pricing-cards';

export const metadata = { title: 'Pricing — Meshalive' };

const FEATURES = [
  { name: 'Links (stored)', free: '25', starter: '500', pro: 'Unlimited' },
  { name: 'Clicks tracked/mo', free: '1,000', starter: '25,000', pro: '250,000' },
  { name: 'Analytics retention', free: '7 days', starter: '30 days', pro: '90 days' },
  { name: 'Custom domains', free: '0 (mshl.in only)', starter: '1', pro: '5' },
  { name: 'QR codes', free: '—', starter: '✓', pro: '✓' },
  { name: 'REST API access', free: '—', starter: '✓ 1K req/day', pro: '✓ Unlimited' },
  { name: 'Team seats', free: '1', starter: '1', pro: '5' },
  { name: 'UTM builder', free: '—', starter: '—', pro: '✓' },
  { name: 'Webhooks', free: '—', starter: '—', pro: '✓' },
  { name: 'Support', free: 'Community', starter: 'Email', pro: 'Priority' },
  { name: 'Indian billing (UPI/RuPay)', free: '—', starter: '✓', pro: '✓' },
  { name: 'GST invoice', free: '—', starter: '✓', pro: '✓' },
];

const FAQS = [
  {
    q: 'Can I use Meshalive without a custom domain?',
    a: 'Yes — all plans include a shared mshl.in short domain. Your links will look like mshl.in/abc123. Custom domains are available on Starter (1 domain) and Pro (5 domains).',
  },
  {
    q: 'What happens if I hit my link limit?',
    a: 'Link creation is paused — you\'ll see an error when creating new links. Your existing links keep working normally. You can upgrade your plan at any time to create more links.',
  },
  {
    q: 'Is the API included in Starter?',
    a: 'Yes. Starter includes 1,000 API requests per day — enough for most integrations. Pro removes the daily limit entirely. API access is not available on the Free plan.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, no lock-in or cancellation fees. Your plan downgrades to Free at the end of the billing period. Your data is retained for 30 days after downgrade.',
  },
  {
    q: 'Do you offer Indian billing?',
    a: 'Yes — ₹149/mo for Starter and ₹399/mo for Pro, billed via Razorpay. We support UPI, RuPay, NetBanking, and all major cards. GST-compliant invoice included with every payment.',
  },
  {
    q: "What counts as a 'click'?",
    a: "Every tracked redirect counts as one click. We apply bot filtering to exclude common crawlers and scrapers. Click counts are updated in near real-time on Pro plans.",
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      {/* Header */}
      <section style={{ padding: '80px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h1 className="display" style={{ fontSize: 'clamp(36px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.1 }}>
            Simple, honest pricing
          </h1>
          <p style={{ fontSize: 18, color: 'var(--fg-muted)', margin: 0 }}>
            No hidden fees. No click bait. No feature gating at the API.
          </p>
        </div>
      </section>

      {/* Pricing cards (client component for toggle) */}
      <PricingCards />

      {/* Feature comparison table */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 28, textAlign: 'center', margin: '0 0 40px' }}>Full feature comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr>
                  {['Feature', 'Free', 'Starter', 'Pro'].map((h, i) => (
                    <th key={h} style={{
                      padding: '12px 16px',
                      textAlign: i === 0 ? 'left' : 'center',
                      borderBottom: '2px solid var(--line-c)',
                      color: i === 3 ? 'var(--pulse)' : 'var(--fg)',
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: '0.02em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-c)' }}>
                    <td style={{ padding: '13px 16px', color: 'var(--fg)', fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: '13px 16px', textAlign: 'center', color: 'var(--fg-muted)' }}>{row.free}</td>
                    <td style={{ padding: '13px 16px', textAlign: 'center', color: 'var(--fg-muted)' }}>{row.starter}</td>
                    <td style={{ padding: '13px 16px', textAlign: 'center', color: row.pro === '—' ? 'var(--fg-muted)' : 'var(--fg)', background: 'rgba(0,229,168,0.03)', fontWeight: row.pro === '—' ? 400 : 500 }}>{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 28, textAlign: 'center', margin: '0 0 48px' }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? '1px solid var(--line-c)' : 'none',
                borderBottom: '1px solid var(--line-c)',
                padding: '24px 0',
              }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-2)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 36, margin: '0 0 16px' }}>Start free today</h2>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', margin: '0 0 32px' }}>No credit card required. Upgrade when you need more.</p>
          <a href="/register" className="btn btn-primary btn-lg">Create your free account</a>
          <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 16 }}>
            Indian customers: <a href="/register" style={{ color: 'var(--pulse)', textDecoration: 'none' }}>meshalive.in</a> · UPI · RuPay · GST invoice
          </div>
        </div>
      </section>
    </div>
  );
}
