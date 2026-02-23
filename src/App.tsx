import {Routes, Route, Link} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Communication from './pages/Communication';
import Features from './pages/Features';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Top Bar) */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-[#E95420]">
              Piktos Portal
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/" className="hover:text-[#E95420] transition-colors">Dashboard</Link>
              <Link to="/features" className="text-[#E95420] font-bold hover:opacity-80 transition-opacity">Katalog funkcí</Link>
              <Link to="/modules/communication" className="hover:text-[#E95420] transition-colors">Moduly</Link>
              <Link to="/about" className="hover:text-[#E95420] transition-colors">Příběh a podpora</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono opacity-70">v0.1.20 Online</span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/modules/communication" element={<Communication />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-[#111111] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-white/40">
          <p>Vytvořeno po nocích v Synthesis studio. Původně pro Jiříka a Štěpánka, nyní pro všechny děti, které chtějí aplikaci zkusit a najít svůj hlas.</p>
        </div>
      </footer>
    </div>
  );
}



