import Image from "next/image";
import Link from "next/link";

export default function ForTheArcticPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      {/* Banner */}
      <div className="relative h-[350px] w-full">
        <Image
          src="/arctic-banner.jpg"
          alt="For The Arctic campaign banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-8 py-16">
        <p className="mb-3 inline-block rounded-full bg-[#C4E4EF] px-4 py-2 text-sm font-semibold text-[#1E3765]">
          🟢 Active Campaign
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#1E3765]">
          For The Arctic
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          A campaign dedicated to raising awareness about the Arctic, educating
          communities about its importance, and supporting conservation through
          fundraising initiatives.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#1E3765]">
            Why This Campaign Matters
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            The Arctic plays a vital role in regulating Earth's climate and is
            home to unique ecosystems and wildlife. Through educational content,
            community outreach, and fundraising efforts, For the Blue aims to
            inspire more people to understand its importance and take action.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#1E3765]">
            How We're Helping
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>📚 Sharing educational resources about the Arctic.</li>
            <li>👕 Raising funds through merchandise sales.</li>
            <li>💙 Supporting environmental conservation initiatives.</li>
            <li>🌍 Encouraging young people to get involved and spread awareness.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/learn"
            className="rounded-full bg-[#007FA3] px-6 py-3 text-white"
          >
            Learn More
          </Link>

          <Link
            href="/get-involved"
            className="rounded-full border border-[#007FA3] px-6 py-3 text-[#007FA3]"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}