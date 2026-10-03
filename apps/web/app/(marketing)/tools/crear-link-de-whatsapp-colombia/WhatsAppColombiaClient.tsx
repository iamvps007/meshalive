'use client';

import React, { useState } from 'react';

export default function WhatsAppColombiaClient() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Normalize phone number for Colombia (+57)
  const cleanDigits = phone.replace(/\D/g, '');
  const finalNumber = cleanDigits.startsWith('57')
    ? cleanDigits
    : (cleanDigits ? `57${cleanDigits}` : '');

  const waUrl = finalNumber
    ? `https://wa.me/${finalNumber}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ''}`
    : '';

  const handleCopy = async () => {
    if (!waUrl) return;
    try {
      await navigator.clipboard.writeText(waUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid #e5e7eb',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
      }}
    >
      <div style={{ marginBottom: '18px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 700,
            color: '#111111',
            marginBottom: '8px',
          }}
        >
          Número Celular en Colombia (10 dígitos)
        </label>
        <div
          style={{
            display: 'flex',
            border: '1.5px solid #d1d5db',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              padding: '12px 14px',
              background: '#f3f4f6',
              fontWeight: 700,
              fontSize: '14px',
              color: '#374151',
              borderRight: '1.5px solid #d1d5db',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            🇨🇴 +57
          </span>
          <input
            type="tel"
            placeholder="300 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 14px',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              fontWeight: 500,
              color: '#111111',
            }}
          />
        </div>
        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px', margin: '6px 0 0' }}>
          Ingresa los 10 dígitos de tu celular (ej: 310, 320, 300...). El prefijo +57 se añade solo.
        </p>
      </div>

      <div style={{ marginBottom: '22px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '13px',
            fontWeight: 700,
            color: '#111111',
            marginBottom: '8px',
          }}
        >
          Mensaje Personalizado Inicial (Opcional)
        </label>
        <textarea
          rows={3}
          placeholder="Hola, me interesa conocer más sobre su catálogo disponible en Colombia..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '12px 14px',
            border: '1.5px solid #d1d5db',
            borderRadius: '10px',
            outline: 'none',
            fontSize: '14px',
            fontFamily: 'inherit',
            color: '#111111',
          }}
        />
        <p style={{ fontSize: '12px', color: '#6b7280', margin: '6px 0 0' }}>
          Este mensaje aparecerá escrito en el chat del cliente cuando pulse tu enlace.
        </p>
      </div>

      {waUrl ? (
        <div
          style={{
            background: '#f0fdf4',
            border: '1.5px solid #bbf7d0',
            borderRadius: '14px',
            padding: '18px',
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
            Tu Enlace Directo de WhatsApp:
          </div>
          <div
            style={{
              padding: '10px 12px',
              background: '#ffffff',
              border: '1px solid #86efac',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#15803d',
              wordBreak: 'break-all',
              userSelect: 'all',
              marginBottom: '12px',
            }}
          >
            {waUrl}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleCopy}
              style={{
                flex: 1,
                padding: '12px',
                background: '#16a34a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              {copied ? '✓ ¡Enlace Copiado!' : 'Copiar Enlace'}
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 16px',
                background: '#e5e7eb',
                color: '#374151',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Probar Chat ↗
            </a>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: '18px',
            background: '#f9fafb',
            border: '1px dashed #d1d5db',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#6b7280',
          }}
        >
          Escribe tu número celular arriba para generar tu enlace instantáneo.
        </div>
      )}
    </div>
  );
}
