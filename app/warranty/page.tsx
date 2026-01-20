import { siteConfig } from '@/lib/site';

export default function WarrantyPage() {
  return (
    <div className="card space-y-4 p-6 text-sm text-slate-600">
      <h1 className="text-2xl font-semibold text-slate-900">Warranty & Returns</h1>
      <p>
        {siteConfig.name} offers clear warranty coverage on all gadgets to keep you confident when you buy.
      </p>
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-slate-900">Refurbished items</p>
          <p>30 Days Shop Warranty covering functional defects.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Brand new items</p>
          <p>12 Months Warranty through our store partners.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Returns</p>
          <p>Returns are accepted within 3 days if the product is unused and in original packaging.</p>
        </div>
      </div>
    </div>
  );
}
