'use client';
import React, { useState } from 'react';

export default function VCardTool() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', title: '', website: '', linkedin: '' });
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const buildVCard = () => {
    const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
    if (form.name) lines.push(`FN:${form.name}`, `N:${form.name.split(' ').slice(1).join(' ')};${form.name.split(' ')[0]};;;`);
    if (form.phone) lines.push(`TEL;TYPE=CELL:${form.phone}`);
    if (form.email) lines.push(`EMAIL:${form.email}`);
    if (form.company) lines.push(`ORG:${form.company}`);
    if (form.title) lines.push(`TITLE:${form.title}`);
    if (form.website) lines.push(`URL:${form.website}`);
    if (form.linkedin) lines.push(`URL;type=LinkedIn:${form.linkedin}`);
    lines.push('END:VCARD');
    return lines.join('\n');
  };

  const generate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name && !form.phone) return;
    const vcard = buildVCard();
    const encoded = encodeURIComponent(vcard);
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=M&data=${encoded}`);
  };

  const copyVCard = async () => {
    await navigator.clipboard.writeText(buildVCard());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Field = ({ label, k, placeholder, type = 'text' }: { label: string; k: keyof typeof form; placeholder: string; type?: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>{label}</label>
      <input type={type} value={form[k]} onChange={set(k)} placeholder={placeholder}
        style={{ height: 44, padding: '0 14px', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.2)',
          borderRadius: 10, fontSize: 14, color: '#ffffff', outline: 'none', fontFamily: 'inherit',
          '::placeholder': { color: 'rgba(255,255,255,0.4)' } } as React.CSSProperties}
        onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
      />
    </div>
  );

  return (
    <div style={{ width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <form onSubmit={generate}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 14, marginBottom: 20 }}>
          <Field label="Full Name *" k="name" placeholder="Vaibhav Singh" />
          <Field label="Phone *" k="phone" placeholder="+91 98765 43210" type="tel" />
          <Field label="Email" k="email" placeholder="vaibhav@company.com" type="email" />
          <Field label="Company" k="company" placeholder="Jumbotail" />
          <Field label="Job Title" k="title" placeholder="Founder & CEO" />
          <Field label="Website" k="website" placeholder="https://yoursite.com" />
        </div>
        <button type="submit" disabled={!form.name && !form.phone} style={{
          height: 52, padding: '0 32px', borderRadius: 12, fontSize: 15, fontWeight: 700,
          border: 'none', background: !form.name && !form.phone ? 'rgba(255,255,255,0.3)' : '#ffffff',
          color: !form.name && !form.phone ? 'rgba(255,255,255,0.5)' : '#0057ff',
          cursor: !form.name && !form.phone ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
          Generate QR Business Card
        </button>
      </form>

      {qrUrl && (
        <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start',
          background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.15)' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={qrUrl} alt="vCard QR Code" width={200} height={200} style={{ borderRadius: 12, background: '#ffffff', padding: 8, display: 'block' }} />
            <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center' }}>
              <a href={qrUrl} download="business-card-qr.png" style={{ height: 36, padding: '0 16px', borderRadius: 8, background: '#ffffff', color: '#0057ff', fontSize: 13, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Download PNG
              </a>
              <button onClick={copyVCard} style={{ height: 36, padding: '0 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.4)', background: 'transparent', color: '#ffffff', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                {copied ? 'Copied!' : 'Copy vCard'}
              </button>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 12 }}>Preview</div>
            <div style={{ background: '#ffffff', borderRadius: 12, padding: '18px 20px', color: '#111111' }}>
              {form.name && <div style={{ fontSize: 18, fontWeight: 800, color: '#111111', marginBottom: 4 }}>{form.name}</div>}
              {form.title && <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 2 }}>{form.title}</div>}
              {form.company && <div style={{ fontSize: 13, fontWeight: 600, color: '#0057ff', marginBottom: 10 }}>{form.company}</div>}
              {form.phone && <div style={{ fontSize: 13, color: '#374151', marginBottom: 2 }}>📞 {form.phone}</div>}
              {form.email && <div style={{ fontSize: 13, color: '#374151', marginBottom: 2 }}>✉ {form.email}</div>}
              {form.website && <div style={{ fontSize: 13, color: '#0057ff' }}>🌐 {form.website}</div>}
            </div>
            <p style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Share this QR code on your phone, print it on business cards, or display it at your booth. Anyone who scans it can save your contact instantly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
