'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useCartStore } from '@/lib/cart-store';
import { formatCurrency } from '@/lib/format';
import { getCartTotals } from '@/lib/cart';
import { buildWhatsAppOrderMessage, getWhatsAppLink } from '@/lib/whatsapp';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const [delivery, setDelivery] = useState('Nairobi CBD');

  const totals = useMemo(() => getCartTotals(items), [items]);

  const whatsappMessage = useMemo(() => {
    return buildWhatsAppOrderMessage(
      {
        items: items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          unitPrice: item.price
        })),
        subtotal: totals.subtotal,
        total: totals.total
      },
      undefined,
      delivery
    );
  }, [items, totals, delivery]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Your cart</h1>
        <p className="text-sm text-slate-500">Review items and send your WhatsApp order.</p>
      </div>

      {items.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-500">
          Your cart is empty. Browse products to get started.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card flex flex-wrap items-center gap-4 p-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{formatCurrency(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="h-8 w-8 rounded-full border border-slate-200"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 rounded-full border border-slate-200"
                  >
                    +
                  </button>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {formatCurrency(item.price * item.quantity)}
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="card space-y-4 p-4">
            <h2 className="text-base font-semibold text-slate-900">Order summary</h2>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(totals.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery fee</span>
                <span>{formatCurrency(totals.deliveryFee)}</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-slate-900">
                <span>Total</span>
                <span>{formatCurrency(totals.total)}</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <label className="text-xs font-semibold uppercase text-slate-400">Delivery</label>
              <select
                value={delivery}
                onChange={(event) => setDelivery(event.target.value)}
                className="w-full rounded-lg border border-slate-200 p-2"
              >
                <option value="Nairobi CBD">Nairobi CBD</option>
                <option value="Within Nairobi">Within Nairobi</option>
                <option value="Outside Nairobi">Outside Nairobi</option>
              </select>
            </div>
            <Link
              href={getWhatsAppLink(whatsappMessage)}
              className="flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Send order via WhatsApp
            </Link>
            <Link
              href="/checkout"
              className="flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
            >
              Continue to checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
