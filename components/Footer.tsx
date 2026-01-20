import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 py-10 text-sm text-slate-600 container-px md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">{siteConfig.name}</p>
          <p>{siteConfig.description}</p>
          <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-2">
          <p className="text-base font-semibold text-slate-900">Visit & Contact</p>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <div className="space-y-2">
          <p className="text-base font-semibold text-slate-900">Company</p>
          <div className="flex flex-col gap-2">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/warranty">Warranty</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
