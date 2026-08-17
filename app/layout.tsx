import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "For The Blue | Ocean & Arctic Conservation",
  description:
    "For The Blue is a youth-led nonprofit supporting ocean and Arctic conservation through fundraising, education, and community action.",
  keywords: [
    "For The Blue",
    "ocean conservation",
    "Arctic conservation",
    "youth climate action",
    "ocean nonprofit",
    "Arctic conservation nonprofit",
    "environmental conservation",
    "youthled"
  ],
  verification: {
    google: "AY4jXAArBYHrq0tCI9qZzKhnYmVyp59r0rlzJzMw6xk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
