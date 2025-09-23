import { ArrowRight, Building2, Factory, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SimpleHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/1a4bcd89-6cba-444f-b44b-4e1c583fc474.png')`
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-6 text-center text-primary-foreground">
        <div className="max-w-6xl mx-auto ">
          {/* Company Badge */}
          

          {/* Who We Are */}
          

          {/* How We Do It */}
          <p className="sm:text-xl text-primary-foreground/90 mb-2 sm:mb-2 max-w-4xl mx-auto leading-relaxed font-bold text-4xl lg:text-7xl md:text-6xl">Shyam Baba Group Of Companies</p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 mb-2 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            We are Shyam Baba Group - a diversified conglomerate powering Nepal's progress across three core industries with sustainable innovation and unwavering commitment to quality.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button onClick={() => scrollToSection('industries')} size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base group shadow-xl">
              Explore Our Industries
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button onClick={() => scrollToSection('companies')} variant="outline" size="lg" className="w-full sm:w-auto bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base group">
              Our Companies
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Key Industries Icons */}
          

          {/* Quick Stats */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>;
};
export default SimpleHero;