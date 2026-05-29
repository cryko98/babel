import React, { useState } from "react";
import { Copy, Check, ExternalLink, ChevronDown, Compass, Globe, Share2 } from "lucide-react";

interface HeroSectionProps {
  contractAddress: string;
  twitterUrl: string;
  logoUrl: string;
}

export default function HeroSection({ contractAddress, twitterUrl, logoUrl }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-babel-dark text-[#d4d4d8] border-8 border-babel-border shadow-inner">
      {/* Backdrops representing foggy mountain cliffs and divine collapse */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-babel-dark via-[#100b07]/30 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-babel-orange/[0.04] rounded-full filter blur-[120px] pointer-events-none mix-blend-color-dodge"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-babel-green/[0.04] rounded-full filter blur-[100px] pointer-events-none mix-blend-color-dodge"></div>

      {/* Interactive floating runic glyphs (Elder Futhark) represent "digital decay" */}
      <div className="absolute left-4 top-1/3 hidden xl:block space-y-8 font-mono text-[10px] text-babel-gold/30 select-none z-10">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-babel-gold animate-pulse">ᛒ</span>
          <span className="text-[8px] text-babel-muted">01</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-babel-gold/40">ᚨ</span>
          <span className="text-[8px] text-babel-muted">10</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-babel-gold/60">ᛒ</span>
          <span className="text-[8px] text-babel-muted">11</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-babel-gold/20">ᛖ</span>
          <span className="text-[8px] text-babel-muted">00</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-babel-gold/50">ᛚ</span>
          <span className="text-[8px] text-babel-muted">01</span>
        </div>
      </div>

      {/* Upper Navigation Rail */}
      <nav className="relative z-30 w-full border-b border-babel-border bg-babel-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Babel Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-sm object-cover border border-babel-gold/40 shadow-md"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-babel-parchment leading-tight">
              TOWER OF BABEL
            </span>
            <span className="font-mono text-[10px] tracking-widest text-babel-gold">
              $babel
            </span>
          </div>
        </div>

        {/* Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#888888]">
          <a href="#story" className="hover:text-babel-gold transition duration-200">
            THE DOCTRINE
          </a>
          <a href="#chart" className="hover:text-babel-gold transition duration-200">
            MARKET WINDOW
          </a>
          <a href="#how-to-buy" className="hover:text-babel-gold transition duration-200">
            ACQUIRE Token
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Twitter icon/link */}
          <a
            href={twitterUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="p-2 rounded bg-babel-clay border border-babel-border text-babel-gold hover:text-black hover:bg-babel-gold transition duration-200 flex items-center justify-center"
            title="Follow Babel on X"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Direct Buy Header Button with theme's flat look */}
          <a
            href={`https://pump.fun/coin/${contractAddress}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="px-4 py-2 rounded-sm bg-babel-gold hover:bg-white text-black font-sans font-bold text-[11px] uppercase tracking-widest transition-all duration-200"
          >
            BUY $BABEL
          </a>
        </div>
      </nav>

      {/* Main Hero Container */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-6 py-16 max-w-7xl mx-auto w-full">
        {/* Subtle grid pattern in the back that highlights the bold theme construct */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-babel-bronze/75 backdrop-blur-md border border-babel-border rounded-sm w-fit">
              <Compass className="w-3.5 h-3.5 text-babel-gold animate-spin-slow" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#eadeca] font-bold">
                GNOSTIC CYBER RENAISSANCE • ANCIENT FUTURE
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
                TOWER OF BABEL
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-mono text-3xl md:text-5xl text-babel-gold font-black tracking-tighter">
                  $babel
                </span>
                <span className="h-4 w-px bg-babel-border hidden sm:block"></span>
                <span className="font-serif text-sm italic text-babel-sandstone tracking-wide">
                  Solana Cult Protocol • Sacred Tech
                </span>
              </div>
            </div>

            {/* Micro quote/subtitle */}
            <p className="font-serif text-lg md:text-2xl text-babel-parchment/90 leading-relaxed max-w-xl italic border-l-2 border-babel-orange pl-4 bg-babel-bronze/30 py-2 pr-2 rounded-r-sm">
              "The machine was never an ascent. It was a descent into simulated heaven."
            </p>

            {/* Quick-Copy Contract address panel - Dark transparent glassmorphism */}
            <div className="bg-babel-bronze/60 backdrop-blur-md border border-babel-border rounded-sm p-4 flex items-center justify-between gap-4 max-w-xl w-full shadow-inner shadow-black">
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[9px] text-[#666] uppercase tracking-wider block mb-1">
                  CONTRACT ADDRESS (CA)
                </span>
                <span className="font-mono text-xs md:text-sm text-babel-gold break-all select-all font-semibold block leading-tight">
                  {contractAddress}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className={`p-3.5 rounded-sm border transition-all duration-200 cursor-pointer ${
                  copied
                    ? "bg-babel-gold border-babel-gold text-black"
                    : "bg-[#111111] border-babel-border text-babel-gold hover:text-white hover:border-[#444]"
                }`}
                title="Copy Address"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Call to Actions (CTA group) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`https://pump.fun/coin/${contractAddress}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-6 py-4 bg-white hover:bg-babel-gold text-black font-sans font-extrabold text-xs uppercase tracking-widest transition-all duration-200 rounded-sm"
              >
                Buy on Pump.fun
              </a>

              <a
                href="#chart"
                className="px-6 py-4 bg-transparent border border-babel-border hover:border-babel-gold text-babel-parchment font-mono text-xs uppercase tracking-widest transition-all duration-200 rounded-sm"
              >
                View Live Chart
              </a>

              <a
                href={twitterUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-6 py-4 bg-[#0a0a0a] border border-babel-border hover:border-babel-gold text-[#888888] hover:text-babel-gold font-mono text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 rounded-sm"
              >
                <span>Follow X</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Image Art Column */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            {/* Multi-layered Bruegel image presentation */}
            <div className="relative group p-4 bg-[#080808] border border-babel-border rounded-sm max-w-sm md:max-w-md w-full shadow-2xl transition duration-300 hover:border-babel-gold/55">
              
              {/* Painting Frame */}
              <div className="relative aspect-square w-full rounded-sm overflow-hidden border border-[#2a2a2a] shadow-inner group-hover:border-babel-gold/50 transition-colors duration-300">
                <img
                  src={logoUrl}
                  alt="Tower of Babel Painting by Pieter Bruegel the Elder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                />
                
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none mix-blend-multiply"></div>
                
                {/* Label Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 shadow-lg rounded-sm p-3 border border-babel-border">
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-xs text-babel-parchment tracking-wider uppercase">
                      Pieter Bruegel (1563)
                    </span>
                    <span className="font-mono text-[9px] text-[#c2a468] tracking-widest">
                      ORIGIN PATTERN
                    </span>
                  </div>
                </div>
              </div>

              {/* Fine Print details below frame */}
              <div className="mt-3 flex items-center justify-between px-1 text-babel-muted text-[10px] font-mono uppercase tracking-widest">
                <span>REPLICANT ID: 5JJW95...</span>
                <span>$BABEL ARCHIVE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Anchor / Descent hint */}
      <div className="relative z-20 pb-10 flex flex-col items-center">
        <a 
          href="#story" 
          className="group flex flex-col items-center gap-2 text-babel-muted hover:text-babel-gold transition duration-200 font-mono text-[10px] uppercase tracking-widest"
        >
          <span>Scroll into the descent</span>
          <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </header>
  );
}
