import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="card mx-auto flex max-w-xl flex-col items-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">Order received!</h1>
      <p className="text-sm text-slate-600">
        Thank you for shopping with Ses ICT Hub. We’ll confirm your order and share payment details shortly.
      </p>
      <Link href="/" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
