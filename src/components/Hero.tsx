import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
          Эксклюзивные
          <span className="block bg-gradient-luxury bg-clip-text text-transparent">
            путешествия
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Создаём незабываемые впечатления для взыскательных путешественников
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="luxury" 
            size="lg"
            className="text-lg px-8 py-6 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Подобрать тур
          </Button>
          
          <Button 
            variant="elegant" 
            size="lg"
            className="text-lg px-8 py-6 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Наши направления
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;