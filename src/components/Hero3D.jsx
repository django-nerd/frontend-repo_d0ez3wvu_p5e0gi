import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const BRAND_BLUE = '#0060B9';
const BRAND_RED = '#E60000';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-blocking for pointer events) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full blur-3xl opacity-40" style={{ background: BRAND_BLUE }} />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full blur-3xl opacity-30" style={{ background: BRAND_RED }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[80vh] flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Friendship Is A Unique Relation —
              <span className="block" style={{ color: BRAND_BLUE }}>Friends Thermopole Industry</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl"
            >
              Pakistan’s leading thermopole manufacturer. Precision engineered insulation, packaging and architectural solutions with enterprise-grade quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border"
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
