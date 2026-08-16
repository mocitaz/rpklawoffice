import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container, Button, Eyebrow, TextLink } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil Firma & Manifesto Hukum",
  description:
    "Profil kelembagaan, kepemimpinan partner, standar integritas, dan metodologi advokasi di balik RPK Law Office.",
};

export default function AboutPage() {
  const managingPartner = team.find((m) => m.slug === "muhamad-fajar-roni") || team[0];

  return (
    <div className="about-dossier-page">
      {/* 1. Exact Home-Styled Hero for Tentang Kami */}
      <section className="home-hero hero-editorial-clean">
        <div className="hero-backdrop">
          <Image
            src="/images/about/monument.jpg"
            fill
            loading="eager"
            priority
            sizes="100vw"
            alt="Arsitektur Monumental RPK Law Office"
            className="hero-bg-image"
          />
          <div className="hero-cinematic-scrim" />
        </div>

        <Container className="hero-editorial-content">
          <div className="hero-lead-box">
            <div className="hero-micro-label">
              <span className="label-line" />
              <span>RPK LAW OFFICE · TENTANG KAMI</span>
            </div>

            <h1 className="hero-title-clean">
              Presisi Yuridis.<br />
              Integritas <em>Tanpa Kompromi.</em>
            </h1>

            <div className="hero-cta-clean">
              <Button href="/kontak" className="hero-btn-gold">
                Jadwalkan Konsultasi
              </Button>
              <Link href="/area-praktik" className="hero-explore-link">
                <span>Lihat Area Praktik</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="hero-bottom-bar">
            <div className="bottom-pills">
              <span>01 Lisensi PERADI</span>
              <span className="dot-sep" />
              <span>02 Kerahasiaan 100%</span>
              <span className="dot-sep" />
              <span>03 Pendekatan Butik</span>
            </div>

            <div className="bottom-meta">
              <span className="live-dot" />
              <span>Bandung · Jawa Barat</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Executive Leadership & Partner Statement — Clean Compact Editorial Split */}
      <section className="section about-editorial-split about-partner-editorial">
        <Container>
          <div className="about-split-grid">
            <div className="about-split-quote">
              <Eyebrow>Pernyataan Managing Partner</Eyebrow>
              <blockquote>
                “Tidak ada ruang untuk spekulasi dalam nasihat hukum. Setiap langkah harus berpijak pada fondasi yuridis yang kokoh dan relevansi komersial yang nyata.”
              </blockquote>
              <p>
                Kami mendampingi setiap keputusan strategis Anda melalui analisis cermat, komunikasi terbuka, dan kepastian hukum yang teruji.
              </p>
              <TextLink href={`/tim/${managingPartner.slug}`}>
                Profil &amp; Rekam Jejak {managingPartner.fullName}
              </TextLink>
            </div>

            <div className="about-split-media">
              <div className="media-frame">
                <Image
                  src={managingPartner.portrait}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  alt={`Potret resmi ${managingPartner.fullName}`}
                  className="partner-split-img"
                  style={{ objectPosition: "top center" }}
                />
                <div className="media-caption-pill">
                  <span className="pill-pulse" />
                  <span>{managingPartner.fullName} · Managing Partner</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Standards, Governance & Legal Credentials — Sleek Horizon Monolith */}
      <section className="section about-governance-section">
        <Container>
          <div className="section-head-center">
            <Eyebrow>Tata Kelola &amp; Standar Profesional</Eyebrow>
            <h2 className="governance-title-main">Empat Landasan Tata Kelola Firma</h2>
            <p className="governance-desc-main">
              Standar kepatuhan kode etik profesi advokat dan akuntabilitas hukum dalam setiap representasi klien.
            </p>
          </div>

          <div className="governance-monolith-strip">
            <div className="gov-strip-item">
              <div className="gov-strip-top">
                <span className="gov-num-tag">01</span>
                <span className="gov-badge-cat">LEGALITAS</span>
              </div>
              <h3 className="gov-item-heading">Lisensi &amp; Sumpah Advokat</h3>
              <p className="gov-item-text">
                Seluruh advokat telah diambil sumpah di Pengadilan Tinggi dan terdaftar resmi di organisasi advokat nasional (PERADI).
              </p>
              <div className="gov-meta-pill">
                <span className="pill-dot" />
                <span>Lisensi Resmi PERADI</span>
              </div>
            </div>

            <div className="gov-strip-item">
              <div className="gov-strip-top">
                <span className="gov-num-tag">02</span>
                <span className="gov-badge-cat">KERAHASIAAN</span>
              </div>
              <h3 className="gov-item-heading">Attorney-Client Privilege</h3>
              <p className="gov-item-text">
                Jaminan kerahasiaan 100% terhadap seluruh dokumen, data bisnis, dan informasi sensitif sejak konsultasi permulaan.
              </p>
              <div className="gov-meta-pill">
                <span className="pill-dot" />
                <span>Proteksi Data Mutlak</span>
              </div>
            </div>

            <div className="gov-strip-item">
              <div className="gov-strip-top">
                <span className="gov-num-tag">03</span>
                <span className="gov-badge-cat">AKUNTABILITAS</span>
              </div>
              <h3 className="gov-item-heading">Supervisi Langsung Partner</h3>
              <p className="gov-item-text">
                Penanganan perkara diarahkan, dirumuskan, dan diawasi langsung oleh Partner yang bertanggung jawab atas setiap strategi.
              </p>
              <div className="gov-meta-pill">
                <span className="pill-dot" />
                <span>Partner Lead Strategy</span>
              </div>
            </div>

            <div className="gov-strip-item">
              <div className="gov-strip-top">
                <span className="gov-num-tag">04</span>
                <span className="gov-badge-cat">AKSESIBILITAS</span>
              </div>
              <h3 className="gov-item-heading">Tatap Muka &amp; Daring</h3>
              <p className="gov-item-text">
                Fasilitas ruang pertemuan profesional di Bandung dan sistem telekonferensi aman untuk efisiensi koordinasi lintas kota.
              </p>
              <div className="gov-meta-pill">
                <span className="pill-dot" />
                <span>Bandung &amp; Telekonferensi</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Three Strategic Differentiators (Why Clients Choose Us) */}
      <section className="section about-differentiators-section">
        <Container>
          <div className="section-head-center">
            <span className="sub-kicker">KEUNGGULAN KOMPARATIF</span>
            <h2 className="section-title-dossier">Tiga Pilar Metodologi Praktik Kami</h2>
            <p className="section-desc-dossier">
              Pendekatan sistematis yang membedakan kualitas representasi dan efektivitas hasil bagi klien.
            </p>
          </div>

          <div className="differentiators-grid">
            <div className="diff-card">
              <div className="diff-card-top">
                <span className="diff-badge">PILAR 01</span>
                <h3 className="diff-title">Ketajaman Mitigasi Pra-Sengketa</h3>
              </div>
              <p className="diff-desc">
                Kami berfokus mengidentifikasi titik rawan hukum pada tahap dini sebelum berkembang menjadi perselisihan persidangan yang berlarut-larut.
              </p>
              <div className="diff-checklist">
                <div className="check-row">
                  <CheckCircle2 size={15} />
                  <span>Audit menyeluruh atas klausul kontrak komersial</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={15} />
                  <span>Perancangan skenario negosiasi damai terukur</span>
                </div>
              </div>
            </div>

            <div className="diff-card">
              <div className="diff-card-top">
                <span className="diff-badge">PILAR 02</span>
                <h3 className="diff-title">Nasihat Lugas &amp; Solutif</h3>
              </div>
              <p className="diff-desc">
                Kami menyajikan rekomendasi hukum yang langsung dapat dieksekusi tanpa bersembunyi di balik istilah teknis yang ambigu.
              </p>
              <div className="diff-checklist">
                <div className="check-row">
                  <CheckCircle2 size={15} />
                  <span>Kalkulasi risiko hukum dan komersial yang transparan</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={15} />
                  <span>Opsi tindakan terstruktur dengan prioritas jelas</span>
                </div>
              </div>
            </div>

            <div className="diff-card">
              <div className="diff-card-top">
                <span className="diff-badge">PILAR 03</span>
                <h3 className="diff-title">Aksesibilitas &amp; Pelaporan Rutin</h3>
              </div>
              <p className="diff-desc">
                Klien memiliki jalur komunikasi langsung dengan tim penasihat hukum serta menerima pembaruan perkembangan perkara secara berkala.
              </p>
              <div className="diff-checklist">
                <div className="check-row">
                  <CheckCircle2 size={15} />
                  <span>Pelaporan berkala di setiap progres penanganan</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={15} />
                  <span>Responsivitas tinggi terhadap dinamika perkara</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Core Values Matrix */}
      <section className="section about-values-compact">
        <Container>
          <div className="values-compact-layout">
            <div className="values-compact-lead">
              <span className="sub-kicker">PRINSIP KERJA FIRMA</span>
              <h2 className="section-title-dossier">Nilai-Nilai Fundamental</h2>
              <p className="values-compact-p">
                Standar moral dan etika kerja yang dipegang teguh oleh seluruh advokat dan staf dalam menjalankan setiap mandat representasi.
              </p>
              <Link href="/area-praktik" className="values-explore-link">
                <span>Eksplorasi Area Praktik Kami</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="values-compact-grid">
              <div className="val-item">
                <div className="val-head">
                  <span className="val-num">01</span>
                  <strong>Integritas Profesional</strong>
                </div>
                <p>Memegang teguh kode etik profesi advokat dan kejujuran mutlak dalam setiap proses.</p>
              </div>

              <div className="val-item">
                <div className="val-head">
                  <span className="val-num">02</span>
                  <strong>Ketelitian Yuridis</strong>
                </div>
                <p>Menelaah setiap dokumen dasar, klausul, dan preseden hukum dengan cermat.</p>
              </div>

              <div className="val-item">
                <div className="val-head">
                  <span className="val-num">03</span>
                  <strong>Orientasi Solusi</strong>
                </div>
                <p>Menyelaraskan ketentuan normatif dengan realitas komersial dan tujuan akhir klien.</p>
              </div>

              <div className="val-item">
                <div className="val-head">
                  <span className="val-num">04</span>
                  <strong>Transparansi</strong>
                </div>
                <p>Menyampaikan setiap estimasi waktu, biaya, dan kalkulasi risiko secara terbuka.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </div>
  );
}
