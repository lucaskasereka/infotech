import { Map, Globe, BarChart3, Monitor, Palette } from 'lucide-react';

const services = [
  {
    icon: Map,
    title: 'Cartographie & SIG',
    description: 'Cartes professionnelles et analyse spatiale pour une meilleure prise de décision géographique.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Globe,
    title: 'Développement Web',
    description: 'Sites vitrines et landing pages modernes, optimisés mobile-first pour une présence en ligne impactante.',
    color: 'from-accent to-accent-light',
  },
  {
    icon: BarChart3,
    title: 'Analyse & Gestion des Données',
    description: 'Tableaux de bord interactifs et reporting personnalisé pour piloter votre activité.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Monitor,
    title: 'Informatique Générale',
    description: 'Support technique et assistance IT complète pour assurer la continuité de vos opérations.',
    color: 'from-accent to-accent-light',
  },
  {
    icon: Palette,
    title: 'Design Graphique',
    description: 'Logos, affiches et flyers professionnels qui renforcent votre identité visuelle.',
    color: 'from-primary to-primary-light',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des solutions{' '}
            <span className="gradient-text">complètes</span>{' '}
            pour votre réussite
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous proposons une gamme complète de services informatiques pour accompagner votre transformation numérique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/243970277410"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
