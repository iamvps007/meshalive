'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { api } from '@/lib/api';
import { setSession } from '@/lib/auth';
import { AuthResult } from '@/lib/types';
import { useToast } from '@/components/ui/toast';

export default function RegisterForm() {
  const router = useRouter();
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.postNoAuth<AuthResult>('/v1/auth/register', { name, email, password });
      setSession(res.access_token, res.workspace.id);
      router.push('/dashboard/links');
    } catch (err: unknown) {
      const msg = (err as { error?: { message: string } })?.error?.message ?? 'Registration failed. Please try again.';
      toast({ title: msg, variant: 'bad' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <h1 className="display" style={{ fontSize: 26, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Create your account</h1>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: 0 }}>Start shortening links in 30 seconds. Free forever — no credit card.</p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label className="label">Full name</label>
          <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Rahul Sharma" required autoFocus />
        </div>
        <div>
          <label className="label">Work email</label>
          <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="rahul@company.com" required />
        </div>
        <div>
          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Minimum 8 characters" minLength={8} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading} style={{ marginTop: 8, gap: 8, height: 44 }}>
          {loading ? (
            <><span className="spin" style={{ width: 15, height: 15, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block' }} /> Creating account…</>
          ) : (
            <><Icon name="arrow-right" size={15} /> Create free account</>
          )}
        </button>
      </form>
      <p style={{ fontSize: 12, color: 'var(--fg-muted)', textAlign: 'center', marginTop: 16, lineHeight: 1.6 }}>
        By creating an account you agree to our{' '}
        <Link href="/" style={{ color: 'var(--pulse)', textDecoration: 'none' }}>Terms of Service</Link>
        {' '}and{' '}
        <Link href="/" style={{ color: 'var(--pulse)', textDecoration: 'none' }}>Privacy Policy</Link>.
      </p>
      <div style={{ margin: '20px 0', height: 1, background: '#e5e7eb' }} />
      <p style={{ fontSize: 14, color: 'var(--fg-muted)', textAlign: 'center', margin: 0 }}>
        Already have an account?{' '}
        <Link href="/login" style={{ color: 'var(--pulse)', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
      </p>
    </>
  );
}
