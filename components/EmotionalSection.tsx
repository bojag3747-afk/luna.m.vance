import React from 'react';

const EmotionalSection: React.FC = () => {
  return (
    <section className="py-24 bg-luxe-cream px-6 border-b border-luxe-gold/20">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif text-luxe-green leading-tight">
          Don’t let your most precious moments <br/> stay hidden in your phone’s gallery.
        </h2>
        
        <div className="w-24 h-1 bg-luxe-gold mx-auto rounded-full opacity-60"></div>
        
        <p className="text-xl md:text-2xl text-luxe-green/80 font-light leading-relaxed italic font-serif">
          "Transform your beloved companion’s photo into a gallery-quality tribute that lasts forever."
        </p>
      </div>
    </section>
  );
};

export default EmotionalSection;