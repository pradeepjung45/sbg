import { Building, Factory, Package, Truck, Wrench, Wine, Wheat } from 'lucide-react';

const Companies = () => {
  const companyCategories = [
    {
      category: "Construction",
      color: "from-primary/10 to-primary/5",
      companies: [
        {
          name: "Con‑Tech Construction",
          icon: Building,
          description: "Specialized in industrial and commercial building projects with modern construction techniques."
        },
        {
          name: "Maryada Construction",
          icon: Wrench,
          description: "Expert in infrastructure development including roads, bridges, and urban infrastructure projects."
        },
        {
          name: "Crystalline Developers",
          icon: Package,
          description: "Innovative developers of modern construction materials and building solutions."
        }
      ]
    },
    {
      category: "Manufacturing",
      color: "from-accent/10 to-accent/5",
      companies: [
        {
          name: "Janaki Cement",
          icon: Factory,
          description: "Premium cement manufacturing with advanced production facilities and quality assurance."
        },
        {
          name: "Dhanusha Cement",
          icon: Factory,
          description: "High-quality cement production serving construction and infrastructure projects nationwide."
        },
        {
          name: "Alto Plastic & Galvining Wire",
          icon: Package,
          description: "Industrial plastics manufacturing and wire galvanization services for various applications."
        },
        {
          name: "Shyambaba Rice & Flour Mill",
          icon: Wheat,
          description: "Modern rice and flour milling operations providing essential food products."
        },
        {
          name: "Shangrila Distillery",
          icon: Wine,
          description: "Premium spirits production with traditional craftsmanship and modern distillation techniques."
        }
      ]
    },
    {
      category: "Enterprise & Trading",
      color: "from-coral/10 to-coral/5",
      companies: [
        {
          name: "Matarani Enterprise",
          icon: Package,
          description: "Comprehensive food and beverage supply solutions for government, hospitality, and industrial sectors."
        },
        {
          name: "Koili Multipurpose",
          icon: Truck,
          description: "Efficient logistics services and supply chain management across multiple sectors."
        },
        {
          name: "Shyambaba Enterprises",
          icon: Truck,
          description: "Import-export operations and global trading services connecting Nepal with international markets."
        }
      ]
    }
  ];

  return (
    <section id="companies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <span className="text-accent font-medium">Our Companies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Diverse Portfolio of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our family of companies represents decades of expertise and innovation across 
            multiple sectors, each contributing to Nepal's industrial growth and development.
          </p>
        </div>

        {/* Companies by Category */}
        <div className="space-y-16">
          {companyCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
              </div>

              {/* Companies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.companies.map((company, index) => (
                  <div 
                    key={index} 
                    className={`card-elegant bg-gradient-to-br ${category.color} hover:shadow-elegant group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <company.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                          {company.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {company.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Industry Sectors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">11</div>
              <div className="text-muted-foreground">Active Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Employees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;