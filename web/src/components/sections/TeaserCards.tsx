import Link from "next/link";
import { Trophy, Cog, BarChart3 } from "lucide-react";
import { teaserCards } from "@/lib/data";

const icons = { Trophy, Cog, BarChart3 };

export default function TeaserCards() {
  return (
    <section className="relative bg-bg px-6 py-14 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-3">
        {teaserCards.map((card) => {
          const Icon = icons[card.icon as keyof typeof icons];
          const isPurple = card.accent === "purple";
          return (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderColor: "var(--border-purple)",
                background:
                  "radial-gradient(120% 100% at 0% 0%, var(--purple-deep) 0%, var(--bg-card) 55%)",
              }}
            >
              <Icon
                aria-hidden="true"
                className="absolute -right-6 -bottom-6 h-32 w-32 text-purple opacity-[0.07]"
                strokeWidth={1}
              />
              <Icon className="relative h-9 w-9 text-green" strokeWidth={2} />
              <h3 className="relative mt-4 font-display text-2xl leading-tight text-green">
                {card.title}
              </h3>
              <p className="relative mt-3 text-sm text-text-secondary">
                {card.description}
              </p>
              <Link
                href={card.href}
                className={`relative mt-6 inline-block rounded-full border px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isPurple
                    ? "border-purple text-purple-text hover:bg-purple hover:text-white"
                    : "border-green text-green hover:bg-green hover:text-ink"
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
