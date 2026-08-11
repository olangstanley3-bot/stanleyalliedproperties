import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface InquiryFormProps {
  propertyTitle?: string;
  buttonLabel?: string;
}

const InquiryForm = ({ propertyTitle, buttonLabel = "Send Inquiry" }: InquiryFormProps) => {
  const [form, setForm] = useState({ name: "", phone: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    const msg = `New Inquiry${propertyTitle ? ` for: ${propertyTitle}` : ""}\nName: ${form.name}\nPhone: ${form.phone}\nBudget: ${form.budget}\nMessage: ${form.message}`;
    const waLink = `https://wa.me/254746130617?text=${encodeURIComponent(msg)}`;
    window.open(waLink, "_blank");
    toast.success("Opening WhatsApp — tap send to deliver your inquiry.");
    setForm({ name: "", phone: "", budget: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-background"
      />
      <Input
        placeholder="Phone Number *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-background"
      />
      <Input
        placeholder="Your Budget (KES)"
        value={form.budget}
        onChange={(e) => setForm({ ...form, budget: e.target.value })}
        className="bg-background"
      />
      <Textarea
        placeholder="Message (optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-background"
        rows={3}
      />
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
        {buttonLabel}
      </Button>
    </form>
  );
};

export default InquiryForm;
