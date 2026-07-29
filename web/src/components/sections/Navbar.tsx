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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative h-11 w-11 flex-none">
            <Image
              src="/images/pandara-logo.webp"
              alt="Team 506 Pandara panda logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wide text-purple">
              506
            </span>
            <span className="font-brush text-xl leading-none text-purple -mt-1">
              PANDARA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-purple"
                    : "text-text-primary hover:text-purple"
                }`}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-purple" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="text-text-primary lg:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-bg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wider text-text-primary transition-colors hover:bg-purple-deep hover:text-purple"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
