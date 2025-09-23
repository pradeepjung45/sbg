import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GroupOverview = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary mb-4">
              A Legacy of Growth and Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              From a single rice mill to a diversified conglomerate, Shyam Baba Group has been a cornerstone of Nepal's industrial and infrastructural development for over 25 years.
            </p>
            <p className="text-muted-foreground mb-8">
              Our journey is one of strategic expansion, with a focus on creating synergistic businesses that support each other and contribute to the nation's progress. We are committed to quality, sustainability, and building a better future for all Nepalis.
            </p>
            <Button asChild size="lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
          <div className="relative">
            <img 
              src="/src/assets/construction-bg.jpg" 
              alt="Group Overview" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupOverview;
