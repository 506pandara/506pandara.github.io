import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { robotSpecs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Robot — 506 Pandara",
};

export default function OurRobotPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Engineering"
          title="Our Robot"
          subtitle="Built with precision. Driven by purpose."
        />
        <section className="bg-bg px-6 pb-20 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-bg-card">
              <Image
                src="/images/robot-picture.webp"
                alt="Team 506 Pandara's competition robot"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-contain p-8"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {robotSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-ink/10 bg-bg-card p-6 transition-colors hover:border-green/50"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    {spec.label}
                  </span>
                  <p className="mt-2 font-display text-xl text-text-primary">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
