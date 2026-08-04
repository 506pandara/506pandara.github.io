import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import BambooSide from "@/components/ui/BambooSide";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { outreachPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Outreach — 506 Pandara",
};

export default function OutreachPage() {
  return (
    <>
      <Navbar />
      <BambooSide />
      <main id="main-content">
        <PageHero
          eyebrow="In The Community"
          title="Outreach"
          subtitle="Pandara exists to pull more kids, more schools, and more of our community into STEM."
        />
        <section className="px-6 pb-20 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2">
            {outreachPrograms.map((program) => (
              <div
                key={program.title}
                className="rounded-2xl border border-ink/10 bg-bg-card p-7 shadow-[var(--shadow-card)] transition-colors hover:border-purple/50"
              >
                <h3 className="font-display text-xl text-purple">{program.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{program.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
