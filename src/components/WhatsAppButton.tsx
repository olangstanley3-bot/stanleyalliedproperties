import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254746130617?text=Hello%2C%20I'm%20interested%20in%20a%20property%20on%20your%20website."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Stanley Allied Properties on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1EB954] text-primary-foreground px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline font-semibold text-sm">WhatsApp Us</span>
  </a>
);

export default WhatsAppButton;
