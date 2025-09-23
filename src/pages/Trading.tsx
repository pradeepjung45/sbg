import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truck, Globe, Package, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getCompaniesByCategory } from '@/utils/companiesData';

const Trading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companies = getCompaniesByCategory('trading');

  const sectors = [
    {
      title: "Government Sector",
      description: "Trusted supplier for government tenders and institutional requirements",
      icon: Package
    },
    {
      title: "Hospitality Industry",
      description: "Comprehensive F&B supply for hotels, restaurants, and tourism sector",
      icon: ShoppingCart
    },
    {
      title: "Healthcare Institutions",
      description: "Reliable supply chain for hospitals and medical facilities",
      icon: Package
    },
    {
      title: "Industrial Clients",
      description: "Bulk supply and logistics for manufacturing and construction industries",
      icon: Truck
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trading & Enterprise Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bridging global markets to local needs through strategic import-export, institutional procurement, and comprehensive logistics services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">27+</span>
                <p className="text-sm text-muted-foreground">Years Trading Experience</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">15+</span>
                <p className="text-sm text-muted-foreground">Districts Coverage</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">1000+</span>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Trading Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three specialized companies providing comprehensive trading, logistics, and supply chain solutions across multiple sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-10 h-10 object-contain rounded"
                      />
                    ) : (
                      <Package className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {company.overview}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {(company.services || []).slice(0, 4).map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/companies/${company.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sectors We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our trading and enterprise companies serve diverse sectors across Nepal's economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{sector.title}</h3>
                <p className="text-muted-foreground">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Trading Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive trading and logistics solutions that connect Nepal with global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Network</h3>
              <p className="text-muted-foreground">Deep network of suppliers across Asia with decades of international trading experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Procurement Expertise</h3>
              <p className="text-muted-foreground">Efficient compliance and delivery pipeline for government and institutional procurement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Logistics Excellence</h3>
              <p className="text-muted-foreground">Regional fleet and optimized warehousing for nationwide delivery and distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need procurement services, import-export solutions, or logistics support, our trading companies are ready to serve your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/contact">Start Partnership</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trading;