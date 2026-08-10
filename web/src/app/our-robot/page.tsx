import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { robotSpecs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Robot — 506 Pandara",
};

export default function OurRobotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering"
        title="Our Robot"
        subtitle="Built with precision. Driven by purpose."
      />
      <div style={{ padding: "10px 14px 6px" }}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div className="card hero-card" style={{ minHeight: 360 }}>
            <span className="no">ROBOT</span>
            <div className="bot" />
          </div>
          <div className="stats" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {robotSpecs.map((spec) => (
              <div key={spec.label} className="card plain">
                <div className="cap">{spec.label}</div>
                <h3>{spec.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
