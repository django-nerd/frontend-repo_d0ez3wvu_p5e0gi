import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import WhyChooseUs from './components/WhyChooseUs';
import ProductsPreview from './components/ProductsPreview';
import ContactCTA from './components/ContactCTA';

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Friends Thermopole Industry. All rights reserved.</p>
        <div className="text-sm text-gray-600 dark:text-gray-300">Made with precision in Pakistan.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <Hero3D />

      {/* About section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Us</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">Friends Thermopole Industry is a leading Pakistani manufacturer of EPS (thermopole) solutions for construction, packaging and design. We combine modern manufacturing with rigorous QA to deliver reliable performance at scale.</p>
            <ul className="mt-6 space-y-2 text-gray-800 dark:text-gray-200">
              <li>• Nationwide delivery and enterprise SLA</li>
              <li>• Custom densities, sizes and branding</li>
              <li>• Engineering support for thermal calculations</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0060B9]/20 to-[#E60000]/20 blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border border-gray-200 dark:border-white/10 p-6 shadow-xl bg-white dark:bg-neutral-900">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-extrabold">15+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold">1M+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Units/year</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold">99.9%</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">On-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProductsPreview />
      <ContactCTA />
      <Footer />
    </div>
  );
}
