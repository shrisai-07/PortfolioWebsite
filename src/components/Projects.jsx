import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useState, useRef } from 'react';

const ProjectRow = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      mouseX.set(e.clientX - 200); 
      mouseY.set(e.clientY - 125);
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative border-b border-border/50 py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 flex-1">
        <span className="text-muted font-mono text-sm tracking-tighter uppercase font-bold">_{project.id}</span>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-[clamp(28px,4vw,56px)] font-[900] uppercase tracking-tighter text-white group-hover:text-primary transition-colors leading-[1.0]">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 border border-border/50 text-muted font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 z-10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-accent border border-border rounded-full hover:bg-white hover:text-black transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={20} />
        </a>
        <ArrowUpRight 
          size={32} 
          className={`text-muted transition-all duration-500 ${isHovered ? 'rotate-0 text-white opacity-100' : '-rotate-45 opacity-0'}`}
        />
      </div>

      {/* Hover Image Reveal - Follow Mouse */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden lg:block"
        style={{ 
          x, 
          y,
          width: '400px',
          height: '250px'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full h-full bg-accent border border-border overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm rounded-lg">
          {/* TODO: replace with project thumbnail */}
          <div className="absolute inset-0 flex items-center justify-center text-muted uppercase tracking-widest text-[11px] font-bold">
            Preview Image
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container lg:pl-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        <span className="section-label">Selected Projects</span>

        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
