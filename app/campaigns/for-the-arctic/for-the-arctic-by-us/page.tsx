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
            src="/actualpics/campaign1.png"
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
              For The Arctic, By Us
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
            When most people think of the Arctic, they think of ice.
            <br />
            <br />
            But beyond the glaciers and snow-covered landscapes lies a world
            full of life. Families have called this region home for
            generations. Animals have adapted to survive in conditions few
            others can endure. Entire ecosystems have evolved around the
            natural rhythm of the Arctic—its seasons, its ice, and its waters.
            <br />
            <br />
            Today, that rhythm is changing.
            <br />
            <br />
            Sea ice is forming later and melting earlier. Wildlife is being
            pushed to adapt to unfamiliar conditions. Communities are
            witnessing changes to the environment that has shaped their way of
            life for centuries.
            <br />
            <br />
            The Arctic's story is not just about a region at the top of the
            world. It's about the delicate connections that tie people, nature,
            and climate together.
            <br />
            <br />
            And perhaps that's the most important lesson of all: the challenges
            facing our planet don't stop at borders. They ripple outward,
            touching lives in ways we may not immediately see.
          </p>

          {/* HIGHLIGHT */}
          <br></br>
            <p className="mt-3 text-lg font-semibold leading-8 text-[#1E3765]">
              At For The Blue, we believe that understanding is where
              meaningful change begins.
            </p>

          <p className="text-lg leading-9 text-[#596A8B]">
            Because protecting our planet isn't the responsibility of a few,
            it's a shared effort.
          </p>

          {/* ENDING */}
          <div className="mt-10 border-t border-[#DCECF2] pt-8">
            <p className="text-xl font-bold leading-8 text-[#1E3765]">
              Let's learn, share, and stand together for the Arctic, for our
              oceans, and for the blue that connects us all.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}