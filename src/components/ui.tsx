import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span aria-hidden="true" />{children}</p>;
}

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "light"; className?: string }) {
  return <Link className={`button button-${variant} ${className}`} href={href}>{children}<ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" /></Link>;
}

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link className={`text-link ${light ? "text-link-light" : ""}`} href={href}>{children}<ArrowRight size={15} aria-hidden="true" /></Link>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero-grid">
          <Eyebrow>{eyebrow}</Eyebrow>
          <div><h1>{title}</h1><p>{description}</p></div>
        </div>
      </Container>
    </section>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 && <i>/</i>}{item.href ? <Link href={item.href}>{item.label}</Link> : <b>{item.label}</b>}</span>)}</nav>;
}
