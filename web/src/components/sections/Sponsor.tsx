import { Check } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";
import { sponsorBenefits, footerContact } from "@/lib/data";

export default function Sponsor() {
  return (
    <section id="sponsors" className="relative px-4 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[var(--radius-section)] bg-bg-section">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-purple/25 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-green/20 blur-[130px]" />

        <div className="relative px-6 py-20 sm:px-10 md:px-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp className="flex flex-col items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-bright">
                Partner With Us
              </span>
              <h2 className="font-heading text-4xl font-bold text-balance sm:text-5xl">
                Help Build the Future
              </h2>
              <p className="text-lg text-text-secondary text-balance">
                Every robot part, competition fee, and travel mile is made
                possible by partners who believe in student-led engineering.
                Join the organizations helping Pandara compete at the highest
                level.
              </p>
            </FadeUp>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeUp className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {sponsorBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/15 text-green">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </FadeUp>

            <FadeUp
              delay={0.15}
              className="flex flex-col items-center gap-5 text-center"
            >
              <Button
                href="#contact"
                variant="green"
                className="!px-14 !py-6 text-lg"
              >
                Become a Sponsor
              </Button>
              <p className="text-sm text-text-muted">{footerContact.email}</p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
