const currencyFormatter = new Intl.NumberFormat("es-AR");

export function formatPrice(amount: number): string {
  return `$${currencyFormatter.format(amount)}`;
}
