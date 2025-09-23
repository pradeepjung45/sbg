import { Building2, Factory, Truck, Package, Recycle, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Industries = () => {
  const industries = [
    {
      id: 'construction',
      icon: Building2,
      title: 'Construction & Infrastructure',
      subtitle: 'Transforming Landscapes, Empowering Progress',
      description: 'We lead industrial, commercial, and national infrastructure development through state-of-the-art engineering and execution.',
      services: [
        'Industrial Construction: Warehouses, steel plants, factories (Con-Tech Construction)',
        'Public Infrastructure: Roads, bridges, schools (Maryada Construction)',
        'Urban & Sustainable Development: Smart housing, eco-materials (Crystalline Developers)'
      ],
      achievements: [
        '200+ projects across Nepal',
        'Solar-powered rural schools',
        'Earthquake-resilient urban designs'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      gradient: 'from-blue-600/20 to-cyan-600/20'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing & Industrial Output',
      subtitle: 'Building Blocks of Nepal\'s Growth',
      description: 'From construction materials to food products and spirits, our manufacturing units power daily life and national progress.',
      services: [
        'Cement & Concrete: Janaki Cement, Dhanusha Cement, Purbanchal Construction Suppliers',
        'Agro-processing: Shyambaba Rice & Flour Mill (grains for households and institutions)',
        'Industrial Products: Alto Plastic & Galvining Wire',
        'Beverage Production: Shangrila Distillery – premium spirits crafted in Chitwan'
      ],
      achievements: [
        '1M+ tons of cement produced annually',
        'ISO-certified facilities',
        'National distribution networks'
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      gradient: 'from-orange-600/20 to-red-600/20'
    },
    {
      id: 'trading',
      icon: Package,
      title: 'Trading & Enterprise Solutions',
      subtitle: 'Connecting Global Markets to Local Needs',
      description: 'Our trading companies facilitate imports, procurement, distribution, and logistics for the government, private, and development sectors.',
      services: [
        'Import-Export: Shyam Baba Enterprises – building materials, machinery, industrial supplies',
        'F&B Procurement: Matarani Enterprise – supplying to hospitals, hotels, and government agencies',
        'Logistics & Supply Chain: Koili Multipurpose – warehousing, bulk transport, supply chain logistics'
      ],
      achievements: [
        'Decades of procurement expertise',
        'Deep network of suppliers across Asia',
        'Efficient compliance and delivery pipeline',
        'Regional fleet for nationwide delivery'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      gradient: 'from-green-600/20 to-emerald-600/20'
    }
  ];

  const sustainabilityItems = [
    'Solar integration in rural schools',
    'Recycled construction materials',
    'Water-efficient production facilities',
    'Support for local farmers via agro-processing'
  ];

  const impactStats = [
    { label: 'Years of Excellence', value: '27+' },
    { label: 'Industries & Companies', value: '15+' },
    { label: 'Jobs Created', value: '2,000+' },
    { label: 'Government & NGO Projects', value: '50+' },
    { label: 'Supply Chain Coverage', value: 'Nationwide' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Our Industries
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
              Driving Growth Across Nepal's Foundational Sectors
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              As one of Nepal's most dynamic conglomerates, Shyam Baba Group powers key industries that build nations—Construction, Manufacturing, and Trading & Enterprise. With a firm belief in local strength and global standards, we are committed to sustainable development, innovation, and inclusive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section key={industry.id} className={`py-12 sm:py-16 lg:py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`order-2 lg:order-1 ${index % 2 === 1 ? 'lg:col-start-2 lg:order-2' : ''}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${industry.gradient} shadow-lg`}>
                    <industry.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1">
                    {industry.title.split(' ')[0]}
                  </Badge>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                  {industry.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-3 sm:mb-4">
                  {industry.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  {industry.description}
                </p>

                {/* Services - Mobile Carousel */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Key Services:</h3>
                  
                  <div className="block sm:hidden">
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-2">
                        {industry.services.map((service, idx) => (
                          <CarouselItem key={idx} className="pl-2 basis-full">
                            <div className="flex items-start gap-3 p-3 bg-background rounded-lg border">
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-tight">{service}</span>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>

                  <div className="hidden sm:block space-y-3">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm sm:text-base">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Key Achievements:</h3>
                  <div className="grid gap-2 sm:gap-3">
                    {industry.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg border-l-4 border-primary/20">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm sm:text-base">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`order-1 lg:order-2 ${index % 2 === 1 ? 'lg:col-start-1 lg:order-1' : ''}`}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-2xl transform rotate-1 sm:rotate-3 transition-transform group-hover:rotate-2`}></div>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Synergized Ecosystem */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Synergized Ecosystem
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Unlike standalone entities, SBG companies collaborate across sectors—cement to construction, trading to logistics—ensuring speed, control, and cost-efficiency.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Example Workflow:</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">Cement from Dhanusha</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">Supplied via Koili</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">Used by Maryada</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">Materials sourced by Matarani</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">Project managed by Con‑Tech</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-green-600/10">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Commitment to Sustainability
                </h2>
              </div>
              <div className="grid gap-4">
                {sustainabilityItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                  alt="Sustainability"
                  className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Measurable results that drive Nepal's progress
            </p>
          </div>
          
          {/* Mobile Carousel */}
          <div className="block sm:hidden mb-8">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2">
                {impactStats.map((stat, index) => (
                  <CarouselItem key={index} className="pl-2 basis-3/4">
                    <StatCard stat={stat} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {impactStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">Navigate Further</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/companies" className="flex items-center gap-2">
                  Our Companies <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/about" className="flex items-center gap-2">
                  About Us <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/careers" className="flex items-center gap-2">
                  Careers <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center gap-2">
                  Contact <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Stat Card Component
const StatCard = ({ stat }: { stat: any }) => (
  <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
    <CardContent className="p-4 sm:p-6">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
        {stat.value}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
        {stat.label}
      </div>
    </CardContent>
  </Card>
);

export default Industries;