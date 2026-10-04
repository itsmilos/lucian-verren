"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GOLD = "#d4b06a";
const BLUE = "#7f9bab";

export default function BookCTA() {
  return (
    <section
      id="buy"
      className="relative isolate overflow-hidden bg-[#040507] px-4 py-16 text-[#e9eef2] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 50%, rgba(212,176,106,.07), transparent 45%), radial-gradient(ellipse at 80% 50%, rgba(127,155,171,.055), transparent 45%), linear-gradient(to bottom, #040507, #07090c 50%, #040507)",
        }}
      />

      <div
        className="pointer-events-none absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full blur-[150px]"
        style={{ background: GOLD, opacity: 0.07 }}
      />

      <div
        className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[400px] w-[400px] rounded-full blur-[150px]"
        style={{ background: BLUE, opacity: 0.06 }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center justify-center gap-4 sm:mb-14"
        >
          <span className="h-px w-8 bg-[#d4b06a]/40 sm:w-12" />

          <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-[#d4b06a]/80 sm:text-[9px] sm:tracking-[0.55em]">
            Beyond What We Know
          </span>

          <span className="h-px w-8 bg-[#d4b06a]/40 sm:w-12" />
        </motion.div>

        <div className="relative overflow-hidden rounded-sm border border-[#d4b06a]/20 bg-gradient-to-br from-[#0d1014] via-[#080a0d] to-[#060708] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
          <div className="pointer-events-none absolute inset-3 border border-white/[0.035] sm:inset-5" />

          <div
            className="pointer-events-none absolute left-0 top-0 h-px w-full"
            style={{
              background: `linear-gradient(to right, transparent, ${GOLD}80, ${BLUE}50, transparent)`,
            }}
          />

          <div className="relative z-10 grid items-center gap-10 px-5 py-9 sm:px-10 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-16 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[500px]"
            >
              <div
                className="pointer-events-none absolute inset-[-12%] rounded-full blur-[75px]"
                style={{
                  background: `radial-gradient(circle, ${GOLD}20, transparent 70%)`,
                }}
              />

              <motion.div
                whileHover={{ y: -5, rotateY: -3, rotateX: 2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2 border border-[#d4b06a]/15 bg-[#0a0b0d]" />

                <div className="relative border border-[#d4b06a]/40 bg-[#060708] p-[3px] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                  <div className="relative overflow-hidden border border-[#d4b06a]/25">
                    <Image
                      src="/ebook1.webp"
                      alt="The Silence Behind Reality by Lucian Verren"
                      width={800}
                      height={1200}
                      sizes="(max-width: 640px) 360px, (max-width: 1024px) 430px, 500px"
                      className="h-auto w-full object-cover"
                    />

                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(212,176,106,.12), transparent 35%, transparent 75%, rgba(4,5,7,.25))",
                      }}
                    />

                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <span className="h-px w-6 bg-[#d4b06a]/30" />
                  <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-white/30">
                    A journey beyond perception
                  </span>
                  <span className="h-px w-6 bg-[#d4b06a]/30" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 py-2 text-center lg:py-6 lg:text-left"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d4b06a]/20 bg-[#d4b06a]/[0.04] px-4 py-3">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: GOLD,
                    boxShadow: `0 0 10px ${GOLD}80`,
                  }}
                />

                <span className="font-sans text-[8px] font-medium uppercase tracking-[0.3em] text-[#d4b06a]/80 sm:text-[9px]">
                  The Book They Tried to Bury
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2.5rem,5.8vw,5rem)] font-light leading-[0.98] tracking-[-0.045em] text-[#d8d4cb]">
                The Truth Was
                <br className="hidden lg:block" />{" "}
                <span
                  className="italic"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(127,155,171,.75)",
                  }}
                >
                  Never Meant
                </span>
                <br className="hidden lg:block" /> to Be Found.
              </h2>

              <p className="mx-auto mt-6 max-w-[540px] font-serif text-base italic leading-7 text-[#a9a190] sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
                Step beyond the boundaries of accepted reality. Discover
                <em className="text-[#d8d4cb]">
                  {" "}
                  The Silence Behind Reality
                </em>{" "}
                by Lucian Verren — a journey into the questions most people
                never dare to ask.
              </p>

              <div className="mt-8 flex justify-center lg:mt-10 lg:justify-start">
                <Link
                  href="/books/the-silence-behind-reality"
                  className="group relative inline-flex min-h-[52px] items-center justify-center gap-5 overflow-hidden rounded-full border border-[#d4b06a]/60 px-7 py-4 font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d4b06a] transition-all duration-500 hover:-translate-y-1 hover:border-[#e8cd8f] hover:text-[#040507] hover:shadow-[0_10px_35px_rgba(212,176,106,0.15)] sm:px-9 sm:text-[10px]"
                >
                  <span
                    className="absolute inset-0 -translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #e8cd8f, #c9a45e)",
                    }}
                  />

                  <span className="relative">Discover the Book</span>

                  <ArrowUpRight
                    size={16}
                    className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-[#d4b06a]/40" />

                <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-white/30 sm:tracking-[0.35em]">
                  Lucian Verren
                </span>

                <span className="text-white/20">·</span>

                <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-white/30 sm:tracking-[0.35em]">
                  First Edition · 2026
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-white/20">
            Perception
          </span>
          <span className="h-px w-6 bg-white/10" />
          <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#d4b06a]/80">
            Influence
          </span>
          <span className="h-px w-6 bg-white/10" />
          <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#7f9bab]/90">
            Truth
          </span>
        </div>
      </div>
    </section>
  );
}
