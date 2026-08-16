import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ForTheArcticPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[430px] w-full">
          <Image
            src="/actualpics/campaign1.png"
            alt="Arctic sea ice"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#102F4F]/80" />

          <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              🟢 Active Campaign
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white sm:text-6xl">
              For The Arctic
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              A campaign dedicated to raising awareness about the Arctic,
              educating communities about its importance, and supporting
              conservation through fundraising initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* CAMPAIGN OVERVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* WHY IT MATTERS */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#DCECF2] sm:p-10">
            <h2 className="text-2xl font-bold text-[#1E3765] sm:text-3xl">
             Why This Campaign Matters
            </h2>

            <p className="mt-5 leading-8 text-[#596A8B]">
              The Arctic plays a vital role in regulating Earth's climate and
              is home to unique ecosystems and wildlife.
            </p>

            <p className="mt-4 leading-8 text-[#596A8B]">
              Through education, outreach, and fundraising, For the Blue hopes
              to inspire more people to understand its importance and take
              action.
            </p>
          </div>

          {/* HOW WE'RE HELPING */}
          <div className="rounded-3xl bg-[#1E3765] p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How We're Helping
            </h2>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3 text-[#DCEFFA]">
                <span className="mt-0.5">📚</span>
                <span>Sharing educational resources</span>
              </li>

              <li className="flex items-start gap-3 text-[#DCEFFA]">
                <span className="mt-0.5">👕</span>
                <span>Raising funds through merchandise</span>
              </li>

              <li className="flex items-start gap-3 text-[#DCEFFA]">
                <span className="mt-0.5">💙</span>
                <span>Supporting conservation initiatives</span>
              </li>

              <li className="flex items-start gap-3 text-[#DCEFFA]">
                <span className="mt-0.5">🌍</span>
                <span>Inspiring community action</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRESERVING THE ARCTIC */}
      <section className="bg-white px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#007FA3]">
              Educational Series
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#1E3765] sm:text-5xl">
              Preserving the Arctic
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#596A8B]">
              As part of the For The Arctic campaign, our members created an
              educational series exploring why the Arctic matters and why
              protecting it matters to all of us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* CARD 1 */}
            <Link
              href="/campaigns/for-the-arctic/when-comfort-begins-to-melt"
              className="group"
            >
              <article className="flex h-full flex-col rounded-3xl border border-[#DCECF2] bg-[#F7FBFD] p-7 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <span className="text-sm font-bold text-[#007FA3]">
                  01
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#1E3765]">
                  When Comfort Begins to Melt
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#596A8B]">
                  Discover how the Arctic helps regulate Earth's climate and
                  why its rapid warming affects us all.
                </p>

                <p className="mt-7 font-semibold text-[#007FA3] transition group-hover:text-[#1E3765]">
                  Read more →
                </p>
              </article>
            </Link>

            {/* CARD 2 */}
            <Link
              href="/campaigns/for-the-arctic/the-thaw-that-feeds-itself"
              className="group"
            >
              <article className="flex h-full flex-col rounded-3xl border border-[#DCECF2] bg-[#F7FBFD] p-7 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <span className="text-sm font-bold text-[#007FA3]">
                  02
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#1E3765]">
                  The Thaw That Feeds Itself
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#596A8B]">
                  Learn how Arctic warming can trigger feedback loops that
                  accelerate even more change.
                </p>

                <p className="mt-7 font-semibold text-[#007FA3] transition group-hover:text-[#1E3765]">
                  Read more →
                </p>
              </article>
            </Link>

            {/* CARD 3 */}
            <Link
              href="/campaigns/for-the-arctic/for-the-arctic-by-us"
              className="group"
            >
              <article className="flex h-full flex-col rounded-3xl border border-[#DCECF2] bg-[#F7FBFD] p-7 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <span className="text-sm font-bold text-[#007FA3]">
                  03
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#1E3765]">
                  For the Arctic, By Us
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#596A8B]">
                  Explore how education and community action can help protect
                  the Arctic.
                </p>

                <p className="mt-7 font-semibold text-[#007FA3] transition group-hover:text-[#1E3765]">
                  Read more →
                </p>
              </article>
            </Link>
            
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#007FA3] px-6 py-12 text-center sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4E4EF]">
            Go Deeper
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Explore More About the Arctic
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Want to dive deeper? Visit our full{" "}
            <strong>Preserving the Arctic</strong> educational resource for
            additional information and learning materials.
          </p>

          <a
            href="https://sites.google.com/view/preserving-for-the-arctic/home#h.9diy3wndrv5w"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3 font-semibold text-[#1E3765] transition hover:bg-[#E6F6FB]"
          >
            Explore the Resource →
          </a>
        </div>
      </section>
    </main>
  );
}