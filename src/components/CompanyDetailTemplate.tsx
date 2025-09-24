import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Building, Users, Award, CheckCircle, Calendar, Image as ImageIcon, ExternalLink, Newspaper, X, ZoomIn, Download } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Company } from "@/utils/companiesData";
interface CompanyDetailTemplateProps {
  company: Company;
}
const CompanyDetailTemplate = ({
  company
}: CompanyDetailTemplateProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!company.gallery || company.gallery.length === 0) return;
    
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % company.gallery.length
      : (currentImageIndex - 1 + company.gallery.length) % company.gallery.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(company.gallery[newIndex]);
  };

  const downloadImage = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage;
      link.download = `shyambaba-gallery-${currentImageIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-background text-foreground pt-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{company.categoryIcon}</span>
                <Badge variant="outline" className="text-sm">
                  {company.industry}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                {company.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
                {company.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => window.location.href = `mailto:${company.contact.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline">
                  <Building className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Company Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border">
                {company.heroImage ? <img src={company.heroImage} alt={`${company.name} operations`} className="w-full h-full object-cover" /> : <div className="aspect-square bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Building className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">{company.name}</p>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services/Products Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Services or Products Cards */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Building className="h-8 w-8 text-primary" />
                {company.detailedServices ? 'Our Services' : company.detailedProducts ? 'Our Products' : 'Our Products'}
              </h2>
              
              {company.detailedServices ? <div className="grid md:grid-cols-2 gap-6">
                  {company.detailedServices.map((service, index) => <Card key={index} className="overflow-hidden transition-all duration-300 border hover:shadow-lg">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        {service.image ? <img src={service.image} alt={service.title} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                              <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                              <div className="text-sm">Service Image</div>
                            </div>
                          </div>}
                      </div>
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>)}
                </div> : company.detailedProducts ? <div className="grid md:grid-cols-2 gap-6">
                  {company.detailedProducts.map((product, index) => <Card key={index} className="overflow-hidden transition-all duration-300 border hover:shadow-lg">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        {product.image ? <img src={product.image} alt={product.title} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                              <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                              <div className="text-sm">Product Image</div>
                            </div>
                          </div>}
                      </div>
                      <CardHeader>
                        <CardTitle>{product.title}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                    </Card>)}
                </div> : <div className="grid md:grid-cols-2 gap-4">
                  {(company.services || company.products || []).map((item, index) => <Card key={index} className="overflow-hidden border">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item}</CardTitle>
                        <CardDescription>Description for {item}</CardDescription>
                      </CardHeader>
                    </Card>)}
                </div>}
            </div>

            {/* Contact Information */}
            <Card className="border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <a href={`mailto:${company.contact.email}`} className="text-sm text-primary hover:underline">
                      {company.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <div className="text-sm font-medium">Locations</div>
                    <div className="text-sm text-muted-foreground">
                      {company.contact.locations.join(', ')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Section */}
          {company.projects && company.projects.length > 0 && <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Key Projects</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {company.projects.map((project, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          {project.image ? <img src={project.image} alt={project.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center text-muted-foreground">
                                <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                                <div className="text-sm">Project Image</div>
                              </div>
                            </div>}
                        </div>
                        <CardHeader>
                          <CardTitle>{project.name}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {project.completedYear}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>}

          {/* Clients Section */}
          {company.clients && company.clients.length > 0 && <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Industries Served</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {company.clients.map((client, index) => <Card key={index} className="text-center p-6 border hover:shadow-lg transition-shadow">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium">{client}</h3>
                  </Card>)}
              </div>
            </div>}

          {/* Strengths Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Strengths</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.strengths.map((strength, index) => <Card key={index} className="p-6 border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">{strength}</h3>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Project Sections */}
          {company.projectSections && company.projectSections.length > 0 && company.projectSections.map((section, sectionIndex) => <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{section.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.projects.map((project, projectIndex) => <Card key={projectIndex} className="overflow-hidden border hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                            <div className="text-sm">Project Image</div>
                          </div>
                        </div>}
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>)}
              </div>
            </div>)}

          {/* Certifications Section */}
          {company.certifications && company.certifications.length > 0 && <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Certifications & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {company.certifications.map((cert, index) => <Card key={index} className="p-6 border-l-4 border-l-primary bg-muted/40">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <h3 className="font-medium">{cert}</h3>
                    </div>
                  </Card>)}
              </div>
            </div>}

          {/* Articles Section */}
          {company.articles && company.articles.length > 0 && <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Newspaper className="h-8 w-8 text-primary" />
                Articles & News
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {company.articles.map((article, index) => <Card key={index} className="overflow-hidden border hover:shadow-lg transition-all duration-300 flex flex-col">
                    <CardHeader className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.source}
                        </Badge>
                        {article.date && <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </div>}
                      </div>
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      <CardDescription className="text-sm">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open(article.url, '_blank')}
                        className="w-full"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>)}
              </div>
            </div>}

          {/* Photo Gallery Section */}
          {company.gallery && company.gallery.length > 0 && <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Photo Gallery
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore our state-of-the-art facilities and premium products
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {company.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-card border"
                    onClick={() => openImageModal(image, index)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-sm font-medium">View Image</div>
                        <div className="text-xs opacity-80">{index + 1} of {company.gallery.length}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Click on any image to view in full size
                </p>
              </div>
            </div>}

          {/* CTA Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-muted/40 border">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Work With Us?</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Contact our team to discuss your project requirements and how we can help bring your vision to life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" onClick={() => window.location.href = `mailto:${company.contact.email}?subject=Inquiry about ${company.name} Services&body=Dear ${company.name} Team,%0D%0A%0D%0AI am interested in learning more about your services. Please contact me to discuss my requirements.%0D%0A%0D%0ABest regards,`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeImageModal}>
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Download Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                downloadImage();
              }}
              className="absolute right-4 top-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Download image"
            >
              <Download className="h-5 w-5" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain max-h-[80vh] rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {company.gallery?.length || 0}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>;
};
export default CompanyDetailTemplate;