import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="bg-leaves relative overflow-hidden">
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-20 md:px-10 lg:px-14 lg:py-28">
          <div className="leading-[0.9]">
            <span className="-skew-x-3 block font-display text-7xl text-text-primary sm:text-8xl lg:text-[6rem]">
              {heroContent.eyebrow}
            </span>
            <span className="-skew-x-3 -mt-1 block font-brush text-5xl leading-none text-purple sm:text-6xl lg:text-[4.25rem]">
              {heroContent.wordmark}
            </span>
          </div>

          <h1 className="font-display text-2xl leading-tight sm:text-3xl">
            <span className="block text-text-primary">
              {heroContent.tagline[0]}
            </span>
            <span className="block text-purple">{heroContent.tagline[1]}</span>
          </h1>

          <p className="max-w-md text-text-secondary">{heroContent.mission}</p>

          <Link
            href="/meet-the-team/"
            className="chamfer-sm btn-green-gradient inline-flex w-fit items-center gap-2 py-3.5 pl-6 pr-9 text-sm font-bold uppercase tracking-wide text-cream shadow-[0_10px_24px_rgba(23,34,15,0.25)] transition-transform hover:scale-[1.03]"
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
            className="mix-blend-multiply object-contain p-8 sm:p-12 lg:p-16"
            priority
          />
        </div>
      </div>
    </section>
  );
}
