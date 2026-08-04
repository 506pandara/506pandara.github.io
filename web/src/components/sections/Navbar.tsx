"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg px-4 pt-4 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3">
        <Link
          href="/"
          className="flex flex-none items-center gap-2.5 rounded-full bg-purple py-2.5 pl-3 pr-5 shadow-[var(--shadow-card)]"
        >
          <span className="relative h-8 w-8 flex-none overflow-hidden rounded-full ring-2 ring-cream/40">
            <Image
              src="/images/pandara-logo.webp"
              alt="Team 506 Pandara panda logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-cream">506</span>
            <span className="font-brush -mt-1 text-sm leading-none text-cream">PANDARA</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 rounded-full bg-ink px-3 py-3 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cap-label rounded-full px-4 py-1.5 transition-colors ${
                  isActive ? "bg-green text-cream" : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-12 flex-none items-center justify-center rounded-xl bg-green-light text-ink lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mx-auto mt-3 max-w-[1400px] overflow-hidden rounded-3xl bg-ink lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="cap-label rounded-full px-4 py-3 text-cream/80 transition-colors hover:bg-green hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <div className="mx-auto max-w-[1400px] pt-4">
        <div className="h-0.5 bg-green-vine" />
      </div>
    </header>
  );
}
