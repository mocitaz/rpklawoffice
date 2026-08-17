import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  FileSearch,
  MessageSquare,
  Route,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { team } from "@/data/team";
import { Container } from "@/components/ui";
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
        title: `${area.title} Bandung — Advokat & Konsultan Hukum`,
        description: `${area.description} Layanan advokasi dan pendampingan hukum di Bandung oleh RPK Law Firm.`,
        keywords: [
          `pengacara ${area.shortTitle.toLowerCase()} bandung`,
          `advokat ${area.shortTitle.toLowerCase()} bandung`,
          `hukum ${area.shortTitle.toLowerCase()} bandung`,
          "rpk law firm",
          "rpk law office",
          "lawyer bandung",
        ],
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
  const practiceNumber = String(index + 1).padStart(2, "0");

  const relatedLawyers = team.filter((member) =>
    member.practiceAreas.some(
      (practice) =>
        practice.toLowerCase().includes(area.shortTitle.toLowerCase()) ||
        area.title.toLowerCase().includes(practice.toLowerCase()),
    ),
  );
  const displayLawyers = relatedLawyers.length > 0 ? relatedLawyers : team.slice(0, 2);

  const servicePhases = [
    {
      number: "01",
      icon: FileSearch,
      title: "Diagnostik Awal",
      description: "Penelaahan fakta, dokumen, hubungan para pihak, dan posisi hukum awal klien.",
    },
    {
      number: "02",
      icon: Route,
      title: "Pemetaan Strategi",
      description: "Penyusunan opsi, kalkulasi risiko, prioritas, serta skenario penyelesaian yang relevan.",
    },
    {
      number: "03",
      icon: Briefcase,
      title: "Eksekusi & Evaluasi",
      description: "Pelaksanaan langkah hukum disertai koordinasi, dokumentasi, dan evaluasi berkala.",
    },
  ];

  const serviceStandards = [
    "Peta isu dan posisi hukum yang mudah dipahami",
    "Opsi tindakan beserta konsekuensi dan prioritasnya",
    "Dokumentasi serta korespondensi yang tertata",
    "Pembaruan perkembangan dan rekomendasi lanjutan",
  ];

  return (
    <>
      <section className="service-dossier-hero">
        <Container>
          <div className="service-hero-topline">
            <Link href="/area-praktik">
              <ArrowLeft size={13} />
              <span>Kembali ke Area Praktik</span>
            </Link>
            <span>AREA PRAKTIK / {practiceNumber}</span>
          </div>

          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <span className="service-hero-kicker">LAYANAN HUKUM TERFOKUS</span>
              <h1>{area.title}</h1>
              <p>{area.intro}</p>

              <div className="service-hero-actions">
                <Link href="/kontak" className="service-hero-primary">
                  <span>Diskusikan Perkara</span>
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20RPK%20Law%20Office,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(area.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-hero-secondary"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Firma</span>
                </Link>
              </div>
            </div>

            <figure className="service-hero-visual">
              <Image
                src={area.image}
                fill
                priority
                alt={`Ilustrasi layanan ${area.title}`}
                sizes="(max-width: 768px) 100vw, 560px"
              />
              <figcaption>
                <span>RPK / LEGAL PRACTICE</span>
                <strong>{practiceNumber}</strong>
              </figcaption>
            </figure>
          </div>

          <div className="service-hero-facts" aria-label="Ringkasan layanan">
            <div><Scale size={14} /><span><strong>{area.scope.length}</strong> Lingkup Penanganan</span></div>
            <div><Briefcase size={14} /><span>Partner-Led Strategy</span></div>
            <div><ShieldCheck size={14} /><span>Kerahasiaan Profesional</span></div>
          </div>
        </Container>
      </section>

      <section className="service-dossier-document">
        <Container>
          <header className="service-document-header">
            <div>
              <span>REPRESENTASI TERSTRUKTUR</span>
              <h2>Dari persoalan awal menuju langkah hukum yang terukur.</h2>
            </div>
            <p>
              Setiap mandat dimulai dari pemahaman konteks dan tujuan klien, lalu diterjemahkan
              menjadi pilihan strategi yang jelas, proporsional, dan dapat dijalankan.
            </p>
          </header>

          <div className="service-document-layout">
            <aside className="service-document-sidebar">
              <div className="service-index-card">
                <span>INDEKS LAYANAN</span>
                <strong>{practiceNumber}</strong>
                <nav>
                  <a href="#overview"><span>01</span> Ikhtisar Layanan</a>
                  <a href="#scope"><span>02</span> Lingkup Penanganan</a>
                  <a href="#process"><span>03</span> Proses Representasi</a>
                  <a href="#standards"><span>04</span> Standar Kerja</a>
                </nav>
              </div>

              <div className="service-consult-card">
                <span>KONSULTASI BIDANG INI</span>
                <h3>{area.shortTitle}</h3>
                <p>Diskusikan posisi hukum dan langkah awal secara rahasia bersama tim kami.</p>
                <Link href="/kontak">
                  Mulai Konsultasi <ArrowRight size={13} />
                </Link>
              </div>

              <div className="service-lawyer-list">
                <span>ADVOKAT TERKAIT</span>
                {displayLawyers.map((lawyer) => (
                  <Link href={`/tim/${lawyer.slug}`} key={lawyer.slug}>
                    <div>
                      <Image
                        src={lawyer.portrait}
                        fill
                        sizes="42px"
                        alt={lawyer.fullName}
                      />
                    </div>
                    <p><strong>{lawyer.fullName}</strong><span>{lawyer.role}</span></p>
                    <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
            </aside>

            <main className="service-document-main">
              <section id="overview" className="service-document-block service-overview-block">
                <div className="service-block-heading">
                  <span>01</span>
                  <h2>Ikhtisar Layanan</h2>
                </div>
                <div className="service-overview-copy">
                  <p>{area.description}</p>
                  <p>
                    Pendampingan dimulai dengan penelaahan menyeluruh terhadap fakta material,
                    dokumen, kepentingan para pihak, dan kemungkinan konsekuensi. Hasil analisis
                    tersebut menjadi dasar dalam merumuskan pilihan langkah yang sesuai dengan
                    posisi serta tujuan klien.
                  </p>
                </div>
                <div className="service-principle-bar">
                  <span>01 · ANALISIS</span>
                  <span>02 · STRATEGI</span>
                  <span>03 · REPRESENTASI</span>
                </div>
              </section>

              <section id="scope" className="service-document-block">
                <div className="service-block-heading">
                  <span>02</span>
                  <h2>Lingkup Penanganan</h2>
                </div>
                <div className="service-scope-ledger">
                  {area.scope.map((item, itemIndex) => (
                    <div key={item}>
                      <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                      <h3>{item}</h3>
                      <p>Penelaahan dan pendampingan terarah sesuai dokumen, risiko, dan kebutuhan perkara.</p>
                      <Check size={15} />
                    </div>
                  ))}
                </div>
              </section>

              <section id="process" className="service-document-block">
                <div className="service-block-heading">
                  <span>03</span>
                  <h2>Proses Representasi</h2>
                </div>
                <div className="service-process-grid">
                  {servicePhases.map((phase) => {
                    const Icon = phase.icon;
                    return (
                      <article key={phase.number}>
                        <div><span>{phase.number}</span><Icon size={17} /></div>
                        <h3>{phase.title}</h3>
                        <p>{phase.description}</p>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section id="standards" className="service-document-block service-standards-block">
                <div className="service-block-heading">
                  <span>04</span>
                  <h2>Standar Kerja &amp; Deliverables</h2>
                </div>
                <div className="service-standard-layout">
                  <div className="service-assurance-panel">
                    <ShieldCheck size={22} />
                    <span>KERAHASIAAN PROFESIONAL</span>
                    <h3>Strategi dijaga. Komunikasi dibuat jelas.</h3>
                    <p>
                      Informasi dan dokumen klien ditangani secara terbatas dengan komunikasi
                      mengenai risiko, tahapan, serta perkembangan mandat yang transparan.
                    </p>
                  </div>
                  <div className="service-deliverable-list">
                    {serviceStandards.map((standard, standardIndex) => (
                      <div key={standard}>
                        <span>{String(standardIndex + 1).padStart(2, "0")}</span>
                        <p>{standard}</p>
                        <Check size={14} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </div>
        </Container>
      </section>

      <section className="practice-nav-bar service-practice-navigation">
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
