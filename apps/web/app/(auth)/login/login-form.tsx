"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { api } from '@/lib/api';
import { setSession } from '@/lib/auth';
import { Icon } from '@/components/ui/icon';
import { auth, googleProvider } from '@/lib/firebase';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setError(''); setLoading(true);
    try {
      const res = await api.postNoAuth<{ access_token: string; workspace?: { id: string } }>(
        '/v1/auth/login', { email, password }
      );
      setSession(res.access_token, res.workspace?.id ?? '');
      router.push('/dashboard');
    } catch {
      setError('Incorrect email or password.');
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async () => {
    setError(''); setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      const res = await api.postNoAuth<{ access_token: string; workspace?: { id: string } }>(
        '/v1/auth/firebase', { id_token: idToken }
      );
      setSession(res.access_token, res.workspace?.id ?? '');
      router.push('/dashboard');
    } catch {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 36 }}>
        <h1 style={{
          fontSize: 28, fontWeight: 800, color: '#111111',
          letterSpacing: '-0.03em', margin: '0 0 8px',
        }}>
          Welcome back
        </h1>
        <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>
          Sign in to your Meshalive account
        </p>
      </div>

      {error && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#fef2f2', border: '1px solid #fecaca',
          borderRadius: 10, padding: '10px 14px',
          marginBottom: 20, fontSize: 13, color: '#dc2626',
        }}>
          <Icon name="alert-circle" size={14} />
          {error}
        </div>
      )}

      {/* Google sign-in */}
      <button
        type="button"
        onClick={googleSignIn}
        disabled={googleLoading || loading}
        style={{
          width: '100%', height: 46,
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
        <span style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap' }}>or sign in with email</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <label style={{
            display: 'block', fontSize: 12, fontWeight: 600,
            color: '#374151', marginBottom: 6, letterSpacing: '0.02em',
          }}>
            Email address
          </label>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              width: '100%', height: 44, padding: '0 14px',
              fontSize: 14, color: '#111111',
              background: '#f9fafb',
              border: '1.5px solid #e5e7eb',
              borderRadius: 10, outline: 'none',
              transition: 'all 150ms',
              boxSizing: 'border-box',
            }}
            onFocus={e => { e.target.style.borderColor = '#0057ff'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.1)'; }}
            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', letterSpacing: '0.02em' }}>
              Password
            </label>
            <Link href="/forgot-password" style={{ fontSize: 12, color: '#0057ff', textDecoration: 'none', fontWeight: 500 }}>
              Forgot password?
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type={showPw ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%', height: 44, padding: '0 44px 0 14px',
                fontSize: 14, color: '#111111',
                background: '#f9fafb',
                border: '1.5px solid #e5e7eb',
                borderRadius: 10, outline: 'none',
                transition: 'all 150ms',
                boxSizing: 'border-box',
              }}
              onFocus={e => { e.target.style.borderColor = '#0057ff'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(0,87,255,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
            />
            <button
              type="button"
              onClick={() => setShowPw(v => !v)}
              style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#9ca3af', padding: 4, display: 'flex',
              }}
            >
              <Icon name={showPw ? 'eye-off' : 'eye'} size={16} />
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || googleLoading}
          style={{
            width: '100%', height: 46,
            background: (loading || googleLoading) ? '#6b7280' : '#0057ff',
            color: '#ffffff',
            border: 'none', borderRadius: 10,
            fontSize: 14, fontWeight: 700,
            cursor: (loading || googleLoading) ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 150ms',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => { if (!loading && !googleLoading) (e.target as HTMLButtonElement).style.background = '#0047dd'; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = (loading || googleLoading) ? '#6b7280' : '#0057ff'; }}
        >
          {loading ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: 'spin 0.8s linear infinite' }}>
                <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                <path d="M8 2a6 6 0 0 1 6 6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              Signing in…
            </>
          ) : (
            <>Sign in with email <Icon name="arrow-right" size={15} /></>
          )}
        </button>
      </form>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        <span style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap' }}>New to Meshalive?</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>

      <Link href="/register" style={{ textDecoration: 'none' }}>
        <div style={{
          width: '100%', height: 44,
          border: '1.5px solid #e5e7eb',
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 600, color: '#374151',
          transition: 'all 150ms',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#0057ff'; (e.currentTarget as HTMLDivElement).style.color = '#0057ff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLDivElement).style.color = '#374151'; }}
        >
          Create a free account
        </div>
      </Link>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
