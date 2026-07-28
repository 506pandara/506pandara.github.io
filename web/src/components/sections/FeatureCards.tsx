import Image from "next/image";
import Link from "next/link";
import { Users, Handshake } from "lucide-react";
import { featureCards } from "@/lib/data";

export default function FeatureCards() {
  const { team, sponsor } = featureCards;

  return (
    <section className="relative bg-bg px-6 pb-24 pt-10 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
        <div className="chamfer relative flex min-h-[340px] flex-col overflow-hidden bg-green sm:flex-row">
          <div className="relative z-10 flex flex-col justify-center gap-4 p-8 sm:w-[52%] sm:p-10">
            <Users className="h-8 w-8 text-cream" strokeWidth={2} />
            <h3 className="font-display text-3xl text-cream sm:text-4xl">
              {team.title}
            </h3>
            <p className="max-w-xs text-sm font-medium text-cream/85">
              {team.description}
            </p>
            <Link
              href={team.href}
              className="mt-2 inline-block w-fit rounded-full border-2 border-cream px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-cream transition-colors hover:bg-cream hover:text-green-deep"
            >
              {team.button}
            </Link>
          </div>

          <div className="relative min-h-[240px] flex-1 border-t-4 border-cream/40 sm:border-l-4 sm:border-t-0">
            <Image
              src="/images/team-picture.webp"
              alt="Team 506 Pandara posing together at a competition"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="chamfer relative min-h-[340px] overflow-hidden bg-lavender">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 100% at 100% 0%, rgba(106,13,173,0.15), transparent 60%)",
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
              className="mt-2 inline-block w-fit rounded-full border-2 border-green px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-green-deep transition-colors hover:bg-green hover:text-cream"
            >
              {sponsor.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
