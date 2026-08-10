import type { Metadata } from "next";
import { Mail, MapPin, Shield } from "lucide-react";
import PageHeader from "@/components/home/PageHeader";
import { footerContact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — 506 Pandara",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Questions about Team 506, sponsorship, or mentorship? We'd love to hear from you."
      />
      <div style={{ padding: "10px 14px 40px", maxWidth: 520, margin: "0 auto" }}>
        <div className="card plain" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Mail size={16} color="var(--plum)" />
            {footerContact.email}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MapPin size={16} color="var(--plum)" />
            {footerContact.location}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Shield size={16} color="var(--plum)" />
            {footerContact.program}
          </div>
        </div>
      </div>
    </>
  );
}
