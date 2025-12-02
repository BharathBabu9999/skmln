import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdSlot from './components/AdSlot';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Hero />
      
      {/* Ad Slot 1 - After Hero */}
      <AdSlot slotId="ad-slot-1" format="horizontal" />
      
      <Features />
      
      {/* Ad Slot 2 - After Features */}
      <AdSlot slotId="ad-slot-2" format="auto" />
      
      <Gallery />
      
      {/* Ad Slot 3 - After Gallery */}
      <AdSlot slotId="ad-slot-3" format="horizontal" />
      
      <Reviews />
      
      {/* Ad Slot 4 - After Reviews */}
      <AdSlot slotId="ad-slot-4" format="auto" />
      
      <Contact />
      
      <About />
      
      <Footer />
    </div>
  );
}

export default App;
