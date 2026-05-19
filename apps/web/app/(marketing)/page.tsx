export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      {/* Hero */}
      <section style={{ padding: '96px 24px 80px', textAlign: 'center', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        {/* Glow blob */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,229,168,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--pulse-soft)', border: '1px solid rgba(0,229,168,0.3)',
            borderRadius: 999, padding: '6px 14px', fontSize: 13, color: 'var(--pulse)',
            fontWeight: 600, marginBottom: 32,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pulse)', display: 'inline-block' }} />
            60–80% cheaper than Bitly &amp; Rebrandly
          </div>
          <h1 className="display" style={{
            fontSize: 'clamp(40px, 6vw, 60px)',
            lineHeight: 1.1,
            margin: '0 0 24px',
            color: 'var(--fg)',
          }}>
            Link management with<br />
            <span style={{ color: 'var(--pulse)' }}>real intelligence</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--fg-muted)', margin: '0 0 40px', lineHeight: 1.6, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Branded short links, click analytics, QR codes, and a REST API — built for Indian SMBs. Pay in ₹ via UPI and RuPay.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/register" className="btn btn-primary btn-lg">Get started free</a>
            <a href="/pricing" className="btn btn-secondary btn-lg">View pricing</a>
          </div>
          {/* Stats row */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 48,
            marginTop: 64, flexWrap: 'wrap',
          }}>
            {[
              { value: '25M+', label: 'Links created' },
              { value: '180+', label: 'Countries' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '2ms', label: 'Avg redirect' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 28, color: 'var(--fg)', fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section style={{ borderTop: '1px solid var(--line-c)', borderBottom: '1px solid var(--line-c)', background: 'var(--bg-2)', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--fg-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Trusted by teams at</span>
          {['Jumbotail', 'UrbanClap', 'Razorpay', 'Meesho', 'Delhivery', 'PhonePe', 'Zepto'].map(name => (
            <div key={name} style={{
              padding: '5px 14px', borderRadius: 8,
              background: 'var(--bg-3)', border: '1px solid var(--line-c)',
              fontSize: 13, fontWeight: 600, color: 'var(--fg-muted)',
            }}>{name}</div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="display" style={{ fontSize: 36, margin: '0 0 12px' }}>Everything you need</h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', margin: 0 }}>No bloat. No lock-in. Just fast, reliable link management.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {[
              {
                icon: '⚡', title: 'Lightning-fast redirects',
                desc: '2ms average redirect time. Global edge network. No latency tax for your users.',
              },
              {
                icon: '📊', title: 'Click analytics',
                desc: 'Geo, device, browser, and referrer breakdowns. 90-day retention on Pro.',
              },
              {
                icon: '🌐', title: 'Custom domains',
                desc: 'Use your own branded domain. SSL included. One domain on Starter, five on Pro.',
              },
              {
                icon: '◻', title: 'QR code generator',
                desc: 'High-res QR codes for every short link. Download as PNG or SVG.',
              },
              {
                icon: '⚙', title: 'REST API',
                desc: 'Full API access on Starter and Pro. 1K requests/day on Starter, unlimited on Pro.',
              },
              {
                icon: '👥', title: 'Team workspaces',
                desc: 'Invite teammates. Manage links together. Up to 5 seats on Pro.',
              },
            ].map(f => (
              <div key={f.title} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="display" style={{ fontSize: 36, margin: '0 0 12px' }}>Simple, honest pricing</h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', margin: 0 }}>No hidden fees. No click bait. Indian billing via Razorpay.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, maxWidth: 920, margin: '0 auto' }}>
            {[
              { name: 'Free', price: '$0', priceINR: '₹0', highlight: false, features: ['25 links', '1K clicks/mo', '7-day analytics', 'mshl.in domain', 'Community support'] },
              { name: 'Starter', price: '$2/mo', priceINR: '₹149/mo', highlight: false, features: ['500 links', '25K clicks/mo', '30-day analytics', '1 custom domain', 'QR codes', 'API (1K req/day)', 'Email support'] },
              { name: 'Pro', price: '$5/mo', priceINR: '₹399/mo', highlight: true, features: ['Unlimited links', '250K clicks/mo', '90-day analytics', '5 custom domains', 'QR codes', 'Unlimited API', 'UTM builder', 'Webhooks', 'Priority support'] },
            ].map(plan => (
              <div key={plan.name} className="card" style={{
                padding: 28,
                border: plan.highlight ? '1px solid var(--pulse)' : '1px solid var(--line-c)',
                background: plan.highlight ? 'rgba(0,229,168,0.04)' : 'var(--bg-2)',
                position: 'relative',
              }}>
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--pulse)', color: '#052018', fontSize: 11, fontWeight: 700,
                    padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>Most popular</div>
                )}
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{plan.name}</div>
                <div className="display" style={{ fontSize: 32, color: plan.highlight ? 'var(--pulse)' : 'var(--fg)', marginBottom: 4 }}>{plan.price}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginBottom: 20 }}>{plan.priceINR}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 14 }}>
                      <span style={{ color: 'var(--pulse)', flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ color: 'var(--fg-muted)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="/register" className={`btn btn-sm ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.name === 'Free' ? 'Get started' : 'Start free trial'}
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <a href="/pricing" style={{ color: 'var(--pulse)', fontSize: 14, textDecoration: 'none' }}>
              See full feature comparison →
            </a>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="display" style={{ fontSize: 36, margin: '0 0 12px' }}>How we compare</h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', margin: 0 }}>Same features, fraction of the price.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr>
                  {['Feature', 'Meshalive', 'Bitly Core', 'Rebrandly'].map((h, i) => (
                    <th key={h} style={{
                      padding: '12px 16px', textAlign: i === 0 ? 'left' : 'center',
                      borderBottom: '1px solid var(--line-c)',
                      color: i === 1 ? 'var(--pulse)' : 'var(--fg-muted)',
                      fontWeight: 600, fontSize: 13,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly price', '$5/mo', '$10/mo', '$13/mo'],
                  ['Custom domains', '5', '1', '5'],
                  ['Clicks tracked/mo', '250K', '10K', '25K'],
                  ['API access', '✓ All paid tiers', '✗ Higher tiers only', '✗ Higher tiers only'],
                  ['Indian billing (UPI)', '✓', '✗', '✗'],
                  ['GST invoice', '✓', '✗', '✗'],
                  ['QR codes', '✓', '✓', '✓'],
                  ['Analytics retention', '90 days', '30 days', '30 days'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-c)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{
                        padding: '14px 16px',
                        textAlign: j === 0 ? 'left' : 'center',
                        color: j === 1 ? 'var(--fg)' : j === 0 ? 'var(--fg)' : 'var(--fg-muted)',
                        background: j === 1 ? 'rgba(0,229,168,0.04)' : 'transparent',
                        fontWeight: j === 1 ? 500 : 400,
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-2)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 40, margin: '0 0 16px' }}>
            Start free.<br />No credit card required.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', margin: '0 0 32px' }}>
            Create your first 25 short links today. Upgrade when you need more.
          </p>
          <a href="/register" className="btn btn-primary btn-lg">
            Get started for free
          </a>
          <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 16 }}>
            Also available at <strong style={{ color: 'var(--fg)' }}>meshalive.in</strong> — pay in ₹ via UPI, RuPay, NetBanking
          </div>
        </div>
      </section>
    </div>
  );
}
