"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { setSession } from '@/lib/auth';
import { Icon } from '@/components/ui/icon';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
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

  return (
    <div>
      {/* Header */}
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

      {/* Error */}
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

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

        {/* Email field */}
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
            autoFocus
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

        {/* Password field */}
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

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%', height: 46,
            background: loading ? '#6b7280' : '#0057ff',
            color: '#ffffff',
            border: 'none', borderRadius: 10,
            fontSize: 14, fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 150ms',
            boxShadow: 'none',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => { if (!loading) (e.target as HTMLButtonElement).style.background = '#0047dd'; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = loading ? '#6b7280' : '#0057ff'; }}
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
            <>Sign in <Icon name="arrow-right" size={15} /></>
          )}
        </button>
      </form>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        <span style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap' }}>New to Meshalive?</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>

      {/* Register link */}
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
