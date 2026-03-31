"use client";

import Image from "next/image";

export default function Hero() {
  return (
<section className="relative w-full py-20 md:py-28 lg:py-36 flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/hero.jpg"
      alt="Hero Background"
      fill
      priority
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 text-white mt-10 md:mt-16 lg:mt-20">
<h1
  style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
  className="
  font-bold uppercase
  text-4xl sm:text-5xl md:text-7xl lg:text-[120px]
  leading-tight md:leading-[90px] lg:leading-[110px]
  mb-6
  "
>
  STRENGTHEN <br />
  YOUR SPIRITUAL <br />
  HEALTH
</h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
      Overcome your personal struggles, lead with purpose, and live a joyful
      life through Christ.
    </p>
<button
  className="
  bg-[#1DB575] hover:bg-[#169e64] text-white
  px-5 py-3 md:px-6 md:py-4
  rounded
  font-medium transition
  flex items-center justify-center gap-2
  text-sm md:text-base
  w-full sm:w-auto
  "
>
  Begin Your Journey →
</button>
  </div>
</section>
  );
}