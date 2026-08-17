import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, FileText } from "lucide-react";
import { Container } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { practiceAreas } from "@/data/practice-areas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Area Praktik — Layanan Hukum & Pengacara Bandung",
  description:
    "Layanan advokasi dan pendampingan hukum terpercaya di Bandung: Hukum Korporasi, Penyelesaian Sengketa, Litigasi Perdata, Hukum Properti, Ketenagakerjaan, dan Legal Advisory.",
  keywords: [
    "layanan hukum bandung",
    "pengacara perdata bandung",
    "pengacara bisnis bandung",
    "konsultan hukum korporasi bandung",
    "litigasi bandung",
  ],
};

export default function PracticesPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="practices-directory-hero">
        <div className="practices-hero-media" aria-hidden="true">
          <Image
            src="/images/practices/practices-hero-v2.png"
            alt=""
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="practices-hero-overlay" aria-hidden="true" />

        <Container className="practices-hero-shell">
          <div className="practices-hero-header">
            <span className="practices-kicker">RUANG LINGKUP &amp; SPESIALISASI HUKUM</span>
            <h1 className="practices-main-heading">
              Pendampingan Strategis. <em>Solusi Terarah.</em>
            </h1>
            <p className="practices-hero-desc">
              Dari tata kelola korporasi sehari-hari hingga mitigasi sengketa kompleks, kami menghadirkan navigasi hukum yang terstruktur, tajam secara yuridis, dan berorientasi pada kepastian bisnis klien.
            </p>
          </div>

          <div className="practice-quick-pills" aria-label="Navigasi cepat bidang praktik">
            {practiceAreas.map((area, idx) => (
              <a key={area.slug} href={`#${area.slug}`} className="quick-pill-item">
                <span>0{idx + 1}</span>
                <strong>{area.shortTitle}</strong>
                <ArrowRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Practice Area Dossier Grid */}
      <section className="section practices-roster-section">
        <Container>
          <div className="practices-roster-heading">
            <div>
              <span className="practices-kicker">ENAM BIDANG PRAKTIK</span>
              <h2>Keahlian yang bergerak bersama kebutuhan klien.</h2>
            </div>
            <p>
              Setiap mandat ditangani melalui kombinasi pemahaman sektoral, ketelitian dokumen, dan strategi yang dapat dijalankan.
            </p>
          </div>

          <div className="practices-dossier-grid">
            {practiceAreas.map((area, index) => (
              <article key={area.slug} id={area.slug} className="practice-dossier-card">
                <Link href={`/area-praktik/${area.slug}`} className="practice-card-media" aria-label={`Detail ${area.title}`}>
                  <Image
                    src={area.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) calc(100vw - 36px), (max-width: 1100px) calc(50vw - 50px), 400px"
                  />
                  <span className="practice-card-media-index">0{index + 1}</span>
                </Link>

                <div className="practice-dossier-content">
                  <div className="card-top-row">
                    <div className="card-badge-group">
                      <span className="card-index-num">0{index + 1}</span>
                      <span className="card-cat-tag">BIDANG SPESIALISASI</span>
                    </div>
                    <Link
                      href={`/area-praktik/${area.slug}`}
                      className="card-detail-arrow"
                      title={`Detail ${area.title}`}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <h2 className="practice-card-title">
                    <Link href={`/area-praktik/${area.slug}`}>{area.title}</Link>
                  </h2>

                  <p className="practice-card-desc">{area.description}</p>

                  <div className="practice-scope-box">
                    <span className="scope-box-label">RUANG LINGKUP PENANGANAN</span>
                    <ul className="scope-checklist">
                      {area.scope.map((item) => (
                        <li key={item} className="scope-check-item">
                          <CheckCircle2 size={14} className="scope-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="practice-card-footer">
                    <Link href={`/area-praktik/${area.slug}`} className="btn-practice-primary">
                      <span>Pelajari Layanan</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(area.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-practice-wa"
                    >
                      <span>Konsultasi</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Methodology & Standards Slab */}
      <section className="section practice-principles-section">
        <Container>
          <div className="principles-section-header">
            <span className="principles-kicker">METODOLOGI REPRESENTASI FIRMA</span>
            <h2 className="principles-title">Bagaimana Kami Mendampingi Perkara Anda</h2>
            <p className="principles-subtitle">
              Setiap persoalan hukum didekati secara sistematis melalui proses terukur untuk meminimalkan risiko dan memaksimalkan kepastian hasil.
            </p>
          </div>

          <div className="principles-grid-three">
            <div className="principle-card">
              <div className="principle-icon-box">
                <Layers size={20} />
              </div>
              <span className="principle-step">FASE 01</span>
              <h3 className="principle-name">Diagnosa &amp; Uji Tuntas Dokumen</h3>
              <p className="principle-desc">
                Memetakan konstruksi fakta secara menyeluruh, memverifikasi dokumen dasar, dan mengidentifikasi potensi eksposur risiko sejak awal.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-box">
                <FileText size={20} />
              </div>
              <span className="principle-step">FASE 02</span>
              <h3 className="principle-name">Formulasi Strategi &amp; Opsi Terukur</h3>
              <p className="principle-desc">
                Menyusun opsi langkah hukum beserta kalkulasi risiko komersial, biaya, serta estimasi waktu agar keputusan diambil secara matang.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-box">
                <ShieldCheck size={20} />
              </div>
              <span className="principle-step">FASE 03</span>
              <h3 className="principle-name">Eksekusi &amp; Proteksi Kepentingan</h3>
              <p className="principle-desc">
                Menjalankan negosiasi, korespondensi, maupun representasi litigasi dengan integritas penuh serta komunikasi yang terbuka bagi klien.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
