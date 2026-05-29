import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Meshalive 7-day money-back guarantee. Refund policy for Starter and Pro plans.',
  alternates: { canonical: 'https://meshalive.com/refund' },
};

export default function RefundPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Refund Policy</h1>
          <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>Last updated: May 2026</p>
        </div>

        {[
          { title: '7-day money-back guarantee', body: 'New subscribers on Starter or Pro plans are eligible for a full refund within 7 days of their first payment. To request a refund, email billing@meshalive.in from your registered address within 7 days of the charge.' },
          { title: 'After 7 days', body: 'Refunds are not available after the 7-day window for monthly plans. The service has already been delivered and consumed.' },
          { title: 'Annual plans', body: 'Annual plan holders who cancel after the 7-day guarantee period may request a prorated refund for unused complete months remaining. Partial months are not refunded.' },
          { title: 'Indian GST', body: 'Refunds on INR transactions are processed net of GST where the GST component has already been remitted to the government. We will issue a credit note in accordance with GST rules.' },
          { title: 'Processing time', body: 'Approved refunds are processed within 5–7 business days via the original payment method (Razorpay for INR, Stripe for USD). Bank processing times may add 2–5 additional days.' },
          { title: 'Contact', body: 'For refund requests: billing@meshalive.in. Please include your registered email, the transaction ID, and the reason for the refund.' },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{title}</h2>
            <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
