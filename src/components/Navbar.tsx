import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "AI Service", href: "/#ai-service" },
  { name: "Masking", href: "/#services" },
  { name: "Retouching", href: "/#services" },
  { name: "Clipping Path", href: "/#services" },
  { name: "Color Correction", href: "/#services" },
  { name: "Invisible Mannequin", href: "/#garment-services" },
  { name: "Flat Lay", href: "/#garment-services" },
  { name: "Model Photo Edit", href: "/#services" },
  { name: "Shadow Creation", href: "/#garment-services" },
  { name: "Color Match", href: "/#garment-services" },
  { name: "Adjustment", href: "/#other-services" },
  { name: "Manipulation", href: "/#other-services" },
  { name: "Restoration", href: "/#other-services" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
              <span className="text-white font-bold text-xl">GD</span>
            </div>
            <span className="text-xl font-bold text-gradient">GraphicsPro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showServices && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2 animate-fadeIn">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      onClick={() => setShowServices(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a
              href="#free-trial"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:opacity-90 transition-opacity glow-effect"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slideUp">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors w-full"
                onClick={() => setShowServices(!showServices)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showServices && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setShowServices(false);
                      }}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#why-us"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#pricing"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#free-trial"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Free Trial
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
