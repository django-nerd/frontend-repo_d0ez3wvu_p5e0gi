const BRAND_BLUE = '#0060B9';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full border-2" style={{ borderColor: BRAND_BLUE }} />
              <div>
                <p className="text-base font-extrabold tracking-tight" style={{ color: BRAND_BLUE }}>FRIENDS</p>
                <p className="text-[10px] font-semibold tracking-wider text-gray-700 dark:text-gray-300">THERMOPOLE INDUSTRY</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">Premium EPS solutions for insulation, packaging and construction — engineered in Pakistan.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#why" className="hover:underline">Why Choose Us</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>+92 300 0000000</li>
              <li>info@friendsthermopole.com</li>
              <li>Lahore, Pakistan</li>
            </ul>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-white text-sm"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              WhatsApp Support
            </a>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Friends Thermopole Industry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
