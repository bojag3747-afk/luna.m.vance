
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-luxe-cream overflow-x-hidden scroll-smooth">
      <Header />
      <Hero />
      <PortfolioSection />
      <ExpertiseSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default App;
