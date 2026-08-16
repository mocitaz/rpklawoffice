import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/data/practice-areas";

export function PracticeShowcase({ items }: { items: PracticeArea[] }) {
  return (
    <div className="practice-directory">
      {items.map((area, index) => (
        <Link key={area.slug} href={`/area-praktik/${area.slug}`} className="practice-directory-row">
          <span className="practice-directory-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="practice-directory-main">
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
