// src/components/CustomCursor.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-pointer, input, textarea',
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);

          // Different variants for different elements
          if (el.classList.contains("theme-button-primary")) {
            setCursorVariant("button-primary");
          } else if (el.classList.contains("theme-button-secondary")) {
            setCursorVariant("button-secondary");
          } else if (el.tagName === "A") {
            setCursorVariant("link");
          } else {
            setCursorVariant("hover");
          }
        });

        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setCursorVariant("default");
        });
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [isVisible]);

  // Don't render on touch devices
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const getVariantStyles = () => {
    switch (cursorVariant) {
      case "button-primary":
        return {
          ring: "w-12 h-12 border-2 border-accent bg-accent/10",
          dot: "w-1 h-1 bg-accent",
          glow: "w-16 h-16 bg-accent/20",
        };
      case "button-secondary":
        return {
          ring: "w-12 h-12 border-2 border-secondary bg-secondary/10",
          dot: "w-1 h-1 bg-secondary",
          glow: "w-16 h-16 bg-secondary/20",
        };
      case "link":
        return {
          ring: "w-8 h-8 border border-secondary bg-secondary/5",
          dot: "w-0.5 h-0.5 bg-secondary",
          glow: "w-12 h-12 bg-secondary/10",
        };
      case "hover":
        return {
          ring: "w-10 h-10 border border-accent bg-accent/5",
          dot: "w-0.5 h-0.5 bg-accent",
          glow: "w-14 h-14 bg-accent/10",
        };
      default:
        return {
          ring: "w-6 h-6 border border-foreground/20 bg-foreground/5",
          dot: "w-0.5 h-0.5 bg-foreground",
          glow: "w-10 h-10 bg-foreground/5",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      {/* Ambient glow */}
      <div
        className={`fixed rounded-full blur-xl transition-all duration-300 ease-out ${styles.glow}`}
        style={{
          left: mousePosition.x - (isHovering ? 32 : 20),
          top: mousePosition.y - (isHovering ? 32 : 20),
          opacity: isHovering ? 0.6 : 0.3,
        }}
      />

      {/* Main cursor ring */}
      <div
        className={`fixed rounded-full transition-all duration-200 ease-out ${styles.ring}`}
        style={{
          left: mousePosition.x - (isHovering ? 24 : 12),
          top: mousePosition.y - (isHovering ? 24 : 12),
          transform: isHovering ? "scale(1.2)" : "scale(1)",
        }}
      />

      {/* Center dot */}
      <div
        className={`fixed rounded-full transition-all duration-100 ease-out ${styles.dot}`}
        style={{
          left: mousePosition.x - (isHovering ? 2 : 1),
          top: mousePosition.y - (isHovering ? 2 : 1),
        }}
      />

      {/* Particle trail effect */}
      <div
        className="fixed w-2 h-2 rounded-full bg-accent/30 blur-sm animate-ping"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          animationDelay: "100ms",
          animationDuration: "1s",
        }}
      />
    </div>
  );
}

// Add this CSS to your global styles or component
const cursorStyles = `
  * {
    cursor: none !important;
  }
  
  html, body {
    cursor: none !important;
  }
  
  @media (hover: none) and (pointer: coarse) {
    * {
      cursor: auto !important;
    }
    
    html, body {
      cursor: auto !important;
    }
  }
`;

// Component to inject cursor styles
export function CursorStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = cursorStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
