import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Buy", path: "/listings?type=sale" },
  { label: "Rent", path: "/listings?type=rent" },
  { label: "Airbnb", path: "/airbnb" },
  { label: "List Property", path: "/list-property" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-accent/20">
      <div className="container-custom flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl lg:text-2xl font-bold text-primary-foreground">
            Stanley <span className="text-accent">Allied</span> Properties
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+254746130617" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
            <Phone className="h-4 w-4" />
            +254 746 130 617
          </a>
          <Link to="/list-property">
            <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
              List Property
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-accent/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+254746130617" className="flex items-center gap-2 text-accent py-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              +254 746 130 617
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
