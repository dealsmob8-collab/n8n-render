import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/format';
import { type Product } from '@prisma/client';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card flex h-full flex-col overflow-hidden">
      <Link href={`/product/${product.slug}`} className="relative h-44 w-full">
        <Image
          src={product.images[0] || 'https://placehold.co/600x400/png'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-brand-600">{product.category}</p>
          <Link href={`/product/${product.slug}`} className="text-sm font-semibold text-slate-900 line-clamp-2">
            {product.name}
          </Link>
          <p className="text-xs text-slate-500">{product.condition}</p>
        </div>
        <div className="mt-auto flex items-center gap-2">
          <span className="text-base font-bold text-slate-900">
            {formatCurrency(product.salePrice ?? product.price)}
          </span>
          {product.salePrice ? (
            <span className="text-xs text-slate-400 line-through">{formatCurrency(product.price)}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
