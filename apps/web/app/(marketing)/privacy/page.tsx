import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Meshalive collects, uses, and protects your data. Governed by the IT Act 2000 and DPDP Act 2023.',
  alternates: { canonical: 'https://meshalive.com/privacy' },
  robots: { index: true, follow: true },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 36 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{title}</h2>
    <div style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8 }}>{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>Last updated: May 2026</p>
        </div>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 48 }}>
          Meshalive Technologies Pvt. Ltd. ("Meshalive", "we", "our") operates meshalive.com and meshalive.com. This policy explains how we collect, use, and protect your personal data in compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
        </p>

        <Section title="1. Data we collect">
          <p><strong style={{ color: '#111111' }}>Account data:</strong> When you register, we collect your name, email address, and a hashed password. We never store your password in plain text.</p>
          <p><strong style={{ color: '#111111' }}>Link analytics:</strong> Each redirect through a short link records the timestamp, destination URL, country (from Cloudflare's CF-IPCountry header), device type, browser, and referrer. We do not store IP addresses.</p>
          <p><strong style={{ color: '#111111' }}>Billing data:</strong> Payments are processed by Razorpay (India) or Stripe (global). We store only the transaction reference and plan metadata — never your card or UPI details.</p>
          <p><strong style={{ color: '#111111' }}>Usage data:</strong> Server logs record request timestamps and HTTP status codes for operational monitoring. These logs are retained for 30 days.</p>
        </Section>

        <Section title="2. How we use your data">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>To create and manage your account and workspaces</li>
            <li>To power the click analytics dashboard for your short links</li>
            <li>To process payments and generate GST-compliant invoices</li>
            <li>To send transactional emails (receipt, password reset, workspace invites)</li>
            <li>To detect abuse, spam links, and phishing — and suspend violating accounts</li>
          </ul>
          <p>We do not sell your data. We do not use your data for advertising.</p>
        </Section>

        <Section title="3. Third-party processors">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong style={{ color: '#111111' }}>Cloudflare</strong> — CDN, DDoS protection, and real-IP passthrough. Cloudflare provides the CF-IPCountry header we use for geo analytics.</li>
            <li><strong style={{ color: '#111111' }}>Razorpay</strong> — Payment processing for INR transactions. Governed by Razorpay's PCI-DSS compliant infrastructure.</li>
            <li><strong style={{ color: '#111111' }}>Stripe</strong> — Payment processing for USD transactions.</li>
            <li><strong style={{ color: '#111111' }}>Resend</strong> — Transactional email delivery.</li>
          </ul>
        </Section>

        <Section title="4. Data retention">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong style={{ color: '#111111' }}>Click analytics:</strong> 7 days on Free, 30 days on Starter, 90 days on Pro.</li>
            <li><strong style={{ color: '#111111' }}>Short links:</strong> Retained until you delete them or close your account.</li>
            <li><strong style={{ color: '#111111' }}>Account data:</strong> Deleted 30 days after account closure request.</li>
            <li><strong style={{ color: '#111111' }}>Billing records:</strong> Retained for 7 years as required by Indian tax law.</li>
          </ul>
        </Section>

        <Section title="5. Your rights">
          <p>Under the DPDP Act, 2023, you have the right to access, correct, and erase your personal data. You may:</p>
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Export all your link and analytics data as CSV from the dashboard</li>
            <li>Delete your account and associated data from Settings → Danger Zone</li>
            <li>Request a copy of your data by emailing privacy@meshalive.in</li>
          </ul>
        </Section>

        <Section title="6. Security">
          <p>Passwords are hashed using bcrypt. All data in transit is encrypted via TLS 1.2+. Redis (used for sessions and caching) is not exposed to the public internet. We conduct periodic security reviews.</p>
        </Section>

        <Section title="7. Governing law">
          <p>This policy is governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.</p>
        </Section>

        <Section title="8. Contact">
          <p>For privacy inquiries: <a href="mailto:privacy@meshalive.in" style={{ color: '#0057ff', textDecoration: 'none' }}>privacy@meshalive.in</a><br />
          Meshalive Technologies Pvt. Ltd., Bengaluru, Karnataka, India.</p>
        </Section>
      </div>
    </div>
  );
}
