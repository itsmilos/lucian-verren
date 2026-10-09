"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import LegalModals from "@/components/LegalModals";

const GOLD = "#d4b06a";
const BLUE = "#7f9bab";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#040507] text-[#e9eef2]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-[-12%] top-[15%] h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ background: GOLD, opacity: 0.045 }}
      />

      <div
        className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ background: BLUE, opacity: 0.045 }}
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div
          className="h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${GOLD}55, ${BLUE}35, transparent)`,
          }}
        />

        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_0.65fr_0.85fr] lg:gap-12">
          {/* Brand — left */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/" className="group inline-block">
              <span
                className="block text-3xl tracking-[-0.03em] text-[#d8d4cb] transition-colors duration-300 group-hover:text-[#e8cd8f] sm:text-4xl"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Lucian Verren
              </span>

              <span className="mt-2 block text-[8px] uppercase tracking-[0.4em] text-white/25">
                The Silence Behind Reality
              </span>
            </Link>

            <p className="mt-7 max-w-[380px] font-serif text-sm italic leading-7 text-white/35 sm:text-base">
              Some questions are not meant to be answered.
              <br />
              They are meant to change the way you see.
            </p>
          </motion.div>

          {/* Explore — left navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#d4b06a]/70">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-4">
              <Link
                href="/"
                className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/books/the-silence-behind-reality"
                className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
              >
                The Book
              </Link>

              <Link
                href="/books/the-silence-behind-reality#buy"
                className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
              >
                Get the Book
              </Link>
            </nav>
          </motion.div>

          {/* Legal — right */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#d4b06a]/70">
              Legal
            </p>

            <LegalModals />
          </motion.div>
        </div>

        {/* Quote */}
        <div className="relative border-t border-white/[0.06] py-10 text-center">
          <div className="mx-auto flex max-w-[700px] items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#d4b06a]/30 sm:w-12" />

            <p
              className="text-sm italic leading-6 text-white/30 sm:text-base"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              &quot;The silence is not empty. It is where the questions
              begin.&quot;
            </p>

            <span className="h-px w-8 bg-[#7f9bab]/30 sm:w-12" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            © 2026 Lucian Verren. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
              Perception
            </span>

            <span className="h-1 w-1 rounded-full bg-[#d4b06a]/40" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
              Influence
            </span>

            <span className="h-1 w-1 rounded-full bg-[#7f9bab]/40" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
              Truth
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/30 transition-colors duration-300 hover:text-[#d4b06a]"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-300 group-hover:border-[#d4b06a]/40">
              <ArrowUp
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
