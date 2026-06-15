import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-container lg:pl-32 pb-48">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-20"
      >
        <div className="flex flex-col gap-6 max-w-3xl">
          <span className="section-label !mb-0">Contact</span>
          <h2 className="text-[clamp(36px,5vw,72px)] font-[900] uppercase tracking-tighter leading-[1.0] text-white">
            Have a project <br /> in mind?
          </h2>
          <p className="text-secondary text-[16px] leading-[1.7] max-w-xl">
            I'm currently open to new opportunities and collaborations. 
            Fill out the form or reach out directly if you'd like to work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-bold">Email</span>
              <a 
                href="mailto:shrisaik2002@gmail.com"
                className="text-[22px] md:text-[28px] font-bold text-white hover:text-secondary transition-colors break-words underline underline-offset-8 decoration-border-muted"
              >
                shrisaik2002@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-bold">Socials</span>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/in/shrisai-kolkondi-326781324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-secondary hover:text-white transition-colors text-[16px] font-medium"
                >
                  LinkedIn <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
                <a 
                  href="https://github.com/shrisai-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-secondary hover:text-white transition-colors text-[16px] font-medium"
                >
                  GitHub <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card border border-border-muted p-8 md:p-12 rounded-lg relative overflow-hidden">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-6 py-12"
              >
                <CheckCircle2 size={64} className="text-white" />
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-white">Message Sent!</h3>
                  <p className="text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-4 text-[11px] uppercase tracking-widest font-bold underline underline-offset-4 text-white"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">Your Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sai"
                      className="bg-transparent border-b border-border-muted py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/5"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">Your Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sai@example.com"
                      className="bg-transparent border-b border-border-muted py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/5"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration Inquiry"
                    className="bg-transparent border-b border-border-muted py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">Message</label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-transparent border-b border-border-muted py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/5 resize-none"
                  />
                </div>

                <button
                  disabled={formState === 'sending'}
                  type="submit"
                  className="group flex items-center justify-center gap-3 bg-white text-black py-5 font-black uppercase tracking-widest text-sm hover:bg-[#e0e0e0] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
