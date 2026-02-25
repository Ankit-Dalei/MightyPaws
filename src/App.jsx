import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Specials from './pages/Specials';
import Gallery from './pages/Gallery';
import ComingSoon from './pages/ComingSoon';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollToTopAndReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach(t => t.kill());
    
    const ctx = gsap.context(() => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((el) => {
        gsap.fromTo(el, 
          { 
            opacity: 0, 
            y: 30,
            visibility: 'hidden'
          }, 
          {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            duration: 0.6,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play none none none'
            },
            onComplete: () => {
              gsap.set(el, { clearProps: 'all' });
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopAndReveal />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<ComingSoon />} />
            <Route path="/sharing" element={<ComingSoon />} />
            <Route path="/rights" element={<ComingSoon />} />
            <Route path="/data" element={<ComingSoon />} />
            <Route path="/login" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
