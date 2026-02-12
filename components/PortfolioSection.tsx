
import React from 'react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    name: "Oliver",
    breed: "Finnish Lapphund",
    after: "https://i.ifh.cc/brqyTk.jpg",
    before: "https://i.ifh.cc/6GOqMc.jpg",
  },
  {
    id: 2,
    name: "Mochi",
    breed: "Golden Retriever",
    after: "https://i.ifh.cc/RrZCfk.jpg",
    before: "https://i.ifh.cc/TajPob.jpg",
  },
  {
    id: 3,
    name: "Cooper",
    breed: "Labrador Retriever",
    after: "https://i.ifh.cc/6WGM7H.jpg",
    before: "https://i.ifh.cc/foj208.jpg",
  },
  {
    id: 4,
    name: "Jasper",
    breed: "Nordic Shepherd",
    after: "https://i.ifh.cc/Yt3T3d.jpg",
    before: "https://i.ifh.cc/t14p6T.jpg",
  },
];

const PortfolioCard: React.FC<{
  beforeSrc: string;
  afterSrc: string;
  name: string;
  breed: string;
}> = ({ beforeSrc, afterSrc, name, breed }) => (
  <div className="group relative">
    <div className="relative aspect-[4/5] overflow-hidden bg-luxe-green shadow-xl">
      <img 
        src={afterSrc} 
        alt={`Portrait of ${name}`} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Before/Reference Thumbnail Overlay */}
      <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-white shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 z-20">
         <img src={beforeSrc} alt="Original reference" className="w-full h-full object-cover" />
         <div className="absolute bottom-0 w-full bg-black/60 text-[8px] text-white text-center py-0.5 uppercase tracking-widest font-bold">Original</div>
      </div>

      {/* Decorative Frame Overlay */}
      <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none group-hover:border-white/20 transition-all z-10"></div>
    </div>
    
    <div className="mt-6 text-center">
      <h3 className="text-xl font-serif text-luxe-green italic">{name}</h3>
      <p className="text-[10px] uppercase tracking-[0.3em] text-luxe-gold mt-1 font-bold">{breed}</p>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-white px-6 scroll-mt-24">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-20 space-y-6">
          <p className="text-luxe-green uppercase tracking-[0.3em] text-xs font-bold opacity-60">Curated Masterpieces</p>
          <h2 className="text-4xl md:text-5xl font-serif text-luxe-green">From a Simple Photo to Fine Art</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard 
              key={item.id}
              afterSrc={item.after}
              beforeSrc={item.before}
              name={item.name}
              breed={item.breed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
