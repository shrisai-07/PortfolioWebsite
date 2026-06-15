import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'GITHUB', href: 'https://github.com/shrisai-07', icon: <Github size={20} /> },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/shrisai-kolkondi-326781324/', icon: <Linkedin size={20} /> },
  ];

  return (
    <>
      {/* Sidebar - Desktop */}
      <div className="fixed left-0 top-0 h-screen w-[40px] hidden lg:flex flex-col justify-center items-center z-50 border-r border-border/50 bg-background">
        <div className="flex flex-col gap-12 items-center py-12 h-full justify-between">
          <div className="flex flex-col gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors text-[10px] font-bold tracking-[0.2em] uppercase rotate-180 [writing-mode:vertical-lr] py-4"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pb-12">
            <a
              href="mailto:shrisaik2002@gmail.com"
              className="text-muted hover:text-white transition-colors text-[10px] font-bold tracking-[0.2em] uppercase rotate-180 [writing-mode:vertical-lr] py-4"
            >
              shrisaik2002@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Top Nav - Desktop */}
      <nav className={`fixed top-0 right-0 w-full lg:w-[calc(100%-40px)] py-10 px-8 md:px-20 flex justify-end items-center mix-blend-difference z-40`}>
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-10 right-8 md:hidden text-white z-[70] p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-8 mt-12">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-muted transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
