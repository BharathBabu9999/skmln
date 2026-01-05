import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Dashboard from './components/Dashboard';
import { trackVisitor, trackPageView } from './lib/analytics';

function MainPage() {
  useEffect(() => {
    trackVisitor();
    trackPageView('Home');
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Hero />
      
      {/* Ad Slot 1 - After Hero */}
      <AdSlot slotId="ad-slot-1" slot="6288729604" format="auto" />
      
      <Features />
      
      {/* Ad Slot 2 - After Features */}
      <AdSlot slotId="ad-slot-2" slot="2749279155" format="auto" />
      
      <Gallery />
      
      {/* Ad Slot 3 - After Gallery */}
      <AdSlot slotId="ad-slot-3" slot="8918762371" format="auto" />
      
      <Reviews />
      
      {/* Ad Slot 4 - After Reviews */}
      <AdSlot slotId="ad-slot-4" slot="1436197482" format="auto" />
      
      <Contact />
      
      <About />
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
