"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Mail, Phone, MapPin, Link2 } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "taufiqnashrullah.work@gmail.com",
    href: "mailto:taufiqnashrullah.work@gmail.com",
  },
  {
    label: "Phone",
    value: "+49 160 92261260",
    href: "tel:+4916092261260",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/taufiqnasrullah195",
    href: "https://www.linkedin.com/in/taufiqnasrullah195",
  },
  {
    label: "GitHub",
    value: "github.com/taufiqnasrullah195",
    href: "https://github.com/taufiqnasrullah195",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-lg text-[#737373] max-w-2xl mb-16">
            I am open to Junior IT Support, System Administrator, and IT
            Operations roles in Germany. If you think I could be a good fit,
            feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-5 rounded-2xl bg-white border border-[#e5e5e5] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#fafafa] border border-[#e5e5e5] text-[#171717]">
                      {link.label === "Email" ? (
                        <Mail size={20} />
                      ) : link.label === "Phone" ? (
                        <Phone size={20} />
                      ) : (
                        <Link2 size={20} />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider mb-1">
                        {link.label}
                      </p>
                      <p className="text-sm font-semibold text-[#171717] group-hover:text-[#737373] transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e5e5] h-full">
              <h3 className="text-xl font-semibold text-[#171717] mb-4">
                Send a message
              </h3>
              <form
                action="mailto:taufiqnashrullah.work@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#737373] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#e5e5e5] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#737373] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#e5e5e5] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#737373] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#e5e5e5] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#171717] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Send message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 pt-8 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#a3a3a3]">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Vlotho, Germany</span>
            </div>
            <p>
              © {new Date().getFullYear()} Taufiq Nashrullah. All rights
              reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
