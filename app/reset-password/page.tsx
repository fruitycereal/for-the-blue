"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setDone(true);
    setTimeout(() => {
      router.push("/blue-action");
      router.refresh();
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      <section className="flex justify-center px-6 py-20 sm:py-28">
        <div className="w-full max-w-md rounded-2xl border border-[#e3ecf2] bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Set a new password</h1>

          {done ? (
            <p className="mt-4 text-sm text-gray-600">Password updated, redirecting you now…</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                  New password
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
                {loading ? "Updating…" : "Update password"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
