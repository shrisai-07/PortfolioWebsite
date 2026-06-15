import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container lg:pl-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        <span className="section-label">About Me</span>
        
        <h2 className="text-[clamp(28px,3.5vw,52px)] font-[800] leading-[1.1] text-white max-w-4xl uppercase tracking-tighter">
          I believe in building systems that are secure by design, not as an afterthought.
        </h2>

        <div className="grid lg:grid-cols-[55%_45%] gap-[60px] items-start">
          <div className="relative group overflow-hidden border border-border bg-accent max-w-[450px]">
            <img 
              src="/profile.jpeg" 
              alt="Shrisai Kolkondi" 
              className="w-full h-[550px] object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-[400ms]"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/450x550/0a0a0a/ffffff?text=Shrisai+Kolkondi';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col gap-10 text-secondary text-[16px] leading-[1.7]">
            <p>
              Hi, I'm Shrisai Kolkondi. I'm a cybersecurity enthusiast who builds practical tools 
              to demonstrate modern security concepts — from authentication risk engines 
              to encrypted credential systems.
            </p>
            <p>
              My work focuses on Identity & Access Management, applied cryptography, 
              and threat detection. I approach security as a layered system: identity verification, 
              encryption, access control, and data isolation working together.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
