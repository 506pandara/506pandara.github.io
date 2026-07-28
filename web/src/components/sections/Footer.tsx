import Link from "next/link";
import Image from "next/image";
import {
  footerNav,
  footerContact,
  footerSocials,
  footerSponsors,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-purple-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              <li>{footerContact.school}</li>
              <li>{footerContact.location}</li>
              <li className="text-text-muted">{footerContact.email}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Socials
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-muted">
              {footerSocials.map((social) => (
                <li key={social}>{social} — coming soon</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Sponsors
            </h3>
            <p className="mt-4 text-sm text-text-muted">
              {footerSponsors.note}
            </p>
            <Link
              href={footerSponsors.href}
              className="mt-3 inline-block text-sm font-semibold text-green hover:text-green-accent"
            >
              Become a sponsor →
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border-subtle pt-8 text-center text-xs text-text-muted sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-border-subtle">
              <Image
                src="/images/pandara-logo.webp"
                alt="Team 506 Pandara panda logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <p>© 2026 FTC Team 506 Pandara. All rights reserved.</p>
          </div>
          <p>Palm Harbor University High School · Palm Harbor, FL</p>
        </div>
      </div>
    </footer>
  );
}
