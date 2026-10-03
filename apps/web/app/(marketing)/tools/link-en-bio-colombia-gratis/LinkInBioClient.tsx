'use client';

import React, { useState } from 'react';

export default function LinkInBioClient() {
  const [brandName, setBrandName] = useState('Mi Negocio Colombia');
  const [bioText, setBioText] = useState('Envíos a todo el país 🇨🇴 | Atención directa por WhatsApp');
  const [links, setLinks] = useState([
    { label: '🛍️ Ver Catálogo en WhatsApp', url: 'https://wa.me/573001234567' },
    { label: '💳 Pagar por PSE / Nequi / Bold', url: 'https://meshalive.com' },
    { label: '📸 Síguenos en Instagram', url: 'https://instagram.com' }
  ]);

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', textAlign: 'left' }}>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>Nombre de tu Marca / Perfil</label>
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>Descripción / Propuesta de Valor</label>
        <input
          type="text"
          value={bioText}
          onChange={(e) => setBioText(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1.5px solid #d1d5db', borderRadius: '8px', fontSize: '13px' }}
        />
      </div>

      <div style={{ background: '#f3f4f6', borderRadius: '24px', padding: '24px 16px', maxWidth: '340px', margin: '0 auto', border: '6px solid #1f2937', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15)', textAlign: 'center' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#0057ff', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 800, margin: '0 auto 12px' }}>
          {brandName.charAt(0) || 'M'}
        </div>
        <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111111', margin: '0 0 6px' }}>{brandName}</h4>
        <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 18px', lineHeight: 1.4 }}>{bioText}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {links.map((lnk, idx) => (
            <a
              key={idx}
              href={lnk.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '12px 14px',
                background: '#ffffff',
                border: '1.5px solid #e5e7eb',
                borderRadius: '12px',
                color: '#111111',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {lnk.label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: '20px', fontSize: '10px', color: '#9ca3af', fontWeight: 600 }}>
          ⚡ Desarrollado con Meshalive Colombia
        </div>
      </div>
    </div>
  );
}
