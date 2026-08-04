import { homeThanks } from "@/lib/data";

export default function HomeThanks() {
  return (
    <div className="thanks">
      <div className="thd">
        <h2>{homeThanks.heading}</h2>
        <p>{homeThanks.body}</p>
      </div>
      <ul className="tlist">
        {homeThanks.list.map((item) => (
          <li key={item.name} className={item.isOpenSlot ? "you" : undefined}>
            <b>{item.name}</b>
            <span>{item.note}</span>
          </li>
        ))}
      </ul>
      <a className="tcta" href={homeThanks.cta.href}>
        {homeThanks.cta.label}
      </a>
    </div>
  );
}
