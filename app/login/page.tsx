"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      if (error.message.toLowerCase().includes("invalid login credentials")) {
        setError("Incorrect email or password.");
      } else {
        setError(error.message);
      }
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <section className="flex justify-center px-6 py-20 sm:py-28">
      <div className="w-full max-w-md rounded-2xl border border-[#e3ecf2] bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Log in</h1>
        <p className="mt-2 text-sm text-gray-500">Sign in to see your Blue Action credits.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#d5e3ee] bg-white px-4 py-3 text-[#1E3765] outline-none transition focus:border-[#007FA3]"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs font-medium text-[#007FA3]">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#d5e3ee] bg-white px-4 py-3 text-[#1E3765] outline-none transition focus:border-[#007FA3]"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a] disabled:opacity-50"
          >
            {loading ? "Logging in…" : "Log in"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href={`/signup${redirectTo !== "/" ? `?redirect=${redirectTo}` : ""}`} className="font-medium text-[#007FA3]">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
