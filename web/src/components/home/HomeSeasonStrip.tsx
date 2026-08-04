"use client";

import { useEffect } from "react";
import { homeSeasonTrack } from "@/lib/data";

function PBall({ variant }: { variant: "a" | "b" }) {
  return (
    <span className={`pball ${variant}`}>
      <i className="h1"></i>
      <i className="h2"></i>
      <b>
        <svg viewBox="0 0 240 40" preserveAspectRatio="none" aria-hidden="true">
          <path className="wind" d="M0 20 Q120 5,240 20 Q120 35,0 20 Z" />
          <path className="edge" d="M10 20 Q120 13,230 20 Q120 27,10 20 Z" />
        </svg>
      </b>
    </span>
  );
}

export default function HomeSeasonStrip() {
  // hover-direction cut effect on the .pball badges
  useEffect(() => {
    const K = 240;
    function setCut(el: HTMLElement, ang: number) {
      const d = { x: Math.cos(ang), y: Math.sin(ang) };
      const n = { x: -Math.sin(ang), y: Math.cos(ang) };
      function poly(sg: number) {
        function P(a: number, b: number) {
          return (50 + a).toFixed(1) + "% " + (50 + b).toFixed(1) + "%";
        }
        return (
          "polygon(" +
          [
            P(d.x * K + n.x * sg * 0.4, d.y * K + n.y * sg * 0.4),
            P(-d.x * K + n.x * sg * 0.4, -d.y * K + n.y * sg * 0.4),
            P(-d.x * K + n.x * sg * K, -d.y * K + n.y * sg * K),
            P(d.x * K + n.x * sg * K, d.y * K + n.y * sg * K),
          ].join(",") +
          ")"
        );
      }
      el.style.setProperty("--ang", ((ang * 180) / Math.PI).toFixed(1) + "deg");
      el.style.setProperty("--clipA", poly(-1));
      el.style.setProperty("--clipB", poly(1));
      el.style.setProperty("--ax", (n.x * 8).toFixed(2) + "px");
      el.style.setProperty("--ay", (n.y * 8).toFixed(2) + "px");
    }

    let px: number | null = null;
    let py: number | null = null;
    const onMove = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
    };
    document.addEventListener("mousemove", onMove, { passive: true });

    const cleanups: Array<() => void> = [() => document.removeEventListener("mousemove", onMove)];

    document.querySelectorAll<HTMLElement>(".pball").forEach((el) => {
      let t: ReturnType<typeof setTimeout>;
      setCut(el, -0.38);

      const onEnter = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        let dx: number, dy: number;
        if (px !== null && py !== null && Math.abs(e.clientX - px) + Math.abs(e.clientY - py) > 1.5) {
          dx = e.clientX - px;
          dy = e.clientY - py;
        } else {
          dx = e.clientX - cx;
          dy = e.clientY - cy;
          dx = -dx;
          dy = -dy;
        }
        setCut(el, Math.atan2(dy, dx));
        el.classList.remove("cut");
        void el.offsetWidth;
        el.classList.add("cut");
        clearTimeout(t);
      };
      const onLeave = () => {
        t = setTimeout(() => {
          el.classList.remove("cut");
        }, 90);
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        clearTimeout(t);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // palette theme toggle, persisted to localStorage
  useEffect(() => {
    const b = document.getElementById("themebtn");
    const r = document.documentElement;
    if (!b) return;
    try {
      if (localStorage.getItem("pandara-palette") === "alt") r.classList.add("alt");
    } catch {}
    const onClick = () => {
      const on = r.classList.toggle("alt");
      try {
        localStorage.setItem("pandara-palette", on ? "alt" : "base");
      } catch {}
    };
    b.addEventListener("click", onClick);
    return () => b.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="strip">
      <span className="badge balls">
        <PBall variant="a" />
        <PBall variant="b" />
      </span>
      <span className="dots">
        <s></s>
        <s></s>
      </span>
      <span className="jp">
        竹<span>Bamboo</span>
      </span>
      <span className="right">
        <button className="badge tbtn" id="themebtn" type="button" aria-label="Swap palette" title="Swap palette">
          <b></b>
        </button>
        <span className="trk">
          <span className="lb">Season</span>
          {homeSeasonTrack.map((m) => (
            <span key={m.label} className={`tk ${m.status === "next" ? "next" : ""}`.trim()} title={m.title}>
              <i></i>
              <em>{m.label}</em>
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}
