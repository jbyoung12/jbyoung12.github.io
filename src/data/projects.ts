export type Project = {
  name: string;
  summary: string;
  href: string;
  stack?: string;
  source?: string;
  site?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Aeolus",
    summary:
      "A trip plan that starts with destinations and dates, then keeps the route, stays, and booking decisions in one place.",
    href: "https://aeolus-5tt.pages.dev",
    featured: true,
  },
  {
    name: "Rewind",
    summary:
      "Turns a year of photos and videos into a short film, cut on your iPhone. The library stays on the phone.",
    href: "https://rewindfilm.app",
    featured: true,
  },
  {
    name: "Nostos",
    summary: "A family tree with the people, the stories, and the records behind them.",
    href: "https://nostos-family.pages.dev",
    featured: true,
  },
  {
    name: "Faber",
    summary:
      "Describe a recurring task. Faber previews the first run, then does it in the apps you already use.",
    href: "https://getfaber.co",
    featured: true,
  },
  {
    name: "Window Seat",
    summary: "A daily geography game. Guess where a photo was taken from an airplane window.",
    href: "https://playwindowseat.com",
  },
  {
    name: "Yamas",
    summary: "Say what you're craving. Yamas recommends restaurants that match.",
    href: "https://askyamas.com",
  },
  {
    name: "Good Morning World",
    summary:
      "A short morning show about what matters to you, with an anchor you can talk to.",
    href: "https://good-morning-world.vercel.app",
  },
  {
    name: "FlyMe",
    summary:
      "A flying-car hop planner. Cameras rebuild the street, and a simulator has to certify the landing before the car hops.",
    href: "https://github.com/jbyoung12/flyme",
    site: "https://flyme-111809628719.us-west1.run.app",
  },
  {
    name: "Iterum",
    summary:
      "A Redis-backed context layer. Before an agent retries a brittle tool, Iterum hands it the facts and failure notes from last time.",
    href: "https://github.com/jbyoung12/iterum",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
