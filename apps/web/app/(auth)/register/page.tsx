'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { setSession } from '@/lib/auth';
import { AuthResult } from '@/lib/types';
import { useToast } from '@/components/ui/toast';

export default function RegisterPage() {
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
      const msg = (err as { error?: { message: string } })?.error?.message ?? 'Registration failed';
      toast({ title: msg, variant: 'bad' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="display" style={{ fontSize: 22, marginBottom: 6 }}>Create your account</h1>
      <p className="muted" style={{ fontSize: 13, marginBottom: 24 }}>Start shortening links in 30 seconds.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label className="label">Name</label>
          <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required autoFocus />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>
        <div>
          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Min 8 characters" minLength={8} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? 'Creating account…' : 'Create account'}
        </button>
      </form>
      <p className="muted" style={{ fontSize: 13, marginTop: 20, textAlign: 'center' }}>
        Already have an account? <Link href="/login" style={{ color: 'var(--pulse)' }}>Sign in</Link>
      </p>
    </>
  );
}
