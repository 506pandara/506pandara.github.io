import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { achievements, rankingsNotice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rankings — 506 Pandara",
};

export default function RankingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="By The Numbers"
        title="Rankings"
        subtitle="See how we stack up against the competition."
      />
      <div style={{ padding: "10px 14px 40px" }}>
        <div className="card plain" style={{ marginBottom: 16 }}>
          <p style={{ margin: 0 }}>{rankingsNotice}</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {achievements.map((item) => (
            <div key={item.label} className="card plain">
              <div className="cap">{item.label}</div>
              <h3 style={{ fontSize: 26, marginTop: 4 }}>{item.value}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
