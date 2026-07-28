import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/motion/FadeUp";
import { glassCard } from "@/components/ui/glass";
import { team } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Team() {
  return (
    <section id="team" className="relative bg-bg-secondary py-36 md:py-44">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="The People"
          title="Meet the Team"
          subtitle="The students designing, building, and driving Pandara."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={(i % 5) * 0.06}>
              <div
                className={`${glassCard} group flex h-full flex-col items-center gap-4 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-bright/40 hover:shadow-[var(--shadow-glow-purple)] ${
                  member.placeholder ? "opacity-70" : ""
                }`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full font-heading text-lg font-semibold ${
                    member.placeholder
                      ? "border border-dashed border-border-subtle text-text-muted"
                      : "bg-gradient-to-br from-purple to-purple-dark text-white"
                  }`}
                >
                  {initials(member.name)}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold">
                    {member.placeholder ? member.role : member.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-purple-bright">
                    {member.placeholder ? "Position Open" : member.role}
                  </p>
                </div>
                <p className="text-xs text-text-muted">{member.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
