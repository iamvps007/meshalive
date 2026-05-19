'use client';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface Toast { id: string; title: string; message?: string; variant?: 'info' | 'bad' | 'warn'; duration?: number; }
type ToastFn = (opts: Omit<Toast, 'id'>) => void;
const ToastCtx = createContext<ToastFn>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toast: ToastFn = useCallback((opts) => {
    const id = Math.random().toString(36).slice(2);
    const t: Toast = { id, variant: 'info', duration: 4000, ...opts };
    setToasts(ts => [...ts, t]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), t.duration);
  }, []);
  return (
    <ToastCtx.Provider value={toast}>
      {children}
      <div className="toast-wrap">
        {toasts.map(t => (
          <div key={t.id} className={`toast${t.variant === 'bad' ? ' toast-bad' : t.variant === 'warn' ? ' toast-warn' : ''}`}>
            <div style={{ flex: 1, fontSize: 13 }}>
              <div style={{ fontWeight: 600 }}>{t.title}</div>
              {t.message && <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{t.message}</div>}
            </div>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export const useToast = () => useContext(ToastCtx);
