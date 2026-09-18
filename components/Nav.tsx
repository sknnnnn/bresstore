"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartContext";

const LINKS = [
  { label: "Camisetas", href: "/catalogo" },
  { label: "Clubes", href: "/clubes" },
  { label: "Selecciones", href: "/selecciones" },
  { label: "Retro", href: "/retro" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { count, open: openCart } = useCart();

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = searchValue.trim();
    router.push(query ? `/catalogo?q=${encodeURIComponent(query)}` : "/catalogo");
    setSearchOpen(false);
    setSearchValue("");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-display text-2xl tracking-tight">
          BRESSTORE
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Buscar"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="text-ink transition-opacity hover:opacity-60"
          >
            <SearchIcon />
          </button>
          <button
            aria-label={`Carrito${count > 0 ? ` (${count} producto${count === 1 ? "" : "s"})` : ""}`}
            onClick={openCart}
            className="relative text-ink transition-opacity hover:opacity-60"
          >
            <CartIcon />
            {count > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center bg-accent text-[10px] font-medium text-ink">
                {count}
              </span>
            ) : null}
          </button>
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="text-ink md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {searchOpen ? (
        <form
          onSubmit={handleSearchSubmit}
          className="border-t border-line px-5 py-3 md:px-8"
        >
          <label htmlFor="nav-search" className="sr-only">
            Buscar camisetas
          </label>
          <input
            id="nav-search"
            type="search"
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar por nombre, club o selección…"
            className="w-full border border-line bg-paper px-4 py-2 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
          />
        </form>
      ) : null}

      {open ? (
        <nav className="flex flex-col border-t border-line px-5 py-4 text-sm font-medium uppercase tracking-wide md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3 last:border-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h2l2.4 12.2A2 2 0 0 0 9.36 18H18a2 2 0 0 0 1.96-1.6L21.6 8H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="21" r="1.4" fill="currentColor" />
      <circle cx="18" cy="21" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {open ? (
        <path
          d="M5 5L19 19M19 5L5 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
