import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isProtected = req.nextUrl.pathname.startsWith('/dashboard');
  const hasRefreshCookie = req.cookies.has('refresh_token');
  if (isProtected && !hasRefreshCookie) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
