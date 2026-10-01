"use client";

import { Mail, Phone, MapPin, Globe, Award, GraduationCap, Briefcase, Printer } from "lucide-react";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm print:shadow-none">
        <header className="border-b-2 border-[#10b981] pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#171717]">
            Taufiq Nashrullah
          </h1>
          <p className="text-lg text-[#10b981] font-medium mt-1">
            Junior IT Support & System Administrator
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#737373]">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Vlotho, Germany
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> taufiqnashrullah.work@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} /> +49 160 92261260
            </span>
            <span className="flex items-center gap-1">
              <Globe size={14} /> taufiqnasrullah195.github.io/my-portofolio
            </span>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#171717] border-b border-[#e5e5e5] pb-2 mb-4">
            Summary
          </h2>
          <p className="text-[#737373] leading-relaxed">
            Computer Science graduate with practical experience in IT support, networking,
            and cybersecurity. Currently working as an Auszubildender in Germany and seeking
            an entry-level Junior IT Support or System Administrator position.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#171717] border-b border-[#e5e5e5] pb-2 mb-4 flex items-center gap-2">
            <Briefcase size={20} className="text-[#10b981]" /> Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#171717]">Auszubildender Medientechnologe Druck</h3>
              <p className="text-sm text-[#737373]">Sattler Media GmbH, Bad Oeynhausen — Sep 2025 to Present</p>
              <ul className="list-disc list-inside text-sm text-[#737373] mt-1">
                <li>Operated and monitored industrial printing equipment.</li>
                <li>Followed technical documentation and SOPs.</li>
                <li>Assisted in troubleshooting production issues.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#171717]">Full Stack Developer Intern</h3>
              <p className="text-sm text-[#737373]">PT. Bank BTPN Tbk, Jakarta — Dec 2022 to Jan 2023</p>
              <ul className="list-disc list-inside text-sm text-[#737373] mt-1">
                <li>Developed RESTful APIs using Golang.</li>
                <li>Implemented CRUD operations and documented APIs.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#171717]">Network Technician Intern</h3>
              <p className="text-sm text-[#737373]">PT. Telkom Indonesia Tbk, Bekasi — Nov 2015 to Jan 2016</p>
              <ul className="list-disc list-inside text-sm text-[#737373] mt-1">
                <li>Maintained MDF infrastructure and installed connections.</li>
                <li>Performed cable inspection and basic network troubleshooting.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#171717] border-b border-[#e5e5e5] pb-2 mb-4 flex items-center gap-2">
            <GraduationCap size={20} className="text-[#10b981]" /> Education
          </h2>
          <div>
            <h3 className="font-semibold text-[#171717]">Bachelor of Computer Science</h3>
            <p className="text-sm text-[#737373]">Amikom Yogyakarta University, Indonesia — 2017 to 2021</p>
            <p className="text-sm text-[#737373]">Final grade: 3.15 / 4.00 | EQF Level 6</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#171717] border-b border-[#e5e5e5] pb-2 mb-4 flex items-center gap-2">
            <Award size={20} className="text-[#10b981]" /> Certifications
          </h2>
          <div>
            <h3 className="font-semibold text-[#171717]">Cyber Security Engineer Bootcamp</h3>
            <p className="text-sm text-[#737373]">Merdeka Siber, Jakarta — Valid until 1 Mar 2028</p>
            <ul className="list-disc list-inside text-sm text-[#737373] mt-1">
              <li>Penetration Testing, OWASP Top 10, SIEM, Digital Forensics, CTF</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#171717] border-b border-[#e5e5e5] pb-2 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#737373]">
            <div>
              <h4 className="font-semibold text-[#171717]">IT Support</h4>
              <p>Hardware/software troubleshooting, user support, system configuration, SOPs</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#171717]">Networking</h4>
              <p>TCP/IP, LAN/WAN, cable inspection, network diagnostics</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#171717]">Security</h4>
              <p>Nmap, Burp Suite, Metasploit, OWASP Top 10, vulnerability assessment</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#171717]">Tools & Scripting</h4>
              <p>Windows, Kali Linux, Python, SQL</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#171717] border-b border-[#e5e5e5] pb-2 mb-4">
            Languages
          </h2>
          <p className="text-sm text-[#737373]">
            Indonesian (Native), English (C1 listening/reading, B2 speaking/writing), German (B1)
          </p>
        </section>

        <div className="flex justify-center print:hidden">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] text-white rounded-lg font-medium hover:bg-[#059669] transition-colors"
          >
            <Printer size={18} />
            Download / Print CV
          </button>
        </div>
      </div>
    </div>
  );
}
