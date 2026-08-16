"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/data/practice-areas";

export function PracticeShowcase({ items }: { items: PracticeArea[] }) {
  const [activeSlug, setActiveSlug] = useState<string>(items[0]?.slug || "");
  const activeArea = items.find((i) => i.slug === activeSlug) || items[0];
  const activeIndex = items.findIndex((i) => i.slug === activeSlug);

  return (
    <div className="practice-hub-unified">
      {/* Segmented Clean Nav Bar */}
      <div className="hub-nav-grid">
        {items.map((area, index) => {
          const isActive = area.slug === activeArea.slug;
          return (
            <button
              key={area.slug}
              type="button"
              className={`hub-nav-item ${isActive ? "active" : ""}`}
              onClick={() => setActiveSlug(area.slug)}
            >
              <span className="nav-num">0{index + 1}</span>
              <span className="nav-title">{area.shortTitle || area.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Showcase Stage */}
      <div className="hub-stage-card">
        <div className="stage-content">
          <div className="stage-header-meta">
            <span className="stage-kicker">AREA PRAKTIK SPESIALISASI</span>
            <span className="stage-counter">0{activeIndex + 1} / 0{items.length}</span>
          </div>

          <h3 className="stage-title">{activeArea.title}</h3>
          <p className="stage-intro">{activeArea.intro}</p>

          <div className="stage-scopes-box">
            <div className="scopes-header">
              <span className="scopes-title">Ruang Lingkup Layanan</span>
              <span className="scopes-badge">{activeArea.scope.length} Bidang Cakupan</span>
            </div>
            <div className="scopes-grid">
              {activeArea.scope.map((item) => (
                <div key={item} className="scope-pill-item">
                  <span className="scope-dash">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stage-actions">
            <Link href={`/area-praktik/${activeArea.slug}`} className="btn-stage-primary">
              <span>Konsultasi Area Ini</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/kontak" className="btn-stage-outline">
              <span>Hubungi Kantor</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="stage-visual">
          <div className="visual-wrapper">
            <Image
              src={activeArea.image || "/images/office/boardroom.png"}
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              alt={`Praktik ${activeArea.title}`}
              className="visual-img"
              key={activeArea.slug}
            />
            <div className="visual-gradient" />
            <div className="visual-card-floating">
              <div className="floating-inner">
                <span className="floating-label">RPK LAW OFFICE</span>
                <p className="floating-text">{activeArea.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
