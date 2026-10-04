"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#101114] text-[#F5F1E8]">
      <div className="overflow-hidden border-b border-[#D0AE70]/20 bg-[#C6A15B] py-2.5">
        <div className="flex w-max animate-marquee">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="flex shrink-0 items-center gap-7 px-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171717] sm:text-xs">
                100% Refund Guaranteed
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171717] sm:text-xs">
                Risk-Free Purchase
              </span>
            </div>
          ))}
        </div>
      </div>

      <nav className="border-b border-white/[0.08]">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 md:min-h-[88px] md:px-10">
          <Link
            href="/"
            className="whitespace-nowrap font-serif text-xl tracking-tight text-[#F5F1E8] transition-colors duration-300 hover:text-[#D7B778] sm:text-3xl"
          >
            Lucian Verren
            <span className="text-[#D7B778]">.</span>
          </Link>

          <Link
            href="/books/the-silence-behind-reality"
            className="group relative inline-flex min-h-[40px] items-center justify-center gap-2 overflow-hidden rounded-full border border-[#D4B06A]/60 px-4 py-2 font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-[#D4B06A] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#E8CD8F] hover:text-[#040507] hover:shadow-[0_8px_25px_rgba(212,176,106,0.15)] sm:min-h-[44px] sm:gap-3 sm:px-6 sm:text-[9px]"
          >
            <span
              className="absolute inset-0 -translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0"
              style={{
                backgroundImage: "linear-gradient(to bottom, #e8cd8f, #c9a45e)",
              }}
            />

            <span className="relative">Get the Book</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
