import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import Preloader from './components/Preloader';

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-background min-h-screen text-primary selection:bg-primary selection:text-background relative ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <div className="bg-grid" />
        <div className="bg-noise" />
        <BackgroundEffect />
        <div className="loading-bar" />

        <CustomCursor />
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Navbar />
            
            <main className="relative">
              <Hero />
              <About />
              <Academics />
              <TechStack />
              <Experience />
              <Projects />
              <Contact />
            </main>

            <Footer />

            <motion.button
              style={{ opacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: window.scrollY > 100 ? 1 : 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 p-4 bg-primary text-background rounded-full z-50 hover:scale-110 transition-transform shadow-xl"
            >
              <ArrowUp size={24} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
