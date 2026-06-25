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
      For The Arctic, By Us
    </h1>

    <p className="mt-8 leading-8 text-[#1E3765]-700">
        When most people think of the Arctic, they think of ice.
        But beyond the glaciers and snow-covered landscapes lies a world full of life.
        Families have called this region home for generations. Animals have adapted to survive in conditions few others can endure. Entire ecosystems have evolved around the natural rhythm of the Arctic—its seasons, its ice, and its waters.
        Today, that rhythm is changing.
        Sea ice is forming later and melting earlier. Wildlife is being pushed to adapt to unfamiliar conditions. Communities are witnessing changes to the environment that has shaped their way of life for centuries.
        The Arctic's story is not just about a region at the top of the world.
        It's about the delicate connections that tie people, nature, and climate together.
        And perhaps that's the most important lesson of all: the challenges facing our planet don't stop at borders. They ripple outward, touching lives in ways we may not immediately see.
        That's why awareness matters.
        At For The Blue, we believe that understanding is where meaningful change begins.
        Because protecting our planet isn't the responsibility of a few, it's a shared effort.
        Let's learn, share, and stand together for the Arctic, for our oceans, and for the blue that connects us all.
    </p>
  </section>
</main>
  );
}