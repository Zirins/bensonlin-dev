// src/components/Intro.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Intro() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro"
      className="relative min-h-full max-w-7xl flex items-center px-6 mx-auto overflow-hidden py-40"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-5 bg-gradient-to-br from-accent to-secondary animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full opacity-10 bg-gradient-to-br from-secondary to-accent"
          style={{
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${20 + mousePosition.y * 0.03}%`,
            transform: "translate(50%, 50%)",
            animationDelay: "1s",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full">
        {/* Desktop Layout: Split */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Profile Image */}
          <div
            className={`flex justify-center transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent via-secondary to-accent opacity-75 blur-sm group-hover:blur-md transition-all duration-300 animate-pulse" />
              <div
                className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent to-secondary animate-spin-slow"
                style={{ animationDuration: "8s" }}
              />

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-surface shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/intro/profile.jpeg"
                  alt="Benson Lin"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-secondary font-mono text-lg">Hey there, I'm</p>
              <h1 className="text-7xl font-bold">
                <span className="gradient-text">Benson Lin</span>
              </h1>
            </div>

            {/* Title with animated underline */}
            <div className="relative">
              <h2 className="text-3xl font-semibold text-foreground mb-2">
                Full-Stack Developer
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-accent to-secondary rounded-full" />
            </div>

            {/* Enhanced Bio */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-xl leading-relaxed">
                I craft{" "}
                <span className="text-accent font-semibold">
                  elegant, efficient
                </span>{" "}
                web applications that prioritize{" "}
                <span className="text-secondary font-semibold">
                  user experience
                </span>{" "}
                and
                <span className="text-accent font-semibold"> performance</span>.
              </p>
              <p className="text-muted font-mono text-sm">
                Currently building the future, one line of code at a time.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection("timeline")}
                className="theme-button-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200"
              >
                View My Journey
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="theme-button-secondary px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200"
              >
                Let's Talk
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-divider">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent to-secondary opacity-75 blur-sm animate-pulse" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-surface shadow-2xl">
                <Image
                  src="/intro/profile.jpeg"
                  alt="Benson Lin"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-surface/90 backdrop-blur-sm rounded-full px-3 py-1 border border-accent/20">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium text-foreground">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            <div className="space-y-2">
              <p className="text-secondary font-mono">Hey there, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                Benson Lin
              </h1>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Full-Stack Developer
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              I craft{" "}
              <span className="text-accent font-semibold">
                elegant, efficient
              </span>{" "}
              web applications that prioritize user experience and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => scrollToSection("timeline")}
                className="theme-button-primary px-6 py-3 font-semibold"
              >
                View My Journey
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="theme-button-secondary px-6 py-3 font-semibold"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <span className="text-sm font-mono">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
