import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#1E3765]/95 px-8 py-5 text-white shadow-lg backdrop-blur">
        <div className="flex items-center gap-7">
          <Image
            src="/logo.png"
            alt="For the Blue Logo"
            width={70}
            height={70}
            priority
          />
          <h1 className="text-2xl font-bold text-white">
            For the Blue
          </h1>
        </div>

        <div className="flex gap-6 text-white">
          <Link href = "/">Home</Link>
          <a href="/about">About</a>
          <a href="/campaigns">Campaigns</a>
          <a href="/learn">Learn</a>
          <a href="/get-involved">Get Involved</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="px-8 py-32 text-center">
        <h2 className="text-5xl font-bold text-[#1E3765]">
          Protecting Our Blue Planet,
          <br />
          From Ocean to Arctic.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          For the Blue empowers people to protect our oceans and the Arctic
          through education, creativity, technology, and community action.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-[#007FA3] px-6 py-3 text-white">
            Explore Campaigns
          </button>

          <button className="rounded-full border border-[#007FA3] px-6 py-3 text-[#007FA3]">
            Get Involved
          </button>
        </div>
      </section>

      <section className="bg-[#C4E4EF] py-20">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#1E3765]">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-[#1E3765]">
            For the Blue is a youth-led nonprofit committed to supporting the
            protection of our oceans and the Arctic through fundraising,
            education, and community action. We connect people with meaningful
            campaigns that help make a lasting difference.
          </p>
        </div>
      </section>

      <section className="bg-[#F7FBFD] py-20">
  <div className="mx-auto max-w-6xl px-8">
    <h2 className="mb-10 text-center text-4xl font-bold text-[#1E3765]">
      Featured Campaigns
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="mb-3 text-2xl font-semibold text-[#1E3765]">
          Campaign One
        </h3>
        <p className="text-gray-600">
          A short description of your current fundraising campaign.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="mb-3 text-2xl font-semibold text-[#1E3765]">
          Campaign Two
        </h3>
        <p className="text-gray-600">
          Highlight another initiative or fundraising effort.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="mb-3 text-2xl font-semibold text-[#1E3765]">
          Campaign Three
        </h3>
        <p className="text-gray-600">
          Showcase an upcoming or ongoing campaign here.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}