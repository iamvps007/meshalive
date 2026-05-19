export function Favicon({ host, size = 24 }: { host: string; size?: number }) {
  const letter = (host || '?').replace(/^www\./, '')[0]?.toUpperCase() || '?';
  let hue = 0;
  for (let i = 0; i < (host || '').length; i++) hue = (hue + host.charCodeAt(i) * 7) % 360;
  return (
    <div style={{ width: size, height: size, borderRadius: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: `oklch(0.45 0.12 ${hue})`, color: 'white', fontSize: size * 0.5, fontWeight: 700, flexShrink: 0 }}>
      {letter}
    </div>
  );
}
