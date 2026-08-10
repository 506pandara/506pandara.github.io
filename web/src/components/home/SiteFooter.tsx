import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { siteNavLinks, footerTagline, footerContact, footerSocials, homeFoot } from "@/lib/data";

const socialIcons = {
  Instagram: InstagramIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  Mail,
};

export default function SiteFooter() {
  return (
    <div className="sitefoot">
      <div className="sitefoot-grid">
        <div className="sitefoot-brand">
          <Link href="/" className="mark2">
            <span className="logo2">506</span>
            <span className="stamp2">Pandara</span>
          </Link>
          <p>{footerTagline}</p>
          <div className="sitefoot-social">
            {footerSocials.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <Icon size={14} strokeWidth={2.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3>Site</h3>
          <ul>
            {siteNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <Mail size={13} />
              {footerContact.email}
            </li>
            <li>
              <MapPin size={13} />
              {footerContact.location}
            </li>
            <li>
              <span>{footerContact.program}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot">
        <span>{homeFoot.left}</span>
        <span>{homeFoot.center}</span>
        <span className="r">
          {homeFoot.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </span>
      </div>
    </div>
  );
}
