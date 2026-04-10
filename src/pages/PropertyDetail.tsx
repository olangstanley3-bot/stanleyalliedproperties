import { useParams, Link } from "react-router-dom";
import { MapPin, Bed, Bath, Car, Ruler, ChevronLeft, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";
import { properties } from "@/data/properties";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Link to="/listings"><Button>Back to Listings</Button></Link>
        </div>
      </div>
    );
  }

  const typeLabel = property.type === "sale" ? "For Sale" : property.type === "rent" ? "For Rent" : "Airbnb";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/listings" className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors text-sm mb-6">
            <ChevronLeft className="h-4 w-4" /> Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Images + Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden aspect-[16/10]">
                <img src={property.images[activeImg]} alt={property.title} className="w-full h-full object-cover" />
              </div>
              {property.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 transition-colors ${i === activeImg ? "border-accent" : "border-transparent"}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-accent text-accent-foreground border-0">{typeLabel}</Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">{property.propertyType}</Badge>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">{property.title}</h1>
                <p className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" /> {property.location}
                </p>
                <p className="text-accent font-display text-3xl font-bold mb-6">{property.priceLabel}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {property.bedrooms >= 0 && (
                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                      <Bed className="h-5 w-5 text-accent" />
                      <div><p className="text-xs text-muted-foreground">Bedrooms</p><p className="font-semibold">{property.bedrooms === 0 ? "Studio" : property.bedrooms}</p></div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                      <Bath className="h-5 w-5 text-accent" />
                      <div><p className="text-xs text-muted-foreground">Bathrooms</p><p className="font-semibold">{property.bathrooms}</p></div>
                    </div>
                  )}
                  {property.parking > 0 && (
                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                      <Car className="h-5 w-5 text-accent" />
                      <div><p className="text-xs text-muted-foreground">Parking</p><p className="font-semibold">{property.parking}</p></div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <Ruler className="h-5 w-5 text-accent" />
                    <div><p className="text-xs text-muted-foreground">Area</p><p className="font-semibold">{property.sqft.toLocaleString()} sqft</p></div>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{property.description}</p>

                <h2 className="text-xl font-bold mb-3">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((f) => (
                    <Badge key={f} variant="outline" className="border-border text-foreground">{f}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Inquiry */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-1">Interested in this property?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fill out the form and we'll get back to you within 24 hours.</p>
                  <InquiryForm propertyTitle={property.title} buttonLabel="Request Viewing" />
                </div>
                <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <Shield className="h-5 w-5 text-accent" />
                  <p className="text-sm text-muted-foreground">This listing has been <span className="text-accent font-semibold">verified</span> by Stanley Allied Properties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertyDetail;
