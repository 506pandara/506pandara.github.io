import Link from "next/link";
import { Trophy, Cog, BarChart3 } from "lucide-react";
import { teaserCards } from "@/lib/data";

const icons = { Trophy, Cog, BarChart3 };

const cardTreatments = [
  "rounded-[28px_28px_28px_8px] border bg-dotgrid-ink",
  "rounded-3xl border-2 border-dashed",
  "rounded-[8px_28px_28px_28px] border-l-4 bg-ink",
];

export default function TeaserCards() {
  return (
    <section className="bg-leaves relative px-4 pb-6 pt-6 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-3">
        {teaserCards.map((card, i) => {
          const Icon = icons[card.icon as keyof typeof icons];
          const isPurple = card.accent === "purple";
          const isDark = i === 2;
          return (
            <div
              key={card.title}
              className={`group relative flex flex-col overflow-hidden p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 ${cardTreatments[i]}`}
              style={{
                borderColor: "var(--border-purple)",
                background: isDark ? undefined : "var(--bg-card)",
              }}
            >
              <Icon
                aria-hidden="true"
                className={`absolute -right-8 -bottom-8 h-28 w-28 opacity-[0.08] ${isDark ? "text-green-light" : "text-purple"}`}
                strokeWidth={1}
              />
              <Icon className={`relative h-9 w-9 ${isDark ? "text-green-light" : "text-green"}`} strokeWidth={2} />
              <h3
                className={`relative mt-4 font-display text-2xl leading-tight ${isDark ? "text-cream" : "text-purple"}`}
              >
                {card.title}
              </h3>
              <p className={`relative mb-6 mt-3 text-sm ${isDark ? "text-cream/70" : "text-text-secondary"}`}>
                {card.description}
              </p>
              <Link
                href={card.href}
                className={`relative mt-auto inline-block w-fit rounded-full border px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isDark
                    ? "border-green-light text-green-light hover:bg-green-light hover:text-ink"
                    : isPurple
                      ? "border-purple text-purple-text hover:bg-purple hover:text-white"
                      : "border-green text-green-deep hover:bg-green hover:text-cream"
                }`}
              >
                {card.button}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
