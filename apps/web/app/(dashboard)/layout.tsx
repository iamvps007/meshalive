'use client';
import { Sidebar } from '@/components/dashboard/sidebar';
import { WorkspaceProvider } from '@/components/dashboard/workspace-context';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <WorkspaceProvider>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#07080E' }}>
        <Sidebar />
        <main style={{
          flex: 1,
          minWidth: 0,
          background: 'var(--ink)',
          backgroundImage: 'radial-gradient(ellipse at 20% 0%, rgba(108,92,231,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(0,229,168,0.03) 0%, transparent 50%)',
        }}>
          {children}
        </main>
      </div>
    </WorkspaceProvider>
  );
}
