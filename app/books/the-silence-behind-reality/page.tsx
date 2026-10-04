"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  CreditCard,
  Lock,
  Mail,
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
  { id: "ebook", label: "Ebook (PDF)", price: 17, oldPrice: 29, link: "#" },
];

const faqGroups = [
  {
    title: "Ordering & delivery",
    items: [
      {
        q: "How do I get access after I order?",
        a: "As soon as your payment is confirmed, you receive an email with your download link. There is no shipping and no waiting.",
      },
      {
        q: "How long does delivery take?",
        a: "Delivery is instant. The email usually arrives within a few minutes of your payment.",
      },
      {
        q: "I didn't receive my email. What now?",
        a: "Check your spam and promotions folders first, and make sure you typed your email address correctly at checkout. If it's still missing, contact us and we will resend your link.",
      },
      {
        q: "Can I download the book again later?",
        a: "Yes. Keep your delivery email, since the download link in it can be used again. If you lose it, contact us and we will send it again.",
      },
    ],
  },
  {
    title: "The book",
    items: [
      {
        q: "What is the book about?",
        a: "The Silence Behind Reality is a story many readers describe as unsettling because it feels closer to the truth than they expected. It follows Lucian Verren's story and the questions it raises about the world we think we know.",
      },
      {
        q: "Which format should I pick?",
        a: "Choose the Ebook if you prefer reading and the Audiobook if you prefer listening, for example while commuting or exercising. The content is the same, only the format differs.",
      },
      {
        q: "What devices does it work on?",
        a: "Any phone, tablet, e-reader or computer. The ebook is a standard PDF, and the audiobook plays in any common audio player.",
      },
      {
        q: "Is there a printed copy?",
        a: "Right now the book is available in digital format only. That's what lets you get it instantly, anywhere in the world.",
      },
    ],
  },
  {
    title: "Payment & support",
    items: [
      {
        q: "Is my payment secure?",
        a: "Yes. Payments are processed by a trusted payment provider over an encrypted connection. Your card details never touch this website and are never stored by us.",
      },
      {
        q: "Is it a one-time payment?",
        a: "Yes. You pay once. There is no subscription, no recurring charge and no hidden fees.",
      },
      {
        q: "Can I get a refund?",
        a: "If something goes wrong or the book isn't what you expected, contact us and we will work it out with you. Write to us as soon as possible after your purchase.",
      },
      {
        q: "How can I contact you?",
        a: `Email us at ${SUPPORT_EMAIL}. We read every message and do our best to reply quickly.`,
      },
    ],
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                  { icon: Lock, lines: ["Encrypted", "Payment"] },
                  { icon: ShieldCheck, lines: ["Trusted", "Provider"] },
                  { icon: BadgeCheck, lines: ["Instant", "Delivery"] },
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-28 max-w-3xl"
        >
          <div className="text-center">
            <Badge>FAQ</Badge>
            <h2
              className="mt-6 text-3xl leading-[1.1] tracking-[-0.02em] sm:text-4xl"
              style={{ fontFamily: SERIF }}
            >
              Questions? <span style={{ color: GOLD }}>We have answers.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
              Everything you need to know before you order.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: GOLD }}
                  />
                  <h3
                    className="text-[10px] font-medium uppercase tracking-[0.28em]"
                    style={{ color: BLUE }}
                  >
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((item) => {
                    const open = openKey === item.q;
                    return (
                      <div
                        key={item.q}
                        className={`border bg-[#08090b] transition-colors ${
                          open ? "border-[#d4b06a]/50" : "border-[#d4b06a]/20"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenKey(open ? null : item.q)}
                          aria-expanded={open}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span
                            className={`text-[15px] transition-colors sm:text-base ${
                              open ? "text-white" : "text-white/75"
                            }`}
                            style={{ fontFamily: SERIF }}
                          >
                            {item.q}
                          </span>
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d4b06a]/40"
                            style={{ color: GOLD }}
                          >
                            {open ? <Minus size={13} /> : <Plus size={13} />}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 pr-12 text-sm leading-7 text-white/60">
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
            ))}
          </div>

          <div className="mt-14 border border-[#d4b06a]/20 bg-[#08090b] px-6 py-8 text-center">
            <p className="text-lg" style={{ fontFamily: SERIF }}>
              Still have a question?
            </p>
            <p className="mt-2 text-sm text-white/50">
              Write to us and we will get back to you.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d4b06a]/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] transition hover:bg-[#d4b06a]/10"
              style={{ color: GOLD }}
            >
              <Mail size={14} />
              Contact us
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
