const NOISE_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>";

export default function Grain({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-multiply"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,${NOISE_SVG}")`,
        backgroundSize: "160px 160px",
      }}
    />
  );
}
