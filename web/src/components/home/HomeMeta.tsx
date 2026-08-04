import { homeMeta } from "@/lib/data";

export default function HomeMeta() {
  return (
    <>
      <div className="meta">
        {homeMeta.map((item) => (
          <div key={item.key}>
            <div className="cap k">{item.key}</div>
            {Array.isArray(item.value) ? (
              <div className="v cap">
                {item.value.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            ) : (
              <div className="cap">{item.value}</div>
            )}
          </div>
        ))}
      </div>
      <div className="bar" />
    </>
  );
}
