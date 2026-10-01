"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Link2, ExternalLink, Clock, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "PC Health Check Tool",
    description:
      "Cross-platform Python CLI that collects system health metrics (CPU, RAM, disk, network) and generates HTML/CSV reports. Includes configurable thresholds and comparison against previous runs.",
    tags: ["Python", "psutil", "Jinja2", "pytest"],
    status: "In Progress",
    links: [
      { label: "GitHub", url: "https://github.com/taufiqnasrullah195/pc-health-check" },
    ],
  },
  {
    title: "IT Support Operations Platform",
    description:
      "A full-stack internal platform for IT support teams: asset inventory, ticketing, knowledge base, network diagnostics, and AI copilot. Built with Next.js, FastAPI, and PostgreSQL.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    status: "In Progress",
    links: [],
  },
  {
    title: "Security Lab Notes",
    description:
      "Personal documentation and capture-the-flag writeups from Merdeka Siber bootcamp, covering OWASP Top 10, vulnerability assessment, and basic digital forensics.",
    tags: ["Cybersecurity", "OWASP", "CTF", "Documentation"],
    status: "Learning",
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight mb-16">
            Featured work
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <div className="group h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e5e5] hover:shadow-md hover:-translate-y-1 hover:border-[#10b981]/30 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-[#171717]">
                    {project.title}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${
                      project.status === "In Progress"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {project.status === "In Progress" ? (
                      <Clock size={12} />
                    ) : (
                      <CheckCircle size={12} />
                    )}
                    {project.status}
                  </span>
                </div>

                <p className="text-[#737373] leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-[#737373] bg-[#fafafa] border border-[#e5e5e5] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#171717] hover:text-[#10b981] transition-colors"
                    >
                      {link.label === "GitHub" ? (
                        <Link2 size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                      {link.label}
                    </a>
                  ))}
                  {project.links.length === 0 && (
                    <span className="text-sm text-[#a3a3a3]">
                      Repository coming soon
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/taufiqnasrullah195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#d4d4d4] text-[#171717] rounded-lg text-sm font-medium hover:border-[#10b981] hover:text-[#10b981] transition-colors"
            >
              <Link2 size={18} />
              View all on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
