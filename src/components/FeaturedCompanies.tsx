import { useState } from 'react';
import { Building2, Factory, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getCompaniesByCategory } from '@/utils/companiesData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const FeaturedCompanies = () => {
  const [activeTab, setActiveTab] = useState('construction');

  const companies = {
    construction: getCompaniesByCategory('construction'),
    manufacturing: getCompaniesByCategory('manufacturing'),
    trading: getCompaniesByCategory('trading')
  };

  const tabs = [
    { id: 'construction', label: 'Construction', icon: Building2 },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'trading', label: 'Trading', icon: Briefcase }
  ];

  return (
    <section id="featured-companies" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Our Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse portfolio of companies leading their respective industries with innovation and a commitment to quality.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-full">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? 'primary' : 'ghost'}
                className="rounded-full"
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies[activeTab as keyof typeof companies].slice(0, 3).map((company) => (
            <Card key={company.id} className="flex flex-col">
              <CardHeader>
                <div className="relative h-40 rounded-md overflow-hidden mb-4">
                  <img src={company.heroImage || '/placeholder.svg'} alt={company.name} className="w-full h-full object-cover" />
                </div>
                <CardTitle>{company.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{company.overview}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/companies/${company.slug}`}>
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
