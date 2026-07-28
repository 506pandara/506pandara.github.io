import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";
import { glassCard } from "@/components/ui/glass";
import { timeline } from "@/lib/data";

export default function Worlds() {
  return (
    <section className="relative py-36 md:py-44">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="Our History"
          title="World Championships"
          subtitle="Our journey to the world's biggest stage."
        />

        <FadeUp
          className={`${glassCard} grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2`}
        >
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/team-picture.webp"
              alt="Team 506 Pandara celebrating with medals and trophies at the FIRST Tech Challenge World Championship"
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-full border border-border-subtle bg-bg-primary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary backdrop-blur-md">
              World Championship Photo
            </div>
          </div>

          <div className="flex flex-col gap-10 p-8 sm:p-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-3xl font-bold sm:text-4xl">
                Road to Worlds
              </h3>
              <p className="text-text-secondary">
                From our first bare-bones robot in 2007 to a state alliance
                captain and World Championship qualifier, Pandara&apos;s
                growth has been built one season, one robot, and one lesson
                at a time.
              </p>
            </div>

            <ol className="relative flex flex-col gap-8 border-l border-border-subtle pl-8">
              {timeline.map((item, i) => (
                <FadeUp
                  as="li"
                  key={item.title}
                  delay={i * 0.08}
                  className="relative"
                >
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-purple-bright shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green">
                    {item.year}
                  </span>
                  <h4 className="mt-1 font-heading text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.description}
                  </p>
                </FadeUp>
              ))}
            </ol>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
