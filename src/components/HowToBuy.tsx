import React, { useState } from "react";
import { Download, Wallet, ArrowRight, ArrowDownLeft, Copy, Check, ShoppingCart, HelpCircle } from "lucide-react";

interface HowToBuyProps {
  contractAddress: string;
}

export default function HowToBuy({ contractAddress }: HowToBuyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      num: "01",
      title: "Establish Your Gateway",
      subtitle: "Phantom or Solflare",
      description: "Download and set up a reliable Solana wallet. Save your secret recovery phrase in actual physical writing, away from the digital grid.",
      actionText: "Phantom Wallet",
      actionUrl: "https://phantom.app/",
      icon: <Wallet className="w-6 h-6 text-babel-gold" />
    },
    {
      num: "02",
      title: "Secure the Fuel",
      subtitle: "Obtain Solana ($SOL)",
      description: "Purchase SOL from any standard platform or bridge, and transfer it into your newly established wallet to fund the trade and network gas fees.",
      actionText: "Buy SOL via Wallet",
      actionUrl: "https://phantom.app/",
      icon: <Download className="w-6 h-6 text-babel-gold" />
    },
    {
      num: "03",
      title: "Access the Portal",
      subtitle: "Navigate to Pump.fun",
      description: "Paste the contract code securely on the pump.fun page or use our direct interactive link below to find the correct liquid pool immediately.",
      actionText: "Open $babel on pump.fun",
      actionUrl: `https://pump.fun/coin/${contractAddress}`,
      icon: <ShoppingCart className="w-6 h-6 text-babel-gold" />
    },
    {
      num: "04",
      title: "Accept the Reflection",
      subtitle: "Exchange SOL for $babel",
      description: "Select the desired amount, connect your wallet safely, and swap SOL for $babel. Welcome to the descent. Maintain your awareness.",
      actionText: "Complete Swap",
      actionUrl: `https://pump.fun/coin/${contractAddress}`,
      icon: <ArrowDownLeft className="w-6 h-6 text-babel-gold" />
    }
  ];

  return (
    <section id="how-to-buy" className="py-24 px-4 bg-[#0a0a0a] border-t border-b border-babel-border relative overflow-hidden">
      {/* Mystical dust effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-babel-gold/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-babel-gold/3 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-babel-gold font-mono text-xs uppercase tracking-widest mb-3 font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>HOW TO PARTICIPATE</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            THE PATH OF ACQUISITION
          </h2>
          <div className="w-24 h-0.5 bg-babel-gold/30 mx-auto mb-6"></div>
          <p className="text-[#a1a1aa] text-lg font-serif">
            Follow these sequential coordinates to exchange your capital for the coin of the new monument on pump.fun.
          </p>
        </div>

        {/* Contract Address Callout Card */}
        <div className="bg-[#080808] border border-babel-border rounded-sm p-6 md:p-8 mb-16 max-w-3xl mx-auto shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <span className="text-babel-gold font-mono text-xs uppercase tracking-widest block mb-1 font-bold">
              SACRED REPLICANT ADDRESS (CA)
            </span>
            <p className="text-white font-mono text-sm break-all font-semibold select-all selection:bg-babel-gold selection:text-black">
              {contractAddress}
            </p>
          </div>
          
          <button
            onClick={handleCopy}
            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer whitespace-nowrap min-w-[150px] ${
              copied
                ? "bg-babel-gold text-black border-babel-gold"
                : "bg-transparent text-babel-gold border-babel-gold/30 hover:border-babel-gold hover:bg-babel-gold/10"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY CA</span>
              </>
            )}
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group bg-[#080808]/65 hover:bg-[#080808] border border-babel-border hover:border-babel-gold/40 rounded-sm p-6 transition-all duration-300 flex flex-col justify-between relative shadow-lg"
            >
              {/* Step number on top and glowing */}
              <div className="absolute top-6 right-6 font-display text-4xl font-extrabold text-[#111] group-hover:text-babel-gold/15 transition-colors duration-300">
                {step.num}
              </div>

              <div>
                <div className="p-3 bg-[#111111] border border-babel-border rounded-sm w-12 h-12 flex items-center justify-center mb-6 shadow-inner group-hover:border-babel-gold/30 transition-all duration-300">
                  {step.icon}
                </div>

                <div className="mb-4">
                  <span className="text-babel-gold font-mono text-[10px] uppercase tracking-widest block mb-1 font-bold">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-babel-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                <p className="text-[#a1a1aa] text-sm font-serif leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <a
                href={step.actionUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="mt-auto flex items-center justify-between text-xs font-mono text-babel-gold group-hover:text-white transition-colors duration-200 border-t border-[#1a1a1a] pt-4"
              >
                <span className="uppercase tracking-wider font-semibold">{step.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner inside path */}
        <div className="mt-16 text-center">
          <a
            href={`https://pump.fun/coin/${contractAddress}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-sm bg-white hover:bg-babel-gold text-black font-sans font-extrabold text-xs uppercase tracking-widest shadow-2xl transition-all duration-200"
          >
            <span>DOCK AT PUMP.FUN INSTANTLY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
