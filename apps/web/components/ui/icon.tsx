'use client';
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export function Icon({ name, size = 18, ...rest }: IconProps) {
  const s = { stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  const wrap = (children: React.ReactNode) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...s} {...rest}>{children}</svg>
  );
  switch (name.toLowerCase()) {
    case 'link': return wrap(<><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></>);
    case 'chart': return wrap(<><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 6-7"/></>);
    case 'qr': return wrap(<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 17v4"/></>);
    case 'globe': return wrap(<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>);
    case 'plug': return wrap(<><path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-14 0z"/><path d="M12 18v4"/></>);
    case 'gear': return wrap(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>);
    case 'help': return wrap(<><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 1-1 1.7"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/></>);
    case 'sun': return wrap(<><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></>);
    case 'moon': return wrap(<path d="M20 14.5A8 8 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>);
    case 'plus': return wrap(<><path d="M12 5v14M5 12h14"/></>);
    case 'search': return wrap(<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>);
    case 'bell': return wrap(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21a2 2 0 0 0 4 0"/></>);
    case 'check': return wrap(<path d="M5 12l4 4 10-10"/>);
    case 'x': return wrap(<><path d="M6 6l12 12M18 6 6 18"/></>);
    case 'copy': return wrap(<><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M5 16V5a2 2 0 0 1 2-2h11"/></>);
    case 'more': return wrap(<><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></>);
    case 'edit': return wrap(<><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></>);
    case 'trash': return wrap(<><path d="M4 7h16M9 7V4h6v3M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/></>);
    case 'archive': return wrap(<><rect x="3" y="3" width="18" height="5" rx="1"/><path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M10 12h4"/></>);
    case 'eye': return wrap(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></>);
    case 'share': return wrap(<><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="m8.5 10.5 7-3M8.5 13.5l7 3"/></>);
    case 'arrow-right': return wrap(<path d="M5 12h14M13 6l6 6-6 6"/>);
    case 'arrow-left': return wrap(<path d="M19 12H5M11 18l-6-6 6-6"/>);
    case 'arrow-up-right': return wrap(<><path d="M7 17 17 7M8 7h9v9"/></>);
    case 'chevron-down': return wrap(<path d="m6 9 6 6 6-6"/>);
    case 'chevron-right': return wrap(<path d="m9 6 6 6-6 6"/>);
    case 'chevron-up': return wrap(<path d="m6 15 6-6 6 6"/>);
    case 'sparkle':
    case 'sparkles': return wrap(<><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></>);
    case 'zap': return wrap(<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>);
    case 'shield': return wrap(<><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></>);
    case 'users': return wrap(<><circle cx="9" cy="8" r="3"/><path d="M3 21a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15 21a4 4 0 0 1 6-3.5"/></>);
    case 'credit-card': return wrap(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></>);
    case 'key': return wrap(<><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9 2 2-2 2 2 2-2 2-2-2-2 2"/></>);
    case 'webhook': return wrap(<><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><circle cx="12" cy="6" r="3"/><path d="M9 17h6M8 9l-3 5M16 9l3 5"/></>);
    case 'lock': return wrap(<><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>);
    case 'alert': return wrap(<><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/></>);
    case 'download': return wrap(<><path d="M12 3v13M7 11l5 5 5-5M5 21h14"/></>);
    case 'whatsapp': return wrap(<><path d="M3 21l1.7-5A9 9 0 1 1 8 19.3z"/><path d="M9 9c.5 2 2 3.5 4 4l1.5-1.5L17 13c0 2-2 3-3.5 2.7A9 9 0 0 1 7 9z"/></>);
    case 'tag': return wrap(<><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/></>);
    case 'calendar': return wrap(<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>);
    case 'filter': return wrap(<path d="M3 5h18l-7 9v6l-4-2v-4z"/>);
    case 'menu': return wrap(<path d="M4 6h16M4 12h16M4 18h16"/>);
    case 'send': return wrap(<><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></>);
    case 'mail':
    case 'email': return wrap(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>);
    case 'mobile':
    case 'smartphone':
    case 'phone': return wrap(<><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></>);
    case 'desktop':
    case 'monitor': return wrap(<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>);
    case 'split': return wrap(<><path d="M3 12h5M16 6l2 2-2 2M16 18l2-2-2-2M21 6h-5M21 18h-5M8 9l-3 3 3 3"/></>);
    case 'user':
    case 'avatar': return wrap(<><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></>);
    case 'grip': return wrap(<><circle cx="9" cy="5" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="19" r="1" fill="currentColor"/><circle cx="15" cy="5" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="19" r="1" fill="currentColor"/></>);
    case 'layers': return wrap(<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>);
    case 'palette': return wrap(<><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z"/></>);
    case 'sliders': return wrap(<><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></>);
    case 'cloud-check': return wrap(<><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9 15 2 2 4-4"/></>);
    
    // Official World-Class Verified Badge (Twitter / Google / Microsoft Verified Rosette with pure white checkmark)
    case 'verified':
    case 'badge-check': return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest} style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...rest.style }}>
        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z" fill="currentColor"/>
        <path d="M10 15.5l-3.5-3.5 1.41-1.41L10 12.67l6.09-6.09L17.5 8l-7.5 7.5z" fill="#ffffff"/>
      </svg>
    );

    case 'video':
    case 'play': return wrap(<polygon points="6 4 20 12 6 20 6 4"/>);
    case 'shopping-bag':
    case 'bag':
    case 'store': return wrap(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>);
    case 'briefcase': return wrap(<><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>);
    case 'file-text':
    case 'document': return wrap(<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>);
    case 'map-pin':
    case 'location': return wrap(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>);
    case 'code': return wrap(<><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>);
    case 'message-circle': return wrap(<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>);
    case 'instagram': return wrap(<><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>);
    case 'twitter':
    case 'twitter/x':
    case 'x-social': return wrap(<path d="M4 4l16 16M4 20 20 4"/>);
    case 'youtube': return wrap(<><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/></>);
    case 'linkedin': return wrap(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>);
    case 'github': return wrap(<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>);
    default: return wrap(<circle cx="12" cy="12" r="3"/>);
  }
}
