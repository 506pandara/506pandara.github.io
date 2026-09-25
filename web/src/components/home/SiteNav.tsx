"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/lib/data";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="nav">
      <Link className="mark" href="/" aria-label="506 Pandara home" />
      <span className="logo">506</span>
      <button
        type="button"
        className={`burger${open ? " open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <s></s>
        <s></s>
        <s></s>
      </button>
      <div className={`nav-menu${open ? " open" : ""}`}>
        {siteNavLinks.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
          return (
            <Link key={link.href} href={link.href} className={isActive ? "on" : undefined}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
