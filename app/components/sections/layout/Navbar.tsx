"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Menu (Desktop) */}
<nav
  style={{ fontFamily: "var(--font-roboto)" }}
  className="hidden md:flex items-center gap-6 text-[18px] leading-[26px] font-semibold"
>
  <Link href="#" className="hover:opacity-80 transition">Ministry Services ▾</Link>
  <Link href="#" className="hover:opacity-80 transition">About ▾</Link>
  <Link href="#" className="hover:opacity-80 transition">Podcast</Link>
  <Link href="#" className="hover:opacity-80 transition">Book</Link>
  <Link href="#" className="hover:opacity-80 transition">Events</Link>
</nav>
        {/* Mobile Hamburger (Left) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        {/* Center Logo */}
    <div className="absolute left-[25%] md:left-[48%] lg:left-1/2 -translate-x-1/2">
  <Image
    src="/images/logo.png"
    alt="Logo"
    width={188}
    height={66}
    className="w-[120px] sm:w-[150px] md:w-[188px] h-auto"
    priority
  />
</div>
        {/* Right Buttons */}
       <div className="hidden md:flex gap-3">
<Link
  href="#"
  style={{ fontFamily: "var(--font-roboto)" }}
  className="inline-flex items-center justify-center 
             bg-[#1372B7] hover:bg-[#0f5ea0] 
             text-white px-4 py-2 rounded 
             font-medium transition"
>
  Begin Your Journey →
</Link>

  <Link
  href="#"
  className="bg-[#1DB575] hover:bg-[#169a63] text-white px-4 py-2 rounded transition"
>
  Give →
</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-6">
          <nav className="flex flex-col gap-4 mt-4">
            <Link href="#">Ministry Services</Link>
            <Link href="#">About</Link>
            <Link href="#">Podcast</Link>
            <Link href="#">Book</Link>
            <Link href="#">Events</Link>
          </nav>

          <div className="hidden md:flex gap-3">
  <Link
    href="#"
    className="bg-blue-600 px-4 py-2 rounded-md"
  >
    Begin →
  </Link>

  <Link
    href="#"
    className="bg-green-500 px-4 py-2 rounded-md"
  >
    Give →
  </Link>
</div>
        </div>
      )}
    </header>
  );
} 