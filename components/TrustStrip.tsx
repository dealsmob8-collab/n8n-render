export const TrustStrip = () => {
  const items = [
    { title: 'Genuine Products', description: 'Verified brands and reliable sourcing.' },
    { title: 'Fast Nairobi Delivery', description: 'Same-day dispatch within CBD.' },
    { title: 'M-Pesa Ready', description: 'Pay via M-Pesa, card, or cash on delivery.' },
    { title: 'Shop Warranty', description: '30-day refurb or 12-month brand new.' }
  ];

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="card p-4">
          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
          <p className="text-xs text-slate-500">{item.description}</p>
        </div>
      ))}
    </section>
  );
};
