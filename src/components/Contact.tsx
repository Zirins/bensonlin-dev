"use client";

import React, { useState } from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-background text-center border-10 border-yellow-500 max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-foreground mb-4 tracking-wide">
        Let’s Connect
      </h2>
      <p className="text-muted mb-8 text-lg max-w-md mx-auto">
        You can reach me through these platforms—I'm always open to new
        opportunities or collaborations.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:BensonLin9801@gmail.com"
          className="bg-accent text-accent-foreground px-6 py-2 rounded font-semibold transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Email
        </a>
        <a
          href="https://github.com/Zirins"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-accent text-accent px-6 py-2 rounded font-semibold transition hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/benson-lin-4b5806357/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-accent text-accent px-6 py-2 rounded font-semibold transition hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
