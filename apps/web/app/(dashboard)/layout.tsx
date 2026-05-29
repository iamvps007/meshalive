'use client';
import { WorkspaceProvider } from '@/components/dashboard/workspace-context';
import { Sidebar } from '@/components/dashboard/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <WorkspaceProvider>
      <div data-theme="light" style={{ display: 'flex', minHeight: '100vh', background: '#ffffff', fontFamily: '"Geist", "Inter", sans-serif' }}>
        <Sidebar />
        <main style={{ flex: 1, minWidth: 0, background: '#ffffff', minHeight: '100vh' }}>
          {children}
        </main>
      </div>
    </WorkspaceProvider>
  );
}
