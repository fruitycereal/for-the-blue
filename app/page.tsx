"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaveDivider from "@/components/WaveDivider";
import {
  MegaphoneIcon,
  BookOpenIcon,
  HandshakeIcon,
  GlobeIcon,
  GraduationCapIcon,
  PlantHandIcon,
  UsersIcon,
  SparkleIcon,
  MailIcon,
  ArrowRightIcon,
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  LinkedinIcon,
} from "@/components/icons";

const IMPACT_ITEMS = [
  { icon: MegaphoneIcon, text: "Create awareness campaigns for oceans and the Arctic" },
  { icon: BookOpenIcon, text: "Design educational content and resources" },
  { icon: HandshakeIcon, text: "Raise funds through creative initiatives and merchandise" },
  { icon: GlobeIcon, text: "Support conservation organizations and environmental cause" },
];

const MISSION_PILLARS = [
  {
    icon: GraduationCapIcon,
    title: "Education First",
    text: "By sharing accessible and engaging educational content, we aim to inspire curiosity and informed action.",
  },
  {
    icon: PlantHandIcon,
    title: "Environmental Stewardship",
    text: "We are committed to protecting the natural world, with a focus on the oceans, the Arctic, and the ecosystems that sustain life on Earth.",
  },
  {
    icon: UsersIcon,
    title: "Community & Collaboration",
    text: "We believe positive change begins with people who are willing to learn, participate, and make a difference.",
  },
  {
    icon: SparkleIcon,
    title: "Hope Through Action",
    text: "We encourage individuals, organizations, and communities to work collectively toward shared environmental goals.",
  },
];

