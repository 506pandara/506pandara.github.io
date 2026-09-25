import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import LiveRankings from "@/components/home/LiveRankings";
import { rankingsNotice } from "@/lib/data";

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
          <p style={{ margin: 0 }}>
            {rankingsNotice} Numbers below update automatically from{" "}
            <a href="https://ftcscout.org/teams/506" target="_blank" rel="noopener noreferrer">
              FTC Scout
            </a>
            .
          </p>
        </div>
        <LiveRankings />
      </div>
    </>
  );
}
