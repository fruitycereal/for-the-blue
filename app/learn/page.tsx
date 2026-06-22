import Navbar from "@/components/Navbar";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#1E3765] px-8 pb-0 pt-16 text-center text-white">
        <br></br>
        <h1 className="mt-5 text-5xl font-bold">The Story of Our Planet</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#c4e4ef]">
          Scroll through to understand why our oceans and Arctic matter and what we can do about it.
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

      {/* TIMELINE */}
      <section className="mx-auto max-w-3xl px-8 pb-8">

  <p className="text-center text-xs font-medium uppercase tracking-widest text-[#007FA3] mb-12">
    Chapter 1: The Ocean
  </p>

  <div className="relative ml-4">
    {/* The vertical line */}
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#c4e4ef]" />

    {/* Item */}
    <div className="relative pl-10 pb-16">
      <div className="absolute left-[-11px] top-1 h-5 w-5 rounded-full bg-[#007FA3] border-4 border-[#F7FBFD] z-10" />
      <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">Did you know</span>
      <h2 className="mt-1 text-2xl font-bold text-[#1E3765]">The ocean breathes for us</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        The ocean produces over <strong className="text-[#1E3765]">50% of the world's oxygen</strong> — more than all the world's forests combined. Every second breath you take comes from the sea.
      </p>
    </div>

    <div className="relative pl-10 pb-16">
      <div className="absolute left-[-11px] top-1 h-5 w-5 rounded-full bg-[#007FA3] border-4 border-[#F7FBFD] z-10" />
      <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">The threat</span>
      <h2 className="mt-1 text-2xl font-bold text-[#1E3765]">But it's under pressure</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        Pollution, overfishing, and rising temperatures are pushing marine ecosystems to their limits. Over <strong className="text-[#1E3765]">1 million species</strong> call the ocean home — and many are at risk.
      </p>
      <div className="mt-5 flex gap-4">
        <div className="rounded-xl border border-[#d0e8f2] bg-white px-6 py-4 min-w-[140px]">
          <p className="text-2xl font-bold text-[#007FA3]">8M</p>
          <p className="text-xs text-gray-500 mt-1">tonnes of plastic enter oceans yearly</p>
        </div>
        <div className="rounded-xl border border-[#d0e8f2] bg-white px-6 py-4 min-w-[140px]">
          <p className="text-2xl font-bold text-[#007FA3]">50%</p>
          <p className="text-xs text-gray-500 mt-1">of coral reefs lost since 1950</p>
        </div>
      </div>
    </div>

  </div>

  <p className="text-center text-xs font-medium uppercase tracking-widest text-[#007FA3] mb-12 mt-4">
    Chapter 2: The Arctic
  </p>

  <div className="relative ml-4">
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#c4e4ef]" />

    <div className="relative pl-10 pb-16">
      <div className="absolute left-[-11px] top-1 h-5 w-5 rounded-full bg-[#1E3765] border-4 border-[#F7FBFD] z-10" />
      <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">The Arctic</span>
      <h2 className="mt-1 text-2xl font-bold text-[#1E3765]">Earth's thermostat</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        The Arctic acts as Earth's air conditioner. Its white ice reflects sunlight back into space, keeping global temperatures stable. Without it, the planet heats faster.
      </p>
    </div>

    <div className="relative pl-10 pb-16">
      <div className="absolute left-[-11px] top-1 h-5 w-5 rounded-full bg-[#1E3765] border-4 border-[#F7FBFD] z-10" />
      <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">The crisis</span>
      <h2 className="mt-1 text-2xl font-bold text-[#1E3765]">The ice is disappearing</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        Arctic sea ice is shrinking at a rate of <strong className="text-[#1E3765]">13% per decade</strong>. As it melts, sea levels rise and weather patterns around the world become more extreme.
      </p>
      <div className="mt-5 flex gap-4">
        <div className="rounded-xl border border-[#d0e8f2] bg-white px-6 py-4 min-w-[140px]">
          <p className="text-2xl font-bold text-[#007FA3]">13%</p>
          <p className="text-xs text-gray-500 mt-1">sea ice lost per decade</p>
        </div>
        <div className="rounded-xl border border-[#d0e8f2] bg-white px-6 py-4 min-w-[140px]">
          <p className="text-2xl font-bold text-[#007FA3]">3°C</p>
          <p className="text-xs text-gray-500 mt-1">Arctic warming vs global average</p>
        </div>
      </div>
    </div>

  </div>

  <p className="text-center text-xs font-medium uppercase tracking-widest text-[#007FA3] mb-12 mt-4">
    Chapter 3: What You Can Do
  </p>

  <div className="relative ml-4">
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#c4e4ef]" />

    <div className="relative pl-10 pb-4">
      <div className="absolute left-[-11px] top-1 h-5 w-5 rounded-full bg-[#c4e4ef] border-4 border-[#F7FBFD] z-10" />
      <span className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">Your impact</span>
      <h2 className="mt-1 text-2xl font-bold text-[#1E3765]">Every action counts</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        Change doesn't have to be overwhelming. Small, consistent actions — and supporting the right organizations — create real impact at scale.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        {[
          { icon: "🤝", text: "Support conservation organizations" },
          { icon: "♻️", text: "Reduce plastic and waste" },
          { icon: "📢", text: "Learn and spread awareness" },
          { icon: "❄️", text: "Support campaigns like For the Arctic" },
        ].map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-3 rounded-xl border border-[#d0e8f2] bg-white px-4 py-3"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm text-gray-600">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

</section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-3xl px-8 py-16">
        <div className="rounded-2xl bg-[#1E3765] px-8 py-10 text-center text-white">
          <p className="text-xs font-medium uppercase tracking-widest text-[#c4e4ef]">
            Get involved
          </p>
          <h3 className="mt-2 text-2xl font-bold">Ready to take action?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#c4e4ef]">
            Knowledge is the first step. Join our campaigns and help make a real difference.
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