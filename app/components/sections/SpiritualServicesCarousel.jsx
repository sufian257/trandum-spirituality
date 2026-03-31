
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Spiritual Health Coaching",
    image: "/images/service1.jpg",
  },
  {
    title: "Couples Mentoring",
    image: "/images/service2.jpg",
  },
  {
    title: "Ministry Transitions",
    image: "/images/service3.jpg",
  },
  {
    title: "International Ministry",
    image: "/images/service4.jpg",
  },
]

export default function ServicesCarousel() {
  const [index, setIndex] = useState(1)

  const prev = () =>
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))

  const next = () =>
    setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))

  return (
   <section className="py-16 md:py-20 lg:py-24 text-white bg-[#272A2D]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

    {/* Heading */}
    <h2
    style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
      className="font-condensed font-bold uppercase text-center mb-4
      text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
      leading-tight md:leading-[60px] lg:leading-[68px]
      tracking-[-0.02em]
      bg-[linear-gradient(259.62deg,#F7F1E7_60.64%,#1372B7_97.15%)]
      bg-clip-text text-transparent"
    >
      EXPLORE OUR SERVICES <br className="hidden sm:block" />
      FOR SPIRITUAL HEALTH
    </h2>

   <p
  style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }}
  className="max-w-2xl mx-auto text-center text-[#D2D2D2] mb-10 md:mb-14 text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] md:leading-[28px]"
>
  With over 40 years of real-world ministry experience, we provide trusted
  guidance rooted in biblical truth. Through our mentoring, coaching, and
  teaching services, we help you thrive in your faith.
</p>

    {/* Carousel */}
    <div className="relative flex items-center justify-center">

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-0 md:-left-12 z-20 bg-white text-black rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shadow"
      >
        ←
      </button>

      {/* Cards Container */}
    <div className="flex gap-4 md:gap-8 overflow-hidden justify-center">
  {services.map((service, i) => {
    const visible = i === index || i === (index + 1) % services.length

    return (
      <motion.div
        key={i}
        animate={{
          scale: visible ? 1 : 0.9,
          opacity: visible ? 1 : 0.6,
        }}
        className="
        relative
        flex-shrink-0
        w-[260px] 
        sm:w-[300px] 
        md:w-[340px] 
        lg:w-[361px]
        aspect-[361/489]
        rounded-[8px]
        overflow-hidden
        shadow-lg
        "
      >
        {/* Image */}
        <img
          src={service.image}
          className="absolute w-full h-full object-cover"
        />

        {/* Blue overlay */}
        {!visible && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(19,114,183,0.8)" }}
          />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
  <h3
    style={{
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    }}
    className="text-[24px] md:text-[36px] leading-[32px] md:leading-[44px] mb-4"
  >
    {service.title}
  </h3>

  <div className="flex justify-center">
    <button
      className="
      flex items-center justify-center
      w-[140px] h-[36px]
      bg-[#1DB575]
      rounded-[4px]
      px-[20px] py-[8px]
      text-white text-sm
      gap-2
      "
    >
      Learn More →
    </button>
  </div>
</div>
      </motion.div>
    )
  })}
</div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-0 md:-right-12 z-20 bg-white text-black rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shadow"
      >
        →
      </button>

    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-6 md:mt-8">
      {services.map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${
            i === index ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>

  </div>
</section>
  )
}