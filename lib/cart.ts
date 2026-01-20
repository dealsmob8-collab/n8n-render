import { formatCurrency } from '@/lib/format';
import type { CartItem } from '@/lib/cart-store';

export const getCartTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 300 : 0;
  const total = subtotal + deliveryFee;
  return { subtotal, deliveryFee, total };
};

export const formatLinePrice = (price: number) => formatCurrency(price);
