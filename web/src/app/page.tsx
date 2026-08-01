"use client";

import { useEffect } from "react";
import "./home.css";

export default function Home() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // --- pball hover-direction cut effect ---
    (function () {
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
      cleanups.push(() => document.removeEventListener("mousemove", onMove));

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
    })();

    // --- parallax bamboo stalks ---
    (function () {
      const st = Array.from(document.querySelectorAll<HTMLElement>(".stalk"));
      let tick = false;
      function draw() {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        for (let i = 0; i < st.length; i++) {
          st[i].style.transform =
            "translate3d(0," + (-y * parseFloat(st[i].dataset.sp || "0")).toFixed(1) + "px,0)";
        }
        tick = false;
      }
      const onScroll = () => {
        if (!tick) {
          requestAnimationFrame(draw);
          tick = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      draw();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    })();

    // --- live OPR rank from FTC Scout ---
    (function () {
      const v = document.getElementById("rankval");
      const card = document.getElementById("rank");
      if (!v) return;

      function show(d: { tot?: { rank?: number }; count?: number } | null, season: string) {
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
              return JSON.parse(t);
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
    })();

    // --- palette theme toggle ---
    (function () {
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
      cleanups.push(() => b.removeEventListener("click", onClick));
    })();

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <svg className="fx" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="rip1" x="-6%" y="0%" width="112%" height="88%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.055" numOctaves={2} seed={4} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={6.5} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rip2" x="-6%" y="0%" width="112%" height="88%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0084 0.062" numOctaves={2} seed={17} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={7.5} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rip3" x="-6%" y="0%" width="112%" height="88%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0098 0.049" numOctaves={2} seed={33} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={5.5} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="forest" aria-hidden="true">
        <span className="stalk" data-sp="0.16" style={{ left: "1.5%", width: "26px", opacity: 0.85 }} />
        <span className="stalk" data-sp="0.30" style={{ left: "6.5%", width: "17px", opacity: 0.55 }} />
        <span className="stalk" data-sp="0.09" style={{ left: "11%", width: "34px", opacity: 0.35 }} />
        <span className="stalk" data-sp="0.24" style={{ right: "2%", width: "29px", opacity: 0.8 }} />
        <span className="stalk" data-sp="0.38" style={{ right: "7.5%", width: "15px", opacity: 0.5 }} />
        <span className="stalk" data-sp="0.12" style={{ right: "12%", width: "31px", opacity: 0.32 }} />
      </div>

      <div className="app">
        <div className="nav">
          <a className="mark" href="#" aria-label="506 Pandara home" />
          <span className="logo">506</span>
          <div className="navbar">
            <a href="#">About us</a>
            <a href="#">The robot</a>
            <a href="#">Outreach</a>
            <a href="sponsors.html">Sponsors</a>
          </div>
          <div className="burger">
            <s></s>
            <s></s>
            <s></s>
          </div>
        </div>

        <div className="meta">
          <div>
            <div className="cap k">Program</div>
            <div className="cap">FIRST Tech Challenge</div>
          </div>
          <div>
            <div className="cap k">Season</div>
            <div className="v cap">
              <span>BioBuzz</span>
              <span>2026 – 2027</span>
            </div>
          </div>
          <div>
            <div className="cap k">Based</div>
            <div className="cap">Palm Harbor, FL</div>
          </div>
          <div>
            <div className="cap k">Instagram</div>
            <div className="cap">@506Pandara</div>
          </div>
        </div>

        <div className="bar" />

        <div className="disp">
          <div className="wordwrap">
            <h1>PANDARA</h1>
            <div className="reflect" aria-hidden="true">
              <span className="r1">PANDARA</span>
              <span className="r2">PANDARA</span>
              <span className="r3">PANDARA</span>
            </div>
          </div>
          <div className="scr">506</div>
          <div className="kanji">
            五〇六
            <small>506</small>
          </div>
        </div>

        {/* Season tracker: add className="done" to a .tk as you clear each event, and move className="next" to the one coming up */}
        <div className="strip">
          <span className="badge balls">
            <span className="pball a">
              <i className="h1"></i>
              <i className="h2"></i>
              <b>
                <svg viewBox="0 0 240 40" preserveAspectRatio="none" aria-hidden="true">
                  <path className="wind" d="M0 20 Q120 5,240 20 Q120 35,0 20 Z" />
                  <path className="edge" d="M10 20 Q120 13,230 20 Q120 27,10 20 Z" />
                </svg>
              </b>
            </span>
            <span className="pball b">
              <i className="h1"></i>
              <i className="h2"></i>
              <b>
                <svg viewBox="0 0 240 40" preserveAspectRatio="none" aria-hidden="true">
                  <path className="wind" d="M0 20 Q120 5,240 20 Q120 35,0 20 Z" />
                  <path className="edge" d="M10 20 Q120 13,230 20 Q120 27,10 20 Z" />
                </svg>
              </b>
            </span>
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
              <span className="tk next" title="Meet 1">
                <i></i>
                <em>M1</em>
              </span>
              <span className="tk" title="Meet 2">
                <i></i>
                <em>M2</em>
              </span>
              <span className="tk" title="Meet 3">
                <i></i>
                <em>M3</em>
              </span>
              <span className="tk" title="State Championship">
                <i></i>
                <em>ST</em>
              </span>
              <span className="tk" title="World Championship">
                <i></i>
                <em>WC</em>
              </span>
            </span>
          </span>
        </div>

        <div className="grid">
          <div className="col">
            <div className="card hero-card">
              <span className="no">01 / ROBOT</span>
              <div className="bot" />
            </div>
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
          </div>
          <div className="col">
            <div className="card about">
              <span className="no">02 / ABOUT</span>
              <div className="cap k">About</div>
              <p>
                Trophies are fun, but they&apos;re not the mission. Pandara exists to pull more kids, more schools,
                and more of our community into STEM — one robot at a time. Fourteen students, forty-six years of
                combined FIRST experience, and everything we learn handed straight to the next team down the line.
              </p>
              <div className="tags">
                <span className="tag a">Mentoring</span>
                <span className="tag b">Free camps</span>
                <span className="tag c">Advocacy</span>
                <span className="tag d">Community</span>
              </div>
              <div className="act">
                <a className="pillbtn" href="#">
                  See the robot
                </a>
                <a className="joinnote" href="#">
                  <span className="t">
                    Open to
                    <br />
                    new members
                  </span>
                  <span className="dot pulse"></span>
                </a>
              </div>
            </div>
            <div className="two">
              <div className="card ph">
                <span className="no">03</span>Team photo
              </div>
              <div className="card ph">
                <span className="no">04</span>Outreach photo
              </div>
            </div>
          </div>
        </div>

        <div className="thanks">
          <div className="thd">
            <h2>Nothing on this robot was bought by us.</h2>
            <p>
              Every plate, motor and plane ticket came from someone who believed fourteen students could pull it off.
              Here is exactly what they gave.
            </p>
          </div>
          <ul className="tlist">
            <li>
              <b>EMW Laser</b>
              <span>12 custom laser-cut aluminum plates, and the shop visits where we learned to design for manufacturing</span>
            </li>
            <li>
              <b>Follow Through Laser Cutting</b>
              <span>The metal plates this season&apos;s robot is built from</span>
            </li>
            <li>
              <b>RTX</b>
              <span>Engineers who reviewed our designs, and the mentors who kept us honest</span>
            </li>
            <li>
              <b>Polymaker</b>
              <span>The printing material behind every custom part on the machine</span>
            </li>
            <li>
              <b>Palm Harbor University High School</b>
              <span>A shop to build in and a place to teach from</span>
            </li>
            <li className="you">
              <b>Your name here</b>
              <span>There is still room on the turret ring</span>
            </li>
          </ul>
          <a className="tcta" href="sponsors.html">
            See sponsorship tiers →
          </a>
        </div>

        <div className="foot">
          <span>FTC Team 506 · Pandara</span>
          <span>Built by students</span>
          <span className="r">
            <a href="#">GitHub</a>
            <a href="sponsors.html">Sponsor us</a>
            <a href="#">Contact</a>
          </span>
        </div>
      </div>
    </>
  );
}