const GET_INVOLVED_CARDS = [
  {
    title: "Spread Awareness",
    text: "Share our campaigns and educational resources with friends, family, and your community.",
    cta: "Share Our Work",
    href: "https://linktr.ee/fortheblue.eco",
  },
  {
    title: "Support Our Campaigns",
    text: "Help us expand our impact by supporting fundraising initiatives and environmental projects.",
    cta: "View Campaigns",
    href: "/#campaigns",
  },
  {
    title: "Volunteer With Us",
    text: "Join our growing community and contribute your skills to future campaigns and events.",
    cta: "Sign Up to Volunteer",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfWqVce-S6WXtb1NMHAcvxevmFK0KHPS7lPn81jKkk-fB8ZQg/viewform",
  },
  {
    title: "Stay Connected",
    text: "Follow For the Blue on social media and stay updated on new campaigns, educational content, and opportunities to get involved.",
    cta: "Follow Along",
    href: "/#contact",
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Campaigns", href: "/#campaigns" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", href: "/#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FBFD]">
      <Navbar />
      <WaveDivider />

      {/* HERO */}
      <section id="home" className="scroll-mt-20 px-6 pb-20 pt-10 text-center sm:px-8 sm:pb-28">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-[#1E3765] sm:text-5xl">
          Protecting Our Blue Planet,
          <br />
          From Ocean to Arctic.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
          For the Blue empowers people to protect our oceans and the Arctic
          through education, creativity, technology, and community action.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#campaigns"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("campaigns")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="inline-block w-full rounded-full bg-[#007FA3] px-6 py-3 text-center text-white transition hover:bg-[#006a8a] sm:w-auto"
          >
            Explore Campaigns
          </a>

          <a
            href="#get-involved"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("get-involved")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="inline-block w-full rounded-full border border-[#007FA3] px-6 py-3 text-center text-[#007FA3] transition hover:bg-[#e6f6fb] sm:w-auto"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#D9D9D9] px-6 py-8 sm:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-3 text-center">
          
          <div>
            <p className="text-3xl font-bold text-[#1E3765] sm:text-4xl">
              200+
            </p>
            <p className="mt-1 text-sm font-medium text-[#1E3765]/80 sm:text-base">
              Students reached
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#1E3765] sm:text-4xl">
              $300+
            </p>
            <p className="mt-1 text-sm font-medium text-[#1E3765]/80 sm:text-base">
              Raised for conservation
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#1E3765] sm:text-4xl">
              35+
            </p>
            <p className="mt-1 text-sm font-medium text-[#1E3765]/80 sm:text-base">
              Volunteers & contributors
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT PHOTO BAND */}
      <section
        id="about"
        className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-cover bg-center px-6 py-20 text-center sm:min-h-[340px] sm:px-8"
        style={{ backgroundImage: "url('/actualpics/about.png')" }}
      >
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">About For The Blue</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#dceefa] sm:text-lg">
            A youth-led initiative focused on protecting oceans and the Arctic
            through education, creativity, and fundraising.
          </p>
        </div>
      </section>

      {/* WE ARE FOR THE BLUE */}
      <section className="bg-[#F7FBFD] px-6 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-bold text-[#1E3765] sm:text-4xl">We are For The Blue</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#1E3765]/90 sm:text-lg">
          For the Blue is a youth-led nonprofit initiative dedicated to
          raising awareness and support for the protection of our oceans and
          the Arctic. We focus on combining education, creativity, and
          fundraising to inspire real-world impact.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#F7FBFD] px-6 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <img
            src="actualpics/ourstoryimg.png"
            alt="Our story visual"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-sm"
          />

          <div>
            <h3 className="text-3xl font-bold text-[#1E3765] sm:text-4xl">Our Story</h3>
            <p className="mt-5 text-base font-medium text-[#1E3765]">Founded by Nunnaphat</p>
            <p className="mt-4 text-base leading-relaxed text-[#1E3765]/85">
              For the Blue was founded by Nunnaphat with the goal of empowering
              young people through environmental education and inspiring
              action to protect our oceans and the Arctic.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1E3765]/85">
              What began as a passion for environmental conservation has
              grown into an initiative dedicated to raising awareness,
              supporting meaningful campaigns, and encouraging communities to
              become part of the solution. Through education, advocacy, and
              collective action, For the Blue strives to make protecting our
              planet something everyone can be a part of.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE CREATE IMPACT */}
      <section className="bg-[#ECF1F6] px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-[#1E3765] sm:text-4xl">
            How We Create Impact
          </h2>

          <ul className="mt-12 space-y-8">
            {IMPACT_ITEMS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <Icon className="h-7 w-7 shrink-0 text-[#1E3765]" />
                <span className="text-base text-[#1E3765] sm:text-lg">{text}</span>
              </li>
            ))}
          </ul>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWqVce-S6WXtb1NMHAcvxevmFK0KHPS7lPn81jKkk-fB8ZQg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 block rounded-2xl bg-[#007FA3] px-6 py-8 text-center text-white transition hover:bg-[#006a8a] sm:px-10"
            >
              <h3 className="text-xl font-bold sm:text-2xl">
                Ready to make a difference?
              </h3>

              <p className="mt-2 text-sm text-white/90 sm:text-base">
                Join us in supporting ocean and Arctic. Every action counts.
              </p>
            </a>
          </div>
      </section>

      {/* OUR MISSION */}
      <section
        className="relative overflow-hidden bg-cover bg-center px-6 py-20 sm:px-12 sm:py-24"
        style={{ backgroundImage: "url('/actualpics/mission.png')" }}
      >
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Upper Section */}
          <h2 className="text-3xl font-bold text-[#071D42] drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] sm:text-4xl">
            Our Mission
          </h2>

          <div className="mx-auto mt-8 max-w-4xl bg-[#071D42]/80 px-6 py-8 text-center sm:px-12 sm:py-10">
            <p className="text-lg leading-relaxed text-[#FFE4A0] sm:text-xl">
              For The Blue is a youth-led nonprofit committed to supporting
              the protection of our oceans and the Arctic through
              fundraising, education, and community action. We connect people
              with meaningful campaigns that help make a lasting difference.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MISSION_PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center">
                {/* Badge Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F1C78A] shadow-sm">
                  <Icon className="h-10 w-10 text-[#071D42]" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#071D42]">
                  {title}
                </h3>

                {/* Text */}
                <p className="mt-3 text-sm leading-snug font-semibold text-[#071D42]/90 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CAMPAIGNS */}
      <section id="campaigns" className="scroll-mt-20 bg-[#1E3765] px-6 pb-16 pt-20 text-center sm:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Campaigns</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#c4e4ef] sm:text-base">
          Every campaign supports meaningful efforts to protect our oceans and
          the Arctic through fundraising, education, and community action.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <div className="rounded-xl border border-[#c4e4ef]/25 bg-[#c4e4ef]/10 px-8 py-3 text-center">
            <p className="text-2xl font-semibold text-white">1</p>
            <p className="mt-0.5 text-xs text-[#c4e4ef]">Active campaign</p>
          </div>
          <div className="rounded-xl border border-[#c4e4ef]/25 bg-[#c4e4ef]/10 px-8 py-3 text-center">
            <p className="text-2xl font-semibold text-white">2+</p>
            <p className="mt-0.5 text-xs text-[#c4e4ef]">Coming soon</p>
          </div>
        </div>
      </section>

      {/* CAMPAIGN CARDS */}
      <section className="bg-[#F7FBFD] px-6 pb-10 pt-4 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <Link href="/campaigns/for-the-arctic" className="group">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#007FA3] bg-white transition hover:shadow-lg">
              <div className="relative h-36 w-full">
                <Image
                  src="/actualpics/campaign1.png"
                  alt="Arctic sea ice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-[#1E3765]">For The Arctic</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "#596a8b" }}>
                  Our first fundraising campaign dedicated to raising
                  awareness about the Arctic through education, outreach, and
                  merchandise.
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full border border-[#b0dcea] bg-[#e6f6fb] px-5 py-1 text-xs font-medium text-[#007FA3]">
                    Active
                  </span>
                  <span className="text-sm font-medium text-[#007FA3]">View →</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#d0e8f2] bg-white">
            <div className="h-36 w-full bg-[#D9D9D9]" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-slate-400">For The Ocean</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                A future campaign focused on ocean conservation, marine
                ecosystems, and reducing plastic pollution in our seas.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full border border-[#d5e3ee] bg-[#f0f4fa] px-3 py-1 text-xs font-medium text-slate-400">
                  Coming soon
                </span>
                <span className="text-sm text-slate-300">Stay tuned</span>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#d0e8f2] bg-white">
            <div className="h-36 w-full bg-[#D9D9D9]" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-slate-400">Coastal Futures</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                An upcoming campaign championing coastal communities and
                habitats threatened by rising sea levels and climate change.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full border border-[#d5e3ee] bg-[#f0f4fa] px-3 py-1 text-xs font-medium text-slate-400">
                  Coming soon
                </span>
                <span className="text-sm text-slate-300">Stay tuned</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm italic text-[#007FA3]">
          More campaigns are in development. Stay tuned for future
          fundraising initiatives supporting our oceans and the Arctic!
        </p>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="scroll-mt-20 bg-[#F7FBFD] px-6 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-bold text-[#1E3765] sm:text-4xl">Get Involved</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
          Join us in supporting ocean and Arctic conservation through action,
          creativity, and awareness.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {GET_INVOLVED_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center rounded-2xl border border-[#e3ecf2] bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#1E3765]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{card.text}</p>
              <a
                href={card.href}
                target={
                  card.title === "Volunteer With Us" || card.title === "Spread Awareness"
                    ? "_blank"
                    : undefined
                }
                rel={
                  card.title === "Volunteer With Us" || card.title === "Spread Awareness"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-6 w-full rounded-full bg-[#007FA3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#006a8a]"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

{/* FOOTER */}
<footer
  id="contact"
  className="scroll-mt-20 bg-[#071D42] px-6 pt-16 text-white sm:px-8"
>
  <div className="mx-auto grid max-w-6xl gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">

    {/* BRAND */}
    <div>
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="For the Blue Logo"
          width={44}
          height={44}
        />
        <h3 className="text-xl font-bold">For The Blue</h3>
      </div>

      <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#c4e4ef]">
        Protecting our oceans and the Arctic through education,
        creativity, and community-driven action.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="text-base font-bold">Quick Links</h4>

      <ul className="mt-4 space-y-2.5">
        {QUICK_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#c4e4ef] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="text-base font-bold">Contacts</h4>

      <a
        href="mailto:fortheblue.eco@gmail.com"
        className="mt-4 flex items-center gap-2 text-sm text-[#c4e4ef] transition-colors hover:text-white"
      >
        <MailIcon className="h-5 w-5 shrink-0" />
        fortheblue.eco@gmail.com
      </a>
    </div>

    {/* SOCIALS */}
    <div>
      <h4 className="text-base font-bold">Follow Us</h4>

      <p className="mt-4 text-sm text-[#c4e4ef]">
        @fortheblue.eco
      </p>

      <div className="mt-4 flex gap-3">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/fortheblue.eco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1E3765] transition hover:bg-[#c4e4ef]"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/fortheblue.eco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1E3765] transition hover:bg-[#c4e4ef]"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@fortheblue.eco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1E3765] transition hover:bg-[#c4e4ef]"
        >
          <TiktokIcon className="h-5 w-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/fortheblue/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1E3765] transition hover:bg-[#c4e4ef]"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>

      </div>
    </div>
  </div>

  {/* DONATE */}
  <div id="donate" className="scroll-mt-20 flex justify-center pb-10">
    <a
      href="https://linktr.ee/fortheblue.eco"
      className="flex items-center gap-2 rounded-full bg-[#EFC13B] px-8 py-3 text-sm font-semibold text-[#1E3765] transition hover:bg-[#eabb6f]"
    >
      Donate Today
      <ArrowRightIcon className="h-4 w-4" />
    </a>
  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/15 py-6 text-center text-xs text-[#c4e4ef]">
    © 2026 For The Blue. All rights reserved.
  </div>
</footer>
</main>
);
}