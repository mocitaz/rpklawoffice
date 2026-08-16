import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  MessageSquare,
  Scale,
  Briefcase,
} from "lucide-react";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { team } from "@/data/team";
import { Breadcrumb, Container } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  return area
    ? {
        title: `${area.title} — Area Praktik`,
        description: area.description,
      }
    : {};
}

export default async function PracticeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const index = practiceAreas.findIndex((item) => item.slug === slug);
  const prev = practiceAreas[(index - 1 + practiceAreas.length) % practiceAreas.length];
  const next = practiceAreas[(index + 1) % practiceAreas.length];

  // Filter lawyers that cover this area (or fallback to all partners)
  const relatedLawyers = team.filter((member) =>
    member.practiceAreas.some((pa) =>
      pa.toLowerCase().includes(area.shortTitle.toLowerCase()) ||
      area.title.toLowerCase().includes(pa.toLowerCase())
    )
  );
  const displayLawyers = relatedLawyers.length > 0 ? relatedLawyers : team.slice(0, 2);

  return (
    <>
      {/* 1. Practice Detail Hero */}
      <section className="practice-detail-hero">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Area Praktik", href: "/area-praktik" },
              { label: area.title },
            ]}
          />

          <div className="practice-hero-wrap">
            <span className="practice-hero-kicker">SPESIALISASI HUKUM · RPK LAW OFFICE</span>
            <h1 className="practice-hero-heading">{area.title}</h1>
            <p className="practice-hero-lead">{area.intro}</p>

            <div className="practice-quick-stats">
              <div className="stat-pill">
                <Scale size={14} />
                <span>{area.scope.length} Lingkup Penanganan</span>
              </div>
              <div className="stat-pill">
                <Briefcase size={14} />
                <span>Didukung Advokat Berlisensi</span>
              </div>
              <div className="stat-pill">
                <Shield size={14} />
                <span>Kerahasiaan Klien 100%</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Practice Detail Dossier Body */}
      <section className="section practice-dossier-body">
        <Container>
          <div className="practice-detail-layout">
            {/* Left Sticky Desk */}
            <aside className="practice-sticky-desk">
              <div className="desk-intake-box">
                <span className="desk-kicker">KONSULTASI BIDANG INI</span>
                <h3 className="desk-title">{area.shortTitle}</h3>
                <p className="desk-text">
                  Diskusikan posisi hukum, audit berkas, atau mitigasi risiko terkait persoalan ini bersama tim kami.
                </p>

                <div className="desk-actions">
                  <Link href="/kontak" className="desk-btn-primary">
                    <span>Jadwalkan Konsultasi</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desk-btn-wa"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Langsung</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Related Lawyers Box */}
              <div className="desk-lawyers-box">
                <span className="lawyers-box-tag">ADVOKAT TERKAIT</span>
                <div className="lawyers-mini-list">
                  {displayLawyers.map((lawyer) => (
                    <Link
                      key={lawyer.slug}
                      href={`/tim/${lawyer.slug}`}
                      className="lawyer-mini-card"
                    >
                      <div className="lawyer-mini-portrait">
                        <Image
                          src={lawyer.portrait}
                          fill
                          sizes="48px"
                          alt={lawyer.fullName}
                          className="mini-img"
                        />
                      </div>
                      <div className="lawyer-mini-info">
                        <strong>{lawyer.fullName}</strong>
                        <span>{lawyer.role}</span>
                      </div>
                      <ArrowRight size={14} className="mini-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <div className="practice-main-dossier">
              {/* Block 1: Deskripsi & Pendekatan */}
              <section className="dossier-subblock">
                <div className="subblock-header">
                  <span className="subblock-num">01</span>
                  <h2 className="subblock-title">Pendekatan &amp; Fokus Pendampingan</h2>
                </div>
                <div className="subblock-prose">
                  <p>{area.description}</p>
                  <p>
                    Dalam menangani setiap perkara di bidang {area.title.toLowerCase()}, kami senantiasa memulai dengan penelaahan menyeluruh terhadap fakta material dan dokumen legal terkait. Pendekatan ini memastikan bahwa setiap rekomendasi yang diberikan berpijak pada kepastian yuridis dan terintegrasi dengan kepentingan strategis klien.
                  </p>
                </div>
              </section>

              {/* Block 2: Rincian Ruang Lingkup Layanan */}
              <section className="dossier-subblock">
                <div className="subblock-header">
                  <span className="subblock-num">02</span>
                  <h2 className="subblock-title">Ruang Lingkup Layanan</h2>
                </div>
                <div className="scope-detail-grid">
                  {area.scope.map((item, idx) => (
                    <div key={item} className="scope-detail-card">
                      <div className="scope-card-top">
                        <span className="scope-num">0{idx + 1}</span>
                        <CheckCircle2 size={16} className="scope-icon" />
                      </div>
                      <h3 className="scope-title">{item}</h3>
                      <p className="scope-desc">
                        Penanganan komprehensif mulai dari telaah risiko awal, penyusunan instrumen hukum, hingga pendampingan representasi.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Block 3: Nilai Tambah & Proteksi */}
              <section className="dossier-subblock">
                <div className="subblock-header">
                  <span className="subblock-num">03</span>
                  <h2 className="subblock-title">Komitmen &amp; Standar Kerja Firma</h2>
                </div>
                <div className="assurance-box">
                  <p>
                    Setiap pendampingan di RPK Law Office dilindungi oleh kerahasiaan profesi advokat (Attorney-Client Privilege). Kami berkomunikasi secara transparan mengenai kalkulasi risiko, estimasi waktu, serta tahapan prosedural yang harus ditempuh.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Next / Prev Practice Navigator */}
      <section className="practice-nav-bar">
        <Container>
          <div className="practice-nav-grid">
            <Link href={`/area-praktik/${prev.slug}`} className="practice-nav-item prev">
              <ArrowLeft size={18} />
              <div className="practice-nav-info">
                <span className="nav-dir-label">AREA SEBELUMNYA</span>
                <strong className="nav-item-title">{prev.title}</strong>
              </div>
            </Link>

            <Link href={`/area-praktik/${next.slug}`} className="practice-nav-item next">
              <div className="practice-nav-info">
                <span className="nav-dir-label">AREA BERIKUTNYA</span>
                <strong className="nav-item-title">{next.title}</strong>
              </div>
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
