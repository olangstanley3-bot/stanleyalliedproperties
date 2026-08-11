import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const categories = [
  { label: "Studio", beds: 0 },
  { label: "1 Bedroom", beds: 1 },
  { label: "2 Bedrooms", beds: 2 },
  { label: "3 Bedrooms", beds: 3 },
  { label: "4+ Bedrooms", beds: 4 },
];

const Airbnb = () => {
  const airbnbListings = properties.filter((p) => p.type === "airbnb");

  return (
    <div className="min-h-screen">
      <Seo title="Airbnb & Short-Stay Rentals in Nairobi" description="Verified furnished short-stay and Airbnb apartments in Nairobi. Book directly through Stanley Allied Properties." path="/airbnb" />
    <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="bg-primary section-padding pb-8">
          <div className="container-custom">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
              Short-Term <span className="text-accent">Stays</span>
            </h1>
            <p className="text-primary-foreground/60">Fully furnished apartments for Airbnb & short stays in Nairobi</p>
          </div>
        </div>

        <div className="container-custom section-padding pt-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => {
              const count = airbnbListings.filter((p) =>
                cat.beds >= 4 ? p.bedrooms >= 4 : p.bedrooms === cat.beds
              ).length;
              return (
                <button
                  key={cat.label}
                  className="px-4 py-2 rounded-full border border-border hover:border-accent text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {airbnbListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {airbnbListings.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl font-semibold mb-2">No Airbnb listings available</p>
              <p className="text-muted-foreground">Check back soon for new short-term stays</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Airbnb;
