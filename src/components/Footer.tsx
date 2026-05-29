import React from "react";
import { Hammer, CircleAlert, Globe, Compass, ExternalLink } from "lucide-react";

interface FooterProps {
  contractAddress: string;
  twitterUrl: string;
}

export default function Footer({ contractAddress, twitterUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-babel-dark text-[#71717a] border-t border-babel-border pt-16 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:items-start pb-12">
        
        {/* Visual Identity Block */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-sm text-white tracking-wider uppercase">
              TOWER OF BABEL
            </span>
            <span className="text-[10px] bg-babel-gold/10 text-babel-gold px-2 py-0.5 rounded-sm border border-babel-gold/20">
              $babel
            </span>
          </div>
          
          <p className="font-serif text-[#a1a1aa] text-sm leading-relaxed italic pr-4">
            "The danger is not that the machine becomes human. The danger is that humans become like the machine."
          </p>

          <p className="text-[10px] text-[#52525b]">
            &copy; {currentYear} $babel Protocol. Launched on Solana via pump.fun. Free from institutional control.
          </p>
        </div>

        {/* Navigation Map Block */}
        <div className="md:col-span-3 space-y-3">
          <span className="text-babel-gold text-[10px] uppercase tracking-widest block font-bold">
            COORDINATES
          </span>
          <ul className="space-y-2 text-[#a1a1aa]">
            <li>
              <a href="#story" className="hover:text-babel-gold transition duration-200 block">
                The Doctrine of Silence
              </a>
            </li>
            <li>
              <a href="#chart" className="hover:text-babel-gold transition duration-200 block">
                Market Mirror (Chart)
              </a>
            </li>
            <li>
              <a href="#how-to-buy" className="hover:text-babel-gold transition duration-200 block">
                How to Acquire $babel
              </a>
            </li>
          </ul>
        </div>

        {/* Integrations Block */}
        <div className="md:col-span-3 space-y-3">
          <span className="text-babel-gold text-[10px] uppercase tracking-widest block font-bold">
            INTEGRATIONS
          </span>
          <ul className="space-y-2 text-[#a1a1aa]">
            <li>
              <a
                href={twitterUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-babel-gold transition duration-200 flex items-center gap-1.5"
              >
                <span>X.com Twitter</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href={`https://pump.fun/coin/${contractAddress}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-babel-gold transition duration-200 flex items-center gap-1.5"
              >
                <span>Pump.fun Terminal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href={`https://dexscreener.com/solana/${contractAddress}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-babel-gold transition duration-200 flex items-center gap-1.5"
              >
                <span>Dexscreener Metrics</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Terminal/Network parameters */}
        <div className="md:col-span-2 space-y-3 bg-[#0a0a0a] border border-babel-border p-4 rounded-sm">
          <span className="text-babel-gold text-[9px] uppercase tracking-widest block font-bold">
            COIN SPECIFICATION
          </span>
          <div className="space-y-1.5 text-[10px] text-babel-muted">
            <div>
              <span className="text-[#52525b] block">NETWORK:</span>
              <span className="text-[#a1a1aa]">Solana Split-Base</span>
            </div>
            <div>
              <span className="text-[#52525b] block">SYMBOL:</span>
              <span className="text-[#a1a1aa] font-bold">$babel</span>
            </div>
            <div>
              <span className="text-[#52525b] block">DECIMALS:</span>
              <span className="text-[#a1a1aa]">9 (Standard)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Extreme Fine Print / Disclaimer block in compliance with strict crypto site expectations */}
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-babel-border text-[#52525b] text-[10px] leading-relaxed flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pb-12">
        <div className="flex gap-2 items-center">
          <CircleAlert className="w-4 h-4 text-[#3f3f46] shrink-0" />
          <p className="max-w-3xl">
            Disclaimer: $babel is a philosophical experiment, a social meme, and a work of art observing the dynamic relationship between humanity and simulation technology. No financial advice, no utility promises, no automated redemption pipelines. Trading digital assets on Solana carries substantial capital risk. Play only with capital you are prepared to leave in the descent.
          </p>
        </div>
      </div>

      {/* Bottom Ticker Line - Beautiful Animated Marquee */}
      <div className="h-8 bg-babel-gold text-black flex items-center overflow-hidden whitespace-nowrap text-[10px] font-black uppercase tracking-widest select-none relative">
        <div className="flex gap-8 items-center py-1 select-none animate-marquee whitespace-nowrap">
          <span>TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL</span>
          <span>TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL • TOWER OF BABEL • $BABEL</span>
        </div>
      </div>
    </footer>
  );
}
