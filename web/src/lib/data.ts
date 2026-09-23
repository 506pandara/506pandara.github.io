export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Robot", href: "/our-robot/" },
  { label: "Legacy", href: "/legacy/" },
  { label: "Rankings", href: "/rankings/" },
  { label: "Meet The Team", href: "/meet-the-team/" },
  { label: "Sponsor Us", href: "/sponsor-us/" },
  { label: "Contact", href: "/contact/" },
];

export const heroContent = {
  eyebrow: "506",
  wordmark: "PANDARA",
  tagline: ["BUILDING TOMORROW,", "TOGETHER."],
  mission:
    "We are 506 Pandara, a passionate robotics team dedicated to innovation, teamwork, and making an impact on and off the field.",
  cta: "Learn More About Us",
};

export const teaserCards = [
  {
    icon: "Trophy",
    title: "Legacy",
    description:
      "Our journey to the world stage. Check back for updates on our next championship appearance!",
    button: "Stay Tuned",
    href: "/legacy/",
    accent: "purple",
  },
  {
    icon: "Cog",
    title: "Our Robot",
    description: "Built with precision. Driven by purpose.",
    button: "Explore the Bot",
    href: "/our-robot/",
    accent: "green",
  },
  {
    icon: "BarChart3",
    title: "Rankings",
    description: "See how we stack up against the competition.",
    button: "View Rankings",
    href: "/rankings/",
    accent: "purple",
  },
];

export const featureCards = {
  team: {
    icon: "Users",
    title: "Meet The Team",
    description:
      "Get to know the students, mentors, and leaders behind 506 Pandara.",
    button: "Meet The Team",
    href: "/meet-the-team/",
  },
  sponsor: {
    icon: "Handshake",
    title: "Become A Sponsor",
    description:
      "Partner with us to inspire the next generation and fuel innovation.",
    button: "Sponsor Us",
    href: "/sponsor-us/",
  },
};

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
    year: "Right Now",
    title: "Preparing for BIOBUZZ",
    description:
      "Our 2026–2027 season, BIOBUZZ presented by RTX, hasn't started yet — everything above is from last season, DECODE presented by RTX. We're in the shop right now designing and building our next robot for BIOBUZZ.",
  },
];

export const robotSpecs = [
  { label: "Drive Train", value: "Custom Mecanum Drivetrain" },
  { label: "Weight", value: "~38 lbs" },
  { label: "Programming", value: "Java · FTC SDK" },
  { label: "Autonomous", value: "Limelight Vision-Guided" },
];

export const rankingsNotice =
  "Our BIOBUZZ season hasn't started yet — every ranking and accomplishment below is from last season, DECODE presented by RTX. We're in the shop right now preparing our robot for BIOBUZZ.";

