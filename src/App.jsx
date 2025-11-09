import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import ProductsPreview from './components/ProductsPreview';
import ContactCTA from './components/ContactCTA';
import HeroCover3D from './components/HeroCover3D';
import StatsStrip from './components/StatsStrip';

function SectionLayout({ children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-white/60 dark:bg-black/60" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroCover3D />
      <StatsStrip />
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
    <footer className="py-10 border-t border-gray-200 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur">
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
