import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#1E3765] px-8 py-5 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="For the Blue Logo"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-2xl font-bold">For the Blue</h1>
      </div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/get-involved">Get Involved</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}