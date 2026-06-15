import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const TextDistortion = ({ text, className }) => {
  const containerRef = useRef(null);
  const [filterId] = useState(`trae-glitch-${Math.random().toString(36).substr(2, 9)}`);
  
  // Spring for the intensity of the glitch
  const glitchScale = useSpring(0, { stiffness: 40, damping: 12 });
  
  // State for the animated frequency to create the "digital noise" movement
  const [baseFreq, setBaseFreq] = useState("0.00001 0.9");

  const handleMouseEnter = () => {
    glitchScale.set(180); // High intensity for that "sliced" look
  };

  const handleMouseLeave = () => {
    glitchScale.set(0);
  };

  useEffect(() => {
    let interval;
    const animateGlitch = () => {
      // Rapidly shift frequency to simulate digital interference
      const yFreq = 0.6 + Math.random() * 0.4;
      setBaseFreq(`0.00001 ${yFreq}`);
    };

    interval = setInterval(animateGlitch, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className} cursor-default`}
    >
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          {/* 
            feTurbulence with very low X frequency and high Y frequency 
            creates the horizontal "slice" noise texture.
          */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFreq}
            numOctaves="2"
            result="glitch-noise"
          />
          {/* 
            feDisplacementMap uses the noise to shift the SourceGraphic 
            horizontally (using xChannelSelector="R")
          */}
          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="glitch-noise"
            scale={glitchScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <motion.div
        style={{
          filter: `url(#${filterId})`,
        }}
        className="relative z-10 will-change-[filter]"
      >
        <h1 className="m-0 select-none whitespace-nowrap leading-none">
          {text}
        </h1>
      </motion.div>
    </div>
  );
};

export default TextDistortion;
