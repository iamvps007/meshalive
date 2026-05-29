import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Meshalive Terms of Service. Rules for using the Meshalive URL shortener and link management platform.',
  alternates: { canonical: 'https://meshalive.com/terms' },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 36 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{title}</h2>
    <div style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8 }}>{children}</div>
  </div>
);

export default function TermsPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Terms of Service</h1>
          <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>Last updated: May 2026</p>
        </div>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 48 }}>
          These Terms of Service govern your use of Meshalive (meshalive.com, meshalive.com, and api.meshalive.com) operated by Meshalive Technologies Pvt. Ltd. By creating an account you agree to these terms.
        </p>

        <Section title="1. Acceptance">
          <p>By accessing or using Meshalive, you confirm that you are at least 18 years old, have read these terms, and agree to be bound by them. If you are using Meshalive on behalf of an organisation, you represent that you have authority to bind that organisation.</p>
        </Section>

        <Section title="2. Your account">
          <p>You are responsible for maintaining the security of your account credentials. You must notify us immediately at security@meshalive.in if you suspect unauthorised access. We are not liable for losses resulting from compromised credentials.</p>
        </Section>

        <Section title="3. Acceptable use">
          <p>You may not use Meshalive to shorten URLs that lead to:</p>
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Phishing pages, malware, or fraudulent content</li>
            <li>Spam campaigns or unsolicited bulk messaging</li>
            <li>Content illegal under Indian law or the destination country's law</li>
            <li>Child sexual abuse material (CSAM) — zero tolerance, immediate suspension and reporting</li>
            <li>Circumvention of platform safety systems</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that violate these rules without notice.</p>
        </Section>

        <Section title="4. Service limits">
          <p>Each plan has link, click, and API rate limits as described on the Pricing page. Exceeding limits may result in new link creation being paused; existing links always continue to redirect.</p>
        </Section>

        <Section title="5. Billing and cancellation">
          <p>Paid plans are billed monthly or annually in advance. Cancellation takes effect at the end of the current billing period. We offer a 7-day money-back guarantee on your first payment — see the Refund Policy for details.</p>
        </Section>

        <Section title="6. Intellectual property">
          <p>Meshalive and the meshalive.com domain are owned by Meshalive Technologies Pvt. Ltd. You retain full ownership of your short links and associated analytics data. You grant us a limited licence to display and redirect your links as part of the service.</p>
        </Section>

        <Section title="7. Limitation of liability">
          <p>To the maximum extent permitted by law, Meshalive is not liable for indirect, incidental, or consequential damages arising from your use of the service. Our total liability in any 12-month period shall not exceed the amount you paid us in that period.</p>
        </Section>

        <Section title="8. Changes to terms">
          <p>We may update these terms with 14 days' notice via email to your registered address. Continued use after the notice period constitutes acceptance.</p>
        </Section>

        <Section title="9. Governing law">
          <p>These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.</p>
          <p>Contact: <a href="mailto:legal@meshalive.in" style={{ color: '#0057ff', textDecoration: 'none' }}>legal@meshalive.in</a></p>
        </Section>
      </div>
    </div>
  );
}
