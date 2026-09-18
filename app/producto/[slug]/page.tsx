import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JerseyVisual from "@/components/JerseyVisual";
import AddToCartForm from "@/components/product/AddToCartForm";
import { CATEGORY_LABELS, getAllProducts, getProductBySlug } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.team}`,
    description:
      product.description ??
      `${product.name} de ${product.team}, temporada ${product.season}. ${CATEGORY_LABELS[product.category]} en Bresstore.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <Link href="/catalogo" className="text-xs uppercase tracking-wider text-ink-soft hover:text-ink">
        ← Volver al catálogo
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center bg-[#eae7dd] py-16">
          <JerseyVisual
            image={product.image}
            colors={product.colors}
            alt={`${product.team} — ${product.name}`}
            className="h-80 w-auto md:h-[28rem]"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-ink-soft">
            {CATEGORY_LABELS[product.category]} · {product.team} · {product.season}
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">{product.name}</h1>

          <div className="mt-4 flex items-baseline gap-3">
            <p className="font-display text-3xl">{formatPrice(product.price)}</p>
            {product.priceIsDemo ? (
              <span className="text-xs uppercase tracking-wider text-ink-soft">precio demo</span>
            ) : null}
          </div>

          {product.description ? (
            <p className="mt-6 max-w-prose text-ink-soft">{product.description}</p>
          ) : null}

          <div className="mt-8">
            <AddToCartForm product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
