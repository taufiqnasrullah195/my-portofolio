"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";

const roles = [
  "IT Support Specialist",
  "System Administrator",
  "Cybersecurity Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const nextChar = isDeleting ? -1 : 1;
      const nextText = role.slice(
        0,
        Math.max(0, displayText.length + nextChar)
      );
      timeout = setTimeout(() => setDisplayText(nextText), isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.08), transparent 40%), radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.04), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fafafa] border border-[#e5e5e5] text-xs font-medium text-[#737373]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Open to work
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-sm text-[#737373]">
              <MapPin size={14} />
              Vlotho, Germany
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] leading-[1.1]"
          >
            Junior IT Support
            <br />
            <span className="text-[#10b981]">&</span> System Administrator
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xl sm:text-2xl text-[#737373] font-medium h-8"
          >
            {displayText}
            <span className="inline-block w-[3px] h-[1em] bg-[#10b981] ml-1 animate-pulse align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-[#737373] leading-relaxed max-w-2xl"
          >
            Computer Science graduate with hands-on experience in IT support,
            networking, and cybersecurity. I help organizations keep their systems
            reliable, secure, and running smoothly.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/cv"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10b981] text-white rounded-lg text-sm font-medium hover:bg-[#059669] transition-colors duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: elementPosition - 80, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg text-sm font-medium hover:bg-[#10b981] transition-colors duration-300"
            >
              <Mail size={18} />
              Get in touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#projects");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: elementPosition - 80, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#171717] border border-[#d4d4d4] rounded-lg text-sm font-medium hover:border-[#10b981] hover:text-[#10b981] transition-colors duration-300"
            >
              View projects
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#a3a3a3]"
      >
        <span className="text-xs tracking-wide uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
