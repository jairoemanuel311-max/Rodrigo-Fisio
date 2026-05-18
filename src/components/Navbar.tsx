import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="https://lh3.googleusercontent.com/d/1NqAtrgpTJ6leOM-e4pF7jAwMCyHu9p6R" 
            alt="Logo Rodrigo Caetano"
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary leading-tight">Rodrigo Caetano</span>
            <span className="text-[10px] font-medium text-secondary uppercase tracking-widest">Fisioterapia</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-text-dark hover:text-secondary transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5531991498623?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 lg:px-5 text-xs lg:text-sm flex items-center gap-2 whitespace-nowrap"
          >
            <Phone size={16} />
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-text-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5531991498623?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={20} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
