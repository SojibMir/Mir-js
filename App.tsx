import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary selection:bg-indigo-500/30 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;