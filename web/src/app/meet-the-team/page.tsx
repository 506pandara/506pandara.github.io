import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meet The Team — 506 Pandara",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The People"
        title="Meet The Team"
        subtitle="Get to know the students, mentors, and leaders behind 506 Pandara."
      />
      <div style={{ padding: "10px 14px 40px" }}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>
          {team.map((member) => (
            <div key={member.name} className={`member${member.placeholder ? " open" : ""}`}>
              <div className="av">{initials(member.name)}</div>
              <h3>{member.placeholder ? member.role : member.name}</h3>
              <div className="role">{member.placeholder ? "Position Open" : member.role}</div>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
