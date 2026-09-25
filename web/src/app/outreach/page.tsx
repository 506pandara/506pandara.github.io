import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { outreachPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Outreach — 506 Pandara",
};

export default function OutreachPage() {
  return (
    <>
      <PageHeader
        eyebrow="In The Community"
        title="Outreach"
        subtitle="Pandara exists to pull more kids, more schools, and more of our community into STEM."
      />
      <div style={{ padding: "10px 14px 40px" }}>
        <div className="grid cols-2">
          {outreachPrograms.map((program) => (
            <div key={program.title} className="card plain">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
        <div
          className="card about"
          style={{ marginTop: 16, textAlign: "center", alignItems: "center" }}
        >
          <span className="no">SPONSOR</span>
          <div className="cap k">Fuel This Work</div>
          <p>
            Everything above runs on sponsor support — logo placement, community recognition, and
            direct investment in STEM education for Palm Harbor students.
          </p>
          <a className="pillbtn" href="/sponsor-us/" style={{ flex: "none", padding: "16px 30px", marginTop: 14 }}>
            Become a Sponsor
          </a>
        </div>
      </div>
    </>
  );
}
