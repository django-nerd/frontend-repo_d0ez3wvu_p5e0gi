import { ShieldCheck, Factory, Sparkles, Gauge } from 'lucide-react';

const BRAND_BLUE = '#0060B9';
const BRAND_RED = '#E60000';

const features = [
  {
    icon: ShieldCheck,
    title: 'ISO-Grade Quality',
    desc: 'Tight QA with batch tracking and lab-tested density, compression and thermal resistance.',
  },
  {
    icon: Factory,
    title: 'Modern Manufacturing',
    desc: 'CNC cutting, precision molding and lean SOPs to meet enterprise timelines.',
  },
  {
    icon: Gauge,
    title: 'Consistent Performance',
    desc: 'Thermal conductivity and load-bearing ratings verified across climate ranges.',
  },
  {
    icon: Sparkles,
    title: 'Premium Finish',
    desc: 'Clean edges, smooth surfaces and custom branding options for packaging.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">Industrial-grade EPS solutions trusted by contractors, manufacturers and retailers nationwide.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-gray-200 dark:border-white/10 p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,96,185,0.12), transparent 40%)' }} />
              <div className="relative">
                <f.icon size={28} style={{ color: BRAND_BLUE }} />
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
