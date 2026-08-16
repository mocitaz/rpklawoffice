import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  MessageSquare,
  Scale,
  Globe,
} from "lucide-react";
import { team, getTeamMember } from "@/data/team";
import { Breadcrumb, Container } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  return member
    ? {
        title: `${member.fullName} — ${member.role}`,
        description: member.shortBio,
      }
    : {};
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const index = team.findIndex((item) => item.slug === slug);
  const prev = team[(index - 1 + team.length) % team.length];
  const next = team[(index + 1) % team.length];

  return (
    <>
      {/* 1. Executive Bio & Dossier Header */}
      <section className="dossier-hero-section">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tim Kami", href: "/tim" },
              { label: member.fullName },
            ]}
          />

          <div className="dossier-hero-grid">
            {/* Left: Portrait & Quick Action Card */}
            <div className="dossier-portrait-col">
              <div className="dossier-portrait-frame">
                <Image
                  src={member.portrait}
                  fill
                  priority
                  alt={`Foto profil ${member.fullName}`}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="dossier-portrait-img"
                />
              </div>

              <div className="dossier-contact-slab">
                <div className="slab-row">
                  <Mail size={15} />
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
                <div className="slab-row">
                  <Globe size={15} />
                  <span>Bandung, Jawa Barat</span>
                </div>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi%20dengan%20${encodeURIComponent(member.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slab-wa-btn"
                >
                  <MessageSquare size={14} />
                  <span>Hubungi via WhatsApp</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Executive Identity & Specs Matrix */}
            <div className="dossier-identity-col">
              <div className="identity-header">
                <span className="identity-kicker">PROFIL ADVOKAT &amp; PARTNER</span>
                <h1 className="identity-name">{member.fullName}</h1>
                <p className="identity-role">{member.role}</p>
              </div>

              <p className="identity-lead-bio">{member.shortBio}</p>

              {/* Specs Matrix (CV Fast Facts) */}
              <div className="dossier-specs-matrix">
                <div className="spec-card">
                  <div className="spec-icon">
                    <Scale size={16} />
                  </div>
                  <div className="spec-info">
                    <span className="spec-label">FOKUS UTAMA</span>
                    <strong className="spec-value">
                      {member.practiceAreas.slice(0, 2).join(" · ")}
                    </strong>
                  </div>
                </div>

                <div className="spec-card">
                  <div className="spec-icon">
                    <GraduationCap size={16} />
                  </div>
                  <div className="spec-info">
                    <span className="spec-label">GELAR AKADEMIK</span>
                    <strong className="spec-value">
                      {member.education[0]?.degree || "Sarjana Hukum"}
                    </strong>
                  </div>
                </div>

                <div className="spec-card">
                  <div className="spec-icon">
                    <Globe size={16} />
                  </div>
                  <div className="spec-info">
                    <span className="spec-label">BAHASA KERJA</span>
                    <strong className="spec-value">
                      {member.languages.join(" & ")}
                    </strong>
                  </div>
                </div>

                <div className="spec-card">
                  <div className="spec-icon">
                    <Award size={16} />
                  </div>
                  <div className="spec-info">
                    <span className="spec-label">STATUS ADVOKASI</span>
                    <strong className="spec-value">Advokat / Konsultan Aktif</strong>
                  </div>
                </div>
              </div>

              {/* Direct Consultation Action */}
              <div className="dossier-action-bar">
                <Link href="/kontak" className="dossier-btn-primary">
                  <span>Jadwalkan Konsultasi dengan {member.fullName.split(",")[0]}</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/area-praktik" className="dossier-btn-outline">
                  <span>Lihat Area Terkait</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Structured CV & Portfolio Body */}
      <section className="section dossier-cv-section">
        <Container>
          <div className="dossier-cv-layout">
            {/* Left Sticky CV Overview Desk */}
            <aside className="cv-sticky-sidebar">
              <div className="cv-summary-card">
                <span className="cv-card-tag">CURRICULUM VITAE</span>
                <h3 className="cv-card-name">{member.fullName}</h3>
                <p className="cv-card-role">{member.role}</p>

                <nav className="cv-index-nav">
                  <a href="#biografi" className="cv-nav-link">
                    <span>01</span> Biografi &amp; Pendekatan
                  </a>
                  <a href="#spesialisasi" className="cv-nav-link">
                    <span>02</span> Area Praktik
                  </a>
                  <a href="#pengalaman" className="cv-nav-link">
                    <span>03</span> Pengalaman Penanganan
                  </a>
                  <a href="#pendidikan" className="cv-nav-link">
                    <span>04</span> Pendidikan &amp; Kualifikasi
                  </a>
                  <a href="#timeline" className="cv-nav-link">
                    <span>05</span> Perjalanan Profesional
                  </a>
                </nav>

                <div className="cv-sidebar-cta">
                  <span className="sidebar-cta-label">KONSULTASI PERKARA</span>
                  <p className="sidebar-cta-text">
                    Diskusikan situasi hukum Anda secara langsung dan rahasia.
                  </p>
                  <Link href="/kontak" className="sidebar-cta-btn">
                    <span>Mulai Konsultasi</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Main CV Dossier Blocks */}
            <div className="cv-main-content">
              {/* Block 1: Biografi */}
              <section id="biografi" className="cv-dossier-block">
                <div className="dossier-block-header">
                  <span className="block-num">01</span>
                  <h2 className="block-heading">Biografi &amp; Pendekatan Hukum</h2>
                </div>
                <div className="dossier-prose-body">
                  {member.biography.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              {/* Block 2: Area Praktik Spesialisasi */}
              <section id="spesialisasi" className="cv-dossier-block">
                <div className="dossier-block-header">
                  <span className="block-num">02</span>
                  <h2 className="block-heading">Area Praktik &amp; Spesialisasi</h2>
                </div>
                <div className="cv-practices-grid">
                  {member.practiceAreas.map((area, i) => (
                    <div key={area} className="cv-practice-card">
                      <span className="cv-practice-num">0{i + 1}</span>
                      <h3 className="cv-practice-title">{area}</h3>
                      <p className="cv-practice-desc">
                        Pendampingan strategis dan penelaahan regulasi terfokus untuk kebutuhan klien.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Block 3: Pengalaman & Lingkup Penanganan */}
              <section id="pengalaman" className="cv-dossier-block">
                <div className="dossier-block-header">
                  <span className="block-num">03</span>
                  <h2 className="block-heading">Lingkup Penanganan &amp; Pengalaman</h2>
                </div>
                <div className="cv-experience-cards">
                  {member.experience.map((item, i) => (
                    <div key={item.title} className="cv-exp-card">
                      <div className="exp-card-left">
                        <Briefcase size={18} className="exp-icon" />
                        <span className="exp-index">0{i + 1}</span>
                      </div>
                      <div className="exp-card-body">
                        <h3 className="exp-title">{item.title}</h3>
                        <p className="exp-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Block 4: Pendidikan & Kualifikasi */}
              <section id="pendidikan" className="cv-dossier-block">
                <div className="dossier-block-header">
                  <span className="block-num">04</span>
                  <h2 className="block-heading">Pendidikan &amp; Kualifikasi</h2>
                </div>
                <div className="cv-dual-grid">
                  {/* Education */}
                  <div className="cv-credential-box">
                    <div className="cred-box-header">
                      <GraduationCap size={18} />
                      <h3>Riwayat Akademik</h3>
                    </div>
                    <div className="cred-list">
                      {member.education.map((edu) => (
                        <div key={edu.degree} className="cred-item">
                          <strong>{edu.degree}</strong>
                          <span>{edu.institution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="cv-credential-box">
                    <div className="cred-box-header">
                      <Award size={18} />
                      <h3>Kualifikasi Profesional</h3>
                    </div>
                    <div className="cred-list">
                      {member.qualifications.map((qual, i) => (
                        <div key={i} className="cred-item">
                          <strong>{qual}</strong>
                          <span>RPK Law Office Credentials</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Block 5: Timeline Karir */}
              <section id="timeline" className="cv-dossier-block">
                <div className="dossier-block-header">
                  <span className="block-num">05</span>
                  <h2 className="block-heading">Perjalanan Profesional</h2>
                </div>
                <div className="cv-timeline-track">
                  {member.timeline.map((item, i) => (
                    <div key={i} className="timeline-node">
                      <div className="node-year">
                        <Calendar size={13} />
                        <span>{item.year}</span>
                      </div>
                      <div className="node-line-point" />
                      <div className="node-details">
                        <h3 className="node-title">{item.title}</h3>
                        <p className="node-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Next / Prev Partner Navigator */}
      <section className="partner-nav-bar">
        <Container>
          <div className="partner-nav-grid">
            <Link href={`/tim/${prev.slug}`} className="partner-nav-item prev">
              <ArrowLeft size={18} />
              <div className="partner-nav-info">
                <span className="nav-dir-label">ADVOKAT SEBELUMNYA</span>
                <strong className="nav-partner-name">{prev.fullName}</strong>
                <span className="nav-partner-role">{prev.role}</span>
              </div>
            </Link>

            <Link href={`/tim/${next.slug}`} className="partner-nav-item next">
              <div className="partner-nav-info">
                <span className="nav-dir-label">ADVOKAT BERIKUTNYA</span>
                <strong className="nav-partner-name">{next.fullName}</strong>
                <span className="nav-partner-role">{next.role}</span>
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
