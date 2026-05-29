import { NextRequest, NextResponse } from 'next/server';

function getMeta(html: string, key: string): string {
  const r1 = new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']*)["']`, 'i');
  const r2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${key}["']`, 'i');
  return (html.match(r1) || html.match(r2))?.[1]?.trim() || '';
}

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

    let target = url.trim();
    if (!/^https?:\/\//i.test(target)) target = 'https://' + target;
    if (isPrivate(target)) return NextResponse.json({ error: 'Private URLs not allowed' }, { status: 422 });

    const res = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MeshaliveBot/1.0; +https://meshalive.com)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(8000),
      redirect: 'follow',
    });

    const html = await res.text();
    const rawTitle = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() || '';

    const og = {
      title: getMeta(html, 'og:title') || rawTitle,
      description: getMeta(html, 'og:description') || getMeta(html, 'description'),
      image: getMeta(html, 'og:image'),
      siteName: getMeta(html, 'og:site_name'),
      type: getMeta(html, 'og:type') || 'website',
      url: getMeta(html, 'og:url') || target,
    };
    const twitter = {
      card: getMeta(html, 'twitter:card') || 'summary',
      title: getMeta(html, 'twitter:title') || og.title,
      description: getMeta(html, 'twitter:description') || og.description,
      image: getMeta(html, 'twitter:image') || og.image,
    };

    const missing: string[] = [];
    if (!og.title) missing.push('og:title');
    if (!og.description) missing.push('og:description');
    if (!og.image) missing.push('og:image');
    if (!twitter.card) missing.push('twitter:card');

    return NextResponse.json({ url: target, og, twitter, rawTitle, missing, score: Math.max(0, 100 - missing.length * 20) });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch URL. Check the URL and try again.' }, { status: 500 });
  }
}
