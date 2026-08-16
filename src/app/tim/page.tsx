import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container, Breadcrumb } from "@/components/ui";
import { ConsultationCTA } from "@/components/consultation-cta";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Tim Kami — Advokat & Partner",
  description:
    "Kenali advokat dan konsultan hukum di balik RPK Law Office yang berkomitmen memberikan pendampingan strategis dan terpercaya.",
};

export default function TeamPage() {
  return (
    <>
      <section className="team-directory-hero">
        <Container>
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tim Kami" },
            ]}
          />

          <div className="team-hero-header">
            <span className="team-kicker">ADVOKAT &amp; PARTNER FIRMA</span>
            <h1 className="team-main-heading">
              Keahlian Terfokus. <em>Komitmen Nyata.</em>
            </h1>
            <p className="team-hero-desc">
              Tim advokat RPK Law Office memadukan ketajaman analisis yuridis dengan pemahaman komersial untuk mendampingi setiap kebutuhan dan melindungi kepentingan hukum klien.
            </p>
          </div>
        </Container>
      </section>

      <section className="section team-roster-section">
        <Container>
          <div className="team-roster-grid">
            {team.map((member, index) => (
              <article key={member.slug} className="roster-card">
                <Link href={`/tim/${member.slug}`} className="roster-portrait-link">
                  <div className="roster-portrait-frame">
                    <Image
                      src={member.portrait}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Foto profil ${member.fullName}`}
                      className="roster-portrait-img"
                    />
                    <span className="roster-index-badge">0{index + 1}</span>
                  </div>
                </Link>

                <div className="roster-content">
                  <div className="roster-header-row">
                    <span className="roster-role-tag">{member.role}</span>
                  </div>

                  <h2 className="roster-name">
                    <Link href={`/tim/${member.slug}`}>{member.fullName}</Link>
                  </h2>

                  <p className="roster-bio-snippet">{member.shortBio}</p>

                  <div className="roster-practices-tags">
                    {member.practiceAreas.slice(0, 3).map((area) => (
                      <span key={area} className="roster-pill">
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="roster-footer-row">
                    <Link href={`/tim/${member.slug}`} className="roster-detail-btn">
                      <span>Lihat Profil &amp; Riwayat</span>
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`mailto:${member.email}`}
                      className="roster-email-btn"
                      title={`Kirim email ke ${member.fullName}`}
                    >
                      <Mail size={15} />
                    </a>
                  </div>
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
