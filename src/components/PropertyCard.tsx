import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";

const PropertyCard = ({ property }: { property: Property }) => {
  const typeLabel = property.type === "sale" ? "For Sale" : property.type === "rent" ? "For Rent" : "Airbnb";
  const typeColor = property.type === "sale" ? "bg-accent text-accent-foreground" : property.type === "rent" ? "bg-primary text-primary-foreground" : "bg-gold-dark text-primary-foreground";

  return (
    <Link to={`/property/${property.id}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <Badge className={`absolute top-3 left-3 ${typeColor} border-0 font-semibold`}>
            {typeLabel}
          </Badge>
          {property.isFeatured && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0 font-semibold">
              Featured
            </Badge>
          )}
        </div>
        <div className="p-5">
          <p className="text-accent font-display text-xl font-bold mb-1">{property.priceLabel}</p>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{property.title}</h3>
          <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" /> {property.location}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {property.bedrooms === 0 ? "Studio" : property.bedrooms}</span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {property.bathrooms}</span>
            )}
            {property.parking > 0 && (
              <span className="flex items-center gap-1"><Car className="h-4 w-4" /> {property.parking}</span>
            )}
            <span className="ml-auto text-xs">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
