import { Mail, MessageCircleMore, PhoneCall, MapPin } from 'lucide-react';

const BRAND_BLUE = '#0060B9';
const BRAND_RED = '#E60000';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Let’s build something great</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">Talk to our solutions team for pricing, samples and technical specs. Fast responses within 24 hours.</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200"><PhoneCall size={18} style={{ color: BRAND_BLUE }} /> +92 300 0000000</div>
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200"><Mail size={18} style={{ color: BRAND_BLUE }} /> info@friendsthermopole.com</div>
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200"><MapPin size={18} style={{ color: BRAND_BLUE }} /> Industrial Area, Lahore, Pakistan</div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="mailto:info@friendsthermopole.com"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Email Us
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border"
                style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
              >
                <MessageCircleMore size={18} className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_RED})` }} />
            <form onSubmit={(e) => e.preventDefault()} className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 p-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">Name</label>
                  <input required className="mt-1 w-full rounded-md border border-gray-200 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[#0060B9]" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-gray-200 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[#0060B9]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-600 dark:text-gray-300">Message</label>
                  <textarea rows={4} required className="mt-1 w-full rounded-md border border-gray-200 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[#0060B9]" />
                </div>
              </div>
              <button type="submit" className="mt-6 w-full rounded-full px-6 py-3 font-semibold text-white" style={{ backgroundColor: BRAND_BLUE }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
