import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const BRAND_BLUE = '#0060B9';
const BRAND_RED = '#E60000';

export default function HeroCover3D() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Cover Background (metallic cubes, corporate) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Corporate gradient veil for depth & legibility (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full blur-3xl opacity-30" style={{ background: BRAND_BLUE }} />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full blur-3xl opacity-20" style={{ background: BRAND_RED }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[88vh] flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Enterprise EPS Solutions
              <span className="block" style={{ color: BRAND_BLUE }}>Friends Thermopole Industry</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-gray-200 max-w-2xl"
            >
              Precision-manufactured thermopole for insulation, packaging and architecture. ISO-grade quality, modern CNC lines, and on-time delivery for mission-critical projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-[#0060B9]"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Explore Products
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border focus:outline-none focus:ring-2 focus:ring-[#0060B9]"
                style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
              >
                Get a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
