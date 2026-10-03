export function Logo({ size = 22, withWord = true }: { size?: number; withWord?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <img src="/favicon.png?v=2" alt="" aria-hidden="true" width={26} height={26} style={{ borderRadius: 7, display: 'block', flexShrink: 0, width: 26, height: 26 }} />
      {withWord && (
        <span style={{
          fontFamily: '"Geist", "Inter", sans-serif',
          fontSize: size,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          fontWeight: 600,
          color: 'inherit',
        }}>meshalive</span>
      )}
    </div>
  );
}
