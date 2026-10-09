"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  CreditCard,
  Eye,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  Zap,
} from "lucide-react";

const GOLD = "#d4b06a";
const BLUE = "#7f9bab";
const SERIF = "Georgia, 'Times New Roman', serif";

const CHECKOUT_URL = "#";
const SUPPORT_EMAIL = "support@yourdomain.com";

const versions = [
  {
    id: "ebook",
    label: "Ebook (PDF)",
    price: 17,
    oldPrice: 29,
    link: "#",
  },
];

const faqItems = [
  {
    q: "How do I get access after I order?",
    a: "As soon as your payment is confirmed, you receive an email with your download link. There is no shipping and no waiting.",
  },
  {
    q: "What is The Silence Behind Reality about?",
    a: "The book explores unsettling questions about the world we think we understand, following Lucian Verren through a story built around perception, reality, and the possibility that some truths are better left unseen.",
  },
  {
    q: "What devices can I read it on?",
    a: "The ebook is delivered as a standard PDF, so you can read it on a phone, tablet, laptop, desktop computer, or most modern e-readers.",
  },
  {
    q: "Is this a one-time purchase?",
    a: "Yes. You pay once and receive access to the digital edition. There are no subscriptions or recurring charges.",
  },
  {
    q: "I didn't receive my download email. What should I do?",
    a: `Check your spam or promotions folder first. If the email is still missing, contact us at ${SUPPORT_EMAIL} and we will help you get access.`,
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#d4b06a]/30 bg-[#d4b06a]/10 px-4 py-2">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: GOLD }}
      />

      <span
        className="text-[10px] font-semibold uppercase tracking-[0.25em]"
        style={{ color: GOLD }}
      >
        {children}
      </span>
    </div>
  );
}

