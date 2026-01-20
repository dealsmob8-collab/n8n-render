import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ProductCard } from '@/components/ProductCard';
import { categories } from '@/lib/site';

const sortOptions = {
  latest: { createdAt: 'desc' },
  priceLow: { price: 'asc' },
  priceHigh: { price: 'desc' }
} as const;

type SortKey = keyof typeof sortOptions;

type SearchParams = { sort?: SortKey; brand?: string };

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: SearchParams;
}) {
  const category = categories.find((item) => item.slug === params.slug);
  const sortKey = searchParams.sort ?? 'latest';
  const brand = searchParams.brand;

  const products = await prisma.product.findMany({
    where: {
      category: category?.name,
      ...(brand ? { brand } : {})
    },
    orderBy: sortOptions[sortKey]
  });

  const brands = Array.from(new Set(products.map((product) => product.brand)));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Category</p>
          <h1 className="text-2xl font-semibold text-slate-900">{category?.name ?? 'Products'}</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-slate-500">Sort</span>
          <div className="flex gap-2">
            <Link
              href={`?sort=latest${brand ? `&brand=${brand}` : ''}`}
              className={`rounded-full px-3 py-1 ${sortKey === 'latest' ? 'bg-brand-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
            >
              Latest
            </Link>
            <Link
              href={`?sort=priceLow${brand ? `&brand=${brand}` : ''}`}
              className={`rounded-full px-3 py-1 ${sortKey === 'priceLow' ? 'bg-brand-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
            >
              Price low
            </Link>
            <Link
              href={`?sort=priceHigh${brand ? `&brand=${brand}` : ''}`}
              className={`rounded-full px-3 py-1 ${sortKey === 'priceHigh' ? 'bg-brand-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
            >
              Price high
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div className="space-y-4">
          <details className="card p-4 lg:open" open>
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">Filters</summary>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">Brand</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Link
                    href={`?sort=${sortKey}`}
                    className={`rounded-full px-3 py-1 ${!brand ? 'bg-brand-600 text-white' : 'border border-slate-200 bg-white text-slate-600'}`}
                  >
                    All
                  </Link>
                  {brands.map((brandName) => (
                    <Link
                      key={brandName}
                      href={`?sort=${sortKey}&brand=${brandName}`}
                      className={`rounded-full px-3 py-1 ${brand === brandName ? 'bg-brand-600 text-white' : 'border border-slate-200 bg-white text-slate-600'}`}
                    >
                      {brandName}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400">Delivery</p>
                <p>Nairobi CBD delivery in 2-4 hours, nationwide courier next day.</p>
              </div>
            </div>
          </details>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
