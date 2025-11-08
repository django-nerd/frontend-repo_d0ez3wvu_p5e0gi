import Spline from '@splinetool/react-spline';

// Global 3D background using provided Spline asset
// Fixed full-viewport, behind all content. No negative z-index used.
export default function Background3D() {
  return (
    <div className="fixed inset-0 overflow-hidden" aria-hidden>
      <Spline
        scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft vignette for readability; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black/80" />
    </div>
  );
}
