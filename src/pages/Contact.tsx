import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully!",
      description: "We usually respond within 1-2 business days."
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: MapPin,
    title: 'Address',
    details: ['Shyambaba Building, Pipalbot, Dillibazar-29', 'Kathmandu, Nepal']
  }, {
    icon: Phone,
    title: 'Phone',
    details: ['+977-1-4528118', '014528118']
  }, {
    icon: Mail,
    title: 'Email',
    details: ['info@sbgcompanies.com']
  }, {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 10 AM - 5:00 PM', 'Sat: ———— not open']
  }];
  const socialLinks = [{
    icon: Facebook,
    name: 'Facebook',
    href: '#',
    color: 'hover:text-blue-600'
  }, {
    icon: Linkedin,
    name: 'LinkedIn',
    href: '#',
    color: 'hover:text-blue-700'
  }, {
    icon: Instagram,
    name: 'Instagram',
    href: '#',
    color: 'hover:text-pink-600'
  }, {
    icon: Youtube,
    name: 'YouTube',
    href: '#',
    color: 'hover:text-red-600'
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
              We'd love to hear from you.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Whether you're looking to partner, work with us, or inquire about our services across construction, manufacturing, or trading — reach out. We're here to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Corporate Headquarters
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Shyam Baba Group (SBG Companies)
            </p>
          </div>
          
          {/* Mobile Carousel */}
          <div className="block sm:hidden mb-12">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2">
                {contactInfo.map((info, index) => <CarouselItem key={index} className="pl-2 basis-4/5">
                    <ContactCard info={info} />
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => <ContactCard key={index} info={info} />)}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Send Us a Message
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                    <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" className="h-10 sm:h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="h-10 sm:h-11" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" className="h-10 sm:h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">Company / Organization (Optional)</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter your company name" className="h-10 sm:h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Enter message subject" className="h-10 sm:h-11" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter your message" rows={4} className="resize-none min-h-[100px] sm:min-h-[120px]" required />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                
              </form>
            </div>

            {/* Map */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Find Us Here
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Visit our headquarters in Kathmandu, Nepal
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-xl bg-muted">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.397817870321!2d85.32656017611365!3d27.705000925593858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196859244c5d%3A0x3cf5ce9a40eddfd8!2sShyambaba%20Group!5e0!3m2!1sen!2snp!4v1752479197084!5m2!1sen!2snp" width="100%" height="450" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-64 sm:h-80 lg:h-96 xl:h-[450px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">
              Follow Us on Social Media
            </h2>
            
            {/* Mobile Grid */}
            <div className="grid grid-cols-2 gap-4 sm:hidden mb-6">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className={`flex items-center justify-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/70 transition-all duration-300 ${social.color} transform hover:scale-105`} aria-label={social.name}>
                  <social.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{social.name}</span>
                </a>)}
            </div>

            {/* Desktop Flex */}
            <div className="hidden sm:flex justify-center gap-4 sm:gap-6 mb-6">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className={`p-4 sm:p-5 rounded-full bg-muted hover:bg-muted/70 transition-all duration-300 ${social.color} transform hover:scale-110 shadow-lg hover:shadow-xl`} aria-label={social.name}>
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>)}
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Stay connected with us for the latest updates and news
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

// Contact Card Component
const ContactCard = ({
  info
}: {
  info: any;
}) => <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
    <CardHeader className="pb-3">
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="p-3 sm:p-4 rounded-xl bg-primary/10 shadow-lg">
          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>
      <CardTitle className="text-base sm:text-lg">{info.title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-1">
        {info.details.map((detail: string, idx: number) => <p key={idx} className="text-muted-foreground text-xs sm:text-sm leading-tight">
            {detail}
          </p>)}
      </div>
    </CardContent>
  </Card>;
export default Contact;