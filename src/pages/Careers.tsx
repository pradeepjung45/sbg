import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase, Award, Mail } from "lucide-react";

const jobCategories = [
  {
    title: "Construction & Manufacturing",
    icon: "🛠️",
    jobs: [
      {
        id: 1,
        title: "Project Engineer",
        location: "Kathmandu (on-site)",
        type: "Full-time",
        experience: "5+ years",
        status: "open",
        description: "Lead construction projects—from planning through completion—including scheduling, resources, budgeting, quality control, and on-site safety.",
        requirements: "Bachelor's in Civil Engineering or related field; 5+ years experience; proficiency in project management tools.",
        category: "Construction"
      },
      {
        id: 2,
        title: "Production Supervisor",
        location: "Kathmandu (manufacturing facility)",
        type: "Full-time",
        experience: "5+ years",
        status: "open",
        description: "Oversee daily production operations across manufacturing units, ensuring efficiency, safety standards, and product quality.",
        requirements: "Bachelor's in Industrial or Manufacturing Engineering; 5+ years supervisory experience; strong leadership skills.",
        category: "Manufacturing"
      }
    ]
  },
  {
    title: "Shangrila Distillery",
    icon: "🥃",
    jobs: [
      {
        id: 3,
        title: "Sales & Distribution Manager",
        location: "Kathmandu & Chitwan",
        type: "Full-time",
        experience: "7+ years",
        status: "closed",
        description: "Build and scale sales & distribution channels for Shangrila Distillery; manage relationships with distributors, wholesalers, and retailers.",
        requirements: "7+ years in liquor industry; strong network; knowledge of licensing and compliance.",
        perks: "Competitive salary, performance incentives, and opportunity to shape a premium spirits launch.",
        category: "Sales"
      },
      {
        id: 4,
        title: "Distribution & Branding Manager",
        location: "Kathmandu & Chitwan",
        type: "Full-time",
        experience: "10+ years",
        status: "open",
        description: "Develop and execute distribution and branding strategies to establish Shangrila Distillery's market presence; market analysis; lead across cross-functional teams.",
        requirements: "10+ years liquor-industry experience; proven branding and distribution track record.",
        category: "Marketing"
      }
    ]
  },
  {
    title: "Corporate & Enterprise",
    icon: "💼",
    jobs: [
      {
        id: 5,
        title: "Chartered Accountant / Head Accountant",
        location: "Kathmandu",
        type: "Full-time",
        experience: "Mid-level",
        status: "open",
        description: "Manage financial reporting, audits, tax compliance, budgeting, forecasting, and strategic financial analysis across SBG Companies.",
        requirements: "Chartered Accountant (ICAN/ICAI); knowledge of NFRS, VAT, and tax processes.",
        category: "Finance"
      },
      {
        id: 6,
        title: "Import-Export Specialist",
        location: "Kathmandu",
        type: "Full-time",
        experience: "3+ years",
        status: "open",
        description: "Handle global trade operations—import/export coordination, customs compliance, vendor negotiations, and logistics coordination.",
        requirements: "Expertise in customs procedures and international shipment processes.",
        category: "Operations"
      },
      {
        id: 7,
        title: "Web Designer",
        location: "Kathmandu",
        type: "Full-time",
        experience: "2+ years",
        status: "open",
        description: "Design and enhance SBG's digital presence—web layouts, UI/UX, responsive design, and brand consistency.",
        requirements: "Strong skills in Figma/Sketch, HTML/CSS, and collaborative design ability.",
        category: "Design"
      },
      {
        id: 8,
        title: "Packaging Designer",
        location: "Kathmandu",
        type: "Full-time",
        experience: "3+ years",
        status: "open",
        description: "Develop innovative packaging concepts for group products—focusing on branding, materials, and creative design.",
        requirements: "Proficiency in Adobe Illustrator/Photoshop; experience with print and packaging workflows.",
        category: "Design"
      }
    ]
  }
];

const Careers = () => {
  const openPositions = jobCategories.reduce((acc, category) => 
    acc + category.jobs.filter(job => job.status === "open").length, 0
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Join Nepal's leading business conglomerate and shape the future across construction, manufacturing, and enterprise solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{openPositions} Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>2,000+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>27+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Why Join SBG */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Shyam Baba Group?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Growth & Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Be part of Nepal's industrial transformation with opportunities for professional development and career advancement.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work with passionate professionals in a supportive environment that values teamwork and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Diverse Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore careers across construction, manufacturing, trading, and enterprise solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Job Categories */}
          <div className="space-y-16">
            {jobCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.jobs.map((job) => (
                    <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                              {job.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant={job.status === "open" ? "default" : "secondary"} className="text-xs">
                                {job.status === "open" ? "🟢 Open" : "🔴 Closed"}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {job.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{job.type} • {job.experience} experience</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <CardDescription className="text-sm leading-relaxed">
                          {job.description}
                        </CardDescription>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                          <p className="text-sm text-muted-foreground">{job.requirements}</p>
                        </div>
                        
                        {job.perks && (
                          <div>
                            <h4 className="font-medium text-sm mb-2">Perks:</h4>
                            <p className="text-sm text-muted-foreground">{job.perks}</p>
                          </div>
                        )}
                        
                        <div className="pt-4">
                          <Button 
                            className="w-full" 
                            disabled={job.status === "closed"}
                            onClick={() => window.location.href = `mailto:info@sbgcompanies.com?subject=Application for ${job.title} Position&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to express my interest in the ${job.title} position at ${category.title}. Please find my application details below:%0D%0A%0D%0A[Please attach your resume and cover letter]%0D%0A%0D%0ABest regards,`}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            {job.status === "open" ? "Apply Now" : "Position Closed"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Don't See the Right Position?</CardTitle>
                <CardDescription className="text-base">
                  We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = `mailto:info@sbgcompanies.com?subject=General Application - Shyam Baba Group&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in exploring career opportunities with Shyam Baba Group. Please find my resume attached.%0D%0A%0D%0A[Please attach your resume]%0D%0A%0D%0ABest regards,`}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send General Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;