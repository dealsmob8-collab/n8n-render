'use client';

import { useCartStore } from '@/lib/cart-store';
import { formatCurrency } from '@/lib/format';

export const AddToCart = ({
  product
}: {
  product: { id: string; name: string; price: number; image: string };
}) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      onClick={() => addItem({ ...product })}
      className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
    >
      Add to cart · {formatCurrency(product.price)}
    </button>
  );
};
