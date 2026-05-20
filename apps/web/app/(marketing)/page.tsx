'use client';
import Link from 'next/link';

const FEATURES = [
  { icon: '⚡', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Sub-2ms redirects', desc: 'Redis-backed redirect cache. Cold misses warm automatically. Your links never slow down.' },
  { icon: '📊', color: '#00E5A8', bg: 'rgba(0,229,168,0.1)', title: 'Click analytics', desc: 'Country, device, browser, referrer — all tracked per click. 90-day retention on Pro.' },
  { icon: '🔗', color: '#6C5CE7', bg: 'rgba(108,92,231,0.1)', title: 'Custom domains', desc: 'Bring your own domain. Verify via CNAME. Your brand on every short link.' },
  { icon: '🟦', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)', title: 'QR codes', desc: 'Auto-generated QR for every link. Download PNG. Works offline.' },
  { icon: '🔑', color: '#F97316', bg: 'rgba(249,115,22,0.1)', title: 'REST API', desc: 'Full CRUD API with JWT + API token auth. Available on Starter and Pro. No rate limit on Pro.' },
  { icon: '👥', color: '#EC4899', bg: 'rgba(236,72,153,0.1)', title: 'Team workspaces', desc: 'Invite teammates. Role-based access. Up to 5 seats on Pro.' },
];

const PLANS = [
  { name: 'Free', price: '$0', links: '25 links', clicks: '1K clicks/mo', domains: 'mshl.in only', api: false, support: 'Community' },
  { name: 'Starter', price: '$2/mo', links: '500 links', clicks: '25K clicks/mo', domains: '1 custom domain', api: true, support: 'Email' },
  { name: 'Pro', price: '$5/mo', links: 'Unlimited', clicks: '250K clicks/mo', domains: '5 custom domains', api: true, support: 'Priority' },
];

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '100px 32px 80px', textAlign: 'center' }}>
        {/* Gradient blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(108,92,231,0.12) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '5%', left: '-10%', width: 600, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,229,168,0.08) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
            background: 'rgba(108,92,231,0.12)', border: '1px solid rgba(108,92,231,0.3)',
            borderRadius: 999, padding: '6px 16px',
            fontSize: 13, fontWeight: 600, color: '#8B7CFF',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6C5CE7', display: 'inline-block', boxShadow: '0 0 8px #6C5CE7' }} />
            60–80% cheaper than Bitly &amp; Rebrandly
          </div>

          {/* Headline */}
          <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 72px)', lineHeight: 1.06, margin: '0 0 24px', letterSpacing: '-0.03em' }}>
            Link management that<br />
            <span style={{ background: 'linear-gradient(135deg, #00E5A8 0%, #6C5CE7 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>actually moves fast</span>
          </h1>

          <p style={{ fontSize: 18, color: 'var(--fg-muted)', margin: '0 auto 40px', lineHeight: 1.65, maxWidth: 540 }}>
            Branded short links, click analytics, QR codes, and a REST API — all in one. Built for Indian teams. Pay in ₹ via UPI and RuPay.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-primary btn-lg">
              Start for free →
            </Link>
            <Link href="/pricing" className="btn btn-secondary btn-lg">
              View pricing
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 56, marginTop: 72, flexWrap: 'wrap' }}>
            {[
              { value: '25M+', label: 'Links created' },
              { value: '2ms', label: 'Avg redirect' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '₹/mo', label: 'India-native billing' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 30, letterSpacing: '-0.02em', background: 'linear-gradient(180deg, #EEF0FF 0%, #8B95AD 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* API code preview */}
        <div style={{ maxWidth: 680, margin: '64px auto 0', position: 'relative' }}>
          <div style={{
            background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
            textAlign: 'left',
          }}>
            {/* Title bar */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 7 }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--fg-muted)', marginLeft: 8, fontFamily: 'JetBrains Mono, monospace' }}>bash</span>
            </div>
            <pre style={{ margin: 0, padding: '20px 24px', fontFamily: 'JetBrains Mono, SF Mono, monospace', fontSize: 13, lineHeight: 1.75, color: '#C9D1D9', overflowX: 'auto' }}><code>{`# Create a short link via API
curl -X POST https://api.meshalive.com/v1/links \\
  -H "Authorization: Bearer mshl_••••••••" \\
  -d '{"destination":"https://jumbotail.com/sale","slug":"summer"}'

# Response
{
  "short_url": "https://mshl.in/summer",
  "slug":      "summer",
  "clicks":    0
}`}</code></pre>
          </div>
          {/* Glow under code block */}
          <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', width: 400, height: 80, background: 'radial-gradient(ellipse, rgba(0,229,168,0.1) 0%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
        </div>
      </section>

      {/* Social proof */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.3), rgba(0,229,168,0.3), transparent)' }} />
      <section style={{ background: 'rgba(255,255,255,0.015)', padding: '20px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>Trusted by teams at</span>
          {['Jumbotail', 'Meesho', 'Delhivery', 'Zepto', 'PhonePe', 'Razorpay', 'CRED'].map(name => (
            <div key={name} style={{
              padding: '5px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600,
              color: 'rgba(238,240,255,0.45)',
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.025)',
            }}>{name}</div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-block', background: 'rgba(0,229,168,0.08)', border: '1px solid rgba(0,229,168,0.2)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: 'var(--pulse)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Features</div>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '0 0 16px', letterSpacing: '-0.025em' }}>
              Everything you need.<br />Nothing you don&apos;t.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--fg-muted)', margin: '0 auto', maxWidth: 520, lineHeight: 1.6 }}>No bloat. No dark patterns. Just reliable link infrastructure for your team.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{
                background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '28px 28px 24px',
                transition: 'all 200ms ease-out',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.025)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{f.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.2), transparent)' }} />
      <section style={{ padding: '96px 32px', background: 'rgba(108,92,231,0.03)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-block', background: 'rgba(108,92,231,0.1)', border: '1px solid rgba(108,92,231,0.25)', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#8B7CFF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Pricing</div>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 44px)', margin: '0 0 16px', letterSpacing: '-0.025em' }}>Simple. Honest. Affordable.</h2>
            <p style={{ fontSize: 17, color: 'var(--fg-muted)', margin: '0 auto', maxWidth: 480 }}>No usage surprises. No hidden fees. Cancel anytime.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' }}>
            {PLANS.map((plan, i) => (
              <div key={plan.name} style={{
                position: 'relative',
                background: i === 1 ? 'rgba(108,92,231,0.08)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${i === 1 ? 'rgba(108,92,231,0.35)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 18, padding: '28px',
                marginTop: i === 1 ? -8 : 0,
              }}>
                {i === 1 && (
                  <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--violet)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 14px', borderRadius: 999 }}>Most popular</div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{plan.name}</div>
                  <div className="display" style={{ fontSize: 36, letterSpacing: '-0.03em' }}>{plan.price}</div>
                  {plan.price !== '$0' && <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>per month · billed monthly</div>}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {[plan.links, plan.clicks, plan.domains, ...(plan.api ? ['REST API access'] : []), `${plan.support} support`].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                      <span style={{ color: 'var(--pulse)', fontSize: 16, fontWeight: 700 }}>✓</span>
                      <span style={{ color: 'var(--fg-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/register" className={`btn ${i === 1 ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  {plan.price === '$0' ? 'Get started free' : `Start ${plan.name}`}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/pricing" style={{ fontSize: 14, color: 'var(--violet-2)', textDecoration: 'none', fontWeight: 500 }}>See full feature comparison →</Link>
          </div>
        </div>
      </section>

      {/* Comparison vs competitors */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Why switch from Bitly?</h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', margin: 0 }}>Same features. API on all paid plans. 80% lower price.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: 'var(--fg-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Feature</th>
                  {[
                    { name: 'Meshalive', highlight: true },
                    { name: 'Bitly Core', highlight: false },
                    { name: 'Rebrandly', highlight: false },
                  ].map(col => (
                    <th key={col.name} style={{
                      padding: '16px 20px', textAlign: 'center',
                      fontSize: col.highlight ? 13 : 12, fontWeight: 700,
                      color: col.highlight ? 'var(--pulse)' : 'var(--fg-muted)',
                      letterSpacing: '0.04em',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                      background: col.highlight ? 'rgba(0,229,168,0.04)' : 'transparent',
                    }}>{col.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price/mo', '$2', '$10', '$13'],
                  ['Custom domains', '1 (Starter)', '1', '1'],
                  ['API access', '✓ All paid', '✗ Enterprise only', '✗ Pro+'],
                  ['Analytics retention', '90 days (Pro)', '30 days', '30 days'],
                  ['India billing (₹/UPI)', '✓', '✗', '✗'],
                  ['QR codes', '✓', '✓', '✓'],
                  ['Team members', '5 (Pro)', '1', '1'],
                ].map(([feature, ...vals]) => (
                  <tr key={feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '13px 20px', fontSize: 14, color: 'var(--fg-muted)' }}>{feature}</td>
                    {vals.map((val, i) => (
                      <td key={i} style={{ padding: '13px 20px', textAlign: 'center', fontSize: 14, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', background: i === 0 ? 'rgba(0,229,168,0.03)' : 'transparent' }}>
                        {val === '✓' ? <span style={{ color: 'var(--pulse)' }}>✓</span> : val === '✗' ? <span style={{ opacity: 0.3 }}>✗</span> : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(108,92,231,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.4), rgba(0,229,168,0.4), transparent)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '0 0 16px', letterSpacing: '-0.025em' }}>
            Start free.<br />No credit card required.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', marginBottom: 36, lineHeight: 1.6 }}>
            25 free links, mshl.in domain, basic analytics — forever free. Upgrade when you&apos;re ready.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-primary btn-lg">
              Create your account →
            </Link>
            <Link href="/pricing" className="btn btn-secondary btn-lg">
              Compare plans
            </Link>
          </div>
          <div style={{ marginTop: 24, fontSize: 13, color: 'var(--fg-muted)' }}>
            Indian teams? Pay in ₹ via UPI · <span style={{ color: 'var(--pulse)' }}>₹149/mo Starter</span> · ₹399/mo Pro
          </div>
        </div>
      </section>
    </div>
  );
}
