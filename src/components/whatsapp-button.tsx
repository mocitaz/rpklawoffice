import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return <a className="whatsapp" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Hubungi RAF Law Office melalui WhatsApp"><MessageCircle size={20} /><span>WhatsApp</span></a>;
}
