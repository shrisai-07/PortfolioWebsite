import { motion } from 'framer-motion';
import TextDistortion from './TextDistortion';

const Footer = () => {
  return (
    <footer className="relative bg-background overflow-hidden">
      <div className="section-container lg:pl-32 py-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/50">
        <p className="text-muted text-[13px] uppercase tracking-nav font-bold">
          Design & built by <span className="text-white">Shrisai Kolkondi</span>
        </p>
        
        <div className="flex gap-8">
          <a
            href="https://github.com/shrisai-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-[13px] uppercase tracking-nav font-bold"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shrisai-kolkondi-326781324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-[13px] uppercase tracking-nav font-bold"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Watermark */}
      <div className="flex justify-center select-none pb-20 overflow-hidden">
        <TextDistortion 
          text="SHRISAI" 
          className="text-[15vw] md:text-[20vw] font-[900] text-white/[0.05] hover:text-white/10 transition-colors leading-none uppercase tracking-tighter" 
        />
      </div>
    </footer>
  );
};

export default Footer;
