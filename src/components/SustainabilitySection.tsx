import { Leaf, Shield, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const initiatives = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Minimizing our ecological footprint through solar power, waste reduction, and water conservation.",
  },
  {
    icon: Shield,
    title: "Safety & Welfare",
    description: "Prioritizing the health and safety of our employees with comprehensive training and modern equipment.",
  },
  {
    icon: Heart,
    title: "Community Development",
    description: "Investing in local communities through education, healthcare, and infrastructure projects.",
  },
];

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-20 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Sustainability & Responsibility
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to building a sustainable future for Nepal through responsible business practices.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <Card key={initiative.title}>
              <CardHeader className="items-center text-center">
                <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4">
                  <initiative.icon className="w-8 h-8" />
                </div>
                <CardTitle>{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
