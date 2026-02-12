
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05110a] text-stone-500 pt-10 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <div className="font-serif text-2xl text-luxe-gold italic">Luna M. Vance</div>
          <div className="text-[9px] uppercase tracking-[0.3em] text-luxe-gold/40 mt-2 font-bold">Digital Fine Art Studio</div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] opacity-30">
        <div>&copy; {new Date().getFullYear()} Luna M. Vance. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-luxe-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-luxe-gold transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
