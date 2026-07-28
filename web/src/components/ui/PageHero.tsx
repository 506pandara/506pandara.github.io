export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-bg px-6 py-20 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-text">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl leading-tight text-text-primary sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-text-secondary">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
