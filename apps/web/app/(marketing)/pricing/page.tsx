import type { Metadata } from 'next';
import PricingCards from './pricing-cards';

export const metadata: Metadata = {
  title: { absolute: 'URL Shortener Pricing, Plans & Feature Comparison | Meshalive' },
  description: 'Meshalive is 100% free forever with unlimited links, analytics, dynamic QR codes, and API access. No credit card required.',
  alternates: { canonical: 'https://meshalive.com/pricing' },
  openGraph: {
    title: 'URL Shortener Pricing, Plans & Feature Comparison | Meshalive',
    description: 'Meshalive is 100% free forever for branded short links, click analytics, QR codes, and API access.',
    url: 'https://meshalive.com/pricing',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I start for free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Meshalive is completely free — unlimited links, unlimited clicks with no credit card required.' } },
    { '@type': 'Question', name: 'Is the REST API included free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Full API access is included free — no paid plan required, unlike Bitly or Rebrandly which charge $35+/month.' } },
    { '@type': 'Question', name: 'Can I cancel anytime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. No lock-in. Meshalive is 100% free forever with no credit card, no subscription, and no cancellation needed.' } },
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
