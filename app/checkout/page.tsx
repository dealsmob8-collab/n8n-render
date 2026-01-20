'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/cart-store';
import { formatCurrency } from '@/lib/format';
import { getCartTotals } from '@/lib/cart';

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);
  const totals = useMemo(() => getCartTotals(items), [items]);
  const router = useRouter();
  const [payment, setPayment] = useState('M-Pesa');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clear();
    router.push('/success');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Checkout</h1>
          <p className="text-sm text-slate-500">Quick single-page checkout for Nairobi delivery.</p>
        </div>
        <div className="card space-y-3 p-4">
          <h2 className="text-base font-semibold text-slate-900">Delivery details</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <input
              required
              placeholder="Full name"
              className="rounded-lg border border-slate-200 p-3 text-sm"
            />
            <input
              required
              placeholder="Phone number"
              className="rounded-lg border border-slate-200 p-3 text-sm"
            />
          </div>
          <input
            required
            placeholder="Delivery location"
            className="w-full rounded-lg border border-slate-200 p-3 text-sm"
          />
        </div>
        <div className="card space-y-3 p-4">
          <h2 className="text-base font-semibold text-slate-900">Payment method</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {['M-Pesa', 'Card', 'Cash on Delivery'].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setPayment(method)}
                className={`rounded-full px-4 py-2 ${payment === method ? 'bg-brand-600 text-white' : 'border border-slate-200 text-slate-600'}`}
              >
                {method}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500">Payment instructions will be shared after confirmation.</p>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
        >
          Place order
        </button>
      </form>

      <div className="card space-y-4 p-4">
        <h2 className="text-base font-semibold text-slate-900">Order summary</h2>
        <div className="space-y-2 text-sm text-slate-600">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 pt-3 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(totals.subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery</span>
            <span>{formatCurrency(totals.deliveryFee)}</span>
          </div>
          <div className="flex items-center justify-between font-semibold text-slate-900">
            <span>Total</span>
            <span>{formatCurrency(totals.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
