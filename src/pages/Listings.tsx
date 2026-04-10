import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyCard from "@/components/PropertyCard";
import { properties, locations, propertyTypes } from "@/data/properties";

const bedroomOptions = ["Any", "Studio", "1", "2", "3", "4", "5", "6+"];

const Listings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") || "all");
  const [location, setLocation] = useState(searchParams.get("location") || "All Locations");
  const [propertyType, setPropertyType] = useState("All Types");
  const [bedrooms, setBedrooms] = useState("Any");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== "all" && p.type !== type) return false;
      if (location !== "All Locations" && !p.location.includes(location)) return false;
      if (propertyType !== "All Types" && p.propertyType !== propertyType) return false;
      if (bedrooms !== "Any") {
        if (bedrooms === "Studio" && p.bedrooms !== 0) return false;
        if (bedrooms === "6+" && p.bedrooms < 6) return false;
        if (bedrooms !== "Studio" && bedrooms !== "6+" && p.bedrooms !== parseInt(bedrooms)) return false;
      }
      return true;
    });
  }, [type, location, propertyType, bedrooms]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (key === "type") { setType(value); params.set("type", value); }
    if (key === "location") { setLocation(value); if (value !== "All Locations") params.set("location", value); else params.delete("location"); }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="bg-primary section-padding pb-8">
          <div className="container-custom">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
              Browse <span className="text-accent">Properties</span>
            </h1>
            <p className="text-primary-foreground/60 mb-8">Verified listings direct from owners</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Select value={type} onValueChange={(v) => updateFilter("type", v)}>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="sale">Buy</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                  <SelectItem value="airbnb">Airbnb</SelectItem>
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={(v) => updateFilter("location", v)}>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  {bedroomOptions.map((b) => <SelectItem key={b} value={b}>{b === "Any" ? "Any Bedrooms" : b === "Studio" ? "Studio" : `${b} Bed`}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="container-custom section-padding pt-8">
          <p className="text-muted-foreground mb-6">{filtered.length} {filtered.length === 1 ? "property" : "properties"} found</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl font-semibold mb-2">No properties found</p>
              <p className="text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Listings;
