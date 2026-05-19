'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { setSession } from '@/lib/auth';
import { AuthResult } from '@/lib/types';
import { useToast } from '@/components/ui/toast';

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.postNoAuth<AuthResult>('/v1/auth/login', { email, password });
      setSession(res.access_token, res.workspace.id);
      router.push('/dashboard/links');
    } catch (err: unknown) {
      const msg = (err as { error?: { message: string } })?.error?.message ?? 'Invalid email or password';
      toast({ title: msg, variant: 'bad' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="display" style={{ fontSize: 22, marginBottom: 6 }}>Welcome back</h1>
      <p className="muted" style={{ fontSize: 13, marginBottom: 24 }}>Sign in to your Meshalive account.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label className="label">Email</label>
          <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required autoFocus />
        </div>
        <div>
          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <p className="muted" style={{ fontSize: 13, marginTop: 20, textAlign: 'center' }}>
        No account? <Link href="/register" style={{ color: 'var(--pulse)' }}>Create one free</Link>
      </p>
    </>
  );
}
