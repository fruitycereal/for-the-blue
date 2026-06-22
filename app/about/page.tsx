import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#1E3765] px-8 pb-0 pt-16 text-center text-white">
        <br></br>
        <h1 className="mt-5 text-5xl font-bold">About For the Blue</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#c4e4ef]">
          A youth-led initiative focused on protecting oceans and the Arctic
          through education, creativity, and fundraising.
        </p>
        <div className="pb-10" />
      </section>

      {/* WAVE */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full -mt-1 block"
        style={{ background: "#1E3765" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z"
          fill="#F7FBFD"
        />
      </svg>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-4xl px-8 py-12">
        <div className="rounded-2xl border border-[#d0e8f2] bg-white p-10">
          <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">
            Who we are
          </span>
          <h2 className="mt-2 text-3xl font-bold text-[#1E3765]">
            We are For the Blue
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            For the Blue is a youth-led nonprofit initiative dedicated to
            raising awareness and support for the protection of our oceans and
            the Arctic. We focus on combining education, creativity, and
            fundraising to inspire real-world impact.
          </p>
        </div>
      </section>

      {/* MISSION + WHAT WE DO — side by side */}
      <section className="mx-auto max-w-4xl px-8 pb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-[#d0e8f2] bg-white p-8">
            <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">
              Our mission
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#1E3765]">
              Awareness into action
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Our mission is to make environmental action accessible and
              engaging by turning awareness into meaningful campaigns that
              support real conservation organizations.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d0e8f2] bg-white p-8">
            <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">
              What we do
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#1E3765]">
              How we make impact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {[
                "Create awareness campaigns for oceans and the Arctic",
                "Design educational content and resources",
                "Raise funds through creative initiatives and merchandise",
                "Support real conservation organizations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#007FA3]">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-4xl px-8 pb-16">
        <br></br>
        <div className="rounded-2xl bg-[#1E3765] px-8 py-10 text-center text-white">
          <p className="text-xs font-medium uppercase tracking-widest text-[#c4e4ef]">
            Get involved
          </p>
          <h3 className="mt-2 text-2xl font-bold">Ready to make a difference?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#c4e4ef]">
            Join us in protecting our oceans and the Arctic. Every action counts.
          </p>
          
          <a href="/campaigns"
            className="mt-6 inline-block rounded-full bg-[#007FA3] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a]"
          >
            View Our Campaigns →
          </a>
        </div>
      </section>

    </main>
  );
}