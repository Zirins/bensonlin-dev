// src/components/Navbar.tsx
"use client";

import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-accent px-6 py-3 rounded-full shadow-lg z-50">
      <ul className="flex items-center gap-6">
        <li>
          <Link href="#about" aria-label="About">
            <FaUser className="text-xl text-accent-foreground transition duration-200 ease-in-out hover:scale-120 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2" />
          </Link>
        </li>
        <li>
          <Link href="#projects" aria-label="Projects">
            <FaProjectDiagram className="text-xl text-accent-foreground transition duration-200 ease-in-out hover:scale-120 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2" />
          </Link>
        </li>
        <li>
          <Link href="#contact" aria-label="Contact">
            <FaEnvelope className="text-xl text-accent-foreground transition duration-200 ease-in-out hover:scale-120 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