export const achievements = [
  {
    label: "World Ranking",
    value: "7th",
    subtitle: "Division Finish · FIRST World Championship (DECODE season)",
  },
  {
    label: "State Ranking",
    value: "#1 Seed",
    subtitle: "Alliance Captain · Florida State Championship (DECODE season)",
  },
  {
    label: "League Ranking",
    value: "—",
    subtitle: "BIOBUZZ hasn't started — check back once qualifiers begin",
  },
  {
    label: "OPR",
    value: "—",
    subtitle: "Not yet available — season hasn't started",
  },
  {
    label: "Wins",
    value: "—",
    subtitle: "Season hasn't started",
  },
  {
    label: "Awards",
    value: "1st Place",
    subtitle: "Think Award · FIRST World Championship (DECODE season)",
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

export const bioBuzz3D = {
  status: "In Development",
  subtitle: "A 3D realistic driving simulator, built by 506 Pandara for the FTC 2026–2027 BIOBUZZ season.",
  body: "We're building a realistic 3D simulator so drivers can practice on the BIOBUZZ field before the robot is even finished. It's open source and in active development — the code lives on GitHub.",
  cta: "View on GitHub",
  repoHref: "#",
};

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

export const footerTagline = "Building tomorrow, together.";

export const footerContact = {
  email: "506pandaraftc@gmail.com",
  location: "Clearwater, Florida",
  program: "FIRST® Tech Challenge Team 506",
};

export const footerSocials = [
  { label: "Instagram", icon: "Instagram", href: "https://www.instagram.com/506pandara/" },
  { label: "YouTube", icon: "Youtube", href: "https://www.youtube.com/@Pandara506/videos" },
  { label: "Email", icon: "Mail", href: "mailto:506pandaraftc@gmail.com" },
];

export const footerSponsors = {
  note: "Sponsor logos coming soon.",
  href: "/sponsor-us/",
};

// ---------------------------------------------------------------------------
// Homepage (bamboo-forest design) content
// ---------------------------------------------------------------------------

export const homeNavLinks = [
  { label: "About us", href: "#about" },
  { label: "The robot", href: "/our-robot/" },
  { label: "Outreach", href: "/outreach/" },
  { label: "Sponsors", href: "/sponsor-us/" },
];

export const siteNavLinks = [
  { label: "Home", href: "/" },
  { label: "The Robot", href: "/our-robot/" },
  { label: "BioBuzz3D", href: "/BioBuzz3D/" },
  { label: "Legacy", href: "/legacy/" },
  { label: "Rankings", href: "/rankings/" },
  { label: "The Team", href: "/meet-the-team/" },
  { label: "Outreach", href: "/outreach/" },
  { label: "Sponsors", href: "/sponsor-us/" },
  { label: "Contact", href: "/contact/" },
];

export const homeMeta = [
  { key: "Program", value: "FIRST Tech Challenge" },
  { key: "Season", value: ["BIOBUZZ", "2026 – 2027"] },
  { key: "Based", value: "Palm Harbor, FL" },
  { key: "Instagram", value: "@506Pandara" },
];

export const homeSeasonTrack = [
  { label: "M1", title: "Meet 1", status: "next" as const },
  { label: "M2", title: "Meet 2", status: "upcoming" as const },
  { label: "M3", title: "Meet 3", status: "upcoming" as const },
  { label: "ST", title: "State Championship", status: "upcoming" as const },
  { label: "WC", title: "World Championship", status: "upcoming" as const },
];

export const homeAbout = {
  heading: "About",
  body: "Trophies are fun, but they're not the mission. Pandara exists to pull more kids, more schools, and more of our community into STEM — one robot at a time. Fourteen students, forty-six years of combined FIRST experience, and everything we learn handed straight to the next team down the line.",
  tags: ["Mentoring", "Free camps", "Advocacy", "Community"],
  cta: { label: "See the robot", href: "/our-robot/" },
  join: { label: "Open to", sub: "new members", href: "#" },
};

export const homeThanks = {
  heading: "Nothing on this robot was bought by us.",
  body: "Every plate, motor and plane ticket came from someone who believed fourteen students could pull it off. Here is exactly what they gave.",
  list: [
    {
      name: "EMW Laser",
      note: "12 custom laser-cut aluminum plates, and the shop visits where we learned to design for manufacturing",
    },
    {
      name: "Follow Through Laser Cutting",
      note: "The metal plates this season's robot is built from",
    },
    {
      name: "RTX",
      note: "Engineers who reviewed our designs, and the mentors who kept us honest",
    },
    {
      name: "Polymaker",
      note: "The printing material behind every custom part on the machine",
    },
    {
      name: "Palm Harbor University High School",
      note: "A shop to build in and a place to teach from",
    },
    {
      name: "Your name here",
      note: "There is still room on the turret ring",
      isOpenSlot: true,
    },
  ],
  cta: { label: "See sponsorship tiers →", href: "/sponsor-us/" },
};

export const outreachPrograms = [
  {
    title: "Mentoring",
    description:
      "Pairing experienced members with younger students and rookie teams to pass down what we've learned season over season.",
  },
  {
    title: "Free Camps",
    description:
      "Hands-on STEM camps and workshops open to local students at no cost, introducing them to robotics and engineering.",
  },
  {
    title: "Advocacy",
    description:
      "Speaking up for FIRST programs in our district and community so more schools have a path into robotics.",
  },
  {
    title: "Community",
    description:
      "Showing up at local events to demo the robot and get more of Palm Harbor excited about STEM.",
  },
];

export const homeFoot = {
  left: "FTC Team 506 · Pandara",
  center: "Built by students",
  links: [
    { label: "Sponsor us", href: "/sponsor-us/" },
    { label: "Contact", href: "/contact/" },
  ],
};
