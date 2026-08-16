import Image from "next/image";
import { Container, Button, SectionHeading, TextLink } from "@/components/ui";
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
      <section className="modern-hero">
        <Container>
          <div className="modern-hero-copy">
            <span className="section-label">RPK Law Office · Bandung</span>
            <h1>Pendampingan hukum untuk keputusan yang lebih tepat.</h1>
            <div className="modern-hero-support">
              <p>Analisis yang cermat, komunikasi yang jelas, dan strategi yang disusun sesuai konteks setiap klien.</p>
              <div className="button-row">
                <Button href="/kontak">Jadwalkan Konsultasi</Button>
                <Button href="/area-praktik" variant="outline">Area Praktik</Button>
              </div>
            </div>
          </div>
          <div className="modern-hero-media">
            <Image src={siteConfig.images.hero} fill loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 1240px" alt="Arsitektur kantor modern" />
            <div className="modern-hero-caption"><span>Roni, Putra & Kusumah</span><span>Law Office</span></div>
          </div>
        </Container>
      </section>

      <section id="tentang" className="section firm-intro">
        <Container>
          <div className="firm-intro-grid">
            <div className="firm-intro-media"><Image src={siteConfig.images.office} fill sizes="(max-width: 768px) 100vw, 48vw" alt="Ruang konsultasi profesional" /></div>
            <div className="firm-intro-copy">
              <span className="section-label">Tentang Firma</span>
              <h2>Persoalan hukum membutuhkan arah yang jelas, bukan jawaban yang terburu-buru.</h2>
              <p>Kami memulai setiap pendampingan dengan memahami fakta, kepentingan, dan risiko secara menyeluruh. Dari sana, kami membantu klien melihat pilihan dan menentukan langkah yang paling relevan.</p>
              <TextLink href="/tentang-kami">Mengenal RPK Law Office</TextLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="section practices-home">
        <Container>
          <div className="practice-heading">
            <SectionHeading eyebrow="Area Praktik" title="Keahlian untuk kebutuhan hukum yang beragam." copy="Layanan yang terstruktur untuk mendampingi individu, perusahaan, dan organisasi." />
            <TextLink href="/area-praktik">Seluruh Area Praktik</TextLink>
          </div>
          <PracticeShowcase items={practiceAreas} />
        </Container>
      </section>

      <PhilosophySection />

      <section className="section team-preview">
        <Container>
          <div className="team-heading"><SectionHeading eyebrow="Tim" title="Profesional yang bekerja dengan satu standar." copy="Kolaborasi, ketelitian, dan tanggung jawab dalam setiap pendampingan." /><TextLink href="/tim">Lihat Seluruh Tim</TextLink></div>
          <div className="team-grid">{team.map((member) => <LawyerCard key={member.slug} member={member} />)}</div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
