import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";
import Float from "@/components/motion/Float";
import { glassCard } from "@/components/ui/glass";
import { robotSpecs } from "@/lib/data";

export default function Robot() {
  return (
    <section id="robot" className="relative bg-bg-secondary py-36 md:py-44">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="Engineering"
          title="Our Robot"
          subtitle="Built, wired, and programmed in-house — season after season."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeUp className="mx-auto w-full max-w-lg lg:max-w-none">
            <Float duration={6.5} distance={14}>
              <div
                className={`${glassCard} relative aspect-square overflow-hidden p-8 shadow-[var(--shadow-glow-green)]`}
              >
                <Image
                  src="/images/robot-picture.webp"
                  alt="Team 506 Pandara's competition robot, front three-quarter view"
                  fill
                  sizes="(min-width: 1024px) 600px, 90vw"
                  className="object-contain p-8"
                />
              </div>
            </Float>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {robotSpecs.map((spec, i) => (
              <FadeUp key={spec.label} delay={i * 0.1}>
                <div
                  className={`${glassCard} group h-full p-7 hover:border-green/50`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
                    {spec.label}
                  </span>
                  <p className="mt-2 font-heading text-xl font-semibold text-text-primary transition-colors group-hover:text-green">
                    {spec.value}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
