"use client";

import { useEffect, useState } from "react";
import { achievements as fallbackAchievements } from "@/lib/data";

const API = "https://api.ftcscout.org/rest/v1";
const SEASON_CANDIDATES = [2026, 2025, 2024];
const WORLD_TYPES = ["FIRSTChampionship"];
const STATE_TYPES = ["Championship"];
const LEAGUE_TYPES = ["LeagueTournament", "LeagueMeet", "League"];

type Card = { label: string; value: string; subtitle: string };

type EventStats = {
  rank: number;
  wins: number;
  losses: number;
  ties: number;
} | null;

type TeamEvent = { eventCode: string; stats: EventStats };
type EventMeta = { type: string; name: string } | null;
type QuickStats = { tot: { value: number; rank: number }; count: number } | null;
type Award = { season: number; type: string; placement: number; eventCode: string };

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

async function getJSON<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url);
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch {
    return null;
  }
}

function bestByType(
  candidates: { event: TeamEvent; meta: EventMeta }[],
  types: string[],
) {
  let best: { event: TeamEvent; meta: EventMeta; priority: number } | null = null;
  for (const c of candidates) {
    const priority = types.indexOf(c.meta?.type || "");
    if (priority === -1) continue;
    if (
      !best ||
      priority < best.priority ||
      (priority === best.priority && c.event.stats!.rank < best.event.stats!.rank)
    ) {
      best = { ...c, priority };
    }
  }
  return best;
}

async function loadSeason(season: number): Promise<Card[] | null> {
  const [quick, events, awardsHistory] = await Promise.all([
    getJSON<QuickStats>(`${API}/teams/506/quick-stats?season=${season}`),
    getJSON<TeamEvent[]>(`${API}/teams/506/events/${season}`),
    getJSON<Award[]>(`${API}/teams/506/awards`),
  ]);

  const withStats = (events || []).filter((e): e is TeamEvent & { stats: NonNullable<EventStats> } => !!e.stats);
  if (!quick && withStats.length === 0) return null;

  const metas = await Promise.all(
    withStats.map((e) => getJSON<EventMeta>(`${API}/events/${season}/${e.eventCode}`)),
  );
  const candidates = withStats.map((event, i) => ({ event, meta: metas[i] }));

  const worldBest = bestByType(candidates, WORLD_TYPES);
  const stateBest = bestByType(candidates, STATE_TYPES);
  const leagueBest = bestByType(candidates, LEAGUE_TYPES);

  let wins = 0, losses = 0, ties = 0;
  withStats.forEach((e) => {
    wins += e.stats!.wins || 0;
    losses += e.stats!.losses || 0;
    ties += e.stats!.ties || 0;
  });

  const seasonAwards = (awardsHistory || []).filter((a) => a.season === season);
  const topAward = seasonAwards[0];

  const seasonLabel = `${season}–${String(season + 1).slice(2)}`;

  return [
    {
      label: "World Ranking",
      value: worldBest ? ordinal(worldBest.event.stats!.rank) : "—",
      subtitle: worldBest
        ? `Division Rank · ${worldBest.meta?.name || "FIRST World Championship"}`
        : `No World Championship result yet this season`,
    },
    {
      label: "State Ranking",
      value: stateBest ? `#${stateBest.event.stats!.rank}` : "—",
      subtitle: stateBest
        ? `Qualification Rank · ${stateBest.meta?.name || "State Championship"}`
        : `No state championship result yet this season`,
    },
    {
      label: "League Ranking",
      value: leagueBest ? `#${leagueBest.event.stats!.rank}` : "—",
      subtitle: leagueBest
        ? `${leagueBest.meta?.type === "LeagueTournament" ? "League Tournament" : "League"} · ${leagueBest.meta?.name || "Local League"}`
        : `No league result yet this season`,
    },
    {
      label: "OPR",
      value: quick?.tot ? quick.tot.value.toFixed(1) : "—",
      subtitle: quick?.tot
        ? `World OPR Rank #${quick.tot.rank} of ${quick.count.toLocaleString()} teams`
        : `Not yet available this season`,
    },
    {
      label: "Wins",
      value: withStats.length ? `${wins}–${losses}${ties ? `–${ties}` : ""}` : "—",
      subtitle: withStats.length
        ? `Qualification match record · ${seasonLabel}`
        : `Season hasn't started`,
    },
    {
      label: "Awards",
      value: topAward ? `${ordinal(topAward.placement)} Place` : "—",
      subtitle: topAward
        ? `${topAward.type} Award${seasonAwards.length > 1 ? ` · +${seasonAwards.length - 1} more this season` : ""}`
        : `No awards yet this season`,
    },
  ];
}

export default function LiveRankings() {
  const [cards, setCards] = useState<Card[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const season of SEASON_CANDIDATES) {
        const result = await loadSeason(season);
        if (cancelled) return;
        if (result) {
          setCards(result);
          return;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const display = cards ?? fallbackAchievements;

  return (
    <div className="grid cols-3">
      {display.map((item) => (
        <div key={item.label} className="card plain">
          <div className="cap">{item.label}</div>
          <h3 style={{ fontSize: 26, marginTop: 4 }}>{item.value}</h3>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
