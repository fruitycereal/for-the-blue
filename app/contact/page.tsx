import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#1E3765] px-8 pb-0 pt-16 text-center text-white">
        <span className="inline-block rounded-full border border-[#c4e4ef]/30 bg-[#c4e4ef]/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#c4e4ef]">
          Get in touch
        </span>
        <h1 className="mt-5 text-5xl font-bold">Contact</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#c4e4ef]">
          Have questions or want to collaborate? We'd love to hear from you.
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

      <section className="mx-auto max-w-2xl px-8 pb-16 space-y-6">

        {/* Email card */}
        <div className="rounded-2xl border border-[#d0e8f2] bg-white p-8 flex items-center gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e6f6fb] text-2xl">
            📧
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#007FA3]">Email us</p>
            
            <a href="mailto:fortheblue.eco@gmail.com"
              className="mt-1 block text-lg font-semibold text-[#1E3765] hover:text-[#007FA3] transition-colors"
            >
              fortheblue.eco@gmail.com
            </a>
            <p className="mt-1 text-sm text-gray-400">We usually respond within a few days.</p>
          </div>
        </div>

        {/* Socials */}
        <div className="rounded-2xl border border-[#d0e8f2] bg-white p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[#007FA3] mb-5">Follow us</p>
          <div className="space-y-3">
            
            <a href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-[#d0e8f2] px-4 py-3 hover:bg-[#e6f6fb] transition-colors"
            >
              <span className="text-xl">📸</span>
              <div>
                <p className="text-sm font-medium text-[#1E3765]">Instagram</p>
                <p className="text-xs text-gray-400">@yourhandle</p>
              </div>
            </a>
            {/* Add more socials here */}
          </div>
        </div>

        {/* Collaboration card */}
        {/* Collaboration card */}
        <div className="rounded-2xl bg-[#1E3765] p-8 text-white">
          <p className="text-xs font-medium uppercase tracking-widest text-[#c4e4ef]">Work with us</p>
          <h2 className="mt-2 text-2xl font-bold">Want to collaborate?</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#c4e4ef]">
            We're always open to partnering with schools, creators, conservation
            organizations, and anyone passionate about protecting our oceans and
            the Arctic. Whether it's a joint campaign, educational content, or
            something else entirely — let's talk.
          </p>
          
          <a href="mailto:fortheblue.eco@gmail.com?subject=Collaboration Inquiry"
            className="mt-6 inline-block rounded-full bg-[#007FA3] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a]"
          >
            Get in touch →
          </a>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-[#d0e8f2] bg-white p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[#007FA3] mb-6">
            Frequently asked questions
          </p>
          <div className="space-y-4">
            {[
              {
                q: "Are you a registered nonprofit?",
                a: "For the Blue is a youth-led nonprofit initiative. We are currently in the process of formalizing our organization.",
              },
              {
                q: "How do donations get used?",
                a: "Funds raised through our campaigns go directly to supporting real conservation organizations dedicated to protecting our oceans and the Arctic.",
              },
              {
                q: "Can I volunteer or get involved?",
                a: "Absolutely! Reach out to us via email and tell us a bit about yourself and how you'd like to help.",
              },
              {
                q: "How can I support without donating?",
                a: "Spread the word! Follow us on social media, share our campaigns, and help educate others about ocean and Arctic conservation.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl bg-[#F7FBFD] border border-[#d0e8f2] px-5 py-4">
                <p className="text-sm font-semibold text-[#1E3765]">{item.q}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}