export default function ProductPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [versionId, setVersionId] = useState(versions[0].id);

  const version = versions.find((v) => v.id === versionId)!;
  const save = Math.round((1 - version.price / version.oldPrice) * 100);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040507] px-4 py-14 text-[#e9eef2] sm:px-6 md:py-20">
      <div
        className="pointer-events-none absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full opacity-10 blur-[150px]"
        style={{
          background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1150px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-8"
          >
            <div className="relative border border-[#d4b06a]/40 bg-[#08090b] p-1 shadow-[0_0_60px_rgba(212,176,106,0.08)]">
              <img
                src="/ebook2.webp"
                alt="The Silence Behind Reality by Lucian Verren"
                className="block h-auto w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Badge>Digital Edition</Badge>

            <h1
              className="mt-6 text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl"
              style={{ fontFamily: SERIF }}
            >
              The Silence <span style={{ color: GOLD }}>Behind Reality</span>
            </h1>

            <p className="mt-2 text-sm text-white/50">by Lucian Verren</p>

            <p
              className="mt-5 max-w-[520px] text-lg italic leading-7 text-white/65"
              style={{ fontFamily: SERIF }}
            >
              What if the most unsettling stories are the ones that feel a
              little too close to the truth?
            </p>

            <div className="my-8 h-px w-full bg-white/[0.08]" />

            <div className="flex flex-wrap items-end gap-3">
              <span
                className="text-5xl leading-none"
                style={{ fontFamily: SERIF }}
              >
                ${version.price}
              </span>

              <span className="mb-1 text-lg text-white/35 line-through">
                ${version.oldPrice}
              </span>

              <span
                className="mb-1 rounded-full border border-[#d4b06a]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: GOLD }}
              >
                Save {save}%
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
              <Zap size={13} />
              Instant access available
            </div>

            <div className="mt-7">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                Choose your version
              </p>

              <div className="grid grid-cols-2 gap-3">
                {versions.map((v) => {
                  const active = v.id === versionId;

                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVersionId(v.id)}
                      className={`border px-4 py-3 text-left text-sm transition ${
                        active
                          ? "border-[#d4b06a] bg-[#d4b06a]/10 text-white"
                          : "border-white/10 text-white/60 hover:border-[#d4b06a]/40"
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/45">
              Instant download. Read or listen on your phone, tablet or
              computer. No shipping required.
            </p>

            <a
              href={version.link || CHECKOUT_URL}
              className="group relative mt-6 flex min-h-[56px] w-full items-center justify-center gap-4 overflow-hidden rounded-full px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#040507] shadow-[0_10px_35px_rgba(212,176,106,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(212,176,106,0.4)]"
              style={{
                backgroundImage: "linear-gradient(to bottom, #e8cd8f, #c9a45e)",
              }}
            >
              <span className="relative">Add to cart</span>

              <ArrowUpRight
                size={16}
                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="mt-7 text-center">
              <p className="mb-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
                <CreditCard size={13} />
                Secure checkout
              </p>

              <div className="grid grid-cols-3 border-y border-white/[0.08]">
                {[
                  {
                    icon: Lock,
                    lines: ["Encrypted", "Payment"],
                  },
                  {
                    icon: ShieldCheck,
                    lines: ["Trusted", "Provider"],
                  },
                  {
                    icon: BadgeCheck,
                    lines: ["Instant", "Delivery"],
                  },
                ].map(({ icon: Icon, lines }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center px-2 py-5 ${
                      i === 1 ? "border-x border-white/[0.08]" : ""
                    }`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className="mb-2"
                      style={{ color: GOLD }}
                    />

                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/45">
                      {lines[0]}
                      <br />
                      {lines[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-32"
        >
          <div className="mb-8 flex items-end justify-between border-b border-white/[0.08] pb-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] text-[#d4b06a]">
                Step inside
              </p>

              <h2
                className="mt-4 text-3xl leading-[1.05] tracking-[-0.025em] sm:text-5xl"
                style={{ fontFamily: SERIF }}
              >
                There is more
                <br />
                <span style={{ color: GOLD }}>beneath the surface.</span>
              </h2>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <Eye size={16} strokeWidth={1.2} style={{ color: GOLD }} />

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                Look closer
              </span>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border border-[#d4b06a]/20 bg-[#08090b] lg:col-span-7"
            >
              <img
                src="/ebook3.webp"
                alt="The Silence Behind Reality by Lucian Verren"
                className="block h-full min-h-[620px] w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-black/10" />

              <div className="absolute left-6 top-6">
                <span className="border border-white/10 bg-black/30 px-3 py-2 text-[8px] uppercase tracking-[0.3em] text-white/50 backdrop-blur-md">
                  The Silence Behind Reality
                </span>
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d4b06a]">
                    Lucian Verren
                  </p>

                  <p
                    className="mt-2 text-2xl text-white sm:text-3xl"
                    style={{ fontFamily: SERIF }}
                  >
                    Some truths are better left unseen.
                  </p>
                </div>

                <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
                  01 / 03
                </span>
              </div>
            </motion.div>

            <div className="grid gap-3 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-white/[0.08] bg-[#08090b] p-7 sm:p-9"
              >
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#d4b06a]">
                  The premise
                </p>

                <h3
                  className="mt-6 text-2xl leading-[1.2] text-white sm:text-3xl"
                  style={{ fontFamily: SERIF }}
                >
                  What if the reality you know is only the version you were
                  given?
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  The Silence Behind Reality follows the questions that begin
                  when certainty starts to disappear. Perception, hidden
                  patterns, human behavior, and the stories we accept without
                  questioning them.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-3 border border-[#d4b06a]/20 bg-[#0a0b0d]"
              >
                {[
                  {
                    number: "41",
                    label: "Chapters",
                  },
                  {
                    number: "01",
                    label: "Digital Edition",
                  },
                  {
                    number: "∞",
                    label: "Questions",
                  },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex min-h-[150px] flex-col justify-between p-5 sm:p-7 ${
                      index !== 0 ? "border-l border-white/[0.08]" : ""
                    }`}
                  >
                    <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                      0{index + 1}
                    </span>

                    <div>
                      <p
                        className="text-3xl text-[#d4b06a] sm:text-4xl"
                        style={{ fontFamily: SERIF }}
                      >
                        {item.number}
                      </p>

                      <p className="mt-2 text-[8px] uppercase leading-4 tracking-[0.18em] text-white/35">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 grid gap-3 md:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Question",
                text: "Begin with the things you have always accepted as obvious.",
              },
              {
                number: "02",
                title: "Explore",
                text: "Follow the ideas, patterns and possibilities hidden beneath the surface.",
              },
              {
                number: "03",
                title: "Decide",
                text: "Come to your own conclusions about what deserves to be believed.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-white/[0.07] bg-[#08090b] p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.3em] text-[#d4b06a]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1}
                    className="text-white/20"
                  />
                </div>

                <h3
                  className="mt-12 text-2xl text-white"
                  style={{ fontFamily: SERIF }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-32"
        >
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-10">
              <Badge>FAQ</Badge>

              <h2
                className="mt-6 max-w-md text-3xl leading-[1.1] tracking-[-0.02em] sm:text-4xl"
                style={{ fontFamily: SERIF }}
              >
                Questions? <span style={{ color: GOLD }}>We have answers.</span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                A few things worth knowing before you step into the story.
              </p>

              <div className="mt-8 h-px w-16 bg-[#d4b06a]/60" />
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => {
                const open = openKey === item.q;

                return (
                  <div
                    key={item.q}
                    className={`border bg-[#08090b] transition-colors ${
                      open
                        ? "border-[#d4b06a]/50"
                        : "border-white/[0.08] hover:border-[#d4b06a]/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenKey(open ? null : item.q)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={`text-[15px] leading-6 transition-colors sm:text-base ${
                          open ? "text-white" : "text-white/75"
                        }`}
                        style={{ fontFamily: SERIF }}
                      >
                        {item.q}
                      </span>

                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4b06a]/40"
                        style={{ color: GOLD }}
                      >
                        {open ? <Minus size={13} /> : <Plus size={13} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-6 pr-12 text-sm leading-7 text-white/55 sm:px-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-36 border-t border-white/[0.08] pt-20"
        >
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <Badge>Table of Contents</Badge>

              <h2
                className="mt-6 text-3xl leading-[1.1] tracking-[-0.02em] sm:text-4xl"
                style={{ fontFamily: SERIF }}
              >
                41 chapters.{" "}
                <span style={{ color: GOLD }}>One simulation.</span>
              </h2>

              <div className="mt-8 space-y-6">
                <p
                  className="text-lg leading-8 text-white/75"
                  style={{ fontFamily: SERIF }}
                >
                  These are the chapters of{" "}
                  <span className="text-white">The Silence Behind Reality</span>
                  . And no this isn't clickbait. Every single chapter is real,
                  and each one will blow your mind.
                </p>

                <p className="text-sm leading-7 text-white/50">
                  This book is addictive. Like a drug. Even after the final
                  chapter, you'll be craving for more.
                </p>

                <p className="text-sm leading-7 text-white/50">
                  Right now, we have{" "}
                  <span style={{ color: GOLD }}>"only" 41 chapters</span> but
                  within these pages lies some of the most shocking,
                  mind-altering information you will ever read.
                </p>

                <p
                  className="border-l border-[#d4b06a]/50 pl-5 text-base italic leading-7 text-white/65"
                  style={{ fontFamily: SERIF }}
                >
                  It's now or never. Step inside the simulation... and we'll see
                  you in the future.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-[#d4b06a]/60" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  41 Chapters
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[560px]">
                <div className="absolute -inset-8 rounded-full bg-[#d4b06a]/[0.06] blur-[80px]" />

                <div className="relative border border-[#d4b06a]/30 bg-[#08090b] p-2 shadow-[0_0_80px_rgba(212,176,106,0.1)]">
                  <img
                    src="/table-of-contents.webp"
                    alt="The Silence Behind Reality by Lucian Verren"
                    className="block h-auto w-full"
                  />

                  <div className="pointer-events-none absolute inset-5 border border-[#d4b06a]/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
