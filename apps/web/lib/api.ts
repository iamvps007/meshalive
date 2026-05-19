import { getAccessToken, getWorkspaceId, setSession, clearSession } from './auth';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

interface FetchOptions extends RequestInit {
  skipAuth?: boolean;
}

async function apiFetch<T>(path: string, opts: FetchOptions = {}): Promise<T> {
  const { skipAuth, ...init } = opts;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init.headers as Record<string, string>),
  };

  if (!skipAuth) {
    const token = getAccessToken();
    const wsId = getWorkspaceId();
    if (token) headers['Authorization'] = `Bearer ${token}`;
    if (wsId) headers['X-Workspace-ID'] = wsId;
  }

  const res = await fetch(`${API_BASE}${path}`, { ...init, headers, credentials: 'include' });

  // Auto-refresh on 401
  if (res.status === 401 && !skipAuth) {
    const refreshed = await tryRefresh();
    if (refreshed) {
      const token = getAccessToken();
      const wsId = getWorkspaceId();
      if (token) headers['Authorization'] = `Bearer ${token}`;
      if (wsId) headers['X-Workspace-ID'] = wsId;
      const retry = await fetch(`${API_BASE}${path}`, { ...init, headers, credentials: 'include' });
      if (!retry.ok) {
        const err = await retry.json();
        throw err;
      }
      if (retry.status === 204) return undefined as T;
      return retry.json() as Promise<T>;
    } else {
      clearSession();
      window.location.href = '/login';
      throw new Error('Session expired');
    }
  }

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

async function tryRefresh(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/v1/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });
    if (!res.ok) return false;
    const data: { access_token: string } = await res.json();
    setSession(data.access_token, getWorkspaceId() ?? '');
    return true;
  } catch {
    return false;
  }
}

export const api = {
  get: <T>(path: string) => apiFetch<T>(path),
  post: <T>(path: string, body?: unknown) =>
    apiFetch<T>(path, { method: 'POST', body: body !== undefined ? JSON.stringify(body) : undefined }),
  patch: <T>(path: string, body?: unknown) =>
    apiFetch<T>(path, { method: 'PATCH', body: body !== undefined ? JSON.stringify(body) : undefined }),
  delete: <T>(path: string) => apiFetch<T>(path, { method: 'DELETE' }),
  postNoAuth: <T>(path: string, body?: unknown) =>
    apiFetch<T>(path, { method: 'POST', skipAuth: true, body: body !== undefined ? JSON.stringify(body) : undefined }),
};
