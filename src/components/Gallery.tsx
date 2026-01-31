import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Placeholder images - replace with actual project images
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    title: 'Développement Web',
    description: 'Application web moderne pour entreprise',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour analyse de données',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    title: 'Collaboration Équipe',
    description: 'Solution collaborative pour équipes distantes',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    title: 'Développement Mobile',
    description: 'Applications mobiles cross-platform',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop',
    title: 'E-Commerce',
    description: 'Boutique en ligne performante',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop',
    title: 'Formation IT',
    description: 'Sessions de formation en entreprise',
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused && !isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isPaused, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="galerie" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre Galerie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations et projets accomplis pour nos clients.
          </p>
        </div>

        {/* Main Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-card aspect-[16/10]">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image) => (
                <div key={image.id} className="min-w-full h-full relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 text-foreground hover:bg-card transition-colors shadow-lg"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 text-foreground hover:bg-card transition-colors shadow-lg"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card/90 text-foreground hover:bg-card transition-colors shadow-lg"
              aria-label={isPaused ? 'Reprendre' : 'Pause'}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>

            {/* Pause indicator when hovered */}
            {isHovered && !isPaused && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 text-foreground text-xs font-medium">
                ⏸ En pause
              </div>
            )}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
