import { homeAbout } from "@/lib/data";

export default function AboutCard() {
  return (
    <div className="card about" id="about">
      <span className="no">02 / ABOUT</span>
      <div className="cap k">{homeAbout.heading}</div>
      <p>{homeAbout.body}</p>
      <div className="tags">
        {homeAbout.tags.map((tag, i) => (
          <span key={tag} className={`tag ${"abcd"[i]}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="act">
        <a className="pillbtn" href={homeAbout.cta.href}>
          {homeAbout.cta.label}
        </a>
        <a className="joinnote" href={homeAbout.join.href}>
          <span className="t">
            {homeAbout.join.label}
            <br />
            {homeAbout.join.sub}
          </span>
          <span className="dot pulse"></span>
        </a>
      </div>
    </div>
  );
}
