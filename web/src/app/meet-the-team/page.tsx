import type { Metadata } from "next";
import PageHeader from "@/components/home/PageHeader";
import { team, teamCategories } from "@/lib/data";

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
        {teamCategories.map((category) => {
          const members = team.filter((member) => member.category === category);
          if (members.length === 0) return null;
          return (
            <div key={category} style={{ marginTop: 28 }}>
              <h2 className="cap" style={{ color: "var(--plum)", marginBottom: 12 }}>
                {category}
              </h2>
              <div className="grid cols-5">
                {members.map((member) => (
                  <div key={member.name} className={`member${member.placeholder ? " open" : ""}`}>
                    <div className="av">{initials(member.name)}</div>
                    <h3>{member.placeholder ? member.role : member.name}</h3>
                    <div className="role">{member.placeholder ? "Position Open" : member.role}</div>
                    <p>{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
