import { NextResponse } from 'next/server';

export async function GET() {
  const articles = [
    {
      title: 'Estrategia de WhatsApp Marketing y Enlaces Cortos en Colombia (2026)',
      slug: 'estrategia-whatsapp-marketing-enlaces-colombia',
      date: 'Sat, 26 Sep 2026 00:00:00 GMT',
      description: 'Guía práctica para emprendedores y marcas en Colombia: cómo usar enlaces cortos, códigos QR y links de WhatsApp (+57) para multiplicar conversiones.',
    },
    {
      title: '10 Best Link in Bio Tools in 2026: Free & Paid Compared',
      slug: 'best-link-in-bio-tools-free-alternatives',
      date: 'Fri, 18 Sep 2026 00:00:00 GMT',
      description: 'Compare Linktree, Beacons, Stan Store and 100% free alternatives with custom domains, zero commission cuts, and verified badges.',
    },
    {
      title: 'Best URL Shortener in India (2026): Free Link Management',
      slug: 'best-url-shortener-india',
      date: 'Wed, 10 Sep 2026 00:00:00 GMT',
      description: 'Complete comparison of URL shorteners for Indian businesses and creators with UPI payment integration and WhatsApp broadcasting.',
    },
  ];

  const rssItems = articles
    .map(
      (a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>https://meshalive.com/blog/${a.slug}</link>
      <guid>https://meshalive.com/blog/${a.slug}</guid>
      <pubDate>${a.date}</pubDate>
      <description><![CDATA[${a.description}]]></description>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Meshalive Blog — Link Infrastructure & Growth Strategy</title>
    <link>https://meshalive.com</link>
    <description>Guides on URL shortening, dynamic QR codes, UTM tracking, and conversational marketing.</description>
    <language>en-us</language>
    <atom:link href="https://meshalive.com/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
