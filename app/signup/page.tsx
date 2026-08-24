"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";
import { countries } from "@/lib/countries";

function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  const redirectTo = searchParams.get("redirect") || "/";

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, country },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.user && data.user.identities && data.user.identities.length === 0) {
      setError("An account with that email already exists. Try logging in instead.");
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <section className="flex justify-center px-6 py-20 sm:py-28">
      <div className="w-full max-w-md rounded-2xl border border-[#e3ecf2] bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Create your account</h1>
        <p className="mt-2 text-sm text-gray-500">
          Your Blue Action credits are tied to this account, across any device.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#d5e3ee] bg-white px-4 py-3 text-[#1E3765] outline-none transition focus:border-[#007FA3]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
              Country
            </label>
            <select
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-xl border border-[#d5e3ee] bg-white px-4 py-3 text-[#1E3765] outline-none transition focus:border-[#007FA3]"
            >
              <option value="" disabled>Select your country…</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

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
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
              Password
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#d5e3ee] bg-white px-4 py-3 text-[#1E3765] outline-none transition focus:border-[#007FA3]"
            />
            <p className="mt-1.5 text-xs text-gray-400">At least 8 characters.</p>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a] disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Sign up"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href={`/login${redirectTo !== "/" ? `?redirect=${redirectTo}` : ""}`} className="font-medium text-[#007FA3]">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      <Suspense fallback={null}>
        <SignUpForm />
      </Suspense>
    </main>
  );
}
