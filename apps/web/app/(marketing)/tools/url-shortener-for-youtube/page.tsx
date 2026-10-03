import type { Metadata } from 'next';
import UrlShortenerTool from '../url-shortener/UrlShortenerTool';

export const metadata: Metadata = {
  title: { absolute: 'Shorten YouTube Links Free — URL Shortener for YouTube | Meshalive' },
  description: 'Shorten YouTube video links for free. Clean short URLs for video descriptions, community posts, and social bios. Track every click with full analytics.',
  keywords: ['shorten youtube link', 'youtube url shortener', 'short youtube link', 'youtube link shortener free', 'shorten youtube video url'],
  alternates: { canonical: 'https://meshalive.com/tools/url-shortener-for-youtube' },
  openGraph: {
    type: 'website', url: 'https://meshalive.com/tools/url-shortener-for-youtube',
    title: { absolute: 'YouTube Link Shortener — Free | Meshalive' },
    description: 'Shorten YouTube links instantly. Track clicks from video descriptions, Shorts, and social profiles.',
    siteName: 'Meshalive',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'SoftwareApplication', name: 'Meshalive YouTube URL Shortener', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Why shorten YouTube links?', acceptedAnswer: { '@type': 'Answer', text: 'YouTube URLs are long and ugly (youtube.com/watch?v=xxxxxxxxxxx). A short branded link like msha.live/my-video looks clean in video descriptions, Shorts, thumbnails, and Instagram bios.' } },
      { '@type': 'Question', name: 'Can I track clicks on my YouTube short link?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Meshalive shows total clicks, unique visitors, country, and device. Combine with YouTube Analytics to see which external sources drive the most views.' } },
      { '@type': 'Question', name: 'Does shortening a YouTube link hurt SEO?', acceptedAnswer: { '@type': 'Answer', text: 'No. Meshalive uses 301 redirects which pass full link equity. YouTube video SEO is not affected by using a short link in your description.' } },
      { '@type': 'Question', name: 'Is there a limit on how many YouTube links I can shorten?', acceptedAnswer: { '@type': 'Answer', text: 'The free plan allows 100 tracked links per month. You can also shorten anonymously (no account) with no monthly limit — anonymous links are tracked for 90 days.' } },
    ]},
  ],
};

const S = {
  page: { width: '100%', paddingBottom: 80, color: '#111111', fontFamily: 'inherit' },
  section: { maxWidth: 860, margin: '0 auto', padding: '0 16px 56px' },
  h2: { fontSize: 'clamp(22px,4vw,30px)', fontWeight: 700, color: '#111111', margin: '0 0 10px', letterSpacing: '-0.02em' },
  divider: { border: 'none', borderTop: '1px solid #e5e7eb', margin: '0 auto 56px', maxWidth: 860 },
};

export default function YoutubeShortenerPage() {
  return (
    <main style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,8vw,88px) 16px clamp(40px,6vw,64px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, color: '#dc2626', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 20 }}>
          YouTube Link Shortener
        </div>
        <h1 style={{ fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#111111', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Shorten YouTube links.<br />Track every view source.
        </h1>
        <p style={{ fontSize: 'clamp(16px,2.5vw,19px)', color: '#6b7280', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.65 }}>
          Paste any YouTube URL and get a clean short link for your video description, bio, or Shorts. See exactly where your clicks come from — free.
        </p>
        <UrlShortenerTool />
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Where creators use short YouTube links</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginTop: 20 }}>
          {[
            { title: 'Video descriptions', body: 'Link to your other videos, merch, or courses without a wall of ugly URLs.' },
            { title: 'Instagram & Twitter bio', body: 'One short link to your latest video. Update the destination without changing the link.' },
            { title: 'YouTube Shorts', body: 'Short links fit naturally in Shorts descriptions and pinned comments.' },
            { title: 'Community posts', body: 'Clean links drive more clicks in YouTube Community posts than raw youtube.com URLs.' },
          ].map(c => (
            <div key={c.title} style={{ padding: '20px 24px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={S.divider} />

      <section style={S.section}>
        <h2 style={S.h2}>Frequently asked questions</h2>
        <div style={{ marginTop: 20, border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }}>
          {(jsonLd['@graph'][1] as any).mainEntity.map((faq: any, i: number) => (
            <details key={i} style={{ borderBottom: i < 3 ? '1px solid #e5e7eb' : 'none' }}>
              <summary style={{ padding: '16px 20px', fontSize: 15, fontWeight: 600, cursor: 'pointer', listStyle: 'none' }}>{faq.name}</summary>
              <p style={{ padding: '0 20px 16px', margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
