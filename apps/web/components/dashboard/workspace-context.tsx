'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getWorkspaceId } from '@/lib/auth';

interface WorkspaceCtxValue { workspaceId: string | null; }
const WorkspaceCtx = createContext<WorkspaceCtxValue>({ workspaceId: null });

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  useEffect(() => { setWorkspaceId(getWorkspaceId()); }, []);
  return <WorkspaceCtx.Provider value={{ workspaceId }}>{children}</WorkspaceCtx.Provider>;
}

export const useWorkspace = () => useContext(WorkspaceCtx);
