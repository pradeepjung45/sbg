import heroImage from '@/assets/hero-image.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Building2, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black">
        <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Shyam Baba Group
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Building Nepal's Future, One Project at a Time.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={() => scrollToSection('about')}>
            Learn More <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/companies">Our Companies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
