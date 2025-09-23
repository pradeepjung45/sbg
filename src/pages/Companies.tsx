import { Building2, Factory, Package, Truck, MapPin, Users, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { companiesData, getCompaniesByCategory } from '@/utils/companiesData';
const Companies = () => {
  const sectors = [{
    id: 'construction',
    icon: Building2,
    title: 'Construction & Infrastructure',
    subtitle: 'Building the physical foundation of a better Nepal—from industrial complexes to national highways.',
    companies: getCompaniesByCategory('construction'),
    gradient: 'from-blue-600/20 to-cyan-600/20'
  }, {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Industrial Excellence',
    subtitle: 'Made in Nepal, built to last. We manufacture what drives industries—from cement to food and plastics.',
    companies: getCompaniesByCategory('manufacturing'),
    gradient: 'from-orange-600/20 to-red-600/20'
  }, {
    id: 'enterprise',
    icon: Package,
    title: 'Enterprise & Trading Solutions',
    subtitle: 'Bridging supply and demand—from essential commodities to government procurement.',
    companies: getCompaniesByCategory('trading'),
    gradient: 'from-green-600/20 to-emerald-600/20'
  }];
  const presenceStats = [{
    icon: MapPin,
    label: 'Districts across Nepal',
    value: '15+'
  }, {
    icon: Users,
    label: 'Employees',
    value: '2,000+'
  }, {
    icon: Shield,
    label: 'Trusted Partners',
    value: 'Government, Private Sector, NGOs'
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Our Companies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
              Powering Progress Across Nepal's Key Sectors
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              As a diversified conglomerate, Shyam Baba Group (SBG) operates across core sectors—Construction, Manufacturing, and Trading & Enterprise—contributing to Nepal's economic growth and national development.
            </p>
          </div>
        </div>
      </section>

      {/* Companies by Sector */}
      {sectors.map((sector, sectorIndex) => <section key={sector.id} className={`py-12 sm:py-16 lg:py-20 ${sectorIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Sector Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${sector.gradient} shadow-lg`}>
                  <sector.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1">
                  {sectorIndex + 1}. {sector.title.split(' ')[0]}
                </Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                {sector.title}
              </h2>
              {sector.subtitle && <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                  {sector.subtitle}
                </p>}
            </div>

            {/* Companies Carousel for Mobile, Grid for Desktop */}
            <div className="block sm:hidden">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {sector.companies.map((company, companyIndex) => <CarouselItem key={companyIndex} className="pl-2 md:pl-4 basis-4/5">
                      <CompanyCard company={company} />
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {sector.companies.map((company, companyIndex) => <CompanyCard key={companyIndex} company={company} />)}
            </div>
          </div>
        </section>)}

      {/* Our Presence */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Our Presence
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Nationwide impact across Nepal's key regions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {presenceStats.map((stat, index) => <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 sm:p-4 rounded-xl bg-primary/10 shadow-lg">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">Explore More</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/about" className="flex items-center gap-2">
                  About Us <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center gap-2">
                  Contact <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/careers" className="flex items-center gap-2">
                  Join Our Team <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

// Company Card Component
const CompanyCard = ({
  company
}: {
  company: any;
}) => <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
    <CardHeader className="pb-3">
      {/* Company Logo */}
      <div className="w-full max-h-full from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
        {company.logo ? <img src={company.logo} alt={`${company.name} logo`} className="w-full h-full object-contain rounded-lg" /> : <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">{company.categoryIcon}</span>
          </div>}
      </div>
      
      <div className="flex flex-col gap-2">
        <CardTitle className="text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {company.name}
        </CardTitle>
        <p className="text-muted-foreground text-xs sm:text-sm leading-tight line-clamp-3">
          {company.overview}
        </p>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <Button asChild className="w-full">
        <Link to={`/companies/${company.slug}`}>
          View Details
        </Link>
      </Button>
    </CardContent>
  </Card>;
export default Companies;