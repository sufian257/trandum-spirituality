"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ variant = "light" }) {
  const [open, setOpen] = useState(false);

  const bgClass =
    variant === "transparent"
      ? "bg-transparent text-white"
      : "bg-[#FFFFFFF7] backdrop-blur-md text-black";

  return (
    <header className={`absolute top-0 left-0 w-full z-50 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Menu (Desktop) */}
    <nav
  style={{ fontFamily: "var(--font-roboto)" }}
  className="hidden md:flex items-center gap-6 text-[18px] leading-[26px] font-semibold"
>
  
  {/* Ministry Services Dropdown */}
  <div className="relative group">
    <Link href="#" className="hover:opacity-80 transition flex items-center gap-1">
      Ministry Services ▾
    </Link>

    <div
      className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition duration-200"
    >
      <Link
        href="/couple-mentoring"
        className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
      >
        Couple Mentoring
      </Link>
    </div>
  </div>

  <Link href="#" className="hover:opacity-80 transition">About ▾</Link>
  <Link href="#" className="hover:opacity-80 transition">Podcast</Link>
  <Link href="#" className="hover:opacity-80 transition">Book</Link>
  <Link href="#" className="hover:opacity-80 transition">Events</Link>

</nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-[2px] ${variant === "transparent" ? "bg-white" : "bg-black"}`}></span>
          <span className={`w-6 h-[2px] ${variant === "transparent" ? "bg-white" : "bg-black"}`}></span>
          <span className={`w-6 h-[2px] ${variant === "transparent" ? "bg-white" : "bg-black"}`}></span>
        </button>

        {/* Center Logo */}
       <div className="absolute left-[25%] md:left-[48%] lg:left-1/2 -translate-x-1/2">
 <Link href="/">
  <Image
    src={variant === "transparent" ? "/images/logo.png" : "/images/logo-white.png"}
    alt="Tandem Spirituality"
    width={188}
    height={66}
    className="w-[120px] sm:w-[150px] md:w-[188px] h-auto cursor-pointer"
    priority
  />
</Link>
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
        <div className="md:hidden bg-black/95 px-6 pb-6 text-white">
          <nav className="flex flex-col gap-4 mt-4">
            <Link href="#">Ministry Services</Link>
            <Link href="#">About</Link>
            <Link href="#">Podcast</Link>
            <Link href="#">Book</Link>
            <Link href="#">Events</Link>
          </nav>
        </div>
      )}
    </header>
  );
}