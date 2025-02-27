import './index.css';
import 'react-flex/index.css';
import logo from './logo.png';
import block from './block.png';
import x from './x.png';
import discord from './discord.png';
import github from './github.png';
import { useState } from 'react';

const InfrastructureDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
    {/* Navigation a larghezza piena */}
    <div className="relative w-full bg-zinc-900/50">
      {/* Hamburger Button */}
      <div className="max-w-[1200px] mx-auto px-4">
        <button 
          className="relative md:hidden z-50 p-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 w-full bg-emerald-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-emerald-400 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-emerald-400 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menu Mobile */}
      <nav className={`
        fixed md:relative top-0 left-0 w-full h-screen md:h-auto
        bg-black md:bg-transparent z-40
        flex flex-col md:flex-row justify-start md:justify-center items-center 
        gap-6 p-20 md:p-6
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {[
          { text: "inscrib3", href: "https://github.com/inscrib3" },
          { text: "inspip", href: "https://inspip.com/" },
          { text: "flux", href: "https://flux.inspip.com/" },
          { text: "blok blok blok", href: "https://blokblokblok.xyz/" },
          { text: "join us", href: "https://discord.gg/gpFGS4UJ5f" }
        ].map((link) => (
          <a 
            key={link.text} 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <button className="w-full min-w-[200px] md:min-w-[100px] h-9 px-6 sm:px-10 rounded-full border-2 border-white/60 bg-transparent text-[13px] text-[#D7FFE9] font-mono hover:border-white/20 transition-colors whitespace-nowrap">
              {link.text}
            </button>
          </a>
        ))}
      </nav>
    </div>

    {/* Contenuto principale */}
    <div className="flex justify-center">
      <div className="w-full max-w-[1200px] mb-auto px-4">
        <div className="space-y-8 md:space-y-12 pb-4">

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-[92px] mt-8 md:mt-[170px]">
            <div className="flex flex-col gap-[32px] w-full md:w-[814px]">
              <h1 className="font-ibm-mono font-bold  text-emerald-400 text-2xl md:text-[36px] leading-normal md:leading-[47px] text-primary">
                INSCRIB3
              </h1>
              
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col">
                  <div className="font-ibm-mono font-medium text-emerald-400 text-2xl md:text-[38px] leading-normal md:leading-[21px] text-text-light mb-4">
                    &gt;&gt; Infrastructure Provider
                  </div>
                  <div className="font-ibm-mono font-medium text-xl md:text-[35px] leading-normal md:leading-[31px] text-white">
                    on Ordinals & Runes
                  </div>
                </div>
                
                <p className="font-ibm-mono font-medium text-sm md:text-[16px] leading-normal md:leading-[21px] text-white">
                  Crafting the new era of Bitcoin applications using UTXO based protocols.
                </p>
              </div>
            </div>

            <div className="w-[120px] md:w-[160px] h-[140px] md:h-[190px] mx-auto md:mx-0">
              <img src={logo} alt="Inscrib3 logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Products Section */}
          <div>
            <div className="w-full h-full my-4 py-4 border border-white/20 bg-zinc-900/50 rounded-xl flex justify-center items-center">
              <h2 className="text-center text-lg md:text-xl text-white">Our Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* INSCRIB3 Card */}
              <div className="bg-black/20 rounded-xl border-2 border-ald-500emer p-4 md:p-6 relative overflow-hidden shadow-lg shadow-emerald-500/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-white text-lg md:text-xl mb-2">INSCRIB3</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-4">Non custodial and opensource solution.</p>
                    <a href="https://github.com/inscrib3" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-xs md:text-sm">&gt;&gt; https://github.com/inscrib3</a>
                  </div>
                  <div className="w-[30px] md:w-[40px]">
                    <img src={logo} alt="Inscrib3 logo" className="w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* RUINS GARDEN Card */}
              <div className="bg-black/20 rounded-xl border-2 border-red-500 p-4 md:p-6 relative overflow-hidden shadow-lg shadow-red-500/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-white text-lg md:text-xl mb-2">FLUX - FLUX on FRACTAL</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-4">Enter inside flux protocol.</p>
                    <a href="https://flux.inspip.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 text-xs md:text-sm">&gt;&gt; https://flux.inspip.com/</a>
                  </div>
                  <div className="w-[30px] md:w-[40px]">
                    <img src="https://flux.inspip.com/logo.svg" alt="Ruins logo" className="w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* BLOK BLOK BLOK Card */}
              <div className="bg-black/20 rounded-xl border-2 border-yellow-500 p-4 md:p-6 relative overflow-hidden shadow-lg shadow-yellow-500/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-white text-lg md:text-xl mb-2">BLOK BLOK BLOK - RUNE on BITCOIN</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-4">Explore the new non-arbitrary internet on blok.</p>
                    <a href="https://blokblokblok.xyz/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-xs md:text-sm">&gt;&gt; https://blokblokblok.xyz/</a>
                  </div>
                  <div className="w-[35px] md:w-[50px]">
                    <img src={block} alt="Block logo" className="w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* INSPIP Card */}
              <div className="bg-black/20 rounded-xl border-2 border-purple-500 p-4 md:p-6 relative overflow-hidden shadow-lg shadow-purple-500/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-white text-lg md:text-xl mb-2">INSPIP - PIPE on BITCOIN</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-4">Enter inside pipe protocol.</p>
                    <a href="https://inspip.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-xs md:text-sm">&gt;&gt; https://inspip.com/</a>
                  </div>
                  <div className="w-[30px] md:w-[40px]">
                    <img src={logo} alt="Inspip logo" className="w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Power of BTC Section */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Prima colonna - Testo */}
              <div className="text-center md:text-left">
                <div className="text-emerald-400 text-sm">&gt;&gt;</div>
                <div className="text-emerald-400 text-[20px]">the</div>
                <div className="text-emerald-400 text-[28px] md:text-[38px] font-bold">Power of BTC</div>
                <div className="text-emerald-400 text-[20px]">with the</div>
                <div className="text-emerald-400 text-[28px] md:text-[38px] font-bold">Runes Protocol</div>
                
                {/* Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                  {['fungible-tokens', 'community', 'dev', 'scalability', 'efficiency'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/20 border-2 border-gray-800 text-gray-400 text-xs md:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Columns */}
              {[
                ["On-Chain Data Storage", "Bitcoin First", "Fungible Tokens"],
                ["Developer-Friendly", "Efficiency and Scalability", "Community and Adoption"]
              ].map((column, idx) => (
                <div key={idx} className="space-y-4">
                  {column.map((feature) => (
                    <div key={feature} className="bg-black/20 border-2 border-emerald-500 rounded-xl p-4">
                      <div className="text-emerald-400 text-sm">&gt;&gt;</div>
                      <h4 className="text-xs md:text-sm text-white">{feature}</h4>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="mb-8">
            <div className="w-full h-full my-4 py-4 border border-white/20 bg-zinc-900/50 rounded-xl flex justify-center items-center">
              <h2 className="text-center text-lg md:text-xl text-white">More About Us</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Github", icon: github, href: "https://github.com/inscrib3", label: "inscrib3" },
                { name: "Discord", icon: discord, href: "https://discord.gg/gpFGS4UJ5f", label: "join" },
                { name: "X", icon: x, href: "https://x.com/inscrib3", label: "inscrib3" }
              ].map((social) => (
                <a key={social.name} 
                   href={social.href} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="px-4 md:px-6 py-3 bg-black/20 border-2 border-emerald-500 rounded-xl text-emerald-400 hover:bg-emerald-500/10">
                  <h3 className="mt-2 text-sm text-white">{social.name}</h3>
                  <span className="flex justify-between my-3 gap-2">
                    <button className="min-w-[100px] h-9 rounded-full border-2 border-emerald-500 bg-emerald-500 text-[13px] text-black font-mono transition-colors">
                      {social.label}
                    </button>
                    <div className="w-[20px] md:w-[25px]">
                      <img src={social.icon} alt={`${social.name} logo`} className="w-full object-contain" />
                    </div>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InfrastructureDashboard;