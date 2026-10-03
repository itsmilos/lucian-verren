"use client";

import Link from "next/link";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
];

const rightLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

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
        <div className="mx-auto grid min-h-[88px] max-w-7xl grid-cols-3 items-center px-6 md:px-10">
          <div className="hidden items-center gap-8 md:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-[#D7B778]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="col-start-2 justify-self-center whitespace-nowrap font-serif text-xl tracking-tight text-[#F5F1E8] sm:text-3xl"
          >
            Lucan Verren
            <span className="text-[#D7B778]">.</span>
          </Link>

          <div className="hidden items-center justify-end gap-7 md:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-[#D7B778]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/books"
              className="rounded-sm bg-[#B9DDF2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#172632] transition-colors duration-200 hover:bg-[#D0E9F8]"
            >
              Explore Books
            </Link>
          </div>

          <div className="col-span-3 row-start-2 flex items-center justify-center gap-6 pb-4 md:hidden">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/60 transition-colors hover:text-[#D7B778]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
