import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}