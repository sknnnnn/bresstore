import type { JerseyColors } from "@/lib/demo-data";
import Grain from "./Grain";
import JerseyPlaceholder from "./JerseyPlaceholder";

export default function PhotoTile({
  colors,
  className,
}: {
  colors: JerseyColors;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-paper ${className ?? ""}`}>
      <Grain opacity={0.06} />
      <JerseyPlaceholder
        colors={colors}
        className="absolute inset-0 m-auto h-[82%] w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
