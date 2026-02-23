import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { WifiOff, Camera, LayoutGrid, Lock, Cloud } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, text, delay }: { icon: any, title: string, text: string, delay: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#E95420]/50 transition-all group"
  >
    <div className="bg-[#E95420]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-[#E95420] group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-sm opacity-60 leading-relaxed">{text}</p>
  </motion.div>
);

export default function Features() {
  const features = [
    {
      icon: WifiOff,
      title: "Komunikace bez výpadků",
      text: "Ztráta signálu v obchodě nebo v lese nesmí znamenat ztrátu hlasu. Piktos funguje jako PWA (Progressive Web App). Jakmile aplikaci jednou načtete, kompletní databáze ARASAAC i vaše vlastní nahrané zvuky fungují 100% offline."
    },
    {
      icon: Camera,
      title: "Svět, který dítě zná",
      text: "Obecný piktogram psa někdy nestačí. Piktos umožňuje rodičům vyfotit vlastního domácího mazlíčka nebo oblíbenou hračku a nahrát k ní vlastní hlas (např. hlas maminky). Dítě tak reaguje na známé podněty."
    },
    {
      icon: LayoutGrid,
      title: "Roste spolu s dítětem",
      text: "Pro děti s horší jemnou motorikou nebo zrakovým znevýhodněním lze upravit velikost karet. Od obrovských bloků (2x2) na obrazovce až po komplexní mřížky (4x4) pro pokročilejší slovní zásobu."
    },
    {
      icon: Lock,
      title: "Ochrana před nechtěným smazáním",
      text: "Aplikace obsahuje chráněný režim nastavení. Dítě může volně listovat a klikat na piktogramy, ale smazat kartu nebo změnit nastavení lze pouze po zadání PIN kódu nebo vyřešení matematické úlohy."
    },
    {
      icon: Cloud,
      title: "Záloha a sdílení dat",
      text: "Všechna nastavení, vlastní slovíčka a rozložení karet se mohou bezpečně zálohovat do vašeho soukromého Google Sheetu. Pokud dítěti pořídíte nový tablet, stačí se přihlásit a vše je okamžitě zpět."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-[#E95420] transition-all"
      >
        ← Zpět na rozcestník
      </Link>

      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold">Funkce navržené pro reálný život.</h1>
        <p className="text-lg opacity-70 leading-relaxed">
          Piktos není jen tabulka obrázků. Je to promyšlený ekosystém, který respektuje limity dětí a dává jim jistotu v každé situaci.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * INSTRUKCE PRO App.tsx:
 * 1. Importujte Features: import Features from './pages/Features';
 * 2. Přidejte routu: <Route path="/features" element={<Features />} />
 */
