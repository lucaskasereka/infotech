import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import promoVideo from '@/assets/promo-video.mp4';
import gallery1 from '@/assets/gallery-1.jpeg';
import gallery2 from '@/assets/gallery-2.jpeg';

// Gallery items - video first, then images
const galleryItems = [{
  id: 0,
  type: 'video' as const,
  src: promoVideo,
  title: 'Vidéo Promo'
}, {
  id: 1,
  type: 'image' as const,
  src: gallery1,
  title: 'Studio 1'
}, {
  id: 2,
  type: 'image' as const,
  src: gallery2,
  title: 'Studio 2'
}, {
  id: 3,
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  title: 'Développement Web'
}, {
  id: 4,
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  title: 'Dashboard Analytics'
}, {
  id: 5,
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
  title: 'Collaboration Équipe'
}, {
  id: 6,
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  title: 'Développement Mobile'
}, {
  id: 7,
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop',
  title: 'E-Commerce'
}, {
  id: 8,
  type: 'image' as const,
  src: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop',
  title: 'Formation IT'
}];
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % galleryItems.length);
    }, 5000);
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
    setCurrentIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
  };
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % galleryItems.length);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return <section id="galerie" className="section-padding bg-background">
      <div className="container-custom">

        {/* Main Carousel */}
        <div className="relative max-w-2xl mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Main Image/Video */}
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-card aspect-[16/10]">
            <div className="flex transition-transform duration-500 ease-out h-full" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {galleryItems.map((item, index) => <div key={item.id} className="min-w-full h-full relative">
                  {item.type === 'video' ? (
                    <video
                      ref={index === 0 ? videoRef : null}
                      src={item.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  )}
                </div>)}
            </div>

            {/* Navigation Arrows */}
            <button onClick={goToPrevious} className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-card/90 text-foreground hover:bg-card transition-colors shadow-md" aria-label="Image précédente">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={goToNext} className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-card/90 text-foreground hover:bg-card transition-colors shadow-md" aria-label="Image suivante">
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Play/Pause Button */}
            <button onClick={() => setIsPaused(!isPaused)} className="absolute top-3 right-3 p-1.5 rounded-full bg-card/90 text-foreground hover:bg-card transition-colors shadow-md" aria-label={isPaused ? 'Reprendre' : 'Pause'}>
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* Pause indicator when hovered */}
            {isHovered && !isPaused && <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-card/90 text-foreground text-xs font-medium">
                ⏸ En pause
              </div>}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 mt-4">
            {galleryItems.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} aria-label={`Aller à l'image ${index + 1}`} />)}
          </div>
        </div>

      </div>
    </section>;
};
export default Gallery;