import FadeUp from "@/components/motion/FadeUp";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <FadeUp className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-bright">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-4xl font-bold text-balance sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg text-text-secondary text-balance">{subtitle}</p>
      ) : null}
    </FadeUp>
  );
}
