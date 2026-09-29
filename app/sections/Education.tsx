"use client";

import AnimatedSection from "../components/AnimatedSection";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Amikom Yogyakarta University",
    location: "Yogyakarta, Indonesia",
    period: "Sep 2017 – Aug 2021",
    details: [
      "Final grade: 3.15 / 4.00",
      "Level in EQF: 6",
      "Thesis: Identification of Banana Fruit Maturity Level Using HSI Color Space Transformation Method Based on Fruit Peel",
    ],
    link: "https://amikom.ac.id/",
  },
];

const certifications = [
  {
    title: "Cyber Security Engineer Bootcamp",
    issuer: "Merdeka Siber",
    location: "Jakarta, Indonesia",
    validUntil: "1 Mar 2028",
    topics: [
      "Penetration Testing Fundamentals",
      "Web Application Security (OWASP Top 10)",
      "Android Application Security Testing",
      "Security Information and Event Management (SIEM)",
      "Digital Forensics Fundamentals",
      "DevSecOps Principles",
      "Capture The Flag (CTF)",
      "Bug Bounty Methodologies",
      "Vulnerability Assessment & Reporting",
    ],
    link: "https://merdekasiber.com/",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">
            Education & Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight mb-16">
            Education & training
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <AnimatedSection delay={0.1}>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e5e5e5] h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white border border-[#e5e5e5] text-[#171717]">
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-xl font-semibold text-[#171717]">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <h4 className="text-lg font-semibold text-[#171717]">
                      {edu.degree}
                    </h4>
                    <p className="text-[#737373] mt-1">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="text-sm text-[#a3a3a3] mt-1">{edu.period}</p>
                    <ul className="mt-4 space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-sm text-[#737373] flex gap-2">
                          <span className="text-[#a3a3a3]">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#171717] hover:underline"
                    >
                      Visit website <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.2}>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e5e5e5] h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white border border-[#e5e5e5] text-[#171717]">
                  <Award size={22} />
                </div>
                <h3 className="text-xl font-semibold text-[#171717]">
                  Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.title}>
                    <h4 className="text-lg font-semibold text-[#171717]">
                      {cert.title}
                    </h4>
                    <p className="text-[#737373] mt-1">
                      {cert.issuer}, {cert.location}
                    </p>
                    <p className="text-sm text-[#a3a3a3] mt-1">
                      Valid until: {cert.validUntil}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {cert.topics.slice(0, 5).map((topic, i) => (
                        <li key={i} className="text-sm text-[#737373] flex gap-2">
                          <span className="text-[#a3a3a3]">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#171717] hover:underline"
                    >
                      Visit website <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
