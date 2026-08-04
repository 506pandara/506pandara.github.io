import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="bg-leaves relative overflow-hidden">
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 pb-6 pt-10 md:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:px-8 lg:pt-16">
        <div className="relative z-10 flex flex-col justify-center gap-7 px-2 py-6 lg:px-4">
          <div className="leading-[0.86]">
            <span className="block font-display text-[clamp(3.2rem,10vw,6.5rem)] tracking-tight text-purple">
              {heroContent.eyebrow}
            </span>
            <span className="font-brush -mt-2 block text-[clamp(2.6rem,8vw,5rem)] leading-none text-purple">
              {heroContent.wordmark}
            </span>
          </div>

          <h1 className="font-display text-2xl leading-tight sm:text-3xl">
            <span className="block text-text-primary">{heroContent.tagline[0]}</span>
            <span className="block text-purple">{heroContent.tagline[1]}</span>
          </h1>

          <p className="max-w-md text-text-secondary">{heroContent.mission}</p>

          <Link
            href="/meet-the-team/"
            className="btn-green-gradient inline-flex w-fit items-center gap-2 rounded-full py-3.5 pl-7 pr-6 text-sm font-bold uppercase tracking-wide text-cream shadow-[var(--shadow-card)] transition-transform hover:scale-[1.03]"
          >
            {heroContent.cta}
            <ArrowRight size={18} strokeWidth={3} />
          </Link>
        </div>

        <div className="bg-dotgrid relative min-h-[320px] overflow-hidden rounded-[40px_40px_40px_12px] bg-ink lg:min-h-[600px]">
          <span className="cap-label absolute right-5 top-5 z-10 text-green-light/70">
            Our Robot
          </span>
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
