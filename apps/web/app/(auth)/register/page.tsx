import type { Metadata } from 'next';
import RegisterForm from './register-form';

export const metadata: Metadata = {
  title: 'Create Account — Meshalive Free URL Shortener',
  description: 'Create a free Meshalive account. 25 short links, click analytics, and meshalive.com domain — no credit card required.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://meshalive.com/register' },
};

export default function RegisterPage() {
  return <RegisterForm />;
}
