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
  title: "Tentang Kami — Kantor Advokat & Pengacara Bandung",
  description:
    "Profil kelembagaan, kepemimpinan partner, integritas advokat PERADI, dan metodologi advokasi hukum terpercaya RPK Law Office di Bandung, Jawa Barat.",
  keywords: [
    "tentang rpk law office",
    "kantor advokat bandung",
    "pengacara bandung",
    "law firm bandung",
    "roni putra kusumah",
  ],
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
            sizes="(max-width: 768px) 100vw, 48vw"
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
          <div className="about-partner-layout">
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

            <div className="about-partner-statement">
              <Eyebrow>Pernyataan Managing Partner</Eyebrow>
              <blockquote>
                “Nasihat hukum yang kuat berpijak pada dasar yuridis yang kokoh dan memahami realitas komersial klien.”
              </blockquote>
              <p className="partner-statement-copy">
                Kami mendampingi setiap keputusan strategis melalui analisis yang cermat, komunikasi terbuka, dan pilihan langkah yang dapat dipertanggungjawabkan.
              </p>

              <div className="partner-statement-meta">
                <div>
                  <span>Managing Partner</span>
                  <strong>{managingPartner.fullName}</strong>
                </div>
                <div>
                  <span>Fokus Pendampingan</span>
                  <strong>{managingPartner.practiceAreas.slice(0, 2).join(" · ")}</strong>
                </div>
              </div>

              <TextLink href={`/tim/${managingPartner.slug}`}>
                Lihat Profil &amp; Rekam Jejak
              </TextLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Standards, Governance & Legal Credentials — Horizontal Precision Ledger */}
      <section className="section about-governance-section">
        <Container>
          <div className="governance-ledger-header">
            <div className="ledger-header-left">
              <span className="sub-kicker">TATA KELOLA &amp; STANDAR PROFESIONAL</span>
              <h2 className="governance-title-main">
                Empat Landasan <em>Tata Kelola</em> Firma
              </h2>
            </div>
            <div className="ledger-header-right">
              <p className="governance-desc-main">
                Standar kepatuhan kode etik profesi advokat, akuntabilitas yuridis, dan jaminan perlindungan mutlak bagi setiap klien RPK Law Office.
              </p>
            </div>
          </div>

          <div className="governance-spec-ledger">
            <div className="ledger-row">
              <div className="ledger-cell-num">01</div>
              <div className="ledger-cell-title">
                <span className="ledger-tag">LEGALITAS RESMI</span>
                <h3 className="ledger-heading">Lisensi &amp; Berita Acara Sumpah</h3>
              </div>
              <div className="ledger-cell-desc">
                Seluruh advokat berpraktik telah diambil sumpah resmi di hadapan Pengadilan Tinggi dan memegang lisensi aktif organisasi advokat nasional (PERADI).
              </div>
              <div className="ledger-cell-badge">
                <span className="ledger-badge-pill">Advokat PERADI</span>
              </div>
            </div>

            <div className="ledger-row">
              <div className="ledger-cell-num">02</div>
              <div className="ledger-cell-title">
                <span className="ledger-tag">KERAHASIAAN MUTLAK</span>
                <h3 className="ledger-heading">Attorney-Client Privilege</h3>
              </div>
              <div className="ledger-cell-desc">
                Jaminan kerahasiaan 100% terhadap seluruh dokumen, data keuangan, dan informasi bisnis strategis sejak konsultasi permulaan tanpa syarat.
              </div>
              <div className="ledger-cell-badge">
                <span className="ledger-badge-pill">Proteksi Data 100%</span>
              </div>
            </div>

            <div className="ledger-row">
              <div className="ledger-cell-num">03</div>
              <div className="ledger-cell-title">
                <span className="ledger-tag">AKUNTABILITAS TINGGI</span>
                <h3 className="ledger-heading">Keterlibatan Langsung Partner</h3>
              </div>
              <div className="ledger-cell-desc">
                Penanganan perkara diarahkan, dirumuskan, dan diawasi langsung oleh Partner penanggung jawab atas setiap langkah dan rekomendasi.
              </div>
              <div className="ledger-cell-badge">
                <span className="ledger-badge-pill">Partner-Led Strategy</span>
              </div>
            </div>

            <div className="ledger-row">
              <div className="ledger-cell-num">04</div>
              <div className="ledger-cell-title">
                <span className="ledger-tag">INFRASTRUKTUR &amp; AKSES</span>
                <h3 className="ledger-heading">Layanan Tatap Muka &amp; Daring</h3>
              </div>
              <div className="ledger-cell-desc">
                Fasilitas ruang pertemuan profesional di Bandung dan sistem telekonferensi aman untuk efisiensi koordinasi klien lintas kota dan daerah.
              </div>
              <div className="ledger-cell-badge">
                <span className="ledger-badge-pill">Bandung &amp; Daring</span>
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
