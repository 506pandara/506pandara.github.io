import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "World Championships — 506 Pandara",
};

export default function WorldChampionshipsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Our History"
          title="World Championships"
          subtitle="Our journey to the world's biggest stage."
        />
        <section className="px-6 pb-20 md:px-10 lg:px-14">
          <ol className="mx-auto flex max-w-3xl flex-col gap-10 border-l border-ink/10 pl-8">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-green" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-text">
                  {item.year}
                </span>
                <h3 className="mt-1 font-display text-2xl text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-text-secondary">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
