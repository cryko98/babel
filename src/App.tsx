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
    <div id="babel-root" className="min-h-screen bg-[#0b0907] text-[#eae5db] relative selection:bg-babel-gold/30 selection:text-babel-parchment">
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

      {/* Interactive Live Dexscreener Frame */}
      <DexscreenerChart contractAddress={contractAddress} />

      {/* Structured "How To Buy" instructions Section */}
      <HowToBuy contractAddress={contractAddress} />

      {/* Custom footer with disclaimers */}
      <Footer contractAddress={contractAddress} twitterUrl={twitterUrl} />
    </div>
  );
}
