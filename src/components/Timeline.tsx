"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <section className="py-20 px-6 bg-background text-foreground border-10 border-red-500 mx-auto max-w-3xl">
      <h2 className="text-4xl font-bold mb-10 text-center">My Journey</h2>
      <div className="flex flex-col gap-10 max-w-2xl mx-auto">
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative border-l-4 border-accent pl-6"
          >
            <div className="text-sm text-muted">{event.year}</div>
            <div className="text-xl font-semibold text-foreground">
              {event.title}
            </div>
            <div className="text-muted">{event.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
