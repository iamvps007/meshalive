'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithPopup } from 'firebase/auth';
import { Icon } from '@/components/ui/icon';
import { api } from '@/lib/api';
import { setSession } from '@/lib/auth';
import { AuthResult } from '@/lib/types';
import { useToast } from '@/components/ui/toast';
import { auth, googleProvider } from '@/lib/firebase';

export default function RegisterForm() {
  const router = useRouter();
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

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

  const googleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      const res = await api.postNoAuth<{ access_token: string; workspace?: { id: string } }>(
        '/v1/auth/firebase', { id_token: idToken }
      );
      setSession(res.access_token, res.workspace?.id ?? '');
      router.push('/dashboard/links');
    } catch (err: unknown) {
      const msg = (err as { error?: { message: string } })?.error?.message ?? 'Google sign-in failed. Please try again.';
      toast({ title: msg, variant: 'bad' });
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <h1 className="display" style={{ fontSize: 26, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Create your account</h1>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: 0 }}>Start shortening links in 30 seconds. Free forever — no credit card.</p>
      </div>

      {/* Google sign-in */}
      <button
        type="button"
        onClick={googleSignIn}
        disabled={googleLoading || loading}
        style={{
          width: '100%', height: 44,
          background: '#fff',
          color: '#374151',
          border: '1.5px solid #e5e7eb',
          borderRadius: 10,
          fontSize: 14, fontWeight: 600,
          cursor: (googleLoading || loading) ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          transition: 'all 150ms',
          marginBottom: 20,
          opacity: (googleLoading || loading) ? 0.7 : 1,
        }}
        onMouseEnter={e => { if (!googleLoading && !loading) { (e.currentTarget as HTMLButtonElement).style.borderColor = '#0057ff'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 3px rgba(0,87,255,0.08)'; } }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
      >
        {googleLoading ? (
          <><span style={{ width: 16, height: 16, border: '2px solid #e5e7eb', borderTopColor: '#374151', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} /> Signing in…</>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Continue with Google
          </>
        )}
      </button>

      {/* OR divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        <span style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap' }}>or sign up with email</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
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
        <button className="btn btn-primary" type="submit" disabled={loading || googleLoading} style={{ marginTop: 8, gap: 8, height: 44 }}>
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
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
