import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Processo', path: '/guia' },
  { name: 'Viagens', path: '/viagens' },
  { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            alt="KNJ TUR Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uirT-BVnb-uqV2UqR1y7W0sqC7k5ywGD5Yo06gOMlVyWFvFXqDHzvoSAtiO_0W92GuqFrKcuCfvGZYrSktI4oUBoXVfnYl8Us0CH4pSGJGVYbgOu1GnJ2XGQ66DbYBvnvxmFJwG7fed6nLuyQz9bIBhv0XkbVZOVRM4FmuUMwCpx9u0Nkzv7NNOXLirXO3MroXMojRi8Vf3NTGtYgxZw93yXpgDXzM2R7FNpGsXgBlsh6towjdb7-C0MAQziSUsL4xLi4IQEflT1KU"
            referrerPolicy="no-referrer"
          />
          <span className="hidden md:block text-xl font-extrabold tracking-tight text-white">KNJ TUR</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "transition-colors hover:text-white",
                location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KNJTUR%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex btn-premium text-black px-6 py-2.5 rounded-full text-sm font-bold items-center gap-2"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-white/10 z-[70] md:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-black tracking-tighter text-white">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-on-surface-variant">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={link.path}
                      className={cn(
                        "text-3xl font-bold tracking-tight transition-colors",
                        location.pathname === link.path ? "text-primary" : "text-on-surface-variant hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-12 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40 mb-6">Fale Conosco</p>
                <a 
                  href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KNJTUR%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-premium w-full text-black px-6 py-4 rounded-2xl text-lg font-black flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
