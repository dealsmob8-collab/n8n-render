import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { TrustStrip } from '@/components/TrustStrip';
import { prisma } from '@/lib/prisma';
import { categories, siteConfig } from '@/lib/site';

export default async function Home() {
  const featured = await prisma.product.findMany({
    where: { featured: true },
    take: 8,
    orderBy: { createdAt: 'desc' }
  });

  const latest = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <span className="badge">Trusted electronics in Kenya</span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Power your workday with devices from {siteConfig.name}
          </h1>
          <p className="text-base text-slate-600">{siteConfig.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/category/laptops"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Shop Laptops
            </Link>
            <Link
              href="/category/smartphones"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
            >
              Shop Smartphones
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span>✅ Nairobi CBD delivery available</span>
            <span>✅ M-Pesa / Card / Cash on Delivery</span>
            <span>✅ Genuine warranties</span>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-slate-900">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Electronics work setup"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="relative z-10 p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-slate-200">Weekly deals</p>
            <p className="mt-2 text-2xl font-semibold">Save up to 15% on refurbished laptops</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Browse categories</h2>
          <Link href="/category/laptops" className="text-sm font-semibold text-brand-600">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="card flex items-center justify-between p-4"
            >
              <span className="text-sm font-semibold text-slate-900">{category.name}</span>
              <span className="text-sm text-brand-600">Shop →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Featured deals</h2>
          <Link href="/category/laptops" className="text-sm font-semibold text-brand-600">
            See all deals
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <TrustStrip />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Just added</h2>
          <Link href="/category/laptops" className="text-sm font-semibold text-brand-600">
            Browse inventory
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="card grid gap-6 p-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">Customer love</h3>
          <p className="text-sm text-slate-600">
            “Fast delivery and great service. The laptop looks brand new and runs smoothly.”
          </p>
          <p className="text-xs text-slate-500">— Brian, Nairobi</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">Ready to order?</h3>
          <p className="text-sm text-slate-600">
            Chat on WhatsApp for instant confirmation, delivery estimates, and payment support.
          </p>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white"
          >
            WhatsApp us
          </Link>
        </div>
      </section>
    </div>
  );
}
