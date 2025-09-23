import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Building2, ChevronDown, Factory, Menu, TrendingUp, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isHomePage 
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md border-b' : 'bg-transparent'}`
    : 'sticky top-0 left-0 right-0 z-50 bg-white shadow-md border-b';
    
  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-foreground';

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a0a066c6-24cb-4168-8d15-e20ecf095e96.png" 
              alt="Shyam Baba Group Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className={`text-xl font-bold ${textColor}`}>
              Shyam Baba Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors hover:text-primary ${textColor}`}>Home</Link>
            <Link to="/about" className={`font-medium transition-colors hover:text-primary ${textColor}`}>About</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`font-medium transition-colors hover:text-primary flex items-center gap-1 ${textColor}`}>
                Industries <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/construction" className="flex items-center gap-2 p-2">
                    <Building2 size={16} className="text-primary" />
                    Construction
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/manufacturing" className="flex items-center gap-2 p-2">
                    <Factory size={16} className="text-primary" />
                    Manufacturing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/trading" className="flex items-center gap-2 p-2">
                    <TrendingUp size={16} className="text-primary" />
                    Trading
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/companies" className={`font-medium transition-colors hover:text-primary ${textColor}`}>Companies</Link>
            <Link to="/careers" className={`font-medium transition-colors hover:text-primary ${textColor}`}>Careers</Link>
            
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex lg:hidden items-center">
            <button
              className={`p-2 rounded-md ${textColor}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t">
            <div className="py-4 space-y-2 px-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-foreground rounded-md hover:bg-muted">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-foreground rounded-md hover:bg-muted">About</Link>
              <div className="px-4 py-2 font-semibold text-muted-foreground text-sm">Industries</div>
              <Link to="/construction" onClick={() => setIsOpen(false)} className="block pl-8 pr-4 py-2 text-foreground rounded-md hover:bg-muted">Construction</Link>
              <Link to="/manufacturing" onClick={() => setIsOpen(false)} className="block pl-8 pr-4 py-2 text-foreground rounded-md hover:bg-muted">Manufacturing</Link>
              <Link to="/trading" onClick={() => setIsOpen(false)} className="block pl-8 pr-4 py-2 text-foreground rounded-md hover:bg-muted">Trading</Link>
              <Link to="/companies" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-foreground rounded-md hover:bg-muted">Companies</Link>
              <Link to="/careers" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-foreground rounded-md hover:bg-muted">Careers</Link>
              <div className="px-4 pt-4">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
