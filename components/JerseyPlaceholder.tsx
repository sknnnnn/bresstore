import type { JerseyColors } from "@/lib/demo-data";

export default function JerseyPlaceholder({
  colors,
  className,
}: {
  colors: JerseyColors;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Placeholder visual de camiseta — imagen de demostración"
    >
      <path
        d="M60 8 L20 34 L2 66 L28 84 L40 70 L40 208 L160 208 L160 70 L172 84 L198 66 L180 34 L140 8 L128 16 A32 32 0 0 1 72 16 Z"
        fill={colors.primary}
        stroke={colors.trim}
        strokeWidth="4"
      />
      <path
        d="M60 8 L72 16 A32 32 0 0 0 128 16 L140 8 L128 22 L100 30 L72 22 Z"
        fill={colors.secondary}
      />
      <path d="M20 34 L2 66 L28 84 L40 70 Z" fill={colors.secondary} opacity="0.35" />
      <path d="M180 34 L198 66 L172 84 L160 70 Z" fill={colors.secondary} opacity="0.35" />
    </svg>
  );
}
