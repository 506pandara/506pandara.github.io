import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { robotSpecs, robotNotice } from "@/lib/data";

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
      <div style={{ padding: "10px 14px 0", maxWidth: 720, margin: "0 auto" }}>
        <div className="card plain">
          <p style={{ margin: 0 }}>{robotNotice}</p>
        </div>
      </div>
      <div style={{ padding: "10px 14px 6px" }}>
        <div className="grid cols-robot">
          <div className="card hero-card" style={{ minHeight: 360 }}>
            <span className="no">ROBOT</span>
            <div className="bot" />
          </div>
          <div className="stats cols-2">
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
