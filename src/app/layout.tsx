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
  title: {
    default: "RPK Law Firm | Kantor Hukum & Pengacara Bandung",
    template: "%s | RPK Law Firm Bandung",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "RPK Law Firm" }],
  creator: "RPK Law Firm",
  publisher: "RPK Law Firm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rpklawoffice.com",
  },
  openGraph: {
    title: "RPK Law Firm | Kantor Pengacara & Konsultan Hukum Bandung",
    description: siteConfig.description,
    url: "https://rpklawoffice.com",
    siteName: "RPK Law Firm",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/about/monument.jpg",
        width: 1200,
        height: 630,
        alt: "RPK Law Firm - Kantor Pengacara & Konsultan Hukum Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPK Law Firm | Kantor Pengacara & Konsultan Hukum Bandung",
    description: siteConfig.description,
    images: ["/images/about/monument.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney", "ProfessionalService"],
  "@id": "https://rpklawoffice.com/#organization",
  name: "RPK Law Firm",
  alternateName: ["Roni, Putra & Kusumah Law Firm", "Kantor Pengacara Bandung RPK", "RPK Law Office", "RPK Lawyer Bandung"],
  legalName: "Roni, Putra & Kusumah Law Firm",
  url: "https://rpklawoffice.com",
  logo: "https://rpklawoffice.com/images/brand/rpk-logo-light.png",
  image: "https://rpklawoffice.com/images/about/monument.jpg",
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bandung",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40115",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.917464,
    longitude: 107.619123,
  },
  areaServed: [
    { "@type": "City", name: "Bandung" },
    { "@type": "AdministrativeArea", name: "Jawa Barat" },
    { "@type": "Country", name: "Indonesia" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Hukum & Advokasi RPK Law Firm",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hukum Korporasi & Komersial Bandung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Penyelesaian Sengketa & Mediasi Bandung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigasi Perdata Pengadilan Negeri & Tinggi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hukum Properti & Real Estat Bandung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hukum Ketenagakerjaan & Hubungan Industrial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Penyusunan & Legal Review Kontrak Bisnis" } },
    ],
  },
  founder: [
    {
      "@type": "Person",
      name: "Muhamad Fajar Roni, S.H.",
      jobTitle: "Managing Partner",
      alumniOf: "Fakultas Hukum",
    },
    {
      "@type": "Person",
      name: "M. Anggara Putra, S.H., M.H.",
      jobTitle: "Partner",
      alumniOf: "Fakultas Hukum",
    },
    {
      "@type": "Person",
      name: "Reza Evaldo Kusumah, S.H.",
      jobTitle: "Partner",
      alumniOf: "Fakultas Hukum",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" data-scroll-behavior="smooth"><body><a href="#main" className="skip-link">Lewati ke konten</a><Header /><main id="main">{children}</main><Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
