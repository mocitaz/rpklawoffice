import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container, Breadcrumb } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi",
  description:
    "Hubungi RPK Law Office untuk mendiskusikan kebutuhan pendampingan hukum, transaksi komersial, maupun sengketa perdata Anda.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="contact-editorial-header">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Kontak & Konsultasi" },
            ]}
          />

          <div className="contact-hero-content">
            <span className="contact-kicker-tag">KONSULTASI &amp; KORESPONDENSI FIRMA</span>
            <h1 className="contact-main-title">
              Mulai Komunikasi yang <em>Jelas &amp; Terarah.</em>
            </h1>
            <p className="contact-lead-text">
              Pintu masuk resmi untuk mendiskusikan persoalan hukum, mitigasi risiko bisnis, atau penyelesaian sengketa bersama tim advokat RPK Law Office.
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
              <h3 className="office-card-name">RPK Law Office</h3>
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
