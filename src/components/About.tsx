import { CheckCircle2, Target, Users, Award } from 'lucide-react';
import founderImage from '@/assets/founder.jpg';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Solutions technologiques à la pointe',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Partenariats durables avec nos clients',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Qualité irréprochable garantie',
  },
];

const highlights = [
  'Solutions numériques sur mesure',
  'Accompagnement personnalisé',
  'Technologies modernes et fiables',
  'Support réactif et professionnel',
];

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              À propos de nous
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Votre partenaire{' '}
              <span className="gradient-text">numérique</span>{' '}
              de confiance
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              InfoTECH accompagne les entreprises, ONG et particuliers avec des solutions 
              numériques modernes, fiables et adaptées à leurs besoins. Notre mission est 
              de transformer vos défis technologiques en opportunités de croissance.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card shadow-sm"
                >
                  <value.icon className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Founder */}
          <div className="relative flex justify-center">
            <div className="relative z-10 max-w-xs">
              <div className="card-elevated overflow-hidden rounded-xl">
                <img
                  src={founderImage}
                  alt="Ir Lucas Kasereka - Fondateur d'InfoTECH"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-4 text-center bg-gradient-to-t from-card via-card to-transparent">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Ir Lucas Kasereka
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    Fondateur & Informaticien Professionnel
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Passionné par la technologie et l'innovation, Lucas dirige InfoTECH 
                    avec la vision de démocratiser l'accès aux solutions numériques.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
