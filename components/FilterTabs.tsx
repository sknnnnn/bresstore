import Link from "next/link";

export default function FilterTabs({
  basePath,
  options,
  active,
}: {
  basePath: string;
  options: { value: string; label: string }[];
  active: string;
}) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest">
      {options.map((opt) => {
        const isActive = opt.value === active;
        const href = opt.value === "todas" ? basePath : `${basePath}?filter=${opt.value}`;
        return (
          <Link
            key={opt.value}
            href={href}
            className={`border-b pb-1 transition-colors ${
              isActive ? "border-paper text-paper" : "border-transparent text-paper/50 hover:text-paper/80"
            }`}
          >
            {opt.label}
          </Link>
        );
      })}
    </div>
  );
}
