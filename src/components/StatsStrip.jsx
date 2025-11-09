const BRAND_BLUE = '#0060B9';

export default function StatsStrip() {
  const stats = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Annual Capacity (m³)', value: '50,000+' },
    { label: 'On-time Delivery', value: '99.2%' },
    { label: 'Client Satisfaction', value: '4.9/5' },
  ];

  return (
    <section className="relative bg-white/70 dark:bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 p-5">
              <div className="text-2xl font-extrabold" style={{ color: BRAND_BLUE }}>{s.value}</div>
              <div className="text-xs mt-1 text-gray-600 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
