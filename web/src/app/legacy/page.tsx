import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legacy — 506 Pandara",
};

export default function LegacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our History"
        title="Legacy"
        subtitle="Our journey to the world's biggest stage."
      />
      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.title}>
            <span className="yr">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
