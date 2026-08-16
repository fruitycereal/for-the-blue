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
              When Comfort Begins to Melt
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
            Imagine spending your summer in the comfort of an air-conditioned
            home.
            <br />
            <br />
            You rarely think about the machine behind that comfort. It quietly
            does its job, keeping the heat outside and life inside running
            smoothly.
            <br />
            <br />
            But what happens when that cooling system begins to fail?
            <br />
            <br />
            In many ways, the Arctic plays a similar role for our planet.
            <br />
            <br />
            For centuries, its vast ice-covered landscapes have reflected
            sunlight back into space, helping regulate Earth's temperature and
            acting as one of its natural cooling systems.
            <br />
            <br />
            Today, that system is under strain.
            <br />
            <br />
            The Arctic is now warming nearly four times faster than the rest of
            the planet—a pace that has scientists around the world paying close
            attention. They even have a name for it: Arctic Amplification.
            <br />
            <br />
            What once seemed like a distant, frozen region is becoming one of
            the clearest signals of a changing climate.
            <br />
            <br />
            While nearly 4 million people call the Arctic home, its influence
            reaches far beyond its icy borders.
          </p>
          <br></br>
            <p className="text-lg font-semibold leading-8 text-[#1E3765]">
              Because when one of Earth's natural cooling systems begins to
              struggle, the effects don't stay in the Arctic.
            </p>
        </article>
      </section>
    </main>
  );
}