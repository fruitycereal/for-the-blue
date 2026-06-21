import Link from "next/link";

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      {/* Header */}
      <section className="bg-[#1E3765] px-8 py-20 text-center text-white">
        <h1 className="text-5xl font-bold">Our Campaigns</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg">
          Every campaign helps support meaningful efforts to protect our oceans
          and the Arctic through fundraising, education, and community action.
        </p>
      </section>

      {/* Campaign Cards */}
      <section className="mx-auto max-w-6xl px-8 py-16">
          <div className="flex justify-center py-16">
            <Link href="/campaigns/for-the-arctic">
              <div className="h-[420px] w-[300px] rounded-3xl bg-white p-6 shadow-lg transition hover:scale-[1.02] hover:shadow-xl">

                <h2 className="text-2xl font-bold text-[#1E3765]">
                  ❄️ For The Arctic
                </h2>

                <p className="mt-4 text-gray-600">
                  Our first fundraising campaign dedicated to raising awareness about the
                  Arctic through education, outreach, and merchandise.
                </p>

                <p className="mt-6 font-semibold text-[#007FA3]">
                  🟢 Active Campaign
                </p>

                <p className="mt-8 text-[#1E3765] font-medium">
                  Learn more →
                </p>
              </div>
            </Link>
          </div>

        <p className="mt-8 text-center italic text-[#007FA3]">
          More campaigns are in development. Stay tuned for future fundraising
          initiatives supporting our oceans and the Arctic!
        </p>
      </section>
    </main>
  );
}