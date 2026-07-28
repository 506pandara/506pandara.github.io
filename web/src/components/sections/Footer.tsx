import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Shield } from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";
import {
  footerNav,
  footerTagline,
  footerContact,
  footerSocials,
} from "@/lib/data";

const socialIcons = {
  Instagram: InstagramIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  Mail,
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 opacity-10 sm:h-96 sm:w-96"
      >
        <Image
          src="/images/pandara-logo.webp"
          alt=""
          fill
          sizes="384px"
          className="object-contain"
          style={{ filter: "grayscale(1) sepia(1) hue-rotate(230deg) saturate(4)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative h-11 w-11 flex-none">
                <Image
                  src="/images/pandara-logo.webp"
                  alt="Team 506 Pandara panda logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl text-text-primary">
                  506
                </span>
                <span className="font-brush text-xl leading-none text-green text-stroke-ink -mt-1">
                  PANDARA
                </span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary">{footerTagline}</p>
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-green text-ink transition-transform hover:scale-110"
                  >
                    <Icon size={16} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-green">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-green">Contact Us</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="flex-none text-green" />
                {footerContact.email}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="flex-none text-green" />
                {footerContact.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Shield size={15} className="flex-none text-green" />
                {footerContact.program}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-text-muted">
          © 2026 506 Pandara. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
