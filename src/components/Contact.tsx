import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+977-1-4528118", "014528118"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@sbgcompanies.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Shyambaba Building, Pipalbot, Dillibazar-29", "Kathmandu, Nepal"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                  <div className="text-muted-foreground">
                    {info.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Your message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
