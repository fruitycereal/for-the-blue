"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";
import { actionTiers, tiers } from "@/lib/blueActionData";
import { ecoQuestions, getResultTier } from "@/lib/ecoQuestData";

function tierForAction(actionName: string | null): string | null {
  if (!actionName) return null;
  for (const [tier, list] of Object.entries(actionTiers)) {
    if (list.some((a) => a.name === actionName)) return tier;
  }
  return null;
}

type Profile = { id: string; name: string; credits: number };
type Submission = {
  id: string;
  action: string;
  participants: number;
  evidence_urls: string[] | null;
  status?: "pending" | "verified" | "denied";
  review_note?: string | null;
  created_at?: string;
};
type Scores = { ecosystem: number; community: number; economy: number };

const clamp = (n: number) => Math.max(0, Math.min(100, n));

export default function BlueActionPage() {
  const supabase = createClient();

  // ---- auth / profile ----
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const loadProfile = useCallback(
    async (uid: string) => {
      const { data } = await supabase.from("profiles").select("*").eq("id", uid).single();
      if (data) setProfile(data as Profile);
    },
    [supabase]
  );

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      if (data.user) loadProfile(data.user.id);
      setAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) loadProfile(session.user.id);
      else setProfile(null);
    });

    return () => listener.subscription.unsubscribe();
  }, [supabase, loadProfile]);

  // ---- EcoQuest game ----
  const [qIdx, setQIdx] = useState(0);
  const [scores, setScores] = useState<Scores>({ ecosystem: 50, community: 50, economy: 50 });
  const [chosenLetter, setChosenLetter] = useState<Record<number, string>>({});
  const [gameFinished, setGameFinished] = useState(false);
  const question = ecoQuestions[qIdx];

  function chooseOption(letter: string) {
    if (chosenLetter[qIdx]) return;
    const opt = question.options.find((o) => o.letter === letter)!;
    setScores((s) => ({
      ecosystem: clamp(s.ecosystem + opt.ecosystem),
      community: clamp(s.community + opt.community),
      economy: clamp(s.economy + opt.economy),
    }));
    setChosenLetter((c) => ({ ...c, [qIdx]: letter }));
  }

  function continueGame() {
    if (qIdx === ecoQuestions.length - 1) {
      setGameFinished(true);
    } else {
      setQIdx((i) => i + 1);
    }
  }

  const avgScore = (scores.ecosystem + scores.community + scores.economy) / 3;
  const resultTier = getResultTier(avgScore);
  const chosenOpt = chosenLetter[qIdx]
    ? question.options.find((o) => o.letter === chosenLetter[qIdx])
    : null;

  // ---- act ----
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  // ---- record form ----
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [participants, setParticipants] = useState(1);
  const [accomplishment, setAccomplishment] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const [impact, setImpact] = useState<{ actions: number; participants: number; categories: number; withEvidence: number; countries: number } | null>(null);

  const loadImpact = useCallback(async () => {
    const { data } = await supabase
      .from("submissions")
      .select("action, participants, evidence_urls, user_id")
      .eq("status", "verified");
    const rows = (data ?? []) as (Submission & { user_id: string })[];

    let countryCount = 0;
    if (rows.length > 0) {
      const userIds = Array.from(new Set(rows.map((r) => r.user_id)));
      const { data: profileRows } = await supabase.from("profiles").select("country").in("id", userIds);
      countryCount = new Set((profileRows ?? []).map((p: { country: string | null }) => p.country).filter(Boolean)).size;
    }

    setImpact({
      actions: rows.length,
      participants: rows.reduce((sum, r) => sum + (r.participants || 0), 0),
      categories: new Set(rows.map((r) => r.action)).size,
      withEvidence: rows.filter((r) => r.evidence_urls && r.evidence_urls.length > 0).length,
      countries: countryCount,
    });
  }, [supabase]);

  useEffect(() => {
    loadImpact();
  }, [loadImpact]);

  // ---- evidence collage: photos from verified submissions only ----
  const [collage, setCollage] = useState<string[]>([]);
  const [showAllCollage, setShowAllCollage] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  useEffect(() => {
    async function loadCollage() {
      const { data } = await supabase
        .from("submissions")
        .select("evidence_urls")
        .eq("status", "verified")
        .not("evidence_urls", "eq", "{}");
      const urls = ((data ?? []) as { evidence_urls: string[] | null }[])
        .flatMap((r) => r.evidence_urls ?? [])
        .filter(Boolean);
      setCollage(urls);
    }
    loadCollage();
  }, [supabase]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxUrl(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const [mySubmissions, setMySubmissions] = useState<Submission[]>([]);
  const [showAllSubmissions, setShowAllSubmissions] = useState(false);
  const visibleSubmissions = showAllSubmissions ? mySubmissions : mySubmissions.slice(0, 5);

  const loadMySubmissions = useCallback(
    async (uid: string) => {
      const { data } = await supabase
        .from("submissions")
        .select("id, action, participants, evidence_urls, status, review_note, created_at")
        .eq("user_id", uid)
        .order("created_at", { ascending: false });
      setMySubmissions((data ?? []) as Submission[]);
    },
    [supabase]
  );

  useEffect(() => {
    if (user) loadMySubmissions(user.id);
  }, [user, loadMySubmissions]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    if (!selectedAction) {
      setSubmitStatus({ ok: false, msg: "Pick an action above first." });
      return;
    }
    const tier = tierForAction(selectedAction);
    if ((tier === "Medium" || tier === "Bigger") && files.length === 0) {
      setSubmitStatus({ ok: false, msg: "This action needs at least one photo before it can be verified." });
      return;
    }
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const evidence_urls: string[] = [];
      for (const file of files) {
        const path = `${user.id}/${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage.from("evidence-photos").upload(path, file);
        if (uploadError) throw uploadError;
        const { data: pub } = supabase.storage.from("evidence-photos").getPublicUrl(path);
        evidence_urls.push(pub.publicUrl);
      }

      const { error: insertError } = await supabase.from("submissions").insert({
        user_id: user.id,
        action: selectedAction,
        date,
        participants,
        accomplishment,
        evidence_urls,
      });
      if (insertError) throw insertError;

      setSubmitStatus({ ok: true, msg: "✓ Submitted. It's now pending review, you'll see it move to \"Verified\" below once checked." });
      setSelectedAction(null);
      setParticipants(1);
      setAccomplishment("");
      setFiles([]);
      await loadMySubmissions(user.id);
    } catch (err) {
      setSubmitStatus({ ok: false, msg: "Something went wrong saving this, please try again." });
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  // ---- full-page gate ----
  if (!authLoading && !user) {
    return (
      <main className="min-h-screen bg-[#F7FBFD]">
        <Navbar />
        <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
          <div className="w-full max-w-md rounded-2xl border border-[#e3ecf2] bg-white p-10 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#007FA3]">Your Blue Action</p>
            <h1 className="mt-3 text-2xl font-bold text-[#1E3765]">Sign in to start EcoQuest</h1>
            <p className="mt-3 text-sm text-gray-500">
              Log in or create an account first, that&apos;s what lets you play EcoQuest, record real actions, and earn Blue Action credits.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/login?redirect=/blue-action"
                className="rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a]"
              >
                Log In
              </Link>
              <Link
                href="/signup?redirect=/blue-action"
                className="rounded-full border border-[#007FA3] px-6 py-3 text-sm font-semibold text-[#007FA3] transition hover:bg-[#e6f6fb]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (authLoading) {
    return (
      <main className="min-h-screen bg-[#F7FBFD]">
        <Navbar />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#1E3765] px-6 py-20 text-center text-white sm:px-8 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c4e4ef]">
          Your Blue Action · EcoQuest: Save the Coast
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Manage the coast. Learn the trade-offs. Take real action.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm text-[#c4e4ef] sm:text-base">
          Play as a coastal conservation manager, then take a real action, recorded and recognized by For The Blue.
        </p>
      </section>

      {/* ECOQUEST */}
      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#007FA3]">01 · EcoQuest</p>

          {!gameFinished ? (
            <>
              <div className="mb-4 flex gap-1.5">
                {ecoQuestions.map((_, i) => (
                  <div key={i} className="h-1 flex-1 rounded-full bg-[#e3ecf2]">
                    <div
                      className="h-1 rounded-full bg-[#007FA3] transition-all"
                      style={{ width: i <= qIdx ? "100%" : "0%" }}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6 grid grid-cols-3 gap-3">
                {([
                  ["Ecosystem", scores.ecosystem, "🌊"],
                  ["Community", scores.community, "👥"],
                  ["Economy", scores.economy, "💰"],
                ] as const).map(([label, val, icon]) => (
                  <div key={label} className="rounded-xl border border-[#e3ecf2] bg-white p-3 text-center">
                    <p className="text-lg">{icon}</p>
                    <p className="text-sm font-bold text-[#1E3765]">{val}/100</p>
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#e3ecf2] bg-white p-8 shadow-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#007FA3]">
                  Question {qIdx + 1} of {ecoQuestions.length} · {question.title}
                </p>
                <h3 className="text-xl font-bold text-[#1E3765] sm:text-2xl">{question.prompt}</h3>
                <p className="mt-2 text-xs italic text-gray-400">Focus: {question.focus}</p>

                <div className="mt-5 flex flex-col gap-2.5">
                  {question.options.map((opt) => {
                    const isAnswered = !!chosenLetter[qIdx];
                    const pickedThis = chosenLetter[qIdx] === opt.letter;
                    return (
                      <button
                        key={opt.letter}
                        disabled={isAnswered}
                        onClick={() => chooseOption(opt.letter)}
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm text-gray-700 transition ${
                          pickedThis ? "border-[#007FA3] bg-[#e6f6fb]" : "border-[#e3ecf2] hover:border-[#007FA3]"
                        } ${isAnswered && !pickedThis ? "opacity-50" : ""}`}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3765] text-xs font-bold text-white">
                          {opt.letter}
                        </span>
                        {opt.text}
                      </button>
                    );
                  })}
                </div>

                {chosenOpt && (
                  <div className="mt-4 rounded-xl bg-[#1E3765] px-4 py-4 text-sm leading-relaxed text-gray-200">
                    <p className="mb-2 font-semibold text-white">
                      You chose {chosenOpt.letter}: {chosenOpt.text}
                    </p>
                    <p>{chosenOpt.explanation}</p>
                    <div className="mt-3 flex gap-4 text-xs">
                      <span>🌊 {chosenOpt.ecosystem >= 0 ? "+" : ""}{chosenOpt.ecosystem}</span>
                      <span>👥 {chosenOpt.community >= 0 ? "+" : ""}{chosenOpt.community}</span>
                      <span>💰 {chosenOpt.economy >= 0 ? "+" : ""}{chosenOpt.economy}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  disabled={!chosenLetter[qIdx]}
                  onClick={continueGame}
                  className="rounded-full bg-[#1E3765] px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
                >
                  {qIdx === ecoQuestions.length - 1 ? "See Result →" : "Next Question →"}
                </button>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-[#e3ecf2] bg-white p-8 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#007FA3]">Final Result</p>
              <h3 className="mt-2 text-2xl font-bold text-[#1E3765]">{resultTier.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{resultTier.description}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {([
                  ["Ecosystem", scores.ecosystem, "🌊"],
                  ["Community", scores.community, "👥"],
                  ["Economy", scores.economy, "💰"],
                ] as const).map(([label, val, icon]) => (
                  <div key={label} className="rounded-xl border border-[#e3ecf2] p-4">
                    <p className="text-xl">{icon}</p>
                    <p className="text-lg font-bold text-[#1E3765]">{val}/100</p>
                    <p className="text-[10px] uppercase tracking-wide text-gray-400">{label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById("act")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-7 rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a]"
              >
                See how you can make a difference →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ACT */}
      <section id="act" className="bg-[#ECF1F6] px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#007FA3]">02 · Act</p>
          <h2 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Pick a real-world action</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            It doesn&apos;t need to be organized by FTB, a cleanup, a lesson, a waste audit, wherever you are.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {Object.entries(actionTiers).map(([tier, list]) => (
              <div key={tier}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{tier}</p>
                <div className="flex flex-col gap-3">
                  {list.map((a) => (
                    <button
                      key={a.name}
                      onClick={() => {
                        setSelectedAction(a.name);
                        document.getElementById("record")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`rounded-xl border p-4 text-left transition ${
                        selectedAction === a.name
                          ? "border-[#007FA3] bg-[#e6f6fb]"
                          : "border-[#e3ecf2] bg-white hover:border-[#007FA3]"
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#1E3765]">{a.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">{a.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECORD */}
      <section id="record" className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-lg">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#007FA3]">03 · Record</p>
          <h2 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Log what you did</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                Action
              </label>
              <input
                readOnly
                value={selectedAction ?? ""}
                placeholder="Select an action above…"
                className="w-full rounded-xl border border-[#d5e3ee] bg-gray-50 px-4 py-3 text-[#1E3765]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-[#d5e3ee] px-4 py-3 text-[#1E3765]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                  Participants
                </label>
                <input
                  type="number"
                  min={1}
                  required
                  value={participants}
                  onChange={(e) => setParticipants(Number(e.target.value))}
                  className="w-full rounded-xl border border-[#d5e3ee] px-4 py-3 text-[#1E3765]"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                What did you accomplish?
              </label>
              <textarea
                required
                rows={3}
                value={accomplishment}
                onChange={(e) => setAccomplishment(e.target.value)}
                placeholder="e.g. Collected roughly 8kg of plastic waste along 400m of beach with 6 classmates."
                className="w-full rounded-xl border border-[#d5e3ee] px-4 py-3 text-[#1E3765]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1E3765]/70">
                Photo evidence{" "}
                {tierForAction(selectedAction) === "Medium" || tierForAction(selectedAction) === "Bigger"
                  ? "(required — at least 1)"
                  : "(optional, multiple allowed)"}
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(e.target.files ? Array.from(e.target.files) : [])}
                className="w-full rounded-xl border border-[#d5e3ee] px-4 py-3 text-sm text-[#1E3765]"
              />
              {files.length > 0 && <p className="mt-1.5 text-xs text-gray-500">{files.length} photo(s) selected</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a] disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Submit Blue Action"}
            </button>

            {submitStatus && (
              <p className={`text-sm ${submitStatus.ok ? "text-[#007FA3]" : "text-red-500"}`}>{submitStatus.msg}</p>
            )}
          </form>
        </div>
      </section>

      {/* RECOGNIZE */}
      <section className="bg-[#071D42] px-6 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#c4e4ef]">04 · Recognize</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Your Blue Actions</h2>

          {profile && (
            <div className="mt-6 flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-4xl font-bold text-[#F1C78A]">{profile.credits}</p>
              <p className="text-sm text-[#c4e4ef]">
                Verified Blue Action credits earned as <span className="font-semibold text-white">{profile.name}</span>
              </p>
            </div>
          )}

          {mySubmissions.length > 0 && (
            <div className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c4e4ef]">Your submissions</p>
              {visibleSubmissions.map((s) => (
                <div key={s.id} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">{s.action}</p>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        s.status === "verified"
                          ? "bg-[#F1C78A] text-[#1E3765]"
                          : s.status === "denied"
                          ? "bg-red-400/20 text-red-300"
                          : "bg-white/10 text-[#c4e4ef]"
                      }`}
                    >
                      {s.status === "verified" ? "Verified" : s.status === "denied" ? "Denied" : "Pending review"}
                    </span>
                  </div>
                  {s.status === "denied" && s.review_note && (
                    <p className="mt-1.5 text-xs text-red-300/80">Reason: {s.review_note}</p>
                  )}
                </div>
              ))}
              {mySubmissions.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllSubmissions((v) => !v)}
                  className="mt-1 text-xs font-semibold text-[#F1C78A] hover:underline"
                >
                  {showAllSubmissions ? "Show less" : `See more (${mySubmissions.length - 5} more)`}
                </button>
              )}
            </div>
          )}

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {tiers.map((t) => {
              const unlocked = (profile?.credits ?? 0) >= t.n;
              return (
                <div
                  key={t.n}
                  className={`rounded-xl border p-4 text-center ${unlocked ? "border-[#F1C78A] bg-white/10" : "border-white/15 opacity-50"}`}
                >
                  <p className="mb-1 text-[10px] uppercase tracking-wide text-[#c4e4ef]">{t.n}+ actions</p>
                  <p className="text-2xl">{t.icon}</p>
                  <p className="mt-1 text-xs font-semibold">{t.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[#1E3765] px-6 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#c4e4ef]">05 · Community Impact</p>
          <h2 className="text-2xl font-bold sm:text-3xl">What For The Blue has actually done</h2>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-5">
            {[
              ["Actions recorded", impact?.actions ?? "–"],
              ["Participants", impact?.participants ?? "–"],
              ["Distinct actions taken", impact?.categories ?? "–"],
              ["With photo evidence", impact?.withEvidence ?? "–"],
              ["Countries", impact?.countries ?? "–"],
            ].map(([label, val]) => (
              <div key={label as string} className="bg-[#1E3765] p-6">
                <p className="text-3xl font-bold text-[#F1C78A]">{val}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#c4e4ef]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-lg text-xs text-[#c4e4ef]/70">
            Every number comes from a submitted, verified action, not views or likes.
          </p>
        </div>
      </section>

      {/* EVIDENCE COLLAGE */}
      {collage.length > 0 && (
        <section className="bg-[#F7FBFD] px-6 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#007FA3]">Proof, not promises</p>
            <h2 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">Real people, real actions</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Every photo here comes from a verified Blue Action submission, this is what our community has actually done.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {(showAllCollage ? collage : collage.slice(0, 12)).map((url, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxUrl(url)}
                  className="block aspect-square overflow-hidden rounded-xl border border-[#e3ecf2]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt="Verified Blue Action evidence" className="h-full w-full object-cover transition hover:scale-105" />
                </button>
              ))}
            </div>

            {collage.length > 12 && (
              <button
                type="button"
                onClick={() => setShowAllCollage((v) => !v)}
                className="mt-5 text-sm font-semibold text-[#007FA3] hover:underline"
              >
                {showAllCollage ? "Show less" : `See all ${collage.length} photos`}
              </button>
            )}
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {lightboxUrl && (
        <div
          onClick={() => setLightboxUrl(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
        >
          <button
            type="button"
            onClick={() => setLightboxUrl(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxUrl}
            alt="Verified Blue Action evidence, full size"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
          />
        </div>
      )}
    </main>
  );
}
