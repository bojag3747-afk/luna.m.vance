import React from 'react';
import { ShieldCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 border-t border-luxe-gold/10">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxe-green/5 text-luxe-green mb-6">
          <ShieldCheck size={28} strokeWidth={1} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-luxe-green mb-6">
          One Shot, One Masterpiece.
        </h2>
        
        <div className="p-8 md:p-12 border border-luxe-green/10 bg-luxe-cream/30 relative">
          <span className="absolute top-4 left-4 text-4xl text-luxe-gold/20 font-serif">"</span>
          <p className="text-lg md:text-xl text-luxe-green/80 font-light leading-relaxed italic font-serif">
            To preserve the artistic integrity and the unique texture of each stroke, I do not offer revisions. 
            I deliver a final, non-editable masterpiece that captures the perfect moment.
          </p>
          <span className="absolute bottom-4 right-4 text-4xl text-luxe-gold/20 font-serif">"</span>
        </div>
        
        <p className="mt-8 text-xs text-luxe-green/50 uppercase tracking-widest">
          Artistic Integrity Policy
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;