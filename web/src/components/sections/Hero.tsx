import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-bg">
      <div className="bg-hex absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="leading-[0.9]">
            <span className="-skew-x-3 block font-display text-7xl text-text-primary sm:text-8xl lg:text-[6rem]">
              {heroContent.eyebrow}
            </span>
            <span className="-skew-x-3 -mt-1 block font-brush text-5xl leading-none text-green text-stroke-ink sm:text-6xl lg:text-[4.25rem]">
              {heroContent.wordmark}
            </span>
          </div>

          <h1 className="font-display text-2xl leading-tight sm:text-3xl">
            <span className="block text-text-primary">
              {heroContent.tagline[0]}
            </span>
            <span className="block text-green">{heroContent.tagline[1]}</span>
          </h1>

          <p className="max-w-md text-text-secondary">{heroContent.mission}</p>

          <Link
            href="/meet-the-team/"
            className="chamfer-sm inline-flex w-fit items-center gap-2 bg-green py-3.5 pl-6 pr-9 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            {heroContent.cta}
            <ArrowRight size={18} strokeWidth={3} />
          </Link>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[600px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_100%_50%,var(--purple-deep),var(--bg)_75%)]" />
          <Image
            src="/images/robot-picture.webp"
            alt="Team 506 Pandara's competition robot"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-contain p-8 sm:p-12 lg:p-16"
            priority
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-2 bg-purple shadow-[0_0_50px_rgba(207,63,206,0.45)] lg:block"
        style={{ borderRadius: "42% 58% 65% 35% / 55% 45% 55% 45%" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] lg:block"
      >
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-green/60 to-transparent" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <Image
          src="/images/pandara-logo.webp"
          alt=""
          fill
          sizes="128px"
          className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        />
      </div>
    </section>
  );
}
