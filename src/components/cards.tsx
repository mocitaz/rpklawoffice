import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/data/team";

export function LawyerCard({ member }: { member: TeamMember }) {
  return (
    <Link className="lawyer-card" href={`/tim/${member.slug}`} aria-label={`Lihat profil ${member.fullName}`}>
      <div className="lawyer-image">
        <Image src={member.portrait} fill sizes="(max-width: 768px) 100vw, 33vw" alt={`Portrait ${member.fullName}`} />
      </div>
      <div className="lawyer-info">
        <p>{member.role}</p>
        <h3>{member.fullName}</h3>
        <ul>{member.practiceAreas.slice(0, 3).map((area) => <li key={area}>{area}</li>)}</ul>
        <span>Lihat Profil <ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}
