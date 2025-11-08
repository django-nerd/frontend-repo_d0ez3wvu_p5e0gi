import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Phone, Mail, MessageCircle } from 'lucide-react';

const BRAND_BLUE = '#0060B9';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Initialize dark mode from localStorage
    const saved = localStorage.getItem('fti-dark');
    const isDark = saved === 'true';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('fti-dark', String(next));
    document.documentElement.classList.toggle('dark', next);
  };

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 bg-white/80 dark:bg-black/50 border-b border-gray-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="h-9 w-9 rounded-full border-2" style={{ borderColor: BRAND_BLUE }} />
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: BRAND_BLUE }} />
            </div>
            <div className="leading-tight">
              <p className="text-base font-extrabold tracking-tight" style={{ color: BRAND_BLUE }}>FRIENDS</p>
              <p className="text-[10px] font-semibold tracking-wider text-gray-700 dark:text-gray-300">THERMOPOLE INDUSTRY</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#why">Why Us</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="tel:+923000000000" className="hidden lg:flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND_BLUE }}>
              <Phone size={16} /> +92 300 0000000
            </a>
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDark}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDark}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />}
            </button>
            <button
              aria-label="Open menu"
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 dark:border-white/10"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 fade-in-0">
            <div className="flex flex-col gap-4 pt-2">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#why">Why Us</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="mailto:info@friendsthermopole.com" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Mail size={16} /> info@friendsthermopole.com
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-white"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
