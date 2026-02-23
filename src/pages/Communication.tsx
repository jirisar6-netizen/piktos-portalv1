import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import {Brain, Volume2, Shield, Apple, Droplets, AlertCircle, Octagon} from 'lucide-react';

export default function Communication() {
  const handleCardClick = (label: string) => {
    alert(`Systém Piktos přehraje hlasovou odezvu: ${label.toUpperCase()}`);
  };

  const piktograms = [
    { label: 'Jídlo', icon: <Apple size={40} />, emoji: '🍎' },
    { label: 'Pití', icon: <Droplets size={40} />, emoji: '💧' },
    { label: 'Pomoc', icon: <AlertCircle size={40} />, emoji: '🆘' },
    { label: 'Stop', icon: <Octagon size={40} />, emoji: '✋' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16"
    >
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-[#E95420] transition-all"
      >
        ← Zpět na rozcestník
      </Link>

      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Srdce Komunikace</h1>
        <p className="text-lg opacity-70 leading-relaxed">
          Piktos využívá standardizovanou knihovnu piktogramů ARASAAC, kterou pohání naše vlastní technologie vyvíjené v Synthesis studio. Cílem je nulová frustrace z prodlevy.
        </p>
      </section>

      {/* Section A: Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
          <div className="text-[#E95420] mb-6"><Brain size={32} /></div>
          <h3 className="text-xl font-bold mb-3">Smart Bar</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Inteligentní predikce karet. Systém se učí zvyklosti dítěte a nabízí piktogramy podle aktuální denní doby.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
          <div className="text-[#E95420] mb-6"><Volume2 size={32} /></div>
          <h3 className="text-xl font-bold mb-3">Custom Voice</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Hlasová odezva v reálném čase. Možnost nahrát vlastní hlas rodiče, aby dítě slyšelo někoho, komu důvěřuje.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md border border-red-500/20 p-8 rounded-2xl">
          <div className="text-red-500 mb-6"><Shield size={32} /></div>
          <h3 className="text-xl font-bold mb-3">Guardian SOS</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Integrovaný bezpečnostní modul pro okamžitý přístup k nouzovým kontaktům.
          </p>
        </div>
      </div>

      {/* Section B: Interactive Test */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Interaktivní test odezvy</h2>
          <p className="text-sm opacity-50">Klikněte na kartu pro simulaci hlasové odezvy</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {piktograms.map((pikt) => (
            <motion.button
              key={pikt.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(pikt.label)}
              className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-[#E95420] transition-colors group"
            >
              <div className="text-white/40 group-hover:text-[#E95420] transition-colors">
                {pikt.icon}
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">{pikt.label}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Section C: Tech Stack */}
      <section className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-wrap gap-2">
          {['React 18', 'Vite', 'Tailwind CSS', 'Vercel Edge'].map(tech => (
            <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium opacity-70">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="bg-[#E95420]/10 border border-[#E95420]/20 px-4 py-2 rounded-lg flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#E95420] animate-pulse"></div>
          <p className="text-sm font-medium">
            <span className="opacity-60">Zítra 09:00 -</span> Integrace Google Sheets & Cloud Sync
          </p>
        </div>
      </section>
    </motion.div>
  );
}
