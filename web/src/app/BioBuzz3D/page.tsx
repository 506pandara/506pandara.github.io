import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { bioBuzz3D } from "@/lib/data";

export const metadata: Metadata = {
  title: "BioBuzz3D — 506 Pandara",
};

export default function BioBuzz3DPage() {
  return (
    <>
      <PageHeader
        eyebrow="2026–27 Season"
        title="BioBuzz3D"
        subtitle={bioBuzz3D.subtitle}
      />
      <div style={{ padding: "10px 14px 40px", maxWidth: 560, margin: "0 auto" }}>
        <div className="card about" style={{ textAlign: "center", alignItems: "center" }}>
          <span className="tag c" style={{ marginBottom: 14 }}>
            {bioBuzz3D.status}
          </span>
          <p>{bioBuzz3D.body}</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
              marginTop: 18,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <a
                className="pillbtn"
                href={bioBuzz3D.playHref}
                style={{ flex: "none", padding: "16px 30px" }}
              >
                {bioBuzz3D.playCta}
              </a>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{bioBuzz3D.playNote}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <a
                className="pillbtn"
                href={bioBuzz3D.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: "none", padding: "16px 30px" }}
              >
                {bioBuzz3D.downloadCta}
              </a>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{bioBuzz3D.downloadNote}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
