import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use MotionValues for raw position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Increased stiffness and damping for a snappier, less "laggy" feel
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      // Update MotionValues directly (bypasses React render cycle for position)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor - Custom Arrow Shape */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-20%',
          translateY: '-20%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
          stroke="black"
          strokeWidth="1"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83 3.06 7.15a.5.5 0 00.92-.04l1.35-3.15a.5.5 0 00-.04-.51L13.41 12.6l6.83-.85a.5.5 0 00.35-.85L5.85 3.21a.5.5 0 00-.35 0z" />
        </svg>
      </motion.div>
    </>
  );
};

export default CustomCursor;
