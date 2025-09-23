import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const industries = [
    { name: "Construction", link: "/construction" },
    { name: "Manufacturing", link: "/manufacturing" },
    { name: "Enterprise & Trading", link: "/trading" }
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Companies", link: "/companies" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shyam Baba Group</h3>
                <p className="text-muted-foreground text-sm">Building Nepal's Future</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              A leading Nepalese business conglomerate driving sustainable growth across key sectors.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <Link to={industry.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">+977-1-4528118</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">info@sbgcompanies.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Dillibazar-29, Kathmandu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Shyam Baba Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;