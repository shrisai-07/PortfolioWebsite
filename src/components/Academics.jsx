import { motion } from 'framer-motion';
import { academics } from '../data/experience';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Academics = () => {
  return (
    <section id="academics" className="section-container lg:pl-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        <span className="section-label">Academics</span>

        <div className="grid md:grid-cols-2 gap-8">
          {academics.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2, borderColor: '#333' }}
              className="p-8 bg-card border border-border-muted hover:border-[#333] transition-all duration-200 group relative overflow-hidden rounded-lg"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.1em] border border-[#333] px-[10px] py-[4px] rounded-[4px] text-[#888] font-bold">
                      {edu.status}
                    </span>
                  </div>
                  <GraduationCap size={24} className="text-muted group-hover:text-white transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-[800] uppercase tracking-tight text-white leading-tight">
                    {edu.institution}
                  </h3>
                  <p className="text-secondary font-medium text-[16px] leading-snug">
                    {edu.degree}
                  </p>
                  {edu.cgpa && (
                    <span className="text-[13px] text-white/50 font-bold tracking-widest uppercase">{edu.cgpa}</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center gap-2 text-[#555] text-[13px] font-medium">
                    <Calendar size={14} />
                    <span>{edu.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#555] text-[13px] font-medium">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Academics;
