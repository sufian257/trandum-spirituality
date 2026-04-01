import Image from "next/image";

export default function JourneySection() {
  return (
<section className="relative bg-[#174d74] py-20 lg:min-h-[991px] overflow-hidden">



  {/* Bottom Right Gradient */}
  <div className="absolute -bottom-[120px] -right-[120px] w-[400px] h-[400px] 
  bg-gradient-to-tl from-[#1DB575] via-[#3ad1b0] to-transparent 
  blur-[140px] opacity-70"></div>

  {/* Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2
        style={{ fontFamily: "var(--font-roboto-condensed)" }}
        className="uppercase font-bold
        text-3xl md:text-[60px]
        leading-tight md:leading-[60px]
        bg-[linear-gradient(255.02deg,#FFFFFF_64.69%,#1DB575_108.2%)]
        bg-clip-text text-transparent"
      >
        A JOURNEY TOWARD HEALING <br />
        AND RENEWAL IS POSSIBLE.
      </h2>
    </div>

    {/* Image + Card */}
    <div className="relative flex flex-col lg:flex-row items-start">

      {/* Image */}
      <div className="relative w-full lg:w-[863px] h-[350px] md:h-[450px] lg:h-[575px] overflow-hidden lg:rounded-r-[8px]">
        <Image
          src="/images/happy-couple.jpg"
          alt="Couple reconnecting"
          fill
          className="object-cover"
        />
      </div>

      {/* Card */}
      <div
        className="
        bg-white shadow-2xl
        w-full lg:w-[457px]
        lg:h-[493px]
        px-[32px] py-[46px]
        rounded-[8px]
        flex flex-col gap-[8px]
        mt-8 lg:mt-0
        lg:absolute lg:right-[80px] lg:-bottom-[60px]
      "
      >
        <h3
          style={{ fontFamily: "var(--font-roboto-condensed)" }}
          className="font-bold text-[#202020]
          text-2xl md:text-[36px]
          leading-snug md:leading-[44px]
          tracking-[-0.02em]"
        >
          Reconnect and Move Forward Together in Faith
        </h3>

        <p
 style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }}
          className="mt-2 text-black font-normal
          text-base md:text-[18px]
          leading-6 md:leading-[28px]"
        >
       You can have both a healthy ministry and a healthy marriage. With guidance shaped by biblical truth and decades of experience, you will uncover ways to grow in unity and with purpose. Reconnect, communicate with grace, and navigate the challenges of faith together. Let us guide you toward renewed connection and lasting strength.
        </p>

        <button
          className="mt-4 w-[199px] bg-[#1DB575] hover:bg-[#169a63]
          text-white px-[20px] py-[16px]
          rounded-[4px]
          flex items-center justify-center gap-[8px]
          transition"
        >
          Begin Your Journey
          <span>›</span>
        </button>

      </div>

    </div>

  </div>

</section>
  );
}