"use client";

import AnimatedSection from "../components/AnimatedSection";
import { MapPin, Languages, GraduationCap, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">
                About me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight">
                Building reliable IT foundations.
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg text-[#171717] leading-relaxed">
                I am a Computer Science graduate based in Vlotho, Germany, with
                practical experience in IT support, network infrastructure, and
                cybersecurity. I enjoy solving technical problems, documenting
                solutions, and helping teams keep their systems secure and
                operational.
              </p>
              <p className="text-lg text-[#737373] leading-relaxed">
                Currently, I work as an Auszubildender Medientechnologe Druck at
                Sattler Media GmbH, where I follow technical documentation, operate
                production equipment, and assist with troubleshooting. Previously, I
                interned as a Network Technician at PT. Telkom Indonesia and as a Full
                Stack Developer at PT. Bank BTPN Tbk.
              </p>
              <p className="text-lg text-[#737373] leading-relaxed">
                I am fluent in Indonesian, proficient in English, and conversational in
                German (B1). I am continuously improving my German with the goal of
                reaching B2 level, which will allow me to communicate effectively in
                workplace and technical contexts. I am currently seeking an entry-level
                role as a Junior IT Support Specialist or Junior System Administrator.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard
              icon={<MapPin size={20} />}
              title="Based in"
              value="Vlotho, Germany"
            />
            <InfoCard
              icon={<Languages size={20} />}
              title="Languages"
              value="Indonesian, English, German"
            />
            <InfoCard
              icon={<GraduationCap size={20} />}
              title="Education"
              value="B.Sc. Computer Science"
            />
            <InfoCard
              icon={<Shield size={20} />}
              title="Focus"
              value="IT Support & Security"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="p-5 rounded-xl bg-[#fafafa] border border-[#e5e5e5] hover:shadow-md transition-shadow duration-300">
      <div className="text-[#171717] mb-3">{icon}</div>
      <p className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider mb-1">
        {title}
      </p>
      <p className="text-sm font-semibold text-[#171717]">{value}</p>
    </div>
  );
}
