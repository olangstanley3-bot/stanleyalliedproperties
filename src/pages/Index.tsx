import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Shield, Users, Eye, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyCard from "@/components/PropertyCard";
import { properties, locations } from "@/data/properties";
import heroBg from "@/assets/hero-bg.jpg";

const areas = [
  "Kilimani", "Westlands", "Kileleshwa", "Lavington", "Karen",
  "Parklands", "Riverside", "Kitisuru", "Loresho", "Syokimau", "South B/C", "CBD",
];

const trustBadges = [
  { icon: Shield, title: "Verified Listings", desc: "Every property is verified before publishing" },
  { icon: Users, title: "No Middlemen", desc: "We work directly with property owners only" },
  { icon: Eye, title: "No Viewing Fees", desc: "View properties completely free of charge" },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("rent");
  const [searchLocation, setSearchLocation] = useState("");

  const featured = properties.filter((p) => p.isFeatured).slice(0, 6);

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("type", searchType);
    if (searchLocation && searchLocation !== "All Locations") params.set("location", searchLocation);
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Nairobi luxury real estate" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Verified Properties for Sale & Rent in <span className="text-accent">Kenya</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
              No Agents. No Viewing Fees. Direct from Owners.
            </p>

            {/* Search Bar */}
            <div className="bg-background/95 backdrop-blur rounded-lg p-4 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={searchType} onValueChange={setSearchType}>
                  <SelectTrigger className="sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Buy</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                    <SelectItem value="airbnb">Airbnb</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={searchLocation} onValueChange={setSearchLocation}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleSearch} className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/listings">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
                  Find Property <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link to="/list-property">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  List Your Property
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <badge.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">Featured <span className="text-accent">Listings</span></h2>
              <p className="text-muted-foreground">Hand-picked verified properties</p>
            </div>
            <Link to="/listings" className="hidden sm:flex items-center gap-1 text-accent hover:text-gold-dark font-semibold text-sm transition-colors">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link to="/listings">
              <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">View All Listings</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 text-center">
            Areas We <span className="text-accent">Cover</span>
          </h2>
          <p className="text-primary-foreground/60 text-center mb-10">Properties across Nairobi's most sought-after neighborhoods</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area}
                to={`/listings?location=${area}`}
                className="flex items-center gap-2 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 hover:border-accent/50 hover:bg-accent/10 transition-all group"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 group-hover:text-accent transition-colors font-medium text-sm">{area}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/5">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Own a Property? <span className="text-accent">List With Us</span></h2>
          <p className="text-muted-foreground mb-8">We work directly with property owners — no agents. Get your property verified and in front of thousands of buyers and tenants.</p>
          <Link to="/list-property">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-10">
              List Your Property Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
