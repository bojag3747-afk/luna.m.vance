
import React from 'react';
import { Check, ExternalLink, Instagram, Facebook, Pin, Send, Coffee } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  link: string;
  isPopular?: boolean;
}> = ({ title, price, features, link, isPopular = false }) => (
  <div className={`relative p-8 border flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3
    ${isPopular 
      ? 'bg-luxe-green text-luxe-cream border-luxe-green shadow-2xl scale-105 z-10' 
      : 'bg-white text-luxe-green border-luxe-gold/30 hover:border-luxe-gold hover:shadow-2xl'
    }`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-luxe-gold text-luxe-green text-[10px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg">
        Most Loved
      </div>
    )}
    
    <h3 className={`text-2xl font-serif italic mb-2 ${isPopular ? 'text-luxe-gold' : 'text-luxe-green'}`}>{title}</h3>
    <div className="text-4xl font-serif mb-8">{price}</div>
    
    <ul className="space-y-4 mb-10 flex-1 w-full max-w-fit mx-auto">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm font-light opacity-90 text-left leading-snug">
          <Check size={14} className={`mt-1 shrink-0 ${isPopular ? 'text-luxe-gold' : 'text-luxe-green'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-4 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 transform active:scale-95 text-center
      ${isPopular 
        ? 'bg-luxe-gold text-luxe-green hover:bg-white hover:shadow-inner' 
        : 'bg-luxe-green text-white hover:bg-luxe-gold hover:text-luxe-green hover:shadow-lg'
      }`}>
      Select Package
    </a>
  </div>
);

const PricingSection: React.FC = () => {
  const SOCIALS = [
    { name: 'Instagram', url: 'https://www.instagram.com/luna.m.vance/' },
    // { name: 'Facebook', url: '#' }, // Temporarily disabled due to connection issues
    { name: 'Pinterest', url: 'https://pinterest.com/luna_m_vance/' },
    { name: 'Telegram', url: 'https://t.me/lunamvance' },
  ];

  return (
    <section id="pricing" className="pt-24 pb-0 bg-luxe-cream px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-px bg-luxe-gold mb-6 opacity-40"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-luxe-green mb-4">Pricing & Packages</h2>
          <p className="text-luxe-green/60 font-light tracking-wide uppercase text-xs">Choose the perfect size for your legacy</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-0 items-center max-w-5xl mx-auto mb-20">
          <PricingCard 
            title="The Heritage Solo"
            price="$9"
            link="https://ko-fi.com/s/bc75573bc2"
            features={[
              "1 Pet Subject",
              "Head & Shoulders",
              "High-Res Digital File",
              "Standard Delivery"
            ]}
          />
          <PricingCard 
            title="The Royal Gallery"
            price="$25"
            link="https://ko-fi.com/s/47d4009546"
            features={[
              "Up to 3 Pet Subjects (1 Pet per Piece)",
              "Full Composition",
              "4K Ultra-HD File",
              "Priority Delivery"              
            ]}
            isPopular={true}
          />
          <PricingCard 
            title="The Ultimate Legacy"
            price="$40"
            link="https://ko-fi.com/s/5709c6db1a"
            features={[
              "5 Masterpiece Portraits (1 Pet per Piece)",
              "Full Composition",
              "4K Ultra-HD File",
              "Express 24h Delivery (Highest Priority)"
            ]}
          />
        </div>

        {/* Final CTA Block */}
        <div className="max-w-5xl mx-auto text-center border-t border-luxe-gold/20 pt-16">
          
          <h2 className="text-4xl md:text-5xl font-serif text-luxe-green italic mb-8 leading-tight">
            Start your pet’s <br/><span className="text-luxe-gold not-italic">legacy today.</span>
          </h2>

          {/* Profile & Artist Contact Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-full border border-luxe-gold p-1 mb-4">
              <img 
                src="https://i.ifh.cc/A5wkyL.jpg" 
                alt="Artist Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-[9px] uppercase tracking-[0.4em] text-luxe-gold font-bold">Artist Contact</h4>
              <p className="text-luxe-green font-serif italic text-lg leading-none">Luna M. Vance</p>
            </div>
          </div>
          
          {/* Social Platform Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12 max-w-4xl mx-auto">
            {SOCIALS.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/50 text-luxe-green border border-luxe-gold/20 hover:border-luxe-gold hover:bg-white transition-all rounded-sm group"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold">{social.name}</span>
                <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>

          {/* Ko-fi Button */}
          <div className="pb-16">
            <a 
              href="https://ko-fi.com/lunamvance/shop" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-luxe-gold via-[#D4B574] to-luxe-gold text-luxe-green transition-all duration-500 group rounded-full shadow-[0_10px_30px_rgba(196,164,100,0.2)] hover:shadow-[0_15px_45px_rgba(196,164,100,0.4)] hover:-translate-y-1 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
              
              <div className="flex items-center justify-center w-8 h-8 bg-luxe-green text-luxe-gold rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Coffee size={16} fill="currentColor" />
              </div>
              
              <span className="font-sans font-extrabold uppercase tracking-[0.2em] text-xs md:text-lg">
                Order on Ko-fi
              </span>
              
              <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-luxe-gold font-bold opacity-60">
              Secure Checkout • Global Delivery
            </p>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default PricingSection;
