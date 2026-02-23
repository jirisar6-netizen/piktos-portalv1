import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import React from 'react';

export default function About() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "E4fb1f5f-cbf3-4d44-9eaf-f02f8da322b9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.status === 200) {
        alert("Děkuji za zprávu! Brzy se vám ozvu.");
        e.currentTarget.reset();
      } else {
        alert("Něco se nepovedlo, zkuste to prosím později.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Chyba při odesílání formuláře.");
    }
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Story */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Tvoříme to společně.</h1>
          
          <div className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl leading-relaxed text-lg opacity-90">
            <p>
              Piktos nevyvíjí žádná velká korporace s obřím rozpočtem. Jsem 35letý táta samoživitel. Mám ve své péči syna Jiříka. Se svým druhým, tříměsíčním synem Štěpánkem, který žije s maminkou, se vídám dvakrát týdně. K tomu žiji se svým otcem, o kterého se musím starat. Aplikaci Piktos tvořím v Synthesis studio po nocích, ve svém volném čase a s využitím bezplatných limitů vývojářských nástrojů. Aplikaci Piktos jsem začal tvořit primárně pro své syny. Nyní ji ale s pokorou otevírám a věnuji všem rodičům a dětem, kteří ji chtějí vyzkoušet. Mojí motivací je vytvořit živý systém, který roste s dětmi a pomůže komunikovat každému dítěti tam, kde slova nestačí. Každá vaše zpětná vazba mi dává obrovskou sílu pokračovat.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E95420] flex items-center justify-center font-bold text-white">
              JŠ
            </div>
            <div>
              <p className="font-bold">Jiří Šár</p>
              <p className="text-xs opacity-50 uppercase tracking-widest">Zakladatel Synthesis studio</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Zapojte se do testování</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm opacity-60 ml-1">Jméno / Přezdívka</label>
              <input 
                type="text" 
                name="jmeno"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#E95420] transition-colors"
                placeholder="Vaše jméno"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm opacity-60 ml-1">E-mail</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#E95420] transition-colors"
                placeholder="vas@email.cz"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm opacity-60 ml-1">Nápady a zpětná vazba</label>
              <textarea 
                name="zprava"
                required
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#E95420] transition-colors resize-none"
                placeholder="Jak můžeme Piktos vylepšit?"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#E95420] hover:bg-[#c7441b] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#E95420]/20"
            >
              Odeslat a zapojit se
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
