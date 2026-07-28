import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { achievements } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rankings — 506 Pandara",
};

export default function RankingsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="By The Numbers"
          title="Rankings"
          subtitle="See how we stack up against the competition."
        />
        <section className="bg-bg px-6 pb-20 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-ink/10 bg-bg-card p-7 transition-colors hover:border-purple/50"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  {item.label}
                </span>
                <p className="mt-3 font-display text-4xl text-green">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
