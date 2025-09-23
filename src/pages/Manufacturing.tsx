import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Factory, Wheat, Wine, Zap, Package, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getCompaniesByCategory } from '@/utils/companiesData';

const Manufacturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companies = getCompaniesByCategory('manufacturing');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Manufacturing Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Made in Nepal, built to last. We manufacture essential products that drive industries and daily life—from cement and food to spirits and industrial materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">1M+</span>
                <p className="text-sm text-muted-foreground">Tons Produced Annually</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">6</span>
                <p className="text-sm text-muted-foreground">Manufacturing Units</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold text-primary">ISO</span>
                <p className="text-sm text-muted-foreground">Certified Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Manufacturing Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six specialized manufacturing units producing essential materials and products for Nepal's industrial and consumer markets.
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
                      <Factory className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {company.overview}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Products:</h4>
                    <ul className="space-y-2">
                      {(company.products || company.services || []).slice(0, 4).map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {product}
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

      {/* Manufacturing Categories */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Manufacturing Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse manufacturing portfolio covers essential sectors of Nepal's economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Construction Materials</h3>
              <p className="text-muted-foreground">Cement and concrete products for infrastructure development.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Agro-Processing</h3>
              <p className="text-muted-foreground">Rice and flour milling for food security and nutrition.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Industrial Products</h3>
              <p className="text-muted-foreground">Plastics and galvanized wire for various applications.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Beverages</h3>
              <p className="text-muted-foreground">Premium spirits crafted with traditional expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Partner with Our Manufacturing Units</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for reliable suppliers or wholesale partnerships? Connect with our manufacturing companies for quality products and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/contact">Request Partnership</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">About Our Quality Standards</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;