import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { outreachPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Outreach — 506 Pandara",
};

export default function OutreachPage() {
  return (
    <>
      <PageHeader
        eyebrow="In The Community"
        title="Outreach"
        subtitle="Pandara exists to pull more kids, more schools, and more of our community into STEM."
      />
      <div style={{ padding: "10px 14px 40px" }}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {outreachPrograms.map((program) => (
            <div key={program.title} className="card plain">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
