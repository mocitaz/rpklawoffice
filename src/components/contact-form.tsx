"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Shield, RefreshCw } from "lucide-react";

const practiceOptions = [
  "Hukum Korporasi & Komersial",
  "Penyelesaian Sengketa",
  "Litigasi Perdata",
  "Hukum Ketenagakerjaan",
  "Properti & Real Estat",
  "Kepatuhan & Regulasi",
  "Lainnya",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedArea, setSelectedArea] = useState(practiceOptions[0]);
  const [sessionType, setSessionType] = useState<"tatap-muka" | "online">("tatap-muka");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="concierge-form-success" role="status">
        <div className="success-badge-icon">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="success-heading">Permintaan Konsultasi Diterima</h3>
        <p className="success-desc">
          Terima kasih telah menghubungi RPK Law Office. Tim advokat kami akan menelaah ringkasan perkara Anda dan menghubungi kembali via WhatsApp/Email dalam 1x24 jam kerja.
        </p>
        <div className="success-demo-box">
          <span>Mode Demonstrasi Antarmuka</span>
          <p>Formulir ini berfungsi sebagai simulasi alur komunikasi klien.</p>
        </div>
        <button
          type="button"
          className="btn-reset-form"
          onClick={() => setSubmitted(false)}
        >
          <RefreshCw size={14} />
          <span>Kirim Permintaan Baru</span>
        </button>
      </div>
    );
  }

  return (
    <form className="concierge-form-card" onSubmit={handleSubmit}>
      <div className="form-card-top">
        <div>
          <span className="form-badge-pill">FORMULIR PENDAFTARAN KONSULTASI</span>
          <h3 className="form-card-title">Sampaikan Kebutuhan Hukum Anda</h3>
        </div>
        <div className="form-privacy-tag">
          <Shield size={14} />
          <span>Kerahasiaan Terjamin</span>
        </div>
      </div>

      {/* Row 1: Identitas */}
      <div className="form-block">
        <label className="block-title">01. DATA PEMOHON / KLIEN</label>
        <div className="form-input-grid">
          <div className="input-field">
            <label htmlFor="c-name">Nama Lengkap *</label>
            <input
              id="c-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="cth. Hendra Gunawan, S.E."
            />
          </div>
          <div className="input-field">
            <label htmlFor="c-email">Email Resmi / Pribadi *</label>
            <input
              id="c-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="nama@perusahaan.com"
            />
          </div>
          <div className="input-field">
            <label htmlFor="c-phone">Nomor Telepon / WhatsApp *</label>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="cth. 0812 3456 7890"
            />
          </div>
          <div className="input-field">
            <label htmlFor="c-org">Perusahaan / Entitas Bisnis</label>
            <input
              id="c-org"
              name="organization"
              type="text"
              autoComplete="organization"
              placeholder="Nama PT / CV / Pribadi"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Bidang Masalah */}
      <div className="form-block">
        <label className="block-title">02. FOKUS AREA HUKUM &amp; PREFERENSI SESI</label>
        <div className="area-pill-row">
          {practiceOptions.map((area) => (
            <button
              type="button"
              key={area}
              className={`area-pill ${selectedArea === area ? "selected" : ""}`}
              onClick={() => setSelectedArea(area)}
            >
              {area}
            </button>
          ))}
        </div>
        <input type="hidden" name="practice_area" value={selectedArea} />

        <div className="session-choice-row">
          <button
            type="button"
            className={`session-card ${sessionType === "tatap-muka" ? "active" : ""}`}
            onClick={() => setSessionType("tatap-muka")}
          >
            <strong>Tatap Muka Terjadwal</strong>
            <span>Pertemuan langsung di kantor Bandung atau lokasi yang disepakati</span>
          </button>
          <button
            type="button"
            className={`session-card ${sessionType === "online" ? "active" : ""}`}
            onClick={() => setSessionType("online")}
          >
            <strong>Konsultasi Daring (Video Call)</strong>
            <span>Sesi Zoom / Google Meet untuk klien luar kota dan efisiensi waktu</span>
          </button>
        </div>
        <input type="hidden" name="session_type" value={sessionType} />
      </div>

      {/* Row 3: Ringkasan Pokok */}
      <div className="form-block">
        <label className="block-title">03. RINGKASAN PERSOALAN</label>
        <div className="input-field full-width">
          <label htmlFor="c-message">Uraian Pokok Masalah / Dokumen yang Dimiliki *</label>
          <textarea
            id="c-message"
            name="message"
            rows={4}
            required
            placeholder="Jelaskan secara ringkas kronologi, pihak-pihak terkait, dokumen yang telah dimiliki, atau langkah yang ingin diambil..."
          />
        </div>
      </div>

      {/* Terms & Agreement */}
      <label className="form-checkbox-row">
        <input type="checkbox" required />
        <span>
          Saya menyetujui bahwa informasi ini dikirimkan untuk permohonan konsultasi awal dan dilindungi standar kerahasiaan profesi advokat RPK Law Office.
        </span>
      </label>

      {/* Action Button */}
      <button type="submit" className="btn-form-submit">
        <span>Kirim Permintaan Konsultasi</span>
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
