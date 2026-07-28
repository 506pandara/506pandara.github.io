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

          <div
            aria-hidden="true"
            className="animate-float-slow pointer-events-none absolute -right-6 top-6 hidden h-36 w-36 lg:-right-10 lg:top-10 lg:block lg:h-44 lg:w-44"
          >
            <div
              className="absolute inset-0 rotate-3 bg-purple shadow-[0_0_55px_rgba(207,63,206,0.5)]"
              style={{ borderRadius: "42% 58% 65% 35% / 55% 45% 55% 45%" }}
            />
            <div
              className="absolute inset-2 -rotate-6 bg-purple-deep opacity-70"
              style={{ borderRadius: "58% 42% 35% 65% / 45% 55% 45% 55%" }}
            />
            <Image
              src="/images/pandara-logo.webp"
              alt="Team 506 Pandara panda logo"
              fill
              sizes="176px"
              className="relative object-contain p-5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] [image-rendering:pixelated]"
            />
          </div>
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
    </section>
  );
}
