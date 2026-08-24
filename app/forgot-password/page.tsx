"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSent(true);
  }

  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      <section className="flex justify-center px-6 py-20 sm:py-28">
        <div className="w-full max-w-md rounded-2xl border border-[#e3ecf2] bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Reset your password</h1>

          {sent ? (
            <p className="mt-4 text-sm text-gray-600">
              If an account exists for <span className="font-medium text-[#1E3765]">{email}</span>,
              a reset link has been sent. Check your inbox (and spam folder).
            </p>
          ) : (
            <>
              <p className="mt-2 text-sm text-gray-500">
                Enter your email and we&apos;ll send you a link to reset your password.
              </p>
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

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a] disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Send reset link"}
                </button>
              </form>
            </>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            <Link href="/login" className="font-medium text-[#007FA3]">
              Back to log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
