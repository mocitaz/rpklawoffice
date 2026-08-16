import Link from "next/link";
import { Logo } from "./logo";
import { navigation, siteConfig } from "@/data/site";
import { practiceAreas } from "@/data/practice-areas";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p className="footer-brand-desc">
              Pendampingan hukum yang dibangun di atas ketelitian, integritas, dan pemikiran strategis.
            </p>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Navigasi</h3>
            <div className="footer-links-list">
              {navigation.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Area Praktik</h3>
            <div className="footer-links-list">
              {practiceAreas.slice(0, 4).map((item) => (
                <Link key={item.slug} href={`/area-praktik/${item.slug}`} className="footer-link">
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-nav-col footer-contact-col">
            <h3 className="footer-col-title">Kontak</h3>
            <div className="footer-contact-items">
              <a href={`mailto:${siteConfig.email}`} className="footer-link">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="footer-link">
                {siteConfig.phone}
              </a>
              <p className="footer-address">
                {siteConfig.address.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {siteConfig.name}. Seluruh hak dilindungi.</p>
          <div className="footer-legal-links">
            <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
            <span className="footer-legal-dot" />
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        <p className="footer-disclaimer">
          Informasi pada website ini disediakan untuk tujuan informasi umum dan tidak dimaksudkan sebagai nasihat hukum formal.
        </p>
      </div>
    </footer>
  );
}
