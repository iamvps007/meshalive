import { Logo } from '@/components/ui/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ marginBottom: 32 }}>
        <Logo size={22} />
      </div>
      <div className="card" style={{ width: '100%', maxWidth: 420, padding: 32 }}>
        {children}
      </div>
      <p className="muted" style={{ fontSize: 12, marginTop: 24, textAlign: 'center' }}>
        © 2026 Meshalive. All rights reserved.
      </p>
    </div>
  );
}
