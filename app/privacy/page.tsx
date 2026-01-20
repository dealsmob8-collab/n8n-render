import { siteConfig } from '@/lib/site';

export default function PrivacyPage() {
  return (
    <div className="card space-y-4 p-6 text-sm text-slate-600">
      <h1 className="text-2xl font-semibold text-slate-900">Privacy Policy</h1>
      <p>
        {siteConfig.name} respects your privacy. We only collect information needed to fulfill orders
        and provide support.
      </p>
      <div className="space-y-2">
        <p>We keep contact details secure and never sell your information.</p>
        <p>Payment details are handled through trusted payment providers.</p>
        <p>Contact us anytime for data updates or removal requests.</p>
      </div>
    </div>
  );
}
