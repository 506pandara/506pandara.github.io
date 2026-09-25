"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/lib/data";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <div className="nav">
      <Link className="mark" href="/" aria-label="506 Pandara home" />
      <span className="logo">506</span>
      <div className="navlinks">
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
