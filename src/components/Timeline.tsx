"use client";

import React from "react";

const timeline = [
  {
    year: "2018",
    title: "First Line of Code",
    description:
      "Started coding in high school using Python. Built useless stuff, but got hooked.",
  },
  {
    year: "2021",
    title: "First Full Stack App",
    description:
      "Built a CRUD app with React and Node.js — it was buggy, but mine.",
  },
  {
    year: "2023",
    title: "Final Year, No Internship",
    description:
      "Focused on self-teaching and building a solid portfolio instead of waiting on luck.",
  },
  {
    year: "2024",
    title: "Portfolio Launch",
    description: "This site went live. You’re reading this timeline now.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-10 text-center">My Journey</h2>
      <div className="flex flex-col gap-10 max-w-2xl mx-auto">
        {timeline.map((event, index) => (
          <div key={index} className="relative border-l-4 border-accent pl-6">
            <div className="text-sm text-muted">{event.year}</div>
            <div className="text-xl font-semibold text-foreground">
              {event.title}
            </div>
            <div className="text-muted">{event.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
