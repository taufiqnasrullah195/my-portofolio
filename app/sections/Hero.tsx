"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fafafa] border border-[#e5e5e5] text-xs font-medium text-[#737373]">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
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
            <span className="text-[#737373]">&</span> System Administrator
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-[#737373] leading-relaxed max-w-2xl"
          >
            Computer Science graduate with hands-on experience in IT support,
            networking, and cybersecurity. I help organizations keep their systems
            reliable, secure, and running smoothly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#171717] border border-[#d4d4d4] rounded-lg text-sm font-medium hover:bg-[#fafafa] transition-colors"
            >
              View projects
            </a>
          </motion.div>
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
