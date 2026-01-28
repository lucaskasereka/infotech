import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+243 970 277 410',
    link: 'https://wa.me/243970277410',
    color: 'bg-green-500',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'techinfo.rdc@gmail.com',
    link: 'mailto:techinfo.rdc@gmail.com',
    color: 'bg-primary',
  },
  {
    icon: MapPin,
    title: 'Localisation',
    value: 'République Démocratique du Congo',
    link: null,
    color: 'bg-accent',
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    value: 'Lun - Sam : 8h00 - 18h00',
    link: null,
    color: 'bg-primary',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Prêt à{' '}
            <span className="gradient-text-accent">démarrer</span>{' '}
            votre projet ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="card-elevated p-6 text-center group"
            >
              <div
                className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-light p-8 lg:p-12">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Discutons de votre projet
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Que vous ayez besoin d'un site web, d'une solution de cartographie ou d'une assistance IT, 
              notre équipe est prête à vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/243970277410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-card text-foreground font-semibold rounded-lg hover:bg-card/90 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                Contacter sur WhatsApp
              </a>
              <a
                href="mailto:techinfo.rdc@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Mail size={20} />
                Envoyer un email
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
