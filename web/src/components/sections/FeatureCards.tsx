import Image from "next/image";
import Link from "next/link";
import { Users, Handshake } from "lucide-react";
import { featureCards } from "@/lib/data";

export default function FeatureCards() {
  const { team, sponsor } = featureCards;

  return (
    <section className="relative bg-bg px-6 pb-20 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="chamfer relative min-h-[280px] overflow-hidden bg-green">
          <div className="duotone-green absolute inset-0">
            <Image
              src="/images/team-picture.webp"
              alt="Team 506 Pandara posing together at a competition"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green via-green/85 to-transparent" />

          <div className="relative flex h-full flex-col justify-center gap-4 p-8 sm:p-10">
            <Users className="h-8 w-8 text-ink" strokeWidth={2} />
            <h3 className="font-display text-3xl text-ink sm:text-4xl">
              {team.title}
            </h3>
            <p className="max-w-xs text-sm font-medium text-ink/80">
              {team.description}
            </p>
            <Link
              href={team.href}
              className="mt-2 inline-block w-fit rounded-full border-2 border-ink px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-green"
            >
              {team.button}
            </Link>
          </div>
        </div>

        <div className="chamfer relative min-h-[280px] overflow-hidden bg-lavender">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "repeating-linear-gradient(115deg, transparent 0 18px, var(--purple) 18px 20px)",
            }}
          />
          <div className="relative flex h-full flex-col justify-center gap-4 p-8 sm:p-10">
            <Handshake className="h-8 w-8 text-purple-text" strokeWidth={2} />
            <h3 className="font-display text-3xl text-purple-text sm:text-4xl">
              {sponsor.title}
            </h3>
            <p className="max-w-xs text-sm font-medium text-ink/70">
              {sponsor.description}
            </p>
            <Link
              href={sponsor.href}
              className="mt-2 inline-block w-fit rounded-full border-2 border-green px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-green-deep transition-colors hover:bg-green hover:text-ink"
            >
              {sponsor.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
