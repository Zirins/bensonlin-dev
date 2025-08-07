// src/components/Contact.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    platform: "Email",
    handle: "BensonLin9801@gmail.com",
    href: "mailto:BensonLin9801@gmail.com",
    icon: "📧",
    description: "For project inquiries and collaborations",
    cta: "Send me an email",
    responseTime: "Usually responds within 24h",
    color: "from-blue-500 to-blue-600",
    stats: "Direct line",
  },
  {
    platform: "GitHub",
    handle: "@Zirins",
    href: "https://github.com/Zirins",
    icon: "💻",
    description: "Check out my code and projects",
    cta: "View my repositories",
    responseTime: "Active daily",
    color: "from-gray-700 to-gray-800",
    stats: "10+ repos",
  },
  {
    platform: "LinkedIn",
    handle: "Benson Lin",
    href: "https://www.linkedin.com/in/benson-lin-4b5806357/",
    icon: "🤝",
    description: "Let's connect professionally",
    cta: "Connect with me",
    responseTime: "Active weekly",
    color: "from-blue-600 to-blue-700",
    stats: "Open to opportunities",
  },
];

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Los_Angeles", // Adjust to your timezone
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In real app, you'd send this to your backend/service
    const mailtoLink = `mailto:BensonLin9801@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Hi Benson,%0D%0A%0D%0A${formData.message}%0D%0A%0D%0ABest regards,%0D%0A${formData.name}%0D%0A${formData.email}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-full bg-background flex flex-col justify-center px-6 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-accent/10 to-secondary/10 animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-secondary/5 to-accent/5 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-surface/50 backdrop-blur-sm rounded-full px-6 py-3 border border-divider mb-6"
          >
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-mono text-muted">
              Available for opportunities • {currentTime} PST
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Ready to Build Something?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just
            want to chat about tech—
            <span className="text-accent font-semibold">
              {" "}
              I'd love to hear from you
            </span>
            .
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Get in touch
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.platform}
                href={method.href}
                target={method.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  method.href.startsWith("mailto:") ? "" : "noopener noreferrer"
                }
                className="block group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="theme-card-hover p-6 group-hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{method.icon}</div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {method.platform}
                        </h4>
                        <span className="text-xs bg-surface px-2 py-1 rounded-full text-muted">
                          {method.stats}
                        </span>
                      </div>

                      <p className="text-secondary font-mono text-sm mb-1">
                        {method.handle}
                      </p>

                      <p className="text-muted-foreground text-sm mb-3">
                        {method.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-accent font-medium text-sm group-hover:underline">
                          {method.cta} →
                        </span>
                        <span className="text-xs text-muted">
                          {method.responseTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 theme-card">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-xs text-muted">Avg response</div>
              </div>
              <div className="text-center p-4 theme-card">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-xs text-muted">Response rate</div>
              </div>
              <div className="text-center p-4 theme-card">
                <div className="text-2xl font-bold gradient-text">PST</div>
                <div className="text-xs text-muted">Timezone</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, idea, or just say hi!"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full theme-button-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                    Opening email client...
                  </span>
                ) : (
                  <>
                    Send Message
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
