"use client";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Creating a Safe Place for Your Story to Be Heard",
    text:
      "You’re committed to your faith, but lately it feels hollow. You show up, serve, smile, but inside you feel distant. Maybe you’ve tried to talk about it, but you were worried what others might think. The Church hasn’t felt like a safe place to be honest. So you bury your questions, silence your pain, and carry on. That quiet struggle? It’s slowly pulling you away. Don’t let it. We are here to help. Engage with us in a safe space where you can be heard without judgment and uncover what’s holding you back.",
    image: "/images/section1.jpg",
    align: "right",
  },
  {
    title: "Guiding Your Path to Spiritual Renewal",
    text:
      "Your struggles are real, and your feelings are valid. Yet, there is so much hope for your future and so many people counting on you. A path back to Christ will restore that hope, and we will be your guide. With over 42 years of spiritual leadership, we help you align your deepest desires with God’s purpose for your life. Let us guide you toward His healing, where you will find renewed strength in Christ.",
    image: "/images/section2.jpg",
    align: "left",
  },
  {
    title: "Meeting You Exactly Where You Are",
    text:
      "We start right where you are with no pressure. Our approach is deeply personal. This is a ministry built on relationships, and we offer our authentic selves. We’re here to listen with curiosity, not judgment. Above all, everything we do is guided by the infallible Word of God. This is the path we guide you on as you find your way forward.",
    image: "/images/section3.jpg",
    align: "right",
  },
];

export default function FeatureSections() {
  return (
<section className="bg-[#cfc8bd] py-20 lg:py-30 space-y-20 lg:space-y-32">
  {data.map((item, i) => {
    const isEven = i % 2 === 0;

    return (
      <div
        key={i}
        className="max-w-[1200px] mx-auto px-6 relative flex flex-col lg:flex-row items-center"
      >
        {/* IMAGE */}
        <div
          className={`w-full lg:w-[863px] ${
            !isEven ? "lg:ml-auto" : ""
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={863}
            height={575}
            className="w-full h-auto lg:h-[575px] object-cover rounded-[8px]"
          />
        </div>

        {/* CARD */}
        <div
          className={`
            w-full max-w-[457px]
            lg:w-[457px] lg:h-[575px]
            bg-[#f5f5f5]
            p-8 lg:p-[46px_32px]
            rounded-[8px]
            shadow-[0px_5px_20px_5px_rgba(0,0,0,0.1)]
            flex flex-col gap-4
            justify-center
            mt-6 lg:mt-0
            
            lg:absolute lg:top-[82px]
            ${isEven ? "lg:right-[80px]" : "lg:left-[80px]"}
          `}
        >
         <h3 style={{ fontFamily: "'Roboto Condensed', sans-serif" }} className="font-condensed font-bold text-[28px] lg:text-[36px] leading-[34px] lg:leading-[44px] tracking-[-0.02em] text-black">
  {item.title}
</h3>
<p
  style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }}
  className="text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#000000]"
>
  {item.text}
</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2
            bg-[#1DB575] hover:bg-[#169a63]
            text-white px-6 py-3 rounded-md
            font-semibold transition w-fit"
          >
            Begin Your Journey →
          </Link>
        </div>
      </div>
    );
  })}
</section>
  );
}