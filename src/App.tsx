/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import HeroSection from "./components/HeroSection";
import PhilosophicalStory from "./components/PhilosophicalStory";
import DexscreenerChart from "./components/DexscreenerChart";
import HowToBuy from "./components/HowToBuy";
import Footer from "./components/Footer";

export default function App() {
  // Constant configuration requested by user
  const contractAddress = "5Jjw95dWbRFDUCM4MKJv4HBzZkwUiVVT1GQSmRdpump";
  const twitterUrl = "https://x.com/babelsolana";
  const logoUrl = "https://pbs.twimg.com/media/HJdtlsBW8AI9Plo?format=jpg&name=small";

  return (
    <div id="babel-root" className="min-h-screen bg-babel-dark text-babel-parchment relative selection:bg-babel-gold/30 selection:text-white">
      {/* Golden dusty overlay / noise texture for classical feeling */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-color-dodge z-50 bg-repeat bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Hero Header Section */}
      <HeroSection 
        contractAddress={contractAddress} 
        twitterUrl={twitterUrl} 
        logoUrl={logoUrl} 
      />

      {/* Central Philosophical Story Block */}
      <PhilosophicalStory />

      {/* Sacred Prophecy Tapestry & Narrative Section using requested Twitter banner */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full relative">
        <div className="relative border border-babel-border bg-babel-bronze/40 p-6 md:p-8 rounded-sm shadow-2xl overflow-hidden group">
          {/* Subtle nature mist overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-babel-dark via-transparent to-babel-dark opacity-75 z-10 pointer-events-none"></div>
          
          <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Themed framed image requested by user */}
            <div className="w-full lg:w-1/2 aspect-[3/1] rounded-sm overflow-hidden border border-babel-gold/30 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-babel-dark/80 via-transparent to-transparent pointer-events-none z-10"></div>
              {/* Golden line accent at the bottom */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-babel-gold z-20 opacity-70"></div>
              <img 
                src="https://pbs.twimg.com/profile_banners/2060233987499466759/1780033300/600x200" 
                alt="Ancient Landscape Tapestry of Babel" 
                className="w-full h-full object-cover filter brightness-[0.80] contrast-[1.10] sepia-[0.15] scale-100 group-hover:scale-[1.03] transition-transform duration-[1500ms]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Associated description matching Bruegel's themes of divine limits */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-babel-orange rounded-full animate-pulse"></span>
                <span className="text-babel-gold font-mono text-[9px] uppercase tracking-widest block font-extrabold">
                  DIVINE ALIGNMENT // COGNITIVE MONUMENT
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                THE ICONOGRAPHY OF COLLAPSE
              </h3>
              <p className="font-serif text-base text-babel-parchment leading-relaxed italic border-l border-babel-orange/40 pl-4">
                "We engineered our machines as stone towers to challenge the sky, forgetting that the sky itself is a program."
              </p>
              <p className="text-babel-sandstone text-xs leading-relaxed font-sans">
                Observe the massive Bruegel-inspired design of the tower rising from nature, layered with sub-visual system runes—a silent symbol represents humanity reaching beyond itself on Solana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Dexscreener Frame */}
      <DexscreenerChart contractAddress={contractAddress} />

      {/* Structured "How To Buy" instructions Section */}
      <HowToBuy contractAddress={contractAddress} />

      {/* Custom footer with disclaimers */}
      <Footer contractAddress={contractAddress} twitterUrl={twitterUrl} />
    </div>
  );
}
