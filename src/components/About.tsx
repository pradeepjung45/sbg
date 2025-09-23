import { Building2, Target, Users, Globe, Award, Leaf, Briefcase, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const timelineEvents = [
    { year: '1997', event: 'Group inception — Con‑Tech Construction launched, laying the foundation for our construction legacy.' },
    { year: '2002', events: [
      'Shyambaba Rice & Flour Mill established, providing premium grain-based products.',
      'Shangrila Distillery founded in Chitwan, pioneering craft spirits.'
    ]},
    { year: '2005', events: [
      'Matarani Enterprise begins supplying F&B to government, hospitality, and industrial clients.',
      'Koili Multipurpose starts multi-industry logistics services.',
      'Crystalline Developers launches modern building materials and eco-friendly developments.'
    ]},
    { year: '2014', event: 'Alto Plastic & Galvining Wire evolves into a leading manufacturer of industrial plastics and galvanized wire products.' },
    { year: '2015', event: 'Official incorporation of Shyambaba Rice & Flour Mill on December 4, marking a formal entry into agro-processing.' },
    { year: '2016', event: 'Purbanchal Construction Suppliers establishes ready-mix concrete and equipment operations in Morang.' },
    { year: '2018', event: 'Shyambaba Builders registered, specializing in local residential and commercial construction.' },
    { year: '2020', event: 'Maryada Construction launched, focusing on sustainable infrastructure like roads, bridges, and schools.' }
  ];

  const businessVerticals = [
    {
      title: 'Construction',
      icon: Building2,
      companies: [
        { name: 'Con‑Tech Construction', description: 'Industrial & commercial projects.' },
        { name: 'Maryada Construction', description: 'Roads, bridges, urban infrastructure.' },
        { name: 'Crystalline Developers', description: 'Sustainable real estate using modern materials.' }
      ]
    },
    {
      title: 'Manufacturing',
      icon: Building2,
      companies: [
        { name: 'Shyambaba Rice & Flour Mill', description: 'Agro-processing (rice & flour).' },
        { name: 'Shangrila Distillery', description: 'Craft spirits.' },
        { name: 'Alto Plastic & Galvining Wire', description: 'Industrial plastics & wire galvanization.' },
        { name: 'Janaki Cement & Dhanusha Cement', description: 'Cement production.' },
        { name: 'Purbanchal Construction Suppliers', description: 'Ready-mix concrete & equipment.' }
      ]
    },
    {
      title: 'Enterprise & Trading',
      icon: Briefcase,
      companies: [
        { name: 'Matarani Enterprise', description: 'Supplying F&B to sectors like hospitality and government.' },
        { name: 'Koili Multipurpose', description: 'Logistics across industries.' },
        { name: 'Shyambaba/Shyam Baba Enterprises', description: 'Import-export and global trading.' }
      ]
    }
  ];

  const leadership = [
    { name: 'Pramod Raj Adhikari', position: 'Chairman' },
    { name: 'Shyam Sunder Agrawal', position: 'Co‑Chairman' },
    { name: 'Prameshwor Raj Adhikari', position: 'Executive Director' },
    { name: 'Prajanna Raj Adhikari', position: 'Managing Director', education: 'MBA from Victoria University (Australia)' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a0a066c6-24cb-4168-8d15-e20ecf095e96.png" 
                alt="Shyam Baba Group Logo" 
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Shyam Baba Group
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              One of Nepal's premier diversified conglomerates. Founded in 1997, we have spent over 27+ years 
              driving growth, innovation, and sustainability across construction, manufacturing, logistics, and trading.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">Founded 1997</Badge>
              <Badge variant="secondary" className="px-4 py-2">27+ Years of Excellence</Badge>
              <Badge variant="secondary" className="px-4 py-2">Diversified Conglomerate</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Build a brighter, self-reliant Nepal through responsible innovation and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Deliver high-quality, sustainable, and value-driven solutions that uplift communities, 
                  foster economic growth, and enhance global competitiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Company Timeline</h2>
            <p className="text-xl text-muted-foreground">A clear roadmap of our milestones</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {timelineEvents.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-primary border-primary">{item.year}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {Array.isArray(item.events) ? (
                          <ul className="space-y-2">
                            {item.events.map((event, eventIndex) => (
                              <li key={eventIndex} className="text-muted-foreground leading-relaxed">
                                • {event}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground leading-relaxed">{item.event}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Business Verticals</h2>
            <p className="text-xl text-muted-foreground">Diversified operations across key sectors</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {businessVerticals.map((vertical, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <vertical.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{vertical.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {vertical.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-semibold text-foreground mb-1">{company.name}</h4>
                        <p className="text-sm text-muted-foreground">{company.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Reach */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Impact & Reach</h2>
            <p className="text-xl text-muted-foreground">Making a difference across Nepal</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Districts of Operation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">2,000+</h3>
                <p className="text-muted-foreground">Employees</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-muted-foreground">Direct Customers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">27+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-primary mb-4">Notable Achievements</h3>
                <ul className="text-muted-foreground space-y-2 max-w-2xl mx-auto">
                  <li>• Celebrated for sustainable infrastructure like solar-powered school buildings in Okhaldhunga via Maryada Construction</li>
                  <li>• Trusted partner of government projects and reputable institutions</li>
                  <li>• Leading contributor to Nepal's economic development and job creation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leadership</h2>
            <p className="text-xl text-muted-foreground">Guiding our vision with experience and expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  {leader.education && (
                    <p className="text-sm text-muted-foreground">{leader.education}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Commitment to Sustainability</h2>
            <p className="text-xl text-muted-foreground">Building a better future for Nepal</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Eco-conscious Building</h3>
                <p className="text-muted-foreground">
                  Eco-conscious building practices through Maryada and Crystalline Developers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Renewable Energy</h3>
                <p className="text-muted-foreground">
                  Emphasis on renewable energy integration, such as solar-powered facilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Community Support</h3>
                <p className="text-muted-foreground">
                  Support for local farming via Shyambaba Rice & Flour Mill and community-based sourcing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers & Collaboration */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Careers & Collaboration</h2>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-primary mb-4">Join Our Team</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A workplace with global aspirations and a national heart—opportunities in construction, 
                  manufacturing, logistics, and trade.
                </p>
                <p className="text-muted-foreground">
                  A partner of choice for government ventures, hospitality chains, infrastructure developers, 
                  and international traders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Let's Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Visit us at our headquarters</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Headquarters</h3>
                      <p className="text-muted-foreground">
                        Shyambaba Building, Pipalbot, Dillibazar-29<br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground">+977-1-4528118, 014528118</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground">info@sbgcompanies.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 10 AM - 5:00 PM<br />
                        Sat: ———— not open
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Google Maps */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">Find Us on Map</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.397817870321!2d85.32656017611365!3d27.705000925593858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196859244c5d%3A0x3cf5ce9a40eddfd8!2sShyambaba%20Group!5e0!3m2!1sen!2snp!4v1752479197084!5m2!1sen!2snp" 
                    width="100%" 
                    height="400" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;