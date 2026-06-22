import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ForTheArcticPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      {/* Banner */}
      <div className="relative h-[300px] w-full bg-[#C4E4EF]">
        <Image
          src="/arctic-banner.jpg"
          alt="For The Arctic campaign banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="mx-auto max-w-5xl px-8 py-20 text-center">
        <p className="mb-3 inline-block rounded-full bg-[#C4E4EF] px-4 py-2 text-sm font-semibold text-[#1E3765]">
          🟢 Active Campaign
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#1E3765]">
          For The Arctic
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
          A campaign dedicated to raising awareness about the Arctic, educating
          communities about its importance, and supporting conservation through
          fundraising initiatives.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#1E3765]">
              🌍 Why This Campaign Matters
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              The Arctic plays a vital role in regulating Earth's climate and is home
              to unique ecosystems and wildlife. Through education, outreach, and
              fundraising, For the Blue hopes to inspire more people to understand
              its importance and take action.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#1E3765]">
              💙 How We're Helping
            </h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>📚 Sharing educational resources</li>
              <li>👕 Raising funds through merchandise</li>
              <li>💙 Supporting conservation initiatives</li>
              <li>🌍 Inspiring community action</li>
            </ul>
          </div>
        </div>
      </section>


    <section className="mx-auto max-w-5xl px-8 py-16">
      <h2 className="text-center text-4xl font-bold text-[#1E3765]">
        Preserving the Arctic
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-700">
        As part of the For The Arctic campaign, we've created an educational
        series exploring why the Arctic matters and why protecting it matters to
        all of us.
      </p>
      <br></br>
    
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mt-4 text-2xl font-bold text-[#1E3765]">
              When Comfort Begins to Melt
            </h3>
            <p className="mt-3 text-gray-600">
              Discover how the Arctic helps regulate Earth's climate and why its rapid warming affects us all.
            </p>
            <p className="mt-6 font-medium text-[#007FA3]">
              Read more →
            </p>
          </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mt-4 text-2xl font-bold text-[#1E3765]">
              The Thaw That Feeds Itself
            </h3>
            <p className="mt-3 text-gray-600">
              Learn how Arctic warming can trigger feedback loops that accelerate even more change.
            </p>
            <p className="mt-6 font-medium text-[#007FA3]">
              Read more →
            </p>
        </div>

      <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="mt-4 text-2xl font-bold text-[#1E3765]">
          For the Arctic, By Us
        </h3>
        <p className="mt-3 text-gray-600">
          Explore how education and community action can help protect the Arctic.
        </p>
        <p className="mt-6 font-medium text-[#007FA3]">
          Read more →
        </p>
      </div>
  </div>

    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-[#1E3765]">
        Explore More
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-700">
        Want to dive deeper? Visit our full <strong>Preserving the Arctic</strong>{" "}
        educational resource for additional information and learning materials.
      </p>

      <a href="https://sites.google.com/view/preserving-for-the-arctic/home#h.9diy3wndrv5w"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-[#007FA3] px-6 py-3 text-white transition hover:opacity-90"
      >
        Explore the Resource →
      </a>
    </section>
    <br></br>
  </section>
</main>

  );
}