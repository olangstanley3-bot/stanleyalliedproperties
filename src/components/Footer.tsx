import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Stanley <span className="text-accent">Allied</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Premium verified properties for sale and rent in Kenya. Direct from owners — no agents, no viewing fees.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <Link to="/listings?type=sale" className="block hover:text-accent transition-colors">Buy Property</Link>
            <Link to="/listings?type=rent" className="block hover:text-accent transition-colors">Rent Property</Link>
            <Link to="/airbnb" className="block hover:text-accent transition-colors">Airbnb Stays</Link>
            <Link to="/list-property" className="block hover:text-accent transition-colors">List Your Property</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4">Areas We Cover</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p>Kilimani • Westlands • Karen</p>
            <p>Lavington • Kileleshwa</p>
            <p>Parklands • Riverside</p>
            <p>Kitisuru • Loresho • Syokimau</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <a href="tel:+254746130617" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4 text-accent" /> +254 746 130 617
            </a>
            <a href="mailto:nairobitechs@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4 text-accent" /> nairobitechs@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-accent mt-0.5" />
              <span>Westlands & Kilimani, Nairobi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} Stanley Allied Properties. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
