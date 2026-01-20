import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function ContactPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="card space-y-4 p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Contact {siteConfig.name}</h1>
        <p className="text-sm text-slate-600">We reply fast on WhatsApp for quotes and availability.</p>
        <div className="space-y-2 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Visit our store</p>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <Link
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white"
        >
          Chat on WhatsApp
        </Link>
      </div>
      <div className="card space-y-4 p-6 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Store hours</h2>
        <p>Mon - Sat: 8:30 AM – 6:30 PM</p>
        <p>Sun: 10:00 AM – 4:00 PM</p>
        <h2 className="text-base font-semibold text-slate-900">Delivery</h2>
        <p>Nairobi CBD delivery in 2-4 hours. Nationwide delivery available next day.</p>
      </div>
    </div>
  );
}
