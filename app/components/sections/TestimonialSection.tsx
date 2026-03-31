"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      text: "I thought that they were relatable and felt like they understood what life is like for pastors and spouses.",
    },
    {
      text: "The pressures on leaders in the church today are immense, and the challenges they face can push even the best leaders to the brink. Jimmy and Suzi Kallam know firsthand the pressures and challenges of ministry. They have a deep love for the church and a heart for leaders, which led them to form Tandem Spirituality in order to come alongside leaders to help them navigate the whitewater of life in ministry today. I can’t think of anyone better to walk alongside leaders and equip them for ministry!”",
      author: "Kevin Kompelien, EFCA President Emeritus",
    },
    {
      text: "Humble. Real. Engaging. I enjoyed having both of them speak each session. It was encouraging to hear how God had brought them through many challenges.",
    },
  ];

  return (
    <section className="bg-[#DED9D0] py-24 text-center">

      {/* TITLE */}
<h2 style={{ fontFamily: "'Roboto Condensed', sans-serif" }} className="font-condensed font-bold uppercase 
text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
leading-tight md:leading-[60px] lg:leading-[68px]
tracking-[-0.02em] text-center mb-10 md:mb-16
bg-[linear-gradient(90.45deg,_#272A2D_59.83%,_#1372B7_88.36%)] 
bg-clip-text text-transparent">

  <span className="block">THE VOICES OF HEALING</span>
  <span className="block">AND RENEWAL</span>

</h2> 
      <div className="max-w-[1200px] mx-auto px-6">

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md text-left h-full">
  <p   style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }} className="font-miller-text text-[16px] leading-[24px] tracking-[0em] text-[#212529] mb-6">
  “{item.text}”
</p>
                {item.author && (
                  <p style={{ fontFamily: "'Roboto Condensed', sans-serif" }} className="font-condensed font-bold text-[16px] leading-[28px] tracking-[0] text-[#212529]">
  {item.author}
</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DOTS SPACE */}
        <div className="mt-8"></div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            ref={prevRef}
            className="w-14 h-14 rounded-full bg-[#2b2f33] text-white flex items-center justify-center text-xl hover:bg-black transition"
          >
            ←
          </button>

          <button
            ref={nextRef}
            className="w-14 h-14 rounded-full bg-[#2b2f33] text-white flex items-center justify-center text-xl hover:bg-black transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}