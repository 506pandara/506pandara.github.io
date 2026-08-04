"use client";

import { useEffect } from "react";

type QuickStats = { tot?: { rank?: number }; count?: number };

export default function StatsRow() {
  useEffect(() => {
    const v = document.getElementById("rankval");
    const card = document.getElementById("rank");
    if (!v) return;

    function show(d: QuickStats | null, season: string) {
      if (!d || !d.tot || !d.tot.rank) return false;
      v!.textContent = "#" + d.tot.rank;
      const t = document.getElementById("ranktxt");
      if (t) t.textContent = "of " + (d.count ? d.count.toLocaleString() : "?") + " teams";
      card?.classList.add("on");
      if (card) {
        card.title =
          "OPR rank " + d.tot.rank + " of " + d.count?.toLocaleString() + " teams, " + season + " season. Live from FTC Scout.";
      }
      return true;
    }
    function get(season: number) {
      return fetch("https://api.ftcscout.org/rest/v1/teams/506/quick-stats?season=" + season)
        .then((r) => (r.ok ? r.text() : null))
        .then((t) => {
          if (!t) return null;
          try {
            return JSON.parse(t) as QuickStats;
          } catch {
            return null;
          }
        });
    }
    get(2026)
      .then((d) => {
        if (!show(d, "2026-27")) return get(2025).then((e) => show(e, "2025-26"));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="stats">
      <div className="st">
        <b>100K+</b>
        <span>Reached</span>
      </div>
      <a
        className="st live"
        id="rank"
        href="https://ftcscout.org/teams/506"
        target="_blank"
        rel="noopener"
        title="World OPR rank, live from FTC Scout"
      >
        <b id="rankval">#125</b>
        <span id="ranklab">
          <span id="ranktxt">of 8,359 teams</span> <span className="ld pulse"></span>
        </span>
      </a>
      <div className="st">
        <b style={{ fontSize: "25px" }}>$20,000+</b>
        <span>Raised</span>
      </div>
    </div>
  );
}
