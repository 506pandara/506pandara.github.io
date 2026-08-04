import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meet The Team — 506 Pandara",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function MeetTheTeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="The People"
          title="Meet The Team"
          subtitle="Get to know the students, mentors, and leaders behind 506 Pandara."
        />
        <section className="px-6 pb-20 md:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((member) => (
              <div
                key={member.name}
                className={`flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-bg-card shadow-[var(--shadow-card)] p-6 text-center transition-colors hover:border-purple/50 ${
                  member.placeholder ? "opacity-70" : ""
                }`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full font-display text-lg ${
                    member.placeholder
                      ? "border border-dashed border-ink/20 text-text-muted"
                      : "bg-purple text-white"
                  }`}
                >
                  {initials(member.name)}
                </div>
                <h3 className="font-display text-base text-text-primary">
                  {member.placeholder ? member.role : member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-green">
                  {member.placeholder ? "Position Open" : member.role}
                </p>
                <p className="text-xs text-text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
