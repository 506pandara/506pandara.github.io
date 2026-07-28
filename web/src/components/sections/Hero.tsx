import Image from "next/image";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/Particles";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Float from "@/components/motion/Float";
import FadeUp from "@/components/motion/FadeUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,var(--bg-secondary),var(--bg-primary)_70%)]" />
      <div className="absolute inset-0 bg-grid animate-grid-drift opacity-40" />
      <div className="animate-blob-a absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-purple/30 blur-[140px]" />
      <div className="animate-blob-b absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-green/20 blur-[140px]" />
      <div className="absolute right-1/3 top-1/4 h-[320px] w-[320px] rounded-full bg-warm/10 blur-[120px]" />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:px-12 lg:px-20 lg:grid-cols-2 lg:gap-12">
        <FadeUp className="flex flex-col gap-8">
          <span className="w-fit rounded-full border border-border-subtle bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-bright">
            FIRST Tech Challenge · Est. 2007
          </span>

          <h1 className="font-heading text-[42px] font-black leading-[0.98] tracking-tight md:text-[64px] lg:text-[96px]">
            Building{" "}
            <span className="bg-gradient-to-r from-purple to-purple-bright bg-clip-text text-transparent">
              Robots.
            </span>
            <br />
            Building{" "}
            <span className="bg-gradient-to-r from-purple to-purple-bright bg-clip-text text-transparent">
              Leaders.
            </span>
          </h1>

          <p className="max-w-lg text-lg text-white/70">
            Team 506 Pandara designs, builds, and programs competition robots
            for the FIRST Tech Challenge — turning circuit boards and CAD
            files into confident engineers, one season at a time.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#team" variant="primary">
              Explore Our Team
            </Button>
            <Button href="#sponsors" variant="secondary">
              Become a Sponsor
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Float duration={6} distance={14}>
            <div className="relative rounded-[var(--radius-image)] border border-border-subtle bg-card p-4 shadow-[var(--shadow-glow-purple)] backdrop-blur-xl sm:p-6">
              <div className="absolute -top-3 left-6 rounded-full bg-bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-bright ring-1 ring-border-subtle">
                Our Robot
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-[calc(var(--radius-image)-12px)] bg-bg-secondary">
                <Image
                  src="/images/robot-picture.webp"
                  alt="Team 506 Pandara's competition robot"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </Float>
        </FadeUp>
      </div>

      <ScrollIndicator />
    </section>
  );
}
