"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/kontak">Jadwalkan Konsultasi <ArrowUpRight size={15} /></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigasi seluler">{navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}</nav>
        <div className="mobile-contact"><p>Konsultasi & Informasi</p><Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link></div>
      </div>
    </header>
  );
}
