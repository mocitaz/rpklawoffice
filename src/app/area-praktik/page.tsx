import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, FileText } from "lucide-react";
import { Container, Breadcrumb } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { practiceAreas } from "@/data/practice-areas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Area Praktik — Ruang Lingkup Layanan Hukum",
  description:
    "Eksplorasi ruang lingkup pendampingan hukum RPK Law Office: Hukum Korporasi, Penyelesaian Sengketa, Litigasi Perdata, Ketenagakerjaan, Properti, dan Kepatuhan Regulasi.",
};

export default function PracticesPage() {
  return (
    <>
      {/* 1. Header Hero */}
      <section className="practices-directory-hero">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Area Praktik" },
            ]}
          />

          <div className="practices-hero-header">
            <span className="practices-kicker">RUANG LINGKUP &amp; SPESIALISASI HUKUM</span>
            <h1 className="practices-main-heading">
              Pendampingan Strategis. <em>Solusi Terarah.</em>
            </h1>
            <p className="practices-hero-desc">
              Dari tata kelola korporasi sehari-hari hingga mitigasi sengketa kompleks, kami menghadirkan navigasi hukum yang terstruktur, tajam secara yuridis, dan berorientasi pada kepastian bisnis klien.
            </p>

            {/* Fast Practice Selector Pills */}
            <div className="practice-quick-pills">
              {practiceAreas.map((area, idx) => (
                <a key={area.slug} href={`#${area.slug}`} className="quick-pill-item">
                  <span>0{idx + 1}</span>
                  <strong>{area.shortTitle}</strong>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Practice Area Dossier Grid */}
      <section className="section practices-roster-section">
        <Container>
          <div className="practices-dossier-grid">
            {practiceAreas.map((area, index) => (
              <article key={area.slug} id={area.slug} className="practice-dossier-card">
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
                <p className="practice-card-intro">{area.intro}</p>

                {/* Scope Checklist Matrix */}
                <div className="practice-scope-box">
                  <span className="scope-box-label">RUANG LINGKUP PENANGANAN:</span>
                  <ul className="scope-checklist">
                    {area.scope.map((item) => (
                      <li key={item} className="scope-check-item">
                        <CheckCircle2 size={14} className="scope-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="practice-card-footer">
                  <Link href={`/area-praktik/${area.slug}`} className="btn-practice-primary">
                    <span>Pelajari Rincian Layanan</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-practice-wa"
                  >
                    <span>Konsultasi Sektor Ini</span>
                    <ArrowUpRight size={14} />
                  </Link>
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
