'use client';
import { Sidebar } from '@/components/dashboard/sidebar';
import { WorkspaceProvider } from '@/components/dashboard/workspace-context';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <WorkspaceProvider>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
        <Sidebar />
        <main style={{ flex: 1, minWidth: 0 }}>
          {children}
        </main>
      </div>
    </WorkspaceProvider>
  );
}
