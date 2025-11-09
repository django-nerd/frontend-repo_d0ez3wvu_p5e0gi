import Spline from '@splinetool/react-spline';

// Enhanced global 3D background with refined, formal gradients
export default function Background3D() {
  return (
    <div className="fixed inset-0 overflow-hidden" aria-hidden>
      <Spline
        scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Subtle corporate gradient veil to harmonize brand palette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70 dark:from-black/70 dark:via-black/55 dark:to-black/75" />
        <div className="absolute left-[-10%] top-1/4 h-[40vh] w-[40vh] rounded-full blur-3xl opacity-20" style={{ background: '#0060B9' }} />
        <div className="absolute right-[-10%] bottom-1/4 h-[36vh] w-[36vh] rounded-full blur-3xl opacity-10" style={{ background: '#E60000' }} />
      </div>
    </div>
  );
}
