import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, TrendingUp, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import constructionBg from '@/assets/construction-bg.jpg';
import manufacturingBg from '@/assets/manufacturing-bg.jpg';
import tradingBg from '@/assets/trading-bg.jpg';

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const slides = [
    {
      image: heroImage,
      title: "Shyam Baba Group",
      subtitle: "Building Nepal's Future",
      description: "Leading Nepalese business conglomerate driving sustainable growth across Construction, Manufacturing, and Enterprise & Trading sectors.",
      cta: "Discover Our Story"
    },
    {
      image: constructionBg,
      title: "Construction Excellence",
      subtitle: "Infrastructure That Lasts",
      description: "From modern commercial buildings to critical infrastructure projects, we're building the foundation of Nepal's future.",
      cta: "View Projects"
    },
    {
      image: manufacturingBg,
      title: "Manufacturing Innovation",
      subtitle: "Quality Products, Trusted Nationwide",
      description: "State-of-the-art manufacturing facilities producing cement, industrial materials, food products, and premium spirits.",
      cta: "Our Products"
    },
    {
      image: tradingBg,
      title: "Enterprise & Trading",
      subtitle: "Connecting Markets, Creating Value",
      description: "Strategic trading and logistics solutions connecting Nepal with regional and global markets through efficient supply chains.",
      cta: "Our Services"
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence", icon: TrendingUp },
    { number: "1000+", label: "Dedicated Employees", icon: Users },
    { number: "15+", label: "Business Units", icon: MapPin },
    { number: "3", label: "Core Industries", icon: TrendingUp }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          {/* Dynamic Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 text-sm border border-primary-foreground/20">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span>Leading Nepalese Business Conglomerate Since 1999</span>
          </div>

          {/* Main Heading with Slide Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slide-up">
            {slides[currentSlide].title}
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-primary-foreground/90 mt-3">
              {slides[currentSlide].subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-4xl mx-auto leading-relaxed text-fade-in">
            {slides[currentSlide].description}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('about')}
              className="btn-hero text-lg px-10 py-5 group"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => setIsVideoPlaying(true)}
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-lg px-10 py-5 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-elegant bg-background/10 backdrop-blur-sm border border-primary-foreground/20 group hover:bg-background/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <achievement.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{achievement.number}</h3>
                  <p className="text-primary-foreground/80 text-sm">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent scale-125' 
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
          <div className="text-primary-foreground/80 text-sm mb-2">Established</div>
          <div className="text-primary-foreground font-bold text-xl">1999</div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
          <div className="text-primary-foreground/80 text-sm mb-2">Headquarters</div>
          <div className="text-primary-foreground font-bold">Kathmandu, Nepal</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Video Modal (placeholder) */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-primary">Company Overview Video</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="text-muted-foreground hover:text-primary"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Video content will be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EnhancedHero;