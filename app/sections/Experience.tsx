"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Auszubildender Medientechnologe Druck",
    company: "Sattler Media GmbH",
    location: "Bad Oeynhausen, Germany",
    period: "Sep 2025 – Present",
    bullets: [
      "Operated and monitored industrial printing equipment in a production environment.",
      "Followed technical documentation and standard operating procedures (SOPs).",
      "Assisted in troubleshooting production issues and maintaining workflow efficiency.",
      "Performed quality inspections to ensure compliance with production standards.",
    ],
  },
  {
    role: "Founder",
    company: "Just Apparel",
    location: "Bekasi, Indonesia",
    period: "Feb 2020 – Feb 2023",
    bullets: [
      "Managed daily business operations for an online fashion brand.",
      "Coordinated product sourcing, inventory, and order fulfillment.",
      "Handled customer communication and after-sales support.",
      "Oversaw business planning, marketing, and financial administration.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "PT. Bank BTPN Tbk",
    location: "Jakarta, Indonesia",
    period: "Dec 2022 – Jan 2023",
    bullets: [
      "Developed RESTful APIs using Golang.",
      "Implemented CRUD operations for backend services.",
      "Tested and debugged backend applications.",
      "Documented API functionality and development progress.",
    ],
  },
  {
    role: "Network Technician Intern",
    company: "PT. Telkom Indonesia Tbk",
    location: "Bekasi, Indonesia",
    period: "Nov 2015 – Jan 2016",
    bullets: [
      "Assisted in maintaining Main Distribution Frame (MDF) infrastructure.",
      "Supported installation of telephone and internet connections.",
      "Performed cable inspection and basic network troubleshooting.",
      "Assisted in preventive maintenance of telecommunication equipment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.08), transparent 35%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight mb-16">
            Where I have worked
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.company + exp.period} delay={index * 0.1}>
              <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e5e5] hover:shadow-md hover:-translate-y-1 hover:border-[#10b981]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#fafafa] border border-[#e5e5e5] text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#171717]">
                        {exp.role}
                      </h3>
                      <p className="text-[#737373]">
                        {exp.company} — {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#a3a3a3] shrink-0">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                <ul className="mt-4 space-y-2 ml-[68px]">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#737373] leading-relative flex gap-2"
                    >
                      <span className="text-[#a3a3a3] mt-1">•</span>
                      {bullet}
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
