import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import ProductsPreview from './components/ProductsPreview';
import ContactCTA from './components/ContactCTA';

function SectionLayout({ children }) {
  return (
    <div className="relative">
      {/* Per-page soft backdrop to ensure legibility over moving background */}
      <div className="pointer-events-none absolute inset-0 bg-white/60 dark:bg-black/60" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero content */}
      <section className="pt-20 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Friendship Is A Unique Relation —
              <span className="block text-[#0060B9]">Friends Thermopole Industry</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              Pakistan’s leading thermopole manufacturer. Precision engineered insulation, packaging and architectural solutions with enterprise-grade quality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: '#0060B9' }}
              >
                Explore Products
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border"
                style={{ borderColor: '#0060B9', color: '#0060B9' }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductsPage() {
  return (
    <SectionLayout>
      <ProductsPreview />
    </SectionLayout>
  );
}

function ContactPage() {
  return (
    <SectionLayout>
      <ContactCTA />
    </SectionLayout>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Friends Thermopole Industry. All rights reserved.</p>
        <div className="text-sm text-gray-600 dark:text-gray-300">Made with precision in Pakistan.</div>
      </div>
    </footer>
  );
}

export default function App() {
  const getRoute = () => {
    const h = typeof window !== 'undefined' ? window.location.hash : '#/'
    const r = h.replace('#', '') || '/'
    return r
  }

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  let Page = HomePage;
  if (route.startsWith('/products')) Page = ProductsPage;
  if (route.startsWith('/contact')) Page = ContactPage;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Background3D />
      <Navbar />
      <main className="relative">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
