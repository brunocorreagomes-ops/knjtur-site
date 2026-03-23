import { Link } from 'react-router-dom';
import { Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              alt="KNJ TUR" 
              className="h-12 w-auto opacity-80" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uirT-BVnb-uqV2UqR1y7W0sqC7k5ywGD5Yo06gOMlVyWFvFXqDHzvoSAtiO_0W92GuqFrKcuCfvGZYrSktI4oUBoXVfnYl8Us0CH4pSGJGVYbgOu1GnJ2XGQ66DbYBvnvxmFJwG7fed6nLuyQz9bIBhv0XkbVZOVRM4FmuUMwCpx9u0Nkzv7NNOXLirXO3MroXMojRi8Vf3NTGtYgxZw93yXpgDXzM2R7FNpGsXgBlsh6towjdb7-C0MAQziSUsL4xLi4IQEflT1KU"
              referrerPolicy="no-referrer"
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60">
              © 2024 KNJ TUR. LUXURY VISA CONSULTANCY.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40 mt-1 text-center md:text-left">
              R. Pedro de Toledo, 1718 - Jardim Dom Bosco, Indaiatuba - SP, 13333-320
            </p>
          </div>
          
          <div className="flex gap-12">
            <Link to="/viagens" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-primary transition-colors">Viagens</Link>
            <Link to="/guia" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-primary transition-colors">Processo</Link>
            <Link to="/blog" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-primary transition-colors">Blog</Link>
            <a 
              href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KNJTUR%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="flex gap-6">
            <button className="text-on-surface-variant/60 hover:text-primary transition-colors">
              <Share2 size={20} />
            </button>
            <button className="text-on-surface-variant/60 hover:text-primary transition-colors">
              <Globe size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
