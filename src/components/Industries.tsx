import { Building2, Factory, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import constructionBg from '@/assets/construction-bg.jpg';
import manufacturingBg from '@/assets/manufacturing-bg.jpg';
import tradingBg from '@/assets/trading-bg.jpg';
import { getCompaniesByCategory } from '@/utils/companiesData';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Construction",
      description: "Leading infrastructure development with modern construction solutions, from commercial buildings to major infrastructure projects.",
      image: constructionBg,
      companies: getCompaniesByCategory('construction'),
      specialties: ["Industrial & Commercial Projects", "Infrastructure Development", "Modern Construction Materials"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Comprehensive manufacturing operations producing essential materials and consumer goods for domestic and regional markets.",
      image: manufacturingBg,
      companies: getCompaniesByCategory('manufacturing'),
      specialties: ["Cement Production", "Industrial Materials", "Food Processing", "Premium Spirits"]
    },
    {
      icon: Truck,
      title: "Enterprise & Trading",
      description: "Strategic trading and logistics solutions connecting Nepal with regional and global markets through efficient supply chains.",
      image: tradingBg,
      companies: getCompaniesByCategory('trading'),
      specialties: ["Import-Export Trading", "Logistics Services", "Supply Chain Management"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium">Our Industries</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Diversified Excellence Across Sectors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our strategic presence across three core industries enables us to create synergies, 
            deliver integrated solutions, and drive comprehensive growth in Nepal's economy.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="space-y-8">
          {industries.map((industry, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">{industry.title}</h3>
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed">{industry.description}</p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Specialties:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {industry.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                   {/* Companies */}
                   <div className="mb-6">
                     <h4 className="font-semibold text-primary mb-3">Our Companies:</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {industry.companies.map((company, idx) => (
                         <div key={idx} className="flex items-center space-x-3 bg-accent/10 p-3 rounded-lg">
                           {company.logo && (
                             <img 
                               src={company.logo} 
                               alt={`${company.name} logo`}
                               className="w-8 h-8 object-contain rounded"
                             />
                           )}
                           <span className="text-accent text-sm font-medium">{company.name}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                  
                  <Button className="btn-coral">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-xl shadow-elegant group">
                  <img 
                    src={industry.image} 
                    alt={`${industry.title} Industry`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-elegant bg-gradient-to-r from-primary/5 to-accent/5 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Interested in Partnership Opportunities?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore how we can collaborate across our diverse industry portfolio to create mutual value and drive growth.
            </p>
            <Button className="btn-hero">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;