import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import team5 from '@/assets/team-5.jpg';

const teamMembers = [
  {
    name: 'Sarah Mbombo',
    role: 'Responsable IT',
    description: 'Experte en gestion de projets technologiques et coordination d\'équipe.',
    image: team1,
  },
  {
    name: 'Patrick Mwamba',
    role: 'Développeur Web',
    description: 'Spécialiste React et applications web modernes, passionné par le code propre.',
    image: team2,
  },
  {
    name: 'Grace Kalala',
    role: 'Analyste de Données',
    description: 'Transforme les données brutes en insights stratégiques pour nos clients.',
    image: team3,
  },
  {
    name: 'Jean-Pierre Mukendi',
    role: 'Spécialiste SIG',
    description: 'Expert en cartographie et systèmes d\'information géographique.',
    image: team4,
  },
  {
    name: 'Esther Kasongo',
    role: 'Designer Graphique',
    description: 'Créatrice d\'identités visuelles impactantes et mémorables.',
    image: team5,
  },
];

const Team = () => {
  return (
    <section id="equipe" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Notre Équipe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une équipe IT{' '}
            <span className="gradient-text-accent">engagée</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une équipe IT engagée pour des solutions numériques fiables et innovantes.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="card-elevated overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
