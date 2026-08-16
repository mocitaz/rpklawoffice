import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "./ui";
import { siteConfig } from "@/data/site";

export function ConsultationCTA() {
  return (
    <section className="consultation-simple">
      <Container>
        <div className="consultation-simple-box">
          <div className="consultation-simple-grid">
            <div className="simple-heading">
              <span className="simple-kicker">Konsultasi Hukum</span>
              <h2 className="simple-title">
                Membutuhkan <em>Pendampingan Hukum?</em>
              </h2>
            </div>

            <div className="simple-detail">
              <p className="simple-lead">
                Diskusikan konteks dan kebutuhan hukum Anda bersama RPK Law Office. Kami membantu memetakan langkah awal yang relevan, terukur, dan berorientasi pada kepastian.
              </p>

              <div className="simple-actions">
                <Link href="/kontak" className="simple-btn-primary">
                  <span>Jadwalkan Konsultasi</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="simple-btn-secondary"
                >
                  <MessageSquare size={14} />
                  <span>Chat WhatsApp</span>
                </Link>
              </div>

              <div className="simple-contact-bar">
                <span>{siteConfig.email}</span>
                <span className="simple-dot" />
                <span>{siteConfig.phone}</span>
                <span className="simple-dot" />
                <span>Virtual Office Bandung</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
