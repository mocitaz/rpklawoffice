import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Compass, Users, Building2, MapPin } from "lucide-react";
import { Container, Breadcrumb } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil & Nilai Firma",
  description:
    "Mengenal pendekatan hukum, filosofi advokasi, dan standar integritas profesional di balik RPK Law Office.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero Header */}
      <section className="about-hero-section">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tentang Kami" },
            ]}
          />

          <div className="about-hero-header">
            <span className="about-kicker">PROFIL FIRMA &amp; MANIFESTO HUKUM</span>
            <h1 className="about-main-heading">
              Presisi Yuridis. <em>Komitmen Strategis.</em>
            </h1>
            <p className="about-hero-desc">
              RPK Law Office hadir untuk mendampingi individu dan badan usaha melalui analisis hukum yang tajam, komunikasi yang terbuka, dan dedikasi penuh pada kepastian hukum.
            </p>

            {/* Quick Firm Facts Bar */}
            <div className="firm-specs-row">
              <div className="firm-spec-item">
                <Building2 size={16} />
                <div>
                  <span className="spec-tag">ENTITAS</span>
                  <strong>Firma Advokat &amp; Konsultan</strong>
                </div>
              </div>
              <div className="firm-spec-item">
                <MapPin size={16} />
                <div>
                  <span className="spec-tag">DOMISILI</span>
                  <strong>Bandung, Jawa Barat</strong>
                </div>
              </div>
              <div className="firm-spec-item">
                <Scale size={16} />
                <div>
                  <span className="spec-tag">FOKUS</span>
                  <strong>Korporasi &amp; Litigasi</strong>
                </div>
              </div>
              <div className="firm-spec-item">
                <ShieldCheck size={16} />
                <div>
                  <span className="spec-tag">STANDAR</span>
                  <strong>Kerahasiaan 100%</strong>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Editorial Institutional Overview */}
      <section className="section about-overview-section">
        <Container>
          <div className="about-split-layout">
            <div className="about-split-left">
              <span className="overview-tag">PENDEKATAN KAMI</span>
              <h2 className="overview-heading">
                Memadukan ketajaman analisis hukum dengan pemahaman komersial.
              </h2>
              <blockquote className="overview-quote">
                “Nasihat yang baik dimulai dengan memahami persoalan secara utuh, bukan sekadar memberikan jawaban prosedural.”
              </blockquote>
            </div>

            <div className="about-split-right">
              <p>
                RPK Law Office adalah kantor advokat dan konsultan hukum yang berbasis di Bandung, melayani kebutuhan representasi hukum komersial, tata kelola korporasi, serta penyelesaian sengketa perdata bagi klien perorangan maupun korporasi.
              </p>
              <p>
                Kami memandang hukum bukan semata instrumen kepatuhan kaku, melainkan pertimbangan strategis untuk melindungi aset, memitigasi risiko di muka, serta memberikan landasan yang kokoh bagi setiap keputusan penting.
              </p>
              <p>
                Dalam setiap perkara, kami mengedepankan pendekatan personal dengan mendengarkan konteks persoalan secara menyeluruh sebelum menyusun formula langkah hukum yang terukur dan proporsional.
              </p>

              <div className="overview-action-row">
                <Link href="/tim" className="overview-btn-team">
                  <span>Kenali Tim Advokat</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/area-praktik" className="overview-btn-practices">
                  <span>Lihat Area Praktik</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Architectural Office Atmosphere Frame */}
          <div className="about-visual-frame">
            <Image
              src={siteConfig.images.office}
              fill
              alt="Suasana ruang kerja dan rapat profesional RPK Law Office"
              sizes="100vw"
              className="about-visual-img"
            />
            <div className="visual-caption-badge">
              <span>RPK Law Office · Ruang Kerja &amp; Konsultasi Profesional</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Four Core Values (Pilar Nilai Dasar) */}
      <section className="section about-values-section">
        <Container>
          <div className="values-section-header">
            <span className="values-kicker">PRINSIP KERJA &amp; ETIKA PROFESI</span>
            <h2 className="values-title">Empat Pilar Nilai Firma</h2>
            <p className="values-subtitle">
              Fondasi yang memandu setiap analisis, negosiasi, dan langkah pendampingan kami di dalam maupun di luar pengadilan.
            </p>
          </div>

          <div className="values-cards-grid">
            <div className="value-card">
              <div className="value-card-header">
                <span className="value-num">01</span>
                <ShieldCheck size={20} className="value-icon" />
              </div>
              <h3 className="value-name">Integritas Profesional</h3>
              <p className="value-desc">
                Menjaga kerahasiaan absolut (Attorney-Client Privilege) dan memegang teguh kode etik profesi advokat dalam setiap proses representasi.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card-header">
                <span className="value-num">02</span>
                <Scale size={20} className="value-icon" />
              </div>
              <h3 className="value-name">Ketelitian Yuridis</h3>
              <p className="value-desc">
                Menelaah setiap klausul, dokumen dasar, dan preseden hukum secara cermat guna membangun argumentasi dan posisi hukum yang kokoh.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card-header">
                <span className="value-num">03</span>
                <Compass size={20} className="value-icon" />
              </div>
              <h3 className="value-name">Orientasi Solusi Terarah</h3>
              <p className="value-desc">
                Menyelaraskan ketentuan normatif dengan realitas komersial dan tujuan akhir klien guna menghadirkan rekomendasi yang dapat dieksekusi.
              </p>
            </div>

            <div className="value-card">
              <div className="value-card-header">
                <span className="value-num">04</span>
                <Users size={20} className="value-icon" />
              </div>
              <h3 className="value-name">Komunikasi Transparan</h3>
              <p className="value-desc">
                Menyampaikan setiap tahapan proses, kalkulasi risiko, dan estimasi waktu secara terbuka agar keputusan diambil dengan keyakinan penuh.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Four-Stage Engagement Protocol */}
      <section className="section about-protocol-section">
        <Container>
          <div className="protocol-section-header">
            <span className="protocol-kicker">PROTOKOL PENDAMPINGAN KLIEN</span>
            <h2 className="protocol-title">Alur Kerja yang Jelas &amp; Terstruktur</h2>
          </div>

          <div className="protocol-steps-grid">
            <div className="protocol-step-card">
              <span className="step-num">01</span>
              <h3 className="step-title">Identifikasi &amp; Asesmen Awal</h3>
              <p className="step-desc">
                Penerimaan informasi pokok perkara, penelaahan dokumen permulaan, dan klarifikasi tujuan hukum yang diinginkan klien.
              </p>
            </div>

            <div className="protocol-step-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Analisis Posisi &amp; Pemetaan Risiko</h3>
              <p className="step-desc">
                Penyusunan legal opinion, penelaahan regulasi terkait, serta perumusan skenario terbaik dan mitigasi dampak risiko.
              </p>
            </div>

            <div className="protocol-step-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Formulasi Rencana Tindakan</h3>
              <p className="step-desc">
                Penyusunan strategi negosiasi, draf perjanjian, atau materi gugatan/tanggapan sesuai kesepakatan representasi.
              </p>
            </div>

            <div className="protocol-step-card">
              <span className="step-num">04</span>
              <h3 className="step-title">Eksekusi &amp; Pelaporan Berkala</h3>
              <p className="step-desc">
                Pelaksanaan langkah hukum di lapangan disertai pembaruan informasi secara rutin hingga penyelesaian tuntas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
