import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import "./refinement.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://rpklawoffice.com"),
  title: { default: "RPK Law Office | Kantor Hukum & Konsultan Hukum", template: "%s | RPK Law Office" },
  description: siteConfig.description,
  openGraph: { title: "RPK Law Office", description: siteConfig.description, type: "website", locale: "id_ID", images: [siteConfig.images.hero] },
  twitter: { card: "summary_large_image", title: "RPK Law Office", description: siteConfig.description },
};

const schema = { "@context": "https://schema.org", "@type": "LegalService", name: siteConfig.name, description: siteConfig.description, email: siteConfig.email, telephone: siteConfig.phone, address: { "@type": "PostalAddress", streetAddress: siteConfig.address[0], addressLocality: "Bandung", addressRegion: "Jawa Barat", addressCountry: "ID" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" data-scroll-behavior="smooth"><body><a href="#main" className="skip-link">Lewati ke konten</a><Header /><main id="main">{children}</main><Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
