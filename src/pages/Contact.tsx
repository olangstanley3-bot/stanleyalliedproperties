import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";

const Contact = () => (
  <div className="min-h-screen">
    <Seo title="Contact Stanley Allied Properties Nairobi" description="Talk to Stanley Allied Properties about any listing. Call, email or WhatsApp our Nairobi team for verified properties." path="/contact" />
    <Navbar />
    <div className="pt-20 lg:pt-24">
      <div className="bg-primary section-padding pb-8">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-primary-foreground/60">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container-custom section-padding pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <a href="tel:+254746130617" className="flex items-start gap-4 group">
                <div className="p-3 bg-accent/10 rounded-lg"><Phone className="h-5 w-5 text-accent" /></div>
                <div>
                  <p className="font-semibold group-hover:text-accent transition-colors">Phone</p>
                  <p className="text-muted-foreground">+254 746 130 617</p>
                </div>
              </a>
              <a href="mailto:stanleyalliedproperties@gmail.com" className="flex items-start gap-4 group">
                <div className="p-3 bg-accent/10 rounded-lg"><Mail className="h-5 w-5 text-accent" /></div>
                <div>
                  <p className="font-semibold group-hover:text-accent transition-colors">Email</p>
                  <p className="text-muted-foreground">stanleyalliedproperties@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg"><MapPin className="h-5 w-5 text-accent" /></div>
                <div>
                  <p className="font-semibold">Offices</p>
                  <p className="text-muted-foreground">Westlands, Nairobi</p>
                  <p className="text-muted-foreground">Kilimani, Nairobi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg"><Clock className="h-5 w-5 text-accent" /></div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-muted-foreground">Mon – Sat: 8:00 AM – 6:00 PM</p>
                  <p className="text-muted-foreground">Sun: By appointment only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 24 hours.</p>
            <InquiryForm buttonLabel="Send Message" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Contact;
