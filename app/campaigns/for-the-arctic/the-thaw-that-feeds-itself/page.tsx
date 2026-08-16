import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ForTheArcticPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[360px] w-full">
          <Image
            src="/campaignpics/thaw.jpg"
            alt="Arctic sea ice"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#102F4F]/45" />

          <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4E4EF]">
              For The Arctic · Educational Series
            </p>

            <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
              The Thaw That Feeds Itself
            </h1>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
        <Link
          href="/campaigns/for-the-arctic"
          className="inline-flex items-center text-sm font-semibold text-[#007FA3] transition hover:text-[#1E3765]"
        >
          ← Back to For The Arctic
        </Link>

        <article className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#DCECF2] sm:p-12">
          <p className="text-lg leading-9 text-[#596A8B]">
            Beneath the Arctic's frozen surface lies something most people
            never see: permafrost.
            <br />
            <br />
            This permanently frozen ground has remained largely unchanged for
            thousands of years, preserving ancient plants, animals, and
            enormous amounts of carbon beneath the ice.
            <br />
            <br />
            But as Arctic temperatures continue to rise, parts of this frozen
            ground are beginning to soften and break apart—a process known as
            permafrost thawing.
            <br />
            <br />
            As the frozen ground breaks down, the organic matter trapped inside
            begins to decompose, releasing carbon dioxide and methane into the
            atmosphere. These greenhouse gases trap heat, causing temperatures
            to rise even further.
          </p>
          <br></br>
            <p className="mt-3 text-lg font-semibold leading-8 text-[#1E3765]">
              More warming → more permafrost thawing → more greenhouse gases →
              more warming.
            </p>
          <br></br>
          <p className="text-lg leading-9 text-[#596A8B]">
            This creates what is known as a feedback loop: more warming leads
            to more permafrost thawing, which releases more greenhouse gases,
            leading to even more warming.
            <br />
            <br />
            In other words, the Arctic isn't just responding to climate change
            anymore—it may be helping accelerate it.
            <br />
            <br />
            And that's why what happens beneath the Arctic's frozen surface
            matters far beyond the Arctic itself.
          </p>
          <br></br>
            <p className="text-xl font-bold leading-8 text-[#1E3765]">
              Because sometimes, the effect itself becomes the cause.
            </p>
        </article>
      </section>
    </main>
  );
}