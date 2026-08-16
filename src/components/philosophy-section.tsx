import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";

const principles = [
  ["01", "Pendekatan Strategis", "Kami memetakan konteks, risiko, dan tujuan sebelum menyusun langkah hukum yang relevan."],
  ["02", "Komunikasi Transparan", "Pilihan dan konsekuensi dijelaskan secara lugas agar klien dapat mengambil keputusan dengan yakin."],
  ["03", "Fokus pada Klien", "Setiap strategi disesuaikan dengan kebutuhan nyata dan dinamika persoalan yang dihadapi."],
  ["04", "Integritas Profesional", "Kerahasiaan, tanggung jawab, dan standar profesi menjadi dasar setiap pendampingan."],
] as const;

export function PhilosophySection() {
  return (
    <section className="philosophy-system" id="filosofi">
      <Container>
        <div className="philosophy-layout">
          <div className="philosophy-intro">
            <span className="section-label">Cara Kami Bekerja</span>
            <h2>Kejelasan dimulai dari cara berpikir yang terstruktur.</h2>
            <p>Prinsip sederhana yang menjaga setiap pendampingan tetap fokus, terukur, dan dapat dipertanggungjawabkan.</p>
            <Link href="/tentang-kami" className="inline-action">Tentang pendekatan kami <ArrowUpRight size={15} /></Link>
          </div>
          <ol className="principle-list">
            {principles.map(([number, title, copy]) => (
              <li key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
