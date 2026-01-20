import Link from 'next/link';
import { categories, siteConfig } from '@/lib/site';

export const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 container-px">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-brand-700">{siteConfig.name}</span>
          <span className="text-xs text-slate-500">{siteConfig.tagline}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="hover:text-brand-600">
              {category.name}
            </Link>
          ))}
          <Link href="/about" className="hover:text-brand-600">About</Link>
          <Link href="/contact" className="hover:text-brand-600">Contact</Link>
          <Link href="/cart" className="rounded-full bg-brand-600 px-4 py-2 text-white">Cart</Link>
        </nav>
      </div>
    </header>
  );
};
