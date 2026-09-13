import type { JerseyColors } from "@/lib/demo-data";
import Grain from "./Grain";
import JerseyPlaceholder from "./JerseyPlaceholder";

export default function PhotoTile({
  colors,
  tone = "light",
  flip = false,
  className,
}: {
  colors: JerseyColors;
  tone?: "light" | "dark";
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${tone === "dark" ? "bg-ink" : "bg-surface"} ${className ?? ""}`}
    >
      <Grain opacity={tone === "dark" ? 0.09 : 0.06} />
      <JerseyPlaceholder
        colors={colors}
        className={`absolute inset-0 m-auto h-[84%] w-auto rotate-[-2deg] transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:rotate-0 ${
          flip ? "translate-x-[7%]" : "-translate-x-[7%]"
        }`}
      />
    </div>
  );
}
