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
    <footer id="contact" className="px-4 pb-6 md:px-6 lg:px-8">
      <div className="bg-dotgrid relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-ink px-6 py-14 text-cream md:px-10 lg:px-14">
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
            style={{ filter: "grayscale(1) brightness(2)" }}
          />
        </div>

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative h-11 w-11 flex-none overflow-hidden rounded-full ring-2 ring-cream/30">
                <Image
                  src="/images/pandara-logo.webp"
                  alt="Team 506 Pandara panda logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl text-cream">506</span>
                <span className="font-brush -mt-1 text-xl leading-none text-green-light">
                  PANDARA
                </span>
              </span>
            </Link>
            <p className="text-sm text-cream/70">{footerTagline}</p>
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-green-light text-ink transition-transform hover:scale-110"
                  >
                    <Icon size={16} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="cap-label text-green-light">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="cap-label text-green-light">Contact Us</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/80">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="flex-none text-green-light" />
                {footerContact.email}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="flex-none text-green-light" />
                {footerContact.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Shield size={15} className="flex-none text-green-light" />
                {footerContact.program}
              </li>
            </ul>
          </div>
        </div>

        <div className="cap-label relative mt-14 border-t border-cream/15 pt-6 text-center text-cream/50">
          © 2026 506 Pandara. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
