import { describe, expect, it } from 'vitest';
import { buildWhatsAppOrderMessage, getWhatsAppLink } from '../lib/whatsapp';

describe('buildWhatsAppOrderMessage', () => {
  it('builds a cart message with line totals and customer info', () => {
    const message = buildWhatsAppOrderMessage(
      {
        items: [
          { name: 'HP ZBook FireFly 14 G8 i7 16GB/512GB', quantity: 1, unitPrice: 72000 },
          { name: 'Transcend ESD270C 500GB', quantity: 2, unitPrice: 11500 }
        ],
        subtotal: 95000,
        total: 95300
      },
      {
        name: 'John',
        phone: '0712345678',
        location: 'Nairobi CBD'
      },
      'Nairobi CBD'
    );

    expect(message).toContain('Hi Ses ICT Hub, I’d like to order:');
    expect(message).toContain('1) HP ZBook FireFly 14 G8 i7 16GB/512GB — Qty 1 — Unit KES 72,000 — Line KES 72,000');
    expect(message).toContain('2) Transcend ESD270C 500GB — Qty 2 — Unit KES 11,500 — Line KES 23,000');
    expect(message).toContain('Subtotal: KES 95,000');
    expect(message).toContain('Delivery: Nairobi CBD');
    expect(message).toContain('Total: KES 95,300');
    expect(message).toContain('Name: John, Phone: 0712345678, Location: Nairobi CBD');
    expect(message).toContain('Please confirm availability.');
  });

  it('creates a valid WhatsApp link', () => {
    const link = getWhatsAppLink('Hello Ses ICT Hub');
    expect(link).toBe('https://wa.me/254716253365?text=Hello%20Ses%20ICT%20Hub');
  });
});
