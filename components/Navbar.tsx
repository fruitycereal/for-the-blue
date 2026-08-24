"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setDisplayName((data.user?.user_metadata?.name as string) || data.user?.email || "");
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setDisplayName((session?.user?.user_metadata?.name as string) || session?.user?.email || "");
    });

    return () => listener.subscription.unsubscribe();
  }, [supabase]);

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

  async function handleSignOut() {
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

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

          <Link
            href="/blue-action"
            className="cursor-pointer text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Blue Action
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
          {user ? (
            <>
              <span className="text-sm font-medium text-white/90">Hi, {displayName}!</span>
              <button
                type="button"
                onClick={handleSignOut}
                className="cursor-pointer rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="cursor-pointer rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="cursor-pointer rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Sign Up
              </Link>
            </>
          )}

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

          <Link
            href="/blue-action"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Blue Action
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

          {user ? (
            <>
              <div className="mt-2 px-2 py-1 text-sm font-medium text-white/90">Hi, {displayName}!</div>
              <button
                type="button"
                onClick={handleSignOut}
                className="cursor-pointer rounded-lg px-2 py-2.5 text-left text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg px-2 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Sign Up
              </Link>
            </>
          )}

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
