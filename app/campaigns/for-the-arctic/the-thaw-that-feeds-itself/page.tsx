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
      The Thaw That Feeds Itself
    </h1>

    <p className="mt-8 leading-8 text-[#1E3765]-700">
        Beneath the Arctic's frozen surface lies something most people never see: permafrost.
        This permanently frozen ground has remained largely unchanged for thousands of years, preserving ancient plants, animals, and enormous amounts of carbon beneath the ice.
        But as Arctic temperatures continue to rise, parts of this frozen ground are beginning to soften and break apart—a process known as permafrost thawing.
        As the frozen ground breaks down, the organic matter trapped inside begins to decompose, releasing carbon dioxide and methane into the atmosphere. These greenhouse gases trap heat, causing temperatures to rise even further.
        This creates what is known as a feedback loop: more warming leads to more permafrost thawing, which releases more greenhouse gases, leading to even more warming.
        In other words, the Arctic isn't just responding to climate change anymore—it may be helping accelerate it.
        And that's why what happens beneath the Arctic's frozen surface matters far beyond the Arctic itself.
        Because sometimes, the effect itself becomes the cause.
    </p>
  </section>
</main>
  );
}