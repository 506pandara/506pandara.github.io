import FadeUp from "@/components/motion/FadeUp";
import Float from "@/components/motion/Float";
import { stats } from "@/lib/data";
import { glassCard } from "@/components/ui/glass";

export default function About() {
  return (
    <section id="about" className="relative bg-bg-secondary py-36 md:py-44">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:px-12 lg:px-20 lg:grid-cols-2 lg:gap-24">
        <FadeUp className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-bright">
            About Pandara
          </span>
          <h2 className="font-heading text-4xl font-bold text-balance sm:text-5xl">
            Who We Are
          </h2>
          <p className="text-lg text-text-secondary">
            Founded in 2007 at Palm Harbor University High School, Team 506
            Pandara is a student-led robotics organization competing in the
            FIRST Tech Challenge. Every season, we design, machine, wire, and
            program a competition robot from the ground up.
          </p>
          <p className="text-lg text-text-secondary">
            Pandara operates like a small engineering company — dedicated
            subteams for software, hardware, CAD, and outreach, all working
            toward the same goal: building a robot, and the leaders behind
            it.
          </p>
        </FadeUp>

        <div className="relative flex flex-col gap-6 sm:flex-row lg:flex-col">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1} className="flex-1">
              <Float duration={5 + i} distance={10} delay={i * 0.4}>
                <div
                  className={`${glassCard} flex flex-col gap-2 p-8 ${
                    i === 1 ? "lg:ml-10" : i === 2 ? "lg:ml-4" : ""
                  }`}
                >
                  <span className="font-heading text-5xl font-bold bg-gradient-to-r from-purple-bright to-green bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-[0.15em] text-text-muted">
                    {stat.label}
                  </span>
                </div>
              </Float>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
