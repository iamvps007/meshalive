import type { Metadata } from 'next';
import { Icon } from '@/components/ui/icon';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Meshalive. Email support, billing, and sales contact details.',
  alternates: { canonical: 'https://meshalive.com/contact' },
};

const CHANNELS = [
  { icon: 'mail', label: 'General support', value: 'support@meshalive.in', href: 'mailto:support@meshalive.in', note: 'Response within 24h (business days IST)' },
  { icon: 'credit-card', label: 'Billing & invoices', value: 'billing@meshalive.in', href: 'mailto:billing@meshalive.in', note: 'Refunds, GST queries, plan changes' },
  { icon: 'shield', label: 'Security & abuse', value: 'security@meshalive.in', href: 'mailto:security@meshalive.in', note: 'Report vulnerabilities or abuse' },
  { icon: 'whatsapp', label: 'WhatsApp Business', value: 'Chat with us', href: '#', note: 'For Indian customers — quick queries' },
];

export default function ContactPage() {
  return (
    <div style={{ background: '#ffffff', color: '#111111', padding: '72px 32px 96px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <h1 className="display" style={{ fontSize: 'clamp(32px,4vw,48px)', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Get in touch</h1>
          <p style={{ fontSize: 17, color: '#6b7280', margin: 0 }}>We are a small team and we respond quickly.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 24px' }}>Contact channels</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {CHANNELS.map(c => (
                <a key={c.label} href={c.href} style={{ display: 'flex', gap: 14, textDecoration: 'none', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '16px 18px', transition: 'all 150ms' }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057ff', flexShrink: 0 }}>
                    <Icon name={c.icon} size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{c.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111111' }}>{c.value}</div>
                    <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{c.note}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 24px' }}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
