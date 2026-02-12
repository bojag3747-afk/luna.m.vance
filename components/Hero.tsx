
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-luxe-green pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ifh.cc/A5wkyL.jpg" 
          alt="Noble dog portrait" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-luxe-green/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-green via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-luxe-cream space-y-8 max-w-5xl">
        <div className="w-16 h-px bg-luxe-gold mx-auto mb-4 opacity-60"></div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight animate-fade-in-up">
            Because a Blurry Photo <br/>
            <span className="italic text-luxe-gold font-serif">Can’t Hold Their Whole Soul.</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-serif italic text-luxe-gold/90 animate-fade-in-up delay-100">
            Waiting for You at the Rainbow Bridge.
          </p>
        </div>
        
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-200 leading-relaxed text-luxe-cream/80 uppercase tracking-widest">
          Turn Your Most Cherished Memories into a Timeless Legacy.
        </p>
        
        <div className="pt-8 animate-fade-in-up delay-300 flex flex-col items-center">
          {/* Points to the specific ID of the first portfolio item */}
          <a href="#portfolio-item-1" className="inline-block group relative px-12 py-5 bg-luxe-gold text-luxe-green transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_0_20px_rgba(196,164,100,0.5)] overflow-hidden rounded-sm">
            <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-bold">Explore the Masterpiece Gallery</span>
          </a>
          <p className="mt-4 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-luxe-gold animate-pulse">
            Only 3 spots left for this week
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-luxe-gold/50">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
