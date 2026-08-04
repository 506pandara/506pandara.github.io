"use client";

import { useEffect } from "react";

const stalks = [
  { sp: "0.16", style: { left: "1.5%", width: "26px", opacity: 0.85 } },
  { sp: "0.30", style: { left: "6.5%", width: "17px", opacity: 0.55 } },
  { sp: "0.09", style: { left: "11%", width: "34px", opacity: 0.35 } },
  { sp: "0.24", style: { right: "2%", width: "29px", opacity: 0.8 } },
  { sp: "0.38", style: { right: "7.5%", width: "15px", opacity: 0.5 } },
  { sp: "0.12", style: { right: "12%", width: "31px", opacity: 0.32 } },
];

export default function HomeForest() {
  useEffect(() => {
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="forest" aria-hidden="true">
      {stalks.map((s, i) => (
        <span key={i} className="stalk" data-sp={s.sp} style={s.style} />
      ))}
    </div>
  );
}
