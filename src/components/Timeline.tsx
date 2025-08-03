// src/components/Timeline.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "2018",
    title: "The Spark",
    subtitle: "First Lines of Code",
    description:
      "Discovered Python in high school computer science class. Built my first 'Hello World' and immediately knew I wanted to do this forever. Spent nights coding random projects that made no sense but felt like magic.",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    achievement: "Built 15+ random Python scripts",
  },
  {
    year: "2021",
    title: "The Breakthrough",
    subtitle: "First Full-Stack Victory",
    description:
      "After countless tutorials, finally built my first complete web application. A messy CRUD app with React and Node.js that barely worked, but it was MINE. The moment everything clicked into place.",
    icon: "🚀",
    color: "from-blue-500 to-purple-500",
    achievement: "React + Node.js mastered",
  },
  {
    year: "2023",
    title: "The Grind",
    subtitle: "Self-Taught Hustle",
    description:
      "Senior year, no internship offers. Instead of waiting around, I doubled down on self-learning. Built projects, studied system design, and focused on becoming the developer I wanted to hire.",
    icon: "💪",
    color: "from-red-500 to-pink-500",
    achievement: "10+ portfolio projects completed",
  },
  {
    year: "2024",
    title: "The Launch",
    subtitle: "Portfolio Goes Live",
    description:
      "You're experiencing the culmination of my journey right now. This portfolio represents not just my skills, but my story. From curious beginner to confident full-stack developer.",
    icon: "🎯",
    color: "from-green-500 to-emerald-500",
    achievement: "You're reading this!",
  },
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showHint, setShowHint] = useState(false);

  const nextMoment = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % timelineData.length);
  }, []);

  const prevMoment = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + timelineData.length) % timelineData.length,
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextMoment();
        setIsAutoPlaying(false);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevMoment();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextMoment, prevMoment]);

  // Auto-play with hint system
  useEffect(() => {
    if (!isAutoPlaying) return;

    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    const autoTimer = setTimeout(() => {
      nextMoment();
      setShowHint(false);
    }, 5000);

    return () => {
      clearTimeout(hintTimer);
      clearTimeout(autoTimer);
    };
  }, [currentIndex, isAutoPlaying, nextMoment]);

  const currentMoment = timelineData[currentIndex];

  return (
    <section className="relative min-h-screen bg-background flex flex-col justify-center px-6 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--color-accent) 25%, transparent 25%), 
                           linear-gradient(-45deg, var(--color-accent) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, var(--color-accent) 75%), 
                           linear-gradient(-45deg, transparent 75%, var(--color-accent) 75%)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
          >
            My Journey
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Navigate with ← → keys or click the arrows
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125 shadow-lg"
                    : index < currentIndex
                      ? "bg-secondary"
                      : "bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentIndex + 1) / timelineData.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Main Timeline Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: 15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="theme-card p-8 md:p-12 mx-auto max-w-4xl"
              style={{ perspective: "1000px" }}
            >
              {/* Year Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-6xl`}>{currentMoment.icon}</div>
                <div>
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-white font-bold text-lg bg-gradient-to-r ${currentMoment.color}`}
                  >
                    {currentMoment.year}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {currentMoment.title}
                  </h3>
                  <p className="text-xl text-secondary font-semibold">
                    {currentMoment.subtitle}
                  </p>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {currentMoment.description}
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-mono text-accent">
                    {currentMoment.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevMoment();
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-sm border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
          >
            ←
          </button>

          <button
            onClick={() => {
              nextMoment();
              setIsAutoPlaying(false);
            }}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-sm border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 ${
              showHint ? "animate-pulse ring-2 ring-accent/50" : ""
            }`}
          >
            →
          </button>
        </div>

        {/* Timeline Counter */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-surface/50 backdrop-blur-sm rounded-full px-6 py-3 border border-divider">
            <span className="text-sm text-muted">
              {currentIndex + 1} of {timelineData.length}
            </span>
            <div className="w-px h-4 bg-divider" />
            <span className="text-sm text-muted-foreground">
              {isAutoPlaying ? "Auto-playing" : "Manual control"}
            </span>
            {!isAutoPlaying && (
              <button
                onClick={() => setIsAutoPlaying(true)}
                className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full hover:bg-accent/80 transition-colors"
              >
                Resume auto
              </button>
            )}
          </div>
        </div>

        {/* Keyboard Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          className="fixed bottom-8 right-8 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
        >
          Press → to continue
        </motion.div>
      </div>
    </section>
  );
}
