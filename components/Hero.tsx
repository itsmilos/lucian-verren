"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Maximize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD = "#d4b06a";
const BLUE = "#7f9bab";
const VIDEO_SRC = "/trailer1.mp4";
const POSTER_SRC = "/video-poster.webp";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 60,
    damping: 20,
  });

  const sy = useSpring(my, {
    stiffness: 60,
    damping: 20,
  });

  const fogX = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const fogY = useTransform(sy, [-0.5, 0.5], [20, -20]);

  return (
    <section
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();

        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative flex flex-col overflow-hidden bg-[#040507] text-[#e9eef2] md:h-screen md:min-h-[680px]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, #0c121a 0%, #040507 65%)",
        }}
      />

      <motion.div
        style={{ x: fogX, y: fogY }}
        className="pointer-events-none absolute inset-[-10%]"
      >
        <Cloud
          className="left-[-20%] top-[8%] h-[420px] w-[900px]"
          color={BLUE}
          o={0.05}
          dur={60}
          from={-120}
          to={160}
        />

        <Cloud
          className="right-[-15%] top-[30%] h-[500px] w-[1000px]"
          color={GOLD}
          o={0.07}
          dur={75}
          from={140}
          to={-140}
        />

        <Cloud
          className="bottom-[-10%] left-[10%] h-[380px] w-[1100px]"
          color={BLUE}
          o={0.06}
          dur={90}
          from={-180}
          to={120}
        />

        <Cloud
          className="left-[30%] top-[-15%] h-[320px] w-[800px]"
          color="#ffffff"
          o={0.03}
          dur={70}
          from={100}
          to={-100}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{
          background:
            "radial-gradient(ellipse 40% 100% at 50% 0%, rgba(212,176,106,.10), transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, transparent 25%, rgba(4,5,7,.96) 100%)",
        }}
      />

      <Embers />

      <header className="relative z-30 flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-5 md:px-12 md:pt-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8" style={{ background: GOLD }} />

          <span
            className="font-sans text-[9px] uppercase tracking-[0.3em] sm:text-[10px] sm:tracking-[0.45em]"
            style={{ color: GOLD }}
          >
            A book by Lucian Verren
          </span>
        </div>

        <span className="hidden font-sans text-[9px] uppercase tracking-[0.4em] text-white/25 sm:block">
          First Edition · 2026
        </span>
      </header>

      <div className="relative z-20 mx-auto flex w-full max-w-[1500px] flex-col items-center justify-start gap-4 px-4 pb-5 pt-7 text-center sm:px-6 sm:pt-9 md:flex-1 md:justify-center md:gap-4 md:pb-0 md:pt-0">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-sans text-[8px] uppercase tracking-[0.3em] sm:text-[9px] sm:tracking-[0.55em]"
          style={{
            color: BLUE,
            opacity: 0.55,
          }}
        >
          There is more to reality than we were taught
        </motion.p>

        <h1 className="font-serif leading-[1] tracking-[-0.03em]">
          <Line delay={0.2}>
            <span className="text-[8.2vw] font-light text-[#d8d4cb] sm:text-[9.5vw] md:text-[clamp(52px,6.4vw,96px)]">
              The Silence{" "}
              <span
                className="italic"
                style={{
                  WebkitTextStroke: "1px rgba(127,155,171,.7)",
                  color: "transparent",
                }}
              >
                Behind
              </span>{" "}
              <span
                className="bg-clip-text font-semibold text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #e8cd8f, #c9a45e, #7a5c27)",
                }}
              >
                Reality
              </span>
            </span>
          </Line>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.6,
            ease: EASE,
          }}
          className="relative w-full max-w-[1180px]"
        >
          <motion.div
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.08, 0.22, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-[10%] rounded-full blur-[110px]"
            style={{ background: GOLD }}
          />

          <VaultPlayer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/books/the-silence-behind-reality"
            className="group relative inline-flex min-h-[58px] min-w-[210px] items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#c9a45e] via-[#d4b06a] to-[#e8cd8f] px-9 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#08090b] shadow-[0_10px_35px_rgba(212,176,106,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(212,176,106,0.3)] sm:min-h-[64px] sm:min-w-[240px] sm:px-10 sm:text-[11px]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

            <span className="relative z-10">Read the book</span>

            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#08090b]/25 bg-[#08090b]/[0.08] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#08090b]/15">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>

          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/20">
            Digital edition
          </span>
        </motion.div>
      </div>

      <footer className="relative z-30 flex items-end justify-between px-4 pb-3 pt-1 sm:px-6 sm:pb-5 md:px-12">
        <div className="hidden items-center gap-2 text-white/35 md:flex">
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={14} />
          </motion.span>

          <span className="font-sans text-[9px] uppercase tracking-[0.3em]">
            Scroll to discover
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2 font-sans text-[8px] uppercase tracking-[0.2em] sm:gap-4 sm:text-[9px] sm:tracking-[0.35em]">
          <span className="text-white/25">Perception</span>

          <span className="h-px w-4 bg-white/10 sm:w-10" />

          <span style={{ color: GOLD }}>Influence</span>

          <span className="h-px w-4 bg-white/10 sm:w-10" />

          <span
            style={{
              color: BLUE,
              opacity: 0.6,
            }}
          >
            Truth
          </span>
        </div>
      </footer>
    </section>
  );
}

