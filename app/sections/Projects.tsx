"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Link2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IT Support Operations Platform",
    description:
      "A full-stack internal platform for IT support teams: asset inventory, ticketing, knowledge base, network diagnostics, and AI copilot. Built with Next.js, FastAPI, and PostgreSQL.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/taufiqnasrullah195/it-support-hub" },
    ],
  },
  {
    title: "PC Health Check Tool",
    description:
      "Cross-platform Python CLI that collects system health metrics (CPU, RAM, disk, network) and generates HTML/CSV reports. Includes configurable thresholds and comparison against previous runs.",
    tags: ["Python", "psutil", "Jinja2", "pytest"],
    links: [
      { label: "GitHub", url: "https://github.com/taufiqnasrullah195/pc-health-check" },
    ],
  },
  {
    title: "Network Diagnostic Scripts",
    description:
      "Collection of PowerShell and Python scripts for network troubleshooting: ping sweeps, port scans, DNS checks, and basic cable/MDF documentation helpers.",
    tags: ["PowerShell", "Python", "Networking", "Nmap"],
    links: [
      { label: "GitHub", url: "https://github.com/taufiqnasrullah195/network-diagnostics" },
    ],
  },
  {
    title: "Security Lab Notes",
    description:
      "Personal documentation and capture-the-flag writeups from Merdeka Siber bootcamp, covering OWASP Top 10, vulnerability assessment, and basic digital forensics.",
    tags: ["Cybersecurity", "OWASP", "CTF", "Documentation"],
    links: [
      { label: "GitHub", url: "https://github.com/taufiqnasrullah195/security-lab-notes" },
    ],
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
              <div className="group h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e5e5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-semibold text-[#171717] mb-3">
                  {project.title}
                </h3>
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
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#171717] hover:text-[#737373] transition-colors"
                    >
                      {link.label === "GitHub" ? (
                        <Link2 size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
