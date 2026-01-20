'use client';

import { create } from 'zustand';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((current) => current.id === item.id);
      if (existing) {
        return {
          items: state.items.map((current) =>
            current.id === item.id
              ? { ...current, quantity: current.quantity + 1 }
              : current
          )
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item))
    })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clear: () => set({ items: [] })
}));
