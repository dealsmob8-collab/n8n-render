import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { AddToCart } from '@/components/AddToCart';
import { formatCurrency } from '@/lib/format';
import { prisma } from '@/lib/prisma';
import { siteConfig } from '@/lib/site';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { reviews: true }
  });

  if (!product) {
    notFound();
  }

  const price = product.salePrice ?? product.price;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {product.images.map((image, index) => (
            <div key={image} className="relative h-52 overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={image}
                alt={`${product.name} image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
        <div className="card p-4">
          <h3 className="text-sm font-semibold text-slate-900">Specifications</h3>
          <dl className="mt-3 grid gap-2 text-sm text-slate-600">
            {Object.entries(product.specs as Record<string, string>).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between border-b border-slate-100 py-1">
                <dt className="font-medium text-slate-700">{key}</dt>
                <dd className="text-right text-slate-500">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-brand-600">{product.category}</p>
          <h1 className="text-2xl font-semibold text-slate-900">{product.name}</h1>
          <p className="text-sm text-slate-600">{product.description}</p>
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-slate-900">{formatCurrency(price)}</span>
            {product.salePrice ? (
              <span className="text-sm text-slate-400 line-through">{formatCurrency(product.price)}</span>
            ) : null}
          </div>
        </div>

        <div className="card space-y-3 p-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Stock: {product.stockQty} available</span>
            <span>Rating: {product.ratingAvg.toFixed(1)} ★</span>
          </div>
          <AddToCart product={{ id: product.id, name: product.name, price, image: product.images[0] }} />
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="flex w-full items-center justify-center rounded-full border border-green-500 px-6 py-3 text-sm font-semibold text-green-600"
          >
            Order via WhatsApp
          </Link>
          <div className="text-xs text-slate-500">
            Nairobi CBD delivery from KES 300. M-Pesa, card, or cash on delivery supported.
          </div>
        </div>

        <div className="card p-4">
          <h3 className="text-sm font-semibold text-slate-900">Customer reviews</h3>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            {product.reviews.length ? (
              product.reviews.map((review) => (
                <div key={review.id} className="rounded-xl bg-slate-50 p-3">
                  <p className="font-semibold text-slate-800">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.rating} ★</p>
                  <p className="mt-1">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review after purchase.</p>
            )}
          </div>
        </div>
      </div>
      <Script id="product-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          sku: product.slug,
          brand: {
            '@type': 'Brand',
            name: product.brand
          },
          image: product.images,
          offers: {
            '@type': 'Offer',
            priceCurrency: product.currency,
            price: price,
            availability: product.stockQty > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
          }
        })}
      </Script>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-3 lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3 container-px">
          <AddToCart product={{ id: product.id, name: product.name, price, image: product.images[0] }} />
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="flex items-center justify-center rounded-full border border-green-500 px-4 py-3 text-xs font-semibold text-green-600"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
