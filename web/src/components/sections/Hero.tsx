import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-bg">
      <div className="bg-hex absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 flex flex-col justify-center gap-7 px-6 py-16 md:px-10 lg:px-14 lg:py-24">
          <div className="leading-[0.85]">
            <span className="-skew-x-6 block font-display text-7xl text-text-primary sm:text-8xl lg:text-[6.5rem]">
              {heroContent.eyebrow}
            </span>
            <span className="-skew-x-6 -mt-1 block font-brush text-5xl leading-none text-green text-stroke-ink sm:text-6xl lg:text-7xl">
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

        <div className="relative min-h-[320px] lg:min-h-[560px]">
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
        className="pointer-events-none absolute left-[32%] top-1/2 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-3 bg-purple shadow-[0_0_60px_rgba(191,59,234,0.5)] lg:block"
        style={{ borderRadius: "42% 58% 65% 35% / 55% 45% 55% 45%" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[32%] top-1/2 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <Image
          src="/images/pandara-logo.webp"
          alt=""
          fill
          sizes="160px"
          className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-full rotate-[-18deg] lg:block"
      >
        <div className="absolute left-[38%] top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-green/70 to-transparent" />
      </div>
    </section>
  );
}
