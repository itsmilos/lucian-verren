"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Volume2 } from "lucide-react";

const GOLD = "#d4b06a";
const BLUE = "#7f9bab";

export default function BookReaction() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const enableSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    video.play();
    setMuted(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#040507] px-4 py-16 text-[#e9eef2] sm:px-6 md:py-24">
      <div className="relative mx-auto max-w-[1150px] overflow-hidden border border-[#d4b06a]/20 bg-[#08090b] p-6 sm:p-10 md:p-14">
        <div
          className="pointer-events-none absolute left-[-15%] top-[10%] h-[450px] w-[450px] opacity-20 blur-[140px]"
          style={{
            background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] opacity-10 blur-[150px]"
          style={{
            background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4b06a]/30 bg-[#d4b06a]/10 px-4 py-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: GOLD }}
              >
                Reader reaction
              </span>
            </div>

            <h2
              className="max-w-[650px] text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              She read{" "}
              <span style={{ color: GOLD }}>The Silence Behind Reality </span>
              this is what she said.
            </h2>

            <div className="mt-8 max-w-[560px] space-y-5 text-[15px] leading-7 text-white/65 sm:text-base">
              <p>
                This girl was genuinely shocked by what she read in the book, as
                well as by the entire story surrounding{" "}
                <span className="text-white/90">Lucian Verren</span>.
              </p>

              <p>
                She describes it as one of the craziest &quot;conspiracy
                theories&quot; she has come across in recent times.
              </p>

              <p>
                And that&apos;s what unsettles her the most the possibility that
                this might not be a conspiracy theory at all, but something far
                closer to reality than people are willing to admit.
              </p>
            </div>

            <Link
              href="/books/the-silence-behind-reality"
              className="group relative mt-10 inline-flex min-h-[52px] items-center justify-center gap-4 overflow-hidden rounded-full px-8 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#040507] shadow-[0_10px_35px_rgba(212,176,106,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(212,176,106,0.4)] sm:text-[11px]"
              style={{
                backgroundImage: "linear-gradient(to bottom, #e8cd8f, #c9a45e)",
              }}
            >
              <span className="relative">Discover the Book</span>
              <ArrowUpRight
                size={16}
                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto lg:mx-0"
          >
            <div
              onClick={togglePlay}
              className="relative aspect-[9/16] h-[560px] cursor-pointer overflow-hidden border border-[#d4b06a]/30 bg-black shadow-[0_0_60px_rgba(212,176,106,0.08)] sm:h-[640px] lg:h-[700px]"
            >
              <video
                ref={videoRef}
                className="h-full w-full object-contain"
                src="/reaction.mp4"
                poster="/video-poster.webp"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {!playing && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d4b06a]/40 bg-black/50 backdrop-blur"
                    style={{ color: GOLD }}
                  >
                    <Play size={30} fill="currentColor" className="ml-1" />
                  </span>
                </div>
              )}

              {muted && (
                <button
                  type="button"
                  onClick={enableSound}
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-[11px] font-semibold tracking-wide backdrop-blur transition hover:bg-black/80"
                  style={{ color: GOLD }}
                >
                  <Volume2 size={14} />
                  Tap for sound
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
