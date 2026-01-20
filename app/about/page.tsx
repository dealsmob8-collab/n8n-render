import { siteConfig } from '@/lib/site';

export default function AboutPage() {
  return (
    <div className="card space-y-4 p-6">
      <h1 className="text-2xl font-semibold text-slate-900">About {siteConfig.name}</h1>
      <p className="text-sm text-slate-600">{siteConfig.description}</p>
      <p className="text-sm text-slate-600">{siteConfig.tagline}</p>
      <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
        <div>
          <p className="font-semibold text-slate-900">Why shop with us</p>
          <ul className="mt-2 list-disc space-y-2 pl-4">
            <li>Curated inventory with quality checks.</li>
            <li>Transparent pricing in Kenyan shillings.</li>
            <li>Fast Nairobi delivery and nationwide shipping.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Visit us</p>
          <p className="mt-2">{siteConfig.address}</p>
          <p className="mt-2">{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
    </div>
  );
}
