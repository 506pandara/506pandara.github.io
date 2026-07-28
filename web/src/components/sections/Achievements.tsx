import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";
import { glassCard } from "@/components/ui/glass";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-36 md:py-44">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="By the Numbers"
          title="Achievements"
          subtitle="Our competition results, updated every season."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <FadeUp key={item.label} delay={(i % 3) * 0.08}>
              <div
                className={`${glassCard} h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-bright/40 hover:shadow-[var(--shadow-glow-purple)]`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
                  {item.label}
                </span>
                <p className="mt-3 font-heading text-4xl font-bold bg-gradient-to-r from-purple-bright to-green bg-clip-text text-transparent">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.subtitle}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
