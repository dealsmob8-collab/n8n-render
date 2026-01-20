'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const WhatsAppFloating = () => {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      aria-label="Chat with Ses ICT Hub on WhatsApp"
    >
      <span className="text-lg">💬</span>
      WhatsApp
    </Link>
  );
};
