import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset your Meshalive account password.',
};

export default function ForgotPasswordPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ maxWidth: 420, width: '100%' }}>
        <h1 className="display" style={{ fontSize: 26, marginBottom: 8, letterSpacing: '-0.02em' }}>Reset your password</h1>
        <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32 }}>
          Password reset via email is coming soon. In the meantime, contact us at{' '}
          <a href="mailto:support@meshalive.in" style={{ color: '#0057ff' }}>support@meshalive.in</a>{' '}
          and we will reset it for you within 24 hours.
        </p>
        <Link href="/login" style={{ color: '#0057ff', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}
