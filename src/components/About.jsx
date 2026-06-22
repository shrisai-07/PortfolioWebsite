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
          Aspiring Cybersecurity Analyst.
        </h2>

        <div className="max-w-3xl flex flex-col gap-10 text-secondary text-[16px] leading-[1.7]">
          <p>
            Hi, I'm Shrisai Kolkondi an aspiring cybersecurity analyst with hands-on experience in SOC operations, 
            security monitoring, alert triage, and incident handling.
          </p>
          <p>
            My focus areas include Identity & Access Management, applied cryptography, SIEM platforms (Splunk & Microsoft Sentinel), 
            and threat detection. I'm currently pursuing a B.Tech in CSE (Cybersecurity & Digital Forensics) at VIT Bhopal University 
            with a CGPA of 8.75.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
