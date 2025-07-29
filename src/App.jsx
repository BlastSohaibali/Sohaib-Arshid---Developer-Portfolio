import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import Hero from './Hero'
import Navbar from './Navbar'
import Frontend from './Frontend'
import About from './About';
import Showcase from './Showcase';
import Contact from './Contact';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#0b0013] to-[#02001f]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Frontend />
              <About />
              <Showcase />
              <Contact />
            </>
          } />
          <Route path="/home" element={<Hero />} />
          <Route path="/expertise" element={<Frontend />} />
          <Route path="/about" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}