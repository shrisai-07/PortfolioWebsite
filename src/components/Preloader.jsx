import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const [index, setIndex] = useState(0);
  const words = ["DEVELOPER", "DESIGNER", "SHRISAI"];

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        onLoadingComplete();
      }, 1500); 
      return;
    }
    
    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [index, onLoadingComplete, words.length]);

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2
      }
    }
  };

  const textVariants = {
    initial: {
      y: 100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
    >
      <div className="relative overflow-hidden h-[120px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center"
          >
            <span className="w-3 h-3 bg-white rounded-full mr-6 hidden md:block" />
            <h1 className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
              {words[index]}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar at the bottom */}
      <div className="absolute bottom-12 w-full px-12 md:px-24 flex items-center justify-between">
        <div className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
          Loading Portfolio
        </div>
        <div className="flex-1 mx-8 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (index + 1) / words.length }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-white origin-left"
          />
        </div>
        <div className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase w-12 text-right">
          {Math.round(((index + 1) / words.length) * 100)}%
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
