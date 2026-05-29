export function Logo({ size = 22, withWord = true }: { size?: number; withWord?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <img
        src="/favicon.png"
        alt="meshalive"
        width={size + 6}
        height={size + 6}
        style={{ borderRadius: 7, display: 'block', flexShrink: 0 }}
      />
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
