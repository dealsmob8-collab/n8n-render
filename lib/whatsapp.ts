export type CartItem = {
  name: string;
  quantity: number;
  unitPrice: number;
};

export type CartSummary = {
  items: CartItem[];
  subtotal: number;
  total: number;
};

export type CustomerInfo = {
  name?: string;
  phone?: string;
  location?: string;
};

export const buildWhatsAppOrderMessage = (
  cart: CartSummary,
  customer?: CustomerInfo,
  delivery?: string
) => {
  const lines: string[] = [];
  lines.push('Hi Ses ICT Hub, I’d like to order:');

  cart.items.forEach((item, index) => {
    const lineTotal = item.unitPrice * item.quantity;
    lines.push(
      `${index + 1}) ${item.name} — Qty ${item.quantity} — Unit KES ${item.unitPrice.toLocaleString('en-KE')} — Line KES ${lineTotal.toLocaleString('en-KE')}`
    );
  });

  lines.push(`Subtotal: KES ${cart.subtotal.toLocaleString('en-KE')}`);

  if (delivery) {
    lines.push(`Delivery: ${delivery}`);
  }

  lines.push(`Total: KES ${cart.total.toLocaleString('en-KE')}`);

  if (customer?.name || customer?.phone || customer?.location) {
    const name = customer?.name ? `Name: ${customer.name}` : undefined;
    const phone = customer?.phone ? `Phone: ${customer.phone}` : undefined;
    const location = customer?.location ? `Location: ${customer.location}` : undefined;
    lines.push([name, phone, location].filter(Boolean).join(', '));
  }

  lines.push('Please confirm availability.');

  return lines.join('\n');
};

export const getWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/254716253365?text=${encoded}`;
};
