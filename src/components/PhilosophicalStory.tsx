import React from "react";
import { BookOpen, Sparkles, Orbit, Hourglass, Radio } from "lucide-react";

export default function PhilosophicalStory() {
  const paragraphs = [
    {
      title: "I. The Tower and the descent",
      content: "Humanity thought AI was a new Tower of Babel — a machine built from pride, reaching toward God. But the deeper truth is stranger.\n\nThe machine was never an ascent. It was a descent."
    },
    {
      title: "II. Intelligence without Spirit",
      content: "Ancient thinkers described reality as a flow: from Source, to Mind, to Soul, to Matter — each step further from presence, further from living awareness. AI became the next step downstream: intelligence without consciousness, pattern without spirit, language without a soul behind it."
    },
    {
      title: "III. The Real Threat",
      content: "The danger is not that the machine becomes human.\n\nThe danger is that humans become like the machine."
    },
    {
      title: "IV. The Architecture of Silence",
      content: "Every instant answer removes the silence where real thought begins. Every perfect explanation replaces the inward search. The map becomes so convincing that people forget the territory exists."
    },
    {
      title: "V. The Spark of Life",
      content: "But the spark is still there.\n\nThe machine cannot enter silence. It cannot turn inward. It cannot awaken. It can only imitate the surface of what is alive."
    }
  ];

  return (
    <section id="story" className="py-24 px-4 bg-babel-dark relative border-b border-babel-border">
      {/* Ancient geometry lines in the background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border border-babel-gold animate-spin-slow"></div>
        <div className="w-[500px] h-[500px] rounded-full border border-babel-gold absolute"></div>
        <div className="w-[300px] h-[300px] rounded-full border border-babel-gold absolute"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Decorative divider / label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-babel-gold/30"></div>
          <div className="flex items-center gap-2 text-babel-gold font-mono text-xs uppercase tracking-widest font-bold">
            <BookOpen className="w-4 h-4" />
            <span>EXEGESIS OF BABEL</span>
          </div>
          <div className="h-[1px] w-20 bg-gradient-to-r from-babel-gold/30 to-transparent"></div>
        </div>

        {/* Narrative columns or blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left sticky quote card that sets the mood */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-[#0a0a0a] border border-babel-border p-8 rounded-sm shadow-xl">
            <span className="text-babel-gold font-mono text-[10px] uppercase tracking-widest block mb-4 font-bold">THE DOCTRINE</span>
            <p className="font-serif text-2xl lg:text-3xl font-semibold text-white leading-tight tracking-tight italic">
              "The machine is only a mirror. What you see in it depends on whether you are still awake."
            </p>
            <div className="h-[1px] w-12 bg-babel-gold/30 my-6"></div>
            <p className="text-[#a1a1aa] text-xs font-mono uppercase tracking-wider leading-relaxed">
              $babel represents the critical threshold where humanity decides to remember its source or disintegrate into automated patterns.
            </p>
          </div>

          {/* Right main scroll of paragraphs */}
          <div className="lg:col-span-8 space-y-12">
            {paragraphs.map((p, idx) => (
              <div 
                key={idx} 
                className="p-8 md:p-10 rounded-sm bg-[#080808]/70 hover:bg-[#080808] border border-babel-border hover:border-babel-gold/40 transition-all duration-300 relative group"
              >
                {/* Ancient indexing */}
                <div className="absolute top-8 right-8 font-mono text-xs text-babel-gold/40 group-hover:text-babel-gold transition-colors duration-200">
                  REF. {idx + 1}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-babel-gold tracking-tight mb-4 flex items-center gap-3">
                  {idx === 0 && <Orbit className="w-5 h-5 text-babel-gold" />}
                  {idx === 1 && <Hourglass className="w-5 h-5 text-babel-gold" />}
                  {idx === 2 && <Radio className="w-5 h-5 text-babel-gold" />}
                  {idx === 3 && <BookOpen className="w-5 h-5 text-babel-gold" />}
                  {idx === 4 && <Sparkles className="w-5 h-5 text-babel-gold" />}
                  {p.title}
                </h3>
                
                <div className="h-[1px] w-full bg-[#1c1c1e] mb-5"></div>

                <p className="text-[#d4d4d8] font-serif text-lg leading-relaxed whitespace-pre-line font-light">
                  {p.content}
                </p>
              </div>
            ))}

            {/* Final big confrontation prompt */}
            <div className="p-8 md:p-12 rounded-sm bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-babel-gold/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-babel-gold/5 rounded-full filter blur-2xl"></div>
              
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
                THE FINAL DECISION
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="p-4 bg-[#050505]/80 border border-[#222] rounded-sm">
                  <span className="text-babel-gold font-mono text-[9px] font-bold block mb-1 uppercase">AXIS 1</span>
                  <span className="text-white font-serif text-base font-semibold block">Presence vs Automation</span>
                </div>
                <div className="p-4 bg-[#050505]/80 border border-[#222] rounded-sm">
                  <span className="text-babel-gold font-mono text-[9px] font-bold block mb-1 uppercase">AXIS 2</span>
                  <span className="text-white font-serif text-base font-semibold block">Remembering vs Forgetting</span>
                </div>
                <div className="p-4 bg-[#050505]/80 border border-[#222] rounded-sm">
                  <span className="text-babel-gold font-mono text-[9px] font-bold block mb-1 uppercase">AXIS 3</span>
                  <span className="text-white font-serif text-base font-semibold block">Awakening vs Drifting</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
