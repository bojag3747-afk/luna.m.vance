
import React from 'react';
import { Eye, Monitor, Brush } from 'lucide-react';

const ExpertiseSection: React.FC = () => {
  return (
    <section id="process" className="bg-luxe-green text-luxe-cream py-12 relative overflow-hidden border-y border-luxe-gold/20">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#C4A464 0.5px, transparent 0.5px)', backgroundSize: '30px 30px'}}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Compact Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-white/10 pb-6">
            <h2 className="text-xl md:text-2xl font-serif text-white">
              Professional <span className="italic text-luxe-gold font-serif">Detail & Texture</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] text-luxe-gold font-bold opacity-60">Fine Art Standard</p>
          </div>

          {/* Compact 3-Column Grid with Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            <div className="flex gap-4 items-start group">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-luxe-gold/30 rounded-full text-luxe-gold group-hover:bg-luxe-gold group-hover:text-luxe-green transition-all duration-300">
                <Eye size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Artist's Vision</h3>
                <p className="text-luxe-cream/60 font-light text-xs leading-relaxed">
                  Exacting color grading and lighting design that captures the soul in your pet's eyes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start group">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-luxe-gold/30 rounded-full text-luxe-gold group-hover:bg-luxe-gold group-hover:text-luxe-green transition-all duration-300">
                <Monitor size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Ultra-HD File</h3>
                <p className="text-luxe-cream/60 font-light text-xs leading-relaxed">
                  300DPI+ resolution. Every brushstroke remains sharp even on large-scale prints.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-luxe-gold/30 rounded-full text-luxe-gold group-hover:bg-luxe-gold group-hover:text-luxe-green transition-all duration-300">
                <Brush size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Classical Impasto</h3>
                <p className="text-luxe-cream/60 font-light text-xs leading-relaxed">
                  Advanced digital techniques that simulate the rich texture of real oil paint.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
