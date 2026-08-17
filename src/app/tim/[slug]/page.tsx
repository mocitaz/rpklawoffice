import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  GraduationCap,
  Mail,
  MessageSquare,
  Scale,
} from "lucide-react";
import { team, getTeamMember } from "@/data/team";
import { Container } from "@/components/ui";
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
        title: `${member.fullName} — ${member.role} Pengacara Bandung`,
        description: `Profil profesional ${member.fullName}, ${member.role} di RPK Law Office Bandung. ${member.shortBio}`,
        keywords: [
          member.fullName.toLowerCase(),
          `${member.fullName.toLowerCase()} pengacara`,
          `${member.fullName.toLowerCase()} advokat`,
          "pengacara bandung",
          "advokat bandung",
          "rpk law office",
        ],
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
  const profileNumber = String(index + 1).padStart(2, "0");
  const verifiedQualifications = member.qualifications.filter(
    (item) => !item.toLowerCase().includes("akan diperbarui"),
  );

  const workingMethod = [
    {
      number: "01",
      title: "Memahami Konteks",
      description: "Mengurai tujuan, dokumen, dan posisi para pihak sebelum menyusun kesimpulan hukum.",
    },
    {
      number: "02",
      title: "Memetakan Risiko",
      description: "Menilai konsekuensi yuridis dan komersial agar setiap pilihan dapat dibandingkan secara jernih.",
    },
    {
      number: "03",
      title: "Merumuskan Langkah",
      description: "Menyampaikan opsi tindakan yang terstruktur, praktis, dan relevan dengan kebutuhan klien.",
    },
  ];

  return (
    <>
      <section className="profile-cv-hero">
        <Container className="profile-cv-hero-shell">
          <div className="profile-cv-identity">
            <div className="profile-cv-topline">
              <Link href="/tim" className="profile-back-link">
                <ArrowLeft size={13} />
                <span>Kembali ke Tim</span>
              </Link>
              <span>PROFIL / {profileNumber}</span>
            </div>

            <span className="profile-cv-kicker">ADVOKAT &amp; PARTNER FIRMA</span>
            <h1>{member.fullName}</h1>
            <div className="profile-role-line">
              <strong>{member.role}</strong>
              <span>RPK Law Office · Bandung</span>
            </div>

            <p className="profile-cv-lead">{member.shortBio}</p>

            <div className="profile-focus-list" aria-label="Fokus praktik">
              {member.practiceAreas.map((area, areaIndex) => (
                <span key={area}>
                  {String(areaIndex + 1).padStart(2, "0")} — {area}
                </span>
              ))}
            </div>

            <div className="profile-cv-actions">
              <Link href="/kontak" className="profile-primary-action">
                <span>Jadwalkan Konsultasi</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi%20dengan%20${encodeURIComponent(member.fullName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-secondary-action"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Firma</span>
              </Link>
            </div>

            <div className="profile-cv-contact-row">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={13} /> {siteConfig.email}
              </a>
              <span>Bahasa: {member.languages.join(" · ")}</span>
              <span>Bandung, Indonesia</span>
            </div>
          </div>

          <figure className="profile-cv-portrait">
            <Image
              src={member.portrait}
              fill
              priority
              alt={`Foto profil ${member.fullName}`}
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <figcaption>
              <span>RPK / PARTNER PROFILE</span>
              <strong>{profileNumber}</strong>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="profile-cv-document">
        <Container>
          <header className="profile-document-header">
            <div>
              <span className="profile-document-kicker">PROFESSIONAL PROFILE</span>
              <h2>Curriculum Vitae</h2>
            </div>
            <p>
              Ringkasan kompetensi, pendekatan, dan lingkup pendampingan profesional{" "}
              {member.fullName.split(",")[0]} di RPK Law Office.
            </p>
          </header>

          <div className="profile-document-layout">
            <aside className="profile-document-sidebar">
              <div className="profile-index-card">
                <span className="profile-index-label">INDEKS PROFIL</span>
                <strong>{profileNumber}</strong>
                <nav>
                  <a href="#ringkasan"><span>01</span> Profil Profesional</a>
                  <a href="#pendekatan"><span>02</span> Pendekatan Kerja</a>
                  <a href="#praktik"><span>03</span> Fokus Praktik</a>
                  <a href="#pengalaman"><span>04</span> Kapabilitas</a>
                  <a href="#pendidikan"><span>05</span> Pendidikan</a>
                </nav>
              </div>

              <div className="profile-availability-card">
                <span>DISKUSI AWAL</span>
                <p>Konsultasi tersedia secara tatap muka maupun daring melalui firma.</p>
                <Link href="/kontak">
                  Hubungi Firma <ArrowRight size={13} />
                </Link>
              </div>
            </aside>

            <main className="profile-document-main">
              <section id="ringkasan" className="profile-document-block profile-summary-block">
                <div className="profile-block-heading">
                  <span>01</span>
                  <h2>Profil Profesional</h2>
                </div>
                <div className="profile-editorial-copy">
                  {member.biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section id="pendekatan" className="profile-document-block">
                <div className="profile-block-heading">
                  <span>02</span>
                  <h2>Pendekatan Kerja</h2>
                </div>
                <div className="profile-method-grid">
                  {workingMethod.map((item) => (
                    <article key={item.number}>
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="praktik" className="profile-document-block">
                <div className="profile-block-heading">
                  <span>03</span>
                  <h2>Fokus Praktik</h2>
                </div>
                <div className="profile-practice-ledger">
                  {member.practiceAreas.map((area, areaIndex) => (
                    <div key={area}>
                      <span>{String(areaIndex + 1).padStart(2, "0")}</span>
                      <h3>{area}</h3>
                      <p>Analisis, penelaahan dokumen, dan rekomendasi terarah sesuai konteks klien.</p>
                      <Scale size={16} />
                    </div>
                  ))}
                </div>
              </section>

              <section id="pengalaman" className="profile-document-block">
                <div className="profile-block-heading">
                  <span>04</span>
                  <h2>Kapabilitas Pendampingan</h2>
                </div>
                <div className="profile-capability-list">
                  {member.experience.map((item, itemIndex) => (
                    <article key={item.title}>
                      <div className="profile-capability-number">
                        <Briefcase size={15} />
                        <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="pendidikan" className="profile-document-block profile-credentials-block">
                <div className="profile-block-heading">
                  <span>05</span>
                  <h2>Pendidikan &amp; Kredensial</h2>
                </div>
                <div className="profile-credential-columns">
                  <div className="profile-credential-column">
                    <div className="profile-credential-title">
                      <GraduationCap size={17} />
                      <h3>Riwayat Akademik</h3>
                    </div>
                    {member.education.map((education) => (
                      <div className="profile-credential-row" key={education.degree}>
                        <Check size={13} />
                        <div>
                          <strong>{education.degree}</strong>
                          {!education.institution.toLowerCase().includes("akan diperbarui") && (
                            <span>{education.institution}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="profile-credential-column">
                    <div className="profile-credential-title">
                      <Award size={17} />
                      <h3>Kualifikasi Profesional</h3>
                    </div>
                    {verifiedQualifications.length > 0 ? (
                      verifiedQualifications.map((qualification) => (
                        <div className="profile-credential-row" key={qualification}>
                          <Check size={13} />
                          <div><strong>{qualification}</strong></div>
                        </div>
                      ))
                    ) : (
                      <p className="profile-credential-note">
                        Informasi kredensial profesional dapat dikonfirmasi melalui RPK Law Office.
                      </p>
                    )}
                  </div>
                </div>
              </section>
            </main>
          </div>
        </Container>
      </section>

      <section className="partner-nav-bar profile-partner-navigation">
        <Container>
          <div className="partner-nav-grid">
            <Link href={`/tim/${prev.slug}`} className="partner-nav-item prev">
              <ArrowLeft size={18} />
              <div className="partner-nav-info">
                <span className="nav-dir-label">PROFIL SEBELUMNYA</span>
                <strong className="nav-partner-name">{prev.fullName}</strong>
                <span className="nav-partner-role">{prev.role}</span>
              </div>
            </Link>

            <Link href={`/tim/${next.slug}`} className="partner-nav-item next">
              <div className="partner-nav-info">
                <span className="nav-dir-label">PROFIL BERIKUTNYA</span>
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
