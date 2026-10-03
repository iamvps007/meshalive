import { getAccessToken, getWorkspaceId, setSession, clearSession } from './auth';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

interface FetchOptions extends RequestInit {
  skipAuth?: boolean;
}

function parseError(errJson: any, status: number): Error {
  const msg =
    errJson?.error?.message ||
    (typeof errJson?.error === 'string' ? errJson.error : '') ||
    errJson?.message ||
    (status === 401 ? 'Session expired. Please sign in again.' : status === 409 ? 'This slug is already taken. Please choose another.' : `Request failed with status ${status}`);
  const err = new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
  (err as any).data = errJson;
  (err as any).status = status;
  return err;
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
        const errJson = await retry.json().catch(() => ({}));
        throw parseError(errJson, retry.status);
      }
      if (retry.status === 204) return undefined as T;
      return retry.json() as Promise<T>;
    } else {
      clearSession();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      throw new Error('Session expired. Please log in again.');
    }
  }

  if (!res.ok) {
    const errJson = await res.json().catch(() => ({}));
    throw parseError(errJson, res.status);
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
  put: <T>(path: string, body?: unknown) =>
    apiFetch<T>(path, { method: 'PUT', body: body !== undefined ? JSON.stringify(body) : undefined }),
  patch: <T>(path: string, body?: unknown) =>
    apiFetch<T>(path, { method: 'PATCH', body: body !== undefined ? JSON.stringify(body) : undefined }),
  delete: <T>(path: string) => apiFetch<T>(path, { method: 'DELETE' }),
  postNoAuth: <T>(path: string, body?: unknown) =>
    apiFetch<T>(path, { method: 'POST', skipAuth: true, body: body !== undefined ? JSON.stringify(body) : undefined }),
};
