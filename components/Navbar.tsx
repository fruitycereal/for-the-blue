"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Campaigns", href: "/#campaigns" },
  { label: "Learn", href: "/learn" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1E3765]/95 text-white shadow-lg backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/logo.png"
            alt="For the Blue Logo"
            width={70}
            height={70}
            priority
            className="h-10 w-10 sm:h-[70px] sm:w-[70px]"
          />
          <h1 className="text-lg font-bold text-white sm:text-2xl">For the Blue</h1>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#get-involved"
            className="rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Volunteer
          </Link>
          <Link
            href="/#donate"
            className="rounded-full bg-[#F1C78A] px-4 py-2 text-sm font-semibold text-[#1E3765] transition hover:bg-[#eabb6f]"
          >
            Donate Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 px-5 pb-5 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-3">
            <Link
              href="/#get-involved"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-white/70 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Volunteer
            </Link>
            <Link
              href="/#donate"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-[#F1C78A] px-4 py-2 text-center text-sm font-semibold text-[#1E3765]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}