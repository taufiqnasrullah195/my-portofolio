"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Check } from "lucide-react";

const skillCategories = [
  {
    title: "IT Support",
    skills: [
      "Hardware & software troubleshooting",
      "User support",
      "System configuration",
      "Technical documentation",
      "Problem solving",
      "SOPs & standard operating procedures",
    ],
  },
  {
    title: "Networking",
    skills: [
      "TCP/IP fundamentals",
      "LAN/WAN fundamentals",
      "Network troubleshooting",
      "Internet connectivity",
      "Cable inspection",
      "Basic network diagnostics",
      "Telecommunications infrastructure",
    ],
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "Kali Linux", "Linux fundamentals"],
  },
  {
    title: "Security Tools",
    skills: ["Nmap", "Burp Suite", "Metasploit", "Vulnerability Assessment"],
  },
  {
    title: "Programming & Scripting",
    skills: ["Python", "SQL", "JavaScript / TypeScript (basic)"],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Web Application Security",
      "Penetration Testing fundamentals",
      "OWASP Top 10",
      "Network Security",
      "Security Awareness",
      "SIEM fundamentals",
      "Digital Forensics fundamentals",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight mb-16">
            Tools & technologies
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.08}>
              <div className="group h-full p-6 rounded-2xl bg-[#fafafa] border border-[#e5e5e5] hover:shadow-md hover:-translate-y-1 hover:border-[#10b981]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#10b981] group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-[#171717]">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#737373] flex items-start gap-2"
                    >
                      <span className="mt-0.5 text-[#10b981] shrink-0">
                        <Check size={14} />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
