import type { Metadata } from "next";
import { Check } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import BambooSide from "@/components/ui/BambooSide";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { sponsorBenefits, footerContact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sponsor Us — 506 Pandara",
};

export default function SponsorUsPage() {
  return (
    <>
      <Navbar />
      <BambooSide />
      <main id="main-content">
        <PageHero
          eyebrow="Partner With Us"
          title="Become A Sponsor"
          subtitle="Partner with us to inspire the next generation and fuel innovation."
        />
        <section className="px-6 pb-20 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {sponsorBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/15 text-green">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-bg-card p-10 text-center shadow-[var(--shadow-card)]">
              <a
                href="/contact/"
                className="chamfer-sm btn-green-gradient inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-wide text-cream shadow-[0_10px_24px_rgba(23,34,15,0.25)] transition-transform hover:scale-[1.03]"
              >
                Become a Sponsor
              </a>
              <p className="text-sm text-text-muted">{footerContact.email}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
