import { homeFoot } from "@/lib/data";

export default function HomeFooter() {
  return (
    <div className="foot">
      <span>{homeFoot.left}</span>
      <span>{homeFoot.center}</span>
      <span className="r">
        {homeFoot.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </span>
    </div>
  );
}
