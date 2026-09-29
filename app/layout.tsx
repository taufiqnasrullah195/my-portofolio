import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taufiq Nashrullah — Junior IT Support & System Administrator",
  description:
    "Computer Science graduate based in Germany. Skilled in IT support, networking, Windows/Linux, and cybersecurity.",
  keywords: [
    "IT Support",
    "System Administrator",
    "Junior IT Support",
    "Networking",
    "Cybersecurity",
    "Taufiq Nashrullah",
  ],
  authors: [{ name: "Taufiq Nashrullah" }],
  openGraph: {
    title: "Taufiq Nashrullah — Junior IT Support & System Administrator",
    description:
      "Computer Science graduate based in Germany. Skilled in IT support, networking, Windows/Linux, and cybersecurity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
