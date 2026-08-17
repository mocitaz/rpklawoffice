import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Pengacara Bandung",
  description:
    "Jadwalkan konsultasi hukum profesional bersama advokat partner RPK Law Firm di Bandung. Layanan tatap muka dan telekonferensi aman.",
  keywords: [
    "konsultasi pengacara bandung",
    "hubungi lawyer bandung",
    "kantor advokat bandung",
    "konsultasi hukum bandung",
    "jadwalkan konsultasi hukum",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="contact-editorial-header">
        <div className="contact-hero-media" aria-hidden="true">
          <Image
            src="/images/office/boardroom.png"
            alt=""
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="contact-hero-overlay" aria-hidden="true" />

        <Container className="contact-hero-shell">
          <div className="contact-hero-content">
            <span className="contact-kicker-tag">KONSULTASI &amp; KORESPONDENSI FIRMA</span>
            <h1 className="contact-main-title">
              Mulai Komunikasi yang <em>Jelas &amp; Terarah.</em>
            </h1>
            <p className="contact-lead-text">
              Pintu masuk resmi untuk mendiskusikan persoalan hukum, mitigasi risiko bisnis, atau penyelesaian sengketa bersama tim advokat RPK Law Firm.
            </p>
          </div>

          {/* 3 Quick Direct Channels Slabs */}
          <div className="direct-channels-grid">
            {/* Slab 1: WhatsApp */}
            <div className="channel-slab highlight">
              <div className="slab-top">
                <div className="slab-icon-box whatsapp">
                  <MessageSquare size={18} />
                </div>
                <span className="slab-status-badge">
                  <span className="live-pulse-dot" />
                  <span>Respon Cepat</span>
                </span>
              </div>
              <h3 className="slab-title">Chat WhatsApp Langsung</h3>
              <p className="slab-desc">Konsultasi awal cepat dan koordinasi jadwal pertemuan mendesak.</p>
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="slab-action-btn whatsapp-btn"
              >
                <span>Buka WhatsApp</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Slab 2: Email */}
            <div className="channel-slab">
              <div className="slab-top">
                <div className="slab-icon-box">
                  <Mail size={18} />
                </div>
                <span className="slab-tag">Korespondensi Formal</span>
              </div>
              <h3 className="slab-title">Email Kantor</h3>
              <p className="slab-desc">Pengiriman dokumen resmi, legal brief, dan penawaran kerja sama.</p>
              <a href={`mailto:${siteConfig.email}`} className="slab-action-btn default-btn">
                <span>{siteConfig.email}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Slab 3: Phone */}
            <div className="channel-slab">
              <div className="slab-top">
                <div className="slab-icon-box">
                  <Phone size={18} />
                </div>
                <span className="slab-tag">Layanan Telepon</span>
              </div>
              <h3 className="slab-title">Hotline Kantor</h3>
              <p className="slab-desc">Senin – Jumat · 09.00 – 17.00 WIB untuk komunikasi langsung.</p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="slab-action-btn default-btn">
                <span>{siteConfig.phone}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Consultation Form Section */}
      <section className="section contact-intake-section">
        <Container>
          <div className="intake-section-wrapper">
            <aside className="intake-editorial-aside">
              <span className="intake-aside-kicker">PRIVATE CLIENT INTAKE</span>
              <h2>Persiapan awal untuk konsultasi yang lebih efektif.</h2>
              <p>
                Informasi awal membantu tim kami memahami konteks, menentukan bidang penanganan, dan menyiapkan arah diskusi sebelum sesi dimulai.
              </p>

              <div className="intake-guidance-list">
                <div>
                  <span>01</span>
                  <p>Lengkapi identitas dan kanal komunikasi yang dapat dihubungi.</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Pilih fokus hukum serta format konsultasi yang paling sesuai.</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Sampaikan kronologi singkat dan dokumen yang telah tersedia.</p>
                </div>
              </div>

              <div className="intake-confidentiality-note">
                <ShieldCheck size={18} />
                <div>
                  <strong>Kerahasiaan sejak kontak pertama</strong>
                  <span>Informasi awal diperlakukan secara terbatas dan profesional.</span>
                </div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* 3. Office & Representation Slabs */}
      <section className="section office-info-section">
        <Container>
          <div className="office-section-header">
            <span className="office-kicker">INFORMASI RESMI KANTOR</span>
            <h2 className="office-title">Lokasi &amp; Standar Pendampingan</h2>
          </div>

          <div className="office-cards-grid">
            <div className="office-card">
              <div className="office-card-icon">
                <MapPin size={20} />
              </div>
              <span className="office-card-label">DOMISILI &amp; KANTOR</span>
              <h3 className="office-card-name">RPK Law Firm</h3>
              <p className="office-card-text">{siteConfig.address.join(" · ")}</p>
              <span className="office-card-meta">Kunjungan tatap muka diselenggarakan dengan jadwal terkonfirmasi.</span>
            </div>

            <div className="office-card">
              <div className="office-card-icon">
                <Clock size={20} />
              </div>
              <span className="office-card-label">WAKTU OPERASIONAL</span>
              <h3 className="office-card-name">Jam Kerja Kantor</h3>
              <p className="office-card-text">
                Senin – Jumat: 09.00 – 17.00 WIB<br />
                Sabtu – Minggu: Tutup (Kecuali Kedaruratan Litigasi)
              </p>
              <span className="office-card-meta">Konsultasi akhir pekan hanya melalui kesepakatan awal.</span>
            </div>

            <div className="office-card">
              <div className="office-card-icon">
                <ShieldCheck size={20} />
              </div>
              <span className="office-card-label">STANDAR ETIKA HUKUM</span>
              <h3 className="office-card-name">Kerahasiaan Mutlak</h3>
              <p className="office-card-text">
                Seluruh komunikasi, berkas, dan data klien dilindungi hak kerahasiaan profesi advokat (Attorney-Client Privilege).
              </p>
              <span className="office-card-meta">Kerahasiaan 100% terjamin sejak kontak pertama.</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
