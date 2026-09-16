import JerseyPlaceholder from "./JerseyPlaceholder";
import type { JerseyColors } from "@/lib/demo-data";

export default function JerseyVisual({
  image,
  colors,
  alt,
  number,
  className,
}: {
  image?: string;
  colors: JerseyColors;
  alt: string;
  number?: string;
  className?: string;
}) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={alt} className={`${className ?? ""} object-contain`} />;
  }

  return <JerseyPlaceholder colors={colors} number={number} className={className} />;
}
