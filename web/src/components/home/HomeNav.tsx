import { homeNavLinks } from "@/lib/data";

export default function HomeNav() {
  return (
    <div className="nav">
      <a className="mark" href="#" aria-label="506 Pandara home" />
      <span className="logo">506</span>
      <div className="navbar">
        {homeNavLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="burger">
        <s></s>
        <s></s>
        <s></s>
      </div>
    </div>
  );
}
