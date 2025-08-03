// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "intro", label: "Intro", icon: "👋" },
  { id: "timeline", label: "Journey", icon: "🚀" },
  { id: "projects", label: "Projects", icon: "💻" },
  { id: "contact", label: "Contact", icon: "📞" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Show navbar after scrolling a bit
      setIsVisible(scrollTop > 100);

      // Determine active section
      const sections = ["intro", "timeline", "projects", "contact"];
      let currentSection = "intro";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          {/* Main Navigation */}
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute inset-0 bg-surface/80 backdrop-blur-md rounded-full border border-border shadow-2xl" />

            {/* Progress Bar Fill */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-full opacity-20 transition-all duration-300"
              style={{
                clipPath: `inset(0 ${100 - scrollProgress}% 0 0)`,
              }}
            />

            {/* Navigation Content */}
            <div className="relative px-6 py-4">
              <div className="flex items-center gap-6">
                {/* Section Indicators */}
                {sections.map((section, index) => (
                  <div key={section.id} className="relative">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      onMouseEnter={() => setShowTooltip(section.id)}
                      onMouseLeave={() => setShowTooltip(null)}
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-accent text-accent-foreground scale-110 shadow-lg"
                          : "text-muted hover:text-foreground hover:bg-surface hover:scale-105"
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>

                      {/* Active indicator */}
                      {activeSection === section.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {showTooltip === section.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-surface border border-border rounded-lg text-sm font-medium text-foreground whitespace-nowrap shadow-lg"
                        >
                          {section.label}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-surface border-r border-b border-border rotate-45 -mt-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border"
          >
            {Math.round(scrollProgress)}% explored
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
