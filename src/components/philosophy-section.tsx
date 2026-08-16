"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";

const principles = [
  {
    number: "01",
    tag: "ANALISIS & ARAH",
    title: "Pendekatan Strategis",
    copy: "Memahami konteks secara menyeluruh sebelum menentukan langkah hukum yang paling relevan dan terukur bagi kepentingan klien.",
    highlights: [
      "Analisis mendalam terhadap akar permasalahan",
      "Kalkulasi risiko hukum dan komersial sejak awal",
      "Penyusunan peta jalan penyelesaian yang realistis",
    ],
  },
  {
    number: "02",
    tag: "KEJELASAN PROSES",
    title: "Komunikasi Transparan",
    copy: "Menjelaskan setiap tahapan dan kalkulasi risiko secara terbuka agar setiap keputusan bisnis dan personal diambil dengan penuh keyakinan.",
    highlights: [
      "Penyampaian estimasi waktu & progres berkala",
      "Keterbukaan terhadap opsi dan potensi konsekuensi",
      "Komunikasi lugas tanpa terminologi yang berbelit",
    ],
  },
  {
    number: "03",
    tag: "SOLUSI TERARAH",
    title: "Fokus pada Klien",
    copy: "Menyusun strategi dan pendampingan yang disesuaikan secara presisi dengan kebutuhan, dinamika, dan tujuan akhir klien.",
    highlights: [
      "Pendekatan kasus yang dipersonalisasi",
      "Penyelarasan dengan tujuan strategis klien",
      "Pendampingan adaptif sesuai situasi lapangan",
    ],
  },
  {
    number: "04",
    tag: "STANDAR TERTINGGI",
    title: "Integritas Profesional",
    copy: "Menjaga kerahasiaan absolut dan komitmen tanpa kompromi terhadap kode etik advokat dalam setiap langkah representasi hukum.",
    highlights: [
      "Perlindungan kerahasiaan informasi klien",
      "Kepatuhan ketat terhadap kode etik advokat",
      "Tanggung jawab profesional dan integritas beracara",
    ],
  },
];

export function PhilosophySection() {
  const [activeId, setActiveId] = useState<string>("01");

  return (
    <section className="philosophy-modern-deck" id="filosofi">
      <Container>
        {/* Modern Header */}
        <div className="deck-header">
          <div className="deck-header-left">
            <span className="deck-kicker">CARA KAMI BERPIKIR</span>
            <h2 className="deck-title">
              Nasihat yang baik dimulai dengan <em>memahami persoalan</em> secara utuh.
            </h2>
          </div>
          <div className="deck-header-right">
            <p className="deck-subtitle">
              Empat pilar metodologi yang kami terapkan di setiap perkara untuk menghadirkan rasa tenang, transparansi, dan kepastian hukum yang terukur.
            </p>
          </div>
        </div>

        {/* Morphing Interactive Accordion Deck */}
        <div className="deck-accordion" role="tablist" aria-label="Prinsip Kerja & Filosofi">
          {principles.map((item) => {
            const isActive = activeId === item.number;
            return (
              <div
                key={item.number}
                className={`deck-panel ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveId(item.number)}
                onClick={() => setActiveId(item.number)}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
              >
                {/* Collapsed State Vertical Spine */}
                <div className="panel-spine" aria-hidden={isActive}>
                  <span className="spine-num">{item.number}</span>
                  <span className="spine-title">{item.title}</span>
                </div>

                {/* Expanded State Full Details */}
                <div className="panel-expanded" aria-hidden={!isActive}>
                  <div className="panel-top-row">
                    <span className="panel-num-large">{item.number}</span>
                    <span className="panel-tag">{item.tag}</span>
                  </div>

                  <h3 className="panel-title">{item.title}</h3>
                  <p className="panel-copy">{item.copy}</p>

                  <div className="panel-highlights">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="highlight-item">
                        <span className="highlight-dash">—</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="panel-footer">
                    <Link href="/tentang-kami" className="panel-link">
                      <span>Pelajari Penerapan Metodologi</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Bottom Bar */}
        <div className="deck-footer-bar">
          <div className="footer-bar-quote">
            <span className="footer-bar-label">KOMITMEN FIRMA</span>
            <p className="footer-quote-text">
              “Membimbing dengan kejelasan, melindungi dengan integritas, dan melangkah dengan kepastian.”
            </p>
          </div>
          <Link href="/kontak" className="footer-bar-cta">
            <span>Konsultasi Bersama Tim</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
