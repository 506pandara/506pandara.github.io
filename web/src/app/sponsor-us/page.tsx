import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { sponsorBenefits, footerContact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sponsor Us — 506 Pandara",
};

export default function SponsorUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partner With Us"
        title="Become A Sponsor"
        subtitle="Partner with us to inspire the next generation and fuel innovation."
      />
      <div style={{ padding: "10px 14px 40px" }}>
        <div className="grid cols-sponsor">
          <div className="grid cols-2">
            {sponsorBenefits.map((benefit) => (
              <div key={benefit.title} className="card plain">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="card about" style={{ textAlign: "center", alignItems: "center" }}>
            <a className="pillbtn" href="/contact/" style={{ flex: "none", padding: "16px 30px" }}>
              Become a Sponsor
            </a>
            <p style={{ marginTop: 14, fontSize: 12, color: "var(--muted)" }}>
              {footerContact.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
