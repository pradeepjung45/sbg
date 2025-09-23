import { Building2, Factory, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const divisions = [
  {
    icon: Building2,
    title: "Construction",
    description: "Pioneering industrial, commercial, and infrastructure projects that form the backbone of Nepal's development.",
    link: "/construction"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Producing high-quality cement, steel, and other essential materials that build a stronger nation.",
    link: "/manufacturing"
  },
  {
    icon: Briefcase,
    title: "Trading & Enterprise",
    description: "Connecting global markets with local needs through strategic import-export and supply chain solutions.",
    link: "/trading"
  }
];

const DivisionsGrid = () => {
  return (
    <section id="divisions" className="py-20 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Our Core Divisions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Three synergistic divisions driving growth and innovation across Nepal's key economic sectors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((division) => (
            <Card key={division.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <division.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">{division.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{division.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link to={division.link}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
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

export default DivisionsGrid;
