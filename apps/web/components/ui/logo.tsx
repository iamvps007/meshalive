export function Logo({ size = 18 }: { size?: number }) {
  return (
    <div className="row center gap-8" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: size, letterSpacing: '-0.02em' }}>
      <span>mesh</span>
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        <span style={{ display: 'inline-block', width: size * 0.42, height: size * 0.42, borderRadius: '50%', background: 'var(--pulse)', filter: 'drop-shadow(0 0 6px var(--pulse-glow))' }} className="pulse-dot" />
        <span style={{ display: 'inline-block', width: size * 0.45, height: 1, background: 'var(--pulse)', marginLeft: 1, marginRight: 1, opacity: 0.7 }} />
        <span>live</span>
      </span>
    </div>
  );
}
