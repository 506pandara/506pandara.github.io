import Link from "next/link";
import { Trophy, Cog, BarChart3 } from "lucide-react";
import { teaserCards } from "@/lib/data";

const icons = { Trophy, Cog, BarChart3 };

export default function TeaserCards() {
  return (
    <section className="relative bg-bg px-6 pb-10 pt-20 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-3">
        {teaserCards.map((card) => {
          const Icon = icons[card.icon as keyof typeof icons];
          const isPurple = card.accent === "purple";
          return (
            <div
              key={card.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1"
              style={{
                borderColor: "var(--border-purple)",
                background:
                  "radial-gradient(120% 100% at 0% 0%, var(--purple-deep) 0%, var(--bg-card) 55%)",
              }}
            >
              <Icon
                aria-hidden="true"
                className="absolute -right-8 -bottom-8 h-28 w-28 text-purple opacity-[0.06]"
                strokeWidth={1}
              />
              <Icon className="relative h-9 w-9 text-green" strokeWidth={2} />
              <h3 className="relative mt-4 font-display text-2xl leading-tight text-purple">
                {card.title}
              </h3>
              <p className="relative mb-6 mt-3 text-sm text-text-secondary">
                {card.description}
              </p>
              <Link
                href={card.href}
                className={`relative mt-auto inline-block w-fit rounded-full border px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isPurple
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
