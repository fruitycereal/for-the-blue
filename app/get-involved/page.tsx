import Navbar from "@/components/Navbar";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      {/* Hero */}
      <section className="bg-[#1E3765] px-8 py-20 text-center text-white">
        <h1 className="text-5xl font-bold">Get Involved</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg">
          Join us in supporting ocean and Arctic conservation through action,
          creativity, and awareness.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-8 py-16 space-y-10">

        <div>
          <h2 className="text-3xl font-bold text-[#1E3765]">💙 Support the Mission</h2>
          <p className="mt-4 text-lg text-gray-700 leading-8">
            Follow our campaigns, share our message, and help spread awareness
            about the Arctic and ocean conservation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1E3765]">🛍️ Support Campaigns</h2>
          <p className="mt-4 text-lg text-gray-700 leading-8">
            Participate in fundraising efforts like For the Arctic. Future
            campaigns may include merchandise, events, and creative projects.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1E3765]">📢 Spread Awareness</h2>
          <p className="mt-4 text-lg text-gray-700 leading-8">
            Share our work with friends, schools, and communities to help more
            people understand why the oceans and Arctic matter.
          </p>
        </div>

      </section>
    </main>
  );
}