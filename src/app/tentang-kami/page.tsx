import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Building2,
  CheckCircle2,
  FileCheck,
  Lock,
  ArrowUpRight,
  Award,
} from "lucide-react";
import { Container, Breadcrumb } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { siteConfig } from "@/data/site";
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
      {/* 1. Grand Hero & Architecture Spread */}
      <section className="about-grand-hero">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tentang Kami" },
            ]}
          />

          <div className="grand-hero-grid">
            <div className="grand-hero-lead">
              <span className="hero-kicker-tag">PROFIL KELEMBAGAAN FIRMA</span>
              <h1 className="grand-hero-title">
                Presisi Yuridis. <br />
                <em>Integritas Tanpa Kompromi.</em>
              </h1>
              <p className="grand-hero-summary">
                RPK Law Office beroperasi sebagai firma hukum butik yang memadukan ketajaman analisis hukum, kematangan beracara di ruang sidang, dan pemahaman komersial strategis untuk melindungi kepentingan terbaik klien.
              </p>

              <div className="hero-metrics-bar">
                <div className="metric-pill">
                  <Building2 size={15} />
                  <span>Firma Advokat &amp; Konsultan</span>
                </div>
                <div className="metric-pill">
                  <ShieldCheck size={15} />
                  <span>Kerahasiaan 100% Terjamin</span>
                </div>
                <div className="metric-pill">
                  <Award size={15} />
                  <span>Lisensi Resmi PERADI</span>
                </div>
              </div>
            </div>

            <div className="grand-hero-visual">
              <div className="visual-media-box">
                <Image
                  src={siteConfig.images.office}
                  fill
                  priority
                  alt="Ruang Kerja & Rapat Eksekutif RPK Law Office"
                  sizes="(max-width: 992px) 100vw, 520px"
                  className="visual-media-img"
                />
                <div className="visual-media-overlay">
                  <span className="overlay-badge-tag">KANTOR &amp; RUANG KONSULTASI</span>
                  <p className="overlay-badge-text">Bandung · Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Executive Leadership & Partner Statement */}
      <section className="section about-leadership-section">
        <Container>
          <div className="section-head-minimal">
            <span className="sub-kicker">KEPEMIMPINAN &amp; FILOSOFI ADVOKASI</span>
            <h2 className="section-title-dossier">Pernyataan Managing Partner</h2>
          </div>

          <div className="leadership-dossier-card">
            <div className="partner-portrait-col">
              <div className="portrait-aspect-frame">
                <Image
                  src={managingPartner.portrait}
                  fill
                  alt={`Potret resmi ${managingPartner.fullName}`}
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="portrait-aspect-img"
                />
              </div>
              <div className="partner-dossier-meta">
                <h3 className="partner-meta-name">{managingPartner.fullName}</h3>
                <span className="partner-meta-role">{managingPartner.role}</span>
                <span className="partner-meta-firm">RPK Law Office</span>
              </div>
            </div>

            <div className="partner-quote-col">
              <blockquote className="leadership-manifesto-quote">
                “Tidak ada ruang untuk spekulasi dalam nasihat hukum. Setiap langkah harus berpijak pada fondasi yuridis yang kokoh dan relevansi komersial yang nyata bagi kelangsungan bisnis klien.”
              </blockquote>

              <div className="leadership-paragraphs">
                <p>
                  Di RPK Law Office, kami memandang hubungan dengan klien bukan sekadar penanganan perkara per kasus, melainkan kemitraan strategis jangka panjang. Kami memahami bahwa di balik setiap dokumen kontrak, sengketa komersial, maupun transaksi korporasi terdapat reputasi, aset, dan masa depan usaha yang dipertaruhkan.
                </p>
                <p>
                  Oleh karena itu, kami menerapkan standar ketelitian tanpa kompromi: setiap perkara dianalisis secara multidimensi, dikomunikasikan secara transparan tanpa janji semu, dan dikawal langsung oleh Partner pendiri.
                </p>
              </div>

              <div className="leadership-footer-actions">
                <Link href={`/tim/${managingPartner.slug}`} className="btn-dossier-primary">
                  <span>Lihat Riwayat &amp; Profil Lengkap</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/kontak" className="btn-dossier-secondary">
                  <span>Jadwalkan Konsultasi</span>
                  <ArrowUpRight size={14} />
                </Link>
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

      {/* 6. The Partners Roster Showcase */}
      <section className="section about-roster-section">
        <Container>
          <div className="roster-head-row">
            <div>
              <span className="sub-kicker">DEWAN ADVOKAT &amp; MITRA</span>
              <h2 className="section-title-dossier">Para Profesional di Balik Firma</h2>
            </div>
            <Link href="/tim" className="roster-view-all">
              <span>Lihat Seluruh Tim</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="roster-cards-grid">
            {team.map((member, i) => (
              <article key={member.slug} className="roster-dossier-card">
                <Link href={`/tim/${member.slug}`} className="roster-portrait-link">
                  <div className="roster-portrait-box">
                    <Image
                      src={member.portrait}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      alt={member.fullName}
                      className="roster-portrait-img"
                    />
                    <span className="roster-index-tag">0{i + 1}</span>
                  </div>
                </Link>

                <div className="roster-body-box">
                  <span className="roster-role-tag">{member.role}</span>
                  <h3 className="roster-name-heading">
                    <Link href={`/tim/${member.slug}`}>{member.fullName}</Link>
                  </h3>
                  <p className="roster-bio-text">{member.shortBio}</p>

                  <div className="roster-pills-row">
                    {member.practiceAreas.slice(0, 2).map((pa) => (
                      <span key={pa} className="roster-pill">
                        {pa}
                      </span>
                    ))}
                  </div>

                  <Link href={`/tim/${member.slug}`} className="roster-action-btn">
                    <span>Lihat Profil &amp; CV Lengkap</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </div>
  );
}
