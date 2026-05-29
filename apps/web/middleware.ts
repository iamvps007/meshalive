import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isProtected = req.nextUrl.pathname.startsWith('/dashboard');
  if (!isProtected) return NextResponse.next();

  const refreshCookie = req.cookies.get('refresh_token');
  // Refresh tokens are 64 hex chars (32 random bytes). Reject anything that
  // doesn't match — blocks trivially forged cookies without needing the secret.
  const validFormat = refreshCookie && /^[a-f0-9]{64}$/.test(refreshCookie.value);
  if (!validFormat) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
