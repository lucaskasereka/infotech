import { MessageCircle, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="InfoTECH Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="text-xl font-bold">
                Info<span className="text-accent">TECH</span>
              </span>
              <p className="text-xs text-accent">Solutions intelligentes</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://wa.me/243970277410"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <MessageCircle size={16} />
              +243 970 277 410
            </a>
            <a
              href="mailto:techinfo.rdc@gmail.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail size={16} />
              techinfo.rdc@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} dev by Ir Lucas Kasereka
            </p>
            <p className="text-xs text-primary-foreground/40 mt-1">
              InfoTECH – Solutions intelligentes
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/40">
            Tous droits réservés. Conçu avec passion à BUNIA, Ituri – République Démocratique du Congo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
