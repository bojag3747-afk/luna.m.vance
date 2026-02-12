import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxe-green/95 backdrop-blur-sm border-b border-luxe-gold/20 text-luxe-cream py-4 transition-all">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-serif text-xl md:text-2xl text-luxe-gold italic tracking-wide">Luna M. Vance</h1>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Digital Fine Art Studio</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium text-luxe-gold/80">
          <a href="#portfolio" className="hover:text-luxe-gold transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-luxe-gold transition-colors">Process</a>
          <a href="#pricing" className="hover:text-luxe-gold transition-colors">Commission</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;