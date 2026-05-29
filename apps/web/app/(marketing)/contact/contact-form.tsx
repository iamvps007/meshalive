'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 800);
  };

  if (sent) {
    return (
      <div style={{ background: 'rgba(16,124,16,0.08)', border: '1px solid rgba(16,124,16,0.25)', borderRadius: 12, padding: '28px', textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#107c10', marginBottom: 8 }}>Message received</div>
        <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>We will get back to you within 24 hours on business days (IST).</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label className="label">Name</label>
        <input className="input" type="text" placeholder="Your name" required />
      </div>
      <div>
        <label className="label">Email</label>
        <input className="input" type="email" placeholder="you@company.com" required />
      </div>
      <div>
        <label className="label">Subject</label>
        <select className="select">
          <option>General inquiry</option>
          <option>Billing support</option>
          <option>Technical support</option>
          <option>Report abuse</option>
          <option>Sales / Enterprise</option>
        </select>
      </div>
      <div>
        <label className="label">Message</label>
        <textarea className="textarea" placeholder="How can we help?" required style={{ minHeight: 120 }} />
      </div>
      <button className="btn btn-primary" type="submit" disabled={loading} style={{ height: 44 }}>
        {loading ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
