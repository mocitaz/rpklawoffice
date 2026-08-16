import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Compass,
  Users,
  Building2,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { Container, Breadcrumb } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { siteConfig } from "@/data/site";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil & Nilai Firma",
  description:
    "Mengenal pendekatan hukum, filosofi advokasi, standar integritas, dan kepemimpinan di balik RPK Law Office.",
};

export default function AboutPage() {
  const managingPartner = team.find((m) => m.slug === "muhamad-fajar-roni") || team[0];

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
              RPK Law Office didirikan di atas fondasi ketelitian analisis, transparansi komunikasi, dan keberanian membela kepentingan hukum klien dengan standar integritas tertinggi.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Executive Managing Partner Statement Deck */}
      <section className="section partner-statement-section">
        <Container>
          <div className="partner-statement-deck">
            <div className="statement-portrait-wrap">
              <div className="statement-portrait-frame">
                <Image
                  src={managingPartner.portrait}
                  fill
                  priority
                  alt={`Foto profil ${managingPartner.fullName}`}
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="statement-portrait-img"
                />
              </div>
              <div className="statement-partner-badge">
                <strong>{managingPartner.fullName}</strong>
                <span>{managingPartner.role} · RPK Law Office</span>
              </div>
            </div>

            <div className="statement-copy-wrap">
              <div className="statement-top-tag">
                <Sparkles size={14} />
                <span>PERNYATAAN MANAGING PARTNER</span>
              </div>

              <blockquote className="statement-quote">
                “Tidak ada ruang untuk spekulasi dalam nasihat hukum. Setiap langkah dan rekomendasi harus berpijak pada fondasi yuridis yang kokoh serta relevansi komersial yang nyata bagi kepentingan klien.”
              </blockquote>

              <p className="statement-text">
                Di RPK Law Office, kami memandang hubungan dengan klien bukan sekadar transaksi penanganan kasus, melainkan kemitraan strategis jangka panjang. Kami hadir untuk memastikan bahwa setiap keputusan bisnis dan langkah personal yang Anda ambil memiliki kepastian hukum yang teruji.
              </p>

              <div className="statement-actions">
                <Link href={`/tim/${managingPartner.slug}`} className="statement-btn-link">
                  <span>Lihat Riwayat &amp; Profil Lengkap</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/kontak" className="statement-btn-consult">
                  <span>Jadwalkan Konsultasi Bersama Partner</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Firm Governance & Credentials Grid */}
      <section className="section firm-credentials-section">
        <Container>
          <div className="credentials-section-header">
            <span className="credentials-kicker">STANDAR PROFESIONAL &amp; TATA KELOLA</span>
            <h2 className="credentials-title">Landasan Legalitas &amp; Integritas Firma</h2>
            <p className="credentials-subtitle">
              Kepatuhan terhadap kode etik profesi advokat dan jaminan kerahasiaan absolut yang kami terapkan sejak kontak pertama.
            </p>
          </div>

          <div className="credentials-grid-four">
            <div className="credential-card">
              <div className="cred-card-icon">
                <FileCheck size={20} />
              </div>
              <span className="cred-card-tag">LEGALITAS BERACARA</span>
              <h3 className="cred-card-title">Lisensi Advokat Resmi</h3>
              <p className="cred-card-desc">
                Seluruh advokat mitra telah mengantongi Berita Acara Sumpah Pengadilan Tinggi dan terdaftar resmi di organisasi advokat (PERADI).
              </p>
            </div>

            <div className="credential-card">
              <div className="cred-card-icon">
                <Lock size={20} />
              </div>
              <span className="cred-card-tag">STANDAR KERAHASIAAN</span>
              <h3 className="cred-card-title">Attorney-Client Privilege</h3>
              <p className="cred-card-desc">
                Perlindungan kerahasiaan data, berkas rahasia dagang, dan risalah perkara klien dijamin 100% berdasarkan undang-undang advokat.
              </p>
            </div>

            <div className="credential-card">
              <div className="cred-card-icon">
                <Scale size={20} />
              </div>
              <span className="cred-card-tag">AKUNTABILITAS TINGGI</span>
              <h3 className="cred-card-title">Direct Partner Involvement</h3>
              <p className="cred-card-desc">
                Setiap berkas dan strategi penanganan diarahkan serta ditinjau langsung oleh Partner penanggung jawab, bukan didelegasikan lepas.
              </p>
            </div>

            <div className="credential-card">
              <div className="cred-card-icon">
                <Building2 size={20} />
              </div>
              <span className="cred-card-tag">REPRESENTATIF</span>
              <h3 className="cred-card-title">Fasilitas Bandung &amp; Daring</h3>
              <p className="cred-card-desc">
                Layanan konsultasi tatap muka terjadwal di Bandung serta ruang pertemuan daring terenkripsi untuk efisiensi klien nasional.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Tiga Pilar Keunggulan Komparatif (Why Clients Choose Us) */}
      <section className="section why-choose-section">
        <Container>
          <div className="why-section-header">
            <span className="why-kicker">KEUNGGULAN KOMPARATIF</span>
            <h2 className="why-title">Mengapa Klien Memilih RPK Law Office</h2>
            <p className="why-subtitle">
              Pendekatan terpadu yang membedakan cara kerja dan kualitas representasi kami dari firma hukum konvensional.
            </p>
          </div>

          <div className="why-cards-grid">
            <div className="why-card">
              <span className="why-number">01</span>
              <h3 className="why-card-name">Ketajaman Mitigasi Pra-Sengketa</h3>
              <p className="why-card-desc">
                Kami fokus mengidentifikasi celah klausul dan potensi sengketa di awal, menyelamatkan klien dari proses pengadilan yang panjang dan menguras biaya.
              </p>
              <ul className="why-points-list">
                <li><CheckCircle2 size={13} /> <span>Audit klausul kontrak komersial</span></li>
                <li><CheckCircle2 size={13} /> <span>Negosiasi pra-litigasi berkepastian</span></li>
              </ul>
            </div>

            <div className="why-card">
              <span className="why-number">02</span>
              <h3 className="why-card-name">Nasihat yang Lugas &amp; Berorientasi Bisnis</h3>
              <p className="why-card-desc">
                Kami tidak bersembunyi di balik istilah hukum yang rumit. Kami menyajikan opsi tindakan yang terukur beserta kalkulasi risiko komersialnya.
              </p>
              <ul className="why-points-list">
                <li><CheckCircle2 size={13} /> <span>Analisis risiko rasional &amp; matematis</span></li>
                <li><CheckCircle2 size={13} /> <span>Rekomendasi taktis yang siap dieksekusi</span></li>
              </ul>
            </div>

            <div className="why-card">
              <span className="why-number">03</span>
              <h3 className="why-card-name">Transparansi Penuh &amp; Aksesibilitas</h3>
              <p className="why-card-desc">
                Klien senantiasa mendapatkan pembaruan berkala mengenai setiap tahapan perkara, tanpa janji semu dan tanpa biaya tersembunyi.
              </p>
              <ul className="why-points-list">
                <li><CheckCircle2 size={13} /> <span>Pelaporan berkala secara rutin</span></li>
                <li><CheckCircle2 size={13} /> <span>Akses komunikasi langsung ke Partner</span></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Editorial Atmosphere & Institutional Narrative */}
      <section className="section about-overview-section">
        <Container>
          <div className="about-split-layout">
            <div className="about-split-left">
              <span className="overview-tag">PENDEKATAN BUTIK HUKUM</span>
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
                <Link href="/area-praktik" className="overview-btn-practices">
                  <span>Lihat Area Praktik</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/kontak" className="overview-btn-team">
                  <span>Hubungi Kantor Kami</span>
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

      {/* 6. Four Core Values (Pilar Nilai Dasar) */}
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

      {/* 7. Mini Partner Roster Preview */}
      <section className="section about-team-roster-section">
        <Container>
          <div className="roster-section-header">
            <div>
              <span className="roster-kicker">DEWAN ADVOKAT &amp; PARTNER</span>
              <h2 className="roster-section-title">Para Profesional di Balik Firma</h2>
            </div>
            <Link href="/tim" className="roster-all-link">
              <span>Lihat Seluruh Tim Advokat</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="about-team-grid">
            {team.map((member, i) => (
              <article key={member.slug} className="about-partner-card">
                <Link href={`/tim/${member.slug}`} className="about-partner-img-link">
                  <div className="about-partner-portrait">
                    <Image
                      src={member.portrait}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      alt={member.fullName}
                      className="partner-img"
                    />
                    <span className="partner-idx-tag">0{i + 1}</span>
                  </div>
                </Link>

                <div className="about-partner-info">
                  <span className="about-partner-role">{member.role}</span>
                  <h3 className="about-partner-name">
                    <Link href={`/tim/${member.slug}`}>{member.fullName}</Link>
                  </h3>
                  <p className="about-partner-bio">{member.shortBio}</p>

                  <div className="about-partner-pills">
                    {member.practiceAreas.slice(0, 2).map((pa) => (
                      <span key={pa} className="about-pill">
                        {pa}
                      </span>
                    ))}
                  </div>

                  <Link href={`/tim/${member.slug}`} className="about-partner-btn">
                    <span>Lihat Profil &amp; CV</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
