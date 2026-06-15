import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StatCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[56px] font-[900] text-white leading-none">{count}+</span>
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-bold">{label}</span>
    </div>
  );
};

const Hero = () => {
  const titleWords = ["CYBERSECURITY", "ENTHUSIAST"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="section-container min-h-screen flex flex-col justify-center lg:pl-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-2">
          {titleWords.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={wordVariants}
                className="heading-giant"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div variants={wordVariants} className="max-w-xl">
          <p className="text-[16px] text-secondary leading-[1.7]">
            Hi! I'm <span className="text-white font-medium">Shrisai Kolkondi</span>. 
            A cybersecurity enthusiast focused on building secure systems, authentication mechanisms, and threat detection tools.
          </p>
        </motion.div>

        <motion.div variants={wordVariants} className="flex flex-col items-start gap-6">
          <MagneticButton>
            <a
              href="#contact"
              className="px-9 py-4 bg-white text-black font-[700] uppercase tracking-[0.15em] text-[13px] hover:bg-[#e0e0e0] transition-colors inline-block cursor-pointer relative z-10"
            >
              Let's Talk
            </a>
          </MagneticButton>
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted font-bold">
            Open to cybersecurity roles & collaborations
          </span>
        </motion.div>

        <motion.div variants={wordVariants} className="flex flex-wrap gap-12 md:gap-24 mt-12">
          <StatCounter end={3} label="Security Projects" />
          <StatCounter end={2} label="Years Learning" />
          <StatCounter end={4} label="GitHub Repos" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
