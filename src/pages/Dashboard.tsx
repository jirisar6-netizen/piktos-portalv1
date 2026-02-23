import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import {ExternalLink, MessageSquare, Cpu, Layout} from 'lucide-react';

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Card 1: Large, 2 columns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-2 bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col justify-between group hover:border-[#E95420]/50 transition-all"
      >
        <div>
          <div className="bg-[#E95420]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#E95420]">
            <MessageSquare size={24} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Dáváme hlas těm, kteří ho hledají.</h2>
          <p className="text-lg opacity-70 mb-8 max-w-xl">
            Piktos je víc než jen aplikace. Je to most k porozumění pro děti s autismem a narušenou komunikační schopností. Přečtěte si náš příběh a zapojte se do testování.
          </p>
        </div>
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 text-[#E95420] font-bold hover:gap-3 transition-all"
        >
          Přečíst příběh a zapojit se <span className="text-xl">→</span>
        </Link>
      </motion.div>

      {/* Card 2: Action Button */}
      <motion.a 
        href="https://synthesis-os.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#E95420] p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-transform cursor-pointer shadow-lg shadow-[#E95420]/20"
      >
        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <ExternalLink size={32} />
        </div>
        <span className="text-2xl font-bold">Spustit App 🚀</span>
        <span className="text-sm opacity-80 mt-2">Otevřít Synthesis OS</span>
      </motion.a>

      {/* Card 3: Tech & Smart Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#E95420]/50 transition-all"
      >
        <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white/70">
          <Layout size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Technologie & Smart Bar</h3>
        <p className="text-sm opacity-60 mb-6">
          Využíváme mezinárodní databázi ARASAAC a inteligentní predikci karet podle denní doby.
        </p>
        <Link 
          to="/modules/communication" 
          className="text-sm font-bold text-[#E95420] hover:underline"
        >
          Zjistit více o modulech
        </Link>
      </motion.div>

      {/* Card 4: Hardware & Engine, 2 columns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex items-center gap-8 hover:border-[#E95420]/50 transition-all"
      >
        <div className="hidden sm:flex bg-white/5 w-20 h-20 rounded-2xl items-center justify-center text-white/30 shrink-0">
          <Cpu size={40} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Hardware & Engine</h3>
          <p className="text-sm opacity-60">
            Aplikace je postavena na moderní React architektuře a optimalizována pro plynulý běh na 144Hz displejích (testováno na Xiaomi 13T Pro). Zajišťujeme okamžitou odezvu, která je pro děti s PAS klíčová.
          </p>
        </div>
      </motion.div>

      {/* Card 5: Features Catalog, full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="col-span-1 md:col-span-3"
      >
        <Link 
          to="/features"
          className="block bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#E95420] transition-all group"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold group-hover:text-[#E95420] transition-colors">Katalog funkcí 🛠️</h3>
              <p className="text-sm opacity-60 max-w-2xl">
                Prozkoumejte všechny reálné funkce, které z Piktos dělají bezpečné prostředí. Offline režim, vlastní fotografie, zámek pro rodiče a adaptivní mřížka pro různou motoriku.
              </p>
            </div>
            <div className="inline-flex items-center justify-center px-6 py-3 border border-[#E95420] text-[#E95420] font-bold rounded-xl group-hover:bg-[#E95420] group-hover:text-white transition-all">
              Zobrazit detaily →
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