function VaultPlayer() {
  const ref = useRef<HTMLVideoElement>(null);

  const [phase, setPhase] = useState<"locked" | "opening" | "open">("locked");
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const opening = phase !== "locked";

  function unlock() {
    if (phase !== "locked") return;

    setPhase("opening");

    ref.current?.play().catch(() => {});

    window.setTimeout(() => {
      setPhase("open");
    }, 3000);
  }

  function toggle() {
    const video = ref.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const video = ref.current;

    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();

    video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
  }

  function toggleMute() {
    const video = ref.current;

    if (!video) return;

    video.muted = !muted;
    setMuted(!muted);
  }

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-[4px] bg-black ring-1 ring-[#d4b06a]/20"
      style={{
        boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
      }}
    >
      <video
        ref={ref}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        playsInline
        preload="metadata"
        onClick={phase === "open" ? toggle : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) =>
          setProgress(
            e.currentTarget.currentTime / (e.currentTarget.duration || 1),
          )
        }
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
      />

      {phase !== "open" && (
        <div className="absolute inset-0 z-30">
          <DoorHalf side="left" opening={opening} />
          <DoorHalf side="right" opening={opening} />

          <motion.div
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            animate={
              opening
                ? {
                    opacity: [0, 1, 1, 0],
                    scaleY: [0, 1, 1, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: 0.9,
              times: [0, 0.3, 0.7, 1],
            }}
            className="pointer-events-none absolute inset-y-0 left-1/2 z-40 w-px -translate-x-1/2"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent, #e8cd8f 20%, #e8cd8f 80%, transparent)",
              boxShadow: "0 0 24px 4px rgba(232,205,143,.5)",
            }}
          />

          <button
            onClick={unlock}
            aria-label="Unlock"
            className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 sm:gap-4"
          >
            <motion.div
              animate={
                opening
                  ? {
                      opacity: 0,
                      scale: 0.85,
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.8,
                delay: opening ? 0.9 : 0,
              }}
              className="h-20 w-20 sm:h-36 sm:w-36"
            >
              <Seal opening={opening} />
            </motion.div>

            <motion.span
              animate={
                opening
                  ? { opacity: 0 }
                  : {
                      opacity: [0.3, 0.85, 0.3],
                    }
              }
              transition={
                opening
                  ? { duration: 0.3 }
                  : {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="font-sans text-[9px] uppercase tracking-[0.55em] text-[#d4b06a]"
            >
              Unlock
            </motion.span>
          </button>
        </div>
      )}

      {phase === "open" && (
        <div
          className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 px-3 pb-3 pt-10 opacity-100 transition-opacity duration-300 sm:gap-4 sm:px-5 sm:pb-4 lg:opacity-0 lg:group-hover:opacity-100"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,.8), transparent)",
          }}
        >
          <button
            onClick={toggle}
            aria-label="Play/Pause"
            className="text-[#d4b06a]"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <div
            onClick={seek}
            role="slider"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            className="h-1 flex-1 cursor-pointer rounded-full bg-white/15"
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress * 100}%`,
                backgroundImage: `linear-gradient(to right, ${BLUE}, ${GOLD})`,
              }}
            />
          </div>

          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            style={{ color: BLUE }}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <button
            onClick={() => ref.current?.requestFullscreen()}
            aria-label="Fullscreen"
            style={{ color: BLUE }}
          >
            <Maximize size={16} />
          </button>
        </div>
      )}

      {phase === "open" && !playing && (
        <button
          onClick={toggle}
          aria-label="Play"
          className="absolute inset-0 z-[5] flex items-center justify-center bg-black/30"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4b06a]/60 bg-[#d4b06a]/10 text-[#d4b06a] backdrop-blur-md transition-transform duration-500 hover:scale-110 sm:h-20 sm:w-20">
            <Play size={26} fill="currentColor" className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}

function DoorHalf({
  side,
  opening,
}: {
  side: "left" | "right";
  opening: boolean;
}) {
  const left = side === "left";

  return (
    <motion.div
      animate={
        opening
          ? {
              x: left ? "-101%" : "101%",
            }
          : { x: 0 }
      }
      transition={{
        duration: 1.5,
        delay: 1.3,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={`absolute inset-y-0 w-1/2 ${left ? "left-0" : "right-0"}`}
      style={{
        backgroundImage: left
          ? "linear-gradient(100deg, #0a0c10 0%, #050608 100%)"
          : "linear-gradient(260deg, #0a0c10 0%, #050608 100%)",
        boxShadow: left
          ? "inset -1px 0 0 rgba(212,176,106,.4)"
          : "inset 1px 0 0 rgba(212,176,106,.4)",
      }}
    >
      <div
        className="absolute inset-3 border sm:inset-6"
        style={{
          borderColor: "rgba(212,176,106,.10)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 100% 50%, rgba(212,176,106,.07), transparent 60%)",
          transform: left ? "none" : "scaleX(-1)",
        }}
      />
    </motion.div>
  );
}

function Seal({ opening }: { opening: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      style={{
        filter: "drop-shadow(0 0 18px rgba(212,176,106,.22))",
      }}
    >
      <motion.g
        animate={opening ? { rotate: 120 } : { rotate: 360 }}
        transition={
          opening
            ? {
                duration: 1.6,
                ease: [0.76, 0, 0.24, 1],
              }
            : {
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="#d4b06a"
          strokeOpacity="0.5"
          strokeWidth="0.6"
        />

        {Array.from({ length: 72 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="4"
            x2="100"
            y2={i % 6 === 0 ? 14 : 9}
            stroke="#d4b06a"
            strokeOpacity={i % 6 === 0 ? 0.85 : 0.3}
            strokeWidth="0.6"
            transform={`rotate(${i * 5} 100 100)`}
          />
        ))}
      </motion.g>

      <motion.g
        animate={opening ? { rotate: -150 } : { rotate: -360 }}
        transition={
          opening
            ? {
                duration: 1.6,
                ease: [0.76, 0, 0.24, 1],
              }
            : {
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="#7f9bab"
          strokeOpacity="0.3"
          strokeWidth="0.6"
          strokeDasharray="2 6"
        />

        <circle cx="100" cy="28" r="2.5" fill="#7f9bab" fillOpacity="0.6" />
      </motion.g>

      <motion.g
        animate={opening ? { rotate: 90 } : { rotate: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <circle
          cx="100"
          cy="100"
          r="48"
          fill="none"
          stroke="#d4b06a"
          strokeOpacity="0.75"
          strokeWidth="0.8"
        />

        <line
          x1="100"
          y1="46"
          x2="100"
          y2="62"
          stroke="#d4b06a"
          strokeWidth="1.2"
        />
      </motion.g>

      <circle cx="100" cy="100" r="3" fill="#d4b06a" />
    </svg>
  );
}

function Cloud({
  className,
  color,
  o,
  dur,
  from,
  to,
}: {
  className: string;
  color: string;
  o: number;
  dur: number;
  from: number;
  to: number;
}) {
  return (
    <motion.div
      initial={{ x: from }}
      animate={{
        x: [from, to, from],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: dur,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-[50%] blur-[120px] ${className}`}
      style={{
        background: color,
        opacity: o,
      }}
    />
  );
}

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          delay,
          ease: EASE,
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Embers() {
  const dots = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    size: 1 + (i % 3),
    gold: i % 4 !== 0,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: d.gold ? GOLD : BLUE,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
