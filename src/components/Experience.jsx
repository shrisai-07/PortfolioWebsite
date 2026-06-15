import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container lg:pl-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        <span className="section-label">My Experience</span>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2, borderColor: '#333' }}
              className="p-8 bg-card border border-border-muted hover:border-[#333] transition-all duration-200 group relative overflow-hidden rounded-lg"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#555] font-bold">
                      {exp.date}
                    </span>
                    <h3 className="text-[22px] font-[800] uppercase tracking-tight text-white leading-tight">
                      {exp.title}
                    </h3>
                  </div>
                  <Briefcase size={24} className="text-muted group-hover:text-white transition-colors" />
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-[16px] font-bold text-white/90 tracking-wide">
                    {exp.organization}
                  </h4>
                  <p className="text-secondary leading-[1.7] text-[16px] max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
