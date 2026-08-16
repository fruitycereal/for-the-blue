"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (id: string) => {
    setOpen(false);

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push(`/#${id}`);
    }
  };

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
          <h1 className="text-lg font-bold text-white sm:text-2xl">
            For the Blue
          </h1>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => goToSection("about")}
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goToSection("campaigns")}
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Campaigns
          </button>

          <Link
            href="/learn"
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Learn
          </Link>

          <button
            type="button"
            onClick={() => goToSection("get-involved")}
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Get Involved
          </button>

          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Contact
          </button>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => goToSection("get-involved")}
            className="cursor-pointer rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Volunteer
          </button>

          <a
            href="https://linktr.ee/fortheblue.eco"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-[#F1C78A] px-4 py-2 text-sm font-semibold text-[#1E3765] transition hover:bg-[#eabb6f]"
          >
            Donate Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 px-5 pb-5 pt-2 lg:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => goToSection("about")}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-left text-sm font-medium text-white/90 hover:bg-white/10"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goToSection("campaigns")}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-left text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Campaigns
          </button>

          <Link
            href="/learn"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Learn
          </Link>

          <button
            type="button"
            onClick={() => goToSection("get-involved")}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-left text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Get Involved
          </button>

          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-left text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Contact
          </button>

          <div className="mt-2 flex gap-3">
            <button
              type="button"
              onClick={() => goToSection("get-involved")}
              className="flex-1 cursor-pointer rounded-full border border-white/70 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Volunteer
            </button>

            <a
              href="https://linktr.ee/fortheblue.eco"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-1 cursor-pointer rounded-full bg-[#F1C78A] px-4 py-2 text-center text-sm font-semibold text-[#1E3765]"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}