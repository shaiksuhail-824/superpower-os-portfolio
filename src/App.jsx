import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import EngineeringLab from './components/EngineeringLab';
import MissionControl from './components/MissionControl';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Landmark - Flow: Introduction -> Projects -> Skills -> Engineering Journey -> Learning/Tools -> Contact */}
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <EngineeringLab />
        <MissionControl />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
