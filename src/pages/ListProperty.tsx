import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { propertyTypes } from "@/data/properties";

const ListProperty = () => {
  const [form, setForm] = useState({
    name: "", phone: "", propertyType: "", location: "", price: "", description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.propertyType || !form.location.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const msg = `New Property Listing:\nName: ${form.name}\nPhone: ${form.phone}\nType: ${form.propertyType}\nLocation: ${form.location}\nPrice: ${form.price}\nDescription: ${form.description}`;
    window.open(`https://wa.me/254746130617?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Listing request sent! We'll contact you shortly.");
    setForm({ name: "", phone: "", propertyType: "", location: "", price: "", description: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="bg-primary section-padding pb-8">
          <div className="container-custom">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
              List Your <span className="text-accent">Property</span>
            </h1>
            <p className="text-primary-foreground/60">We only work directly with property owners — not agents</p>
          </div>
        </div>

        <div className="container-custom section-padding pt-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/20 mb-8">
              <Shield className="h-5 w-5 text-accent flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                We verify every listing before publishing. Your property will be showcased to thousands of genuine buyers and tenants.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Select value={form.propertyType} onValueChange={(v) => setForm({ ...form, propertyType: v })}>
                  <SelectTrigger><SelectValue placeholder="Property Type *" /></SelectTrigger>
                  <SelectContent>
                    {propertyTypes.filter((t) => t !== "All Types").map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input placeholder="Location *" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </div>
              <Input placeholder="Asking Price (KES)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
              <Textarea placeholder="Property description, features, etc." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={5} />
              <p className="text-xs text-muted-foreground">You can share photos via WhatsApp after submitting this form.</p>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
                Submit Listing
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ListProperty;
