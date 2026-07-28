export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Robot", href: "#robot" },
  { label: "Achievements", href: "#achievements" },
  { label: "Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years Competing", value: "19+" },
  { label: "Students", value: "15+" },
  { label: "Awards", value: "12+" },
];

export const timeline = [
  {
    year: "2007",
    title: "Founding Season",
    description:
      "Team 506 Pandara is founded at Palm Harbor University High School, fielding our first FIRST Tech Challenge robot.",
  },
  {
    year: "Building the Program",
    title: "Years of Growth",
    description:
      "Season after season, Pandara built out its engineering process, mentorship pipeline, and competition record across Florida events.",
  },
  {
    year: "State Championship",
    title: "#1 Seed Alliance Captain",
    description:
      "Pandara earned the #1 seed at the Florida FTC State Championship and made the first alliance selection pick of the playoffs.",
  },
  {
    year: "World Championship",
    title: "7th in Division + Think Award",
    description:
      "Pandara qualified for the FIRST Tech Challenge World Championship, finished 7th in our division, and won 1st Place Think Award for our engineering notebook.",
  },
  {
    year: "Current Season",
    title: "Gearing Up for BIOBUZZ",
    description:
      "We're preparing our next robot for BIOBUZZ presented by RTX, the 2026–2027 FIRST Tech Challenge season.",
  },
];

export const robotSpecs = [
  { label: "Drive Train", value: "Custom Mecanum Drivetrain" },
  { label: "Weight", value: "~38 lbs" },
  { label: "Programming", value: "Java · FTC SDK" },
  { label: "Autonomous", value: "Limelight Vision-Guided" },
];

export const achievements = [
  {
    label: "World Ranking",
    value: "7th",
    subtitle: "Division Finish · FIRST World Championship",
  },
  {
    label: "State Ranking",
    value: "#1 Seed",
    subtitle: "Alliance Captain · Florida State Championship",
  },
  {
    label: "League Ranking",
    value: "TBD",
    subtitle: "Updates as qualifiers are completed",
  },
  {
    label: "OPR",
    value: "TBD",
    subtitle: "Calculated after our first qualifier",
  },
  {
    label: "Wins",
    value: "TBD",
    subtitle: "Match record updates throughout the season",
  },
  {
    label: "Awards",
    value: "1st Place",
    subtitle: "Think Award · FIRST World Championship",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  placeholder?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Julian Szymkowiak-Larsen",
    role: "Captain",
    bio: "Leads team strategy, alliance selection, and event-day operations.",
  },
  {
    name: "Akash Pai",
    role: "Lead Software",
    bio: "Architects the robot's control systems, autonomous routines, and vision pipeline.",
  },
  {
    name: "Pranav Manthena",
    role: "Lead Hardware",
    bio: "Owns the drivetrain, mechanisms, and electrical systems on the robot.",
  },
  {
    name: "Henry Nyguen",
    role: "Lead CAD",
    bio: "Designs and models every mechanism before it's machined and assembled.",
  },
  {
    name: "Samuel Crockett",
    role: "Lead Outreach",
    bio: "Runs our community STEM events and sponsor relationships.",
  },
  {
    name: "President",
    role: "President",
    bio: "Name coming soon.",
    placeholder: true,
  },
  {
    name: "Business Lead",
    role: "Business",
    bio: "Name coming soon.",
    placeholder: true,
  },
  {
    name: "Driver",
    role: "Driver",
    bio: "Name coming soon.",
    placeholder: true,
  },
  {
    name: "Human Player",
    role: "Human Player",
    bio: "Name coming soon.",
    placeholder: true,
  },
  {
    name: "Mentor",
    role: "Mentor",
    bio: "Name coming soon.",
    placeholder: true,
  },
];

export const sponsorBenefits = [
  {
    title: "Logo Placement",
    description:
      "Your organization's logo featured on our robot, team apparel, and this website.",
  },
  {
    title: "Community Recognition",
    description:
      "Public thanks at competitions, in press coverage, and across our social channels.",
  },
  {
    title: "STEM Impact",
    description:
      "Direct investment in hands-on engineering education for students in Palm Harbor.",
  },
  {
    title: "Competition Support",
    description:
      "Funding for robot parts, registration fees, and travel to state and world events.",
  },
];

export const footerNav = navLinks;

export const footerContact = {
  school: "Palm Harbor University High School",
  location: "Palm Harbor, Florida",
  email: "Contact info coming soon",
};

export const footerSocials = ["Instagram", "YouTube", "LinkedIn"];

export const footerSponsors = {
  note: "Sponsor logos coming soon.",
  href: "#sponsors",
};
