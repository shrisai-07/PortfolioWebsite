import { motion } from 'framer-motion';
import { experiences, certifications } from '../data/experience';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container lg:pl-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-12">
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
        </div>

        {certifications && certifications.length > 0 && (
          <div className="flex flex-col gap-12">
            <span className="section-label">Certifications</span>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2, borderColor: '#333' }}
                  className="p-6 bg-card border border-border-muted hover:border-[#333] transition-all duration-200 group relative overflow-hidden rounded-lg flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-[16px] md:text-[18px] font-[800] uppercase tracking-tight text-white leading-tight">
                        {cert.title}
                      </h4>
                      <Award size={20} className="text-muted group-hover:text-white transition-colors flex-shrink-0" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <h5 className="text-[13px] font-bold text-white/90 tracking-wide uppercase">
                        {cert.organization}
                      </h5>
                      <p className="text-secondary leading-[1.6] text-[14px]">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Experience;
