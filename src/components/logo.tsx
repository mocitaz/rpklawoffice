import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo logo-image ${light ? "logo-light" : ""}`}
      aria-label="Roni, Putra & Kusumah Law Office — Beranda"
    >
      <Image
        src={light ? "/images/brand/rpk-logo-light.png" : "/images/brand/rpk-logo-dark.png"}
        width={1169}
        height={516}
        sizes="(max-width: 768px) 132px, 158px"
        alt="RPK — Roni, Putra & Kusumah Law Office"
        priority
      />
    </Link>
  );
}
