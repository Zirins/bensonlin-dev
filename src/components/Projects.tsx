// src/components/Projects.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "MBTA Huddle Chat",
    subtitle: "Real-Time Transit Communication",
    description:
      "A comprehensive chat application designed specifically for MBTA riders, featuring live train tracking integration and real-time messaging. Users can connect with fellow commuters, share updates, and stay informed about transit conditions.",
    longDescription:
      "Built from the ground up with a focus on real-time performance and scalability. Integrated multiple MBTA APIs for live transit data, implemented efficient WebSocket connections for instant messaging, and deployed a fully containerized backend infrastructure.",
    tech: [
      { name: "React", color: "from-blue-400 to-blue-600" },
      { name: "Next.js", color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", color: "from-blue-500 to-blue-700" },
      { name: "Node.js", color: "from-green-500 to-green-700" },
      { name: "MongoDB", color: "from-green-400 to-green-600" },
      { name: "Docker", color: "from-blue-400 to-blue-600" },
    ],
    githubLink: "https://github.com/Zirins/huddle-chat",
    liveDemoLink: "https://huddle.stoiber.network/",
    imageSrc: "/projects/img.png",
    achievements: [
      "Real-time messaging with 99.9% uptime",
      "Integrated 5+ MBTA APIs",
      "Containerized deployment pipeline",
    ],
    status: "Live & Active",
    featured: true,
  },
  {
    id: 2,
    title: "Hospital Navigation System",
    subtitle: "AI-Powered Indoor Pathfinding",
    description:
      "An advanced indoor navigation system built for Mass General Brigham, featuring intelligent pathfinding algorithms and real-time route optimization for complex hospital layouts.",
    longDescription:
      "Implemented sophisticated pathfinding algorithms including Dijkstra and A* for optimal route calculation. The system handles complex multi-floor navigation with accessibility considerations, real-time updates for closed areas, and integration with hospital databases.",
    tech: [
      { name: "React", color: "from-blue-400 to-blue-600" },
      { name: "TypeScript", color: "from-blue-500 to-blue-700" },
      { name: "Node.js", color: "from-green-500 to-green-700" },
      { name: "Prisma", color: "from-indigo-500 to-indigo-700" },
      { name: "PostgreSQL", color: "from-blue-600 to-blue-800" },
      { name: "AWS", color: "from-orange-400 to-orange-600" },
      { name: "Docker", color: "from-blue-400 to-blue-600" },
    ],
    githubLink: "https://github.com/Zirins/mgh-navigation-system",
    imageSrc: "/images/hospital-nav.png",
    achievements: [
      "Deployed on AWS EC2 infrastructure",
      "Pathfinding algorithms (Dijkstra & A*)",
      "Full-stack hospital integration",
    ],
    status: "Enterprise Ready",
    featured: true,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectData)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative mb-20 last:mb-0"
    >
      {/* Project Container */}
      <div className="theme-card-hover p-0 overflow-hidden max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 lg:h-96 bg-surface overflow-hidden">
            {!imageError ? (
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-4xl mb-2">🚀</div>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>
            )}

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-success/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {project.status}
              </div>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  ⭐ Featured
                </div>
              </div>
            )}

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            {/* Header */}
            <div className="space-y-4">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary font-semibold text-lg">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-muted-foreground leading-relaxed text-sm"
                  >
                    {project.longDescription}
                  </motion.p>
                )}

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-accent text-sm font-medium hover:text-secondary transition-colors"
                >
                  {isExpanded ? "Show Less" : "Read More"} →
                </button>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4 mt-6">
              <h4 className="text-sm font-semibold text-foreground">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${tech.color} shadow-sm`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-button-primary flex-1 text-center hover:scale-105 transition-all duration-200"
                >
                  🚀 Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary flex-1 text-center hover:scale-105 transition-all duration-200"
              >
                💻 View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Number */}
      <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-lg">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, var(--color-secondary) 2px, transparent 0), radial-gradient(circle at 75px 75px, var(--color-accent) 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications
              with real-world impact and cutting-edge technologies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="theme-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              I've built many more projects exploring different technologies and
              solving various problems. Check out my GitHub for the complete
              collection.
            </p>
            <a
              href="https://github.com/Zirins"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-button-primary inline-block px-8 py-4 hover:scale-105 transition-all duration-200"
            >
              🔍 Explore All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
