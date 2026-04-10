export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  type: "sale" | "rent" | "airbnb";
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  sqft: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury 3BR Apartment in Kilimani",
    location: "Kilimani, Nairobi",
    price: 85000,
    priceLabel: "KES 85,000/month",
    type: "rent",
    propertyType: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    description: "Stunning 3-bedroom apartment with modern finishes, open-plan kitchen, and a balcony overlooking the city. Located in the heart of Kilimani with easy access to shopping and restaurants.",
    features: ["24/7 Security", "Swimming Pool", "Gym", "Backup Generator", "Elevator"],
    isFeatured: true,
  },
  {
    id: "2",
    title: "4BR Villa in Karen",
    location: "Karen, Nairobi",
    price: 45000000,
    priceLabel: "KES 45,000,000",
    type: "sale",
    propertyType: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    description: "Exquisite 4-bedroom villa set on a half-acre in serene Karen. Features a private garden, staff quarters, and high-end finishes throughout.",
    features: ["Private Garden", "Staff Quarters", "CCTV", "Borehole", "Solar Panels"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "Modern Studio in Westlands",
    location: "Westlands, Nairobi",
    price: 5500,
    priceLabel: "KES 5,500/night",
    type: "airbnb",
    propertyType: "Apartment",
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    sqft: 550,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=800",
    ],
    description: "Chic studio apartment perfect for short stays. Fully furnished with fast WiFi, Netflix, and a fully equipped kitchen.",
    features: ["WiFi", "Netflix", "Fully Furnished", "Washer", "Kitchen"],
    isFeatured: true,
  },
  {
    id: "4",
    title: "5BR Townhouse in Lavington",
    location: "Lavington, Nairobi",
    price: 250000,
    priceLabel: "KES 250,000/month",
    type: "rent",
    propertyType: "Townhouse",
    bedrooms: 5,
    bathrooms: 4,
    parking: 2,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
    description: "Spacious 5-bedroom townhouse with modern finishes, private garden, and rooftop terrace in the prestigious Lavington area.",
    features: ["Garden", "Rooftop Terrace", "Staff Quarters", "Backup Generator", "CCTV"],
    isFeatured: true,
  },
  {
    id: "5",
    title: "1/4 Acre Plot in Syokimau",
    location: "Syokimau, Nairobi",
    price: 8500000,
    priceLabel: "KES 8,500,000",
    type: "sale",
    propertyType: "Land",
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    sqft: 10890,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    ],
    description: "Prime 1/4 acre plot in Syokimau with ready title deed. Close to the SGR station and major highways. Ideal for residential development.",
    features: ["Ready Title", "Near SGR", "Paved Access Road", "Water Available", "Electricity"],
    isFeatured: true,
  },
  {
    id: "6",
    title: "2BR Airbnb in Kileleshwa",
    location: "Kileleshwa, Nairobi",
    price: 8000,
    priceLabel: "KES 8,000/night",
    type: "airbnb",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
    ],
    description: "Beautiful 2-bedroom apartment with stunning views, modern décor, and all amenities for a comfortable stay.",
    features: ["WiFi", "Pool", "Gym", "Concierge", "Parking"],
  },
  {
    id: "7",
    title: "Commercial Space in CBD",
    location: "CBD, Nairobi",
    price: 150000,
    priceLabel: "KES 150,000/month",
    type: "rent",
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    parking: 5,
    sqft: 3000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    ],
    description: "Prime commercial office space in Nairobi CBD. Open plan layout ideal for a modern workspace with city views.",
    features: ["Elevator", "24/7 Security", "Fiber Internet", "Parking", "Generator"],
  },
  {
    id: "8",
    title: "3BR Bungalow in Parklands",
    location: "Parklands, Nairobi",
    price: 18000000,
    priceLabel: "KES 18,000,000",
    type: "sale",
    propertyType: "Bungalow",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    ],
    description: "Charming 3-bedroom bungalow on a quiet street in Parklands. Features a spacious garden, modern kitchen, and ample parking.",
    features: ["Garden", "Modern Kitchen", "Parking", "Security", "Quiet Neighborhood"],
  },
];

export const locations = [
  "All Locations",
  "Kilimani",
  "Westlands",
  "Kileleshwa",
  "Lavington",
  "Karen",
  "Parklands",
  "Riverside",
  "Kitisuru",
  "Loresho",
  "Syokimau",
  "South B",
  "South C",
  "CBD",
];

export const propertyTypes = [
  "All Types",
  "Land",
  "Apartment",
  "Villa",
  "Townhouse",
  "Bungalow",
  "Commercial",
];
