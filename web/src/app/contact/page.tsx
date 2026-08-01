import type { Metadata } from "next";
import { Mail, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import BambooSide from "@/components/ui/BambooSide";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { footerContact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — 506 Pandara",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <BambooSide />
      <main id="main-content">
        <PageHero
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Questions about Team 506, sponsorship, or mentorship? We'd love to hear from you."
        />
        <section className="px-6 pb-20 md:px-10 lg:px-14">
          <div className="mx-auto flex max-w-2xl flex-col gap-5 rounded-2xl border border-ink/10 bg-bg-card shadow-[var(--shadow-card)] p-8">
            <div className="flex items-center gap-3 text-text-secondary">
              <Mail size={18} className="text-green" />
              {footerContact.email}
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <MapPin size={18} className="text-green" />
              {footerContact.location}
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <Shield size={18} className="text-green" />
              {footerContact.program}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
