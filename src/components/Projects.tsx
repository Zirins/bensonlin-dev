import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "MBTA Huddle Chat",
    description:
      "Real-time chat app for MBTA riders with live train tracking. Integrated MBTA APIs, built efficient REST APIs, and deployed a Dockerized backend.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Docker"],
    githubLink: "https://github.com/Zirins/huddle-chat",
    liveDemoLink: "https://huddle.stoiber.network/",
    imageSrc: "/projects/img.png",
  },
  {
    title: "Hospital Navigation System",
    description:
      "Built for Mass General Brigham. Full-stack indoor routing with real-time pathfinding using Dijkstra and A* — deployed on AWS EC2 with Docker.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    githubLink: "https://github.com/Zirins/mgh-navigation-system",
    imageSrc: "/images/hospital-nav.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20  px-6 bg-background">
      <h2 className="text-4xl font-bold text-center text-foreground mb-12 theme-title">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
