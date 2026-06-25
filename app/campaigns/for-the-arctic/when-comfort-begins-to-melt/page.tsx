import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ForTheArcticPage() {
  return (
<main className="min-h-screen bg-[#F7FBFD]">
  <Navbar />

  <section className="mx-auto max-w-3xl px-8 py-20">
    <Link
      href="/campaigns/for-the-arctic"
      className="text-[#007FA3] hover:underline"
    >
      ← Back to For The Arctic
    </Link>

    <h1 className="mt-8 text-5xl font-bold text-[#1E3765]">
      When Comfort Begins to Melt
    </h1>

    <p className="mt-8 leading-8 text-[#1E3765]-700">
        Imagine spending your summer in the comfort of an air-conditioned home.

        You rarely think about the machine behind that comfort. It quietly does its job, keeping the heat outside and life inside running smoothly.

        But what happens when that cooling system begins to fail?

        In many ways, the Arctic plays a similar role for our planet.

        For centuries, its vast ice-covered landscapes have reflected sunlight back into space, helping regulate Earth's temperature and acting as one of its natural cooling systems.

        Today, that system is under strain.

        The Arctic is now warming nearly four times faster than the rest of the planet—a pace that has scientists around the world paying close attention. They even have a name for it: Arctic Amplification.

        What once seemed like a distant, frozen region is becoming one of the clearest signals of a changing climate.

        While nearly 4 million people call the Arctic home, its influence reaches far beyond its icy borders.

        Because when one of Earth's natural cooling systems begins to struggle, the effects don't stay in the Arctic.
    </p>
  </section>
</main>
  );
}