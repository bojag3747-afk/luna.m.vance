import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 bg-luxe-cream px-6 border-b border-luxe-gold/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-luxe-green leading-tight">
              Transform moments <br/> hidden in your gallery.
            </h2>
            <div className="w-16 h-0.5 bg-luxe-gold/50 mx-auto md:mx-0"></div>
            <p className="text-lg text-luxe-green/80 font-light leading-relaxed italic font-serif">
              "Give your beloved companion a gallery-quality tribute that transcends a simple digital file."
            </p>
          </div>

          <div className="relative bg-white p-8 md:p-12 border-l-4 border-luxe-gold shadow-2xl">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <ShieldCheck className="text-luxe-gold" size={24} />
              <h3 className="text-xl font-serif text-luxe-green font-bold italic">One Shot, One Masterpiece.</h3>
            </div>
            <p className="text-luxe-green/70 font-light leading-relaxed text-sm text-center md:text-left">
              "To preserve the artistic integrity and the unique texture of each stroke, I do not offer revisions. I deliver a final, non-editable masterpiece that captures the perfect moment."
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-luxe-gold font-bold text-center md:text-left">
              Artistic Integrity Policy
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;