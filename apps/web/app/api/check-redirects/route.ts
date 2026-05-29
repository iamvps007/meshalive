import { NextRequest, NextResponse } from 'next/server';

const STATUS_LABELS: Record<number, string> = {
  200: 'OK', 201: 'Created', 204: 'No Content',
  301: 'Moved Permanently', 302: 'Found', 303: 'See Other',
  307: 'Temporary Redirect', 308: 'Permanent Redirect',
  400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden',
  404: 'Not Found', 410: 'Gone', 500: 'Internal Server Error',
  502: 'Bad Gateway', 503: 'Service Unavailable',
};

function statusLabel(s: number) { return STATUS_LABELS[s] || `Status ${s}`; }

function isPrivate(url: string): boolean {
  try {
    const h = new URL(url).hostname;
    return /^(localhost|127\.\d+\.\d+\.\d+|10\.\d+\.\d+\.\d+|192\.168\.|169\.254\.)/.test(h);
  } catch { return true; }
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== 'string') return NextResponse.json({ error: 'URL required' }, { status: 400 });

    let current = url.trim();
    if (!/^https?:\/\//i.test(current)) current = 'https://' + current;
    if (isPrivate(current)) return NextResponse.json({ error: 'Private URLs not allowed' }, { status: 422 });

    const chain: { url: string; status: number; label: string; type: string }[] = [];

    for (let i = 0; i < 12; i++) {
      let res: Response;
      try {
        res = await fetch(current, {
          redirect: 'manual',
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MeshaliveBot/1.0; +https://meshalive.com)' },
          signal: AbortSignal.timeout(6000),
        });
      } catch {
        chain.push({ url: current, status: 0, label: 'Connection failed', type: 'error' });
        break;
      }

      const isRedirect = res.status >= 300 && res.status < 400;
      chain.push({
        url: current,
        status: res.status,
        label: statusLabel(res.status),
        type: isRedirect ? 'redirect' : res.status === 200 ? 'final' : 'error',
      });

      if (!isRedirect) break;
      const loc = res.headers.get('location');
      if (!loc) break;
      current = loc.startsWith('http') ? loc : new URL(loc, current).href;
      if (isPrivate(current)) break;
    }

    return NextResponse.json({ chain, hops: chain.length - 1 });
  } catch {
    return NextResponse.json({ error: 'Failed to check redirects' }, { status: 500 });
  }
}
