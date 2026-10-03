'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export default function VcardQrClient() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    if (!firstName.trim() && !phone.trim()) {
      setQrUrl('');
      return;
    }
    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone && !cleanPhone.startsWith('57')) cleanPhone = `57${cleanPhone}`;

    const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName};;;\nFN:${firstName} ${lastName}\nORG:${company}\nTITLE:${jobTitle}\nTEL;TYPE=CELL:+${cleanPhone}\nEMAIL;TYPE=WORK:${email}\nEND:VCARD`;

    QRCode.toDataURL(vcard, {
      width: 320,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
      errorCorrectionLevel: 'M',
    })
      .then((url) => setQrUrl(url))
      .catch(() => setQrUrl(''));
  }, [firstName, lastName, phone, email, company, jobTitle]);

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', textAlign: 'left' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Nombre</label>
              <input type="text" placeholder="Ej: Carlos" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Apellido</label>
              <input type="text" placeholder="Ej: Gómez" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
            </div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Celular Colombia (+57)</label>
            <input type="tel" placeholder="310 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Correo Electrónico</label>
            <input type="email" placeholder="carlos@empresa.com.co" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Empresa</label>
              <input type="text" placeholder="Ej: Soluciones SAS" value={company} onChange={(e) => setCompany(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Cargo</label>
              <input type="text" placeholder="Ej: Gerente Comercial" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }} />
            </div>
          </div>

          {qrUrl && (
            <a
              href={qrUrl}
              download={`vcard-${firstName || 'contacto'}.png`}
              style={{ display: 'inline-block', width: '100%', textAlign: 'center', boxSizing: 'border-box', padding: '12px 18px', background: '#0057ff', color: '#ffffff', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
            >
              Descargar Código vCard (PNG) ↓
            </a>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
          {qrUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={qrUrl} alt="QR vCard" style={{ width: '180px', height: '180px', borderRadius: '8px', background: '#ffffff', padding: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          ) : (
            <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', border: '1.5px dashed #d1d5db', borderRadius: '8px', fontSize: '13px', textAlign: 'center', padding: '10px' }}>
              Escribe tu nombre y celular
            </div>
          )}
          <span style={{ fontSize: '11px', color: '#6b7280', marginTop: '12px', fontWeight: 600 }}>Guarda el contacto en 1 toque</span>
        </div>
      </div>
    </div>
  );
}
