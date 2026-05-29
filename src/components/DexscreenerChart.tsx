import React, { useState } from "react";
import { AreaChart, TrendingUp, ExternalLink, RefreshCw, BarChart2 } from "lucide-react";

interface DexscreenerChartProps {
  contractAddress: string;
}

export default function DexscreenerChart({ contractAddress }: DexscreenerChartProps) {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
    setIsLoading(true);
  };

  // Dexscreener embed URL for Solana pair or token
  const embedUrl = `https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark&trades=0&info=0`;

  return (
    <section id="chart" className="py-20 px-4 max-w-6xl mx-auto w-full relative">
      {/* Decorative background elements reminiscent of ancient blueprint lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c2a468" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 border border-babel-border bg-babel-bronze/70 rounded-sm p-6 md:p-8 shadow-2xl backdrop-blur-md">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-babel-border">
          <div>
            <div className="flex items-center gap-2 text-babel-gold font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>DESCENT METRICS // VOLUMETRIC METERS</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tighter">
              MARKET MIRROR
            </h2>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0 font-mono text-xs">
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-babel-dark hover:bg-babel-bronze border border-babel-border text-babel-gold hover:text-white transition duration-200 cursor-pointer font-bold uppercase tracking-wider"
              title="Reload Chart"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>RELOAD FEED</span>
            </button>
            <a
              href={`https://dexscreener.com/solana/${contractAddress}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-babel-orange/20 hover:bg-babel-orange/40 border border-babel-orange/60 text-[#eadeca] hover:text-white transition duration-200 uppercase tracking-wider font-bold"
            >
              <span>DEXSCREENER</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Chart Frame */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[400px] rounded-sm overflow-hidden bg-babel-dark border border-babel-border shadow-inner">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-babel-dark text-babel-muted z-30">
              <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-babel-orange/10"></div>
                <div className="absolute inset-0 rounded-full border-2 border-t-babel-gold animate-spin"></div>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-babel-gold animate-pulse font-bold">
                Initiating Machine Feedback...
              </p>
            </div>
          )}

          <iframe
            key={key}
            src={embedUrl}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full border-0 absolute top-0 left-0"
            allow="clipboard-write"
            allowFullScreen
          />
        </div>

        {/* Detailed disclaimer showing token stats block with classical alignment */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-babel-muted animate-fade-in">
          <div className="p-4 rounded-sm bg-babel-dark/90 border border-babel-border">
            <span className="text-babel-gold uppercase block mb-1 font-bold">Contract Address</span>
            <span className="break-all block text-white select-all selection:bg-babel-gold selection:text-black font-semibold">
              {contractAddress}
            </span>
          </div>
          <div className="p-4 rounded-sm bg-babel-dark/90 border border-babel-border flex flex-col justify-center">
            <span className="text-babel-gold uppercase block mb-1 font-bold">Ticker Mapping</span>
            <span className="text-white text-sm font-semibold">
              $babel <span className="text-babel-orange">/</span> TOWER OF BABEL
            </span>
          </div>
          <div className="p-4 rounded-sm bg-babel-dark/90 border border-babel-border flex flex-col justify-center">
            <span className="text-babel-gold uppercase block mb-1 font-bold">Solana Network</span>
            <span className="text-[#eadeca] font-medium">
              Verified Pump.fun launch pool
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
