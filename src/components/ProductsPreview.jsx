import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const BRAND_BLUE = '#0060B9';

const products = [
  { id: 1, name: 'Thermopole Sheets', img: 'https://images.unsplash.com/photo-1582582494700-2668b9df8a16?q=80&w=1200&auto=format&fit=crop', desc: 'High-density EPS sheets for insulation and packaging.' },
  { id: 2, name: 'Thermopole Ceiling', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop', desc: 'Lightweight, acoustic and thermal ceiling panels.' },
  { id: 3, name: 'Thermopole Packaging Boxes', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop', desc: 'Shock-absorbent EPS boxes with custom branding.' },
  { id: 4, name: 'Decorative Thermopole', img: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1200&auto=format&fit=crop', desc: 'Architectural moldings and decor elements.' },
  { id: 5, name: 'Industrial Thermopole Blocks', img: 'https://images.unsplash.com/photo-1523419409543-8c8e3b86e0f9?q=80&w=1200&auto=format&fit=crop', desc: 'Bulk EPS blocks for construction and machining.' },
  { id: 6, name: 'Insulation Thermopole Panels', img: 'https://images.unsplash.com/photo-1523419410411-95f9cda8d3e0?q=80&w=1200&auto=format&fit=crop', desc: 'Energy-efficient panels for cold-chain and buildings.' },
];

export default function ProductsPreview() {
  const [hoverIdx, setHoverIdx] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      document.querySelectorAll('[data-hover-card]').forEach((el) => {
        el.style.setProperty('--x', e.clientX + 'px');
        el.style.setProperty('--y', e.clientY + 'px');
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Featured Products</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">Explore our most requested EPS solutions.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 font-semibold" style={{ color: BRAND_BLUE }}>
            Get a quote <ChevronRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <a
              key={p.id}
              href={`#/product/${p.id}`}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900"
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              data-hover-card
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(0,96,185,0.18), transparent 40%)' }} />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 font-semibold" style={{ color: BRAND_BLUE }}>
                  View details <ChevronRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
