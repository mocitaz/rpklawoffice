import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  Building2,
  CheckCircle2,
  FileCheck,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { Container, Button } from "@/components/ui";
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

      {/* 2. Executive Leadership & Partner Statement */}
      <section className="section about-leadership-section">
        <Container>
          <div className="leadership-manifesto-spread">
            <div className="manifesto-card-grid">
              {/* Left Column: Portrait & Credentials */}
              <div className="manifesto-partner-col">
                <div className="partner-portrait-frame-lux">
                  <Image
                    src={managingPartner.portrait}
                    fill
                    alt={`Potret resmi ${managingPartner.fullName}`}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="partner-portrait-lux-img"
                  />
                  <div className="partner-frame-badge">
                    <span className="badge-dot" />
                    <span>MANAGING PARTNER</span>
                  </div>
                </div>

                <div className="partner-lux-meta">
                  <h3 className="partner-lux-name">{managingPartner.fullName}</h3>
                  <p className="partner-lux-desc">
                    Memimpin arah strategis firma dengan fokus pada mitigasi risiko, litigasi perdata, dan pendampingan komersial klien korporasi maupun perorangan.
                  </p>
                  
                  <div className="partner-credentials-chips">
                    <span className="chip-item">Advokat PERADI</span>
                    <span className="chip-item">Pengadilan Tinggi</span>
                    <span className="chip-item">Bandung</span>
                  </div>

                  <Link href={`/tim/${managingPartner.slug}`} className="partner-cv-link-btn">
                    <span>Lihat Rekam Jejak &amp; CV Lengkap</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Statement & Commitment Pillars */}
              <div className="manifesto-content-col">
                <div className="manifesto-kicker-row">
                  <span className="manifesto-kicker-line" />
                  <span className="manifesto-kicker-text">MANIFESTO KEPEMIMPINAN &amp; FILOSOFI ADVOKASI</span>
                </div>

                <h2 className="manifesto-main-title">
                  Komitmen Yuridis Berorientasi Kepastian
                </h2>

                <blockquote className="manifesto-quote-gold">
                  “Tidak ada ruang untuk spekulasi dalam nasihat hukum. Setiap langkah harus berpijak pada fondasi yuridis yang kokoh dan relevansi komersial yang nyata bagi kelangsungan bisnis klien.”
                </blockquote>

                <p className="manifesto-narrative">
                  Di RPK Law Office, kami memandang hubungan dengan klien sebagai kemitraan strategis jangka panjang. Kami memahami bahwa di balik setiap klausul kontrak, sengketa bisnis, dan transaksi terdapat reputasi serta aset berharga yang harus dijaga.
                </p>

                {/* 2-Column Commitment Grid */}
                <div className="manifesto-commitment-grid">
                  <div className="commitment-card">
                    <div className="commitment-card-head">
                      <span className="commitment-num">01</span>
                      <h4 className="commitment-title">Tanggung Jawab Langsung</h4>
                    </div>
                    <p className="commitment-text">
                      Setiap perkara diarahkan, dirumuskan, dan diawasi langsung oleh Partner penanggung jawab tanpa perantara yang berjarak.
                    </p>
                  </div>

                  <div className="commitment-card">
                    <div className="commitment-card-head">
                      <span className="commitment-num">02</span>
                      <h4 className="commitment-title">Nasihat Lugas &amp; Definitif</h4>
                    </div>
                    <p className="commitment-text">
                      Kalkulasi risiko hukum dan komersial disajikan secara transparan tanpa istilah teknis yang ambigu, siap dieksekusi secara nyata.
                    </p>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="manifesto-action-bar">
                  <Button href="/kontak" className="manifesto-btn-gold">
                    <span>Jadwalkan Konsultasi dengan Partner</span>
                    <ArrowUpRight size={15} />
                  </Button>
                  <Link href="/area-praktik" className="manifesto-link-explore">
                    <span>Eksplorasi Layanan Hukum</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Standards, Governance & Legal Credentials */}
      <section className="section about-governance-section">
        <Container>
          <div className="section-head-center">
            <span className="sub-kicker">TATA KELOLA &amp; STANDAR PROFESIONAL</span>
            <h2 className="section-title-dossier">Empat Landasan Tata Kelola Firma</h2>
            <p className="section-desc-dossier">
              Kepatuhan terhadap kode etik profesi advokat dan akuntabilitas hukum dalam setiap pendampingan.
            </p>
          </div>

          <div className="governance-matrix-grid">
            <div className="gov-matrix-card">
              <div className="gov-card-header">
                <div className="gov-icon-box">
                  <FileCheck size={20} />
                </div>
                <span className="gov-index">01</span>
              </div>
              <span className="gov-label">LEGALITAS RESMI</span>
              <h3 className="gov-title">Lisensi &amp; Berita Acara Sumpah</h3>
              <p className="gov-text">
                Seluruh advokat telah diambil sumpah di Pengadilan Tinggi dan terdaftar resmi di organisasi advokat nasional (PERADI).
              </p>
            </div>

            <div className="gov-matrix-card">
              <div className="gov-card-header">
                <div className="gov-icon-box">
                  <Lock size={20} />
                </div>
                <span className="gov-index">02</span>
              </div>
              <span className="gov-label">KERAHASIAAN MUTLAK</span>
              <h3 className="gov-title">Attorney-Client Privilege</h3>
              <p className="gov-text">
                Jaminan kerahasiaan 100% terhadap seluruh dokumen, data perusahaan, dan informasi strategis sejak konsultasi permulaan.
              </p>
            </div>

            <div className="gov-matrix-card">
              <div className="gov-card-header">
                <div className="gov-icon-box">
                  <Scale size={20} />
                </div>
                <span className="gov-index">03</span>
              </div>
              <span className="gov-label">AKUNTABILITAS TINGGI</span>
              <h3 className="gov-title">Keterlibatan Langsung Partner</h3>
              <p className="gov-text">
                Penanganan perkara diarahkan, dirumuskan, dan diawasi langsung oleh Partner yang bertanggung jawab atas setiap strategi.
              </p>
            </div>

            <div className="gov-matrix-card">
              <div className="gov-card-header">
                <div className="gov-icon-box">
                  <Building2 size={20} />
                </div>
                <span className="gov-index">04</span>
              </div>
              <span className="gov-label">INFRASTRUKTUR REPRESENTATIF</span>
              <h3 className="gov-title">Layanan Tatap Muka &amp; Daring</h3>
              <p className="gov-text">
                Fasilitas ruang pertemuan profesional di Bandung dan sistem telekonferensi aman untuk efisiensi koordinasi lintas kota.
              </p>
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
