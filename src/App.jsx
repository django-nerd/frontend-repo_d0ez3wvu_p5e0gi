import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import HeroCover3D from './components/HeroCover3D';
import StatsStrip from './components/StatsStrip';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Global interactive 3D background */}
      <Background3D />

      {/* Primary navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        <HeroCover3D />
        <StatsStrip />
      </main>

      {/* Simple footer */}
      <footer className="relative border-t border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Friends Thermopole Industry — All rights reserved.</p>
          <p className="text-sm opacity-80">Built with precision and quality.</p>
        </div>
      </footer>
    </div>
  );
}
