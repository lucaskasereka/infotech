import { MessageCircle, Mail, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleScrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Solutions intelligentes pour entreprises modernes</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Des solutions numériques intelligentes
            <br className="hidden sm:block" />
            pour les professionnels modernes
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up stagger-2">
            Cartographie, data, web et solutions informatiques adaptées aux organisations et entreprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up stagger-3">
            <a
              href="https://wa.me/243970277410"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-base py-3.5 px-8 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Contacter sur WhatsApp
            </a>
            <a
              href="mailto:techinfo.rdc@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Mail size={20} />
              techinfo.rdc@gmail.com
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToServices}
            className="inline-flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-fade-up stagger-4"
          >
            <span className="text-sm font-medium">Découvrir nos services</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
