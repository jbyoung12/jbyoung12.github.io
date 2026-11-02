export type Project = {
  name: string;
  summary: string;
  stack: string;
  href: string;
  source?: string;
  site?: string;
  featured?: boolean;
  earlier?: boolean;
};

export const projects: Project[] = [
  {
    name: "Flyme",
    stack: "JavaScript",
    summary:
      "A flying-car hop planner. Cameras rebuild the street, and a simulator has to certify the landing before the car hops.",
    href: "https://github.com/jbyoung12/flyme",
    site: "https://flyme-111809628719.us-west1.run.app",
    featured: true,
  },
  {
    name: "Straude",
    stack: "TypeScript",
    summary:
      "Strava for Claude Code. Track sessions, share them, and climb a leaderboard.",
    href: "https://straude.com",
    source: "https://github.com/jbyoung12/straude",
    featured: true,
  },
  {
    name: "Hermes",
    stack: "Rust",
    summary:
      "Control Claude Code from Slack. Each channel is a repo, and each thread is a session.",
    href: "https://github.com/jbyoung12/hermes-bot",
    featured: true,
  },
  {
    name: "lerobot404",
    stack: "Python",
    summary:
      "Language-tasked pick-and-place for an SO-101 arm in Isaac Sim, with a pipeline into LeRobot. It retries when a grasp fails.",
    href: "https://github.com/jbyoung12/lerobot404",
    featured: true,
  },
  {
    name: "space-sim",
    stack: "Python",
    summary:
      "Short illustrations of ATP synthase and adenylate kinase. The clips are visualizations, not molecular-dynamics trajectories.",
    href: "https://github.com/jbyoung12/space-sim",
  },
  {
    name: "Iterum",
    stack: "Rust",
    summary:
      "A Redis-backed context layer. Before an agent retries a brittle tool, Iterum hands it the facts and failure notes from last time.",
    href: "https://github.com/jbyoung12/iterum",
  },
  {
    name: "Email Organizer",
    stack: "Python",
    summary:
      "A prompt-driven IMAP sorter. Rules keep a message, move it, or trash it, and the run stays a dry run until you say otherwise.",
    href: "https://github.com/jbyoung12/email-organizer",
  },
  {
    name: "GoBringIt",
    stack: "Swift",
    summary: "A food ordering and delivery platform.",
    href: "https://www.gobringit.com/",
    source: "https://github.com/jbyoung12/GoBringIt-Delivery",
    earlier: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const currentProjects = projects.filter((project) => !project.earlier);
export const earlierProjects = projects.filter((project) => project.earlier);
