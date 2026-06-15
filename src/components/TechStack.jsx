import { motion } from 'framer-motion';
import { techStack } from '../data/techstack';

const TechStack = () => {
  return (
    <section className="section-container lg:pl-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        <span className="section-label">My Stack</span>

        <div className="flex flex-col gap-16">
          {techStack.map((category) => (
            <div key={category.category} className="flex flex-col gap-8">
              <h3 className="text-muted text-[11px] uppercase tracking-[0.2em] font-bold">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ 
                      borderColor: '#444', 
                      backgroundColor: '#161616',
                      y: -2 
                    }}
                    className="flex items-center gap-[10px] px-[18px] py-[10px] bg-accent border border-border rounded-[6px] transition-all duration-200 group cursor-default"
                  >
                    {tech.icon !== 'null' ? (
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                        alt={tech.name}
                        className="w-8 h-8 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-muted/20 rounded-full group-hover:bg-primary/10 transition-colors" />
                    )}
                    <span className="text-[13px] font-medium text-white group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
