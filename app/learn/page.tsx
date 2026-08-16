import Navbar from "@/components/Navbar";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1E3765] px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4E4EF]">
            Learn · Understand · Act
          </p>

          <h1 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
            The Story of Our Planet
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#C4E4EF] sm:text-lg">
            Scroll through to understand why our oceans and Arctic matter and
            what we can do about it.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />
      </section>

      {/* WAVE */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="-mt-1 block h-16 w-full"
        style={{ background: "#1E3765" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z"
          fill="#F7FBFD"
        />
      </svg>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-6 pb-10 sm:px-8">

        {/* CHAPTER 1 */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-[#E6F6FB] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#007FA3]">
              Chapter 1
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1E3765] sm:text-4xl">
              The Ocean
            </h2>

            <p className="mt-2 text-sm text-[#596A8B]">
              The blue that sustains us
            </p>
          </div>

          <div className="relative ml-3 border-l-2 border-[#C4E4EF] pl-8 sm:ml-8 sm:pl-10">

            {/* ITEM */}
            <div className="relative pb-14">
              <div className="absolute -left-[43px] top-0 h-5 w-5 rounded-full border-4 border-[#F7FBFD] bg-[#007FA3] sm:-left-[51px]" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#007FA3]">
                Did you know
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#1E3765]">
                The ocean breathes for us
              </h3>

              <p className="mt-3 text-base leading-8 text-gray-600">
                The ocean produces over{" "}
                <strong className="text-[#1E3765]">
                  50% of the world's oxygen
                </strong>{""}
                , more than all the world's forests combined. <br></br>
                Every second breath you take comes from the sea.
               
              </p>
            </div>

            {/* ITEM */}
            <div className="relative">
              <div className="absolute -left-[43px] top-0 h-5 w-5 rounded-full border-4 border-[#F7FBFD] bg-[#007FA3] sm:-left-[51px]" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#007FA3]">
                The threat
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#1E3765]">
                But it's under pressure
              </h3>

              <p className="mt-3 text-base leading-8 text-gray-600">
                Pollution, overfishing, and rising temperatures are pushing
                marine ecosystems to their limits. 
                <br></br>
                Over{" "}
                <strong className="text-[#1E3765]">
                  1 million species
                </strong>{" "}
                call the ocean home, and many are at risk.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#D0E8F2] bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-[#007FA3]">8M</p>
                  <p className="mt-1 text-sm text-gray-500">
                    tonnes of plastic enter oceans yearly
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D0E8F2] bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-[#007FA3]">50%</p>
                  <p className="mt-1 text-sm text-gray-500">
                    of coral reefs lost since 1950
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 2 */}
        <div className="mb-16 rounded-3xl bg-[#EAF6FA] px-6 py-12 sm:px-10">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#007FA3]">
              Chapter 2
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1E3765] sm:text-4xl">
              The Arctic
            </h2>

            <p className="mt-2 text-sm text-[#596A8B]">
              Earth's frozen regulator
            </p>
          </div>

          <div className="relative ml-3 border-l-2 border-[#B9DCE8] pl-8 sm:ml-8 sm:pl-10">

            <div className="relative pb-14">
              <div className="absolute -left-[43px] top-0 h-5 w-5 rounded-full border-4 border-[#EAF6FA] bg-[#1E3765] sm:-left-[51px]" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#007FA3]">
                The Arctic
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#1E3765]">
                Earth's thermostat
              </h3>

              <p className="mt-3 text-base leading-8 text-gray-600">
                The Arctic acts as Earth's air conditioner. Its white ice
                reflects sunlight back into space, keeping global temperatures
                stable. Without it, the planet heats faster.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[43px] top-0 h-5 w-5 rounded-full border-4 border-[#EAF6FA] bg-[#1E3765] sm:-left-[51px]" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#007FA3]">
                The crisis
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#1E3765]">
                The ice is disappearing
              </h3>

              <p className="mt-3 text-base leading-8 text-gray-600">
                Arctic sea ice is shrinking at a rate of{" "}
                <strong className="text-[#1E3765]">13% per decade</strong>.
                As it melts, sea levels rise and weather patterns around the
                world become more extreme.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#C7E2EB] bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-[#007FA3]">13%</p>
                  <p className="mt-1 text-sm text-gray-500">
                    sea ice lost per decade
                  </p>
                </div>

                <div className="rounded-2xl border border-[#C7E2EB] bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-[#007FA3]">3°C</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Arctic warming vs global average
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CHAPTER 3 */}
        <div className="mb-10">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-[#E6F6FB] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#007FA3]">
              Chapter 3
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1E3765] sm:text-4xl">
              What You Can Do
            </h2>

            <p className="mt-2 text-sm text-[#596A8B]">
              Small actions can create collective change
            </p>
          </div>

          <div className="rounded-3xl border border-[#D0E8F2] bg-white p-7 shadow-sm sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#007FA3]">
              Your impact
            </span>

            <h3 className="mt-2 text-2xl font-bold text-[#1E3765]">
              Every action counts
            </h3>

            <p className="mt-3 text-base leading-8 text-gray-600">
              Change doesn't have to be overwhelming. Small, consistent
              actions, and supporting the right organizations, create real
              impact at scale.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { icon: "🤝", text: "Support conservation organizations" },
                { icon: "♻️", text: "Reduce plastic and waste" },
                { icon: "📢", text: "Learn and spread awareness" },
                { icon: "❄️", text: "Support campaigns like For the Arctic" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-[#D0E8F2] bg-[#F7FBFD] px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-600">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#1E3765] px-7 py-12 text-center text-white sm:px-12">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C4E4EF]">
              Get involved
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Ready to take action?
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#C4E4EF]">
              Knowledge is the first step. Join our campaigns and help make a
              real difference.
            </p>

            <a
              href="/#campaigns"
              className="mt-7 inline-block rounded-full bg-[#007FA3] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#006A8A]"
            >
              View Our Campaigns →
            </a>
          </div>

          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />
        </div>
      </section>
    </main>
  );
}