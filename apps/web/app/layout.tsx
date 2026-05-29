import '../styles/globals.css';
import Script from 'next/script';
import { ToastProvider } from '@/components/ui/toast';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://meshalive.com'),
  title: { default: 'Meshalive — Free URL Shortener with Analytics', template: '%s | Meshalive' },
  description: 'Free URL shortener with real-time click analytics, dynamic QR codes, and custom slugs. Shorten any URL instantly. Free forever — no limits, no credit card.',
  keywords: ['URL shortener', 'free url shortener', 'link shortener', 'shorten url', 'url shortener with analytics', 'free url shortener with qr code', 'bitly alternative', 'tinyurl alternative', 'short link generator', 'custom short links', 'QR code generator', 'link analytics', 'meshalive'],
  authors: [{ name: 'meshalive labs', url: 'https://meshalive.com' }],
  creator: 'meshalive labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meshalive.com',
    siteName: 'Meshalive',
    title: 'Meshalive — Free URL Shortener with Analytics',
    description: 'Free URL shortener with click analytics, dynamic QR codes, and custom slugs. No account needed.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'meshalive — the calm link platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meshalive — Free URL Shortener with Analytics',
    description: 'Branded short links, QR codes, click analytics. Free URL shortener.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://meshalive.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3670526912258735" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3670526912258735" crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Meshalive",
            "url": "https://meshalive.com",
            "description": "Free URL shortener with real-time click analytics, dynamic QR codes, and custom slugs. No account needed.",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "URL shortening",
              "Click analytics",
              "QR code generation",
              "Custom slugs",
              "REST API"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "128"
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Meshalive Labs",
            "url": "https://meshalive.com",
            "logo": "https://meshalive.com/logo.png",
            "sameAs": []
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Meshalive",
            "alternateName": "Meshalive — Free URL Shortener",
            "url": "https://meshalive.com"
          }) }}
        />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-041WHPFK4R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-041WHPFK4R');
          ` }}
        />
      </body>
    </html>
  );
}
