import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LegalSection from './components/LegalSection';
import BusinessStrategy from './components/BusinessStrategy';
import DistributorTable from './components/DistributorTable';
import Workflow from './components/Workflow';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <NavBar onNavigate={scrollToSection} />
      
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <LegalSection />
            <div className="my-12 h-px bg-slate-200" />
            <BusinessStrategy />
            <div className="my-12 h-px bg-slate-200" />
            <DistributorTable />
            <div className="my-12 h-px bg-slate-200" />
            <Workflow />
            <div className="my-12 h-px bg-slate-200" />
            <Roadmap />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
