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
  switch (name) {
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
    case 'sparkle': return wrap(<><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></>);
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
    case 'mail': return wrap(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>);
    case 'mobile': return wrap(<><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></>);
    case 'desktop': return wrap(<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>);
    case 'split': return wrap(<><path d="M3 12h5M16 6l2 2-2 2M16 18l2-2-2-2M21 6h-5M21 18h-5M8 9l-3 3 3 3"/></>);
    default: return wrap(<circle cx="12" cy="12" r="3"/>);
  }
}
