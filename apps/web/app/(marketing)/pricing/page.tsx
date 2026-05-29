import type { Metadata } from 'next';
import PricingCards from './pricing-cards';

export const metadata: Metadata = {
  title: { absolute: 'URL Shortener Pricing, Plans & Feature Comparison | Meshalive' },
  description: 'Compare Meshalive pricing plans for short links, analytics, QR codes, branded domains, and API access. Start free and upgrade when you need more.',
  alternates: { canonical: 'https://meshalive.com/pricing' },
  openGraph: {
    title: 'URL Shortener Pricing, Plans & Feature Comparison | Meshalive',
    description: 'Meshalive pricing for branded short links, click analytics, QR codes, and API access.',
    url: 'https://meshalive.com/pricing',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I start for free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Meshalive is completely free — unlimited links, unlimited clicks with no credit card required.' } },
    { '@type': 'Question', name: 'Is the REST API on all paid plans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The API is included from Free (unlimited links, full analytics) — not locked behind enterprise tiers like Bitly or Rebrandly.' } },
    { '@type': 'Question', name: 'Can I cancel anytime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. No lock-in. Cancel from your billing dashboard and your plan ends at the close of the billing period.' } },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PricingCards />
    </>
  );
}
