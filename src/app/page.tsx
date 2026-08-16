import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Button, Eyebrow, SectionHeading, TextLink } from "@/components/ui";
import { LawyerCard } from "@/components/cards";
import { ConsultationCTA } from "@/components/consultation-cta";
import { PracticeShowcase } from "@/components/practice-showcase";
import { PhilosophySection } from "@/components/philosophy-section";
import { practiceAreas } from "@/data/practice-areas";
import { team } from "@/data/team";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="home-hero hero-editorial-clean">
        <div className="hero-backdrop">
          <Image
            src={siteConfig.images.hero}
            fill
            loading="eager"
            priority
            sizes="100vw"
            alt="Arsitektur kantor RAF Law Office"
            className="hero-bg-image"
          />
          <div className="hero-cinematic-scrim" />
        </div>

        <Container className="hero-editorial-content">
          <div className="hero-lead-box">
            <div className="hero-micro-label">
              <span className="label-line" />
              <span>RPK LAW OFFICE · BANDUNG</span>
            </div>

            <h1 className="hero-title-clean">
              Kejelasan Hukum.<br />
              Langkah <em>Menentukan.</em>
            </h1>

            <div className="hero-cta-clean">
              <Button href="/kontak" className="hero-btn-gold">
                Konsultasi Hukum
              </Button>
              <Link href="/area-praktik" className="hero-explore-link">
                <span>Eksplorasi Layanan</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="hero-bottom-bar">
            <div className="bottom-pills">
              <span>01 Litigasi</span>
              <span className="dot-sep" />
              <span>02 Korporasi</span>
              <span className="dot-sep" />
              <span>03 Advisory</span>
            </div>

            <div className="bottom-meta">
              <span className="live-dot" />
              <span>Virtual Office Bandung</span>
            </div>
          </div>
        </Container>
      </section>

      <section id="tentang" className="section about-editorial-split">
        <Container>
          <div className="about-split-grid">
            <div className="about-split-quote">
              <Eyebrow>Filosofi Kami</Eyebrow>
              <blockquote>
                “Setiap langkah hukum menentukan arah dan <em>kepastian</em> masa depan Anda.”
              </blockquote>
              <p>
                Kami mendampingi individu dan pelaku bisnis melalui analisis yang cermat, komunikasi terbuka, serta pertimbangan risiko yang menyeluruh.
              </p>
              <TextLink href="/tentang-kami">Mengenal RAF Law Office</TextLink>
            </div>

            <div className="about-split-media">
              <div className="media-frame">
                <Image
                  src={siteConfig.images.office}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  alt="Ruang konsultasi RAF Law Office"
                />
                <div className="media-caption-pill">
                  <span className="pill-pulse" />
                  <span>Virtual Office Bandung · Konsultasi Fleksibel</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section practices-home">
        <Container>
          <div className="practice-heading">
            <SectionHeading
              eyebrow="Area Praktik"
              title="Keahlian Hukum Terfokus"
              copy="Pendampingan strategis yang terstruktur dan adaptif sesuai dinamika kebutuhan Anda."
            />
            <TextLink href="/area-praktik">Lihat Semua Area</TextLink>
          </div>

          <PracticeShowcase items={practiceAreas} />
        </Container>
      </section>

      <PhilosophySection />

      <section className="section team-preview">
        <Container>
          <div className="team-heading"><SectionHeading eyebrow="Tim Kami" title="Profesional Hukum di Balik RAF Law Office" copy="Tim yang bekerja secara kolaboratif untuk memberikan pendampingan hukum yang cermat dan bertanggung jawab." /><TextLink href="/tim">Lihat Seluruh Tim</TextLink></div>
          <div className="team-grid">{team.map((member) => <LawyerCard key={member.slug} member={member} />)}</div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
