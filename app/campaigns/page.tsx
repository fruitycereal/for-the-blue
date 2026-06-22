import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#1E3765] px-8 pb-0 pt-16 text-center text-white">
        <br></br>
        <h1 className="mt-5 text-5xl font-bold">Our Campaigns</h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#c4e4ef]">
          Every campaign supports meaningful efforts to protect our oceans and
          the Arctic through fundraising, education, and community action.
        </p>

        {/* Stats row */}
        <div className="mt-8 flex justify-center gap-4 pb-10">
          <div className="rounded-xl border border-[#c4e4ef]/25 bg-[#c4e4ef]/10 px-8 py-3 text-center">
            <p className="text-2xl font-semibold">1</p>
            <p className="mt-0.5 text-xs text-[#c4e4ef]">Active campaign</p>
          </div>
          <div className="rounded-xl border border-[#c4e4ef]/25 bg-[#c4e4ef]/10 px-8 py-3 text-center">
            <p className="text-2xl font-semibold">2+</p>
            <p className="mt-0.5 text-xs text-[#c4e4ef]">Coming soon</p>
          </div>
        </div>

        {/* Wave divider */}

      </section>

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

      {/* CAMPAIGN CARDS */}
      <section className="mx-auto max-w-5xl px-8 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Active card */}
          <Link href="/campaigns/for-the-arctic" className="group">
            <div className="flex min-h-[220px] flex-col rounded-2xl border border-[#007FA3] bg-white p-6 transition hover:shadow-lg">
              <h2 className="text-lg font-semibold text-[#1E3765]">For The Arctic</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                Our first fundraising campaign dedicated to raising awareness
                about the Arctic through education, outreach, and merchandise.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full border border-[#b0dcea] bg-[#e6f6fb] px-3 py-1 text-xs font-medium text-[#007FA3]">
                  Active
                </span>
                <span className="text-sm font-medium text-[#1E3765] transition-colors group-hover:text-[#007FA3]">
                  View →
                </span>
              </div>
            </div>
          </Link>

          {/* Coming soon card 1 */}
          <div className="flex min-h-[220px] flex-col rounded-2xl border border-[#d0e8f2] bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-400">Ocean Health</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              A future campaign focused on ocean conservation, marine ecosystems,
              and reducing plastic pollution in our seas.
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full border border-[#d5e3ee] bg-[#f0f4fa] px-3 py-1 text-xs font-medium text-slate-400">
                Coming soon
              </span>
              <span className="text-sm text-slate-300">Stay tuned</span>
            </div>
          </div>

          {/* Coming soon card 2 */}
          <div className="flex min-h-[220px] flex-col rounded-2xl border border-[#d0e8f2] bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-400">Coastal Futures</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              An upcoming campaign championing coastal communities and habitats
              threatened by rising sea levels and climate change.
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full border border-[#d5e3ee] bg-[#f0f4fa] px-3 py-1 text-xs font-medium text-slate-400">
                Coming soon
              </span>
              <span className="text-sm text-slate-300">Stay tuned</span>
            </div>
          </div>

        </div>
        <br></br>
        <p className="italic mt-10 text-center text-sm text-[#007FA3]">
          More campaigns are in development. Stay tuned for future fundraising
          initiatives supporting our oceans and the Arctic!
        </p>
      </section>
    </main>
  );
}