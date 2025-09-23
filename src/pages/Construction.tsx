import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Hammer, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getCompaniesByCategory } from '@/utils/companiesData';

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companies = getCompaniesByCategory('construction');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Construction & Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Building the physical foundation of a better Nepal through industrial complexes, infrastructure development, and sustainable construction solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">200+</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">15+</span>
                <p className="text-sm text-muted-foreground">Districts Covered</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">27+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Construction Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three specialized construction companies working together to build Nepal's infrastructure and commercial landscape.
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
                      <Building2 className="w-6 h-6 text-primary" />
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

      {/* Key Projects Highlight */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From solar-powered schools to earthquake-resilient infrastructure, we're building Nepal's future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Industrial Excellence</h3>
              <p className="text-muted-foreground">Steel plants, warehouses, and commercial complexes built to international standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Infrastructure Development</h3>
              <p className="text-muted-foreground">Roads, bridges, and public utilities connecting communities across Nepal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Development</h3>
              <p className="text-muted-foreground">Eco-friendly materials and solar-powered buildings for a greener future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with our construction companies for your next industrial, commercial, or infrastructure project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/contact">Get Project Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;